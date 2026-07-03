"use client";
import React, { useState } from 'react';
import { ShieldCheck, Menu, X } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="#home" className="flex items-center gap-2">
            <ShieldCheck className="h-8 w-8 text-emerald-600" />
            <span className="font-bold text-xl tracking-tight text-slate-900">
              FDA <span className="text-emerald-600">FRMS</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8">
            <Link href="#workflow" className="text-slate-600 hover:text-emerald-600 font-medium transition-colors">Workflow</Link>
            <Link href="#verify" className="text-slate-600 hover:text-emerald-600 font-medium transition-colors">Verify Product</Link>
            <Link href="#track" className="text-slate-600 hover:text-emerald-600 font-medium transition-colors">Track Application</Link>
            <Link href="#resources" className="text-slate-600 hover:text-emerald-600 font-medium transition-colors">Resources</Link>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex space-x-4">
            <Link href="/login" className="text-slate-700 font-medium hover:text-slate-900 px-4 py-2 flex items-center">
              Login
            </Link>
            <Link href="/register" className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-lg font-medium transition-all shadow-md hover:shadow-lg flex items-center">
              Register Portal
            </Link>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-4 space-y-2">
          <Link href="#workflow" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-slate-600 hover:text-emerald-600 font-medium">Workflow</Link>
          <Link href="#verify" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-slate-600 hover:text-emerald-600 font-medium">Verify Product</Link>
          <Link href="#track" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-slate-600 hover:text-emerald-600 font-medium">Track</Link>
          <hr className="my-2 border-slate-100" />
          <Link href="/login" className="block px-3 py-2 text-slate-700 font-medium">Login</Link>
          <Link href="/register" className="block px-3 py-2 text-emerald-600 font-medium">Register Portal</Link>
        </div>
      )}
    </nav>
  );
}