import type { Metadata } from "next";
import Link from "next/link";
// (icons are used only inside ClientFooter now)
import ClientFooter from "./ui/ClientFooter";
import { LangProvider } from "./providers";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Edvise AI – Smart Education Counselling",
  description:
    "AI-powered guidance for rural students: government colleges, schemes, scholarships, and career roadmaps.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-dvh animated-bg`}
      >
        <LangProvider>
        <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:glass">
          <nav className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
            <Link href="/" className="font-semibold text-lg tracking-wide">Edvise AI</Link>
            <div className="flex items-center gap-3 md:gap-4 text-sm">
              <Link href="/browse" className="hover:underline">Browse</Link>
              <Link href="/dashboard" className="hover:underline">Dashboard</Link>
              <Link href="/counselling" className="glass rounded-lg px-3 py-1.5">Start Counselling</Link>
              <Link href="/login" className="hidden sm:inline hover:underline">Log in</Link>
              <Link href="/signup" className="glass rounded-lg px-3 py-1.5">Sign up</Link>
              <select aria-label="Language" className="bg-transparent border border-white/15 rounded-md px-2 py-1 text-xs">
                <option className="text-black" value="en">EN</option>
                <option className="text-black" value="hi">HI</option>
              </select>
            </div>
          </nav>
        </header>
        <div className="relative z-10">{children}</div>
        <ClientFooter />
        </LangProvider>
      </body>
    </html>
  );
}
