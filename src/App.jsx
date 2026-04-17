/** * =============================================================================
 * UDAARO SOVEREIGN VENTURE OS - MASTER CORE v6.0.0
 * -----------------------------------------------------------------------------
 * ARCHITECT: Apurva Priyadarshi (Batch 2026)
 * REVISION: Iron_Resilience_Handshake
 * FEATURE: Double-Phase Hydration Lock & Chunk Recovery
 * ============================================================================= */

import React, { lazy, Suspense, useEffect, useState, useReducer, useRef } from "react";
import { Routes, Route, useLocation, Navigate, Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { 
  Command, Loader2, Activity, Send, X, CircuitBoard, 
  Bot, ShieldCheck, Zap, Globe, Cpu, LayoutDashboard, 
  TrendingUp, Users, Landmark, Terminal, LogOut,
  ChevronRight, Fingerprint, Lock, Layers
} from "lucide-react";
import ReactMarkdown from 'react-markdown';

// --- SYSTEM WRAPPERS ---
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";

/** * REINFORCED DYNAMIC IMPORT LOGIC
 * Automates grid re-sync if Vercel deployment assets are out of phase.
 */
const lazyRetry = (componentImport) => {
  return lazy(async () => {
    try {
      return await componentImport();
    } catch (error) {
      console.error("[UDAARO_CORE] LOGIC_DRIFT: Re-syncing node assets...", error);
      window.location.reload();
      return { default: () => <SovereignLoader /> };
    }
  });
};

// --- DYNAMIC NODES WITH RETRY PROTOCOL ---
const Home = lazyRetry(() => import("./pages/Home"));
const Apply = lazyRetry(() => import("./pages/ApplyFounder"));
const Investors = lazyRetry(() => import("./pages/Investors"));
const Mentors = lazyRetry(() => import("./pages/Mentors"));
const Admin = lazyRetry(() => import("./pages/Admin"));
const Login = lazyRetry(() => import("./pages/AdminLogin"));

/** * =============================================================================
 * MODULE I: THE NEURAL ENGINE (SovereignAI.jsx)
 * ============================================================================= */
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

  useEffect(() => {
    if (!isOpen) return;
    const syncScroll = () => {
      if (scrollRef.current) {
        scrollRef.current.scrollTo({
          top: scrollRef.current.scrollHeight,
          behavior: "smooth"
        });
      }
    };
    const frameId = requestAnimationFrame(syncScroll);
    return () => cancelAnimationFrame(frameId);
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
        body: JSON.stringify({ prompt: userQuery }),
      });
      const data = await response.json();
      dispatch({ type: 'ADD_MESSAGE', payload: { role: "ai", content: String(data.response || "Handshake timeout.") } });
    } catch (err) {
      dispatch({ type: 'ADD_MESSAGE', payload: { role: "ai", content: "CRITICAL: Node offline." } });
    } finally {
      dispatch({ type: 'STOP_THINKING' });
    }
  };

  return (
    <div className="fixed bottom-12 right-12 z-[10000]">
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            className="w-[min(450px,90vw)] h-[70vh] bg-white border border-[#D4AF37]/30 rounded-[3.5rem] shadow-7xl flex flex-col overflow-hidden backdrop-blur-3xl"
          >
            <div className="p-10 bg-[#0F1419] text-[#D4AF37] flex justify-between items-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-10 rotate-12 scale-150"><CircuitBoard size={300} /></div>
              <div className="relative z-10 font-black italic uppercase tracking-tighter">Sovereign_AI</div>
              <button onClick={() => setIsOpen(false)} className="relative z-10 p-2 hover:bg-white/10 rounded-full transition-colors"><X size={20} /></button>
            </div>

            <div className="flex-1 p-10 overflow-y-auto space-y-8 bg-[#FDF9F3]/50 custom-scrollbar" ref={scrollRef}>
              {state.messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[90%] p-6 rounded-[2rem] text-sm font-medium italic ${m.role === 'user' ? 'bg-[#0F1419] text-white rounded-tr-none' : 'bg-white border-2 border-slate-100 text-slate-800 rounded-tl-none'}`}>
                    <ReactMarkdown>{String(m.content || "")}</ReactMarkdown>
                  </div>
                </div>
              ))}
            </div>

            <form onSubmit={handleLogicQuery} className="p-8 border-t bg-white flex gap-4">
              <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Query Logic..." className="flex-1 bg-slate-50 rounded-2xl px-6 py-4 text-xs italic font-bold outline-none border border-transparent focus:border-[#D4AF37]/50" />
              <button className="w-14 h-14 bg-[#0F1419] text-[#D4AF37] rounded-2xl flex items-center justify-center hover:bg-[#D4AF37] hover:text-white transition-all"><Send size={18} /></button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button 
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-20 h-20 md:w-24 md:h-24 bg-[#0F1419] border-4 border-[#D4AF37] rounded-full flex items-center justify-center text-[#D4AF37] shadow-luxury"
      >
        <Bot size={34} />
      </motion.button>
    </div>
  );
};

/** * =============================================================================
 * MODULE II: CENTRAL COMMAND HUB
 * ============================================================================= */
export default function UdaaroCentralCommand() {
  const location = useLocation();
  const [isResonating, setIsResonating] = useState(false);

  useEffect(() => {
    // Force a micro-delay to let the browser stabilize its DOM coordinate system
    const timer = setTimeout(() => setIsResonating(true), 150);
    return () => clearTimeout(timer);
  }, []);

  // MANDATORY: If not resonating, we MUST NOT render the Routes. 
  // Rendering Routes before resonance is what causes the 'Tl' error in your logs.
  if (!isResonating) return <SovereignLoader />;

  return (
    <div className="udaaro-sovereign-application bg-[#FDF9F3] min-h-screen selection:bg-[#D4AF37]">
      <Navbar />

      <Suspense fallback={<SovereignLoader />}>
        {/* REINFORCED: mode="wait" ensures old coordinates are purged before new ones mount */}
        <AnimatePresence mode="wait">
          <motion.main
            key={location.pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/apply" element={<Apply />} />
              <Route path="/investors" element={<Investors />} />
              <Route path="/mentors" element={<Mentors />} />
              <Route path="/admin-login" element={<Login />} />
              <Route path="/admin/*" element={
                <ProtectedRoute>
                  <Admin />
                </ProtectedRoute>
              } />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </motion.main>
        </AnimatePresence>
      </Suspense>

      <SovereignAI />
    </div>
  );
}

/** * =============================================================================
 * SOVEREIGN LOADER
 * ============================================================================= */
const SovereignLoader = () => (
  <div className="h-screen w-full bg-[#FDF9F3] flex flex-col items-center justify-center fixed inset-0 z-[99999]">
    <motion.div 
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center"
    >
      <div className="w-24 h-24 bg-[#0F1419] rounded-3xl flex items-center justify-center text-[#D4AF37] font-black italic text-3xl animate-pulse shadow-7xl border-2 border-[#D4AF37]/10">U</div>
      <div className="mt-10 flex items-center gap-3">
        <Loader2 className="animate-spin text-[#D4AF37]" size={18} />
        <span className="text-[10px] font-black uppercase tracking-[1em] text-[#0F1419] italic ml-4">Decrypting_Resonance</span>
      </div>
    </motion.div>
  </div>
);