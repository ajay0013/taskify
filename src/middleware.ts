import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

//TODO: fix routes after pages are done
// const PUBLIC_PATHS = ["/login", "/signup"];
const PUBLIC_PATHS = ["/", "/login", "/signup", "/dashboard"];

export async function middleware(req: NextRequest) {
  const secret = process.env.NEXTAUTH_SECRET;

  ////////    ye dono bache h   ////////
  //   const url = new URL(req.url);  //
  //   const path = url.pathname;     //
  //////////////////////////////////////

  const token = await getToken({ req, secret });

  // Redirect to dashboard if the user is authenticated and trying to access public paths
  if (token && PUBLIC_PATHS.includes(req.nextUrl.pathname)) {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  // Redirect to login if the user is unauthenticated and trying to access a protected path
  if (!token && !PUBLIC_PATHS.includes(req.nextUrl.pathname)) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // Handle session expiration
  if (token && token.exp && token.exp * 1000 < Date.now()) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // If none of the conditions are met, allow the request to proceed
  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/dashboard/:path*", "/login", "/signup"],
};
