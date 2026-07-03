import React from 'react';
import { ShieldCheck } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <ShieldCheck className="h-6 w-6 text-emerald-500" />
            <span className="font-bold text-lg text-white">FDA FRMS</span>
          </div>
          <p className="text-sm text-slate-400 max-w-sm mb-6">
            The official national regulatory technology platform ensuring the safety and quality of food, drugs, cosmetics, and medical devices in Ghana.
          </p>
        </div>
        
        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="#home" className="hover:text-emerald-400 transition-colors">Home</Link></li>
            <li><Link href="#verify" className="hover:text-emerald-400 transition-colors">Verify Certificate</Link></li>
            <li><Link href="#resources" className="hover:text-emerald-400 transition-colors">Guidelines & Policies</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Contact</h4>
          <ul className="space-y-2 text-sm text-slate-400">
            <li>Head Office, Accra, Ghana</li>
            <li>support@fda.gov.gh</li>
            <li>+233 (0) 555 000 000</li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-slate-800 text-sm text-center text-slate-500">
        &copy; {new Date().getFullYear()} Food and Drugs Authority Ghana. All rights reserved.
      </div>
    </footer>
  );
}