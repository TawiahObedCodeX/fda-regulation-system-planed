"use client";
import Link from 'next/link';
import { ShieldCheck, ArrowLeft } from 'lucide-react';

export default function LoginPage() {
  return (
    <div className="w-full max-w-md">
      <Link href="/" className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 mb-8">
        <ArrowLeft className="w-4 h-4" /> Back to Home
      </Link>

      <div className="bg-white rounded-3xl shadow-2xl p-10">
        <div className="text-center mb-10">
          <ShieldCheck className="w-16 h-16 text-emerald-600 mx-auto mb-4" />
          <h1 className="text-3xl font-bold">Sign In</h1>
          <p className="text-slate-600 mt-2">Access your FDA FRMS dashboard</p>
        </div>

        <form className="space-y-6">
          <input type="text" placeholder="Email or FDA ID" className="w-full px-5 py-4 border border-slate-200 rounded-2xl focus:border-emerald-500 outline-none" />
          <input type="password" placeholder="Password" className="w-full px-5 py-4 border border-slate-200 rounded-2xl focus:border-emerald-500 outline-none" />
          
          <button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-4 rounded-2xl font-semibold">
            Sign In
          </button>
        </form>

        <p className="text-center mt-6 text-sm">
          New user? <Link href="/register" className="text-emerald-600 font-medium">Create account</Link>
        </p>
      </div>
    </div>
  );
}