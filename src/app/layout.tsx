import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap"
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap"
});

export const metadata: Metadata = {
  title: "MyProject - Modern Web Experience",
  description: "A beautiful, modern web application with stunning visuals and smooth animations",
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#0f0f23",
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`
          ${geistSans.variable} 
          ${geistMono.variable} 
          antialiased 
          bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900
          text-white 
          overflow-x-hidden
          selection:bg-purple-500/30
          selection:text-purple-100
        `}
      >
        {/* Animated background particles */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]" />
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-purple-400 rounded-full animate-pulse opacity-60" />
          <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-blue-400 rounded-full animate-ping opacity-40" />
          <div className="absolute top-1/2 left-3/4 w-3 h-3 bg-indigo-400 rounded-full animate-bounce opacity-30" />
        </div>

        <Navbar />

        <main className="relative z-10">
          {children}
        </main>

        {/* Footer glow effect */}
        <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
      </body>
    </html>
  );
}