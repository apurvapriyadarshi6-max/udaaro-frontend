/**
 * ============================================================================================
 * UDAARO SOVEREIGN VENTURE OPERATING SYSTEM (VOS) - IMPERIAL EDITION v6.1.1
 * --------------------------------------------------------------------------------------------
 * DESIGN LANGUAGE: "NEO-HERITAGE IMPERIALISM"
 * LEAD ARCHITECT: APURVA PRIYADARSHI (BATCH 2026)
 * REVISION: ZERO_DRIFT_MAX_INTEGRITY_SHIELD
 * ============================================================================================
 * * TABLE OF CONTENTS:
 * I.    SYSTEM CONFIGURATION & THEME CONSTANTS
 * II.   RESILIENCE WRAPPERS (HYDRATION GATES)
 * III.  UTILITY GRID (CURRENCY, MATH, FORMATTING)
 * IV.   SOVEREIGN NEURAL AI CORE
 * V.    REUSABLE IMPERIAL UI PRIMITIVES
 * VI.   DATA VISUALIZATION NODES
 * VII.  IDENTITY CLUSTER (USER PROFILE)
 * VIII. SYNDICATE CLUSTER (INVESTOR PORTAL)
 * IX.   ADVISORY CLUSTER (CONSULTANCY)
 * X.    INTELLIGENCE CLUSTER (MASTER CONTROL MCP)
 * XI.   VANGUARD SECTOR NODES (ENERGY, BANKING, HEALTH)
 * XII.  ROUTING INFRASTRUCTURE
 * XIII. GLOBAL STYLING PROTOCOLS
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
  ShieldQuestion, Gavel, Scale, Boxes, Coins, Brain, Languages, PenTool, Code2
} from "lucide-react";
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart as RePie, Pie, Cell, LineChart, Line, BarChart, Bar, Legend
} from "recharts";
import ReactMarkdown from 'react-markdown';

/** * =============================================================================
 * I. SYSTEM CONFIGURATION
 * ============================================================================= 
 */

const UDAARO_CONFIG = {
  version: "6.1.1-Imperial",
  founder: "Apurva Priyadarshi",
  batch: "2026",
  node: "INDIA_VANGUARD_01",
  apiBase: "https://udaaro-backend.onrender.com",
  handshakeDelay: 1500,
  neuralModel: "Sovereign-LLM-v6-Turbo",
  encryption: "AES-256-GCM-INSTITUTIONAL"
};

const THEME = {
  colors: {
    sandstone: "#FDF9F3",
    royalSlate: "#0F1419",
    goldLeaf: "#D4AF37",
    goldMuted: "#B59431",
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

/**
 * =============================================================================
 * II. RESILIENCE WRAPPERS (ZERO-DRIFT)
 * =============================================================================
 */

const useResonance = () => {
  const [isResonating, setIsResonating] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setIsResonating(true), 200);
    return () => clearTimeout(timer);
  }, []);
  return isResonating;
};

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

/**
 * =============================================================================
 * III. UTILITY GRID
 * =============================================================================
 */

const UDAARO_UTILS = {
  formatINR: (val) => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(val),
  generateID: () => `NODE_${Math.random().toString(36).substr(2, 9).toUpperCase()}`,
  calculateGrowth: (oldVal, newVal) => (((newVal - oldVal) / oldVal) * 100).toFixed(2)
};

/**
 * =============================================================================
 * IV. SOVEREIGN NEURAL AI CORE
 * =============================================================================
 */

const aiReducer = (state, action) => {
  switch (action.type) {
    case 'SET_THINKING': return { ...state, isThinking: action.payload };
    case 'ADD_MESSAGE': return { ...state, messages: [...state.messages, action.payload] };
    case 'TOGGLE': return { ...state, isOpen: !state.isOpen };
    case 'CLEAR': return { ...state, messages: [] };
    default: return state;
  }
};

