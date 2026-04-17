/**
 * ============================================================================================
 * UDAARO SOVEREIGN VENTURE OPERATING SYSTEM (VOS) - IMPERIAL EDITION v6.0.0
 * --------------------------------------------------------------------------------------------
 * DESIGN LANGUAGE: "NEO-HERITAGE IMPERIALISM"
 * LEAD ARCHITECT: APURVA PRIYADARSHI (BATCH 2026)
 * REVISION: ULTIMATE_RESILIENCE_CORE
 * * * INFRASTRUCTURE NODES:
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
 * =============================================================================
 */

const UDAARO_CONFIG = {
  version: "6.0.0-Imperial",
  founder: "Apurva Priyadarshi",
  batch: "2026",
  node: "INDIA_VANGUARD_01",
  apiBase: "https://udaaro-backend.onrender.com",
  handshakeDelay: 1200,
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
    graphite: "#1E293B",
    glass: "rgba(255, 255, 255, 0.03)",
    glassDark: "rgba(0, 0, 0, 0.6)"
  },
  typography: {
    heading: "font-serif tracking-tighter italic",
    ui: "font-mono uppercase tracking-[0.4em] text-[10px] font-black",
    body: "font-sans font-medium italic"
  },
  animations: {
    bounce: { type: "spring", stiffness: 400, damping: 10 },
    gentle: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    imperial: { duration: 1.5, ease: [0.22, 1, 0.36, 1] }
  }
};

const SystemContext = createContext(null);

/** * =============================================================================
 * II. INFRASTRUCTURE ATOMS (UTILITIES)
 * =============================================================================
 */

const useResonance = () => {
  const [isResonating, setIsResonating] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setIsResonating(true), 300);
    return () => clearTimeout(timer);
  }, []);
  return isResonating;
};

const SovereignLoader = () => (
  <div className="fixed inset-0 z-[99999] bg-[#FDF9F3] flex flex-col items-center justify-center">
    <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}>
      <div className="w-40 h-40 bg-[#0F1419] rounded-[3rem] flex items-center justify-center text-[#D4AF37] shadow-7xl border-4 border-[#D4AF37]/10 relative group">
        <div className="absolute inset-0 rounded-[3rem] border-2 border-[#D4AF37] animate-ping opacity-20" />
        <motion.span animate={{ opacity: [1, 0.5, 1] }} transition={{ repeat: Infinity, duration: 2 }} className="text-6xl font-black italic">U</motion.span>
      </div>
      <div className="mt-20 flex flex-col items-center gap-6">
        <div className="flex gap-2">
          {[0, 1, 2].map((i) => (
            <motion.div key={i} animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 1, delay: i * 0.2 }} className="w-2 h-2 bg-[#D4AF37] rounded-full" />
          ))}
        </div>
        <span className={THEME.typography.ui + " text-[#0F1419] ml-4"}>Decrypting_Node_Assets</span>
      </div>
    </motion.div>
  </div>
);

const JaliPattern = () => (
  <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-0">
    <svg width="100%" height="100%">
      <pattern id="jali-v6" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
        <path d="M60 0 L120 60 L60 120 L0 60 Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="60" cy="60" r="12" fill="none" stroke="currentColor" strokeWidth="1" />
        <path d="M0 0 L120 120 M120 0 L0 120" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.4" />
      </pattern>
      <rect width="100%" height="100%" fill="url(#jali-v6)" />
    </svg>
  </div>
);

/** * =============================================================================
 * III. NEURAL MODULE: SOVEREIGN AI (LLM BRIDGE)
 * =============================================================================
 */

const aiReducer = (state, action) => {
  switch (action.type) {
    case 'SET_THINKING': return { ...state, isThinking: action.payload };
    case 'ADD_MESSAGE': return { ...state, messages: [...state.messages, action.payload] };
    case 'TOGGLE_TERMINAL': return { ...state, isOpen: !state.isOpen };
    case 'SET_MODEL': return { ...state, currentModel: action.payload };
    default: return state;
  }
};

const SovereignAI = () => {
  const [state, dispatch] = useReducer(aiReducer, {
    messages: [{ role: "ai", content: "Imperial Neural Grid v6.0 Online. Architect Priyadarshi recognized. Awaiting structural queries." }],
    isThinking: false,
    isOpen: false,
    currentModel: UDAARO_CONFIG.neuralModel
  });
  
  const [input, setInput] = useState("");
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [state.messages, state.isThinking]);

  const handleLogicQuery = async (e) => {
    e.preventDefault();
    if (!input.trim() || state.isThinking) return;

    const query = input;
    setInput("");
    dispatch({ type: 'ADD_MESSAGE', payload: { role: "user", content: query } });
    dispatch({ type: 'SET_THINKING', payload: true });

    try {
      const response = await fetch(`${UDAARO_CONFIG.apiBase}/api/ai/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: query, context: "Institutional_Resonance_Handshake" }),
      });
      const data = await response.json();
      dispatch({ type: 'ADD_MESSAGE', payload: { role: "ai", content: String(data.response || "LOGIC_GAP_DETECTED") } });
    } catch (err) {
      dispatch({ type: 'ADD_MESSAGE', payload: { role: "ai", content: "CRITICAL: Neural Node Offline. Re-routing through standby grid..." } });
    } finally {
      dispatch({ type: 'SET_THINKING', payload: false });
    }
  };

  return (
    <div className="fixed bottom-12 right-12 z-[10000]">
      <AnimatePresence>
        {state.isOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 100 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 100 }}
            className="w-[min(600px,95vw)] h-[85vh] bg-white border border-[#D4AF37]/30 rounded-[4.5rem] shadow-7xl flex flex-col overflow-hidden backdrop-blur-3xl"
          >
            {/* TERMINAL HEADER */}
            <div className="p-14 bg-[#0F1419] text-[#D4AF37] relative overflow-hidden">
              <div className="absolute inset-0 opacity-10 rotate-12 scale-150"><CircuitBoard size={600} /></div>
              <div className="relative z-10 flex justify-between items-center">
                <div>
                  <p className={THEME.typography.ui}>Grid Intelligence Node</p>
                  <h4 className="text-4xl font-black italic tracking-tighter uppercase mt-2">Sovereign_AI</h4>
                </div>
                <div className="flex items-center gap-6">
                   <div className="hidden sm:flex flex-col items-end opacity-40">
                      <p className="text-[8px] font-mono uppercase tracking-widest">Model: {state.currentModel}</p>
                      <p className="text-[8px] font-mono uppercase tracking-widest">Status: Synced</p>
                   </div>
                   <button onClick={() => dispatch({ type: 'TOGGLE_TERMINAL' })} className="w-14 h-14 rounded-full border border-[#D4AF37]/20 flex items-center justify-center hover:bg-white/10 transition-all">
                    <X size={24} />
                   </button>
                </div>
              </div>
            </div>

            {/* MESSAGE STREAM */}
            <div className="flex-1 p-12 overflow-y-auto space-y-10 bg-[#FDF9F3]/60 custom-scrollbar" ref={scrollRef}>
              {state.messages.map((m, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: m.role === 'user' ? 20 : -20 }} animate={{ opacity: 1, x: 0 }} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[88%] p-10 rounded-[3rem] shadow-sm italic text-sm font-medium leading-relaxed relative group ${m.role === 'user' ? 'bg-[#0F1419] text-white rounded-tr-none shadow-black/20' : 'bg-white border-2 border-slate-100 text-slate-800 rounded-tl-none shadow-luxury'}`}>
                    <ReactMarkdown>{m.content}</ReactMarkdown>
                    {m.role === 'ai' && (
                       <div className="absolute -bottom-8 left-4 flex gap-6 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button className="text-[8px] font-black uppercase tracking-widest text-[#D4AF37] flex items-center gap-2"><ClipboardCheck size={10}/> Copy_Intel</button>
                          <button className="text-[8px] font-black uppercase tracking-widest text-slate-400 flex items-center gap-2"><History size={10}/> Audit_Log</button>
                       </div>
                    )}
                  </div>
                </motion.div>
              ))}
              {state.isThinking && (
                <div className="flex flex-col gap-6">
                  <div className="flex items-center gap-4 text-[#D4AF37]">
                    <Loader2 className="animate-spin" size={18} />
                    <span className={THEME.typography.ui + " animate-pulse"}>Architect_Analyzing_Weights...</span>
                  </div>
                  <div className="w-64 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                    <motion.div animate={{ x: [-200, 200] }} transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }} className="w-1/2 h-full bg-[#D4AF37] shadow-[0_0_10px_#D4AF37]" />
                  </div>
                </div>
              )}
            </div>

            {/* COMMAND INPUT */}
            <form onSubmit={handleLogicQuery} className="p-12 border-t border-slate-100 bg-white flex gap-6">
              <div className="flex-1 relative">
                <Terminal size={16} className="absolute left-6 top-1/2 -translate-y-1/2 text-[#D4AF37] opacity-50" />
                <input 
                  value={input} 
                  onChange={(e) => setInput(e.target.value)} 
                  placeholder="Inject structural query..." 
                  className="w-full bg-slate-50 rounded-[2.5rem] pl-16 pr-8 py-7 text-xs italic font-bold outline-none border-2 border-transparent focus:border-[#D4AF37]/40 transition-all" 
                />
              </div>
              <button disabled={state.isThinking} className="w-20 h-20 bg-[#0F1419] text-[#D4AF37] rounded-[2rem] flex items-center justify-center hover:bg-[#D4AF37] hover:text-white transition-all shadow-2xl disabled:opacity-30 active:scale-95">
                <Send size={28} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button 
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => dispatch({ type: 'TOGGLE_TERMINAL' })}
        className="w-32 h-32 bg-[#0F1419] border-4 border-[#D4AF37] rounded-full flex items-center justify-center text-[#D4AF37] shadow-luxury relative group"
      >
        <div className="absolute inset-0 rounded-full border-2 border-[#D4AF37] animate-ping opacity-20 group-hover:hidden" />
        <Bot size={48} className="group-hover:rotate-12 transition-transform duration-500" />
        <div className="absolute -top-2 -right-2 bg-emerald-500 w-8 h-8 rounded-full border-4 border-[#FDF9F3] flex items-center justify-center">
           <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
        </div>
      </motion.button>
    </div>
  );
};

