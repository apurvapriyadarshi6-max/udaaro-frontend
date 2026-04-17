/**
 * ============================================================================================
 * UDAARO SOVEREIGN VENTURE OPERATING SYSTEM (VOS) - IMPERIAL EDITION v6.0.0
 * --------------------------------------------------------------------------------------------
 * DESIGN LANGUAGE: "NEO-HERITAGE IMPERIALISM"
 * LEAD ARCHITECT: APURVA PRIYADARSHI (BATCH 2026)
 * REVISION: ULTIMATE_RESILIENCE_CORE
 * * CORE ARCHITECTURAL PRINCIPLES:
 * 1.  STRICT_RESONANCE_GATE: Zero-drift hydration protocol.
 * 2.  NEURAL_INTEGRITY: Isolated LLM compute nodes.
 * 3.  IMPERIAL_AESTHETIC: Deep-heritage UI nodes.
 * 4.  EXECUTIVE_MCP: High-fidelity telemetry dashboards.
 * ============================================================================================
 */

import React, { 
  useState, useEffect, useReducer, useRef, useMemo, 
  useCallback, createContext, useContext, lazy, Suspense 
} from "react";
import { 
  Link, BrowserRouter as Router, Routes, Route, 
  useNavigate, useLocation, Navigate, Outlet 
} from "react-router-dom";
import { 
  motion, AnimatePresence, useScroll, useTransform, 
  useSpring, useInView, useAnimationFrame 
} from "framer-motion";
import { 
  Shield, Zap, Cpu, Crown, Fingerprint, Box, ArrowUpRight, MessageSquare, X, Send, 
  Landmark, Binary, Network, ChevronRight, Globe, Lock, Info, ScrollText, Users, 
  Activity, BarChart3, Terminal, Database, HardDrive, Compass, Layers, Target, 
  Workflow, SearchCheck, Gem, PieChart, UserCheck, Briefcase, Lightbulb, Radio,
  Key, Eye, Share2, ClipboardCheck, Award, Sparkles, Command, CircuitBoard, 
  FileText, BookOpen, ShieldCheck, Microscope, ZapOff, TrendingUp, Search, Bell,
  User, Smartphone, MapPin, Building, Clock, Printer, Download, Maximize2, 
  AtSign, Hash, ArrowLeft, Rocket, ExternalLink, ShieldAlert, CheckCircle2, 
  AlertTriangle, Bot, Loader2, Globe2, Dna, FileCode, Layers3, History, 
  ShieldQuestion, Gavel, Scale, Boxes, Coins, Landmark as Institution,
  Brain, Languages, PenTool, Code2, Presentation, PieChart as PieIcon,
  HardHat, Factory, Wind, Droplets, HeartPulse, GraduationCap
} from "lucide-react";
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart as RePie, Pie, Cell, LineChart, Line, BarChart, Bar, Legend,
  RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar
} from "recharts";
import ReactMarkdown from 'react-markdown';

/** * =============================================================================
 * I. SYSTEM CONFIGURATION & GLOBAL STATE
 * ============================================================================= */

const UDAARO_CONFIG = {
  version: "6.0.0-Imperial",
  founder: "Apurva Priyadarshi",
  batch: "2026",
  node: "INDIA_VANGUARD_01",
  apiBase: "https://udaaro-backend.onrender.com",
  handshakeDelay: 1500,
  neuralModel: "Sovereign-LLM-v6-Turbo",
  encryption: "AES-256-GCM-INSTITUTIONAL",
  telemetryInterval: 5000
};

const THEME = {
  colors: {
    sandstone: "#FDF9F3",
    royalSlate: "#0F1419",
    goldLeaf: "#D4AF37",
    goldMuted: "#B59431",
    goldBright: "#F9D976",
    imperialBlue: "#1A365D",
    emerald: "#10B981",
    ruby: "#E11D48",
    graphite: "#1E293B"
  },
  typography: {
    heading: "font-serif tracking-tighter italic",
    ui: "font-mono uppercase tracking-[0.4em] text-[10px] font-black",
    body: "font-sans font-medium italic"
  },
  animations: {
    imperial: { duration: 1.2, ease: [0.22, 1, 0.36, 1] }
  }
};

/** * =============================================================================
 * II. HYDRATION SHIELD (THE FIX FOR UNCAUGHT ERRORS)
 * ============================================================================= */

const SovereignLoader = () => (
  <div className="fixed inset-0 z-[99999] bg-[#FDF9F3] flex flex-col items-center justify-center">
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center">
      <div className="w-48 h-48 bg-[#0F1419] rounded-[4rem] flex items-center justify-center text-[#D4AF37] shadow-7xl border-8 border-[#D4AF37]/5 relative">
        <div className="absolute inset-0 rounded-[4rem] border-2 border-[#D4AF37] animate-ping opacity-20" />
        <motion.span animate={{ scale: [1, 1.1, 1] }} transition={{ repeat: Infinity, duration: 2 }} className="text-7xl font-black italic">U</motion.span>
      </div>
      <div className="mt-20 space-y-4 text-center">
        <div className="flex gap-3 justify-center">
          {[0, 1, 2].map((i) => (
            <motion.div key={i} animate={{ y: [0, -15, 0], backgroundColor: ["#D4AF37", "#0F1419", "#D4AF37"] }} transition={{ repeat: Infinity, duration: 1.2, delay: i * 0.2 }} className="w-3 h-3 rounded-full" />
          ))}
        </div>
        <p className={THEME.typography.ui + " text-[#0F1419] tracking-[1em] ml-4 animate-pulse"}>Synchronizing_Imperial_Grid</p>
      </div>
    </motion.div>
  </div>
);

const JaliPattern = () => (
  <div className="fixed inset-0 pointer-events-none opacity-[0.04] z-0">
    <svg width="100%" height="100%">
      <pattern id="jali-v6" x="0" y="0" width="160" height="160" patternUnits="userSpaceOnUse">
        <path d="M80 0 L160 80 L80 160 L0 80 Z" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="80" cy="80" r="15" fill="none" stroke="currentColor" strokeWidth="1" />
        <path d="M0 0 L160 160 M160 0 L0 160" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
      </pattern>
      <rect width="100%" height="100%" fill="url(#jali-v6)" />
    </svg>
  </div>
);

