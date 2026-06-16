/**
 * =============================================================================
 * UDAARO SOVEREIGN VENTURE OS - MASTER CORE v6.1.5 (UNIFIED_PRODUCTION)
 * -----------------------------------------------------------------------------
 * ARCHITECT: Apurva Priyadarshi
 * FIX: React 19 Reconciliation Guard, 404 Chunk Recovery & Unified AI State
 * =============================================================================
 */

import React, { lazy, Suspense, useEffect, useState, useReducer, useRef, Component } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Loader2, Send, X, Bot, Sparkles } from "lucide-react";
import ReactMarkdown from 'react-markdown';

// --- SYSTEM WRAPPERS & STATIC CHUNKS ---
import Navbar from "./components/Navbar";

// --- STRUCTURAL RECONCILIATION GUARD ---
class CoreErrorBoundary extends Component {
  state = { hasError: false };
  static getDerivedStateFromError() { return { hasError: true }; }
  componentDidCatch(error, errorInfo) {
    console.error("[UDAARO_CORE] CRITICAL_RECONCILIATION_FAIL:", error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="p-12 text-center bg-[#FDF9F3] min-h-[60vh] flex flex-col items-center justify-center">
          <p className="text-sm font-black text-red-500 uppercase tracking-widest">Core Node Desync</p>
          <button 
            onClick={() => { localStorage.clear(); sessionStorage.clear(); window.location.reload(); }} 
            className="mt-4 px-4 py-2 bg-[#0F1419] text-[#D4AF37] text-xs font-bold rounded-xl"
          >
            Force Core Re-Sync
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

// --- SECURE AUTHORIZATION GATEWAY SHIELD ---
const ProtectedHandshake = ({ children }) => {
  const location = useLocation();
  const token = localStorage.getItem("udaaro_access_token");
  
  if (!token) {
    return <Navigate to="/admin-login" state={{ from: location }} replace />;
  }
  return children;
};

// Prevent infinite hard reloads on network chunk errors
const lazyRetry = (componentImport) => {
  return lazy(async () => {
    try {
      return await componentImport();
    } catch (error) {
      console.error("[UDAARO_CORE] NODE_DRIFT: Re-syncing assets...", error);
      
      const hasReloaded = sessionStorage.getItem("udaaro_chunk_retry");
      if (!hasReloaded) {
        sessionStorage.setItem("udaaro_chunk_retry", "true");
        window.location.reload();
        return { default: () => <div /> };
      }
      
      return { 
        default: () => (
          <div className="p-8 text-center text-red-500 font-mono text-xs uppercase tracking-widest">
            System assets temporarily offline. Please refresh execution grid.
          </div>
        ) 
      };
    }
  });
};

// DYNAMIC LAZY-LOADED ASSET CLUSTERS
const Home = lazyRetry(() => import("./pages/Home"));
const Apply = lazyRetry(() => import("./pages/ApplyFounder"));
const Investors = lazyRetry(() => import("./pages/Investors"));
const Mentors = lazyRetry(() => import("./pages/Mentors"));
const Admin = lazyRetry(() => import("./pages/Admin"));
const Login = lazyRetry(() => import("./pages/AdminLogin"));

// --- MODULE I: THE NEURAL ENGINE (WITH TYPE SAFETY) ---
const aiReducer = (state, action) => {
  switch (action.type) {
    case 'START_THINKING': return { ...state, isThinking: true };
    case 'STOP_THINKING': return { ...state, isThinking: false };
    case 'ADD_MESSAGE': return { ...state, messages: [...state.messages, action.payload] };
    case 'TOGGLE': return { ...state, isOpen: !state.isOpen };
    default: return state;
  }
};

const SovereignAI = () => {
  const [state, dispatch] = useReducer(aiReducer, {
    messages: [{ id: "init-node", role: "ai", content: "Neural Node Active. Awaiting founder logic matrix." }],
    isThinking: false,
    isOpen: false
  });
  const [input, setInput] = useState("");
  const scrollRef = useRef(null);

  // Clear chunk retry logic on successful feature interactions
  useEffect(() => {
    sessionStorage.removeItem("udaaro_chunk_retry");
  }, []);

  useEffect(() => {
    if (state.isOpen && scrollRef.current) {
      const { scrollHeight, clientHeight } = scrollRef.current;
      scrollRef.current.scrollTo({
        top: scrollHeight - clientHeight,
        behavior: "smooth"
      });
    }
  }, [state.messages, state.isThinking, state.isOpen]);

  const handleLogicQuery = async (e) => {
    e.preventDefault();
    if (!input.trim() || state.isThinking) return;

    const userQuery = input.trim();
    setInput("");
    
    const timestampId = Date.now();
    dispatch({ type: 'ADD_MESSAGE', payload: { id: `u-${timestampId}`, role: "user", content: userQuery } });
    dispatch({ type: 'START_THINKING' });

    try {
      const response = await fetch("https://udaaro-backend.onrender.com/api/ai/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: userQuery }),
      });
      if (!response.ok) throw new Error("404_OR_OFFLINE");
      const data = await response.json();
      dispatch({ 
        type: 'ADD_MESSAGE', 
        payload: { id: `ai-${timestampId}`, role: "ai", content: String(data.response || "Handshake timeout.") } 
      });
    } catch (err) {
      dispatch({ 
        type: 'ADD_MESSAGE', 
        payload: { id: `err-${timestampId}`, role: "ai", content: "⚠️ **CRITICAL_ERROR:** Node offline or asset 404 matrix drift." } 
      });
    } finally {
      dispatch({ type: 'STOP_THINKING' });
    }
  };

  return (
    <div className="fixed bottom-6 right-6 md:bottom-12 md:right-12 z-[10000]">
      <AnimatePresence>
        {state.isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 50, scale: 0.95 }} 
            animate={{ opacity: 1, y: 0, scale: 1 }} 
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            className="w-[90vw] md:w-[450px] h-[600px] bg-white border border-[#D4AF37]/30 rounded-[2.5rem] md:rounded-[3.5rem] shadow-2xl flex flex-col overflow-hidden mb-6"
          >
            {/* Header */}
            <div className="p-6 md:p-8 bg-[#0F1419] text-[#D4AF37] flex justify-between items-center border-b border-[#D4AF37]/20">
              <div className="flex items-center gap-3">
                <Sparkles size={18} className="animate-pulse" />
                <h4 className="font-black italic uppercase tracking-widest text-sm">Sovereign_AI_v6</h4>
              </div>
              <button type="button" onClick={() => dispatch({ type: 'TOGGLE' })} className="hover:rotate-90 transition-transform duration-300">
                <X size={20} />
              </button>
            </div>
            
            {/* Chat Body */}
            <div 
              className="flex-1 p-6 overflow-y-auto space-y-6 bg-[#FDF9F3]/40 scroll-smooth" 
              ref={scrollRef}
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {state.messages.map((m) => (
                <div key={m.id} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] p-4 rounded-2xl text-sm italic shadow-sm ${m.role === 'user' ? 'bg-[#0F1419] text-white rounded-tr-none' : 'bg-white border border-slate-100 text-slate-700 rounded-tl-none'}`}>
                    <article className={`prose prose-sm max-w-none ${m.role === 'user' ? 'prose-invert text-white' : 'text-slate-700'}`}>
                      <ReactMarkdown>{String(m.content || "")}</ReactMarkdown>
                    </article>
                  </div>
                </div>
              ))}
              
              {state.isThinking && (
                <div className="flex justify-start">
                  <div className="bg-white border border-slate-100 p-4 rounded-2xl rounded-tl-none flex items-center gap-3 text-slate-400 text-xs italic">
                    <Loader2 size={16} className="animate-spin text-[#D4AF37]" />
                    <span className="text-[10px] font-black uppercase tracking-[0.2em]">Synthesizing...</span>
                  </div>
                </div>
              )}
            </div>
            
            {/* Input Area */}
            <form onSubmit={handleLogicQuery} className="p-6 border-t bg-white flex gap-3 items-center">
              <input 
                value={input} 
                onChange={(e) => setInput(e.target.value)} 
                placeholder="Query logic matrix..." 
                className="flex-1 bg-slate-50 border border-slate-100 rounded-2xl px-5 py-4 text-xs outline-none focus:border-[#D4AF37]/50 transition-all font-medium italic" 
              />
              <button type="submit" disabled={state.isThinking || !input.trim()} className="p-4 bg-[#0F1419] text-[#D4AF37] rounded-2xl hover:bg-[#D4AF37] hover:text-white transition-all disabled:opacity-50">
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Trigger */}
      <button 
        type="button"
        onClick={() => dispatch({ type: 'TOGGLE' })} 
        className={`w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center shadow-2xl transition-all duration-500 border-2 ${state.isOpen ? 'bg-white border-slate-200 text-[#0F1419]' : 'bg-[#0F1419] border-[#D4AF37] text-[#D4AF37]'}`}
      >
        {state.isOpen ? <X size={28} /> : <Bot size={32} />}
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

  return (
    <div className="bg-[#FDF9F3] min-h-screen relative">
      {/* Universal Splash Loader overlay during resonance setup */}
      <AnimatePresence>
        {!isResonating && (
          <motion.div 
            initial={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="z-[99999] fixed inset-0"
          >
            <SovereignLoader />
          </motion.div>
        )}
      </AnimatePresence>

      <Navbar />
      
      {/* System wrapper remains functional; ErrorBoundary isolates reconciliation loops */}
      <CoreErrorBoundary>
        <Suspense fallback={<SovereignLoader inline />}>
          <AnimatePresence mode="wait">
            <motion.main
              key={location.pathname}
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Routes location={location}>
                <Route path="/" element={<Home />} />
                <Route path="/apply" element={<Apply />} />
                <Route path="/investors" element={<Investors />} />
                <Route path="/mentors" element={<Mentors />} />
                <Route path="/admin-login" element={<Login />} />
                <Route path="/admin/*" element={<ProtectedHandshake><Admin /></ProtectedHandshake>} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </motion.main>
          </AnimatePresence>
        </Suspense>
      </CoreErrorBoundary>
      
      <SovereignAI />
    </div>
  );
}

const SovereignLoader = ({ inline = false }) => (
  <div className={`w-full bg-[#FDF9F3] flex flex-col items-center justify-center ${inline ? "h-[50vh]" : "h-screen fixed inset-0 z-[99999]"}`}>
    <div className="w-16 h-16 bg-[#0F1419] rounded-2xl flex items-center justify-center text-[#D4AF37] font-black italic border border-[#D4AF37]/20 animate-pulse">
      U
    </div>
    <div className="mt-6 flex items-center gap-2">
      <Loader2 className="animate-spin text-[#D4AF37]" size={14} />
      <span className="text-[8px] font-black uppercase tracking-[0.5em] text-[#0F1419]">Node_Sync...</span>
    </div>
  </div>
);