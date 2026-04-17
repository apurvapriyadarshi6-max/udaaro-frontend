import React, { useState, useEffect, useReducer, useRef, useMemo, useCallback, createContext, useContext } from "react";
import { Link, BrowserRouter } from "react-router-dom";
import { motion, AnimatePresence, useScroll, useTransform, useSpring, useVelocity, useAcceleration } from "framer-motion";
import { 
  Shield, Zap, Cpu, Crown, Fingerprint, Box, ArrowUpRight, MessageSquare, X, Send, 
  Landmark, Binary, Network, ChevronRight, Globe, Lock, Info, ScrollText, Users, 
  Activity, BarChart3, Terminal, Database, HardDrive, Compass, Layers, Target, 
  Workflow, SearchCheck, Gem, PieChart, UserCheck, Briefcase, Lightbulb, Radio,
  Key, Eye, Share2, ClipboardCheck, Award, Sparkles, Command, CircuitBoard
} from "lucide-react";

/**
 * ============================================================================================
 * UDAARO SOVEREIGN VENTURE OPERATING SYSTEM (VOS) - ROYAL EDITION
 * --------------------------------------------------------------------------------------------
 * DESIGN LANGUAGE: "NEO-HERITAGE IMPERIALISM" 
 * LEAD ARCHITECT: APURVA PRIYADARSHI (BATCH 2026)
 * ============================================================================================
 */

// --- I. IMPERIAL DESIGN CONSTANTS ---
const IMPERIAL_THEME = {
  colors: {
    sandstone: "#FDF9F3",    // The base of Indian palaces
    royalSlate: "#0F1419",   // Modern institutional power
    goldLeaf: "#D4AF37",     // Sovereign success
    imperialBlue: "#1A365D", // Global expansion
    marble: "#FFFFFF",       // Purity of execution
  },
  typography: {
    heading: "font-serif tracking-tighter italic",
    ui: "font-mono uppercase tracking-[0.4em] text-[10px] font-black"
  }
};

// --- II. ADVANCED NEURAL AI CORE ---
const chatReducer = (state, action) => {
  switch (action.type) {
    case 'SEND': return { ...state, messages: [...state.messages, action.payload], isThinking: true };
    case 'REPLY': return { ...state, messages: [...state.messages, action.payload], isThinking: false };
    default: return state;
  }
};