const SovereignAI = () => {
  const [state, dispatch] = useReducer(aiReducer, {
    messages: [{ role: "ai", content: "Imperial Neural Node Active. Architect recognized." }],
    isThinking: false,
    isOpen: false
  });
  const [input, setInput] = useState("");
  const scrollRef = useRef(null);

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
      dispatch({ type: 'ADD_MESSAGE', payload: { role: "ai", content: "CRITICAL: Node_Offline." } });
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
            className="w-[min(600px,95vw)] h-[80vh] bg-white border border-[#D4AF37]/30 rounded-[5rem] shadow-7xl flex flex-col overflow-hidden backdrop-blur-3xl"
          >
            <div className="p-14 bg-[#0F1419] text-[#D4AF37] flex justify-between items-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-10 rotate-12 scale-150"><CircuitBoard size={600} /></div>
              <h4 className="text-4xl font-black italic tracking-tighter uppercase relative z-10">Sovereign_AI</h4>
              <button onClick={() => dispatch({ type: 'TOGGLE' })} className="w-14 h-14 rounded-full border border-[#D4AF37]/20 flex items-center justify-center hover:bg-white/10 relative z-10"><X size={28} /></button>
            </div>
            <div className="flex-1 p-12 overflow-y-auto space-y-12 bg-[#FDF9F3]/60 custom-scrollbar" ref={scrollRef}>
              {state.messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] p-10 rounded-[3.5rem] shadow-sm italic text-lg font-medium leading-relaxed ${m.role === 'user' ? 'bg-[#0F1419] text-white rounded-tr-none' : 'bg-white border-2 border-slate-100 text-slate-800 rounded-tl-none shadow-luxury'}`}>
                    <ReactMarkdown>{m.content}</ReactMarkdown>
                  </div>
                </div>
              ))}
              {state.isThinking && <div className="flex items-center gap-4 text-[#D4AF37] animate-pulse font-mono text-[10px] uppercase tracking-widest px-6">Architect_Thinking...</div>}
            </div>
            <form onSubmit={handleLogicQuery} className="p-12 border-t border-slate-100 bg-white flex gap-6">
              <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Inject logic..." className="flex-1 bg-slate-50 rounded-[3rem] px-10 py-7 text-sm italic font-bold outline-none" />
              <button className="w-20 h-20 bg-[#0F1419] text-[#D4AF37] rounded-3xl flex items-center justify-center"><Send size={28} /></button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} onClick={() => dispatch({ type: 'TOGGLE' })} className="w-32 h-32 bg-[#0F1419] border-8 border-[#D4AF37] rounded-full flex items-center justify-center text-[#D4AF37] shadow-luxury relative group">
        <Bot size={48} />
      </motion.button>
    </div>
  );
};

/**
 * =============================================================================
 * V. REUSABLE IMPERIAL UI PRIMITIVES
 * =============================================================================
 */

const SectionHeader = ({ badge, title, subtitle, light = false }) => (
  <div className={`mb-32 space-y-8 ${light ? 'text-white' : 'text-[#0F1419]'}`}>
    <div className="inline-flex items-center gap-4 px-8 py-3 bg-[#0F1419] text-[#D4AF37] rounded-full">
      <div className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
      <span className={THEME.typography.ui}>{badge}</span>
    </div>
    <h2 className="text-8xl md:text-9xl font-black italic uppercase tracking-tighter leading-none" dangerouslySetInnerHTML={{ __html: title }} />
    <p className={`text-3xl font-medium italic max-w-4xl ${light ? 'text-slate-400' : 'text-slate-500'}`}>{subtitle}</p>
  </div>
);

const StatModule = ({ label, val, icon, trend, color = "text-[#0F1419]" }) => {
  const [safeTrend, setSafeTrend] = useState(null);
  useEffect(() => { setSafeTrend(trend); }, [trend]);

  return (
    <motion.div whileHover={{ y: -20 }} className="p-16 bg-white rounded-[5.5rem] border border-slate-100 shadow-luxury relative overflow-hidden group">
      <div className="absolute -right-4 -top-4 p-16 opacity-[0.03] text-[#D4AF37]">{icon}</div>
      <div className="flex items-center gap-6 mb-12 relative z-10">
        <div className="w-16 h-16 bg-[#FDF9F3] border border-[#D4AF37]/20 rounded-2xl flex items-center justify-center text-[#D4AF37]">{icon}</div>
        <p className={THEME.typography.ui + " text-[#D4AF37] tracking-[0.3em]"}>{label}</p>
      </div>
      <div className="flex items-end justify-between relative z-10">
        <h3 className={`text-8xl font-black italic tracking-tighter leading-none ${color}`}>{val}</h3>
        {safeTrend && (
           <div className="px-5 py-2 bg-emerald-50 rounded-full flex items-center gap-2 border border-emerald-100">
              <TrendingUp size={12} className="text-emerald-500" />
              <span className="text-[10px] font-black text-emerald-600 font-mono">{safeTrend}</span>
           </div>
        )}
      </div>
    </motion.div>
  );
};

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

/**
 * =============================================================================
 * VI. DATA VISUALIZATION NODES
 * =============================================================================
 */

const ImperialChart = ({ data }) => (
  <div className="bg-white p-20 rounded-[6rem] shadow-2xl border border-slate-100 h-[650px] relative overflow-hidden group">
    <div className="absolute top-0 right-0 p-20 opacity-[0.01]"><Activity size={600} /></div>
    <div className="h-full w-full relative z-10">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <defs>
            <linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#D4AF37" stopOpacity={0.5}/>
              <stop offset="95%" stopColor="#D4AF37" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#eee" />
          <XAxis dataKey="time" hide />
          <YAxis hide />
          <Tooltip 
            contentStyle={{ borderRadius: '2rem', border: 'none', boxShadow: '0 20px 50px rgba(0,0,0,0.1)' }} 
            itemStyle={{ fontWeight: 900, textTransform: 'uppercase', fontSize: '10px' }}
          />
          <Area type="monotone" dataKey="res" stroke="#D4AF37" strokeWidth={10} fill="url(#g)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  </div>
);

/**
 * =============================================================================
 * VII. PAGE: IDENTITY CLUSTER (PROFILE)
 * =============================================================================
 */

const Identity = () => (
  <div className="pt-80 pb-40 px-16 max-w-[1900px] mx-auto space-y-40">
    <SectionHeader 
      badge="Node Identity" 
      title="Architect <br /> Profile." 
      subtitle="Administrative and biometric identification within the Sovereign Grid."
    />
    <div className="grid lg:grid-cols-2 gap-20">
      <div className="space-y-12">
        <div className="p-20 bg-white rounded-[5rem] shadow-luxury border-t-8 border-[#D4AF37]">
          <div className="flex items-center gap-12 mb-16">
            <div className="w-40 h-40 bg-[#0F1419] rounded-full flex items-center justify-center text-[#D4AF37]"><Fingerprint size={80} /></div>
            <div>
              <h3 className="text-6xl font-black italic uppercase tracking-tighter">Kunal Pandey</h3>
              <p className={THEME.typography.ui}>Master Architect | Batch 2026</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-10">
            <div className="p-8 bg-[#FDF9F3] rounded-3xl">
              <p className={THEME.typography.ui}>Skill_Matrix</p>
              <h4 className="text-2xl font-bold italic">MERN_SOVEREIGN</h4>
            </div>
            <div className="p-8 bg-[#FDF9F3] rounded-3xl">
              <p className={THEME.typography.ui}>Clearance</p>
              <h4 className="text-2xl font-bold italic text-emerald-600">LEVEL_V_IMPERIAL</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="p-20 bg-[#0F1419] rounded-[5rem] text-white">
        <h4 className={THEME.typography.ui + " text-[#D4AF37] mb-12"}>Biometric_Data_Log</h4>
        <div className="space-y-8 font-mono text-sm opacity-60">
          <p>[SESSION_START]: {new Date().toISOString()}</p>
          <p>[ENCRYPTION]: {UDAARO_CONFIG.encryption}</p>
          <p>[GEOLOCATION]: INDIA_VANGUARD_01</p>
          <p>[STATUS]: IDENTITY_VERIFIED</p>
        </div>
      </div>
    </div>
  </div>
);

/**
 * =============================================================================
 * VIII. PAGE: MASTER CONTROL MCP (INTELLIGENCE)
 * =============================================================================
 */

const MasterControl = () => {
  const [activeTab, setActiveTab] = useState("intelligence");
  const [safeChartData, setSafeChartData] = useState([]);

  useEffect(() => {
    const data = Array.from({ length: 24 }, (_, i) => ({
      time: `${i}:00`,
      res: 4000 + Math.random() * 2000,
      vel: 2000 + Math.random() * 5000
    }));
    setSafeChartData(data);
  }, []);

  return (
    <div className="h-screen w-full bg-[#FDF9F3] flex overflow-hidden select-none">
      <aside className="w-[450px] bg-[#0F1419] flex flex-col p-16 relative z-50 border-r-8 border-[#D4AF37]/10">
        <div className="mb-32">
           <Link to="/" className="flex items-center gap-8">
              <div className="w-18 h-18 bg-[#D4AF37] rounded-3xl flex items-center justify-center text-[#0F1419] font-black italic text-4xl">U</div>
              <h1 className="text-4xl font-black text-white italic uppercase tracking-tighter">GRID_MCP</h1>
           </Link>
        </div>
        <nav className="flex-1 space-y-6">
           {["Intelligence", "Founder_Nodes", "Capital_Flow", "Infrastructure"].map(n => (
             <button 
              key={n} 
              onClick={() => setActiveTab(n.toLowerCase())} 
              className={`w-full flex items-center gap-10 px-10 py-7 rounded-[2.5rem] transition-all font-mono text-xs uppercase tracking-widest ${activeTab === n.toLowerCase() ? 'bg-white/10 text-[#D4AF37]' : 'text-slate-500 hover:bg-white/5 hover:text-white'}`}
             >
              {n}
             </button>
           ))}
        </nav>
        <div className="mt-auto pt-16 border-t border-white/5">
           <div className="p-10 bg-white/5 rounded-[3rem] border border-white/5">
              <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                 <motion.div animate={{ width: "98.4%" }} className="h-full bg-emerald-500" />
              </div>
              <p className="text-[10px] font-black text-emerald-500 mt-4 tracking-[0.4em]">98.4%_HEALTHY_GRID</p>
           </div>
        </div>
      </aside>

      <main className="flex-1 flex flex-col h-screen overflow-y-auto pb-32 custom-scrollbar">
         <header className="p-16 sticky top-0 z-40 bg-[#FDF9F3]/90 backdrop-blur-3xl border-b border-[#D4AF37]/15 flex justify-between items-center px-24">
            <h1 className="text-6xl font-black italic tracking-tighter uppercase">{activeTab}_Protocol</h1>
            <div className="w-20 h-20 bg-[#0F1419] rounded-[2rem] flex items-center justify-center text-[#D4AF37] shadow-7xl"><Fingerprint size={36} /></div>
         </header>

         <div className="p-20 max-w-[2000px] mx-auto w-full space-y-20">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
               <StatModule label="Grid_Resonance" val="99.8%" icon={<Target size={24}/>} trend="+0.4%" />
               <StatModule label="Handshake_Speed" val="12ms" icon={<Zap size={24}/>} trend="STABLE" color="text-[#D4AF37]" />
               <StatModule label="Admission_Rate" val="Elite" icon={<UserCheck size={24}/>} color="text-blue-500" />
               <StatModule label="Node_Integrity" val="Verified" icon={<ShieldCheck size={24}/>} color="text-emerald-500" />
            </div>
            <ImperialChart data={safeChartData} />
         </div>
      </main>
    </div>
  );
};

/**
 * =============================================================================
 * IX. PAGE: HOME LOGIC
 * =============================================================================
 */

const Home = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -300]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div className="relative">
      <JaliPattern />
      <section className="relative min-h-[110vh] flex flex-col items-center justify-center text-center px-12 overflow-hidden bg-[#FDF9F3]">
        <motion.div style={{ opacity, y }} className="relative z-10 max-w-[1600px]">
          <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="mb-20 inline-flex items-center gap-8 px-12 py-4 bg-white border border-[#D4AF37]/30 rounded-full shadow-luxury">
            <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_15px_#10b981]" />
            <span className={THEME.typography.ui}>Batch 2026 Sovereign Grid Infrastructure Online</span>
          </motion.div>
          <h1 className="text-[10rem] md:text-[18rem] font-black italic uppercase tracking-tighter leading-[0.7] mb-20">Structural <br /><span className="text-transparent bg-clip-text bg-gradient-to-br from-[#0F1419] via-[#D4AF37] to-[#0F1419]">Imperialism.</span></h1>
          <p className="max-w-[1200px] mx-auto text-3xl md:text-6xl text-slate-500 font-medium italic leading-tight mb-32">selective <span className="text-[#0F1419] font-black decoration-[#D4AF37] decoration-[15px] underline underline-offset-[15px]">Venture Operating System</span> for legacy builders.</p>
          <div className="flex flex-wrap justify-center gap-12">
            <Link to="/apply" className="px-24 py-12 bg-[#0F1419] text-white rounded-[3.5rem] font-black uppercase tracking-[0.6em] text-sm shadow-7xl shadow-black/30 italic">Access The Gate</Link>
            <Link to="/intelligence" className="px-24 py-12 bg-white border-2 border-[#0F1419]/10 text-[#0F1419] rounded-[3.5rem] font-black uppercase tracking-[0.6em] text-sm shadow-sm italic">Protocol v6.1</Link>
          </div>
        </motion.div>
      </section>

      <section className="py-80 bg-white px-12 relative overflow-hidden">
        <div className="max-w-[1700px] mx-auto text-center">
           <SectionHeader badge="Ecosystem clusters" title="Vanguard <br /> Clusters." subtitle="specializing in six core institutional sectors critical to sovereignty." />
           <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mt-40">
             {[
               { i: <Landmark size={40}/>, t: "Neo-Banking", d: "Hard-logic institutional finance and deep-payment infrastructure." },
               { i: <Zap size={40}/>, t: "Energy Grid", d: "Sovereign power solutions and decentralized energy orchestration." },
               { i: <Microscope size={40}/>, t: "Deep-Health", d: "Algorithmic longevity and precision medical infrastructure." },
               { i: <Cpu size={40}/>, t: "Silicon State", d: "Neural hardware and localized computation sovereignty." },
               { i: <Shield size={40}/>, t: "Cyber Guard", d: "High-level defensive protocols for digital assets." },
               { i: <Box size={40}/>, t: "Logic Logistics", d: "Supply chain orchestration via algorithmic foresight." }
             ].map((s, i) => (
               <div key={i} className="p-20 bg-white border border-slate-100 rounded-[5rem] shadow-xl hover:border-[#D4AF37] transition-all group cursor-pointer">
                  <div className="w-20 h-20 bg-[#FDF9F3] border border-[#D4AF37]/30 rounded-2xl flex items-center justify-center text-[#D4AF37] mb-12 mx-auto group-hover:bg-[#0F1419] transition-all">{s.i}</div>
                  <h4 className="text-4xl font-black italic uppercase mb-6 tracking-tighter">{s.t}</h4>
                  <p className="text-xl text-slate-500 font-medium italic">{s.d}</p>
               </div>
             ))}
           </div>
        </div>
      </section>
    </div>
  );
};

/**
 * =============================================================================
 * X. NAVIGATION INFRASTRUCTURE (NAVBAR)
 * =============================================================================
 */

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-[999] transition-all duration-1000 ${isScrolled ? 'py-6' : 'py-12'}`}>
      <div className="max-w-[1900px] mx-auto px-16">
        <div className={`flex justify-between items-center px-12 py-7 rounded-[4rem] transition-all duration-1000 ${isScrolled ? 'bg-white/90 backdrop-blur-3xl shadow-luxury border border-[#D4AF37]/20' : 'bg-transparent'}`}>
          <Link to="/" className="flex items-center gap-8 group">
            <div className="w-16 h-16 bg-[#0F1419] text-[#D4AF37] rounded-[1.5rem] flex items-center justify-center font-black italic text-4xl shadow-7xl">U</div>
            <span className="text-4xl font-black italic tracking-tighter uppercase text-[#0F1419]">Udaaro</span>
          </Link>
          <div className="hidden 2xl:flex items-center gap-20">
            {["Identity", "Intelligence"].map(node => (
              <Link key={node} to={`/${node.toLowerCase()}`} className={THEME.typography.ui + " hover:text-[#D4AF37] transition-all"}>{node}</Link>
            ))}
            <Link to="/apply" className="px-14 py-5 bg-[#0F1419] text-white rounded-full text-[10px] font-black uppercase tracking-[0.5em] italic hover:bg-[#D4AF37] transition-all">Admission</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

