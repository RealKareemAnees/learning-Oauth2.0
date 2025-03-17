import { NextResponse } from "next/server";

export function POST() {
  const response = NextResponse.json({ message: "Logged out" });

  // Remove the token cookie by setting an expired date
  response.cookies.set("token", "", {
    expires: new Date(0), // Expire immediately
    httpOnly: true,
    secure: true,
  });

  return response;
}
