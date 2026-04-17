/**
 * ============================================================================================
 * UDAARO SOVEREIGN VENTURE OPERATING SYSTEM (VOS) - IMPERIAL EDITION v5.0.0
 * --------------------------------------------------------------------------------------------
 * DESIGN LANGUAGE: "NEO-HERITAGE IMPERIALISM"
 * LEAD ARCHITECT: APURVA PRIYADARSHI (BATCH 2026)
 * REVISION: NODE_INDIA_VANGUARD_FINAL
 * * MODULES INCLUDED:
 * 1. SOVEREIGN NEURAL LLM CORE (Gemini/OpenAI Integration Bridge)
 * 2. COMMAND BRIDGE (Institutional Navigation)
 * 3. SYNDICATE & ADVISORY ONBOARDING NODES
 * 4. EXECUTIVE INTELLIGENCE DASHBOARD (MCP)
 * 5. INFRASTRUCTURE & TELEMETRY MONITOR
 * 6. SOVEREIGN SECURITY PERIMETER (JWT/Handshake)
 * ============================================================================================
 */

import React, { useState, useEffect, useReducer, useRef, useMemo, useCallback, createContext, useContext, lazy, Suspense } from "react";
import { Link, BrowserRouter as Router, Routes, Route, useNavigate, useLocation, Navigate, Outlet } from "react-router-dom";
import { motion, AnimatePresence, useScroll, useTransform, useSpring, useInView } from "framer-motion";
import { 
  Shield, Zap, Cpu, Crown, Fingerprint, Box, ArrowUpRight, MessageSquare, X, Send, 
  Landmark, Binary, Network, ChevronRight, Globe, Lock, Info, ScrollText, Users, 
  Activity, BarChart3, Terminal, Database, HardDrive, Compass, Layers, Target, 
  Workflow, SearchCheck, Gem, PieChart, UserCheck, Briefcase, Lightbulb, Radio,
  Key, Eye, Share2, ClipboardCheck, Award, Sparkles, Command, CircuitBoard, 
  FileText, BookOpen, ShieldCheck, Microscope, ZapOff, TrendingUp, Search, Bell,
  User, Smartphone, MapPin, Building, Clock, Printer, Download, Maximize2, 
  AtSign, Hash, ArrowLeft, Rocket, ExternalLink, ShieldAlert, CheckCircle2, 
  AlertTriangle, Bot, Loader2, Globe2, Dna, FileCode, Layers3, History
} from "lucide-react";
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart as RePie, Pie, Cell, LineChart, Line, BarChart, Bar
} from "recharts";
import ReactMarkdown from 'react-markdown';

// --- I. IMPERIAL SYSTEM CONFIGURATION ---

const UDAARO_CONFIG = {
  version: "5.0.0-Imperial",
  founder: "Apurva Priyadarshi",
  batch: "2026",
  node: "INDIA_VANGUARD_01",
  apiBase: "https://udaaro-backend.onrender.com",
  handshakeDelay: 2000,
  neuralModel: "Sovereign-LLM-v5"
};

const THEME = {
  colors: {
    sandstone: "#FDF9F3",
    royalSlate: "#0F1419",
    goldLeaf: "#D4AF37",
    imperialBlue: "#1A365D",
    emerald: "#10B981",
    ruby: "#E11D48",
    cobalt: "#1D4ED8",
  },
  typography: {
    heading: "font-serif tracking-tighter italic",
    ui: "font-mono uppercase tracking-[0.4em] text-[10px] font-black",
    body: "font-sans font-medium italic"
  },
  transitions: {
    imperial: { duration: 1.2, ease: [0.16, 1, 0.3, 1] }
  }
};

/**
 * =============================================================================
 * II. SOVEREIGN NEURAL AI (THE LLM CORE)
 * =============================================================================
 */

const aiReducer = (state, action) => {
  switch (action.type) {
    case 'START_THINKING': return { ...state, isThinking: true };
    case 'STOP_THINKING': return { ...state, isThinking: false };
    case 'ADD_MESSAGE': return { ...state, messages: [...state.messages, action.payload] };
    case 'CLEAR_LOG': return { ...state, messages: [] };
    default: return state;
  }
};

