import { getUserName } from "@/actions/getUsername.action";
import LogoutButton from "@/components/logout/Logout";
import { handleLogout } from "@/lib/logout.function";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Link href={"/"}>home</Link>
        <br />
        <Link href={"/login"}>login</Link>
        <br />
        <LogoutButton />

        <br />
        {children}
      </body>
    </html>
  );
}
