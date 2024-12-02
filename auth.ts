import NextAuth, { User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { ZodError } from "zod";
import { comparePasswords } from "@lib/server/auth";
import { loginSchema } from "./src/lib/zod";
import { getUserFromDb } from "app/api/users/route";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        try {
          const { username, password } = await loginSchema.parseAsync(
            credentials
          );

          const user = await getUserFromDb(username);

          if (!user) {
            console.warn(`Login attempt with invalid username: ${username}`);
            return null;
          }

          const isPasswordValid = await comparePasswords(
            password,
            user.passwordHash!
          );

          if (!isPasswordValid) {
            return null;
          }

          const userSession: User = {
            id: user.id,
            name: user.username,
            email: user.email,
            avatar: "/avatars/default-avatar.jpg",
          };
          return userSession;
        } catch (error) {
          if (error instanceof ZodError) {
            return null;
          }

          console.error("Error during authorization:", error);
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: "/login",
    error: "/error",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        return {
          ...token,
          id: user.id,
          email: user.email,
          name: user.name,
        };
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user = {
          ...session.user,
          id: String(token.id),
          email: token.email as string,
          name: token.name as string,
        };
      }
      return session;
    },
  },
});
