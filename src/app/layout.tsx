import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navber";
import Footer from "@/components/Footer";
import PrelineScriptWrapper from '@/components/PrelineScriptWrapper';

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FDA FRMS | Ghana Food & Drugs Authority",
  description: "National Regulatory Technology Platform",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-slate-50">
        {/* Navbar & Footer only appear on non-auth pages */}
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <PrelineScriptWrapper />
      </body>
    </html>
  );
}