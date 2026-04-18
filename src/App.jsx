/** * =============================================================================
 * UDAARO SOVEREIGN VENTURE OS - MASTER CORE v6.1.2 (RECOVERY_BUILD)
 * -----------------------------------------------------------------------------
 * ARCHITECT: Apurva Priyadarshi
 * FIX: React 19.2.4 Reconciliation Guard & 404 Resilience
 * ============================================================================= */

import React, { lazy, Suspense, useEffect, useState, useReducer, useRef, useId } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Loader2, Send, X, CircuitBoard, Bot } from "lucide-react";
import ReactMarkdown from 'react-markdown';

// --- SYSTEM WRAPPERS ---
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";

const lazyRetry = (componentImport) => {
  return lazy(async () => {
    try {
      return await componentImport();
    } catch (error) {
      console.error("[UDAARO_CORE] NODE_DRIFT: Re-syncing assets...", error);
      window.location.reload(); // Hard reset on chunk failure
      return { default: () => <div /> };
    }
  });
};

// DYNAMIC NODES
const Home = lazyRetry(() => import("./pages/Home"));
const Apply = lazyRetry(() => import("./pages/ApplyFounder"));
const Investors = lazyRetry(() => import("./pages/Investors"));
const Mentors = lazyRetry(() => import("./pages/Mentors"));
const Admin = lazyRetry(() => import("./pages/Admin"));
const Login = lazyRetry(() => import("./pages/AdminLogin"));

// --- MODULE I: THE NEURAL ENGINE (WITH SAFETY) ---
const aiReducer = (state, action) => {
  switch (action.type) {
    case 'START_THINKING': return { ...state, isThinking: true };
    case 'STOP_THINKING': return { ...state, isThinking: false };
    case 'ADD_MESSAGE': return { ...state, messages: [...(state.messages || []), action.payload] };
    default: return state;
  }
};

const SovereignAI = () => {
  const [state, dispatch] = useReducer(aiReducer, {
    messages: [{ role: "ai", content: "Neural Node Active. Awaiting founder logic." }],
    isThinking: false
  });
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (isOpen && scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
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
      if (!response.ok) throw new Error("404_OR_OFFLINE");
      const data = await response.json();
      dispatch({ type: 'ADD_MESSAGE', payload: { role: "ai", content: String(data.response || "Handshake timeout.") } });
    } catch (err) {
      dispatch({ type: 'ADD_MESSAGE', payload: { role: "ai", content: "⚠️ **CRITICAL_ERROR:** Node offline or asset 404." } });
    } finally {
      dispatch({ type: 'STOP_THINKING' });
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[10000]">
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }}
            className="w-[350px] md:w-[450px] h-[60vh] bg-white border border-[#D4AF37]/30 rounded-[2.5rem] shadow-2xl flex flex-col overflow-hidden mb-4"
          >
            <div className="p-6 bg-[#0F1419] text-[#D4AF37] flex justify-between items-center">
              <span className="font-black italic uppercase text-xs">Sovereign_AI</span>
              <button onClick={() => setIsOpen(false)}><X size={18} /></button>
            </div>
            <div className="flex-1 p-6 overflow-y-auto space-y-4 bg-[#FDF9F3]/50" ref={scrollRef}>
              {(state.messages || []).map((m, i) => (
                <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] p-4 rounded-2xl text-sm ${m.role === 'user' ? 'bg-[#0F1419] text-white' : 'bg-white border text-slate-800'}`}>
                    <ReactMarkdown>{String(m.content || "")}</ReactMarkdown>
                  </div>
                </div>
              ))}
            </div>
            <form onSubmit={handleLogicQuery} className="p-4 border-t bg-white flex gap-2">
              <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Query Logic..." className="flex-1 bg-slate-50 rounded-xl px-4 py-2 text-xs outline-none" />
              <button className="p-3 bg-[#0F1419] text-[#D4AF37] rounded-xl"><Send size={16} /></button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
      <button onClick={() => setIsOpen(!isOpen)} className="w-16 h-16 bg-[#0F1419] border-2 border-[#D4AF37] rounded-full flex items-center justify-center text-[#D4AF37] shadow-xl">
        <Bot size={28} />
      </button>
    </div>
  );
};

// --- MODULE II: MAIN CORE ---
export default function UdaaroApp() {
  const location = useLocation();
  const [isResonating, setIsResonating] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsResonating(true), 100);
    return () => clearTimeout(timer);
  }, []);

  if (!isResonating) return <SovereignLoader />;

  return (
    <div className="bg-[#FDF9F3] min-h-screen">
      <Navbar />
      <Suspense fallback={<SovereignLoader />}>
        <AnimatePresence mode="wait">
          <motion.main
            key={location.pathname}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/apply" element={<Apply />} />
              <Route path="/investors" element={<Investors />} />
              <Route path="/mentors" element={<Mentors />} />
              <Route path="/admin-login" element={<Login />} />
              <Route path="/admin/*" element={<ProtectedRoute><Admin /></ProtectedRoute>} />
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
    <div className="w-16 h-16 bg-[#0F1419] rounded-2xl flex items-center justify-center text-[#D4AF37] font-black italic border border-[#D4AF37]/20 animate-pulse">U</div>
    <div className="mt-6 flex items-center gap-2">
      <Loader2 className="animate-spin text-[#D4AF37]" size={14} />
      <span className="text-[8px] font-black uppercase tracking-[0.5em] text-[#0F1419]">Node_Sync...</span>
    </div>
  </div>
);