"use client";
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ShieldCheck, FileText, Search, ArrowRight, Activity, BookOpen, Users, Award, Clock, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import ThreeDScene from '@/components/ThreeDScene';

export default function FRMSHomePage() {
  const { scrollYProgress } = useScroll();

  // Parallax values for enhanced scroll effects
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.7]);

  return (
    <div className="bg-slate-50 text-slate-900 overflow-x-hidden">
      {/* HERO SECTION - Enhanced with smooth animations */}
      <section id="home" className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://i.pinimg.com/webp/1200x/ae/8d/3d/ae8d3da251fe1d7ead2f4dd062d625c7.webp" 
            alt="FDA Ghana Regulatory Technology" 
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/60 to-slate-900/90" />
        </div>

        <motion.div 
          style={{ opacity: heroOpacity }}
          className="relative z-10 max-w-5xl mx-auto px-6 text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <span className="inline-block px-4 py-1.5 bg-emerald-500/10 text-emerald-300 rounded-full text-sm font-medium mb-6 border border-emerald-500/30 backdrop-blur-sm">
              Food and Drugs Authority Ghana
            </span>
            
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-white mb-6 leading-none">
              Safeguarding Ghana&apos;s Health<br /> 
              with <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-300 bg-clip-text text-transparent">Digital Excellence</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-200 max-w-3xl mx-auto mb-10 font-light leading-relaxed">
              The official G-FIRMS powered platform for seamless product registration, 
              real-time application tracking, and public verification of FDA-approved products.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                href="/register" 
                className="group bg-emerald-600 hover:bg-emerald-500 text-white px-10 py-4 rounded-2xl text-lg font-semibold flex items-center justify-center gap-3 transition-all active:scale-[0.985] shadow-xl shadow-emerald-600/30"
              >
                Begin Registration 
                <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              
              <Link 
                href="#verify" 
                className="border border-white/60 hover:bg-white/10 hover:border-white/80 text-white px-10 py-4 rounded-2xl text-lg font-medium backdrop-blur-md transition-all"
              >
                Verify a Product
              </Link>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/70 flex flex-col items-center gap-1 text-sm"
          animate={{ y: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
        >
          Scroll to explore
          <ArrowRight className="rotate-90 w-4 h-4" />
        </motion.div>
      </section>

      {/* 3D INTERACTIVE SECTION - Visible only on large screens (laptop+) */}
      <section className="hidden lg:block py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium mb-4">
              <Activity className="w-4 h-4" /> Interactive Experience
            </div>
            <h2 className="text-4xl font-bold tracking-tight mb-3">Immersive Regulatory Ecosystem</h2>
            <p className="text-slate-600 max-w-md mx-auto text-lg">
              Drag, rotate, and explore our 3D visualization of the FDA approval pipeline
            </p>
          </div>
          <ThreeDScene />
        </div>
      </section>

      {/* WORKFLOW SECTION - Research-based, detailed */}
      <section id="workflow" className="py-24 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight">End-to-End Regulatory Workflow</h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              Powered by G-FIRMS — Ghana&apos;s digital platform for product registration. 
              Transparent, efficient, and compliant with international standards.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: FileText, 
                title: "1. Application Submission", 
                desc: "Submit through the secure G-FIRMS portal. Upload CTD dossier, manufacturing license, Certificate of Analysis, and product samples. Automated pre-evaluation checks completeness." 
              },
              { 
                icon: ShieldCheck, 
                title: "2. Technical Evaluation & GMP", 
                desc: "Laboratory testing, GMP inspection, and expert dossier review. Timelines: 15–30 working days depending on risk category and premium service selection." 
              },
              { 
                icon: Award, 
                title: "3. Committee Decision & Issuance", 
                desc: "Product Registration Committee reviews reports. Upon approval, a digitally signed certificate is issued with unique registration number and QR code for traceability." 
              },
            ].map((step, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="bg-slate-50 p-10 rounded-3xl border border-slate-100 group hover:shadow-xl hover:border-emerald-200 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  <step.icon className="w-9 h-9 text-emerald-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-900">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PUBLIC VERIFICATION SECTION */}
      <section id="verify" className="py-24 bg-slate-900 text-white scroll-mt-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="mb-8"
          >
            <Search className="w-20 h-20 text-emerald-400 mx-auto" />
          </motion.div>
          
          <h2 className="text-4xl font-bold mb-6">Public Product Verification</h2>
          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
            Ensure safety and authenticity. Scan QR codes or enter registration numbers to instantly verify FDA-approved products available in Ghana.
          </p>

          <div className="max-w-xl mx-auto bg-white/10 backdrop-blur-lg p-8 rounded-3xl border border-white/20">
            <div className="flex flex-col sm:flex-row gap-4">
              <input 
                type="text" 
                placeholder="FDA/PR/23-XXXXXX or QR Code" 
                className="flex-1 px-6 py-4 bg-white rounded-2xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400" 
              />
              <button className="bg-emerald-600 hover:bg-emerald-500 px-10 py-4 rounded-2xl font-semibold transition-all whitespace-nowrap active:scale-95">
                Verify Now
              </button>
            </div>
            <p className="text-xs text-slate-400 mt-4">Example: FDA/DR/22-00145</p>
          </div>
        </div>
      </section>

      {/* TRACK APPLICATION SECTION */}
      <section id="track" className="py-24 bg-slate-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1 bg-blue-100 text-blue-700 rounded-full mb-6">
                <Activity className="w-4 h-4" /> Real-time Tracking
              </div>
              <h2 className="text-4xl font-bold tracking-tight mb-6">Track Your Application Status</h2>
              <p className="text-lg text-slate-600 mb-8">
                Log into your portal to monitor every stage — from submission to final approval. 
                No more uncertainty. Receive automated notifications at key milestones.
              </p>
              <Link 
                href="/login" 
                className="inline-flex items-center gap-3 text-emerald-600 hover:text-emerald-700 font-semibold text-lg group"
              >
                Access Applicant Portal 
                <ArrowRight className="group-hover:translate-x-1 transition" />
              </Link>
            </div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-white p-10 rounded-3xl shadow-xl border border-slate-100"
            >
              <div className="space-y-8">
                {[
                  { status: "COMPLETED", label: "Application Submitted", color: "emerald" },
                  { status: "COMPLETED", label: "Document & Sample Screening", color: "emerald" },
                  { status: "IN PROGRESS", label: "Laboratory Analysis & GMP Inspection", color: "blue" },
                  { status: "PENDING", label: "Registration Committee Review", color: "slate" },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-5">
                    <div className={`mt-1 w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center border ${item.color === 'emerald' ? 'border-emerald-500 bg-emerald-50' : item.color === 'blue' ? 'border-blue-500 bg-blue-50' : 'border-slate-300 bg-slate-100'}`}>
                      {item.status === "COMPLETED" && <CheckCircle className="w-4 h-4 text-emerald-600" />}
                    </div>
                    <div className="flex-1">
                      <div className={`inline text-xs font-bold px-3 py-1 rounded-full ${item.status === 'COMPLETED' ? 'bg-emerald-100 text-emerald-700' : item.status === 'IN PROGRESS' ? 'bg-blue-100 text-blue-700 animate-pulse' : 'bg-slate-100 text-slate-500'}`}>
                        {item.status}
                      </div>
                      <p className="font-medium mt-2">{item.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* RESOURCES & STATISTICS SECTION */}
      <section id="resources" className="py-24 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-16">
            {/* Resources */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-6">
                <BookOpen className="w-8 h-8 text-slate-400" />
                <h2 className="text-4xl font-bold">Regulatory Resources</h2>
              </div>
              <p className="text-slate-600 mb-10 max-w-lg">
                Download official guidelines, fee schedules, and policy documents to ensure compliant submissions.
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  "Food Product Registration Guidelines",
                  "Allopathic Drugs Registration",
                  "Cosmetics & Medical Devices",
                  "GMP Requirements & Inspection",
                  "Variation & Renewal Procedures",
                  "Fee Schedules & Premium Services"
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ scale: 1.02 }}
                    className="p-8 border border-slate-200 rounded-3xl hover:border-emerald-300 hover:shadow-md transition-all cursor-pointer group"
                  >
                    <h4 className="font-semibold text-lg group-hover:text-emerald-700 transition-colors">{item}</h4>
                    <p className="text-emerald-600 text-sm mt-3 flex items-center gap-2">
                      Download PDF <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5" />
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="lg:col-span-5 bg-slate-900 text-white rounded-3xl p-10 flex flex-col justify-center">
              <h3 className="text-2xl font-semibold mb-10">FDA Ghana at a Glance</h3>
              <div className="space-y-10">
                <div className="flex justify-between items-end">
                  <div>
                    <div className="text-6xl font-bold text-emerald-400">5000+</div>
                    <div className="text-slate-400">Products Registered</div>
                  </div>
                  <Users className="w-12 h-12 text-slate-600" />
                </div>
                <div className="flex justify-between items-end">
                  <div>
                    <div className="text-6xl font-bold text-emerald-400">98%</div>
                    <div className="text-slate-400">Digital Submissions</div>
                  </div>
                  <Clock className="w-12 h-12 text-slate-600" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 bg-gradient-to-br from-emerald-700 to-teal-700 text-white">
        <div className="max-w-2xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold mb-6">Ready to Register Your Product?</h2>
          <p className="text-lg text-emerald-100 mb-10">Join hundreds of manufacturers already using the G-FIRMS platform for faster approvals.</p>
          <Link href="/register" className="inline-block bg-white text-emerald-700 hover:bg-slate-100 px-12 py-4 rounded-2xl text-xl font-semibold transition-all">
            Create Account &amp; Start Now
          </Link>
        </div>
      </section>
    </div>
  );
}