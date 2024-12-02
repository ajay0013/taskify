import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { db } from "@db";
import { users } from "db/schema";
import { saltAndHashPassword } from "@lib/server/auth";
import { or, eq } from "drizzle-orm";

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();

    const { username, email, password } = body;

    if (!username || !email || !password) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const existingUser = await db
      .select()
      .from(users)
      .where(or(eq(users.username, username), eq(users.email, email)))
      .limit(1);

    if (existingUser.length > 0) {
      const isUsernameTaken = existingUser[0].username === username;
      const errorMessage = isUsernameTaken
        ? "Username already taken."
        : "Email already registered.";
      return NextResponse.json({ error: errorMessage }, { status: 409 });
    }

    const passwordHash = await saltAndHashPassword(password);

    await db.insert(users).values({
      username,
      email,
      passwordHash,
    });

    return NextResponse.json({ success: true }, { status: 201 });
  } catch (error) {
    console.error("Signup error:", error);

    //invalid inputs
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.errors }, { status: 400 });
    }

    // other spicific errors
    if (error instanceof SyntaxError) {
      return NextResponse.json(
        { error: "Invalid JSON payload" },
        { status: 400 }
      );
    }

    // generic error
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
};
