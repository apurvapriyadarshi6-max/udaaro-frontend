/** * =============================================================================
 * UDAARO SOVEREIGN VENTURE OS - MASTER CORE v5.5.0
 * -----------------------------------------------------------------------------
 * FULL-LENGTH INTEGRATED INFRASTRUCTURE
 * ARCHITECT: Apurva Priyadarshi (Batch 2026)
 * SYSTEM: Neo-Heritage Imperialism Execution Engine
 * ============================================================================= */

import React, { lazy, Suspense, useEffect, useState, useReducer, useRef, useCallback } from "react";
import { Routes, Route, useLocation, Navigate, Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { 
  Command, Loader2, Activity, Send, X, CircuitBoard, 
  Bot, ShieldCheck, Zap, Globe, Cpu, LayoutDashboard, 
  TrendingUp, Users, Landmark, Terminal, LogOut,
  ChevronRight, Fingerprint, Lock, Layers
} from "lucide-react";
import ReactMarkdown from 'react-markdown';
import { AreaChart, Area, ResponsiveContainer, Tooltip, XAxis } from "recharts";

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
 * MODULE I: THE NEURAL ENGINE (SovereignAI.jsx)
 * Integrated with Nullish Guarding to prevent Reference Errors in Production
 * =============================================================================
 */
const aiReducer = (state, action) => {
  switch (action.type) {
    case 'START_THINKING': return { ...state, isThinking: true };
    case 'STOP_THINKING': return { ...state, isThinking: false };
    case 'ADD_MESSAGE': return { ...state, messages: [...state.messages, action.payload] };
    default: return state;
  }
};

const SovereignAI = () => {
  const [state, dispatch] = useReducer(aiReducer, {
    messages: [{ role: "ai", content: "Neural Node Active. Awaiting founder logic for Batch 2026." }],
    isThinking: false
  });
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const scrollRef = useRef(null);

  // HANDSHAKE GUARD: Neutralizes the 'bx' scroll crash on Vercel
  useEffect(() => {
    const syncScroll = () => {
      if (isOpen && scrollRef.current) {
        scrollRef.current.scrollTo({
          top: scrollRef.current.scrollHeight,
          behavior: "smooth"
        });
      }
    };
    const timer = setTimeout(syncScroll, 100);
    return () => clearTimeout(timer);
  }, [state.messages, state.isThinking, isOpen]);

  const handleLogicQuery = async (e) => {
    e.preventDefault();
    if (!input.trim() || state.isThinking) return;

    const userQuery = input;
    setInput("");
    dispatch({ type: 'ADD_MESSAGE', payload: { role: "user", content: userQuery } });
    dispatch({ type: 'START_THINKING' });

    try {
      const response = await fetch("https://udaaro-backend.onrender.com/api/ai/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: userQuery, context: "Sovereign_VOS_Audit" }),
      });
      const data = await response.json();
      dispatch({ type: 'ADD_MESSAGE', payload: { role: "ai", content: data.response || "Neural handshake timed out." } });
    } catch (err) {
      dispatch({ type: 'ADD_MESSAGE', payload: { role: "ai", content: "CRITICAL: Node connection severed." } });
    } finally {
      dispatch({ type: 'STOP_THINKING' });
    }
  };

  return (
    <div className="fixed bottom-12 right-12 z-[10000]">
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 50, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            className="w-[450px] h-[700px] bg-white border border-[#D4AF37]/30 rounded-[3.5rem] shadow-7xl flex flex-col overflow-hidden backdrop-blur-3xl"
          >
            <div className="p-10 bg-[#0F1419] text-[#D4AF37] relative overflow-hidden">
              <div className="absolute inset-0 opacity-10 rotate-12 scale-150"><CircuitBoard size={300} /></div>
              <div className="relative z-10 flex justify-between items-center">
                <div>
                  <p className="font-mono uppercase tracking-[0.4em] text-[9px] font-black opacity-50">Intelligence Node</p>
                  <h4 className="text-3xl font-black italic tracking-tighter uppercase leading-none">Sovereign_AI</h4>
                </div>
                <button onClick={() => setIsOpen(false)} className="w-10 h-10 rounded-full border border-[#D4AF37]/20 flex items-center justify-center hover:rotate-90 transition-all"><X /></button>
              </div>
            </div>

            <div className="flex-1 p-10 overflow-y-auto space-y-8 bg-[#FDF9F3]/50 custom-scrollbar" ref={scrollRef}>
              {state.messages.map((m, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[90%] p-6 rounded-[2rem] text-sm font-medium italic shadow-sm leading-relaxed ${m.role === 'user' ? 'bg-[#0F1419] text-white rounded-tr-none' : 'bg-white border-2 border-slate-100 text-slate-800 rounded-tl-none'}`}>
                    <ReactMarkdown>{m.content || ""}</ReactMarkdown>
                  </div>
                </motion.div>
              ))}
              {state.isThinking && (
                <div className="flex items-center gap-4 text-[#D4AF37]">
                  <Loader2 className="animate-spin" size={16} />
                  <span className="font-mono text-[9px] font-black uppercase tracking-[0.4em] animate-pulse">Analyzing_Venture_Moat...</span>
                </div>
              )}
            </div>

            <form onSubmit={handleLogicQuery} className="p-8 border-t border-[#D4AF37]/10 bg-white flex gap-4">
              <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Query Logic..." className="flex-1 bg-slate-50 rounded-2xl px-6 py-4 text-xs italic font-bold outline-none border border-transparent focus:border-[#D4AF37]/50 transition-all" />
              <button disabled={state.isThinking} className="w-14 h-14 bg-[#0F1419] text-[#D4AF37] rounded-2xl flex items-center justify-center hover:bg-[#D4AF37] hover:text-white transition-all shadow-xl disabled:opacity-30"><Send size={18} /></button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button 
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-24 h-24 bg-[#0F1419] border-4 border-[#D4AF37] rounded-full flex items-center justify-center text-[#D4AF37] shadow-luxury relative group"
      >
        <div className="absolute inset-0 rounded-full border-2 border-[#D4AF37] animate-ping opacity-20 group-hover:hidden" />
        <Bot size={34} />
      </motion.button>
    </div>
  );
};

/** * =============================================================================
 * MODULE II: MASTER DATA NODES (MasterControl.jsx)
 * Visualizing Ecosystem Velocity and Node Resilience
 * =============================================================================
 */
const MasterControlStats = ({ data }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
      {[
        { label: "Logic_Handshakes", val: "1,240", icon: <Fingerprint />, color: "text-blue-500" },
        { label: "Capital_Deployed", val: "₹14.2Cr", icon: <Landmark />, color: "text-emerald-500" },
        { label: "Ecosystem_Sync", val: "99.98%", icon: <Zap />, color: "text-[#D4AF37]" },
      ].map((stat, i) => (
        <div key={i} className="p-10 bg-white rounded-[4rem] border border-slate-100 shadow-xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-10 opacity-[0.03] group-hover:scale-125 transition-transform">{stat.icon}</div>
          <p className="font-mono uppercase tracking-[0.4em] text-[9px] font-black text-slate-400 mb-6">{stat.label}</p>
          <p className={`text-6xl font-black italic tracking-tighter leading-none ${stat.color}`}>{stat.val}</p>
        </div>
      ))}
    </div>
  );
};

/** * =============================================================================
 * MODULE III: CENTRAL COMMAND SYSTEM HUB
 * Orchestrating Routes, Layouts, and Telemetry
 * =============================================================================
 */
export default function UdaaroCentralCommand() {
  const location = useLocation();
  const [latency, setLatency] = useState(12);

  useEffect(() => {
    const pulse = setInterval(() => setLatency(Math.floor(Math.random() * 5) + 11), 5000);
    return () => clearInterval(pulse);
  }, []);

  return (
    <div className="udaaro-sovereign-application bg-[#FDF9F3] min-h-screen selection:bg-[#D4AF37] selection:text-[#0F1419]">
      
      {/* GLOBAL TELEMETRY BAR */}
      <div className="fixed bottom-10 left-10 z-[1000] hidden lg:block">
        <div className="px-6 py-3 bg-[#0F1419]/95 backdrop-blur-2xl border border-[#D4AF37]/20 rounded-2xl shadow-6xl flex items-center gap-5">
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <div className="flex flex-col">
            <span className="text-[8px] font-black text-[#D4AF37] uppercase tracking-widest italic leading-none mb-1">Grid_State: Alpha_Secure</span>
            <span className="text-[8px] font-mono text-slate-500 uppercase tracking-tighter italic">Handshake: {latency}ms</span>
          </div>
          <div className="h-6 w-[1px] bg-white/10 mx-2" />
          <Activity size={14} className="text-[#D4AF37]/30" />
        </div>
      </div>

      <Navbar />

      {/* --- ROUTING ENGINE WITH HANDSHAKE TRANSITIONS --- */}
      <Suspense fallback={<SovereignLoader />}>
        <AnimatePresence mode="wait">
          <motion.main
            key={location.pathname}
            initial={{ opacity: 0, x: -10, filter: "blur(5px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, x: 10, filter: "blur(5px)" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10"
          >
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/apply" element={<Apply />} />
              <Route path="/investors" element={<Investors />} />
              <Route path="/mentors" element={<Mentors />} />
              <Route path="/admin-login" element={<Login />} />
              
              {/* GOVERNANCE ACCESS PROTOCOL */}
              <Route path="/admin/*" element={
                <ProtectedRoute>
                  <Admin />
                </ProtectedRoute>
              } />

              {/* SOVEREIGN RECOVERY NODE */}
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </motion.main>
        </AnimatePresence>
      </Suspense>

      {/* PERSISTENT OS MODULES */}
      <SovereignAI />

      {/* IMPERIAL OVERLAY GRID */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-0 pointer-events-none">
        <svg width="100%" height="100%">
          <pattern id="jali" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
            <path d="M60 0 L120 60 L60 120 L0 60 Z" fill="none" stroke="black" strokeWidth="1" />
            <circle cx="60" cy="60" r="10" fill="none" stroke="black" strokeWidth="1" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#jali)" />
        </svg>
      </div>

      <footer className="bg-white border-t border-[#D4AF37]/10 py-32 px-20">
        <div className="max-w-[1800px] mx-auto flex flex-col md:flex-row justify-between items-start gap-20">
          <div className="space-y-10">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-[#0F1419] text-[#D4AF37] rounded-2xl flex items-center justify-center font-black text-4xl shadow-xl italic">U</div>
              <h3 className="text-5xl font-black italic tracking-tighter uppercase leading-none text-[#0F1419]">Udaaro</h3>
            </div>
            <p className="max-w-md text-2xl text-slate-400 font-medium italic leading-relaxed">
              Engineering the future of Indian startup infrastructure through structural logic and selective admission.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-24 font-mono">
            <div className="space-y-6">
               <h6 className="text-[10px] font-black uppercase tracking-[0.5em] text-[#D4AF37]">Governance</h6>
               <ul className="space-y-4 text-xs font-bold uppercase tracking-widest text-slate-500 italic">
                  <li><Link to="/privacy" className="hover:text-[#0F1419]">Privacy Protocol</Link></li>
                  <li><Link to="/about" className="hover:text-[#0F1419]">Access Charter</Link></li>
                  <li><Link to="/admin-login" className="hover:text-[#0F1419]">Admin Portal</Link></li>
               </ul>
            </div>
            <div className="space-y-6">
               <h6 className="text-[10px] font-black uppercase tracking-[0.5em] text-[#D4AF37]">Telemetry</h6>
               <ul className="space-y-4 text-xs font-bold uppercase tracking-widest text-slate-500 italic">
                  <li>Status: ALPHA_SYNC</li>
                  <li>Grid_V: 5.5.0</li>
                  <li>Node: APAC_NORTH</li>
               </ul>
            </div>
          </div>
        </div>
        <div className="mt-32 pt-12 border-t border-slate-100 flex justify-between items-center opacity-30 text-[10px] font-black uppercase tracking-[0.5em] italic">
           <span>Architected by Apurva Priyadarshi © 2026</span>
           <span>Sovereign_OS_GRID_OK</span>
        </div>
      </footer>
    </div>
  );
}

/** * =============================================================================
 * SOVEREIGN LOADER COMPONENT
 * Final Handshake Visual for Node Decryption
 * =============================================================================
 */
const SovereignLoader = () => (
  <div className="h-screen w-full bg-[#FDF9F3] flex flex-col items-center justify-center relative overflow-hidden">
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }} 
      animate={{ opacity: 1, scale: 1 }} 
      className="relative z-10 flex flex-col items-center"
    >
      <div className="w-24 h-24 bg-[#0F1419] rounded-3xl flex items-center justify-center text-[#D4AF37] font-black italic text-4xl shadow-7xl mb-12 border-2 border-[#D4AF37]/20">U</div>
      <div className="flex flex-col items-center gap-4">
        <Loader2 className="animate-spin text-[#D4AF37]" size={24} />
        <span className="text-[11px] font-black uppercase tracking-[1em] text-[#0F1419] italic animate-pulse ml-4">Decrypting_Grid</span>
      </div>
    </motion.div>
    <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-64 h-[1px] bg-[#0F1419]/10">
      <motion.div 
        animate={{ x: [-256, 256] }} 
        transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
        className="w-24 h-full bg-[#D4AF37]" 
      />
    </div>
  </div>
);