/** * =============================================================================
 * III. SOVEREIGN NEURAL AI ENGINE
 * ============================================================================= */

const aiReducer = (state, action) => {
  switch (action.type) {
    case 'SET_THINKING': return { ...state, isThinking: action.payload };
    case 'ADD_MESSAGE': return { ...state, messages: [...state.messages, action.payload] };
    case 'TOGGLE': return { ...state, isOpen: !state.isOpen };
    default: return state;
  }
};

const SovereignAI = () => {
  const [state, dispatch] = useReducer(aiReducer, {
    messages: [{ role: "ai", content: "Imperial Neural Node Active. Architect Priyadarshi recognized. Awaiting logic audit." }],
    isThinking: false,
    isOpen: false
  });
  
  const [input, setInput] = useState("");
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [state.messages, state.isThinking]);

  const handleLogicQuery = async (e) => {
    e.preventDefault();
    if (!input.trim() || state.isThinking) return;

    const query = input; setInput("");
    dispatch({ type: 'ADD_MESSAGE', payload: { role: "user", content: query } });
    dispatch({ type: 'SET_THINKING', payload: true });

    try {
      const response = await fetch(`${UDAARO_CONFIG.apiBase}/api/ai/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: query, context: "Imperial_Audit_Node" }),
      });
      const data = await response.json();
      dispatch({ type: 'ADD_MESSAGE', payload: { role: "ai", content: String(data.response || "LOGIC_GAP") } });
    } catch (err) {
      dispatch({ type: 'ADD_MESSAGE', payload: { role: "ai", content: "CRITICAL: Connection Severed." } });
    } finally {
      dispatch({ type: 'SET_THINKING', payload: false });
    }
  };

  return (
    <div className="fixed bottom-12 right-12 z-[10000]">
      <AnimatePresence>
        {state.isOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 100 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9, y: 100 }}
            className="w-[min(650px,95vw)] h-[80vh] bg-white border border-[#D4AF37]/30 rounded-[5rem] shadow-7xl flex flex-col overflow-hidden backdrop-blur-3xl"
          >
            <div className="p-14 bg-[#0F1419] text-[#D4AF37] relative overflow-hidden">
              <div className="absolute inset-0 opacity-10 rotate-12 scale-150"><CircuitBoard size={600} /></div>
              <div className="relative z-10 flex justify-between items-center">
                <div>
                  <p className={THEME.typography.ui}>Neural Infrastructure</p>
                  <h4 className="text-4xl font-black italic tracking-tighter uppercase mt-2">Sovereign_AI</h4>
                </div>
                <button onClick={() => dispatch({ type: 'TOGGLE' })} className="w-16 h-16 rounded-full border border-[#D4AF37]/20 flex items-center justify-center hover:bg-white/10 transition-all"><X size={32} /></button>
              </div>
            </div>

            <div className="flex-1 p-12 overflow-y-auto space-y-12 bg-[#FDF9F3]/60 custom-scrollbar" ref={scrollRef}>
              {state.messages.map((m, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: m.role === 'user' ? 30 : -30 }} animate={{ opacity: 1, x: 0 }} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] p-10 rounded-[3.5rem] shadow-sm italic text-lg font-medium leading-relaxed group ${m.role === 'user' ? 'bg-[#0F1419] text-white rounded-tr-none' : 'bg-white border-2 border-slate-100 text-slate-800 rounded-tl-none shadow-luxury'}`}>
                    <ReactMarkdown>{m.content}</ReactMarkdown>
                    {m.role === 'ai' && (
                       <div className="absolute -bottom-10 left-4 flex gap-10 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button className="text-[10px] font-black uppercase tracking-widest text-[#D4AF37] flex items-center gap-3"><ClipboardCheck size={14}/> Copy_Dossier</button>
                          <button className="text-[10px] font-black uppercase tracking-widest text-slate-400 flex items-center gap-3"><History size={14}/> Node_Log</button>
                       </div>
                    )}
                  </div>
                </motion.div>
              ))}
              {state.isThinking && (
                <div className="flex flex-col gap-6">
                  <div className="flex items-center gap-5 text-[#D4AF37]">
                    <Loader2 className="animate-spin" size={24} />
                    <span className={THEME.typography.ui + " animate-pulse"}>Analyzing_Structural_Flow...</span>
                  </div>
                </div>
              )}
            </div>

            <form onSubmit={handleLogicQuery} className="p-14 border-t border-slate-100 bg-white flex gap-8">
              <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Submit query to the Imperial Node..." className="flex-1 bg-slate-50 rounded-[3rem] px-12 py-8 text-sm italic font-bold outline-none border-4 border-transparent focus:border-[#D4AF37]/20 transition-all" />
              <button disabled={state.isThinking} className="w-24 h-24 bg-[#0F1419] text-[#D4AF37] rounded-[2.5rem] flex items-center justify-center hover:bg-[#D4AF37] hover:text-[#0F1419] transition-all shadow-2xl disabled:opacity-30"><Send size={32} /></button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button 
        whileHover={{ scale: 1.1, rotate: 5 }} whileTap={{ scale: 0.9 }}
        onClick={() => dispatch({ type: 'TOGGLE' })}
        className="w-36 h-36 bg-[#0F1419] border-8 border-[#D4AF37] rounded-full flex items-center justify-center text-[#D4AF37] shadow-luxury relative group"
      >
        <div className="absolute inset-0 rounded-full border-4 border-[#D4AF37] animate-ping opacity-20 group-hover:hidden" />
        <Bot size={56} className="group-hover:rotate-[20deg] transition-transform duration-700" />
      </motion.button>
    </div>
  );
};