/** * =============================================================================
 * IV. NAVIGATION SYSTEM: COMMAND BRIDGE
 * =============================================================================
 */

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Identity", path: "/identity", icon: <Fingerprint size={14}/>, desc: "Architectural DNA" },
    { label: "Syndicate", path: "/syndicate", icon: <Landmark size={14}/>, desc: "Institutional Capital" },
    { label: "Advisory", path: "/advisory", icon: <ShieldCheck size={14}/>, desc: "Elite Council" },
    { label: "Intelligence", path: "/intelligence", icon: <BarChart3 size={14}/>, desc: "Grid MCP" }
  ];

  return (
    <>
      <nav className={`fixed top-0 w-full z-[999] transition-all duration-1000 ${isScrolled ? 'py-6' : 'py-14'}`}>
        <div className="max-w-[1900px] mx-auto px-12">
          <div className={`flex justify-between items-center px-14 py-7 rounded-[3.5rem] transition-all duration-1000 ${isScrolled ? 'bg-white/90 backdrop-blur-3xl shadow-luxury border border-[#D4AF37]/15' : 'bg-transparent'}`}>
            
            {/* LOGO NODE */}
            <Link to="/" className="flex items-center gap-10 group">
              <div className="w-18 h-18 bg-[#0F1419] text-[#D4AF37] rounded-3xl flex items-center justify-center font-black italic text-4xl shadow-2xl group-hover:rotate-[360deg] transition-all duration-1000 border border-[#D4AF37]/20">U</div>
              <div className="flex flex-col">
                <span className="text-4xl font-black italic tracking-tighter uppercase leading-none text-[#0F1419]">Udaaro</span>
                <div className="flex items-center gap-3 mt-2">
                   <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                   <span className={THEME.typography.ui + " opacity-40"}>Sovereign_VOS_v6.0</span>
                </div>
              </div>
            </Link>
            
            {/* DESKTOP LINKS */}
            <div className="hidden xl:flex items-center gap-20">
              {navLinks.map((link) => (
                <Link 
                  key={link.label} 
                  to={link.path} 
                  className={`${THEME.typography.ui} flex flex-col group relative py-2`}
                >
                  <div className="flex items-center gap-3 group-hover:text-[#D4AF37] transition-colors">
                    <span className="opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0">{link.icon}</span>
                    {link.label}
                  </div>
                  <span className="text-[6px] font-bold opacity-0 group-hover:opacity-30 transition-all translate-y-1">{link.desc}</span>
                  {location.pathname === link.path && (
                    <motion.div layoutId="navResonance" className="absolute -bottom-3 left-0 w-full h-[3px] bg-[#D4AF37]" transition={THEME.animations.bounce} />
                  )}
                </Link>
              ))}
              <Link to="/apply" className="ml-10 px-16 py-6 bg-[#0F1419] text-white rounded-full text-[11px] font-black uppercase tracking-[0.6em] italic hover:bg-[#D4AF37] hover:text-[#0F1419] transition-all duration-700 shadow-7xl hover:scale-110 active:scale-95 group relative overflow-hidden">
                <span className="relative z-10">Initiate_Vanguard</span>
                <motion.div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              </Link>
            </div>

            {/* MOBILE TRIGGER */}
            <button onClick={() => setMobileMenu(true)} className="xl:hidden w-16 h-16 bg-[#0F1419] rounded-2xl flex items-center justify-center text-[#D4AF37] shadow-xl">
              <Command size={28} />
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE OVERLAY */}
      <AnimatePresence>
        {mobileMenu && (
          <motion.div 
            initial={{ x: '100%' }} 
            animate={{ x: 0 }} 
            exit={{ x: '100%' }} 
            transition={THEME.animations. imperial}
            className="fixed inset-0 z-[10000] bg-[#0F1419] p-20 flex flex-col"
          >
            <div className="flex justify-between items-center mb-40">
               <div className="text-[#D4AF37] font-black italic text-5xl">U</div>
               <button onClick={() => setMobileMenu(false)} className="w-20 h-20 rounded-full border border-white/10 flex items-center justify-center text-white"><X size={40}/></button>
            </div>
            <div className="space-y-16">
               {navLinks.map((link, i) => (
                 <motion.div key={i} initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }}>
                    <Link onClick={() => setMobileMenu(false)} to={link.path} className="text-7xl font-black italic uppercase text-white tracking-tighter block hover:text-[#D4AF37] transition-colors">{link.label}</Link>
                 </motion.div>
               ))}
               <Link to="/apply" onClick={() => setMobileMenu(false)} className="inline-block mt-20 text-[#D4AF37] font-black italic text-3xl uppercase tracking-widest border-b-4 border-[#D4AF37] pb-4">Initiate_Vanguard_Protocol</Link>
            </div>
            <div className="mt-auto grid grid-cols-2 gap-10">
               <div className="p-10 border border-white/5 rounded-[3rem]">
                  <p className={THEME.typography.ui + " text-[#D4AF37] mb-4"}>Node_Status</p>
                  <p className="text-white font-black italic">India_Vanguard_01</p>
               </div>
               <div className="p-10 border border-white/5 rounded-[3rem]">
                  <p className={THEME.typography.ui + " text-[#D4AF37] mb-4"}>System_Ver</p>
                  <p className="text-white font-black italic">v6.0.0_IMPERIAL</p>
               </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

/** * =============================================================================
 * V. ATOMIC UI COMPONENTS (REUSABLE NODES)
 * =============================================================================
 */

const SectionHeading = ({ badge, title, subtitle, light = false }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="mb-64 relative">
      <motion.div 
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
        transition={{ duration: 1.2, ease: "circOut" }}
        className="flex items-center gap-10 mb-16"
      >
        <div className={`h-[3px] w-40 ${light ? 'bg-white/20' : 'bg-[#D4AF37]'}`} />
        <span className={`${THEME.typography.ui} ${light ? 'text-white/50' : 'text-[#D4AF37]'}`}>{badge}</span>
      </motion.div>
      <motion.h2 
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 1, delay: 0.2 }}
        className={`text-[8rem] md:text-[16rem] font-black italic tracking-tighter leading-[0.7] mb-20 uppercase ${light ? 'text-white' : 'text-[#0F1419]'}`} 
        dangerouslySetInnerHTML={{ __html: title }} 
      />
      <motion.p 
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className={`text-4xl md:text-6xl font-medium italic max-w-6xl leading-[1.1] ${light ? 'text-slate-400' : 'text-slate-500'}`}
      >
        {subtitle}
      </motion.p>
    </div>
  );
};

const StatCard = ({ label, val, icon, trend, color = "text-[#0F1419]" }) => (
  <motion.div 
    whileHover={{ y: -20, scale: 1.02 }}
    className="p-16 bg-white rounded-[5.5rem] border border-slate-100 shadow-luxury relative overflow-hidden group"
  >
    <div className="absolute -right-4 -top-4 p-16 opacity-[0.03] group-hover:scale-150 group-hover:rotate-12 transition-all duration-1000 group-hover:opacity-[0.1] text-[#D4AF37]">
      {icon}
    </div>
    <div className="flex items-center gap-6 mb-12">
      <div className="w-16 h-16 bg-[#FDF9F3] border border-[#D4AF37]/20 rounded-2xl flex items-center justify-center text-[#D4AF37]">
         {React.cloneElement(icon, { size: 28 })}
      </div>
      <p className={THEME.typography.ui + " text-[#D4AF37] tracking-[0.3em]"}>{label}</p>
    </div>
    <div className="flex items-end justify-between relative z-10">
      <h3 className={`text-8xl font-black italic tracking-tighter leading-none ${color}`}>{val}</h3>
      {trend && (
        <div className="flex flex-col items-end">
           <div className="px-5 py-2 bg-emerald-50 rounded-full flex items-center gap-2 mb-3">
              <TrendingUp size={12} className="text-emerald-500" />
              <span className="text-[10px] font-black text-emerald-600 font-mono">{trend}</span>
           </div>
           <p className="text-[8px] font-black uppercase tracking-widest text-slate-300">Resonance_Delta</p>
        </div>
      )}
    </div>
  </motion.div>
);

const FeatureNode = ({ icon: Icon, title, desc, step, delay }) => (
  <motion.div 
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay }}
    className="p-20 bg-white border border-slate-100 rounded-[6rem] group hover:border-[#D4AF37] transition-all duration-1000 hover:shadow-7xl relative overflow-hidden"
  >
    <div className="absolute -right-10 -top-10 text-slate-50 group-hover:text-[#D4AF37]/5 transition-colors duration-1000">
      <Icon size={400} />
    </div>
    <div className="flex justify-between items-start mb-20 relative z-10">
       <div className="w-24 h-24 bg-[#0F1419] rounded-3xl flex items-center justify-center text-[#D4AF37] shadow-2xl group-hover:rotate-[15deg] transition-all duration-700">
          <Icon size={44} />
       </div>
       <span className="text-7xl font-black italic text-[#D4AF37] opacity-20 group-hover:opacity-100 transition-opacity tracking-widest">{step}</span>
    </div>
    <h3 className="text-5xl font-black italic uppercase tracking-tighter mb-10 leading-none group-hover:translate-x-2 transition-transform duration-700">{title}</h3>
    <p className="text-2xl text-slate-500 font-medium italic leading-relaxed mb-16">{desc}</p>
    <div className="w-full h-[1px] bg-slate-100 group-hover:bg-[#D4AF37]/30 transition-colors" />
    <button className="mt-10 flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 group-hover:text-[#0F1419] transition-all">
       Explore_Module <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
    </button>
  </motion.div>
);

/** * =============================================================================
 * VI. PAGE: HOME NODE (LANDING INFRASTRUCTURE)
 * =============================================================================
 */