const SovereignAI = () => {
  const [state, dispatch] = useReducer(aiReducer, {
    messages: [{ role: "system", content: "Sovereign Neural Node Active. Architect Priyadarshi recognized. Awaiting logic query." }],
    isThinking: false
  });
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [state.messages, state.isThinking]);

  const handleCommand = async (e) => {
    e.preventDefault();
    if (!input.trim() || state.isThinking) return;

    const userQuery = input;
    setInput("");
    dispatch({ type: 'ADD_MESSAGE', payload: { role: "user", content: userQuery } });
    dispatch({ type: 'START_THINKING' });

    try {
      // PROD NODE: Integrated LLM Handshake
      const response = await fetch(`${UDAARO_CONFIG.apiBase}/api/ai/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: userQuery, context: "Venture OS Structural Audit" }),
      });

      const data = await response.json();
      dispatch({ type: 'ADD_MESSAGE', payload: { role: "ai", content: data.response || "LOGIC_ERROR: Handshake Timeout." } });
    } catch (err) {
      dispatch({ type: 'ADD_MESSAGE', payload: { role: "ai", content: "CRITICAL_INFRASTRUCTURE_FAILURE: Neural Node Offline." } });
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
            className="w-[500px] h-[800px] bg-white border border-[#D4AF37]/30 rounded-[4rem] shadow-7xl flex flex-col overflow-hidden backdrop-blur-3xl"
          >
            {/* TERMINAL TOP BAR */}
            <div className="p-12 bg-[#0F1419] text-[#D4AF37] relative overflow-hidden">
              <div className="absolute inset-0 opacity-10 rotate-45 scale-150"><CircuitBoard size={400} /></div>
              <div className="relative z-10 flex justify-between items-center">
                <div>
                  <p className={THEME.typography.ui}>Neural Terminal v5.0</p>
                  <h4 className="text-3xl font-black italic tracking-tighter uppercase">Sovereign_AI</h4>
                </div>
                <button onClick={() => setIsOpen(false)} className="w-12 h-12 rounded-full border border-[#D4AF37]/20 flex items-center justify-center hover:rotate-90 transition-all"><X /></button>
              </div>
            </div>

            {/* MESSAGE INTERFACE */}
            <div className="flex-1 p-10 overflow-y-auto space-y-8 bg-[#FDF9F3]/40 custom-scrollbar" ref={scrollRef}>
              {state.messages.map((m, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: m.role === 'user' ? 20 : -20 }} animate={{ opacity: 1, x: 0 }} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] p-8 rounded-[2.5rem] shadow-sm relative group ${m.role === 'user' ? 'bg-[#0F1419] text-white rounded-tr-none' : 'bg-white border-2 border-slate-100 text-slate-800 rounded-tl-none shadow-luxury'}`}>
                    <div className="text-sm font-medium italic leading-relaxed prose">
                      <ReactMarkdown>{m.content}</ReactMarkdown>
                    </div>
                    {m.role === 'ai' && (
                      <div className="absolute -bottom-8 left-0 flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                         <button className="text-[9px] font-black uppercase tracking-widest text-[#D4AF37] flex items-center gap-2"><Download size={10}/> Export_Dossier</button>
                         <button className="text-[9px] font-black uppercase tracking-widest text-slate-400 flex items-center gap-2"><Share2 size={10}/> Share_Intel</button>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
              {state.isThinking && (
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-4 text-[#D4AF37]">
                    <Loader2 className="animate-spin" size={16} />
                    <span className={THEME.typography.ui + " animate-pulse"}>Architect_Analyzing_Weights...</span>
                  </div>
                  <div className="w-48 h-1 bg-slate-100 rounded-full overflow-hidden">
                    <motion.div animate={{ x: [-200, 200] }} transition={{ repeat: Infinity, duration: 1.5 }} className="w-1/2 h-full bg-[#D4AF37]" />
                  </div>
                </div>
              )}
            </div>

            {/* INPUT NODE */}
            <form onSubmit={handleCommand} className="p-8 border-t border-slate-100 bg-white flex gap-4">
              <input 
                value={input} 
                onChange={(e) => setInput(e.target.value)}
                placeholder="Submit structural query to the grid..." 
                className="flex-1 bg-slate-50 rounded-[1.5rem] px-8 py-5 text-xs italic font-bold outline-none border border-transparent focus:border-[#D4AF37]/50" 
              />
              <button disabled={state.isThinking} className="w-16 h-16 bg-[#0F1419] text-[#D4AF37] rounded-2xl flex items-center justify-center hover:bg-[#D4AF37] hover:text-white transition-all shadow-xl disabled:opacity-30">
                <Send size={20} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button 
        whileHover={{ scale: 1.1, rotate: 10 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-28 h-28 bg-[#0F1419] border-4 border-[#D4AF37] rounded-full flex items-center justify-center text-[#D4AF37] shadow-luxury relative group"
      >
        <div className="absolute inset-0 rounded-full border-2 border-[#D4AF37] animate-ping opacity-20 group-hover:hidden" />
        <Bot size={40} />
      </motion.button>
    </div>
  );
};

/**
 * =============================================================================
 * III. IMPERIAL ATOMS & MOLECULES (UI KIT)
 * =============================================================================
 */

const JaliPattern = () => (
  <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-0">
    <svg width="100%" height="100%">
      <pattern id="jali-grid" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
        <path d="M60 0 L120 60 L60 120 L0 60 Z" fill="none" stroke="currentColor" strokeWidth="1" />
        <circle cx="60" cy="60" r="15" fill="none" stroke="currentColor" strokeWidth="1" />
      </pattern>
      <rect width="100%" height="100%" fill="url(#jali-grid)" />
    </svg>
  </div>
);

const TelemetryBadge = ({ label, status, color = "emerald" }) => (
  <div className="flex items-center gap-3 px-5 py-2 bg-[#0F1419]/5 border border-slate-200 rounded-full">
    <div className={`w-1.5 h-1.5 rounded-full bg-${color}-500 animate-pulse`} />
    <span className={THEME.typography.ui + " text-slate-500 tracking-[0.2em]"}>{label}: {status}</span>
  </div>
);

const SectionHeading = ({ badge, title, subtitle, light = false }) => (
  <div className="mb-40">
    <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} className="flex items-center gap-6 mb-10">
      <div className={`h-[1px] w-20 ${light ? 'bg-white/20' : 'bg-[#D4AF37]'}`} />
      <span className={`${THEME.typography.ui} ${light ? 'text-white/50' : 'text-[#D4AF37]'}`}>{badge}</span>
    </motion.div>
    <h2 className={`text-7xl md:text-[11rem] font-black italic tracking-tighter leading-[0.8] mb-12 uppercase ${light ? 'text-white' : 'text-[#0F1419]'}`}>
      {title}
    </h2>
    <p className={`text-2xl md:text-3xl font-medium italic max-w-3xl leading-relaxed ${light ? 'text-slate-400' : 'text-slate-500'}`}>
      {subtitle}
    </p>
  </div>
);

/**
 * =============================================================================
 * IV. COMMAND BRIDGE (NAVIGATION)
 * =============================================================================
 */

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-[999] transition-all duration-700 ${isScrolled ? 'bg-white/80 backdrop-blur-2xl py-6 border-b border-[#D4AF37]/10' : 'bg-transparent py-12'}`}>
      <div className="max-w-[1800px] mx-auto px-12 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-6 group">
          <div className="w-14 h-14 bg-[#0F1419] text-[#D4AF37] rounded-2xl flex items-center justify-center font-black italic text-3xl shadow-xl border border-[#D4AF37]/20 group-hover:rotate-90 transition-all">U</div>
          <div className="flex flex-col">
            <span className="text-3xl font-black italic tracking-tighter uppercase leading-none">Udaaro</span>
            <span className={THEME.typography.ui + " mt-2 opacity-50"}>Sovereign_OS</span>
          </div>
        </Link>
        
        <div className="hidden lg:flex items-center gap-16">
          {["Identity", "Syndicate", "Advisory", "Intelligence"].map((item) => (
            <Link key={item} to={`/${item.toLowerCase()}`} className={`${THEME.typography.ui} hover:text-[#D4AF37] transition-colors relative group`}>
              {item}
              <motion.div className="absolute -bottom-2 left-0 h-[2px] bg-[#D4AF37] w-0 group-hover:w-full transition-all" />
            </Link>
          ))}
          <Link to="/apply" className="px-10 py-4 bg-[#0F1419] text-white rounded-full text-[10px] font-black uppercase tracking-[0.5em] hover:bg-[#D4AF37] hover:text-white transition-all shadow-xl italic">
            Initiate_Admission
          </Link>
        </div>
      </div>
    </nav>
  );
};

/**
 * =============================================================================
 * V. CORE NODES: LANDING & OPERATING MODEL
 * =============================================================================
 */

const Home = () => {
  const { scrollYProgress } = useScroll();
  const scale = useSpring(useTransform(scrollYProgress, [0, 0.2], [1, 0.85]), { stiffness: 100, damping: 30 });
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div className="relative">
      {/* 1. HERO PORTICO */}
      <motion.header style={{ scale }} className="relative h-screen flex flex-col items-center justify-center text-center px-10">
        <JaliPattern />
        <motion.div style={{ opacity }} className="relative z-10 max-w-[1500px]">
          <div className="mb-16 inline-flex items-center gap-6 px-10 py-3 bg-white border border-[#D4AF37]/20 rounded-full shadow-luxury">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className={THEME.typography.ui}>Batch 2026 Sovereign Grid Online</span>
          </div>
          <h1 className="text-7xl md:text-[14rem] font-black italic uppercase tracking-tighter leading-[0.75] mb-16">
            Engineering <br /> <span className="text-gradient-gold">Sovereignty.</span>
          </h1>
          <p className="max-w-4xl mx-auto text-xl md:text-4xl text-slate-500 font-medium italic leading-relaxed mb-24">
            Udaaro is a selective <span className="text-[#0F1419] font-black underline decoration-[#D4AF37] decoration-[12px] underline-offset-[12px]">Venture Operating System</span> enabling high-potential founders to build generational institutions.
          </p>
          <div className="flex flex-wrap justify-center gap-10">
            <button className="px-20 py-10 bg-[#0F1419] text-white rounded-[3rem] font-black uppercase tracking-[0.5em] text-xs hover:bg-[#D4AF37] transition-all shadow-7xl shadow-black/20 italic">
              Initiate Protocol
            </button>
            <button className="px-20 py-10 border-2 border-[#0F1419]/10 rounded-[3rem] font-black uppercase tracking-[0.5em] text-xs hover:bg-white transition-all flex items-center gap-4 italic shadow-sm">
              System Logic <ArrowUpRight size={20} />
            </button>
          </div>
        </motion.div>
      </motion.header>

      {/* 2. THE THREE-STAGE OPERATING MODEL */}
      <section className="py-80 bg-white px-12 relative z-10">
        <div className="max-w-[1700px] mx-auto">
          <SectionHeading 
            badge="Operating model v5.0"
            title="System Over <br /> Service."
            subtitle="We functionally redefine how startups are built—from chaotic experimentation to structured, system-driven execution."
          />
          
          <div className="grid lg:grid-cols-3 gap-16">
            {[
              { step: "01", icon: Fingerprint, title: "Curated Admission", desc: "A highly selective entry protocol evaluating problem clarity, founder capability, and execution intent." },
              { step: "02", icon: Workflow, title: "Strategic Synthesis", desc: "Founders are aligned with execution frameworks, strategic mentorship, and AI-driven capital matching." },
              { step: "03", icon: Crown, title: "Global Ascension", desc: "Systematic transition into a sustainable, independent institution capable of global market dominance." }
            ].map((node, i) => (
              <motion.div 
                key={i} 
                whileHover={{ y: -20, borderColor: "#D4AF37" }}
                className="p-16 bg-[#FDF9F3] border border-slate-100 rounded-[5rem] transition-all duration-700 relative overflow-hidden group"
              >
                <div className="absolute -right-4 -top-4 text-slate-200 opacity-[0.1] group-hover:opacity-[0.2] transition-opacity">
                  <node.icon size={300} />
                </div>
                <div className="text-6xl font-black italic text-[#D4AF37] mb-12 opacity-30 group-hover:opacity-100 transition-opacity">{node.step}</div>
                <node.icon size={60} className="text-[#0F1419] mb-12" />
                <h3 className="text-4xl font-black italic uppercase tracking-tighter mb-8 leading-none">{node.title}</h3>
                <p className="text-xl text-slate-500 font-medium italic leading-relaxed leading-relaxed">{node.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. RADICAL INTEGRITY CHARTER */}
      <section className="py-80 bg-[#0F1419] text-white px-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-32 opacity-[0.03] rotate-12 scale-150"><Shield size={800} /></div>
        <div className="max-w-[1700px] mx-auto relative z-10">
          <SectionHeading 
            light
            badge="The Sovereign Charter"
            title="Radical <br /> Integrity."
            subtitle="We avoid growth models driven purely by external dependency and hype. We build for long-term value creation."
          />
          
          <div className="grid lg:grid-cols-2 gap-32">
            <div className="space-y-24">
              {[
                { t: "Honest Feedback Loops", d: "Direct communication with no inflated narratives. Only execution-led clarity." },
                { t: "Independent Scaling", d: "We build companies that are sustainable, independent, and globally competitive." },
                { t: "Closed-Loop Ecosystem", d: "Structural alignment of founders, capital, and mentorship into one neural system." }
              ].map((item, i) => (
                <div key={i} className="flex gap-12 group">
                  <div className="w-2 h-20 bg-[#D4AF37] group-hover:scale-y-125 transition-transform origin-top" />
                  <div>
                    <h4 className="text-4xl font-black italic uppercase tracking-tighter mb-6">{item.t}</h4>
                    <p className="text-2xl text-slate-400 font-medium italic leading-relaxed">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="p-24 bg-white/5 border border-white/10 rounded-[6rem] flex flex-col items-center justify-center text-center backdrop-blur-xl">
               <Lock size={120} className="text-[#D4AF37] mb-12 animate-pulse" />
               <h3 className="text-5xl font-black italic uppercase tracking-tighter mb-8">Access Handshake</h3>
               <p className={THEME.typography.ui + " mb-12 opacity-40"}>Confidential Intake Node v5.0</p>
               <Link to="/apply" className="px-16 py-8 bg-[#D4AF37] text-[#0F1419] rounded-full font-black uppercase tracking-[0.5em] text-[10px] italic shadow-7xl hover:scale-105 transition-all">Submit Portfolio</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

/**
 * =============================================================================
 * VI. SYNDICATE NODE (INVESTOR GATEWAY)
 * =============================================================================
 */

const Investors = () => {
  const [formData, setFormData] = useState({ name: "", email: "", firm: "", ticket: "", thesis: "" });
  const [status, setStatus] = useState("READY");

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("SYNCING");
    setTimeout(() => setStatus("SUCCESS"), 3000);
  };

  return (
    <div className="min-h-screen bg-[#FDF9F3] pt-48 px-12">
      <div className="max-w-[1700px] mx-auto grid lg:grid-cols-2 gap-32">
        <div>
          <SectionHeading 
            badge="The Syndicate Node"
            title="Strategic <br /> Resonance."
            subtitle="Udaaro aligns angel investors and venture capitalists with structural dealflow vetted by the Venture OS."
          />
          <div className="grid md:grid-cols-2 gap-10 mt-20">
             <div className="p-12 bg-white rounded-[4rem] border border-slate-100 shadow-xl">
               <Landmark className="text-[#D4AF37] mb-8" size={40} />
               <h4 className="text-2xl font-black italic uppercase mb-4">Capital Logic</h4>
               <p className="text-slate-500 font-medium italic">Deploy capital into repeatable systems with minimal operational fragility.</p>
             </div>
             <div className="p-12 bg-white rounded-[4rem] border border-slate-100 shadow-xl">
               <ShieldCheck className="text-[#D4AF37] mb-8" size={40} />
               <h4 className="text-2xl font-black italic uppercase mb-4">Vetting Sync</h4>
               <p className="text-slate-500 font-medium italic">Direct access to founder dashboards and real-time execution telemetry.</p>
             </div>
          </div>
        </div>

        <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} className="bg-[#0F1419] p-20 rounded-[6rem] shadow-7xl relative overflow-hidden">
           <div className="absolute top-0 left-0 w-full h-2 bg-white/5">
             <motion.div initial={{ width: 0 }} animate={{ width: status === 'SUCCESS' ? '100%' : '30%' }} className="h-full bg-[#D4AF37] shadow-[0_0_15px_#D4AF37]" />
           </div>
           
           <AnimatePresence mode="wait">
             {status === 'SUCCESS' ? (
               <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-20">
                 <CheckCircle2 size={120} className="text-emerald-500 mx-auto mb-10" />
                 <h3 className="text-5xl font-black italic uppercase text-white mb-8">Handshake Synchronized</h3>
                 <p className="text-slate-400 text-xl italic mb-12">The Syndicate Advisory Node will initiate contact within 24 operational hours.</p>
                 <button onClick={() => setStatus("READY")} className="text-[#D4AF37] font-black uppercase tracking-widest text-[10px] italic underline">Reset_Terminal</button>
               </motion.div>
             ) : (
               <form onSubmit={handleSubmit} className="space-y-12">
                 <div className="grid md:grid-cols-2 gap-10">
                   <div className="space-y-4">
                     <label className={THEME.typography.ui + " text-[#D4AF37] ml-4"}>Executive_Identity</label>
                     <input className="w-full bg-white/5 border border-white/10 rounded-[2rem] px-8 py-6 text-white outline-none focus:border-[#D4AF37] transition-all italic font-bold" placeholder="Full Legal Name" required />
                   </div>
                   <div className="space-y-4">
                     <label className={THEME.typography.ui + " text-[#D4AF37] ml-4"}>Corporate_Mail</label>
                     <input className="w-full bg-white/5 border border-white/10 rounded-[2rem] px-8 py-6 text-white outline-none focus:border-[#D4AF37] transition-all italic font-bold" type="email" placeholder="hni@institution.com" required />
                   </div>
                 </div>
                 <div className="space-y-4">
                   <label className={THEME.typography.ui + " text-[#D4AF37] ml-4"}>Firm_Affiliation</label>
                   <input className="w-full bg-white/5 border border-white/10 rounded-[2rem] px-8 py-6 text-white outline-none focus:border-[#D4AF37] transition-all italic font-bold" placeholder="Managing Partner @ Asset Management" required />
                 </div>
                 <div className="space-y-4">
                   <label className={THEME.typography.ui + " text-[#D4AF37] ml-4"}>Deployment_Thesis</label>
                   <textarea rows="5" className="w-full bg-white/5 border border-white/10 rounded-[3rem] px-8 py-8 text-white outline-none focus:border-[#D4AF37] transition-all italic font-bold leading-relaxed" placeholder="Architect your sector focus and ticket size deployment logic..." required />
                 </div>
                 
                 <button className="w-full py-10 bg-[#D4AF37] text-[#0F1419] rounded-full font-black uppercase tracking-[0.5em] text-xs italic shadow-7xl hover:bg-white transition-all flex items-center justify-center gap-5 group">
                   {status === 'SYNCING' ? <Loader2 className="animate-spin" /> : <>Execute Handshake <ChevronRight size={20} className="group-hover:translate-x-3 transition-transform" /></>}
                 </button>
               </form>
             )}
           </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

/**
 * =============================================================================
 * VII. INTELLIGENCE DASHBOARD (MCP - MASTER CONTROL PANEL)
 * =============================================================================
 */

const MasterControl = () => {
  const [activeTab, setActiveTab] = useState("intelligence");
  const chartData = [
    { name: 'Node_A', val: 4000 }, { name: 'Node_B', val: 3000 },
    { name: 'Node_C', val: 5500 }, { name: 'Node_D', val: 8200 },
    { name: 'Node_E', val: 7400 }, { name: 'Node_F', val: 9500 },
  ];

  return (
    <div className="h-screen w-full bg-[#FDF9F3] flex font-serif overflow-hidden select-none">
      {/* 1. SIDEBAR COMMANDER */}
      <aside className="w-80 bg-[#0F1419] flex flex-col p-10 relative z-50">
        <div className="mb-24">
          <Link to="/" className="flex items-center gap-5">
             <div className="w-12 h-12 bg-[#D4AF37] rounded-xl flex items-center justify-center text-[#0F1419] font-black italic shadow-lg">U</div>
             <span className="text-2xl font-black text-white italic uppercase tracking-tighter">Udaaro</span>
          </Link>
          <p className={THEME.typography.ui + " mt-4 text-slate-500"}>Master_Control_v5</p>
        </div>

        <nav className="flex-1 space-y-6">
          {[
            { id: "intelligence", icon: BarChart3, label: "Neural Insights" },
            { id: "vanguard", icon: UserCheck, label: "Founder Nodes" },
            { id: "syndicate", icon: Landmark, label: "Capital Flow" },
            { id: "advisory", icon: ShieldCheck, label: "Council Logic" }
          ].map((item) => (
            <button 
              key={item.id} 
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-6 px-6 py-5 rounded-2xl transition-all duration-500 ${activeTab === item.id ? 'bg-[#D4AF37] text-[#0F1419] shadow-xl translate-x-2' : 'text-slate-500 hover:text-white hover:bg-white/5'}`}
            >
              <item.icon size={20} />
              <span className={THEME.typography.ui}>{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="mt-auto pt-10 border-t border-white/5">
           <div className="flex items-center gap-4 text-emerald-500 mb-6">
             <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_#10b981]" />
             <span className={THEME.typography.ui}>Node_Sync_Stable</span>
           </div>
           <button className="flex items-center gap-4 text-slate-600 hover:text-rose-500 transition-colors">
             <ZapOff size={18}/> <span className={THEME.typography.ui}>Terminate_Session</span>
           </button>
        </div>
      </aside>

      {/* 2. MAIN WORKSPACE */}
      <main className="flex-1 flex flex-col h-screen overflow-y-auto relative bg-jali-grid">
         <header className="p-12 sticky top-0 z-40 bg-[#FDF9F3]/80 backdrop-blur-xl border-b border-[#D4AF37]/10 flex justify-between items-center px-16">
            <h1 className="text-5xl font-black italic tracking-tighter uppercase">{activeTab}</h1>
            <div className="flex items-center gap-8">
               <div className="hidden xl:flex items-center gap-4 px-6 py-3 bg-white border border-slate-200 rounded-2xl shadow-sm">
                  <Globe2 size={16} className="text-[#D4AF37] animate-spin-slow" />
                  <span className={THEME.typography.ui + " text-slate-500 tracking-widest"}>GRID_NORTH_INDIA</span>
               </div>
               <div className="w-14 h-14 bg-[#0F1419] rounded-2xl border-2 border-[#D4AF37] flex items-center justify-center text-[#D4AF37] shadow-xl">
                  <Fingerprint size={28} />
               </div>
            </div>
         </header>

         <div className="p-16 max-w-[1700px] mx-auto w-full space-y-16">
            {/* STAT GRID */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
               <StatCard label="Logic_Vetting" value="1.2%" icon={<Target/>} trend="+0.2%" />
               <StatCard label="Handshake_Speed" value="14ms" icon={<Zap/>} trend="STABLE" />
               <StatCard label="Admission_Rate" value="Elite" icon={<UserCheck/>} color="text-blue-500" />
               <StatCard label="Audit_Integrity" value="Verified" icon={<ShieldCheck/>} color="text-emerald-500" />
            </div>

            {/* ANALYTICS SECTION */}
            <div className="grid lg:grid-cols-12 gap-10">
               <div className="lg:col-span-8 bg-white p-16 rounded-[5rem] shadow-xl border border-slate-100 relative group overflow-hidden">
                  <div className="absolute top-0 right-0 p-16 opacity-[0.02] group-hover:scale-110 transition-transform"><TrendingUp size={400} /></div>
                  <div className="flex justify-between items-center mb-16 relative z-10">
                    <div className="flex items-center gap-6">
                      <BarChart3 className="text-[#D4AF37]" size={32} />
                      <h2 className="text-4xl font-black italic uppercase tracking-tighter">Ecosystem_Velocity</h2>
                    </div>
                  </div>
                  <div className="h-[450px] relative z-10">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={chartData}>
                        <defs>
                          <linearGradient id="gGold" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#D4AF37" stopOpacity={0.4}/>
                            <stop offset="95%" stopColor="#D4AF37" stopOpacity={0}/>
                          </linearGradient>
                        </defs>
                        <Tooltip contentStyle={{ background: '#0F1419', borderRadius: '30px', border: 'none', color: '#fff', padding: '20px' }} />
                        <Area type="monotone" dataKey="val" stroke="#D4AF37" strokeWidth={6} fill="url(#gGold)" />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
               </div>

               <div className="lg:col-span-4 space-y-10">
                  <div className="bg-[#0F1419] p-12 rounded-[4rem] shadow-2xl text-white border border-[#D4AF37]/20 flex flex-col justify-between h-full">
                     <div>
                        <h4 className={THEME.typography.ui + " text-[#D4AF37] mb-8"}>Node_Telemetry</h4>
                        <div className="space-y-6">
                           {[
                             { label: "IP_Shield", status: "Enabled", icon: <Lock size={14}/> },
                             { label: "Logic_Core", status: "Healthy", icon: <Cpu size={14}/> },
                             { label: "Cloud_Mesh", status: "Secure", icon: <Globe size={14}/> }
                           ].map((stat, i) => (
                             <div key={i} className="flex justify-between items-center p-4 bg-white/5 rounded-2xl border border-white/5 hover:border-[#D4AF37]/30 transition-all group">
                                <div className="flex items-center gap-4 text-slate-400 group-hover:text-white transition-colors">{stat.icon} <span>{stat.label}</span></div>
                                <span className="text-[9px] font-black text-emerald-500 uppercase">{stat.status}</span>
                             </div>
                           ))}
                        </div>
                     </div>
                     <button className="w-full py-6 mt-12 border border-white/10 rounded-2xl font-black uppercase tracking-widest text-[9px] hover:bg-white hover:text-[#0F1419] transition-all italic">Run_Global_Sync</button>
                  </div>
               </div>
            </div>

            {/* ASSET LOGS */}
            <div className="bg-white rounded-[4rem] border border-slate-100 shadow-2xl overflow-hidden">
               <div className="p-10 border-b border-slate-50 bg-slate-50/50 flex justify-between items-center">
                  <h3 className="text-3xl font-black italic uppercase tracking-tighter">Handshake_Registry</h3>
                  <div className="flex items-center gap-4 px-6 py-3 bg-white rounded-2xl shadow-sm border border-slate-200">
                    <Search size={16} className="text-slate-300" />
                    <input className="bg-transparent outline-none text-xs italic font-bold w-48" placeholder="Search node metadata..." />
                  </div>
               </div>
               <div className="overflow-x-auto">
                 <table className="w-full text-left">
                    <thead className="bg-[#0F1419] text-[#D4AF37] text-[10px] font-black uppercase tracking-widest italic">
                       <tr>
                          <th className="p-12">Handshake_Identity</th>
                          <th className="p-12">Venture_Origin</th>
                          <th className="p-12">Logic_State</th>
                          <th className="p-12 text-right">Node_Control</th>
                       </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-50 italic">
                       {[
                         { id: "NODE_X1", name: "Aayansh Pandey", org: "Deep_Fin_Node", state: "Verified", sector: "Fintech" },
                         { id: "NODE_X2", name: "Shivam Yadav", org: "Dairy_Chain_OS", state: "Auditing", sector: "Agri-Tech" },
                         { id: "NODE_X3", name: "AP_Vanguard", org: "UDAARO_CORE", state: "Master", sector: "Infrastructure" },
                       ].map((item, i) => (
                         <tr key={i} className="hover:bg-[#FDF9F3] transition-all group">
                            <td className="p-10">
                               <div className="flex items-center gap-6">
                                  <div className="w-14 h-14 bg-slate-100 rounded-2xl flex items-center justify-center font-black text-xl group-hover:bg-[#0F1419] group-hover:text-[#D4AF37] transition-all">{item.name.charAt(0)}</div>
                                  <div>
                                     <p className="font-black text-xl uppercase tracking-tighter">{item.name}</p>
                                     <p className="text-[9px] text-slate-400 font-mono tracking-widest">{item.id}</p>
                                  </div>
                               </div>
                            </td>
                            <td className="p-10">
                               <p className="font-black text-slate-700">{item.org}</p>
                               <p className="text-[9px] font-bold text-[#D4AF37] uppercase">{item.sector}</p>
                            </td>
                            <td className="p-10">
                               <span className={`px-4 py-1.5 rounded-full text-[9px] font-black uppercase ${item.state === 'Verified' ? 'bg-emerald-100 text-emerald-600' : 'bg-blue-100 text-blue-600'}`}>{item.state}</span>
                            </td>
                            <td className="p-10 text-right space-x-4">
                               <button className="p-4 bg-white shadow-lg rounded-2xl hover:text-[#D4AF37] border border-slate-100"><Eye size={18}/></button>
                               <button className="p-4 bg-white shadow-lg rounded-2xl hover:text-rose-500 border border-slate-100"><Trash2 size={18}/></button>
                            </td>
                         </tr>
                       ))}
                    </tbody>
                 </table>
               </div>
            </div>
         </div>

         <footer className="mt-auto p-12 border-t border-slate-100 opacity-30 flex justify-between items-center text-[10px] font-black uppercase tracking-[0.5em] italic px-16">
            <span>© 2026 UDAARO GLOBAL VENTURES</span>
            <div className="flex gap-12">
               <span>Ledger_State: Encrypted</span>
               <span>Encryption: AES_256_GCM</span>
            </div>
         </footer>
      </main>
    </div>
  );
};

const StatCard = ({ label, value, icon, trend, color = "text-[#0F1419]" }) => (
  <motion.div whileHover={{ y: -10 }} className="p-10 bg-white rounded-[3.5rem] border border-slate-100 shadow-xl relative overflow-hidden group">
    <div className="absolute right-0 top-0 p-10 opacity-[0.03] group-hover:scale-125 transition-transform">{icon}</div>
    <p className={THEME.typography.ui + " text-[#D4AF37] mb-6"}>{label}</p>
    <div className="flex items-end justify-between">
      <p className={`text-6xl font-black italic tracking-tighter leading-none ${color}`}>{value}</p>
      {trend && <span className="text-[10px] font-black text-emerald-500 bg-emerald-50 px-3 py-1 rounded-full">{trend}</span>}
    </div>
  </motion.div>
);

/**
 * =============================================================================
 * VIII. THE SOVEREIGN WRAPPER & ROUTING ENGINE
 * =============================================================================
 */

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-[#FDF9F3] text-[#0F1419] selection:bg-[#D4AF37] selection:text-white">
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/identity" element={<div className="pt-64 px-20"><SectionHeading badge="System Logic" title="Founder <br /> Identity." subtitle="Our architectural theory behind the Venture Operating System." /></div>} />
          <Route path="/syndicate" element={<Investors />} />
          <Route path="/advisory" element={<div className="pt-64 px-20"><SectionHeading badge="Alpha Council" title="Advisory <br /> Resonance." subtitle="Industrial veterans shaping the structural integrity of India's sovereign economy." /></div>} />
          <Route path="/intelligence" element={<MasterControl />} />
          <Route path="/apply" element={<div className="h-screen flex items-center justify-center pt-24"><motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="p-24 bg-white rounded-[6rem] shadow-7xl text-center"><Lock size={100} className="text-[#D4AF37] mx-auto mb-10" /><h2 className="text-6xl font-black italic uppercase mb-8">Admissions Open</h2><p className="text-2xl text-slate-500 italic mb-12">Batch 2026 Founder Handshake Protocol active.</p><button className="btn-imperial">Initiate Handshake</button></motion.div></div>} />
          <Route path="/privacy" element={<div className="pt-64 px-20"><SectionHeading badge="Governance" title="Data <br /> Sovereignty." subtitle="Your intellectual property is protected by AES-256 institutional encryption." /></div>} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>

        <SovereignAI />
        
        <footer className="bg-[#0F1419] pt-72 pb-24 px-12 border-t border-white/5 relative overflow-hidden">
          <div className="max-w-[1700px] mx-auto">
            <div className="grid lg:grid-cols-6 gap-32 mb-64">
               <div className="lg:col-span-2">
                  <div className="flex items-center gap-6 mb-16">
                     <div className="w-16 h-16 bg-[#D4AF37] text-[#0F1419] rounded-2xl flex items-center justify-center font-black italic text-4xl shadow-2xl">U</div>
                     <h3 className="text-6xl font-black text-white uppercase italic tracking-tighter leading-none">Udaaro</h3>
                  </div>
                  <p className="text-slate-400 text-2xl font-medium italic leading-relaxed max-w-sm mb-20 opacity-60">The Sovereign Venture Operating System. Engineered for Indian innovation clusters and founders building legacy.</p>
                  <div className="flex gap-8">
                     {[Globe, Binary, Radio, Activity].map((Icon, i) => (
                       <div key={i} className="w-16 h-16 rounded-[1.5rem] border border-white/10 flex items-center justify-center text-white/30 hover:text-[#D4AF37] hover:border-[#D4AF37] transition-all cursor-crosshair"><Icon size={24} /></div>
                     ))}
                  </div>
               </div>
               
               <div className="space-y-12">
                  <h5 className={THEME.typography.ui + " text-[#D4AF37]"}>The Ecosystem</h5>
                  <ul className="space-y-6 text-sm font-black uppercase tracking-[0.3em] italic text-slate-500">
                    <li><Link to="/apply" className="hover:text-white transition-colors">Vanguard Intake</Link></li>
                    <li><Link to="/syndicate" className="hover:text-white transition-colors">Syndicate Portal</Link></li>
                    <li><Link to="/advisory" className="hover:text-white transition-colors">Advisory Node</Link></li>
                    <li><Link to="/about" className="hover:text-white transition-colors">Alpha Roadmap</Link></li>
                  </ul>
               </div>

               <div className="space-y-12">
                  <h5 className={THEME.typography.ui + " text-[#D4AF37]"}>Governance</h5>
                  <ul className="space-y-6 text-sm font-black uppercase tracking-[0.3em] italic text-slate-500">
                    <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Protocol</Link></li>
                    <li><Link to="/privacy" className="hover:text-white transition-colors">Access Charter</Link></li>
                    <li><Link to="/privacy" className="hover:text-white transition-colors">Legal Ledger</Link></li>
                  </ul>
               </div>

               <div className="lg:col-span-2 space-y-12">
                  <h5 className={THEME.typography.ui + " text-[#D4AF37]"}>Telemetry Sync</h5>
                  <div className="p-10 bg-white/5 border border-white/10 rounded-[3rem]">
                     <div className="flex justify-between items-center mb-6">
                        <span className="text-[9px] font-black uppercase italic tracking-[0.4em] text-slate-500">System_Uptime</span>
                        <span className="text-[9px] font-black italic text-emerald-500">99.99%</span>
                     </div>
                     <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                        <motion.div initial={{ width: 0 }} whileInView={{ width: "99.9%" }} className="h-full bg-[#D4AF37]" />
                     </div>
                  </div>
               </div>
            </div>

            <div className="pt-24 border-t border-white/5 flex flex-col xl:flex-row justify-between items-center gap-12 opacity-40">
               <span className="text-[10px] font-black uppercase tracking-[0.5em] italic">© 2026 UDAARO GLOBAL VENTURES. ARCHITECTED BY APURVA PRIYADARSHI.</span>
               <div className="flex gap-12 text-[9px] font-black uppercase tracking-[0.5em] italic">
                  <span>Ledger State: Stable</span>
                  <span>Encrypted Access Verified</span>
               </div>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;

/**
 * =============================================================================
 * IX. STYLING PROTOCOLS (CSS-IN-JS GLOBAL)
 * =============================================================================
 */

const styleInject = `
  .custom-scrollbar::-webkit-scrollbar { width: 4px; }
  .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
  .custom-scrollbar::-webkit-scrollbar-thumb { background: #D4AF3733; border-radius: 20px; }
  .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #D4AF37; }
  
  .bg-jali-grid {
    background-image: radial-gradient(circle, #D4AF37 0.8px, transparent 0.8px);
    background-size: 40px 40px;
    opacity: 0.05;
  }
  
  .text-gradient-gold {
    background: linear-gradient(to bottom right, #0F1419, #D4AF37, #0F1419);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .shadow-luxury {
    box-shadow: 0 40px 100px -20px rgba(15, 20, 25, 0.12);
  }

  @keyframes floatImperial {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-20px); }
  }

  .btn-imperial {
    padding: 2.5rem 5rem;
    background: #0F1419;
    color: white;
    border-radius: 3rem;
    text-transform: uppercase;
    font-weight: 900;
    font-style: italic;
    letter-spacing: 0.6em;
    font-size: 10px;
    transition: all 0.7s cubic-bezier(0.16, 1, 0.3, 1);
    box-shadow: 0 25px 50px -12px rgba(0,0,0,0.2);
  }

  .btn-imperial:hover {
    background: #D4AF37;
    color: #0F1419;
    transform: scale(1.05);
  }
`;

if (typeof document !== 'undefined') {
  const styleSheet = document.createElement("style");
  styleSheet.innerText = styleInject;
  document.head.appendChild(styleSheet);
}