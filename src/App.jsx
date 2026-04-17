/** * =============================================================================
 * UDAARO SOVEREIGN APPLICATION - CENTRAL COMMAND v4.5.0
 * -----------------------------------------------------------------------------
 * CORE INFRASTRUCTURE: React Router + Framer Motion Integration
 * ARCHITECT: Apurva Priyadarshi (Batch 2026)
 * NODE: Master_Terminal_Control
 * ============================================================================= */

import React, { lazy, Suspense, useEffect, useState } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Command, Loader2, Wifi, Activity } from "lucide-react";

// --- DYNAMIC NODE IMPORT (CODE-SPLITTING) ---
const Home = lazy(() => import("./pages/Home"));
const Apply = lazy(() => import("./pages/ApplyFounder"));
const Investors = lazy(() => import("./pages/Investors"));
const Mentors = lazy(() => import("./pages/Mentors"));
const Admin = lazy(() => import("./pages/Admin"));
const Login = lazy(() => import("./pages/AdminLogin"));

// --- SYSTEM WRAPPERS ---
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";

/** * =============================================================================
 * V. INSTITUTIONAL HANDSHAKE (SUSPENSE FALLBACK)
 * ============================================================================= */

const SovereignHandshake = () => (
  <div className="h-screen w-full bg-[#FDF9F3] flex flex-col items-center justify-center relative overflow-hidden">
    <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
      <svg width="100%" height="100%"><pattern id="jali-grid" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse"><path d="M50 0 L100 50 L50 100 L0 50 Z" fill="none" stroke="black" strokeWidth="1" /></pattern><rect width="100%" height="100%" fill="url(#jali-grid)" /></svg>
    </div>
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }} 
      animate={{ opacity: 1, scale: 1 }} 
      className="relative z-10 flex flex-col items-center"
    >
      <div className="w-20 h-20 bg-[#0F1419] rounded-2xl flex items-center justify-center text-[#D4AF37] font-black italic text-3xl shadow-7xl mb-10 border border-[#D4AF37]/20">U</div>
      <div className="flex items-center gap-4">
        <Loader2 className="animate-spin text-[#D4AF37]" size={20} />
        <span className="text-[10px] font-black uppercase tracking-[0.8em] text-[#0F1419] italic">Decrypting_Node</span>
      </div>
    </motion.div>
  </div>
);

/** * =============================================================================
 * VI. MAIN SYSTEM HUB
 * ============================================================================= */

export default function UdaaroCentralCommand() {
  const location = useLocation();
  const [latency, setLatency] = useState(12);

  // --- Real-time Grid Monitoring ---
  useEffect(() => {
    const pulse = setInterval(() => setLatency(Math.floor(Math.random() * 4) + 11), 4000);
    return () => clearInterval(pulse);
  }, []);

  return (
    <div className="udaaro-sovereign-application selection:bg-[#D4AF37] selection:text-[#0F1419]">
      
      {/* GLOBAL TELEMETRY OVERLAY */}
      <div className="fixed bottom-10 left-10 z-[1000] hidden lg:block">
        <div className="px-6 py-3 bg-[#0F1419]/90 backdrop-blur-2xl border border-[#D4AF37]/20 rounded-2xl shadow-6xl flex items-center gap-5">
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <div className="flex flex-col">
            <span className="text-[8px] font-black text-[#D4AF37] uppercase tracking-widest italic leading-none mb-1">Grid_Handshake: Stable</span>
            <span className="text-[8px] font-mono text-slate-500 uppercase tracking-tighter italic">Latency: {latency}ms</span>
          </div>
          <Activity size={14} className="text-[#D4AF37]/40" />
        </div>
      </div>

      <Navbar />

      {/* --- ROUTING ENGINE WITH HANDSHAKE TRANSITIONS --- */}
      <Suspense fallback={<SovereignHandshake />}>
        <AnimatePresence mode="wait">
          <motion.main
            key={location.pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10"
          >
            <Routes location={location}>
              {/* Public Nodes */}
              <Route path="/" element={<Home />} />
              <Route path="/apply" element={<Apply />} />
              <Route path="/investors" element={<Investors />} />
              <Route path="/mentors" element={<Mentors />} />
              
              {/* Governance Nodes */}
              <Route path="/admin-login" element={<Login />} />
              <Route path="/admin/*" element={
                <ProtectedRoute>
                  <Admin />
                </ProtectedRoute>
              } />

              {/* Recovery Node */}
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </motion.main>
        </AnimatePresence>
      </Suspense>

      {/* COMMAND CONTROL (FLOATING) */}
      <div className="fixed bottom-12 right-12 z-[1000] hidden md:block">
        <motion.button 
          whileHover={{ scale: 1.1, rotate: 90 }}
          className="w-20 h-20 bg-[#0F1419] border-2 border-[#D4AF37] text-[#D4AF37] rounded-full flex items-center justify-center shadow-7xl relative group"
        >
          <Command size={28} />
          <div className="absolute inset-0 rounded-full bg-[#D4AF37]/10 animate-ping" />
        </motion.button>
      </div>

    </div>
  );
}