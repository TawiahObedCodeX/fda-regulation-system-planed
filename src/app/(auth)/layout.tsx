// app/(auth)/layout.tsx
// This layout is used ONLY for /login and /register
// It completely replaces the root layout for these routes

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FDA FRMS - Login / Register",
};

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-4">
      {children}
    </div>
  );
}