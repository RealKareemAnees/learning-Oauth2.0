import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

const users = [{ name: "Alice" }, { name: "Bob" }, { name: "Charlie" }];
const secret = "your_jwt_secret";

export async function POST(request: Request) {
  const { name } = await request.json();

  const user = users.find((user) => user.name === name);
  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  const token = jwt.sign({ name: user.name }, secret, { expiresIn: "1h" });

  const response = NextResponse.json({ message: "Authenticated" });
  response.cookies.set("token", token, { httpOnly: true, secure: true });

  return response;
}