const SovereignAI = () => {
  const [state, dispatch] = useReducer(chatReducer, { 
    messages: [{ text: "Sovereign Intel v4.0 Online. Awaiting command.", role: "system" }],
    isThinking: false 
  });
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleCommand = (e) => {
    e.preventDefault();
    if (!input) return;
    dispatch({ type: 'SEND', payload: { text: input, role: "user" } });
    setInput("");
    setTimeout(() => {
      dispatch({ type: 'REPLY', payload: { text: "Protocol synchronized. Logic framework applied to Batch 2026.", role: "ai" } });
    }, 1200);
  };

  return (
    <div className="fixed bottom-12 right-12 z-[9999]">
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 50, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            className="w-[420px] h-[650px] bg-white border border-[#D4AF37]/30 rounded-[3rem] shadow-2xl flex flex-col overflow-hidden backdrop-blur-3xl"
          >
            <div className="p-10 bg-[#0F1419] text-[#D4AF37] flex justify-between items-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-10"><CircuitBoard size={200} /></div>
              <div className="relative z-10">
                <p className={IMPERIAL_THEME.typography.ui}>Neural Node</p>
                <h4 className="text-2xl font-black italic">Sovereign_AI</h4>
              </div>
              <motion.button whileHover={{ rotate: 90 }} onClick={() => setIsOpen(false)} className="relative z-10"><X /></motion.button>
            </div>
            
            <div className="flex-1 p-10 overflow-y-auto space-y-8 bg-[#FDF9F3]/50">
              {state.messages.map((m, i) => (
                <motion.div initial={{ opacity: 0, x: m.role === 'user' ? 20 : -20 }} animate={{ opacity: 1, x: 0 }} key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] p-6 rounded-[2rem] text-sm font-medium italic ${m.role === 'user' ? 'bg-[#0F1419] text-white' : 'bg-white border-2 border-slate-100 text-slate-700 shadow-sm'}`}>
                    {m.text}
                  </div>
                </motion.div>
              ))}
              {state.isThinking && <div className="text-[10px] animate-pulse font-black text-[#D4AF37]">SYSTEM_THINKING...</div>}
            </div>

            <form onSubmit={handleCommand} className="p-8 border-t border-[#D4AF37]/10 bg-white flex gap-4">
              <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Enter system query..." className="flex-1 bg-slate-50 rounded-2xl px-6 py-4 text-xs italic outline-none focus:ring-1 ring-[#D4AF37]" />
              <button className="w-14 h-14 bg-[#0F1419] text-[#D4AF37] rounded-2xl flex items-center justify-center hover:bg-[#D4AF37] hover:text-white transition-all"><Send size={18} /></button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.button 
        whileHover={{ scale: 1.1, rotate: 5 }} 
        onClick={() => setIsOpen(!isOpen)} 
        className="w-24 h-24 bg-[#0F1419] border-2 border-[#D4AF37] rounded-full flex items-center justify-center text-[#D4AF37] shadow-2xl relative group"
      >
        <div className="absolute inset-0 bg-[#D4AF37]/20 rounded-full animate-ping group-hover:hidden" />
        <MessageSquare size={32} />
      </motion.button>
    </div>
  );
};

// --- III. LUXURY UI COMPONENTS (ATOMS) ---
const ImperialBadge = ({ text }) => (
  <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} className="flex items-center gap-6 mb-12">
    <div className="h-[2px] w-16 bg-gradient-to-r from-[#D4AF37] to-transparent" />
    <span className={IMPERIAL_THEME.typography.ui}>{text}</span>
  </motion.div>
);

const RoyalCard = ({ title, icon, desc, delay = 0 }) => (
  <motion.div 
    initial={{ opacity: 0, y: 50 }} 
    whileInView={{ opacity: 1, y: 0 }} 
    transition={{ delay, duration: 0.8 }}
    whileHover={{ y: -20, borderColor: "#D4AF37" }}
    className="p-16 bg-white border border-slate-100 rounded-[5rem] shadow-xl transition-all group overflow-hidden relative h-full"
  >
    <div className="absolute top-0 right-0 p-12 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">{icon}</div>
    <div className="w-20 h-20 bg-[#0F1419] text-[#D4AF37] rounded-[2.2rem] flex items-center justify-center mb-12 group-hover:rotate-12 transition-transform shadow-lg">
      {React.cloneElement(icon, { size: 36 })}
    </div>
    <h3 className="text-4xl font-black italic tracking-tighter mb-8 group-hover:text-[#D4AF37] transition-colors">{title}</h3>
    <p className="text-xl text-slate-500 font-medium italic leading-relaxed">{desc}</p>
  </motion.div>
);

// --- IV. MAIN ARCHITECTURE: UDAARO SOVEREIGN ---
export default function UdaaroApp() {
  const { scrollYProgress } = useScroll();
  const smoothY = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const heroScale = useTransform(smoothY, [0, 0.2], [1, 0.9]);

  return (
    <div className="bg-[#FDF9F3] text-[#0F1419] selection:bg-[#D4AF37] selection:text-white font-serif overflow-x-hidden relative">
      
      {/* 1. IMPERIAL OVERLAY (JALI PATTERN) */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.02] z-0">
        <svg width="100%" height="100%">
          <pattern id="jali" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
            <path d="M60 0 L120 60 L60 120 L0 60 Z" fill="none" stroke="currentColor" strokeWidth="1" />
            <circle cx="60" cy="60" r="15" fill="none" stroke="currentColor" strokeWidth="1" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#jali)" />
        </svg>
      </div>

      {/* 2. THE GRAND NAVIGATION PORTICO */}
      <nav className="fixed top-0 left-0 w-full z-[1000] p-10 lg:px-20 pointer-events-none flex justify-between items-center">
        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} className="flex items-center gap-6 bg-white/40 backdrop-blur-3xl border border-white/50 p-5 rounded-[2.5rem] pointer-events-auto shadow-sm">
          <div className="w-14 h-14 bg-[#0F1419] text-[#D4AF37] rounded-2xl flex items-center justify-center font-black italic text-3xl shadow-xl">U</div>
          <div className="flex flex-col">
            <span className="text-3xl font-black uppercase tracking-tighter italic leading-none">Udaaro</span>
            <span className="text-[9px] font-black uppercase tracking-[0.5em] text-[#D4AF37] mt-1 italic">Sovereign_OS</span>
          </div>
        </motion.div>

        <div className="hidden xl:flex items-center gap-16 bg-white/40 backdrop-blur-3xl border border-white/50 px-16 py-6 rounded-full pointer-events-auto shadow-sm">
          {["Identity", "Syndicate", "Advisory", "Registry"].map(item => (
            <Link key={item} to={`/${item.toLowerCase()}`} className="text-[10px] font-black uppercase tracking-[0.5em] hover:text-[#D4AF37] transition-all italic relative group">
              {item}
              <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-[#D4AF37] scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </Link>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} className="pointer-events-auto">
          <Link to="/apply" className="px-14 py-6 bg-[#0F1419] text-white rounded-[1.8rem] text-[10px] font-black uppercase tracking-[0.5em] hover:bg-[#D4AF37] transition-all shadow-2xl italic">Admission_Desk</Link>
        </motion.div>
      </nav>

      {/* 3. HERO: THE ROYAL INITIALIZATION */}
      <motion.header style={{ scale: heroScale }} className="relative min-h-screen flex items-center justify-center pt-48 px-10 text-center overflow-hidden">
        <div className="max-w-[1500px] w-full relative z-10">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2 }}>
            <ImperialBadge text="Batch 2026 • Sovereign Venture Operating System" />
            <h1 className="text-7xl md:text-[14rem] font-black uppercase italic tracking-tighter leading-[0.8] mb-16 drop-shadow-sm">
              Architecting <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0F1419] via-[#D4AF37] to-[#0F1419]">Sovereignty.</span>
            </h1>
            <p className="max-w-4xl mx-auto text-xl md:text-4xl text-slate-500 font-medium leading-relaxed mb-24 italic opacity-90">
              Udaaro is an institutional <span className="text-[#0F1419] font-black underline decoration-[#D4AF37] decoration-[12px] underline-offset-[12px]">Execution Skeleton</span> for elite founders building generational success.
            </p>
            <div className="flex flex-wrap justify-center gap-10">
              <Link to="/apply" className="px-20 py-10 bg-[#0F1419] text-white rounded-[2.5rem] font-black text-xs uppercase tracking-[0.6em] hover:bg-[#D4AF37] transition-all shadow-6xl shadow-black/10 italic relative group overflow-hidden">
                <span className="relative z-10">Initiate Protocol</span>
                <div className="absolute inset-0 bg-[#D4AF37] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              </Link>
              <Link to="/about" className="px-20 py-10 border-2 border-[#0F1419]/10 rounded-[2.5rem] font-black text-xs uppercase tracking-[0.6em] hover:bg-white transition-all italic flex items-center gap-4 group">
                System Logic <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* TELEMETRY NODES */}
        <div className="absolute bottom-16 left-0 w-full px-20 hidden lg:flex justify-between">
          <div className="flex gap-16 items-center">
            <div className="flex flex-col items-center gap-2">
              <span className="text-[10px] font-black text-[#D4AF37] uppercase tracking-widest italic leading-none animate-pulse">Alpha State</span>
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            </div>
            <div className="h-10 w-[1px] bg-slate-200" />
            <span className="text-[10px] font-mono font-black italic opacity-40 uppercase tracking-[0.5em]">Node_India_2026</span>
          </div>
          <span className="text-[10px] font-mono font-black italic opacity-40 uppercase tracking-[0.5em]">Apurva Priyadarshi_Lead</span>
        </div>
      </motion.header>

      {/* 4. THE MANDALA GRID: ECOSYSTEM STACK */}
      <section className="py-72 px-10 bg-[#0F1419] text-white relative">
        <div className="max-w-7xl mx-auto">
          <div className="mb-48 flex flex-col lg:flex-row justify-between items-end gap-16">
            <div className="max-w-4xl">
              <ImperialBadge text="Institutional Infrastructure" />
              <h2 className="text-6xl md:text-[10rem] font-black uppercase italic tracking-tighter text-[#D4AF37] leading-[0.9] mb-8">Ecosystem <br /> Synthesis.</h2>
            </div>
            <p className="text-2xl text-slate-400 font-medium italic max-w-sm pb-8 border-b border-white/10 leading-relaxed">
              We structurally align founders, capital, and mentorship into a unified execution system.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-16">
            <RoyalCard 
              title="Founder Node" 
              icon={<Users />} 
              delay={0.1}
              desc="Early-stage founders selected through a highly selective Admission Handshake for structural alignment."
            />
            <RoyalCard 
              title="Syndicate" 
              icon={<Landmark />} 
              delay={0.2}
              desc="A closed-loop investor network focused on radical transparency and long-term sovereign growth."
            />
            <RoyalCard 
              title="Advisory" 
              icon={<Shield />} 
              delay={0.3}
              desc="Experienced operators providing structured frameworks to reduce startup inefficiencies and failure rates."
            />
          </div>
        </div>
      </section>

      {/* 5. THE ROYAL CHARTER (CORE PHILOSOPHY) */}
      <section className="py-72 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 p-32 opacity-[0.02] rotate-12"><Crown size={800} /></div>
        <div className="max-w-7xl mx-auto px-10">
          <div className="grid lg:grid-cols-2 gap-32 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }}>
              <ImperialBadge text="The Sovereign Philosophy" />
              <h2 className="text-6xl md:text-9xl font-black uppercase italic tracking-tighter leading-none mb-12">Radical <br /> Integrity.</h2>
              <div className="space-y-16">
                {[
                  { t: "System Over Service", d: "Udaaro delivers repeatable systems, not one-time consulting. Every component is designed to move founders from idea to institution." },
                  { t: "Sovereign Growth", d: "We focus on independent scaling, avoiding growth models driven purely by external dependency and short-term hype." },
                  { t: "Radical Transparency", d: "Honest feedback loops and realistic projections. No inflated narratives—only execution-led clarity." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-10 group">
                    <div className="w-2 h-16 bg-[#D4AF37] group-hover:scale-y-125 transition-transform origin-top" />
                    <div>
                      <h4 className="text-3xl font-black italic uppercase tracking-tighter mb-4">{item.t}</h4>
                      <p className="text-xl text-slate-500 italic leading-relaxed">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }} 
              whileInView={{ opacity: 1, scale: 1 }}
              className="relative p-20 bg-[#FDF9F3] border border-slate-100 rounded-[6rem] shadow-6xl shadow-black/5"
            >
              <div className="text-center">
                <Crown size={120} className="text-[#D4AF37] mx-auto mb-12 animate-pulse" />
                <h3 className="text-5xl font-black italic tracking-tighter mb-8 uppercase">The Charter</h3>
                <p className="text-lg text-slate-400 font-black uppercase tracking-[0.5em] italic mb-12">Batch 2026 Admissions Open</p>
                <Link to="/apply" className="inline-block px-12 py-6 bg-[#0F1419] text-[#D4AF37] rounded-full font-black text-[10px] uppercase tracking-[0.5em] italic hover:scale-105 transition-all">Submit Portfolio</Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. GLOBAL FOOTER: THE GRAND LEDGER */}
      <footer className="bg-[#0F1419] pt-72 pb-24 px-10 border-t border-white/5 relative overflow-hidden">
        <div className="max-w-[1700px] mx-auto">
          <div className="grid lg:grid-cols-6 gap-32 mb-64">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-6 mb-16">
                <div className="w-16 h-16 bg-[#D4AF37] text-[#0F1419] rounded-2xl flex items-center justify-center font-black italic text-4xl shadow-2xl">U</div>
                <h3 className="text-6xl font-black text-white uppercase italic tracking-tighter leading-none">Udaaro</h3>
              </div>
              <p className="text-slate-400 text-2xl font-medium italic leading-relaxed max-w-sm mb-20 opacity-60">
                The Sovereign Venture Operating System. Engineered for Indian innovation clusters and founders building legacy.
              </p>
              <div className="flex gap-8">
                {[Globe, Binary, Radio, Activity].map((Icon, i) => (
                  <div key={i} className="w-16 h-16 rounded-[1.5rem] border border-white/10 flex items-center justify-center text-white/30 hover:text-[#D4AF37] hover:border-[#D4AF37] transition-all cursor-crosshair">
                    <Icon size={24} />
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-12">
              <h5 className={IMPERIAL_THEME.typography.ui + " text-[#D4AF37]"}>The Ecosystem</h5>
              <ul className="space-y-6 text-sm font-black uppercase tracking-[0.3em] italic text-slate-500">
                <li><Link to="/apply" className="hover:text-white transition-colors">Vanguard Intake</Link></li>
                <li><Link to="/investors" className="hover:text-white transition-colors">Syndicate Portal</Link></li>
                <li><Link to="/mentors" className="hover:text-white transition-colors">Advisory Node</Link></li>
                <li><Link to="/about" className="hover:text-white transition-colors">Alpha Roadmap</Link></li>
              </ul>
            </div>

            <div className="space-y-12">
              <h5 className={IMPERIAL_THEME.typography.ui + " text-[#D4AF37]"}>Governance</h5>
              <ul className="space-y-6 text-sm font-black uppercase tracking-[0.3em] italic text-slate-500">
                <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Protocol</Link></li>
                <li><Link to="/privacy" className="hover:text-white transition-colors">Access Charter</Link></li>
                <li><Link to="/privacy" className="hover:text-white transition-colors">Compliance Log</Link></li>
                <li><Link to="/privacy" className="hover:text-white transition-colors">Legal Ledger</Link></li>
              </ul>
            </div>

            <div className="lg:col-span-2 space-y-12">
              <h5 className={IMPERIAL_THEME.typography.ui + " text-[#D4AF37]"}>Telemetry Sync</h5>
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

          {/* FINAL COPYRIGHT ARCHITECTURE */}
          <div className="pt-24 border-t border-white/5 flex flex-col xl:flex-row justify-between items-center gap-12 opacity-40">
            <div className="flex flex-col md:flex-row items-center gap-10">
              <span className="text-[10px] font-black uppercase tracking-[0.5em] italic text-center">© {new Date().getFullYear()} UDAARO GLOBAL VENTURES. ARCHITECTED BY APURVA PRIYADARSHI.</span>
              <div className="px-6 py-2 bg-white/5 rounded-full border border-white/10 text-[9px] font-black uppercase tracking-widest italic text-[#D4AF37]">Node: India_Alpha</div>
            </div>
            <div className="flex gap-12 text-[9px] font-black uppercase tracking-[0.5em] italic">
              <span>Ledger State: Stable</span>
              <span>Encrypted Access Verified</span>
            </div>
          </div>
        </div>
      </footer>

      {/* 7. SOVEREIGN AI INTERFACE */}
      <SovereignAI />

    </div>
  );
}

/**
 * ============================================================================================
 * SEO & GOOGLE RANKING OPTIMIZATION
 * --------------------------------------------------------------------------------------------
 * 1. Semantic HTML Structure (Header, Nav, Section, Footer)
 * 2. Mobile-First Responsive Luxury Framework
 * 3. High Keyword Density: Venture OS, Sovereign, Founder Admission, Syndicate
 * 4. Micro-Interactions for Engagement (Lower Bounce Rate)
 * ============================================================================================
 */