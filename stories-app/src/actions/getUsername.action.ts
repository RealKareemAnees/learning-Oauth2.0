"use server";

import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

const SECRET = "your_jwt_secret";

export async function getUserName(): Promise<string> {
  const token = (await cookies()).get("token")?.value;

  console.log(token);

  if (!token) return "Guest";

  try {
    const decoded = jwt.verify(token, SECRET) as { name: string };
    return decoded.name;
  } catch {
    return "Guest";
  }
}