const Home = () => {
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, -300]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const videoScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.2]);

  return (
    <div className="relative">
      <JaliPattern />
      
      {/* SECTION 1: IMPERIAL HERO */}
      <section className="relative min-h-[120vh] flex flex-col items-center justify-center text-center px-12 overflow-hidden bg-gradient-to-b from-[#FDF9F3] to-white">
        <motion.div style={{ opacity: heroOpacity, y: heroY }} className="relative z-10 max-w-[1700px] w-full">
          <motion.div 
            initial={{ y: 50, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5, ease: "circOut" }}
            className="mb-24 inline-flex items-center gap-10 px-14 py-5 bg-white border border-[#D4AF37]/40 rounded-full shadow-luxury relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-[#D4AF37]/5 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-1000" />
            <span className="w-4 h-4 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_25px_#10b981]" />
            <span className={THEME.typography.ui + " relative z-10"}>Batch 2026 Sovereign Grid Infrastructure Online</span>
          </motion.div>
          
          <h1 className="text-[10rem] md:text-[22rem] font-black italic uppercase tracking-[15] leading-[0.65] mb-24">
            Structural <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#0F1419] via-[#D4AF37] to-[#0F1419] animate-gold-shine">Sovereignty.</span>
          </h1>
          
          <p className="max-w-[1200px] mx-auto text-3xl md:text-6xl text-slate-500 font-medium italic leading-[1.05] mb-40">
            Udaaro is an institutional <span className="text-[#0F1419] font-black decoration-[#D4AF37] decoration-[20px] underline underline-offset-[25px]">Venture Operating System</span> architecting high-logic legacies for elite Indian founders.
          </p>
          
          <div className="flex flex-wrap justify-center gap-16 items-center">
            <Link to="/apply" className="px-32 py-14 bg-[#0F1419] text-white rounded-[4rem] font-black uppercase tracking-[0.7em] text-sm hover:bg-[#D4AF37] hover:text-[#0F1419] transition-all duration-1000 shadow-7xl shadow-black/40 italic group flex items-center gap-10 hover:scale-105 active:scale-95">
              Access The Gate <ChevronRight className="group-hover:translate-x-6 transition-transform duration-700" size={24} />
            </Link>
            <div className="flex items-center gap-10">
               <div className="h-[1px] w-20 bg-slate-200" />
               <Link to="/identity" className="px-28 py-14 bg-white border-2 border-[#0F1419]/10 text-[#0F1419] rounded-[4rem] font-black uppercase tracking-[0.7em] text-sm hover:bg-[#0F1419] hover:text-white transition-all duration-1000 shadow-sm italic flex items-center gap-8 hover:scale-105 active:scale-95">
                  Protocol_v6.0 <ArrowUpRight size={24} />
               </Link>
            </div>
          </div>
        </motion.div>

        {/* BACKGROUND AMBIENT VIDEO/SHAPE */}
        <motion.div style={{ scale: videoScale }} className="absolute inset-0 z-0 opacity-[0.02]">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vw] bg-radial-gradient from-[#D4AF37] to-transparent rounded-full blur-[150px]" />
        </motion.div>

        <motion.div 
          animate={{ y: [0, 30, 0] }} 
          transition={{ repeat: Infinity, duration: 2.5 }}
          className="absolute bottom-16 flex flex-col items-center gap-6 opacity-40 cursor-pointer group"
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        >
          <div className="w-[2px] h-24 bg-gradient-to-b from-[#0F1419] via-[#0F1419] to-transparent rounded-full" />
          <span className={THEME.typography.ui + " group-hover:text-[#D4AF37] transition-colors"}>Initialize_Grid_Exploration</span>
        </motion.div>
      </section>

      {/* SECTION 2: LIVE GRID PULSE (METRICS) */}
      <section className="bg-[#0F1419] py-56 border-y border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        <div className="max-w-[2000px] mx-auto px-16 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-32 border-b border-white/5 pb-20">
             <div>
                <p className={THEME.typography.ui + " text-[#D4AF37] mb-6"}>Grid_Handshake_Telemetry</p>
                <h2 className="text-8xl font-black italic text-white uppercase tracking-tighter">Live Ecosystem Pulse</h2>
             </div>
             <div className="flex items-center gap-8 opacity-40">
                <p className="text-white text-sm font-mono italic">SYNC_CODE: APAC_V01</p>
                <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse" />
             </div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-32">
            {[
              { label: "Assets_Under_Logic", val: "₹1,420Cr", icon: <Coins size={50}/>, detail: "Institutional Flow" },
              { label: "Founder_Admission", val: "0.82%", icon: <UserCheck size={50}/>, detail: "Selective Intake" },
              { label: "System_Resonance", val: "99.98%", icon: <Zap size={50}/>, detail: "Uptime Protocol" },
              { label: "Global_Nodes", val: "14", icon: <Globe size={50}/>, detail: "Territorial Grid" }
            ].map((m, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="flex flex-col items-center text-center group cursor-crosshair"
              >
                <div className="w-24 h-24 bg-white/5 border border-white/10 rounded-[2rem] flex items-center justify-center text-[#D4AF37] mb-12 group-hover:bg-[#D4AF37] group-hover:text-[#0F1419] transition-all duration-1000 group-hover:rotate-[15deg]">
                   {m.icon}
                </div>
                <p className="text-8xl font-black italic tracking-tighter text-white mb-6 uppercase group-hover:scale-110 transition-transform duration-700">{m.val}</p>
                <div className="space-y-2">
                   <p className={THEME.typography.ui + " text-[#D4AF37] tracking-[0.5em]"}>{m.label}</p>
                   <p className="text-[8px] font-mono text-white/20 uppercase tracking-[0.8em]">{m.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: OPERATING MODEL MODULES */}
      <section className="py-96 bg-white px-12 relative overflow-hidden">
        <div className="max-w-[1800px] mx-auto">
          <SectionHeading 
            badge="The Imperial Framework"
            title="Sovereign <br /> Lifecycle."
            subtitle="The VOS replaces the chaotic uncertainty of traditional building with a hard-vetted institutional execution cycle."
          />
          
          <div className="grid lg:grid-cols-3 gap-24">
            <FeatureNode 
              step="ALPHA_SYNC"
              icon={Fingerprint}
              title="Curated Vetting"
              desc="Our admission protocol utilizes a proprietary logic-audit to analyze problem-solution resonance and founder grit before capital deployment."
              delay={0.1}
            />
            <FeatureNode 
              step="BETA_BUILD"
              icon={Workflow}
              title="Strategic Resonance"
              desc="Direct injection of institutional frameworks. We align founder nodes with elite syndicate capital and industrial titan mentorship."
              delay={0.3}
            />
            <FeatureNode 
              step="OMEGA_RISE"
              icon={Crown}
              title="Imperial Ascension"
              desc="Systematic transition into a globally dominant institution. Achieving structural independence and generational permanence."
              delay={0.5}
            />
          </div>

          {/* INTERNAL DASHBOARD TEASER */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mt-64 p-32 bg-[#FDF9F3] border border-slate-200 rounded-[8rem] relative overflow-hidden flex flex-col md:flex-row items-center gap-32 group"
          >
             <div className="absolute right-0 top-0 w-1/2 h-full bg-[#0F1419] translate-x-[20%] skew-x-[-12deg] group-hover:translate-x-[15%] transition-transform duration-[2s]" />
             <div className="flex-1 relative z-10">
                <SectionHeading 
                   badge="Intelligence Access"
                   title="Executive <br /> Visibility."
                   subtitle="Every startup within the Udaaro VOS is visualized through real-time execution telemetry for founders and institutional partners."
                />
                <Link to="/intelligence" className="btn-imperial px-24 py-12 text-lg">View_Grid_MCP</Link>
             </div>
             <div className="flex-1 relative z-10 w-full max-w-2xl h-[400px] bg-[#0F1419] rounded-[4rem] border-4 border-white/10 shadow-7xl p-10 overflow-hidden">
                <div className="flex justify-between items-center mb-10">
                   <div className="flex gap-3">
                      <div className="w-3 h-3 rounded-full bg-rose-500" />
                      <div className="w-3 h-3 rounded-full bg-amber-500" />
                      <div className="w-3 h-3 rounded-full bg-emerald-500" />
                   </div>
                   <div className={THEME.typography.ui + " text-white/40"}>MCP_PREVIEW_v6</div>
                </div>
                <div className="h-full w-full opacity-30">
                   <ResponsiveContainer width="100%" height="80%">
                      <AreaChart data={[{v:10},{v:40},{v:25},{v:70},{v:50},{v:95}]}>
                         <Area type="monotone" dataKey="v" stroke="#D4AF37" fill="#D4AF37" strokeWidth={4} />
                      </AreaChart>
                   </ResponsiveContainer>
                   <div className="grid grid-cols-2 gap-6 mt-6">
                      <div className="h-12 bg-white/5 rounded-2xl" />
                      <div className="h-12 bg-white/5 rounded-2xl" />
                   </div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                   <Lock size={64} className="text-[#D4AF37] animate-pulse" />
                </div>
             </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 4: THE ALPHA COUNCIL (ADVISORY) */}
      <section className="py-96 bg-[#0F1419] text-white px-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-48 opacity-[0.03] rotate-12 scale-150"><Shield size={1000} /></div>
        <div className="max-w-[1850px] mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row gap-48 items-start mb-64">
             <div className="flex-1">
                <SectionHeading 
                  light
                  badge="Institutional Governance"
                  title="Imperial <br /> Vetting."
                  subtitle="Udaaro is governed by a private collective of tier-1 industrial titans and sovereign policy architects who Hard-Audit every venture logic."
                />
                <div className="grid md:grid-cols-2 gap-16">
                  {[
                    { t: "Deep Technical Audit", d: "Rigorous vetting of infrastructure moats and algorithmic defensibility." },
                    { t: "Macro Synchronization", d: "Alignment of venture growth with national economic directives." },
                    { t: "Capital Cascading", d: "Structured bridge to institutional sovereign wealth funds." },
                    { t: "Institutional Integrity", d: "Zero-bloat growth models focused on repeatable high-margin logic." }
                  ].map((item, i) => (
                    <motion.div key={i} whileHover={{ x: 20 }} className="flex gap-10 group">
                      <div className="w-2.5 h-20 bg-[#D4AF37] group-hover:h-28 transition-all duration-700 origin-top rounded-full shadow-[0_0_20px_#D4AF37]" />
                      <div>
                        <h4 className="text-4xl font-black italic uppercase tracking-tighter mb-6 group-hover:text-[#D4AF37] transition-colors">{item.t}</h4>
                        <p className="text-2xl text-slate-400 font-medium italic leading-relaxed">{item.d}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
             </div>
             
             <div className="flex-1 w-full max-w-[800px] aspect-[4/5] relative">
                <div className="absolute inset-0 bg-white/5 rounded-[9rem] -rotate-3 border border-white/10 shadow-7xl backdrop-blur-3xl overflow-hidden group">
                   <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')] bg-cover opacity-20 grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-[3s]" />
                   <div className="absolute inset-0 bg-gradient-to-t from-[#0F1419] via-transparent to-transparent" />
                   <div className="absolute bottom-24 left-24 right-24">
                      <div className="w-24 h-[2px] bg-[#D4AF37] mb-10" />
                      <h3 className="text-6xl font-black text-white italic uppercase tracking-tighter mb-8 leading-none">Council Access Restricted</h3>
                      <p className="text-2xl text-slate-400 italic mb-14">Institutional node for existing industrial partners and sovereign wealth advisors.</p>
                      <button className="px-16 py-8 bg-[#D4AF37] text-[#0F1419] rounded-full font-black uppercase tracking-[0.5em] text-[10px] shadow-2xl hover:bg-white transition-all italic active:scale-95">Initiate_Identity_Check</button>
                   </div>
                </div>
                <div className="absolute -top-16 -right-16 w-56 h-56 bg-white rounded-[4.5rem] shadow-7xl flex items-center justify-center border-8 border-[#0F1419]">
                   <ShieldCheck size={90} className="text-[#D4AF37]" />
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: VANGUARD SECTORS */}
      <section className="py-96 bg-[#FDF9F3] relative overflow-hidden px-12 border-y border-slate-200">
         <div className="max-w-[1850px] mx-auto">
            <SectionHeading 
              badge="Sector Mandates"
              title="Vanguard <br /> Clusters."
              subtitle="The VOS specializes in six core institutional clusters critical to India's sovereign growth."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
               {[
                 { i: Landmark, t: "Neo-Banking", d: "Hard-logic institutional finance and deep-payment infrastructure." },
                 { i: Zap, t: "Energy Grid", d: "Sovereign power solutions and decentralized energy orchestration." },
                 { i: Microscope, t: "Deep-Health", d: "Algorithmic longevity and precision medical infrastructure." },
                 { i: HardHat, t: "Infra-Tech", d: "Building the physical-logic layers of smart urban clusters." },
                 { i: GraduationCap, t: "Elite-Ed", d: "Scaling institutional excellence through automated logic nodes." },
                 { i: Shield, t: "Sovereign-Sec", d: "Next-gen defense tech and institutional digital moats." }
               ].map((s, i) => (
                 <motion.div 
                  key={i}
                  whileHover={{ y: -15, backgroundColor: "#0F1419", color: "#FFF" }}
                  className="p-16 bg-white border border-slate-200 rounded-[5rem] shadow-xl transition-all duration-700 group cursor-pointer"
                 >
                    <div className="w-20 h-20 bg-[#FDF9F3] border border-[#D4AF37]/30 rounded-2xl flex items-center justify-center text-[#D4AF37] mb-12 group-hover:bg-white/10 group-hover:rotate-12 transition-all">
                       <s.i size={36} />
                    </div>
                    <h4 className="text-4xl font-black italic uppercase tracking-tighter mb-6 group-hover:text-[#D4AF37] transition-colors">{s.t}</h4>
                    <p className="text-xl text-slate-500 italic font-medium group-hover:text-slate-400 transition-colors">{s.d}</p>
                 </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* SECTION 6: THE FINAL ASCENSION CALL */}
      <section className="py-96 bg-[#0F1419] relative overflow-hidden text-center px-12">
        <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 60, ease: "linear" }} className="absolute inset-0 opacity-[0.02] flex items-center justify-center">
           <Dna size={1500} />
        </motion.div>
        <div className="relative z-10 max-w-[1400px] mx-auto">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-[8rem] md:text-[20rem] font-black italic uppercase text-white tracking-tighter leading-[0.6] mb-24"
          >
            Become <br /> <span className="text-[#D4AF37] animate-gold-shine">Vanguard.</span>
          </motion.h2>
          <p className="text-4xl md:text-6xl text-slate-400 italic mb-40 max-w-5xl mx-auto leading-relaxed">
            The Batch 2026 Founder Handshake Protocol is currently processing applications for elite clusters.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-20">
            <Link to="/apply" className="btn-imperial text-2xl px-40 py-18 shadow-[0_0_80px_rgba(212,175,55,0.2)]">Initiate Admission Handshake</Link>
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-6 mb-4">
                 <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                 <p className={THEME.typography.ui + " text-[#D4AF37]"}>Current_Node_Status</p>
              </div>
              <div className="px-12 py-5 bg-emerald-500/10 border border-emerald-500/30 rounded-full text-emerald-500 text-sm font-black uppercase tracking-[0.5em] italic">SYNC_STABLE: 2026_ADMISSIONS_ACTIVE</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

/** * =============================================================================
 * VII. PAGE: SYNDICATE NODE (INVESTOR GATEWAY)
 * =============================================================================
 */

const Investors = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [loading, setLoading] = useState(false);

  const handleNext = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setActiveStep(prev => prev + 1);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#FDF9F3] pt-72 px-12 pb-64 relative">
      <JaliPattern />
      <div className="max-w-[1850px] mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-56 items-start">
          <div className="sticky top-72">
            <SectionHeading 
              badge="Institutional Syndicate Node"
              title="Capital <br /> Resonance."
              subtitle="Aligning institutional sovereign wealth and elite asset managers with the most structurally sound venture dealflow in India."
            />
            
            <div className="space-y-20 mt-32">
              {[
                { title: "Risk Insulation", d: "Structural logic-audits minimize operational fragility before capital injection.", icon: <ShieldCheck size={36}/> },
                { title: "Institutional Vetting", d: "Direct access to our proprietary founder telemetry and audit dossiers.", icon: <UserCheck size={36}/> },
                { title: "Repeatable ROI", d: "Growth models engineered for institutional-grade legacy building.", icon: <TrendingUp size={36}/> }
              ].map((item, i) => (
                <motion.div key={i} whileHover={{ x: 20 }} className="flex gap-12 items-start group p-10 bg-white/40 border border-transparent hover:border-[#D4AF37]/20 rounded-[4rem] transition-all duration-700">
                  <div className="w-24 h-24 bg-white border border-slate-100 rounded-[2.5rem] flex items-center justify-center text-[#D4AF37] shadow-xl group-hover:bg-[#0F1419] group-hover:text-white transition-all duration-700">
                    {item.icon}
                  </div>
                  <div className="pt-2">
                    <h4 className="text-4xl font-black italic uppercase tracking-tighter mb-5 text-[#0F1419] group-hover:text-[#D4AF37] transition-colors">{item.title}</h4>
                    <p className="text-2xl text-slate-500 font-medium italic leading-relaxed">{item.d}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 80 }} 
            animate={{ opacity: 1, x: 0 }} 
            className="bg-[#0F1419] p-28 rounded-[8rem] shadow-7xl relative overflow-hidden"
          >
            {/* STEP PROGRESS BAR */}
            <div className="absolute top-0 left-0 w-full h-4 bg-white/5">
              <motion.div 
                initial={{ width: 0 }} 
                animate={{ width: `${(activeStep / 3) * 100}%` }} 
                className="h-full bg-gradient-to-r from-[#D4AF37] to-[#F9D976] shadow-[0_0_30px_#D4AF37]" 
              />
            </div>
            
            <div className="flex justify-between items-center mb-32 border-b border-white/5 pb-16">
               <div>
                  <p className={THEME.typography.ui + " text-[#D4AF37] tracking-[0.6em]"}>SYNDICATE_INTAKE_0{activeStep}</p>
                  <h3 className="text-5xl font-black text-white italic uppercase mt-6 tracking-tighter">Handshake Protocol</h3>
               </div>
               <div className="flex flex-col items-center">
                  <div className="w-24 h-24 rounded-[2rem] border-4 border-[#D4AF37]/20 flex items-center justify-center text-white text-4xl font-black italic shadow-inner bg-white/5">
                     {activeStep}
                  </div>
                  <p className="text-[9px] font-black text-[#D4AF37]/40 uppercase tracking-[0.4em] mt-4">Node_Stage</p>
               </div>
            </div>

            <AnimatePresence mode="wait">
               {activeStep === 1 && (
                 <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-16">
                    <div className="grid md:grid-cols-2 gap-12">
                       <div className="space-y-6">
                          <label className={THEME.typography.ui + " text-[#D4AF37] ml-6"}>Identity_Hash</label>
                          <div className="relative">
                             <User className="absolute left-8 top-1/2 -translate-y-1/2 text-[#D4AF37]/50" size={18} />
                             <input className="w-full bg-white/5 border border-white/15 rounded-[3rem] pl-20 pr-10 py-10 text-white outline-none focus:border-[#D4AF37] transition-all italic font-bold text-lg" placeholder="Full Legal Name" />
                          </div>
                       </div>
                       <div className="space-y-6">
                          <label className={THEME.typography.ui + " text-[#D4AF37] ml-6"}>Institutional_Node</label>
                          <div className="relative">
                             <AtSign className="absolute left-8 top-1/2 -translate-y-1/2 text-[#D4AF37]/50" size={18} />
                             <input className="w-full bg-white/5 border border-white/15 rounded-[3rem] pl-20 pr-10 py-10 text-white outline-none focus:border-[#D4AF37] transition-all italic font-bold text-lg" placeholder="mail@institution.com" />
                          </div>
                       </div>
                    </div>
                    <div className="space-y-6">
                       <label className={THEME.typography.ui + " text-[#D4AF37] ml-6"}>Asset_Affiliation</label>
                       <div className="relative">
                          <Institution className="absolute left-8 top-1/2 -translate-y-1/2 text-[#D4AF37]/50" size={18} />
                          <input className="w-full bg-white/5 border border-white/15 rounded-[3rem] pl-20 pr-10 py-10 text-white outline-none focus:border-[#D4AF37] transition-all italic font-bold text-lg" placeholder="Managing Partner @ Capital Trust" />
                       </div>
                    </div>
                    <button onClick={handleNext} className="w-full py-14 bg-[#D4AF37] text-[#0F1419] rounded-full font-black uppercase tracking-[0.8em] text-xs italic shadow-7xl hover:bg-white transition-all flex items-center justify-center gap-8 group active:scale-95">
                       {loading ? <Loader2 className="animate-spin" size={24} /> : <>Initialize_Grid_Vetting <ChevronRight className="group-hover:translate-x-6 transition-transform duration-700" size={24}/></>}
                    </button>
                 </motion.div>
               )}

               {activeStep === 2 && (
                 <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-16">
                    <div className="space-y-6">
                       <label className={THEME.typography.ui + " text-[#D4AF37] ml-6"}>Capital_Resonance_Thesis</label>
                       <textarea rows="7" className="w-full bg-white/5 border border-white/15 rounded-[4rem] px-12 py-12 text-white outline-none focus:border-[#D4AF37] transition-all italic font-bold leading-relaxed text-lg" placeholder="Architect your institutional deployment logic and target resonance clusters..." />
                    </div>
                    <div className="grid grid-cols-2 gap-12">
                       <button onClick={() => setActiveStep(1)} className="py-12 border border-white/10 text-white rounded-full font-black uppercase tracking-[0.6em] text-[10px] italic hover:bg-white/5 transition-all">Protocol_Back</button>
                       <button onClick={handleNext} className="py-12 bg-[#D4AF37] text-[#0F1419] rounded-full font-black uppercase tracking-[0.6em] text-[10px] italic shadow-7xl hover:bg-white transition-all">Submit_Audit</button>
                    </div>
                 </motion.div>
               )}

               {activeStep === 3 && (
                 <motion.div key="step3" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-32">
                    <motion.div 
                      animate={{ scale: [1, 1.1, 1], rotate: [0, 10, -10, 0] }} 
                      transition={{ repeat: Infinity, duration: 4 }}
                      className="w-40 h-40 bg-emerald-500/20 rounded-[3.5rem] flex items-center justify-center text-emerald-500 mx-auto mb-16 shadow-[0_0_70px_rgba(16,185,129,0.4)] border-2 border-emerald-500/50"
                    >
                       <CheckCircle2 size={80} />
                    </motion.div>
                    <h3 className="text-7xl font-black text-white italic uppercase tracking-tighter mb-10 leading-none">Grid Synchronized</h3>
                    <p className="text-3xl text-slate-400 italic mb-20 max-w-lg mx-auto leading-relaxed">Your institutional handshake has been encrypted and submitted to the Syndicate Council for hard-audit.</p>
                    <div className="flex flex-col items-center gap-6">
                       <div className="px-10 py-4 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-500 text-[10px] font-black uppercase tracking-widest italic">Vetting_Phase_Active</div>
                       <button onClick={() => setActiveStep(1)} className="text-[#D4AF37] font-black uppercase tracking-[0.5em] text-[10px] italic underline underline-offset-8 mt-10 hover:text-white transition-colors">Reset_Institutional_Terminal</button>
                    </div>
                 </motion.div>
               )}
            </AnimatePresence>

            <div className="mt-32 pt-16 border-t border-white/5 flex justify-between items-center">
               <div className="flex items-center gap-4">
                  <Lock size={14} className="text-[#D4AF37]" />
                  <span className={THEME.typography.ui + " text-slate-500"}>Institutional_AES_v2.0_Secure</span>
               </div>
               <div className="flex gap-4">
                  {[0, 1, 2, 3].map(d => (
                    <motion.div key={d} animate={{ opacity: [0.2, 1, 0.2] }} transition={{ repeat: Infinity, duration: 1.5, delay: d * 0.3 }} className="w-2.5 h-2.5 rounded-full bg-[#D4AF37]" />
                  ))}
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

/** * =============================================================================
 * VIII. PAGE: INTELLIGENCE MCP (EXECUTIVE DASHBOARD)
 * =============================================================================
 */

const MasterControl = () => {
  const [activeTab, setActiveTab] = useState("neural");
  const [isGridSyncing, setIsGridSyncing] = useState(false);

  const chartData = useMemo(() => [
    { name: '00:00', res: 4000, vel: 2400, node: 2400 },
    { name: '04:00', res: 3000, vel: 1398, node: 2210 },
    { name: '08:00', res: 2000, vel: 9800, node: 2290 },
    { name: '12:00', res: 2780, vel: 3908, node: 2000 },
    { name: '16:00', res: 1890, vel: 4800, node: 2181 },
    { name: '20:00', res: 2390, vel: 3800, node: 2500 },
    { name: '24:00', res: 3490, vel: 4300, node: 2100 },
  ], []);

  const radarData = [
    { subject: 'Vetting', A: 120, B: 110, fullMark: 150 },
    { subject: 'Resonance', A: 98, B: 130, fullMark: 150 },
    { subject: 'Velocity', A: 86, B: 130, fullMark: 150 },
    { subject: 'Compliance', A: 99, B: 100, fullMark: 150 },
    { subject: 'Governance', A: 85, B: 90, fullMark: 150 },
    { subject: 'Institutional', A: 65, B: 85, fullMark: 150 },
  ];

  const sidebarNodes = [
    { id: "neural", icon: <Brain size={20}/>, label: "Neural Insights" },
    { id: "vanguard", icon: <UserCheck size={20}/>, label: "Founder Nodes" },
    { id: "syndicate", icon: <Landmark size={20}/>, label: "Capital Flow" },
    { id: "telemetry", icon: <Activity size={20}/>, label: "Grid Telemetry" },
    { id: "governance", icon: <Gavel size={20}/>, label: "Legal Ledger" }
  ];

  const triggerGridSync = () => {
     setIsGridSyncing(true);
     setTimeout(() => setIsGridSyncing(false), 3000);
  };

  return (
    <div className="h-screen w-full bg-[#FDF9F3] flex font-serif overflow-hidden select-none">
      
      {/* SIDEBAR COMMANDER */}
      <aside className="w-[420px] bg-[#0F1419] flex flex-col p-14 relative z-50 shadow-luxury border-r border-white/5">
        <div className="mb-32">
          <Link to="/" className="flex items-center gap-8 group">
            <div className="w-18 h-18 bg-[#D4AF37] rounded-[1.5rem] flex items-center justify-center text-[#0F1419] font-black italic shadow-2xl text-4xl group-hover:rotate-[360deg] transition-all duration-[2s]">U</div>
            <div className="flex flex-col">
               <span className="text-4xl font-black text-white italic uppercase tracking-tighter">Udaaro</span>
               <div className="flex items-center gap-3 mt-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <p className={THEME.typography.ui + " text-slate-500"}>Master_Control_v6</p>
               </div>
            </div>
          </Link>
        </div>

        <nav className="flex-1 space-y-6">
          <p className={THEME.typography.ui + " text-[#D4AF37]/40 mb-10 ml-4"}>Ecosystem_Nodes</p>
          {sidebarNodes.map((item) => (
            <button 
              key={item.id} 
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-10 px-10 py-7 rounded-[2.5rem] transition-all duration-1000 relative group ${activeTab === item.id ? 'bg-gradient-to-r from-[#D4AF37] to-[#B59431] text-[#0F1419] shadow-[0_20px_50px_rgba(212,175,55,0.3)] translate-x-4' : 'text-slate-500 hover:text-white hover:bg-white/5'}`}
            >
              <div className={activeTab === item.id ? 'text-[#0F1419]' : 'text-slate-600 group-hover:text-[#D4AF37] transition-colors'}>
                 {item.icon}
              </div>
              <span className={THEME.typography.ui + " text-sm tracking-[0.2em]"}>{item.label}</span>
              {activeTab === item.id && (
                <motion.div layoutId="mcpResonance" className="absolute right-8 w-2.5 h-2.5 rounded-full bg-[#0F1419] shadow-lg" />
              )}
            </button>
          ))}
        </nav>

        <div className="mt-auto pt-16 border-t border-white/5">
           <div className="p-10 bg-white/5 rounded-[3.5rem] border border-white/5 mb-12 backdrop-blur-xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-emerald-500/5 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-1000" />
              <div className="flex justify-between items-center mb-6 relative z-10">
                 <p className={THEME.typography.ui + " text-[#D4AF37]"}>Grid_Resilience</p>
                 <Shield size={14} className="text-emerald-500" />
              </div>
              <div className="h-2.5 w-full bg-white/10 rounded-full overflow-hidden relative z-10">
                 <motion.div initial={{ width: 0 }} animate={{ width: "98.4%" }} transition={{ duration: 2 }} className="h-full bg-emerald-500 shadow-[0_0_15px_#10b981]" />
              </div>
              <div className="flex justify-between items-center mt-6 relative z-10">
                 <p className="text-[9px] font-black text-emerald-500 tracking-[0.4em]">98.4%_HEALTHY</p>
                 <p className="text-[8px] font-mono text-slate-500 uppercase tracking-widest">Stable_Node</p>
              </div>
           </div>
           <button onClick={triggerGridSync} className={`w-full flex items-center justify-center gap-8 py-8 rounded-[2rem] transition-all duration-700 font-black uppercase tracking-[0.5em] text-[10px] italic ${isGridSyncing ? 'bg-emerald-500 text-white' : 'bg-white/5 text-slate-600 hover:text-rose-500 hover:bg-rose-500/5'}`}>
             {isGridSyncing ? <Loader2 size={20} className="animate-spin" /> : <ZapOff size={20} />} 
             <span>{isGridSyncing ? 'Synchronizing_Grid...' : 'Terminate_Session'}</span>
           </button>
        </div>
      </aside>

      {/* MAIN MCP WORKSPACE */}
      <main className="flex-1 flex flex-col h-screen overflow-y-auto relative bg-jali-grid pb-32 custom-scrollbar">
         
         {/* DASHBOARD HEADER */}
         <header className="p-20 sticky top-0 z-40 bg-[#FDF9F3]/90 backdrop-blur-3xl border-b border-[#D4AF37]/15 flex justify-between items-center px-32">
            <div>
               <p className={THEME.typography.ui + " text-[#D4AF37] tracking-[0.6em]"}>Institutional_Control / Active</p>
               <h1 className="text-7xl font-black italic tracking-tighter uppercase mt-4">{activeTab}_Node_Protocol</h1>
            </div>
            <div className="flex items-center gap-16">
               <div className="hidden 2xl:flex items-center gap-8 px-10 py-5 bg-white border border-slate-200 rounded-[2.5rem] shadow-luxury">
                  <div className="relative">
                    <Globe2 size={24} className="text-[#D4AF37] animate-spin-slow" />
                    <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-emerald-500 border-2 border-white" />
                  </div>
                  <div className="flex flex-col">
                     <span className={THEME.typography.ui + " text-slate-400"}>Grid_Location</span>
                     <span className="text-[10px] font-black uppercase tracking-widest text-[#0F1419]">SERVER_INDIA_VANGUARD_01</span>
                  </div>
               </div>
               <motion.div 
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  className="w-24 h-24 bg-[#0F1419] rounded-[2.5rem] border-4 border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] shadow-7xl cursor-pointer group"
               >
                  <Fingerprint size={40} className="group-hover:text-white group-hover:scale-110 transition-all duration-700" />
               </motion.div>
            </div>
         </header>

         {/* DASHBOARD GRID */}
         <div className="p-24 max-w-[2100px] mx-auto w-full space-y-24">
            
            {/* KPI STRIP */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-14">
               <StatCard label="Neural_Logic_Accuracy" val="99.8%" icon={<Target/>} trend="+0.4%" />
               <StatCard label="Institutional_Sync" val="12ms" icon={<Zap/>} trend="STABLE" color="text-[#D4AF37]" />
               <StatCard label="Ecosystem_Velocity" val="1.4x" icon={<TrendingUp/>} trend="+0.12x" color="text-emerald-500" />
               <StatCard label="Grid_Trust_Score" val="Elite" icon={<ShieldCheck/>} color="text-blue-500" />
            </div>

            {/* MAIN ANALYTICS ROW */}
            <div className="grid lg:grid-cols-12 gap-14">
               
               {/* PRIMARY CHART NODE */}
               <div className="lg:col-span-8 bg-white p-24 rounded-[7rem] shadow-luxury border border-slate-100 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-24 opacity-[0.015] group-hover:scale-110 transition-transform duration-[4s] pointer-events-none">
                    <Activity size={700} />
                  </div>
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-24 relative z-10 gap-10">
                    <div className="flex items-center gap-10">
                       <div className="w-20 h-20 bg-[#0F1419] rounded-3xl flex items-center justify-center text-[#D4AF37] shadow-2xl">
                          <BarChart3 size={40} />
                       </div>
                       <div>
                          <h2 className="text-6xl font-black italic uppercase tracking-tighter">Ecosystem_Pulse</h2>
                          <p className={THEME.typography.ui + " text-slate-300 mt-2"}>Real-time resonance across grid clusters</p>
                       </div>
                    </div>
                    <div className="flex bg-slate-50 p-3 rounded-full border border-slate-100">
                       {['24H', '7D', '30D', '1Y'].map(t => (
                         <button key={t} className="px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-widest transition-all hover:bg-white hover:shadow-sm focus:bg-[#0F1419] focus:text-white">{t}</button>
                       ))}
                    </div>
                  </div>
                  
                  <div className="h-[650px] relative z-10 w-full p-10">
                    <ResponsiveContainer width="100%" height="100%">
                       <AreaChart data={chartData} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                          <defs>
                             <linearGradient id="gGold" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#D4AF37" stopOpacity={0.6}/>
                                <stop offset="95%" stopColor="#D4AF37" stopOpacity={0}/>
                             </linearGradient>
                             <linearGradient id="gEmerald" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#10B981" stopOpacity={0.3}/>
                                <stop offset="95%" stopColor="#10B981" stopOpacity={0}/>
                             </linearGradient>
                          </defs>
                          <CartesianGrid strokeDasharray="5 5" vertical={false} stroke="#f1f5f9" />
                          <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: '#94a3b8', fontWeight: 'bold' }} dy={20} />
                          <YAxis hide domain={['auto', 'auto']} />
                          <Tooltip 
                            cursor={{ stroke: '#D4AF37', strokeWidth: 2, strokeDasharray: '10 10' }}
                            contentStyle={{ background: '#0F1419', borderRadius: '50px', border: 'none', color: '#fff', padding: '35px', boxShadow: '0 40px 80px rgba(0,0,0,0.6)' }} 
                            itemStyle={{ color: '#D4AF37', fontWeight: '900', fontStyle: 'italic', textTransform: 'uppercase', fontSize: '12px', letterSpacing: '0.1em' }}
                            labelStyle={{ color: '#64748b', marginBottom: '15px', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '0.4em', fontSize: '10px' }}
                          />
                          <Area type="monotone" dataKey="res" stroke="#D4AF37" strokeWidth={10} fill="url(#gGold)" animationDuration={3000} />
                          <Area type="monotone" dataKey="vel" stroke="#10B981" strokeWidth={4} strokeDasharray="15 15" fill="url(#gEmerald)" animationDuration={4000} />
                       </AreaChart>
                    </ResponsiveContainer>
                  </div>

                  <div className="mt-16 flex flex-wrap gap-12 relative z-10 px-10">
                     <div className="flex items-center gap-4">
                        <div className="w-4 h-4 bg-[#D4AF37] rounded-full" />
                        <span className={THEME.typography.ui + " text-slate-500"}>Structural_Resonance</span>
                     </div>
                     <div className="flex items-center gap-4">
                        <div className="w-4 h-4 border-2 border-emerald-500 rounded-full" />
                        <span className={THEME.typography.ui + " text-slate-500"}>Execution_Velocity</span>
                     </div>
                  </div>
               </div>

               {/* VITALS PANEL */}
               <div className="lg:col-span-4 space-y-14">
                  <div className="bg-[#0F1419] p-20 rounded-[6rem] shadow-7xl text-white border border-[#D4AF37]/25 relative overflow-hidden h-full flex flex-col group">
                     <div className="absolute inset-0 opacity-10"><JaliPattern/></div>
                     <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-[#D4AF37]/5 rounded-full blur-[100px] group-hover:bg-[#D4AF37]/10 transition-all duration-[2s]" />
                     
                     <div className="relative z-10 flex-1">
                        <div className="flex justify-between items-center mb-16">
                           <h4 className={THEME.typography.ui + " text-[#D4AF37]"}>Grid_Vitals_Monitor</h4>
                           <div className="flex gap-2">
                              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                              <div className="w-2 h-2 rounded-full bg-emerald-500" />
                           </div>
                        </div>

                        <div className="space-y-10">
                           {[
                             { label: "IP_Shield_Node", status: "Operational", icon: <Lock size={20}/>, val: "ACTIVE" },
                             { label: "Resilience_Engine", status: "Healthy", icon: <Shield size={20}/>, val: "SYNCED" },
                             { label: "Logic_Handshake", status: "Optimal", icon: <CircuitBoard size={20}/>, val: "LOCKED" },
                             { label: "Audit_Protocol", status: "Verified", icon: <SearchCheck size={20}/>, val: "AUDITED" },
                             { label: "Cloud_Mesh_Sync", status: "Stable", icon: <Globe size={20}/>, val: "GLOBAL" }
                           ].map((item, i) => (
                             <motion.div 
                                key={i} 
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="flex justify-between items-center p-8 bg-white/5 rounded-3xl border border-white/5 hover:border-[#D4AF37]/50 transition-all group cursor-pointer hover:bg-white/10"
                             >
                                <div className="flex items-center gap-8 text-slate-400 group-hover:text-white transition-all">
                                   <div className="w-12 h-12 flex items-center justify-center bg-white/5 rounded-2xl group-hover:text-[#D4AF37]">
                                      {item.icon}
                                   </div>
                                   <div className="flex flex-col">
                                      <span className="font-black italic text-base uppercase tracking-tighter">{item.label}</span>
                                      <span className="text-[8px] font-mono text-slate-600 group-hover:text-slate-400">{item.status}</span>
                                   </div>
                                </div>
                                <div className="text-right">
                                   <span className="text-[10px] font-black text-emerald-500 uppercase tracking-[0.3em]">{item.val}</span>
                                </div>
                             </motion.div>
                           ))}
                        </div>
                     </div>
                     
                     <div className="relative z-10 pt-16">
                        <div className="p-10 bg-white/5 border border-white/5 rounded-[3rem] mb-12 flex items-center gap-8">
                           <PieChart size={32} className="text-[#D4AF37]" />
                           <div className="flex-1">
                              <div className="flex justify-between items-center mb-4">
                                 <span className="text-[9px] font-black uppercase text-slate-500 italic">Encryption_Load</span>
                                 <span className="text-[9px] font-black uppercase text-[#D4AF37]">24%</span>
                              </div>
                              <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                                 <div className="w-[24%] h-full bg-[#D4AF37]" />
                              </div>
                           </div>
                        </div>
                        <button className="w-full py-10 bg-gradient-to-r from-[#D4AF37] to-[#B59431] text-[#0F1419] rounded-[2rem] font-black uppercase tracking-[0.6em] text-[11px] italic shadow-[0_20px_50px_rgba(212,175,55,0.3)] group hover:scale-105 transition-all">
                          Initialize_Grid_Resync <ChevronRight className="inline ml-6 group-hover:translate-x-4 transition-transform duration-700" size={18}/>
                        </button>
                     </div>
                  </div>
               </div>
            </div>

            {/* SECONDARY ANALYTICS ROW: RADAR & LOGS */}
            <div className="grid lg:grid-cols-12 gap-14">
               
               {/* LOGIC RADAR */}
               <div className="lg:col-span-5 bg-white p-24 rounded-[7rem] shadow-luxury border border-slate-100 flex flex-col items-center justify-center">
                  <div className="w-full text-left mb-16 px-10">
                     <p className={THEME.typography.ui + " text-[#D4AF37]"}>Structural_Comparison</p>
                     <h3 className="text-5xl font-black italic uppercase tracking-tighter mt-4">Resonance Matrix</h3>
                  </div>
                  <div className="w-full h-[500px]">
                     <ResponsiveContainer width="100%" height="100%">
                        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
                           <PolarGrid stroke="#f1f5f9" strokeWidth={2} />
                           <PolarAngleAxis dataKey="subject" tick={{ fill: '#64748b', fontSize: 10, fontWeight: '900', textTransform: 'uppercase', letterSpacing: '0.2em' }} />
                           <PolarRadiusAxis angle={30} domain={[0, 150]} hide />
                           <Radar name="Udaaro_Core" dataKey="B" stroke="#D4AF37" fill="#D4AF37" fillOpacity={0.6} strokeWidth={4} />
                           <Radar name="Market_Avg" dataKey="A" stroke="#0F1419" fill="#0F1419" fillOpacity={0.1} strokeWidth={2} strokeDasharray="10 10" />
                           <Tooltip contentStyle={{ borderRadius: '30px', border: 'none', background: '#0F1419', color: '#fff', padding: '20px' }} />
                        </RadarChart>
                     </ResponsiveContainer>
                  </div>
                  <div className="grid grid-cols-2 gap-10 w-full px-10 mt-10">
                     <div className="p-8 bg-slate-50 rounded-[2.5rem] text-center border border-slate-100">
                        <p className="text-[10px] font-black uppercase text-slate-400 mb-2">Alpha_Node_Sync</p>
                        <p className="text-4xl font-black italic text-[#0F1419]">130%</p>
                     </div>
                     <div className="p-8 bg-[#FDF9F3] rounded-[2.5rem] text-center border border-[#D4AF37]/20">
                        <p className="text-[10px] font-black uppercase text-[#D4AF37] mb-2">Institutional_Delta</p>
                        <p className="text-4xl font-black italic text-[#D4AF37]">+45%</p>
                     </div>
                  </div>
               </div>

               {/* HANDSHAKE REGISTRY TABLE */}
               <div className="lg:col-span-7 bg-white rounded-[7rem] shadow-luxury border border-slate-100 overflow-hidden flex flex-col">
                  <div className="p-20 border-b border-slate-50 bg-[#FDF9F3]/40 flex flex-col md:flex-row justify-between items-center gap-14 px-28">
                     <div>
                       <h3 className="text-5xl font-black italic uppercase tracking-tighter">Handshake_Registry</h3>
                       <p className={THEME.typography.ui + " text-slate-400 mt-3 tracking-[0.6em]"}>Real-time founder node verification</p>
                     </div>
                     <div className="flex items-center gap-10">
                        <div className="flex items-center gap-8 px-10 py-5 bg-white rounded-full shadow-sm border border-slate-200 group focus-within:border-[#D4AF37] transition-all">
                          <Search size={24} className="text-slate-300 group-hover:text-[#D4AF37] transition-colors" />
                          <input className="bg-transparent outline-none text-base italic font-bold w-72" placeholder="Search node identity..." />
                        </div>
                        <motion.button whileHover={{ rotate: 180 }} className="w-18 h-18 rounded-2xl border-2 border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] hover:bg-[#0F1419] transition-all shadow-lg bg-white"><Download size={22}/></motion.button>
                     </div>
                  </div>
                  
                  <div className="overflow-x-auto px-10 pb-10 flex-1">
                     <table className="w-full text-left">
                        <thead className="text-[#D4AF37] bg-[#0F1419] rounded-[3rem] overflow-hidden">
                           <tr>
                              <th className="p-14 pl-24 font-black uppercase text-[11px] tracking-[0.5em] italic rounded-l-[4rem]">Handshake_Identity</th>
                              <th className="p-14 font-black uppercase text-[11px] tracking-[0.5em] italic">Venture_Origin</th>
                              <th className="p-14 font-black uppercase text-[11px] tracking-[0.5em] italic">Compliance</th>
                              <th className="p-14 font-black uppercase text-[11px] tracking-[0.5em] italic">Velocity</th>
                              <th className="p-14 pr-24 text-right font-black uppercase text-[11px] tracking-[0.5em] italic rounded-r-[4rem]">Command</th>
                           </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 italic">
                           {[
                             { id: "NODE_X01", name: "Kunal Pandey", org: "Deep_Fin_Node", state: "Verified", vel: "1.2x", sector: "Fintech", color: "emerald" },
                             { id: "NODE_X02", name: "Aayansh S.", org: "Dairy_Chain_OS", state: "Auditing", vel: "0.8x", sector: "Agri-Infra", color: "blue" },
                             { id: "NODE_X03", name: "Priyadarshi_A", org: "UDAARO_CORE", state: "Master", vel: "4.0x", sector: "Grid-Infra", color: "gold" },
                             { id: "NODE_X04", name: "Shivam Y.", org: "Bio_Resonance", state: "Verified", vel: "1.1x", sector: "Med-Tech", color: "emerald" },
                             { id: "NODE_X05", name: "Mehra_Logic", org: "LBSNAA_UPSC_OS", state: "Vetting", vel: "2.5x", sector: "Ed-Tech", color: "amber" },
                             { id: "NODE_X06", name: "Arjun Rao", org: "Quantum_Scale", state: "Verified", vel: "3.2x", sector: "Deep-Tech", color: "emerald" }
                           ].map((node, i) => (
                             <motion.tr 
                                key={i} 
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="hover:bg-[#FDF9F3] transition-all duration-700 group cursor-pointer"
                             >
                                <td className="p-14 pl-24">
                                   <div className="flex items-center gap-12">
                                      <div className="w-24 h-24 bg-slate-100 rounded-[2rem] flex items-center justify-center font-black text-3xl group-hover:bg-[#0F1419] group-hover:text-[#D4AF37] transition-all duration-1000 shadow-inner group-hover:rotate-[15deg]">
                                         {node.name.charAt(0)}
                                      </div>
                                      <div>
                                         <p className="font-black text-3xl uppercase tracking-tighter text-[#0F1419] group-hover:text-[#D4AF37] transition-colors">{node.name}</p>
                                         <p className="text-[10px] text-slate-400 font-mono tracking-widest uppercase mt-2 group-hover:text-[#0F1419] transition-colors">{node.id}</p>
                                      </div>
                                   </div>
                                </td>
                                <td className="p-14">
                                   <p className="font-black text-2xl text-slate-700 italic group-hover:text-[#0F1419] transition-colors">{node.org}</p>
                                   <p className="text-[11px] font-bold text-[#D4AF37] uppercase tracking-widest mt-2">{node.sector}</p>
                                </td>
                                <td className="p-14">
                                   <div className={`px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-[0.4em] italic inline-flex items-center gap-4 ${
                                      node.color === 'emerald' ? 'bg-emerald-100 text-emerald-600' : 
                                      node.color === 'gold' ? 'bg-[#0F1419] text-[#D4AF37]' : 
                                      node.color === 'amber' ? 'bg-amber-100 text-amber-600' :
                                      'bg-blue-100 text-blue-600'
                                   }`}>
                                      <div className={`w-2 h-2 rounded-full ${node.color === 'gold' ? 'bg-[#D4AF37]' : `bg-${node.color}-500`} animate-pulse`} />
                                      {node.state}
                                   </div>
                                </td>
                                <td className="p-14">
                                   <div className="flex items-center gap-6">
                                      <div className="w-28 h-3 bg-slate-100 rounded-full overflow-hidden">
                                         <motion.div 
                                            initial={{ width: 0 }} 
                                            whileInView={{ width: node.state === 'Master' ? '100%' : '65%' }} 
                                            transition={{ duration: 1.5, ease: "circOut" }}
                                            className="h-full bg-gradient-to-r from-[#0F1419] to-[#D4AF37]" 
                                         />
                                      </div>
                                      <span className="font-black italic text-xl text-slate-500">{node.vel}</span>
                                   </div>
                                </td>
                                <td className="p-14 pr-24 text-right">
                                   <div className="flex justify-end gap-8 opacity-0 group-hover:opacity-100 transition-all duration-700 translate-x-10 group-hover:translate-x-0">
                                      <button className="w-16 h-16 bg-white border border-slate-100 rounded-3xl flex items-center justify-center text-slate-400 hover:text-[#D4AF37] hover:shadow-2xl transition-all hover:scale-110"><Eye size={24}/></button>
                                      <button className="w-16 h-16 bg-white border border-slate-100 rounded-3xl flex items-center justify-center text-slate-400 hover:text-blue-500 hover:shadow-2xl transition-all hover:scale-110"><FileCode size={24}/></button>
                                      <button className="w-16 h-16 bg-white border border-slate-100 rounded-3xl flex items-center justify-center text-slate-400 hover:text-rose-500 hover:shadow-2xl transition-all hover:scale-110"><ZapOff size={24}/></button>
                                   </div>
                                </td>
                             </motion.tr>
                           ))}
                        </tbody>
                     </table>
                  </div>
                  
                  {/* TABLE FOOTER */}
                  <div className="p-16 border-t border-slate-50 bg-slate-50/20 flex justify-between items-center px-28">
                     <p className={THEME.typography.ui + " text-slate-400"}>Showing_06_Nodes_Synchronized</p>
                     <div className="flex gap-4">
                        <button className="px-10 py-4 border border-slate-200 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-white transition-all">Prev_Page</button>
                        <button className="px-10 py-4 bg-[#0F1419] text-[#D4AF37] rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-[#D4AF37] hover:text-[#0F1419] transition-all">Next_Page</button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </main>
    </div>
  );
};

/** * =============================================================================
 * IX. PAGE: IDENTITY LOGIC ( ARCHITECTURAL THEORY MODULES )
 * =============================================================================
 */

const IdentityLogic = () => {
  const points = [
    { 
      t: "Post-Hype Ecosystems", 
      d: "The 2026 economic landscape renders temporary valuation spikes obsolete. Udaaro enforces a mandate where product logic and unit-economics dictate growth over narrative dependency.",
      icon: <Compass size={50}/>,
      meta: "Theory_Node_01"
    },
    { 
      t: "Neo-Heritage Moats", 
      d: "We utilize traditional industrial wisdom—resilience, deep supply chains, and high-trust distribution—synthesized with bleeding-edge AI orchestration. Defensibility through physical-digital convergence.",
      icon: <Award size={50}/>,
      meta: "Theory_Node_02"
    },
    { 
      t: "Algorithmic Integrity", 
      d: "Every venture within our VOS is audited for structural logic leaks, financial fragility, and operational resonance. We build companies like clockwork: repeatable, predictable, and indestructible.",
      icon: <Binary size={50}/>,
      meta: "Theory_Node_03"
    },
    { 
      t: "Sovereign Distribution", 
      d: "We don't just scale; we occupy. Our ventures are engineered to control their primary value chains, reducing external dependencies on global gatekeepers.",
      icon: <Network size={50}/>,
      meta: "Theory_Node_04"
    }
  ];

  return (
    <div className="min-h-screen bg-[#FDF9F3] pt-80 px-12 pb-96 relative overflow-hidden">
       <JaliPattern />
       <div className="max-w-[1900px] mx-auto">
          <SectionHeading 
            badge="Institutional Philosophy v6.0"
            title="Venture <br /> Sovereignty."
            subtitle="A structural thesis on building generational institutions through neo-heritage structuralism and algorithmic execution integrity."
          />
          
          <div className="grid lg:grid-cols-2 gap-56 mt-40">
             <div className="space-y-48">
                {points.map((point, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2 }}
                    className="flex gap-16 group"
                  >
                     <div className="flex flex-col items-center">
                        <div className="w-32 h-32 bg-white rounded-[3rem] flex items-center justify-center text-[#D4AF37] shadow-luxury group-hover:bg-[#0F1419] group-hover:text-white transition-all duration-1000 shrink-0 border border-slate-100 group-hover:rotate-[15deg]">
                           {point.icon}
                        </div>
                        <div className="flex-1 w-[2px] bg-gradient-to-b from-[#D4AF37] to-transparent mt-10 h-32 opacity-20" />
                     </div>
                     <div>
                        <p className={THEME.typography.ui + " text-[#D4AF37] mb-6 opacity-40 group-hover:opacity-100 transition-opacity"}>{point.meta}</p>
                        <h3 className="text-[5.5rem] font-black italic uppercase tracking-tighter mb-10 group-hover:translate-x-4 transition-transform duration-700 leading-none">{point.t}</h3>
                        <p className="text-3xl text-slate-500 italic font-medium leading-relaxed max-w-4xl">{point.d}</p>
                     </div>
                  </motion.div>
                ))}
             </div>
             
             <div className="relative">
                <div className="sticky top-80 bg-[#0F1419] p-28 rounded-[9rem] text-white overflow-hidden shadow-7xl border border-[#D4AF37]/30">
                   <div className="absolute inset-0 opacity-10 rotate-45 scale-150"><Dna size={1000} className="animate-pulse" /></div>
                   <div className="absolute top-0 right-0 w-80 h-80 bg-[#D4AF37]/10 rounded-full blur-[100px]" />
                   
                   <div className="relative z-10">
                      <Sparkles size={60} className="text-[#D4AF37] mb-16 animate-pulse" />
                      <h3 className="text-7xl font-black italic uppercase mb-16 tracking-tighter">The Sovereign Oath</h3>
                      <blockquote className="text-4xl font-medium italic text-slate-300 leading-relaxed mb-24 border-l-8 border-[#D4AF37] pl-16 py-10 bg-white/5 rounded-r-[3rem]">
                        "We build not for the exit, but for the impact. We seek not the trend, but the truth. We engineering not for a cycle, but for a century. In the logic of sovereignty, we find the legacy of India."
                      </blockquote>
                      <div className="flex items-center gap-12 p-10 bg-white/5 rounded-[4rem] border border-white/5">
                         <div className="w-28 h-28 rounded-[2.5rem] border-4 border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] font-black italic text-4xl bg-[#0F1419] shadow-2xl">AP</div>
                         <div>
                            <p className="font-black italic text-4xl uppercase tracking-tighter text-white">Apurva Priyadarshi</p>
                            <p className={THEME.typography.ui + " text-[#D4AF37] mt-3 tracking-[0.6em]"}>Chief Architect / Udaaro Sovereign Grid</p>
                         </div>
                      </div>
                   </div>
                </div>
                
                {/* DECORATIVE CARD BELOW STICKY */}
                <motion.div 
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="mt-24 p-20 bg-white border border-slate-100 rounded-[5rem] shadow-luxury flex items-center gap-10"
                >
                   <div className="w-20 h-20 bg-[#FDF9F3] rounded-3xl flex items-center justify-center text-[#D4AF37]">
                      <Scale size={32} />
                   </div>
                   <div>
                      <p className="text-2xl font-black italic uppercase text-[#0F1419]">Theory_Validated_2026</p>
                      <p className="text-sm font-medium italic text-slate-400">Institutional proof of logic synchronized.</p>
                   </div>
                   <button className="ml-auto w-16 h-16 rounded-full bg-slate-50 flex items-center justify-center text-slate-300 hover:bg-[#0F1419] hover:text-[#D4AF37] transition-all"><ArrowUpRight size={24}/></button>
                </motion.div>
             </div>
          </div>
       </div>
    </div>
  );
};

/** * =============================================================================
 * X. MAIN INFRASTRUCTURE: ROUTING & SYSTEM WRAPPERS
 * =============================================================================
 */

const ProtectedRoute = ({ children }) => {
   const isAuthorized = true; // Simulated Auth Handshake
   if (!isAuthorized) return <Navigate to="/apply" replace />;
   return children;
};

const AppCore = () => {
  const isResonating = useResonance();
  const location = useLocation();

  if (!isResonating) return <SovereignLoader />;

  return (
    <div className="udaaro-sovereign-vos-grid bg-[#FDF9F3] min-h-screen selection:bg-[#D4AF37] selection:text-[#0F1419] overflow-x-hidden">
      <Navbar />

      <Suspense fallback={<SovereignLoader />}>
        <AnimatePresence mode="wait">
          <motion.main
            key={location.pathname}
            initial={{ opacity: 0, y: 30, filter: "blur(15px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -30, filter: "blur(15px)" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/identity" element={<IdentityLogic />} />
              <Route path="/syndicate" element={<Investors />} />
              <Route path="/advisory" element={
                <div className="pt-96 pb-64 px-12 text-center">
                   <SectionHeading 
                    badge="Advisory_Council_Node" 
                    title="Resonance <br /> Authority." 
                    subtitle="Industrial veterans shaping India's sovereign economy through structural logic oversight." 
                   />
                   <div className="w-32 h-32 bg-[#0F1419] rounded-[2.5rem] flex items-center justify-center text-[#D4AF37] mx-auto mt-20 animate-pulse border-4 border-[#D4AF37]/20 shadow-7xl">
                      <ShieldCheck size={60} />
                   </div>
                </div>
              } />
              <Route path="/intelligence" element={
                <ProtectedRoute>
                  <MasterControl />
                </ProtectedRoute>
              } />
              <Route path="/apply" element={
                <div className="min-h-screen flex items-center justify-center bg-[#0F1419] p-12">
                   <div className="text-center relative">
                      <div className="absolute inset-0 opacity-5 flex items-center justify-center pointer-events-none scale-150"><Crown size={1200} /></div>
                      <SectionHeading 
                        light 
                        badge="Handshake_Gate: Open" 
                        title="Vanguard <br /> Inception." 
                        subtitle="The Batch 2026 Founder Handshake Protocol is currently online. Decrypting the admission gate..." 
                      />
                      <motion.button 
                        whileHover={{ scale: 1.05 }} 
                        className="btn-imperial text-2xl px-32 py-16 mt-20"
                      >
                         Initialize_Application_Handshake
                      </motion.button>
                   </div>
                </div>
              } />
              <Route path="/privacy" element={
                 <div className="pt-96 pb-64 px-12 max-w-7xl mx-auto">
                    <SectionHeading badge="Grid_Governance" title="Data <br /> Sovereignty." subtitle="Your institutional intelligence is protected by AES-256 institutional encryption and private-ledger protocols." />
                    <div className="mt-40 space-y-20">
                       {[0, 1, 2, 3].map(i => (
                         <div key={i} className="h-24 bg-white border border-slate-100 rounded-[2rem] flex items-center px-12 gap-10">
                            <Lock size={20} className="text-[#D4AF37] opacity-30" />
                            <div className="flex-1 h-3 bg-slate-50 rounded-full overflow-hidden">
                               <div className="w-[80%] h-full bg-slate-100" />
                            </div>
                         </div>
                       ))}
                    </div>
                 </div>
              } />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </motion.main>
        </AnimatePresence>
      </Suspense>

      <SovereignAI />

      {/* GLOBAL TELEMETRY OVERLAY */}
      <div className="fixed bottom-12 left-12 z-[1000] hidden xl:block">
        <div className="px-10 py-5 bg-[#0F1419]/95 backdrop-blur-3xl border border-[#D4AF37]/30 rounded-[2rem] shadow-7xl flex items-center gap-12 group transition-all duration-700 hover:border-[#D4AF37] hover:px-14">
           <div className="flex items-center gap-5">
              <div className="relative">
                 <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                 <div className="absolute inset-0 w-3 h-3 rounded-full bg-emerald-500/50 animate-ping" />
              </div>
              <span className={THEME.typography.ui + " text-[#D4AF37] tracking-[0.5em] group-hover:tracking-[0.8em] transition-all"}>System_Resonance: Synchronized</span>
           </div>
           <div className="h-8 w-[1px] bg-white/10" />
           <div className="flex items-center gap-5">
              <History size={18} className="text-[#D4AF37]/40 group-hover:rotate-[-90deg] transition-transform duration-1000" />
              <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest italic">{UDAARO_CONFIG.node} // {UDAARO_CONFIG.version}</span>
           </div>
        </div>
      </div>

      {/* IMPERIAL FOOTER ARCHITECTURE */}
      <footer className="bg-[#0F1419] pt-[40rem] pb-24 px-16 border-t border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] flex items-center justify-center pointer-events-none">
           <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 100, ease: "linear" }}>
              <Network size={1500} />
           </motion.div>
        </div>
        
        <div className="max-w-[1900px] mx-auto relative z-10">
          <div className="grid lg:grid-cols-6 gap-48 mb-80">
            
            {/* BRAND NODE */}
            <div className="lg:col-span-2 space-y-16">
              <div className="flex items-center gap-10 group">
                 <div className="w-24 h-24 bg-[#D4AF37] text-[#0F1419] rounded-[2rem] flex items-center justify-center font-black italic text-5xl shadow-2xl group-hover:scale-110 transition-all duration-700">U</div>
                 <h3 className="text-8xl font-black text-white uppercase italic tracking-tighter leading-none group-hover:translate-x-4 transition-transform duration-700">Udaaro</h3>
              </div>
              <p className="text-slate-400 text-3xl font-medium italic leading-relaxed max-w-md opacity-60">The Sovereign Venture Operating System. Engineered for Indian innovation clusters and high-logic founders building generational legacy.</p>
              <div className="flex gap-10 pt-10">
                 {[Globe, Binary, Radio, Activity, Target, Shield].map((Icon, i) => (
                   <motion.div 
                    key={i} 
                    whileHover={{ scale: 1.2, rotate: 15 }}
                    className="w-18 h-18 rounded-2xl border border-white/10 flex items-center justify-center text-white/30 hover:text-[#D4AF37] hover:border-[#D4AF37] transition-all cursor-crosshair group bg-white/2"
                   >
                      <Icon size={24} className="group-hover:animate-pulse" />
                   </motion.div>
                 ))}
              </div>
            </div>
            
            {/* LINK NODES */}
            <div className="space-y-16">
               <h5 className={THEME.typography.ui + " text-[#D4AF37] tracking-[1em]"}>Ecosystem_Map</h5>
               <ul className="space-y-10 text-base font-black uppercase tracking-[0.5em] italic text-slate-500">
                  <li><Link to="/apply" className="hover:text-white transition-all hover:translate-x-3 inline-block">Vanguard_Intake</Link></li>
                  <li><Link to="/syndicate" className="hover:text-white transition-all hover:translate-x-3 inline-block">Syndicate_Portal</Link></li>
                  <li><Link to="/advisory" className="hover:text-white transition-all hover:translate-x-3 inline-block">Advisory_Resonance</Link></li>
                  <li><Link to="/identity" className="hover:text-white transition-all hover:translate-x-3 inline-block">Architectural_Theory</Link></li>
               </ul>
            </div>

            <div className="space-y-16">
               <h5 className={THEME.typography.ui + " text-[#D4AF37] tracking-[1em]"}>Governance_Log</h5>
               <ul className="space-y-10 text-base font-black uppercase tracking-[0.5em] italic text-slate-500">
                  <li><Link to="/privacy" className="hover:text-white transition-all hover:translate-x-3 inline-block">Data_Sovereignty</Link></li>
                  <li><Link to="/privacy" className="hover:text-white transition-all hover:translate-x-3 inline-block">Access_Charter</Link></li>
                  <li><Link to="/privacy" className="hover:text-white transition-all hover:translate-x-3 inline-block">Institutional_Ledger</Link></li>
                  <li><Link to="/privacy" className="hover:text-white transition-all hover:translate-x-3 inline-block">Privacy_Protocol</Link></li>
               </ul>
            </div>

            {/* LIVE TELEMETRY PANEL */}
            <div className="lg:col-span-2 space-y-16">
               <h5 className={THEME.typography.ui + " text-[#D4AF37] tracking-[1em]"}>Grid_Telemetry_Resync</h5>
               <div className="p-16 bg-white/5 border border-white/10 rounded-[4rem] backdrop-blur-3xl shadow-luxury group overflow-hidden relative">
                  <div className="absolute inset-0 bg-emerald-500/5 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-[2s]" />
                  <div className="flex justify-between items-center mb-10 relative z-10">
                    <span className={THEME.typography.ui + " text-slate-500"}>Grid_Sync_Integrity</span>
                    <span className="text-2xl font-black italic text-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.5)]">99.99%</span>
                  </div>
                  <div className="w-full h-3 bg-white/5 rounded-full overflow-hidden relative z-10">
                    <motion.div 
                      initial={{ width: 0 }} 
                      whileInView={{ width: "99.9%" }} 
                      transition={{ duration: 3, ease: "circOut" }} 
                      className="h-full bg-gradient-to-r from-[#D4AF37] via-[#F9D976] to-emerald-500" 
                    />
                  </div>
                  <div className="mt-12 flex items-center gap-6 text-emerald-500 relative z-10">
                     <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_#10b981]" />
                     <p className="text-[10px] font-black uppercase tracking-[0.5em] italic">All_Global_Vanguard_Nodes_Synchronized</p>
                  </div>
               </div>
               <div className="p-10 border border-white/5 rounded-[3rem] flex justify-between items-center">
                  <span className={THEME.typography.ui + " text-slate-600"}>Uptime_Log</span>
                  <span className="text-white font-black italic text-lg tracking-widest">365:24:60:00</span>
               </div>
            </div>
          </div>

          {/* FINAL INSTITUTIONAL FOOTER BAR */}
          <div className="pt-32 border-t border-white/5 flex flex-col xl:flex-row justify-between items-center gap-16 opacity-30">
             <div className="flex items-center gap-12">
                <span className="text-[11px] font-black uppercase tracking-[0.6em] italic">Architected by Apurva Priyadarshi © 2026</span>
                <div className="h-5 w-[2px] bg-white/20" />
                <span className="text-[11px] font-black uppercase tracking-[0.6em] italic text-[#D4AF37]">Batch 2026 / India Vanguard Cluster</span>
             </div>
             <div className="flex flex-wrap justify-center gap-14 text-[10px] font-black uppercase tracking-[0.8em] italic">
                <span className="flex items-center gap-3"><Lock size={12}/> Infrastructure: ENCRYPTED_STABLE</span>
                <span className="flex items-center gap-3"><Cpu size={12}/> OS_VER: {UDAARO_CONFIG.version}</span>
                <span className="flex items-center gap-3"><Binary size={12}/> Handshake: AES-256-GCM</span>
             </div>
          </div>
        </div>
        
        {/* CORNER DECORATION */}
        <div className="absolute bottom-[-10rem] right-[-10rem] w-[40rem] h-[40rem] bg-[#D4AF37]/5 rounded-full blur-[150px]" />
      </footer>
    </div>
  );
};

/** * =============================================================================
 * XI. STYLING PROTOCOLS (GLOBAL_IMPERIAL_DNA)
 * =============================================================================
 */

const styleInject = `
  @import url('https://fonts.googleapis.com/css2?family=Italiana&family=Inter:ital,wght@0,100..900;1,100..900&family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&display=swap');

  :root {
    --gold: #D4AF37;
    --gold-muted: #B59431;
    --slate: #0F1419;
    --sand: #FDF9F3;
    --emerald: #10B981;
  }

  * {
    box-sizing: border-box;
    cursor: default;
  }

  body {
    background-color: var(--sand);
    font-family: 'Inter', sans-serif;
    margin: 0;
    overflow-x: hidden;
    color: var(--slate);
    -webkit-font-smoothing: antialiased;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Italiana', serif;
    margin: 0;
  }

  a, button {
    cursor: pointer !important;
  }

  .font-mono {
    font-family: 'JetBrains Mono', monospace;
  }

  .custom-scrollbar::-webkit-scrollbar {
    width: 8px;
  }
  .custom-scrollbar::-webkit-scrollbar-track {
    background: rgba(0,0,0,0.02);
  }
  .custom-scrollbar::-webkit-scrollbar-thumb {
    background: var(--gold);
    border-radius: 100px;
    border: 3px solid var(--sand);
  }
  .custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background: var(--gold-muted);
  }

  .bg-jali-grid {
    background-image: radial-gradient(circle, var(--gold) 1px, transparent 1px);
    background-size: 60px 60px;
    opacity: 0.05;
  }

  .shadow-luxury {
    box-shadow: 0 60px 150px -40px rgba(15, 20, 25, 0.12);
  }

  .shadow-7xl {
    box-shadow: 0 120px 200px -60px rgba(0,0,0,0.4);
  }

  .animate-spin-slow {
    animation: spin-imperial 40s linear infinite;
  }

  @keyframes spin-imperial {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  .animate-gold-shine {
    background-size: 200% auto;
    animation: shine 6s linear infinite;
  }

  @keyframes shine {
    to { background-position: 200% center; }
  }

  .btn-imperial {
    background: var(--slate);
    color: white;
    border-radius: 5rem;
    text-transform: uppercase;
    font-weight: 900;
    font-style: italic;
    letter-spacing: 0.8em;
    transition: all 1s cubic-bezier(0.16, 1, 0.3, 1);
    box-shadow: 0 50px 100px -30px rgba(0,0,0,0.5);
    position: relative;
    overflow: hidden;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: none;
    cursor: pointer;
  }

  .btn-imperial::after {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(45deg, transparent, rgba(212, 175, 55, 0.2), transparent);
    transform: rotate(45deg);
    transition: all 1s ease;
    opacity: 0;
  }

  .btn-imperial:hover::after {
    opacity: 1;
    left: 100%;
  }

  .btn-imperial:hover {
    background: var(--gold);
    color: var(--slate);
    transform: scale(1.05) translateY(-10px);
    box-shadow: 0 70px 120px -30px rgba(212, 175, 55, 0.4);
  }

  ::selection {
    background: var(--gold);
    color: var(--slate);
  }

  /* RECHARTS CUSTOMIZATION */
  .recharts-cartesian-grid-horizontal line {
    stroke: rgba(148, 163, 184, 0.1);
  }
  .recharts-tooltip-cursor {
    stroke: var(--gold);
    stroke-width: 2;
  }
`;

// Inject Styles into Head for Single-File Portability
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement("style");
  styleSheet.innerText = styleInject;
  document.head.appendChild(styleSheet);
}

const App = () => (
  <Router>
    <AppCore />
  </Router>
);

export default App;

/**
 * =============================================================================
 * XII. END_OF_SYSTEM_INTEGRATION
 * AUTHENTICATED: ARCHITECT APURVA PRIYADARSHI
 * GRID_STATE: STABLE_RESONANCE
 * =============================================================================
 */