/** * =============================================================================
 * IV. COMMAND BRIDGE (NAVIGATION)
 * ============================================================================= */

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navNodes = [
    { label: "Identity", path: "/identity", icon: <Fingerprint size={16}/> },
    { label: "Syndicate", path: "/syndicate", icon: <Landmark size={16}/> },
    { label: "Advisory", path: "/advisory", icon: <ShieldCheck size={16}/> },
    { label: "Intelligence", path: "/intelligence", icon: <BarChart3 size={16}/> }
  ];

  return (
    <nav className={`fixed top-0 w-full z-[999] transition-all duration-1000 ${isScrolled ? 'py-8' : 'py-16'}`}>
      <div className="max-w-[1950px] mx-auto px-16">
        <div className={`flex justify-between items-center px-16 py-8 rounded-[4rem] transition-all duration-1000 ${isScrolled ? 'bg-white/90 backdrop-blur-3xl shadow-luxury border border-[#D4AF37]/20' : 'bg-transparent'}`}>
          <Link to="/" className="flex items-center gap-12 group">
            <div className="w-20 h-20 bg-[#0F1419] text-[#D4AF37] rounded-[2rem] flex items-center justify-center font-black italic text-5xl shadow-7xl border-2 border-[#D4AF37]/30 group-hover:rotate-[360deg] transition-all duration-[2s]">U</div>
            <div className="flex flex-col">
              <span className="text-5xl font-black italic tracking-tighter uppercase leading-none text-[#0F1419]">Udaaro</span>
              <span className={THEME.typography.ui + " mt-3 opacity-40"}>Sovereign_Venture_OS_v6</span>
            </div>
          </Link>
          
          <div className="hidden 2xl:flex items-center gap-24">
            {navNodes.map((node) => (
              <Link key={node.label} to={node.path} className={`${THEME.typography.ui} flex items-center gap-4 hover:text-[#D4AF37] transition-all relative group py-4`}>
                <span className="opacity-0 group-hover:opacity-100 transition-all -translate-x-4 group-hover:translate-x-0">{node.icon}</span>
                <span className="text-sm tracking-[0.5em]">{node.label}</span>
                {location.pathname === node.path && (
                  <motion.div layoutId="navGlow" className="absolute -bottom-2 left-0 w-full h-[4px] bg-[#D4AF37] shadow-[0_0_15px_#D4AF37]" />
                )}
              </Link>
            ))}
            <Link to="/apply" className="ml-12 px-20 py-8 bg-[#0F1419] text-white rounded-full text-xs font-black uppercase tracking-[0.6em] italic hover:bg-[#D4AF37] hover:text-[#0F1419] transition-all shadow-7xl hover:scale-105 active:scale-95 group relative overflow-hidden">
              <span className="relative z-10">Initiate_Handshake</span>
              <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700" />
            </Link>
          </div>
          <button className="2xl:hidden w-20 h-20 bg-[#0F1419] rounded-[2rem] flex items-center justify-center text-[#D4AF37] shadow-xl"><Command size={32} /></button>
        </div>
      </div>
    </nav>
  );
};

/** * =============================================================================
 * V. ATOMIC UI NODES (REUSABLE)
 * ============================================================================= */

const SectionHeader = ({ badge, title, subtitle, light = false }) => {
  const ref = useRef(null);
  const visible = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="mb-64">
      <motion.div animate={visible ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }} transition={{ duration: 1.2 }} className="flex items-center gap-12 mb-16">
        <div className={`h-[4px] w-48 ${light ? 'bg-white/20' : 'bg-[#D4AF37]'}`} />
        <span className={`${THEME.typography.ui} ${light ? 'text-white/60' : 'text-[#D4AF37]'}`}>{badge}</span>
      </motion.div>
      <motion.h2 animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }} transition={{ duration: 1, delay: 0.2 }} className={`text-[10rem] md:text-[20rem] font-black italic tracking-tighter leading-[0.65] mb-20 uppercase ${light ? 'text-white' : 'text-[#0F1419]'}`} dangerouslySetInnerHTML={{ __html: title }} />
      <motion.p animate={visible ? { opacity: 1 } : { opacity: 0 }} transition={{ duration: 1, delay: 0.5 }} className={`text-5xl md:text-7xl font-medium italic max-w-7xl leading-[1.05] ${light ? 'text-slate-400' : 'text-slate-500'}`}>{subtitle}</motion.p>
    </div>
  );
};

const StatModule = ({ label, val, icon, trend, color = "text-[#0F1419]" }) => (
  <motion.div whileHover={{ y: -25, scale: 1.02 }} className="p-20 bg-white rounded-[6rem] border border-slate-100 shadow-luxury relative overflow-hidden group">
    <div className="absolute -right-8 -top-8 p-20 opacity-[0.03] group-hover:scale-150 group-hover:rotate-45 transition-all duration-1000 text-[#D4AF37]">{icon}</div>
    <div className="flex items-center gap-8 mb-16">
      <div className="w-20 h-20 bg-[#FDF9F3] border-2 border-[#D4AF37]/20 rounded-[2.5rem] flex items-center justify-center text-[#D4AF37] group-hover:bg-[#0F1419] group-hover:border-transparent transition-all duration-700">{React.cloneElement(icon, { size: 36 })}</div>
      <p className={THEME.typography.ui + " text-[#D4AF37] tracking-[0.5em]"}>{label}</p>
    </div>
    <div className="flex items-end justify-between relative z-10">
      <h3 className={`text-[9rem] font-black italic tracking-tighter leading-none ${color}`}>{val}</h3>
      {trend && (
        <div className="flex flex-col items-end pb-4">
           <div className="px-6 py-3 bg-emerald-50 rounded-full flex items-center gap-3 mb-4 shadow-sm border border-emerald-100">
              <TrendingUp size={16} className="text-emerald-500" />
              <span className="text-sm font-black text-emerald-600 font-mono">{trend}</span>
           </div>
           <p className="text-[10px] font-black uppercase tracking-widest text-slate-300">Resonance_Delta</p>
        </div>
      )}
    </div>
  </motion.div>
);

/** * =============================================================================
 * VI. PAGE: HOME NODE (LANDING ARCHITECTURE)
 * ============================================================================= */

