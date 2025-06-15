"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const navLinks = [
  { href: "/login", label: "Login" },
  { href: "/register", label: "Register" },
  { href: "/forgot-password", label: "Forgot Password" },
];

export default function RootLoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const [input, setInput] = useState("");

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <nav className="flex justify-center space-x-4 mb-8">
          {navLinks.map((link) => {
            const isActiveLink = pathname === link.href || (pathname.startsWith(link.href) && link.href !== "/");
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm ${isActiveLink ? "font-bold text-white" : "text-gray-500"} hover:text-gray-900 `}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
        <main className="w-6xl mx-auto py-8 h-[100dvh]">
          <div className="">
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
          </div>
          {children}
        </main>
        <footer>
          <div className="flex items-center justify-center p-4 bg-slate-950 ">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              © 2023 My Next.js App. All rights reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
