/**
 * ============================================================================================
 * UDAARO SOVEREIGN VENTURE OPERATING SYSTEM (VOS) - IMPERIAL EDITION v6.0.0
 * --------------------------------------------------------------------------------------------
 * DESIGN LANGUAGE: "NEO-HERITAGE IMPERIALISM"
 * LEAD ARCHITECT: APURVA PRIYADARSHI (BATCH 2026)
 * REVISION: ULTIMATE_RESILIENCE_CORE
 * * MODULES INTEGRATED:
 * 1.  SOVEREIGN NEURAL LLM CORE (Multi-Model Contextual Bridge)
 * 2.  IMPERIAL COMMAND BRIDGE (Resonance-Logic Navigation)
 * 3.  SYNDICATE ONBOARDING NODE (Institutional Investor Handshake)
 * 4.  VANGUARD INTAKE ENGINE (Founder Admission Protocol)
 * 5.  EXECUTIVE INTELLIGENCE MCP (Macro-Control Dashboard)
 * 6.  TELEMETRY & GRID MONITOR (Real-time Infrastructure Pulse)
 * 7.  LEGAL LEDGER & DATA SOVEREIGNTY (Institutional Governance)
 * 8.  ADVISORY RESONANCE HUB (Expert Council Node)
 * 9.  IDENTITY LOGIC ENGINE (Architectural Theory Modules)
 * 10. RECOVERY SHIELD (Hydration & Logic Drift Protection)
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
  ShieldQuestion, Gavel, Scale, Boxes, Coins, Landmark as Institution
} from "lucide-react";
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart as RePie, Pie, Cell, LineChart, Line, BarChart, Bar, Legend
} from "recharts";
import ReactMarkdown from 'react-markdown';

// --- I. IMPERIAL SYSTEM CONSTANTS & CONFIGURATION ---

const UDAARO_CONFIG = {
  version: "6.0.0-Imperial",
  founder: "Apurva Priyadarshi",
  batch: "2026",
  node: "INDIA_VANGUARD_01",
  apiBase: "https://udaaro-backend.onrender.com",
  handshakeDelay: 1500,
  neuralModel: "Sovereign-LLM-v6",
  encryptionMode: "AES-256-GCM-INSTITUTIONAL"
};

const THEME = {
  colors: {
    sandstone: "#FDF9F3",
    royalSlate: "#0F1419",
    goldLeaf: "#D4AF37",
    imperialBlue: "#1A365D",
    emerald: "#10B981",
    ruby: "#E11D48",
    graphite: "#1E293B"
  },
  gradients: {
    gold: "linear-gradient(135deg, #D4AF37 0%, #FDF9F3 50%, #D4AF37 100%)",
    slate: "linear-gradient(180deg, #0F1419 0%, #1A202C 100%)"
  },
  typography: {
    heading: "font-serif tracking-tighter italic",
    ui: "font-mono uppercase tracking-[0.4em] text-[10px] font-black",
    body: "font-sans font-medium italic"
  }
};

// --- II. UTILITY NODES & RESILIENCE HOOKS ---

/**
 * HOOK: useResonance
 * Manages the hydration handshake to prevent logic drift in production.
 */
const useResonance = () => {
  const [isResonating, setIsResonating] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setIsResonating(true), 200);
    return () => clearTimeout(timer);
  }, []);
  return isResonating;
};

/**
 * COMPONENT: SovereignLoader
 * Imperial-branded decryption visual for system boot.
 */
const SovereignLoader = () => (
  <div className="fixed inset-0 z-[99999] bg-[#FDF9F3] flex flex-col items-center justify-center">
    <motion.div 
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="flex flex-col items-center"
    >
      <div className="w-32 h-32 bg-[#0F1419] rounded-[2.5rem] flex items-center justify-center text-[#D4AF37] shadow-7xl border-4 border-[#D4AF37]/10 relative group">
        <div className="absolute inset-0 rounded-[2.5rem] border border-[#D4AF37] animate-ping opacity-20" />
        <span className="text-5xl font-black italic">U</span>
      </div>
      <div className="mt-16 flex flex-col items-center gap-4">
        <Loader2 className="animate-spin text-[#D4AF37]" size={24} />
        <span className={THEME.typography.ui + " text-[#0F1419] animate-pulse ml-4"}>Decrypting_Resonance_Node</span>
      </div>
    </motion.div>
  </div>
);

/**
 * COMPONENT: JaliPattern
 * Architectural DNA visual overlay.
 */
const JaliPattern = () => (
  <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-0">
    <svg width="100%" height="100%">
      <pattern id="jali-v6" x="0" y="0" width="150" height="150" patternUnits="userSpaceOnUse">
        <path d="M75 0 L150 75 L75 150 L0 75 Z" fill="none" stroke="currentColor" strokeWidth="1" />
        <circle cx="75" cy="75" r="20" fill="none" stroke="currentColor" strokeWidth="1" />
        <path d="M0 0 L150 150 M150 0 L0 150" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
      </pattern>
      <rect width="100%" height="100%" fill="url(#jali-v6)" />
    </svg>
  </div>
);

// --- III. SOVEREIGN NEURAL AI (THE LLM CORE) ---

const aiReducer = (state, action) => {
  switch (action.type) {
    case 'START_THINKING': return { ...state, isThinking: true };
    case 'STOP_THINKING': return { ...state, isThinking: false };
    case 'ADD_MESSAGE': return { ...state, messages: [...state.messages, action.payload] };
    case 'SYNC_HISTORY': return { ...state, messages: action.payload };
    default: return state;
  }
};