/**
 * =============================================================================
 * XI. THE RESILIENCE WRAPPER (SYSTEM CORE)
 * =============================================================================
 */

const AppCore = () => {
  const isResonating = useResonance();
  const location = useLocation();

  if (!isResonating) return <SovereignLoader />;

  return (
    <div className="udaaro-application bg-[#FDF9F3] min-h-screen selection:bg-[#D4AF37] selection:text-[#0F1419] overflow-x-hidden">
      <Navbar />
      <Suspense fallback={<SovereignLoader />}>
        <AnimatePresence mode="wait" initial={false}>
          <motion.main
            key={location.pathname}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/identity" element={<Identity />} />
              <Route path="/intelligence" element={<MasterControl />} />
              <Route path="/apply" element={<div className="h-screen flex items-center justify-center bg-[#0F1419] text-white font-black italic uppercase tracking-[1em]">GATE_ACTIVE</div>} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </motion.main>
        </AnimatePresence>
      </Suspense>
      <SovereignAI />
      <footer className="bg-[#0F1419] pt-80 pb-32 px-16 border-t-8 border-[#D4AF37]/10 relative overflow-hidden">
        <div className="max-w-[1900px] mx-auto relative z-10">
          <div className="grid lg:grid-cols-4 gap-24 mb-40">
            <div className="lg:col-span-2 space-y-12">
               <div className="flex items-center gap-10 group">
                  <div className="w-16 h-16 bg-[#D4AF37] text-[#0F1419] rounded-2xl flex items-center justify-center font-black italic text-3xl">U</div>
                  <h3 className="text-6xl font-black text-white uppercase italic tracking-tighter">Udaaro</h3>
               </div>
               <p className="text-slate-400 text-xl font-medium italic leading-relaxed max-w-md opacity-60">The Sovereign Venture Operating System. Engineered for Indian innovation clusters. Architected by Apurva Priyadarshi © 2026</p>
            </div>
            <div className="space-y-8">
               <h5 className={THEME.typography.ui + " text-[#D4AF37]"}>Venture_Ecosystem</h5>
               <ul className="space-y-4 text-sm font-black uppercase tracking-[0.5em] italic text-slate-500">
                  <li><Link to="/apply" className="hover:text-white transition-all">Vanguard_Intake</Link></li>
                  <li><Link to="/intelligence" className="hover:text-white transition-all">Control_Grid</Link></li>
                  <li><Link to="/identity" className="hover:text-white transition-all">Architect_ID</Link></li>
               </ul>
            </div>
          </div>
          <div className="pt-20 border-t border-white/5 flex flex-col xl:flex-row justify-between items-center gap-8 opacity-30 text-[10px] font-black uppercase tracking-[0.6em] italic text-white">
            <span>OS_VER: {UDAARO_CONFIG.version} / SHIELD: ACTIVE</span>
            <span>NODE_HANDSHAKE: OK_STABLE</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

/**
 * =============================================================================
 * XII. STYLING PROTOCOLS
 * =============================================================================
 */

const styleInject = `
  @import url('https://fonts.googleapis.com/css2?family=Italiana&family=Inter:ital,wght@0,100..900;1,100..900&family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&display=swap');
  :root { --gold: #D4AF37; --slate: #0F1419; --sand: #FDF9F3; }
  body { background-color: var(--sand); font-family: 'Inter', sans-serif; margin: 0; overflow-x: hidden; color: var(--slate); -webkit-font-smoothing: antialiased; }
  h1, h2, h3, h4, h5, h6 { font-family: 'Italiana', serif; margin: 0; }
  .custom-scrollbar::-webkit-scrollbar { width: 10px; }
  .custom-scrollbar::-webkit-scrollbar-thumb { background: var(--gold); border-radius: 100px; border: 3px solid var(--sand); }
  .shadow-luxury { box-shadow: 0 60px 150px -40px rgba(15, 20, 25, 0.12); }
  .shadow-7xl { box-shadow: 0 120px 200px -60px rgba(0,0,0,0.4); }
  ::selection { background: var(--gold); color: white; }
`;

if (typeof document !== 'undefined') {
  const s = document.createElement("style");
  s.innerText = styleInject;
  document.head.appendChild(s);
}

/**
 * =============================================================================
 * XIII. SYSTEM BOOT
 * =============================================================================
 */

const App = () => (
  <Router>
    <AppCore />
  </Router>
);

export default App;

/**
 * =============================================================================
 * END_OF_SYSTEM_INTEGRATION
 * AUTHENTICATED: ARCHITECT APURVA PRIYADARSHI
 * GRID_STATE: STABLE_RESONANCE_v6.1.1
 * =============================================================================
 */