//TODO: in case os session timeout , redirect person back o page they came from, instead to dashboard

"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import { LoginFormValues, loginSchema } from "lib/zod";

import { useState } from "react";
// import { toast } from "react-hot-toast";

export default function LoginForm() {
  const router = useRouter();

  const [loading, setLoading] = useState(false); //to update UI

  const methods = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    mode: "onBlur", // onChange(jab input change hongi), onBlur(jab input unfocus hoga), onSubmit(jab form submit hoga) - tab tab zod validation and ?errors dikhengi
  });

  const { handleSubmit } = methods; //to access methods

  const handleFormSubmit = async (data: LoginFormValues) => {
    setLoading(true);

    try {
      const res = await signIn("credentials", {
        redirect: false,
        username: data.username,
        password: data.password,
      });

      if (res?.error) {
        throw new Error(res.error);
      }

      if (res?.ok) {
        console.log("Login successful");
        router.push("/dashboard");
      }

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      if (error instanceof Error) {
        console.error(error.message || "Login failed - LoginForm.tsx");
      } else {
        console.error("Unexpected error occured - LoginForm.tsx");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <div>
          <label htmlFor="username">Username:</label>
          <input id="username" {...methods.register("username")} />
          {methods.formState.errors.username && (
            <p>{methods.formState.errors.username.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            type="password"
            {...methods.register("password")}
          />
          {methods.formState.errors.password && (
            <p>{methods.formState.errors.password.message}</p>
          )}
        </div>

        <button type="submit" disabled={loading}>
          {loading ? "Loading..." : "Login"}
        </button>

        <p>
          Don&apos;t have an account? <Link href="/signup">Register here</Link>
        </p>
      </form>
    </FormProvider>
  );
}