const Home = () => {
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, -400]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div className="relative">
      <JaliPattern />
      
      {/* SECTION 1: IMPERIAL HERO */}
      <section className="relative min-h-[130vh] flex flex-col items-center justify-center text-center px-16 overflow-hidden bg-[#FDF9F3]">
        <motion.div style={{ opacity: heroOpacity, y: heroY }} className="relative z-10 max-w-[1900px] w-full">
          <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 1.5, ease: "circOut" }} className="mb-28 inline-flex items-center gap-12 px-16 py-6 bg-white border border-[#D4AF37]/50 rounded-full shadow-luxury relative overflow-hidden group">
            <div className="absolute inset-0 bg-[#D4AF37]/5 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-1000" />
            <span className="w-5 h-5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_30px_#10b981]" />
            <span className={THEME.typography.ui + " relative z-10 text-base"}>Batch 2026 Sovereign Grid Infrastructure Online</span>
          </motion.div>
          
          <h1 className="text-[12rem] md:text-[25rem] font-black italic uppercase tracking-[20] leading-[0.6] mb-28">
            Structural <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#0F1419] via-[#D4AF37] to-[#0F1419] animate-gold-shine">Sovereignty.</span>
          </h1>
          
          <p className="max-w-[1400px] mx-auto text-4xl md:text-[5.5rem] text-slate-500 font-medium italic leading-[1] mb-48">
            Udaaro is a institutional <span className="text-[#0F1419] font-black decoration-[#D4AF37] decoration-[30px] underline underline-offset-[35px]">Venture Operating System</span> architecting generational legacies for elite Indian founders.
          </p>
          
          <div className="flex flex-wrap justify-center gap-20 items-center">
            <Link to="/apply" className="px-40 py-16 bg-[#0F1419] text-white rounded-[5rem] font-black uppercase tracking-[0.8em] text-lg hover:bg-[#D4AF37] hover:text-[#0F1419] transition-all duration-1000 shadow-7xl shadow-black/50 italic group flex items-center gap-12 hover:scale-110 active:scale-95">
              Access Gate <ChevronRight className="group-hover:translate-x-10 transition-transform duration-1000" size={36} />
            </Link>
            <Link to="/identity" className="px-36 py-16 bg-white border-4 border-[#0F1419]/10 text-[#0F1419] rounded-[5rem] font-black uppercase tracking-[0.8em] text-lg hover:bg-[#0F1419] hover:text-white transition-all duration-1000 shadow-sm italic flex items-center gap-10 hover:scale-110 active:scale-95">
              Protocol_v6.0 <ArrowUpRight size={36} />
            </Link>
          </div>
        </motion.div>

        <motion.div animate={{ y: [0, 40, 0] }} transition={{ repeat: Infinity, duration: 3 }} className="absolute bottom-20 flex flex-col items-center gap-10 opacity-30 cursor-pointer group" onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}>
          <div className="w-[3px] h-32 bg-gradient-to-b from-[#0F1419] via-[#0F1419] to-transparent rounded-full" />
          <span className={THEME.typography.ui + " group-hover:text-[#D4AF37] text-sm transition-colors"}>Initialize_Grid_Descent</span>
        </motion.div>
      </section>

      {/* LIVE TELEMETRY STRIP */}
      <section className="bg-[#0F1419] py-64 border-y border-white/20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        <div className="max-w-[2200px] mx-auto px-20 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-48">
            {[
              { label: "Assets_Under_Logic", val: "₹1,420Cr", icon: <Coins size={80}/> },
              { label: "Founder_Admission", val: "0.82%", icon: <UserCheck size={80}/> },
              { label: "System_Resonance", val: "99.98%", icon: <Zap size={80}/> },
              { label: "Global_Nodes", val: "14", icon: <Globe size={80}/> }
            ].map((m, i) => (
              <motion.div key={i} whileInView={{ opacity: [0, 1], y: [50, 0] }} viewport={{ once: true }} transition={{ delay: i * 0.2 }} className="flex flex-col items-center text-center group cursor-crosshair">
                <div className="w-32 h-32 bg-white/5 border-2 border-white/10 rounded-[3rem] flex items-center justify-center text-[#D4AF37] mb-16 group-hover:bg-[#D4AF37] group-hover:text-[#0F1419] transition-all duration-1000 group-hover:rotate-[30deg] shadow-2xl">
                   {m.icon}
                </div>
                <p className="text-[10rem] font-black italic tracking-tighter text-white mb-8 uppercase group-hover:scale-110 transition-transform duration-1000">{m.val}</p>
                <p className={THEME.typography.ui + " text-[#D4AF37] text-sm tracking-[0.8em]"}>{m.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* OPERATING MODEL MODULES */}
      <section className="py-[30rem] bg-white px-20 relative overflow-hidden">
        <div className="max-w-[2000px] mx-auto">
          <SectionHeader badge="The Imperial Cycle" title="Sovereign <br /> Handshake." subtitle="Our architecture enforces three mandatory execution nodes to ensure generational scaling of founder logic." />
          <div className="grid lg:grid-cols-3 gap-32">
             {[
               { s: "SYNC_01", i: Fingerprint, t: "Curated Vetting", d: " Proprietary logic-audit analyzes problem depth and founder resilience before first capital injection." },
               { s: "SYNC_02", i: Workflow, t: "Resonance Build", d: "Founders are aligned with institutional frameworks, elite syndicate capital, and industry-titan council." },
               { s: "SYNC_03", i: Crown, t: "Global Ascension", d: "Transition into a market-dominant institution with structural independence and institutional legacy." }
             ].map((node, i) => (
               <motion.div key={i} whileHover={{ y: -30 }} className="p-24 bg-white border-2 border-slate-50 rounded-[8rem] shadow-luxury hover:border-[#D4AF37] transition-all duration-1000 group relative overflow-hidden">
                  <div className="absolute -right-20 -top-20 opacity-[0.02] group-hover:opacity-[0.15] transition-all duration-1000 text-[#D4AF37] rotate-45"><node.i size={800}/></div>
                  <div className="flex justify-between items-start mb-24 relative z-10">
                     <div className="w-32 h-32 bg-[#0F1419] rounded-[3.5rem] flex items-center justify-center text-[#D4AF37] shadow-7xl group-hover:rotate-[20deg] transition-all duration-1000"><node.i size={60}/></div>
                     <span className="text-8xl font-black italic text-[#D4AF37] opacity-20 tracking-tighter">{node.s}</span>
                  </div>
                  <h3 className="text-7xl font-black italic uppercase tracking-tighter mb-10 group-hover:translate-x-5 transition-transform duration-1000">{node.t}</h3>
                  <p className="text-3xl text-slate-500 font-medium italic leading-relaxed mb-20">{node.d}</p>
                  <div className="w-full h-[2px] bg-slate-100 group-hover:bg-[#D4AF37]/40 transition-colors" />
                  <button className="mt-12 flex items-center gap-6 text-[12px] font-black uppercase tracking-[0.6em] text-slate-400 group-hover:text-[#0F1419] transition-all">Audit_Documentation <ArrowUpRight size={20}/></button>
               </motion.div>
             ))}
          </div>
        </div>
      </section>

      {/* FINAL SECTION: THE ASCENSION CALL */}
      <section className="py-[40rem] bg-[#0F1419] relative overflow-hidden text-center px-20">
        <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 100, ease: "linear" }} className="absolute inset-0 opacity-[0.03] flex items-center justify-center pointer-events-none">
           <Dna size={2000} />
        </motion.div>
        <div className="relative z-10 max-w-[1800px] mx-auto">
          <motion.h2 whileInView={{ scale: [0.95, 1], opacity: [0, 1] }} className="text-[12rem] md:text-[28rem] font-black italic uppercase text-white tracking-tighter leading-[0.55] mb-32">Become <br /> <span className="text-[#D4AF37] animate-gold-shine">Vanguard.</span></motion.h2>
          <p className="text-5xl md:text-[7rem] text-slate-400 italic mb-56 max-w-7xl mx-auto leading-tight">The Batch 2026 Founder Handshake Protocol is currently online. Admissions for elite clusters close in 42 operational days.</p>
          <div className="flex flex-col xl:flex-row justify-center items-center gap-32">
             <Link to="/apply" className="btn-imperial text-4xl px-56 py-20 shadow-[0_0_120px_rgba(212,175,55,0.3)]">Initiate_Application_Handshake</Link>
             <div className="flex flex-col items-center">
                <div className="flex items-center gap-8 mb-6">
                   <div className="w-5 h-5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_20px_#10b981]" />
                   <p className={THEME.typography.ui + " text-[#D4AF37] text-lg"}>System_Handshake_Status</p>
                </div>
                <div className="px-16 py-8 bg-emerald-500/10 border-2 border-emerald-500/40 rounded-full text-emerald-500 text-xl font-black uppercase tracking-[0.8em] italic shadow-2xl">Grid_Synchronized: STABLE</div>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

/** * =============================================================================
 * VII. PAGE: SYNDICATE ONBOARDING (INVESTOR PORTAL)
 * ============================================================================= */

const Investors = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [synced, setSynced] = useState(false);

  const triggerHandshake = () => {
    setSynced(true);
    setTimeout(() => { setActiveStep(prev => prev + 1); setSynced(false); }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#FDF9F3] pt-80 px-20 pb-[30rem] relative">
      <JaliPattern />
      <div className="max-w-[2000px] mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-[25rem] items-start">
          <div className="sticky top-80">
            <SectionHeader badge="Institutional Syndicate" title="Capital <br /> Resonance." subtitle="Aligning institutional sovereign wealth with elite venture clusters through algorithmic logic vetting." />
            <div className="space-y-32 mt-48">
              {[
                { t: "Risk Insulation", d: "Structural logic-audits minimize operational fragility before capital injection.", i: <Shield size={44}/> },
                { t: "Vetting Telemetry", d: "Direct access to real-time execution dashboards of the vanguard founder nodes.", i: <Activity size={44}/> },
                { t: "Institutional ROI", d: "Deployment models engineered for 100-year institutional legacy building.", i: <Institution size={44}/> }
              ].map((item, i) => (
                <motion.div key={i} whileHover={{ x: 30 }} className="flex gap-14 group p-14 bg-white/50 border-2 border-transparent hover:border-[#D4AF37]/30 rounded-[6rem] transition-all duration-1000 shadow-sm hover:shadow-2xl">
                   <div className="w-32 h-32 bg-white rounded-[3.5rem] flex items-center justify-center text-[#D4AF37] shadow-xl group-hover:bg-[#0F1419] group-hover:text-white transition-all duration-1000 border-2 border-slate-50">{item.i}</div>
                   <div className="pt-4">
                      <h4 className="text-6xl font-black italic uppercase tracking-tighter mb-6 text-[#0F1419] group-hover:text-[#D4AF37] transition-colors">{item.t}</h4>
                      <p className="text-3xl text-slate-500 font-medium italic leading-relaxed max-w-2xl">{item.d}</p>
                   </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} className="bg-[#0F1419] p-32 rounded-[10rem] shadow-7xl relative overflow-hidden border-t-8 border-[#D4AF37]/50">
             <div className="absolute top-0 left-0 w-full h-4 bg-white/5">
                <motion.div initial={{ width: 0 }} animate={{ width: `${(activeStep / 3) * 100}%` }} transition={{ duration: 1 }} className="h-full bg-gradient-to-r from-[#D4AF37] to-[#F9D976] shadow-[0_0_40px_#D4AF37]" />
             </div>
             
             <div className="flex justify-between items-center mb-40 border-b border-white/5 pb-20">
                <div>
                   <p className={THEME.typography.ui + " text-[#D4AF37] text-lg tracking-[0.8em]"}>SYNDICATE_PROTOCOL_0{activeStep}</p>
                   <h3 className="text-7xl font-black text-white italic uppercase mt-8 tracking-tighter">Institutional Handshake</h3>
                </div>
                <div className="flex flex-col items-center">
                   <div className="w-32 h-32 rounded-[3.5rem] border-4 border-[#D4AF37]/30 flex items-center justify-center text-white text-5xl font-black italic shadow-inner bg-white/5">{activeStep}</div>
                   <p className="text-[12px] font-black text-[#D4AF37]/50 uppercase tracking-[0.5em] mt-6">Active_Node</p>
                </div>
             </div>

             <AnimatePresence mode="wait">
                {activeStep === 1 && (
                  <motion.div key="1" initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -40 }} className="space-y-20">
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                        <div className="space-y-8">
                           <label className={THEME.typography.ui + " text-[#D4AF37] ml-8"}>Identity_Hash</label>
                           <input className="w-full bg-white/5 border-2 border-white/10 rounded-[3.5rem] px-12 py-10 text-white text-xl outline-none focus:border-[#D4AF37] transition-all italic font-bold" placeholder="Full Legal Name" />
                        </div>
                        <div className="space-y-8">
                           <label className={THEME.typography.ui + " text-[#D4AF37] ml-8"}>Institutional_Node</label>
                           <input className="w-full bg-white/5 border-2 border-white/10 rounded-[3.5rem] px-12 py-10 text-white text-xl outline-none focus:border-[#D4AF37] transition-all italic font-bold" placeholder="institution@legal.com" />
                        </div>
                     </div>
                     <button onClick={triggerHandshake} className="w-full py-16 bg-[#D4AF37] text-[#0F1419] rounded-[4rem] font-black uppercase tracking-[1em] text-sm italic shadow-7xl hover:bg-white transition-all flex items-center justify-center gap-10 active:scale-95">
                        {synced ? <Loader2 size={32} className="animate-spin" /> : <>Initialize_Vetting_Audit <ChevronRight size={32}/></>}
                     </button>
                  </motion.div>
                )}
                
                {activeStep === 2 && (
                  <motion.div key="2" initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -40 }} className="space-y-20">
                     <div className="space-y-8">
                        <label className={THEME.typography.ui + " text-[#D4AF37] ml-8"}>Capital_Resonance_Thesis</label>
                        <textarea rows="8" className="w-full bg-white/5 border-2 border-white/10 rounded-[5rem] px-14 py-14 text-white text-xl outline-none focus:border-[#D4AF37] transition-all italic font-bold leading-relaxed" placeholder="Architect your sector mandates and ticket-size deployment logic..." />
                     </div>
                     <div className="grid grid-cols-2 gap-16">
                        <button onClick={() => setActiveStep(1)} className="py-14 border-4 border-white/10 text-white rounded-[4rem] font-black uppercase tracking-[0.8em] text-xs italic hover:bg-white/5 transition-all">Back_Protocol</button>
                        <button onClick={triggerHandshake} className="py-14 bg-[#D4AF37] text-[#0F1419] rounded-[4rem] font-black uppercase tracking-[0.8em] text-xs italic shadow-7xl hover:bg-white transition-all">Submit_Hard_Audit</button>
                     </div>
                  </motion.div>
                )}

                {activeStep === 3 && (
                  <motion.div key="3" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-40">
                     <motion.div animate={{ rotateY: 360 }} transition={{ repeat: Infinity, duration: 5, ease: "linear" }} className="w-48 h-48 bg-[#D4AF37]/20 rounded-[5rem] flex items-center justify-center text-emerald-500 mx-auto mb-20 shadow-[0_0_100px_rgba(212,175,55,0.3)] border-4 border-[#D4AF37]">
                        <ShieldCheck size={96} />
                     </motion.div>
                     <h3 className="text-9xl font-black text-white italic uppercase tracking-tighter mb-12">Node Synchronized</h3>
                     <p className="text-4xl text-slate-400 italic mb-28 max-w-2xl mx-auto leading-relaxed">Your institutional handshake has been encrypted and moved to the private Syndicate Ledger for Council review.</p>
                     <button onClick={() => setActiveStep(1)} className="text-[#D4AF37] font-black uppercase tracking-[1em] text-xs italic underline underline-offset-[20px] decoration-4 hover:text-white transition-all">Terminate_Handshake_Session</button>
                  </motion.div>
                )}
             </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

/** * =============================================================================
 * VIII. PAGE: EXECUTIVE MCP (DASHBOARD ARCHITECTURE)
 * ============================================================================= */

const MasterControl = () => {
  const [activeTab, setActiveTab] = useState("neural");
  const chartData = useMemo(() => Array.from({ length: 24 }, (_, i) => ({
    time: `${i}:00`,
    resonance: 4000 + Math.random() * 2000,
    velocity: 2000 + Math.random() * 5000
  })), []);

  const nodes = [
    { id: "neural", icon: <Brain size={28}/>, l: "Neural Insights" },
    { id: "vanguard", icon: <UserCheck size={28}/>, l: "Founder Nodes" },
    { id: "syndicate", icon: <Landmark size={28}/>, l: "Capital Flow" },
    { id: "telemetry", icon: <Activity size={28}/>, l: "Infrastructure" }
  ];

  return (
    <div className="h-screen w-full bg-[#FDF9F3] flex overflow-hidden select-none">
      <aside className="w-[500px] bg-[#0F1419] flex flex-col p-20 relative z-50 border-r-8 border-[#D4AF37]/10">
        <div className="mb-48 group cursor-pointer">
           <Link to="/" className="flex items-center gap-10">
              <div className="w-24 h-24 bg-[#D4AF37] rounded-[2.5rem] flex items-center justify-center text-[#0F1419] font-black italic text-5xl shadow-[0_0_50px_rgba(212,175,55,0.4)] group-hover:rotate-[15deg] transition-all">U</div>
              <h1 className="text-5xl font-black text-white italic uppercase tracking-tighter">Control_MCP</h1>
           </Link>
        </div>

        <nav className="flex-1 space-y-8">
           {nodes.map(n => (
             <button key={n.id} onClick={() => setActiveTab(n.id)} className={`w-full flex items-center gap-10 px-12 py-8 rounded-[3.5rem] transition-all duration-1000 group relative ${activeTab === n.id ? 'bg-[#D4AF37] text-[#0F1419] shadow-7xl translate-x-6' : 'text-slate-500 hover:text-white hover:bg-white/5'}`}>
                {n.icon}
                <span className={THEME.typography.ui + " text-lg tracking-[0.4em]"}>{n.l}</span>
                {activeTab === n.id && <motion.div layoutId="mcp" className="absolute right-10 w-3 h-3 rounded-full bg-[#0F1419]" />}
             </button>
           ))}
        </nav>

        <div className="mt-auto pt-20 border-t border-white/5">
           <div className="p-12 bg-white/5 rounded-[4rem] border-2 border-white/5 mb-16 relative overflow-hidden group">
              <p className={THEME.typography.ui + " text-[#D4AF37] mb-8 text-sm"}>Grid_Stability</p>
              <div className="h-4 w-full bg-white/10 rounded-full overflow-hidden">
                 <motion.div animate={{ width: "98.4%" }} transition={{ duration: 3 }} className="h-full bg-emerald-500 shadow-[0_0_20px_#10b981]" />
              </div>
              <p className="text-[12px] font-black text-emerald-500 mt-6 tracking-[0.8em] text-center">AUTHENTICATED_2026</p>
           </div>
           <button className="flex items-center gap-8 text-slate-600 hover:text-rose-500 transition-colors w-full justify-center py-6 border-2 border-transparent hover:border-rose-500/20 rounded-full"><ZapOff size={24}/> <span className={THEME.typography.ui}>Terminate_Session</span></button>
        </div>
      </aside>

      <main className="flex-1 flex flex-col h-screen overflow-y-auto bg-jali-grid pb-[20rem] custom-scrollbar">
         <header className="p-24 sticky top-0 z-40 bg-[#FDF9F3]/90 backdrop-blur-3xl border-b-4 border-[#D4AF37]/10 flex justify-between items-center px-32">
            <div>
               <p className={THEME.typography.ui + " text-[#D4AF37] text-lg"}>VOS / Institutional / Active</p>
               <h1 className="text-9xl font-black italic tracking-[15] uppercase mt-6">{activeTab}_Module</h1>
            </div>
            <div className="flex items-center gap-16">
               <div className="w-28 h-28 bg-[#0F1419] rounded-[3.5rem] border-4 border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] shadow-7xl cursor-pointer hover:rotate-12 transition-all"><Fingerprint size={48} /></div>
            </div>
         </header>

         <div className="p-32 max-w-[2400px] mx-auto w-full space-y-32">
            <div className="grid grid-cols-1 xl:grid-cols-4 gap-16">
               <StatModule label="Grid_Resonance" val="99.8%" icon={<Target/>} trend="+0.4%" />
               <StatModule label="Node_Latency" val="12ms" icon={<Zap/>} trend="STABLE" color="text-[#D4AF37]" />
               <StatModule label="Flow_Velocity" val="1.4x" icon={<TrendingUp/>} trend="+0.12x" color="text-emerald-500" />
               <StatModule label="Compliance" val="Elite" icon={<ShieldCheck/>} color="text-blue-500" />
            </div>

            <div className="bg-white p-28 rounded-[9rem] shadow-luxury border-2 border-slate-50 relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-32 opacity-[0.01] group-hover:scale-110 transition-transform duration-[5s]"><Activity size={800} /></div>
               <div className="flex justify-between items-center mb-32 relative z-10">
                  <h2 className="text-7xl font-black italic uppercase tracking-tighter">Grid_Pulse_Analytics</h2>
                  <div className="flex gap-6">
                     {['Live', 'History', 'Forecast'].map(b => (
                       <button key={b} className="px-10 py-4 rounded-full border-2 border-slate-100 text-xs font-black uppercase tracking-[0.4em] hover:bg-[#0F1419] hover:text-white transition-all">{b}</button>
                     ))}
                  </div>
               </div>
               <div className="h-[700px] relative z-10 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                     <AreaChart data={chartData}>
                        <defs>
                           <linearGradient id="gGold" x1="0" y1="0" x2="0" y2="1"><stop offset="5%" stopColor="#D4AF37" stopOpacity={0.8}/><stop offset="95%" stopColor="#D4AF37" stopOpacity={0}/></linearGradient>
                        </defs>
                        <Tooltip contentStyle={{ background: '#0F1419', borderRadius: '50px', color: '#fff', border: 'none', padding: '40px', shadow: '0 50px 100px rgba(0,0,0,0.5)' }} />
                        <Area type="monotone" dataKey="resonance" stroke="#D4AF37" strokeWidth={15} fill="url(#gGold)" animationDuration={4000} />
                        <Area type="monotone" dataKey="velocity" stroke="#0F1419" strokeWidth={5} fill="transparent" strokeDasharray="20 20" />
                     </AreaChart>
                  </ResponsiveContainer>
               </div>
            </div>
         </div>
      </main>
    </div>
  );
};

/** * =============================================================================
 * IX. SYSTEM WRAPPER & RESILIENCE GUARD
 * ============================================================================= */

const AppCore = () => {
  const isResonating = useResonance();
  const location = useLocation();

  /**
   * CRITICAL FIX FOR HYDRATION ERROR:
   * By returning the Loader until isResonating is true, we prevent the browser
   * from trying to re-calculate component coordinates before DOM is stable.
   */
  if (!isResonating) return <SovereignLoader />;

  return (
    <div className="udaaro-sovereign-application bg-[#FDF9F3] min-h-screen selection:bg-[#D4AF37] selection:text-[#0F1419] overflow-x-hidden">
      <Navbar />

      <Suspense fallback={<SovereignLoader />}>
        <AnimatePresence mode="wait" initial={false}>
          <motion.main
            key={location.pathname}
            initial={{ opacity: 0, y: 30, filter: "blur(20px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -30, filter: "blur(20px)" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/identity" element={<IdentityLogic />} />
              <Route path="/syndicate" element={<Investors />} />
              <Route path="/intelligence" element={<MasterControl />} />
              <Route path="/apply" element={<div className="h-screen flex items-center justify-center bg-[#0F1419]"><SectionHeader light badge="System_Gate: Open" title="Vanguard <br /> Inception." subtitle="Initializing Batch 2026 Admissions Protocol..." /></div>} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </motion.main>
        </AnimatePresence>
      </Suspense>

      <SovereignAI />

      {/* INSTITUTIONAL FOOTER */}
      <footer className="bg-[#0F1419] pt-[50rem] pb-32 px-20 border-t-8 border-[#D4AF37]/10 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02] flex items-center justify-center pointer-events-none scale-150"><Network size={1500} className="animate-spin-slow" /></div>
        <div className="max-w-[2200px] mx-auto relative z-10">
          <div className="grid lg:grid-cols-6 gap-64 mb-[20rem]">
            <div className="lg:col-span-2 space-y-20">
               <div className="flex items-center gap-12 group">
                  <div className="w-28 h-28 bg-[#D4AF37] text-[#0F1419] rounded-[2.5rem] flex items-center justify-center font-black italic text-6xl shadow-2xl group-hover:scale-110 transition-all">U</div>
                  <h3 className="text-9xl font-black text-white uppercase italic tracking-tighter group-hover:translate-x-6 transition-transform duration-1000">Udaaro</h3>
               </div>
               <p className="text-slate-400 text-4xl font-medium italic leading-relaxed max-w-xl opacity-60">Architecting institutional legacy for Indian innovation clusters. Building the century, not the cycle.</p>
            </div>
            
            <div className="space-y-16">
               <h5 className={THEME.typography.ui + " text-[#D4AF37] text-lg tracking-[0.8em]"}>Ecosystem</h5>
               <ul className="space-y-12 text-2xl font-black uppercase tracking-[0.5em] italic text-slate-500">
                  {['Vanguard_Intake', 'Syndicate_Portal', 'Advisory_Council', 'Logic_Documentation'].map(l => (
                    <li key={l}><Link to="#" className="hover:text-white transition-all hover:translate-x-4 inline-block">{l}</Link></li>
                  ))}
               </ul>
            </div>

            <div className="lg:col-span-2 space-y-20">
               <h5 className={THEME.typography.ui + " text-[#D4AF37] text-lg tracking-[0.8em]"}>Grid_Resonance_Sync</h5>
               <div className="p-20 bg-white/5 border-2 border-white/10 rounded-[6rem] backdrop-blur-3xl shadow-luxury group">
                  <div className="flex justify-between items-center mb-12 relative z-10">
                    <span className={THEME.typography.ui + " text-slate-500 text-base"}>Node_Uptime_Integrity</span>
                    <span className="text-4xl font-black italic text-emerald-500">99.99%</span>
                  </div>
                  <div className="w-full h-4 bg-white/10 rounded-full overflow-hidden relative z-10 shadow-inner">
                    <motion.div initial={{ width: 0 }} whileInView={{ width: "99.9%" }} transition={{ duration: 4 }} className="h-full bg-gradient-to-r from-[#D4AF37] via-[#F9D976] to-emerald-500 shadow-[0_0_25px_#10b981]" />
                  </div>
                  <div className="mt-16 flex items-center gap-10 text-emerald-500 relative z-10">
                     <div className="w-4 h-4 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_20px_#10b981]" />
                     <p className="text-base font-black uppercase tracking-[0.4em] italic">All_Vanguard_Nodes_Synchronized_STABLE</p>
                  </div>
               </div>
            </div>
          </div>

          <div className="pt-32 border-t-2 border-white/10 flex flex-col xl:flex-row justify-between items-center gap-20 opacity-30">
             <div className="flex items-center gap-16">
                <span className="text-xl font-black uppercase tracking-[0.6em] italic text-[#D4AF37]">Batch 2026 / India Vanguard</span>
                <div className="h-8 w-[2px] bg-white/20" />
                <span className="text-xl font-black uppercase tracking-[0.6em] italic text-white">Architect: Apurva Priyadarshi</span>
             </div>
             <div className="flex flex-wrap justify-center gap-20 text-lg font-black uppercase tracking-[1em] italic text-slate-500">
                <span>Infrastructure: {UDAARO_CONFIG.encryption}</span>
                <span>OS_VER: {UDAARO_CONFIG.version}</span>
             </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

/** * =============================================================================
 * XI. STYLING PROTOCOLS (GLOBAL_INJECT)
 * ============================================================================= */

const styleInject = `
  @import url('https://fonts.googleapis.com/css2?family=Italiana&family=Inter:ital,wght@0,100..900;1,100..900&family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&display=swap');

  :root { --gold: #D4AF37; --slate: #0F1419; --sand: #FDF9F3; }

  body { background-color: var(--sand); font-family: 'Inter', sans-serif; margin: 0; overflow-x: hidden; color: var(--slate); -webkit-font-smoothing: antialiased; }
  h1, h2, h3, h4, h5, h6 { font-family: 'Italiana', serif; margin: 0; }
  .custom-scrollbar::-webkit-scrollbar { width: 12px; }
  .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
  .custom-scrollbar::-webkit-scrollbar-thumb { background: var(--gold); border-radius: 100px; border: 4px solid var(--sand); }
  .shadow-luxury { box-shadow: 0 80px 200px -60px rgba(15, 20, 25, 0.15); }
  .shadow-7xl { box-shadow: 0 150px 250px -100px rgba(0,0,0,0.6); }
  .animate-spin-slow { animation: spin 60s linear infinite; }
  @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
  .animate-gold-shine { background-size: 200% auto; animation: shine 8s linear infinite; }
  @keyframes shine { to { background-position: 200% center; } }
  .btn-imperial { background: var(--slate); color: white; border-radius: 6rem; text-transform: uppercase; font-weight: 900; font-style: italic; letter-spacing: 1.2em; transition: all 1s cubic-bezier(0.16, 1, 0.3, 1); box-shadow: 0 60px 120px -40px rgba(0,0,0,0.6); border: none; cursor: pointer; position: relative; overflow: hidden; }
  .btn-imperial:hover { background: var(--gold); color: var(--slate); transform: scale(1.05) translateY(-15px); box-shadow: 0 100px 150px -50px rgba(212, 175, 55, 0.5); }
`;

if (typeof document !== 'undefined') {
  const s = document.createElement("style");
  s.innerText = styleInject;
  document.head.appendChild(s);
}

const App = () => (
  <Router>
    <AppCore />
  </Router>
);

export default App;