const SovereignAI = () => {
  const [state, dispatch] = useReducer(aiReducer, {
    messages: [{ role: "ai", content: "Neural Node v6.0 Active. Architect recognized. Ready for structural audit." }],
    isThinking: false
  });
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
    }
  }, [state.messages, state.isThinking]);

  const handleLogicQuery = async (e) => {
    e.preventDefault();
    if (!input.trim() || state.isThinking) return;

    const query = input;
    setInput("");
    dispatch({ type: 'ADD_MESSAGE', payload: { role: "user", content: query } });
    dispatch({ type: 'START_THINKING' });

    try {
      const response = await fetch(`${UDAARO_CONFIG.apiBase}/api/ai/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: query, context: "Imperial_VOS_Audit" }),
      });
      const data = await response.json();
      dispatch({ type: 'ADD_MESSAGE', payload: { role: "ai", content: String(data.response || "Logic_Timeout") } });
    } catch (err) {
      dispatch({ type: 'ADD_MESSAGE', payload: { role: "ai", content: "CRITICAL: Node_Connection_Severed." } });
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
            className="w-[min(550px,95vw)] h-[85vh] bg-white border border-[#D4AF37]/30 rounded-[4rem] shadow-7xl flex flex-col overflow-hidden backdrop-blur-3xl"
          >
            <div className="p-12 bg-[#0F1419] text-[#D4AF37] relative overflow-hidden">
              <div className="absolute inset-0 opacity-10 rotate-12 scale-150"><CircuitBoard size={500} /></div>
              <div className="relative z-10 flex justify-between items-center">
                <div>
                  <p className={THEME.typography.ui}>Structural Neural Node</p>
                  <h4 className="text-4xl font-black italic tracking-tighter uppercase">Sovereign_AI</h4>
                </div>
                <button onClick={() => setIsOpen(false)} className="w-12 h-12 rounded-full border border-[#D4AF37]/20 flex items-center justify-center hover:bg-white/10 transition-all"><X /></button>
              </div>
            </div>

            <div className="flex-1 p-10 overflow-y-auto space-y-8 bg-[#FDF9F3]/60 custom-scrollbar" ref={scrollRef}>
              {state.messages.map((m, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] p-8 rounded-[2.5rem] shadow-sm italic text-sm font-medium leading-relaxed ${m.role === 'user' ? 'bg-[#0F1419] text-white rounded-tr-none shadow-black/20' : 'bg-white border-2 border-slate-100 text-slate-800 rounded-tl-none shadow-luxury'}`}>
                    <ReactMarkdown>{m.content}</ReactMarkdown>
                  </div>
                </motion.div>
              ))}
              {state.isThinking && (
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-4 text-[#D4AF37]">
                    <Loader2 className="animate-spin" size={16} />
                    <span className={THEME.typography.ui + " animate-pulse"}>Architect_Analyzing_Flow...</span>
                  </div>
                </div>
              )}
            </div>

            <form onSubmit={handleLogicQuery} className="p-10 border-t border-slate-100 bg-white flex gap-6">
              <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Query the Imperial Grid..." className="flex-1 bg-slate-50 rounded-[2rem] px-8 py-6 text-xs italic font-bold outline-none border-2 border-transparent focus:border-[#D4AF37]/30 transition-all" />
              <button disabled={state.isThinking} className="w-20 h-20 bg-[#0F1419] text-[#D4AF37] rounded-3xl flex items-center justify-center hover:bg-[#D4AF37] hover:text-white transition-all shadow-2xl disabled:opacity-30"><Send size={24} /></button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button 
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-28 h-28 bg-[#0F1419] border-4 border-[#D4AF37] rounded-full flex items-center justify-center text-[#D4AF37] shadow-luxury relative group"
      >
        <div className="absolute inset-0 rounded-full border-2 border-[#D4AF37] animate-ping opacity-20 group-hover:hidden" />
        <Bot size={44} />
      </motion.button>
    </div>
  );
};

// --- IV. COMMAND BRIDGE (NAVIGATION) ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Identity", path: "/identity", icon: <Fingerprint size={14}/> },
    { label: "Syndicate", path: "/syndicate", icon: <Landmark size={14}/> },
    { label: "Advisory", path: "/advisory", icon: <ShieldCheck size={14}/> },
    { label: "Intelligence", path: "/intelligence", icon: <BarChart3 size={14}/> }
  ];

  return (
    <nav className={`fixed top-0 w-full z-[999] transition-all duration-1000 ${isScrolled ? 'py-6' : 'py-12'}`}>
      <div className="max-w-[1850px] mx-auto px-12">
        <div className={`flex justify-between items-center px-12 py-6 rounded-[3rem] transition-all duration-1000 ${isScrolled ? 'bg-white/80 backdrop-blur-3xl shadow-luxury border border-[#D4AF37]/10' : 'bg-transparent'}`}>
          <Link to="/" className="flex items-center gap-8 group">
            <div className="w-16 h-16 bg-[#0F1419] text-[#D4AF37] rounded-2xl flex items-center justify-center font-black italic text-4xl shadow-2xl group-hover:rotate-90 transition-all duration-700">U</div>
            <div className="flex flex-col">
              <span className="text-4xl font-black italic tracking-tighter uppercase leading-none text-[#0F1419]">Udaaro</span>
              <span className={THEME.typography.ui + " mt-2 opacity-40"}>Sovereign_VOS_v6</span>
            </div>
          </Link>
          
          <div className="hidden xl:flex items-center gap-16">
            {navLinks.map((link) => (
              <Link 
                key={link.label} 
                to={link.path} 
                className={`${THEME.typography.ui} flex items-center gap-3 hover:text-[#D4AF37] transition-all relative group py-2`}
              >
                <span className="opacity-0 group-hover:opacity-100 transition-opacity">{link.icon}</span>
                {link.label}
                {location.pathname === link.path && (
                  <motion.div layoutId="navActive" className="absolute -bottom-2 left-0 w-full h-[2px] bg-[#D4AF37]" />
                )}
              </Link>
            ))}
            <Link to="/apply" className="ml-8 px-12 py-5 bg-[#0F1419] text-white rounded-full text-[10px] font-black uppercase tracking-[0.5em] italic hover:bg-[#D4AF37] hover:text-[#0F1419] transition-all shadow-2xl hover:scale-105 active:scale-95">
              Initiate_Vanguard
            </Link>
          </div>

          <button className="xl:hidden w-16 h-16 bg-[#0F1419] rounded-2xl flex items-center justify-center text-[#D4AF37]">
            <Command size={24} />
          </button>
        </div>
      </div>
    </nav>
  );
};

// --- V. CORE PAGES (EXPANDED) ---

const SectionHeading = ({ badge, title, subtitle, light = false }) => (
  <div className="mb-48 relative">
    <motion.div 
      initial={{ opacity: 0, x: -30 }} 
      whileInView={{ opacity: 1, x: 0 }} 
      transition={{ duration: 1 }}
      className="flex items-center gap-8 mb-12"
    >
      <div className={`h-[2px] w-32 ${light ? 'bg-white/30' : 'bg-[#D4AF37]'}`} />
      <span className={`${THEME.typography.ui} ${light ? 'text-white/60' : 'text-[#D4AF37]'}`}>{badge}</span>
    </motion.div>
    <h2 className={`text-8xl md:text-[14rem] font-black italic tracking-tighter leading-[0.75] mb-16 uppercase ${light ? 'text-white' : 'text-[#0F1419]'}`} dangerouslySetInnerHTML={{ __html: title }} />
    <p className={`text-3xl md:text-5xl font-medium italic max-w-5xl leading-tight ${light ? 'text-slate-400' : 'text-slate-500'}`}>
      {subtitle}
    </p>
  </div>
);

/**
 * PAGE: Home Node
 */
