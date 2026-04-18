/** * =============================================================================
 * UDAARO SOVEREIGN VENTURE OS - MASTER CORE v6.0.0
 * -----------------------------------------------------------------------------
 * REVISION: Iron_Resilience_Handshake
 * FEATURE: Fixed Hydration Drift & Neural Auto-Scroll
 * ============================================================================= */

import React, { lazy, Suspense, useEffect, useState, useReducer, useRef } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { 
  Loader2, Send, X, CircuitBoard, Bot, 
} from "lucide-react";
import ReactMarkdown from 'react-markdown';

// --- SYSTEM WRAPPERS ---
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";

/** * REINFORCED DYNAMIC IMPORT LOGIC
 * Includes a reload-on-fail protocol to handle stale chunk errors in production.
 */
const lazyRetry = (componentImport) => {
  return lazy(async () => {
    try {
      return await componentImport();
    } catch (error) {
      console.error("[UDAARO_CORE] LOGIC_DRIFT: Re-syncing node assets...");
      window.location.reload();
      return { default: () => <SovereignLoader /> };
    }
  });
};

const Home = lazyRetry(() => import("./pages/Home"));
const Apply = lazyRetry(() => import("./pages/ApplyFounder"));
const Investors = lazyRetry(() => import("./pages/Investors"));
const Mentors = lazyRetry(() => import("./pages/Mentors"));
const Admin = lazyRetry(() => import("./pages/Admin"));
const Login = lazyRetry(() => import("./pages/AdminLogin"));

// --- MODULE I: THE NEURAL ENGINE ---
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

  // Robust Auto-Scroll Logic
  useEffect(() => {
    if (isOpen && scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: "smooth"
      });
    }
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
    <div className="fixed bottom-6 right-6 md:bottom-12 md:right-12 z-[10000]">
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            className="w-[90vw] md:w-[450px] h-[70vh] bg-white border border-[#D4AF37]/30 rounded-[2.5rem] md:rounded-[3.5rem] shadow-2xl flex flex-col overflow-hidden backdrop-blur-3xl mb-4"
          >
            <div className="p-8 bg-[#0F1419] text-[#D4AF37] flex justify-between items-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-10 rotate-12 scale-150"><CircuitBoard size={300} /></div>
              <div className="relative z-10 font-black italic uppercase tracking-tighter">Sovereign_AI</div>
              <button onClick={() => setIsOpen(false)}><X size={20} /></button>
            </div>

            <div className="flex-1 p-8 overflow-y-auto space-y-6 bg-[#FDF9F3]/50 custom-scrollbar" ref={scrollRef}>
              {state.messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] p-5 rounded-2xl text-sm italic font-medium ${m.role === 'user' ? 'bg-[#0F1419] text-white rounded-tr-none' : 'bg-white border-2 border-slate-100 text-slate-800 rounded-tl-none'}`}>
                    <ReactMarkdown>{String(m.content || "")}</ReactMarkdown>
                  </div>
                </div>
              ))}
            </div>

            <form onSubmit={handleLogicQuery} className="p-6 border-t bg-white flex gap-3">
              <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Query Logic..." className="flex-1 bg-slate-50 rounded-xl px-4 py-3 text-xs italic font-bold outline-none" />
              <button className="p-4 bg-[#0F1419] text-[#D4AF37] rounded-xl"><Send size={18} /></button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => setIsOpen(!isOpen)} 
        className="w-16 h-16 md:w-20 md:h-20 bg-[#0F1419] border-4 border-[#D4AF37] rounded-full flex items-center justify-center text-[#D4AF37] shadow-xl"
      >
        <Bot size={30} />
      </motion.button>
    </div>
  );
};

// --- MODULE II: CENTRAL COMMAND HUB ---
export default function UdaaroCentralCommand() {
  const location = useLocation();
  const [isResonating, setIsResonating] = useState(false);

  useEffect(() => {
    // The Hydration Lock: We wait for the first tick to finish before mounting Routes
    const timer = setTimeout(() => setIsResonating(true), 200);
    return () => clearTimeout(timer);
  }, []);

  if (!isResonating) return <SovereignLoader />;

  return (
    <div className="udaaro-sovereign-application bg-[#FDF9F3] min-h-screen selection:bg-[#D4AF37] selection:text-white">
      <Navbar />
      <Suspense fallback={<SovereignLoader />}>
        <AnimatePresence mode="wait">
          <motion.main
            key={location.pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
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

const SovereignLoader = () => (
  <div className="h-screen w-full bg-[#FDF9F3] flex flex-col items-center justify-center fixed inset-0 z-[99999]">
    <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="flex flex-col items-center">
      <div className="w-20 h-20 bg-[#0F1419] rounded-2xl flex items-center justify-center text-[#D4AF37] font-black italic text-2xl border-2 border-[#D4AF37]/10 animate-pulse">U</div>
      <div className="mt-8 flex items-center gap-3">
        <Loader2 className="animate-spin text-[#D4AF37]" size={16} />
        <span className="text-[9px] font-black uppercase tracking-[0.8em] text-[#0F1419]">Syncing_Node...</span>
      </div>
    </motion.div>
  </div>
);