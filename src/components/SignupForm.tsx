// TODO: add Github and Google providers

"use client";

import Link from "next/link";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupSchema, SignupFormValues } from "lib/zod";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignupForm() {
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const methods = useForm<SignupFormValues>({
    resolver: zodResolver(signupSchema),
    mode: "onBlur", // Validate on blur
  });

  const {
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit = async (data: SignupFormValues) => {
    setLoading(true);

    try {
      const API_BASE_URL = process.env.NEXT_PUBLIC_BASE_API_URL!;
      const res = await fetch(`${API_BASE_URL}/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          username: data.username,
          password: data.password,
          email: data.email,
        }),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.message || "Error in signup - SgnupForm.tsx");
      }

      console.log("Signup successful");
      // isko baad enter OTP m change karna h
      router.push("/dashboard");

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.error(error.message || "Something went wrong.");
      console.error("Signup error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className="signup-form">
        <h2>Sign Up</h2>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            {...methods.register("username")}
            className={errors.username ? "error" : ""}
          />
          {errors.username && <p>{errors.username.message}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            {...methods.register("email")}
            className={errors.email ? "error" : ""}
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            {...methods.register("password")}
            className={errors.password ? "error" : ""}
          />
          {errors.password && <p>{errors.password.message}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            {...methods.register("confirmPassword")}
            className={errors.confirmPassword ? "error" : ""}
          />
          {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
        </div>

        <button type="submit" disabled={loading}>
          {loading ? "Signing up..." : "Sign Up"}
        </button>

        <p>
          Already have an account? <Link href="/login">Login here</Link>.
        </p>
      </form>
    </FormProvider>
  );
}