const Home = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -200]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div className="relative">
      <JaliPattern />
      
      {/* HERO SECTION */}
      <section className="relative min-h-[110vh] flex flex-col items-center justify-center text-center px-10 overflow-hidden">
        <motion.div style={{ opacity, y }} className="relative z-10 max-w-[1600px]">
          <motion.div 
            initial={{ y: 50, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }}
            className="mb-20 inline-flex items-center gap-8 px-12 py-4 bg-white border border-[#D4AF37]/30 rounded-full shadow-luxury"
          >
            <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_15px_#10b981]" />
            <span className={THEME.typography.ui}>Batch 2026 Sovereign Infrastructure Online</span>
          </motion.div>
          
          <h1 className="text-[9rem] md:text-[18rem] font-black italic uppercase tracking-tighter leading-[0.7] mb-20">
            Structural <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#0F1419] via-[#D4AF37] to-[#0F1419]">Imperialism.</span>
          </h1>
          
          <p className="max-w-5xl mx-auto text-2xl md:text-5xl text-slate-500 font-medium italic leading-tight mb-32">
            Udaaro is an institutional <span className="text-[#0F1419] font-black decoration-[#D4AF37] decoration-[15px] underline underline-offset-[15px]">Venture Operating System</span> enabling founders to build high-logic generational legacies.
          </p>
          
          <div className="flex flex-wrap justify-center gap-12">
            <Link to="/apply" className="px-24 py-12 bg-[#0F1419] text-white rounded-[3.5rem] font-black uppercase tracking-[0.6em] text-sm hover:bg-[#D4AF37] hover:text-[#0F1419] transition-all duration-700 shadow-7xl shadow-black/30 italic group flex items-center gap-6">
              Access Gate <ChevronRight className="group-hover:translate-x-4 transition-transform" />
            </Link>
            <Link to="/identity" className="px-24 py-12 bg-white border-2 border-[#0F1419]/10 text-[#0F1419] rounded-[3.5rem] font-black uppercase tracking-[0.6em] text-sm hover:bg-slate-50 transition-all duration-700 shadow-sm italic flex items-center gap-6">
              Protocol v6.0 <ArrowUpRight size={24} />
            </Link>
          </div>
        </motion.div>

        {/* MOUSE SCROLL INDICATOR */}
        <motion.div 
          animate={{ y: [0, 20, 0] }} 
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-20 flex flex-col items-center gap-4 opacity-30"
        >
          <div className="w-1 h-16 bg-gradient-to-b from-[#0F1419] to-transparent rounded-full" />
          <span className={THEME.typography.ui}>Initialize_Descent</span>
        </motion.div>
      </section>

      {/* METRICS STRIP */}
      <section className="bg-[#0F1419] py-40 border-y border-white/5 relative overflow-hidden">
        <div className="max-w-[1850px] mx-auto px-12 grid grid-cols-2 md:grid-cols-4 gap-24 relative z-10">
          {[
            { label: "Assets_Under_Logic", val: "₹1,420Cr", icon: <Coins /> },
            { label: "Founder_Admission", val: "0.82%", icon: <UserCheck /> },
            { label: "System_Resonance", val: "99.98%", icon: <Zap /> },
            { label: "Global_Nodes", val: "14", icon: <Globe /> }
          ].map((m, i) => (
            <div key={i} className="flex flex-col items-center text-center group">
              <div className="mb-8 text-[#D4AF37] group-hover:scale-125 transition-transform duration-700">{m.icon}</div>
              <p className="text-7xl font-black italic tracking-tighter text-white mb-6 uppercase">{m.val}</p>
              <p className={THEME.typography.ui + " text-[#D4AF37]/50"}>{m.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* OPERATING MODEL */}
      <section className="py-96 bg-white px-12 relative overflow-hidden">
        <div className="max-w-[1700px] mx-auto">
          <SectionHeading 
            badge="Institutional Framework"
            title="Sovereign <br /> Lifecycle."
            subtitle="Our venture architecture replaces chaotic startup growth with a three-stage imperial execution cycle."
          />
          
          <div className="grid lg:grid-cols-3 gap-20">
            {[
              { 
                step: "NODE_01", 
                icon: Fingerprint, 
                title: "Curated Vetting", 
                desc: "An aggressive protocol analyzing problem depth, execution grit, and structural scalability of the founder node.",
                color: "from-blue-50 to-transparent"
              },
              { 
                step: "NODE_02", 
                icon: Workflow, 
                title: "Resonance Build", 
                desc: "Strategic injection of the VOS logic. Founders are aligned with imperial frameworks, top-tier syndicate capital, and elite mentorship.",
                color: "from-gold-50 to-transparent"
              },
              { 
                step: "NODE_03", 
                icon: Crown, 
                title: "Imperial Ascension", 
                desc: "Transition into a market-dominant institution. Achieving structural independence and global capital resonance.",
                color: "from-emerald-50 to-transparent"
              }
            ].map((node, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className={`p-20 bg-gradient-to-br ${node.color} border border-slate-100 rounded-[6rem] transition-all duration-1000 relative overflow-hidden group hover:border-[#D4AF37] hover:shadow-luxury`}
              >
                <div className="absolute -right-8 -top-8 text-[#D4AF37] opacity-[0.05] group-hover:opacity-[0.15] transition-all duration-1000 rotate-12">
                  <node.icon size={450} />
                </div>
                <div className="text-6xl font-black italic text-[#D4AF37] mb-16 opacity-30 group-hover:opacity-100 transition-opacity tracking-widest">{node.step}</div>
                <div className="w-24 h-24 bg-[#0F1419] rounded-3xl flex items-center justify-center text-[#D4AF37] mb-16 shadow-2xl group-hover:rotate-12 transition-transform duration-700">
                  <node.icon size={44} />
                </div>
                <h3 className="text-5xl font-black italic uppercase tracking-tighter mb-10 leading-none">{node.title}</h3>
                <p className="text-2xl text-slate-500 font-medium italic leading-relaxed">{node.desc}</p>
                
                <div className="mt-20 pt-10 border-t border-slate-200/50 flex items-center justify-between">
                  <span className={THEME.typography.ui}>Read_Documentation</span>
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:bg-[#D4AF37] group-hover:text-white transition-colors">
                    <ArrowUpRight size={18} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ADVISORY SECTION ( Council ) */}
      <section className="py-96 bg-[#FDF9F3] px-12 relative border-y border-slate-200">
        <div className="max-w-[1750px] mx-auto flex flex-col lg:flex-row gap-48 items-center">
          <div className="flex-1">
            <SectionHeading 
              badge="The Alpha Council"
              title="Expert <br /> Resonance."
              subtitle="Udaaro is powered by a private collective of industrial titans, former unicorns founders, and sovereign policy architects."
            />
            <div className="grid md:grid-cols-2 gap-12">
              {[
                { title: "Macro Logic", d: "Strategic alignment with national and global economic shifts." },
                { title: "Deep Vetting", d: "Hard-audit of founder capabilities by industry veterans." },
                { title: "Capital Scale", d: "Direct bridges to institutional-grade sovereign wealth." },
                { title: "Network Moat", d: "Unfair access to tier-1 supply chains and distribution." }
              ].map((adv, i) => (
                <div key={i} className="flex gap-8 group">
                  <div className="w-1.5 h-16 bg-[#D4AF37] rounded-full group-hover:h-24 transition-all duration-700" />
                  <div>
                    <h4 className="text-3xl font-black italic uppercase tracking-tighter mb-4">{adv.title}</h4>
                    <p className="text-xl text-slate-500 font-medium italic">{adv.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex-1 w-full max-w-[700px] aspect-square relative">
             <div className="absolute inset-0 bg-[#0F1419] rounded-[8rem] rotate-3 shadow-7xl overflow-hidden group">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop')] bg-cover opacity-40 grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F1419] to-transparent" />
                <div className="absolute bottom-20 left-20 right-20">
                   <h3 className="text-5xl font-black text-white italic uppercase tracking-tighter mb-6">Council_Access_Only</h3>
                   <p className="text-2xl text-slate-400 italic mb-12">Private node for existing partners and institutional advisors.</p>
                   <button className="px-16 py-8 bg-[#D4AF37] text-[#0F1419] rounded-full font-black uppercase tracking-[0.5em] text-[10px] shadow-2xl hover:bg-white transition-all italic">Login_to_Council</button>
                </div>
             </div>
             <div className="absolute -top-12 -right-12 w-48 h-48 bg-white rounded-[4rem] shadow-2xl flex items-center justify-center border-4 border-[#FDF9F3]">
                <ShieldCheck size={80} className="text-[#D4AF37]" />
             </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-96 bg-[#0F1419] relative overflow-hidden text-center px-12">
        <div className="absolute inset-0 opacity-[0.05] flex items-center justify-center"><Layers3 size={1000} className="animate-spin-slow" /></div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <h2 className="text-[7rem] md:text-[15rem] font-black italic uppercase text-white tracking-tighter leading-none mb-24">
            Become <br /> <span className="text-[#D4AF37]">Vanguard.</span>
          </h2>
          <p className="text-3xl md:text-5xl text-slate-400 italic mb-32 max-w-4xl mx-auto leading-relaxed">
            Batch 2026 Founder Handshake Protocol is currently processing applications for elite clusters.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-16">
            <Link to="/apply" className="btn-imperial text-2xl px-32 py-16">Apply for Admission</Link>
            <div className="flex flex-col items-center">
              <p className={THEME.typography.ui + " text-[#D4AF37] mb-4"}>Current_Grid_Status</p>
              <div className="px-10 py-4 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-500 text-xs font-black uppercase tracking-widest italic">Node_Sync_Ready</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

/**
 * PAGE: Syndicate Node (Investor Portal)
 */
const Investors = () => {
  const [activeStep, setActiveStep] = useState(1);
  
  return (
    <div className="min-h-screen bg-[#FDF9F3] pt-64 px-12 pb-48">
      <div className="max-w-[1700px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-48 items-start">
          <div className="sticky top-64">
            <SectionHeading 
              badge="Institutional Syndicate"
              title="Strategic <br /> Handshake."
              subtitle="Udaaro connects tier-1 institutional capital with structural dealflow vetted by our proprietary Venture OS."
            />
            
            <div className="space-y-16 mt-24">
              {[
                { title: "Repeatable ROI", d: "Capital deployed into systems, not just stories.", icon: <Institution /> },
                { title: "Live Telemetry", d: "Institutional visibility into founder execution dashboards.", icon: <Radio /> },
                { title: "Risk Insulation", d: "Algorithmic vetting of technical and market moats.", icon: <ShieldCheck /> }
              ].map((item, i) => (
                <div key={i} className="flex gap-10 items-start group">
                  <div className="w-20 h-20 bg-white border border-slate-100 rounded-3xl flex items-center justify-center text-[#D4AF37] shadow-xl group-hover:bg-[#0F1419] transition-all duration-700">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-4xl font-black italic uppercase tracking-tighter mb-4 text-[#0F1419]">{item.title}</h4>
                    <p className="text-2xl text-slate-500 font-medium italic">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }} 
            animate={{ opacity: 1, x: 0 }} 
            className="bg-[#0F1419] p-24 rounded-[7rem] shadow-7xl relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-3 bg-white/5">
              <motion.div initial={{ width: 0 }} animate={{ width: `${(activeStep / 3) * 100}%` }} className="h-full bg-[#D4AF37] shadow-[0_0_20px_#D4AF37]" />
            </div>
            
            <div className="flex justify-between items-center mb-24">
               <div>
                  <p className={THEME.typography.ui + " text-[#D4AF37]"}>Handshake_Process_0{activeStep}</p>
                  <h3 className="text-4xl font-black text-white italic uppercase mt-4">Syndicate Admission</h3>
               </div>
               <div className="w-20 h-20 rounded-full border-2 border-[#D4AF37]/30 flex items-center justify-center text-white text-3xl font-black italic">
                  {activeStep}/3
               </div>
            </div>

            <AnimatePresence mode="wait">
               {activeStep === 1 && (
                 <motion.div key="step1" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="space-y-12">
                    <div className="grid md:grid-cols-2 gap-10">
                       <div className="space-y-4">
                          <label className={THEME.typography.ui + " text-[#D4AF37] ml-4"}>Executive_Identity</label>
                          <input className="w-full bg-white/5 border border-white/10 rounded-[2.5rem] px-10 py-8 text-white outline-none focus:border-[#D4AF37] transition-all italic font-bold" placeholder="Full Legal Name" />
                       </div>
                       <div className="space-y-4">
                          <label className={THEME.typography.ui + " text-[#D4AF37] ml-4"}>Corporate_Node</label>
                          <input className="w-full bg-white/5 border border-white/10 rounded-[2.5rem] px-10 py-8 text-white outline-none focus:border-[#D4AF37] transition-all italic font-bold" placeholder="institution@corporate.com" />
                       </div>
                    </div>
                    <div className="space-y-4">
                       <label className={THEME.typography.ui + " text-[#D4AF37] ml-4"}>Institutional_Affiliation</label>
                       <input className="w-full bg-white/5 border border-white/10 rounded-[2.5rem] px-10 py-8 text-white outline-none focus:border-[#D4AF37] transition-all italic font-bold" placeholder="Firm Name (e.g. Imperial Assets)" />
                    </div>
                    <button onClick={() => setActiveStep(2)} className="w-full py-12 bg-[#D4AF37] text-[#0F1419] rounded-full font-black uppercase tracking-[0.5em] text-xs italic shadow-7xl hover:bg-white transition-all flex items-center justify-center gap-6 group">
                       Initialize Vetting <ChevronRight className="group-hover:translate-x-4 transition-transform" />
                    </button>
                 </motion.div>
               )}

               {activeStep === 2 && (
                 <motion.div key="step2" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="space-y-12">
                    <div className="space-y-4">
                       <label className={THEME.typography.ui + " text-[#D4AF37] ml-4"}>Capital_Deployment_Logic</label>
                       <textarea rows="6" className="w-full bg-white/5 border border-white/10 rounded-[3.5rem] px-10 py-10 text-white outline-none focus:border-[#D4AF37] transition-all italic font-bold leading-relaxed" placeholder="Architect your investment thesis and strategic sector focus..." />
                    </div>
                    <div className="grid grid-cols-2 gap-10">
                       <button onClick={() => setActiveStep(1)} className="py-10 border border-white/10 text-white rounded-full font-black uppercase tracking-[0.5em] text-[10px] italic hover:bg-white/5 transition-all">Previous</button>
                       <button onClick={() => setActiveStep(3)} className="py-10 bg-[#D4AF37] text-[#0F1419] rounded-full font-black uppercase tracking-[0.5em] text-[10px] italic shadow-7xl hover:bg-white transition-all">Submit Protocol</button>
                    </div>
                 </motion.div>
               )}

               {activeStep === 3 && (
                 <motion.div key="step3" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-24">
                    <div className="w-32 h-32 bg-emerald-500/20 rounded-full flex items-center justify-center text-emerald-500 mx-auto mb-12 shadow-[0_0_50px_rgba(16,185,129,0.3)] border-2 border-emerald-500/50 animate-bounce">
                       <CheckCircle2 size={64} />
                    </div>
                    <h3 className="text-6xl font-black text-white italic uppercase tracking-tighter mb-8">Node Synchronized</h3>
                    <p className="text-2xl text-slate-400 italic mb-16 max-w-md mx-auto">Your institutional profile is being processed by the Syndicate Council.</p>
                    <button onClick={() => setActiveStep(1)} className="text-[#D4AF37] font-black uppercase tracking-[0.4em] text-[10px] italic underline">Reset_Handshake</button>
                 </motion.div>
               )}
            </AnimatePresence>

            <div className="mt-24 pt-12 border-t border-white/5 flex justify-between items-center opacity-40">
               <span className={THEME.typography.ui + " text-[8px]"}>Security: INSTITUTIONAL_ENCRYPTION_V6</span>
               <div className="flex gap-4">
                  <div className="w-2 h-2 rounded-full bg-emerald-500" />
                  <div className="w-2 h-2 rounded-full bg-slate-700" />
                  <div className="w-2 h-2 rounded-full bg-slate-700" />
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

/**
 * PAGE: Intelligence MCP (Dashboard)
 */
const MasterControl = () => {
  const [activeTab, setActiveTab] = useState("neural");
  const chartData = useMemo(() => [
    { name: '00:00', res: 4000, vel: 2400 },
    { name: '04:00', res: 3000, vel: 1398 },
    { name: '08:00', res: 2000, vel: 9800 },
    { name: '12:00', res: 2780, vel: 3908 },
    { name: '16:00', res: 1890, vel: 4800 },
    { name: '20:00', res: 2390, vel: 3800 },
    { name: '24:00', res: 3490, vel: 4300 },
  ], []);

  const sidebarNodes = [
    { id: "neural", icon: <Brain size={18}/>, label: "Neural Insights" },
    { id: "vanguard", icon: <UserCheck size={18}/>, label: "Founder Nodes" },
    { id: "syndicate", icon: <Landmark size={18}/>, label: "Capital Flow" },
    { id: "telemetry", icon: <Activity size={18}/>, label: "Grid Telemetry" }
  ];

  return (
    <div className="h-screen w-full bg-[#FDF9F3] flex font-serif overflow-hidden select-none">
      {/* SIDEBAR COMMANDER */}
      <aside className="w-96 bg-[#0F1419] flex flex-col p-12 relative z-50 shadow-luxury">
        <div className="mb-24">
          <Link to="/" className="flex items-center gap-6">
            <div className="w-14 h-14 bg-[#D4AF37] rounded-2xl flex items-center justify-center text-[#0F1419] font-black italic shadow-2xl text-3xl">U</div>
            <span className="text-3xl font-black text-white italic uppercase tracking-tighter">Udaaro</span>
          </Link>
          <div className="mt-8 flex items-center gap-4">
             <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
             <p className={THEME.typography.ui + " text-slate-500"}>Master_Control_v6.0</p>
          </div>
        </div>

        <nav className="flex-1 space-y-4">
          {sidebarNodes.map((item) => (
            <button 
              key={item.id} 
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-8 px-8 py-6 rounded-[2rem] transition-all duration-700 relative group ${activeTab === item.id ? 'bg-[#D4AF37] text-[#0F1419] shadow-2xl translate-x-3' : 'text-slate-500 hover:text-white hover:bg-white/5'}`}
            >
              {item.icon}
              <span className={THEME.typography.ui}>{item.label}</span>
              {activeTab === item.id && (
                <motion.div layoutId="mcpActive" className="absolute right-6 w-2 h-2 rounded-full bg-[#0F1419]" />
              )}
            </button>
          ))}
        </nav>

        <div className="mt-auto pt-12 border-t border-white/5">
           <div className="p-8 bg-white/5 rounded-[2.5rem] border border-white/5 mb-8">
              <p className={THEME.typography.ui + " text-[#D4AF37] mb-4"}>Grid_Integrity</p>
              <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                 <motion.div animate={{ width: "98.4%" }} className="h-full bg-emerald-500" />
              </div>
              <p className="text-[9px] font-black text-emerald-500 mt-4 text-right tracking-[0.3em]">98.4%_STABLE</p>
           </div>
           <button className="flex items-center gap-6 text-slate-600 hover:text-rose-500 transition-colors px-4 group">
             <ZapOff size={20} className="group-hover:rotate-12 transition-transform" /> 
             <span className={THEME.typography.ui}>Terminate_Imperial_Link</span>
           </button>
        </div>
      </aside>

      {/* MAIN WORKSPACE */}
      <main className="flex-1 flex flex-col h-screen overflow-y-auto relative bg-jali-grid pb-24">
         <header className="p-16 sticky top-0 z-40 bg-[#FDF9F3]/80 backdrop-blur-3xl border-b border-[#D4AF37]/10 flex justify-between items-center px-24">
            <div>
               <p className={THEME.typography.ui + " text-[#D4AF37]"}>Workspace / Active</p>
               <h1 className="text-6xl font-black italic tracking-tighter uppercase mt-2">{activeTab}_Protocol</h1>
            </div>
            <div className="flex items-center gap-12">
               <div className="hidden xl:flex items-center gap-6 px-8 py-4 bg-white border border-slate-200 rounded-[2rem] shadow-sm">
                  <div className="relative">
                    <Globe2 size={20} className="text-[#D4AF37] animate-spin-slow" />
                    <div className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-emerald-500" />
                  </div>
                  <span className={THEME.typography.ui + " text-slate-500 tracking-widest"}>SERVER_APAC_SOUTH_1</span>
               </div>
               <div className="w-20 h-20 bg-[#0F1419] rounded-[2rem] border-2 border-[#D4AF37] flex items-center justify-center text-[#D4AF37] shadow-2xl hover:scale-110 transition-transform cursor-pointer group">
                  <Fingerprint size={36} className="group-hover:text-white transition-colors" />
               </div>
            </div>
         </header>

         <div className="p-20 max-w-[1750px] mx-auto w-full space-y-20">
            {/* KPI GRID */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
               {[
                 { label: "Neural_Vetting", val: "99.8%", icon: <Target/>, color: "text-[#0F1419]" },
                 { label: "Sync_Latency", val: "12ms", icon: <Zap/>, color: "text-[#D4AF37]" },
                 { label: "Grid_Velocity", val: "1.4x", icon: <TrendingUp/>, color: "text-emerald-500" },
                 { label: "Node_Trust", val: "Elite", icon: <ShieldCheck/>, color: "text-blue-500" }
               ].map((stat, i) => (
                 <motion.div 
                    key={i}
                    whileHover={{ y: -15 }}
                    className="p-12 bg-white rounded-[4rem] border border-slate-100 shadow-xl relative overflow-hidden group"
                 >
                    <div className="absolute right-0 top-0 p-12 opacity-[0.03] group-hover:scale-150 transition-transform duration-1000 rotate-12">{stat.icon}</div>
                    <p className={THEME.typography.ui + " text-[#D4AF37] mb-8"}>{stat.label}</p>
                    <h3 className={`text-7xl font-black italic tracking-tighter leading-none ${stat.color}`}>{stat.val}</h3>
                 </motion.div>
               ))}
            </div>

            {/* ANALYTICS NODE */}
            <div className="grid lg:grid-cols-12 gap-12">
               <div className="lg:col-span-8 bg-white p-20 rounded-[6rem] shadow-2xl border border-slate-100 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-20 opacity-[0.01] group-hover:scale-110 transition-transform duration-[3s]">
                    <Activity size={600} />
                  </div>
                  <div className="flex justify-between items-center mb-20 relative z-10">
                    <div className="flex items-center gap-8">
                       <div className="w-16 h-16 bg-[#0F1419] rounded-2xl flex items-center justify-center text-[#D4AF37]">
                          <BarChart3 size={32} />
                       </div>
                       <h2 className="text-5xl font-black italic uppercase tracking-tighter">Ecosystem_Pulse</h2>
                    </div>
                    <div className="flex gap-4">
                       {['24H', '7D', '30D'].map(t => (
                         <button key={t} className="px-6 py-2 rounded-full border border-slate-200 text-[9px] font-black uppercase hover:bg-[#0F1419] hover:text-white transition-all">{t}</button>
                       ))}
                    </div>
                  </div>
                  <div className="h-[550px] relative z-10 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                       <AreaChart data={chartData}>
                          <defs>
                             <linearGradient id="gGold" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#D4AF37" stopOpacity={0.5}/>
                                <stop offset="95%" stopColor="#D4AF37" stopOpacity={0}/>
                             </linearGradient>
                          </defs>
                          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                          <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#64748b' }} />
                          <YAxis hide />
                          <Tooltip 
                            contentStyle={{ background: '#0F1419', borderRadius: '40px', border: 'none', color: '#fff', padding: '25px', boxShadow: '0 20px 50px rgba(0,0,0,0.5)' }} 
                            itemStyle={{ color: '#D4AF37', fontWeight: '900', fontStyle: 'italic', textTransform: 'uppercase' }}
                          />
                          <Area type="monotone" dataKey="res" stroke="#D4AF37" strokeWidth={8} fill="url(#gGold)" />
                       </AreaChart>
                    </ResponsiveContainer>
                  </div>
               </div>

               <div className="lg:col-span-4 space-y-12">
                  <div className="bg-[#0F1419] p-16 rounded-[5rem] shadow-7xl text-white border border-[#D4AF37]/20 relative overflow-hidden h-full flex flex-col">
                     <div className="absolute inset-0 opacity-10"><JaliPattern/></div>
                     <div className="relative z-10 flex-1">
                        <h4 className={THEME.typography.ui + " text-[#D4AF37] mb-12"}>Node_Compliance_Vitals</h4>
                        <div className="space-y-8">
                           {[
                             { label: "IP_Shield_Node", status: "Operational", icon: <Lock size={16}/> },
                             { label: "Resilience_Engine", status: "Healthy", icon: <Shield size={16}/> },
                             { label: "Logic_Handshake", status: "Synced", icon: <CircuitBoard size={16}/> },
                             { label: "Audit_Protocol", status: "Verified", icon: <SearchCheck size={16}/> }
                           ].map((item, i) => (
                             <div key={i} className="flex justify-between items-center p-6 bg-white/5 rounded-3xl border border-white/5 hover:border-[#D4AF37]/40 transition-all group cursor-pointer">
                                <div className="flex items-center gap-6 text-slate-400 group-hover:text-white transition-colors">
                                   {item.icon}
                                   <span className="font-bold italic text-sm">{item.label}</span>
                                </div>
                                <span className="text-[10px] font-black text-emerald-500 uppercase tracking-widest">{item.status}</span>
                             </div>
                           ))}
                        </div>
                     </div>
                     <button className="relative z-10 w-full py-8 mt-12 bg-[#D4AF37] text-[#0F1419] rounded-3xl font-black uppercase tracking-[0.5em] text-[10px] italic shadow-7xl group">
                       Initialize_Grid_Sync <ChevronRight className="inline ml-4 group-hover:translate-x-2 transition-transform" />
                     </button>
                  </div>
               </div>
            </div>

            {/* HANDSHAKE TABLE */}
            <div className="bg-white rounded-[5rem] border border-slate-100 shadow-2xl overflow-hidden">
               <div className="p-16 border-b border-slate-50 bg-slate-50/50 flex flex-col md:flex-row justify-between items-center gap-12 px-24">
                  <div>
                    <h3 className="text-4xl font-black italic uppercase tracking-tighter">Handshake_Registry</h3>
                    <p className={THEME.typography.ui + " text-slate-400 mt-2"}>Real-time founder node verification</p>
                  </div>
                  <div className="flex items-center gap-8">
                     <div className="flex items-center gap-6 px-10 py-4 bg-white rounded-full shadow-sm border border-slate-200">
                       <Search size={20} className="text-slate-300" />
                       <input className="bg-transparent outline-none text-sm italic font-bold w-64" placeholder="Search node identity..." />
                     </div>
                     <button className="w-16 h-16 rounded-2xl border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] hover:bg-[#0F1419] transition-all"><Download size={20}/></button>
                  </div>
               </div>
               
               <div className="overflow-x-auto px-12 pb-12">
                  <table className="w-full text-left">
                     <thead className="text-[#D4AF37] bg-[#0F1419] rounded-full overflow-hidden">
                        <tr>
                           <th className="p-12 pl-20 font-black uppercase text-[10px] tracking-[0.4em] italic rounded-l-[3rem]">Handshake_Identity</th>
                           <th className="p-12 font-black uppercase text-[10px] tracking-[0.4em] italic">Venture_Origin</th>
                           <th className="p-12 font-black uppercase text-[10px] tracking-[0.4em] italic">Compliance</th>
                           <th className="p-12 font-black uppercase text-[10px] tracking-[0.4em] italic">Velocity</th>
                           <th className="p-12 pr-20 text-right font-black uppercase text-[10px] tracking-[0.4em] italic rounded-r-[3rem]">Grid_Command</th>
                        </tr>
                     </thead>
                     <tbody className="divide-y divide-slate-50">
                        {[
                          { id: "NODE_X01", name: "Kunal Pandey", org: "Deep_Fin_Node", state: "Verified", vel: "1.2x", sector: "Institutional Fintech" },
                          { id: "NODE_X02", name: "Aayansh S.", org: "Dairy_Chain_OS", state: "Auditing", vel: "0.8x", sector: "Agri-Infrastructure" },
                          { id: "NODE_X03", name: "Priyadarshi_A", org: "UDAARO_CORE", state: "Master", vel: "4.0x", sector: "Grid Infrastructure" },
                          { id: "NODE_X04", name: "S. Yadav", org: "Bio_Resonance", state: "Verified", vel: "1.1x", sector: "Med-Tech" },
                          { id: "NODE_X05", name: "Mehra_Logic", org: "LBSNAA_UPSC_OS", state: "Verified", vel: "2.5x", sector: "Ed-Tech Infrastructure" },
                        ].map((node, i) => (
                          <tr key={i} className="hover:bg-[#FDF9F3] transition-all duration-500 group">
                             <td className="p-12 pl-20">
                                <div className="flex items-center gap-10">
                                   <div className="w-20 h-20 bg-slate-100 rounded-3xl flex items-center justify-center font-black text-2xl group-hover:bg-[#0F1419] group-hover:text-[#D4AF37] transition-all duration-700 shadow-inner">{node.name.charAt(0)}</div>
                                   <div>
                                      <p className="font-black text-2xl uppercase tracking-tighter text-[#0F1419]">{node.name}</p>
                                      <p className="text-[10px] text-slate-400 font-mono tracking-widest uppercase mt-1">{node.id}</p>
                                   </div>
                                </div>
                             </td>
                             <td className="p-12">
                                <p className="font-black text-xl text-slate-700 italic">{node.org}</p>
                                <p className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-widest mt-1">{node.sector}</p>
                             </td>
                             <td className="p-12">
                                <span className={`px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest italic ${node.state === 'Verified' ? 'bg-emerald-100 text-emerald-600' : node.state === 'Master' ? 'bg-[#0F1419] text-[#D4AF37]' : 'bg-blue-100 text-blue-600'}`}>
                                  {node.state}
                                </span>
                             </td>
                             <td className="p-12">
                                <div className="flex items-center gap-4">
                                   <div className="w-16 h-2 bg-slate-100 rounded-full overflow-hidden">
                                      <motion.div initial={{ width: 0 }} whileInView={{ width: node.vel === '4.0x' ? '100%' : '60%' }} className="h-full bg-[#D4AF37]" />
                                   </div>
                                   <span className="font-black italic text-slate-500">{node.vel}</span>
                                </div>
                             </td>
                             <td className="p-12 pr-20 text-right">
                                <div className="flex justify-end gap-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                   <button className="w-14 h-14 bg-white border border-slate-100 rounded-2xl flex items-center justify-center text-slate-400 hover:text-[#D4AF37] hover:shadow-xl transition-all"><Eye size={20}/></button>
                                   <button className="w-14 h-14 bg-white border border-slate-100 rounded-2xl flex items-center justify-center text-slate-400 hover:text-blue-500 hover:shadow-xl transition-all"><FileText size={20}/></button>
                                   <button className="w-14 h-14 bg-white border border-slate-100 rounded-2xl flex items-center justify-center text-slate-400 hover:text-rose-500 hover:shadow-xl transition-all"><ZapOff size={20}/></button>
                                </div>
                             </td>
                          </tr>
                        ))}
                     </tbody>
                  </table>
               </div>
            </div>
         </div>
      </main>
    </div>
  );
};

// --- VI. IDENTITY LOGIC MODULE ( THEORY ) ---

const IdentityLogic = () => (
  <div className="min-h-screen bg-[#FDF9F3] pt-64 px-12 pb-48 relative overflow-hidden">
     <JaliPattern />
     <div className="max-w-[1700px] mx-auto">
        <SectionHeading 
          badge="Architectural Theory"
          title="Venture <br /> Sovereignty."
          subtitle="A thesis on building generational institutions through neo-heritage structuralism and algorithmic integrity."
        />
        
        <div className="grid lg:grid-cols-2 gap-32">
           <div className="space-y-32">
              {[
                { 
                  t: "The Post-Hype Economy", 
                  d: "The 2026 economic landscape demands institutional permanence over temporary valuation spikes. Udaaro enforces a 'Product-Logic-First' mandate.",
                  icon: <Compass size={40}/>
                },
                { 
                  t: "Neo-Heritage Moats", 
                  d: "We utilize traditional industrial wisdom synthesized with bleeding-edge AI logic. This creates defensibility that pure software models lack.",
                  icon: <Award size={40}/>
                },
                { 
                  t: "Algorithmic Integrity", 
                  d: "Every venture within our VOS is audited for structural logic leaks, financial fragility, and operational resonance before scaling.",
                  icon: <Binary size={40}/>
                }
              ].map((point, i) => (
                <motion.div key={i} whileHover={{ x: 20 }} className="flex gap-12 group">
                   <div className="w-24 h-24 bg-white rounded-[2rem] flex items-center justify-center text-[#D4AF37] shadow-xl group-hover:bg-[#0F1419] transition-all duration-700 shrink-0">
                      {point.icon}
                   </div>
                   <div>
                      <h3 className="text-5xl font-black italic uppercase tracking-tighter mb-6">{point.t}</h3>
                      <p className="text-2xl text-slate-500 italic font-medium leading-relaxed">{point.d}</p>
                   </div>
                </motion.div>
              ))}
           </div>
           
           <div className="relative">
              <div className="sticky top-64 bg-[#0F1419] p-24 rounded-[7rem] text-white overflow-hidden shadow-7xl">
                 <div className="absolute inset-0 opacity-10 rotate-45 scale-150"><Dna size={800} /></div>
                 <div className="relative z-10">
                    <h3 className="text-5xl font-black italic uppercase mb-12">The Sovereign Oath</h3>
                    <blockquote className="text-3xl font-medium italic text-slate-300 leading-relaxed mb-20 border-l-4 border-[#D4AF37] pl-10">
                      "We build not for the exit, but for the impact. We seek not the trend, but the truth. We engineering not for a cycle, but for a century."
                    </blockquote>
                    <div className="flex items-center gap-8">
                       <div className="w-20 h-20 rounded-full border-4 border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] font-black italic">AP</div>
                       <div>
                          <p className="font-black italic text-2xl uppercase tracking-tighter">Apurva Priyadarshi</p>
                          <p className={THEME.typography.ui + " text-[#D4AF37]"}>Chief Architect / Udaaro</p>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
     </div>
  </div>
);

// --- VII. MAIN INFRASTRUCTURE (ROUTING & SYSTEM WRAPPER) ---

const AppCore = () => {
  const isResonating = useResonance();
  const location = useLocation();

  if (!isResonating) return <SovereignLoader />;

  return (
    <div className="udaaro-sovereign-vos-grid bg-[#FDF9F3] min-h-screen selection:bg-[#D4AF37] selection:text-[#0F1419]">
      <Navbar />

      <Suspense fallback={<SovereignLoader />}>
        <AnimatePresence mode="wait">
          <motion.main
            key={location.pathname}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/identity" element={<IdentityLogic />} />
              <Route path="/syndicate" element={<Investors />} />
              <Route path="/advisory" element={<div className="pt-80 pb-40 px-12 text-center"><SectionHeading badge="Council_Node" title="Advisory <br /> Resonance." subtitle="Industrial titans shaping India's sovereign economy." /></div>} />
              <Route path="/intelligence" element={<MasterControl />} />
              <Route path="/apply" element={<div className="h-screen flex items-center justify-center bg-[#0F1419]"><SectionHeading light badge="Gate_Status: Open" title="Inception <br /> Protocol." subtitle="Batch 2026 Admissions Handshake initializing..." /></div>} />
              <Route path="/privacy" element={<div className="pt-80 pb-40 px-12"><SectionHeading badge="Governance" title="Data <br /> Sovereignty." subtitle="Your intellectual property is protected by AES-256 institutional encryption." /></div>} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </motion.main>
        </AnimatePresence>
      </Suspense>

      <SovereignAI />

      {/* GLOBAL TELEMETRY BAR */}
      <div className="fixed bottom-10 left-10 z-[1000] hidden lg:block">
        <div className="px-8 py-4 bg-[#0F1419]/95 backdrop-blur-3xl border border-[#D4AF37]/20 rounded-2xl shadow-6xl flex items-center gap-8">
           <div className="flex items-center gap-4">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[9px] font-black text-[#D4AF37] uppercase tracking-[0.4em] italic">System_Resonance: Stable</span>
           </div>
           <div className="h-6 w-[1px] bg-white/10" />
           <div className="flex items-center gap-4">
              <History size={14} className="text-[#D4AF37]/40" />
              <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest italic">Node: {UDAARO_CONFIG.node}</span>
           </div>
        </div>
      </div>

      {/* IMPERIAL FOOTER */}
      <footer className="bg-[#0F1419] pt-96 pb-24 px-12 border-t border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02] flex items-center justify-center"><Network size={1200} /></div>
        <div className="max-w-[1850px] mx-auto relative z-10">
          <div className="grid lg:grid-cols-6 gap-32 mb-72">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-8 mb-16">
                 <div className="w-20 h-20 bg-[#D4AF37] text-[#0F1419] rounded-3xl flex items-center justify-center font-black italic text-4xl shadow-2xl">U</div>
                 <h3 className="text-7xl font-black text-white uppercase italic tracking-tighter leading-none">Udaaro</h3>
              </div>
              <p className="text-slate-400 text-3xl font-medium italic leading-relaxed max-w-md mb-20 opacity-60">The Sovereign Venture Operating System. Engineered for Indian innovation clusters and founders building legacy.</p>
              <div className="flex gap-8">
                 {[Globe, Binary, Radio, Activity, Target, Shield].map((Icon, i) => (
                   <div key={i} className="w-16 h-16 rounded-2xl border border-white/10 flex items-center justify-center text-white/30 hover:text-[#D4AF37] hover:border-[#D4AF37] transition-all cursor-crosshair group">
                      <Icon size={24} className="group-hover:rotate-12 transition-transform" />
                   </div>
                 ))}
              </div>
            </div>
            
            <div className="space-y-12">
               <h5 className={THEME.typography.ui + " text-[#D4AF37]"}>Venture_Ecosystem</h5>
               <ul className="space-y-8 text-sm font-black uppercase tracking-[0.4em] italic text-slate-500">
                  <li><Link to="/apply" className="hover:text-white transition-colors">Vanguard_Intake</Link></li>
                  <li><Link to="/syndicate" className="hover:text-white transition-colors">Syndicate_Portal</Link></li>
                  <li><Link to="/advisory" className="hover:text-white transition-colors">Advisory_Resonance</Link></li>
                  <li><Link to="/identity" className="hover:text-white transition-colors">Architectural_Theory</Link></li>
               </ul>
            </div>

            <div className="space-y-12">
               <h5 className={THEME.typography.ui + " text-[#D4AF37]"}>Governance_Node</h5>
               <ul className="space-y-8 text-sm font-black uppercase tracking-[0.4em] italic text-slate-500">
                  <li><Link to="/privacy" className="hover:text-white transition-colors">Data_Sovereignty</Link></li>
                  <li><Link to="/privacy" className="hover:text-white transition-colors">Access_Charter</Link></li>
                  <li><Link to="/privacy" className="hover:text-white transition-colors">Institutional_Ledger</Link></li>
                  <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy_Protocol</Link></li>
               </ul>
            </div>

            <div className="lg:col-span-2 space-y-16">
               <h5 className={THEME.typography.ui + " text-[#D4AF37]"}>Telemetry_Resync</h5>
               <div className="p-12 bg-white/5 border border-white/10 rounded-[3.5rem] backdrop-blur-3xl shadow-luxury">
                  <div className="flex justify-between items-center mb-8">
                    <span className={THEME.typography.ui + " text-slate-500"}>Grid_Stability_Index</span>
                    <span className="text-xl font-black italic text-emerald-500">99.99%</span>
                  </div>
                  <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                    <motion.div initial={{ width: 0 }} whileInView={{ width: "99.9%" }} transition={{ duration: 2 }} className="h-full bg-gradient-to-r from-[#D4AF37] to-emerald-500" />
                  </div>
                  <div className="mt-10 flex items-center gap-4 text-emerald-500">
                     <Radio size={14} className="animate-pulse" />
                     <p className="text-[9px] font-black uppercase tracking-widest italic">All_Global_Nodes_Synchronized</p>
                  </div>
               </div>
            </div>
          </div>

          <div className="pt-24 border-t border-white/5 flex flex-col xl:flex-row justify-between items-center gap-16 opacity-30">
             <div className="flex items-center gap-10">
                <span className="text-[10px] font-black uppercase tracking-[0.5em] italic">Architected by Apurva Priyadarshi © 2026</span>
                <span className="h-4 w-[1px] bg-white/20" />
                <span className="text-[10px] font-black uppercase tracking-[0.5em] italic text-[#D4AF37]">Batch 2026 / India Vanguard</span>
             </div>
             <div className="flex gap-12 text-[9px] font-black uppercase tracking-[0.6em] italic">
                <span>Infrastructure: ENCRYPTED_STABLE</span>
                <span>OS_VER: {UDAARO_CONFIG.version}</span>
                <span>Node: APAC_VANGUARD_01</span>
             </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

const App = () => (
  <Router>
    <AppCore />
  </Router>
);

export default App;

/**
 * =============================================================================
 * IX. STYLING PROTOCOLS (GLOBAL_IMPERIAL_DNA)
 * =============================================================================
 */

const styleInject = `
  @import url('https://fonts.googleapis.com/css2?family=Italiana&family=Inter:ital,wght@0,100..900;1,100..900&family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&display=swap');

  :root {
    --gold: #D4AF37;
    --slate: #0F1419;
    --sand: #FDF9F3;
  }

  body {
    background-color: var(--sand);
    font-family: 'Inter', sans-serif;
    margin: 0;
    overflow-x: hidden;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Italiana', serif;
  }

  .font-mono {
    font-family: 'JetBrains Mono', monospace;
  }

  .custom-scrollbar::-webkit-scrollbar {
    width: 6px;
  }
  .custom-scrollbar::-webkit-scrollbar-track {
    background: transparent;
  }
  .custom-scrollbar::-webkit-scrollbar-thumb {
    background: #D4AF3733;
    border-radius: 50px;
  }
  .custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background: #D4AF37;
  }

  .bg-jali-grid {
    background-image: radial-gradient(circle, var(--gold) 0.8px, transparent 0.8px);
    background-size: 50px 50px;
    opacity: 0.04;
  }

  .shadow-luxury {
    box-shadow: 0 50px 120px -30px rgba(15, 20, 25, 0.08);
  }

  .shadow-7xl {
    box-shadow: 0 100px 150px -50px rgba(0,0,0,0.25);
  }

  .animate-spin-slow {
    animation: spin 30s linear infinite;
  }

  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  .btn-imperial {
    background: var(--slate);
    color: white;
    border-radius: 4rem;
    text-transform: uppercase;
    font-weight: 900;
    font-style: italic;
    letter-spacing: 0.8em;
    font-size: 11px;
    transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
    box-shadow: 0 40px 80px -20px rgba(0,0,0,0.3);
    position: relative;
    overflow: hidden;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: none;
    cursor: pointer;
  }

  .btn-imperial:hover {
    background: var(--gold);
    color: var(--slate);
    transform: scale(1.05) translateY(-5px);
    box-shadow: 0 60px 100px -20px rgba(212, 175, 55, 0.4);
  }

  .text-gradient-gold {
    background: linear-gradient(to right, #0F1419, #D4AF37, #0F1419);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-size: 200% auto;
    animation: goldShine 5s linear infinite;
  }

  @keyframes goldShine {
    to { background-position: 200% center; }
  }

  ::selection {
    background: var(--gold);
    color: white;
  }
`;

if (typeof document !== 'undefined') {
  const styleSheet = document.createElement("style");
  styleSheet.innerText = styleInject;
  document.head.appendChild(styleSheet);
}

/**
 * =============================================================================
 * X. END_OF_CORE_INFRASTRUCTURE
 * UDAARO SOVEREIGN VENTURE OS / BATCH 2026 / INDIA
 * =============================================================================
 */