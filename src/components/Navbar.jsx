import React, { useState, useEffect, useCallback, useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { 
  Menu, 
  X, 
  ChevronRight, 
  LayoutGrid, 
  ShieldCheck, 
  ArrowUpRight,
  Sparkles,
  Lock,
  Zap,
  Globe,
  Circle,
  Activity,
  Cpu,
  Database,
  Fingerprint,
  Network,
  Terminal,
  Search,
  Command,
  Bell,
  UserCheck
} from "lucide-react";

/** * =============================================================================
 * I. PREMIUM NAVIGATION TOPOLOGY
 * Design System: Alpha-Sync v2.9.4
 * Architected by Apurva Priyadarshi | Cycle: 2026-Alpha
 * ============================================================================= */

const NAV_NODES = [
  { 
    id: "vision",
    name: "The Vision", 
    path: "/", 
    detail: "Mission Directive",
    icon: <Globe size={16} />,
    description: "Architecting generational institutions through structured growth.",
    nodes: ["Protocol_Alpha", "Venture_Blueprint", "Impact_Matrix"]
  },
  { 
    id: "syndicate",
    name: "Syndicate", 
    path: "/investors", 
    detail: "Capital Layer",
    icon: <Lock size={16} />,
    description: "Sovereign gateway for institutional and high-fidelity capital.",
    nodes: ["Liquidity_Node", "Vetting_Core", "Deployment_Sync"]
  },
  { 
    id: "advisory",
    name: "Advisory", 
    path: "/mentors", 
    detail: "Elite Mentorship",
    icon: <ShieldCheck size={16} />,
    description: "Synchronizing industry wisdom with the next wave of builders.",
    nodes: ["Advisory_Council", "Legacy_Craft", "Strategic_Sync"]
  },
];

const SYSTEM_UTILITIES = [
  { name: "Terminal", path: "/admin-login", icon: <Terminal size={14} />, status: "SECURE" },
  { name: "Grid_Status", path: "#", icon: <Activity size={14} />, status: "SYNCED" },
];

/** * =============================================================================
 * II. UI ATOMS: PROTOCOL INDICATORS
 * ============================================================================= */

const InfrastructureHeartbeat = () => (
  <div className="flex items-center gap-3 px-4 py-2 bg-slate-950/5 border border-white/20 rounded-full backdrop-blur-md">
    <motion.div 
      animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
      transition={{ duration: 2, repeat: Infinity }}
      className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.8)]"
    />
    <span className="text-[8px] font-black text-slate-500 uppercase tracking-[0.3em]">Grid_Synchronized</span>
  </div>
);

const SearchTerminal = () => (
  <div className="hidden lg:flex items-center gap-3 px-5 py-2.5 bg-slate-50 border border-slate-100 rounded-2xl group focus-within:ring-2 focus-within:ring-blue-600/20 transition-all">
    <Search size={14} className="text-slate-300 group-focus-within:text-blue-600 transition-colors" />
    <input 
      type="text" 
      placeholder="Search Protocol..." 
      className="bg-transparent border-none outline-none text-[11px] font-bold text-slate-900 placeholder:text-slate-300 w-32 focus:w-48 transition-all"
    />
    <div className="flex items-center gap-1 px-2 py-1 bg-white border border-slate-200 rounded-lg shadow-sm">
      <Command size={10} className="text-slate-400" />
      <span className="text-[9px] font-black text-slate-400">K</span>
    </div>
  </div>
);

/** * =============================================================================
 * III. MAIN ARCHITECTURE: NAVBRIDGE
 * ============================================================================= */

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeNode, setActiveNode] = useState(null);
  const location = useLocation();
  const { scrollYProgress } = useScroll();

  // Smooth scroll progress bar for the top of the nav
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Evolution of background on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Sync menu state with route changes and lock body scroll
  useEffect(() => {
    setIsOpen(false);
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
  }, [location, isOpen]);

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 w-full z-[100] transition-all duration-700 ${
          scrolled 
          ? "bg-white/60 backdrop-blur-3xl py-3 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.1)] border-b border-slate-200/40" 
          : "bg-transparent py-10"
        }`}
      >
        {/* Top Scroll Indicator Node */}
        <motion.div className="absolute top-0 left-0 right-0 h-[2px] bg-blue-600 origin-left" style={{ scaleX }} />

        <div className="max-w-[1800px] mx-auto px-6 md:px-12 flex justify-between items-center">
          
          {/* ================= BRAND IDENTITY: CENTRAL HANDSHAKE ================= */}
          <div className="flex items-center gap-10">
            <Link to="/" className="flex items-center gap-4 group">
              <motion.div 
                whileHover={{ rotate: 90, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 bg-slate-950 rounded-[1.2rem] flex items-center justify-center text-white font-black italic shadow-2xl shadow-blue-500/30 group-hover:bg-blue-600 transition-all duration-700"
              >
                U
              </motion.div>
              <div className="flex flex-col">
                <span className="text-2xl font-black tracking-[-0.07em] text-slate-950 uppercase leading-none italic">
                  Udaaro
                </span>
                <div className="flex items-center gap-2 mt-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[8px] font-black text-slate-400 uppercase tracking-[0.5em]">
                    Active_Node_Alpha
                  </span>
                </div>
              </div>
            </Link>

            {/* Quick Metrics Divider */}
            <div className="hidden xl:flex items-center gap-6 border-l border-slate-200 pl-10 ml-2">
               <div className="flex flex-col">
                 <span className="text-[7px] font-black text-slate-300 uppercase tracking-widest leading-none mb-1">Grid_Uptime</span>
                 <span className="text-[10px] font-bold text-emerald-500 uppercase font-mono">99.99%</span>
               </div>
               <div className="flex flex-col">
                 <span className="text-[7px] font-black text-slate-300 uppercase tracking-widest leading-none mb-1">Latency</span>
                 <span className="text-[10px] font-bold text-blue-500 uppercase font-mono">14ms</span>
               </div>
            </div>
          </div>

          {/* ================= DESKTOP COMMAND BRIDGE ================= */}
          <div className="hidden md:flex items-center gap-12">
            
            <SearchTerminal />

            <div className="flex items-center gap-10">
              {NAV_NODES.map((node, idx) => (
                <div
                  key={node.path}
                  onMouseEnter={() => setActiveNode(idx)}
                  onMouseLeave={() => setActiveNode(null)}
                  className="relative py-2"
                >
                  <Link
                    to={node.path}
                    className="group flex flex-col items-center"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className={`text-[11px] font-black uppercase tracking-[0.3em] transition-all duration-500 ${
                        isActive(node.path) ? "text-blue-600" : "text-slate-500 group-hover:text-slate-950"
                      }`}>
                        {node.name}
                      </span>
                      <ChevronRight size={10} className={`text-slate-300 transition-transform duration-500 ${activeNode === idx ? 'rotate-90 text-blue-600' : ''}`} />
                    </div>
                    
                    {/* Sovereign Indicator Underline */}
                    <AnimatePresence>
                      {(isActive(node.path) || activeNode === idx) && (
                        <motion.div 
                          layoutId="navGlow"
                          initial={{ opacity: 0, scaleX: 0 }}
                          animate={{ opacity: 1, scaleX: 1 }}
                          exit={{ opacity: 0, scaleX: 0 }}
                          className="absolute -bottom-1 left-0 w-full h-[2px] bg-blue-600 shadow-[0_0_10px_rgba(37,99,235,0.8)]"
                        />
                      )}
                    </AnimatePresence>
                  </Link>

                  {/* ================= MEGA-MENU HANDSHAKE ================= */}
                  <AnimatePresence>
                    {activeNode === idx && (
                      <motion.div 
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute top-full left-1/2 -translate-x-1/2 pt-6 w-80 z-50 pointer-events-none group-hover:pointer-events-auto"
                      >
                        <div className="bg-white rounded-[2.5rem] p-8 shadow-7xl border border-slate-100 overflow-hidden relative">
                           <div className="absolute top-0 right-0 p-4 opacity-[0.03] text-slate-950">{node.icon}</div>
                           <h4 className="text-[10px] font-black text-blue-600 uppercase tracking-[0.4em] mb-4">{node.detail}</h4>
                           <p className="text-xs text-slate-500 font-medium leading-relaxed mb-6 italic">"{node.description}"</p>
                           <div className="space-y-3">
                              {node.nodes.map((sub, i) => (
                                <div key={i} className="flex items-center justify-between group/item cursor-pointer">
                                   <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest group-hover/item:text-slate-950 transition-colors">{sub}</span>
                                   <ArrowUpRight size={10} className="text-slate-200 group-hover/item:text-blue-600 transition-all translate-y-1 opacity-0 group-hover/item:translate-y-0 group-hover/item:opacity-100" />
                                </div>
                              ))}
                           </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            <div className="h-6 w-[1px] bg-slate-200" />

            {/* CTA SECTOR */}
            <div className="flex items-center gap-6">
              <Link to="/admin-login" className="p-3 bg-slate-50 hover:bg-blue-50 text-slate-400 hover:text-blue-600 rounded-2xl transition-all duration-500 group shadow-inner">
                <Terminal size={18} className="group-hover:rotate-12 transition-transform" />
              </Link>
              
              <Link 
                to="/apply" 
                className="relative flex items-center px-10 py-5 bg-slate-950 text-white rounded-[1.5rem] text-[11px] font-black uppercase tracking-[0.4em] shadow-6xl transition-all hover:scale-[1.05] active:scale-95 group overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-3 italic">
                  Initiate Handshake 
                  <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-500" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </Link>
            </div>
          </div>

          {/* ================= MOBILE PROTOCOL TOGGLE ================= */}
          <div className="md:hidden flex items-center gap-4">
             <motion.button 
               whileTap={{ scale: 0.9 }}
               className="p-3 bg-slate-950 text-white rounded-xl shadow-xl"
             >
                <Bell size={18} />
             </motion.button>
             <button
                className="p-4 text-slate-950 bg-white border border-slate-100 rounded-[1.5rem] transition-all active:scale-90 shadow-sm"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <X size={20} /> : <Menu size={20} />}
             </button>
          </div>
        </div>

        {/* ================= MOBILE FULL-SCREEN TERMINAL ================= */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, x: "100%" }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="fixed top-0 left-0 w-full h-screen bg-[#fcfcfd] z-[90] md:hidden flex flex-col pt-32 px-8 overflow-y-auto"
            >
              {/* Background Architectural Patterns */}
              <div className="absolute top-0 right-0 w-[80vw] h-[80vw] bg-blue-50/60 rounded-full blur-[120px] -z-10" />
              
              <div className="flex flex-col gap-12 pb-20">
                <div className="space-y-6">
                  <SectionLabel text="Institutional_Routes" />
                  <div className="grid gap-4">
                    {NAV_NODES.map((node) => (
                      <Link
                        key={node.path}
                        to={node.path}
                        className={`group flex items-center justify-between p-8 rounded-[2.5rem] transition-all duration-500 border ${
                          isActive(node.path) 
                          ? "bg-slate-950 text-white border-slate-900 shadow-5xl scale-[1.02]" 
                          : "bg-white text-slate-600 border-slate-100 active:bg-slate-50"
                        }`}
                      >
                        <div className="flex items-center gap-6">
                          <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all ${isActive(node.path) ? 'bg-blue-600' : 'bg-slate-50'}`}>
                             {React.cloneElement(node.icon, { size: 24, className: isActive(node.path) ? 'text-white' : 'text-slate-400' })}
                          </div>
                          <div className="flex flex-col">
                            <span className="text-xl font-black uppercase tracking-tighter italic leading-none mb-2">{node.name}</span>
                            <span className={`text-[10px] font-bold uppercase tracking-widest ${isActive(node.path) ? 'text-blue-400' : 'text-slate-400'}`}>
                              {node.detail}
                            </span>
                          </div>
                        </div>
                        <ChevronRight size={20} className={isActive(node.path) ? 'text-blue-500' : 'text-slate-200'} />
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="space-y-8">
                   <SectionLabel text="System_Protocols" />
                   <div className="grid grid-cols-2 gap-4">
                      {SYSTEM_UTILITIES.map((util) => (
                        <Link key={util.name} to={util.path} className="flex flex-col p-8 bg-white border border-slate-100 rounded-[3rem] shadow-sm active:scale-95 transition-all group">
                           <div className="flex justify-between items-start mb-6">
                              <div className="p-3 bg-slate-50 rounded-xl text-slate-400 group-hover:text-blue-600 group-hover:bg-blue-50 transition-all">
                                {util.icon}
                              </div>
                              <span className="text-[8px] font-black text-emerald-500 bg-emerald-50 px-2 py-0.5 rounded-lg">{util.status}</span>
                           </div>
                           <span className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-950">{util.name}</span>
                        </Link>
                      ))}
                   </div>
                </div>

                {/* Mobile Final Handshake CTA */}
                <div className="p-12 bg-slate-950 rounded-[4rem] shadow-7xl relative overflow-hidden group">
                   <div className="absolute top-0 right-0 p-8 opacity-20"><Fingerprint size={120} className="text-blue-500" /></div>
                   <h4 className="text-white text-3xl font-black italic tracking-tighter leading-[0.9] mb-8 relative z-10 uppercase">Initiate <br /> Sovereign <br /> Handshake.</h4>
                   <Link to="/apply" className="inline-flex items-center gap-4 px-10 py-5 bg-blue-600 text-white rounded-2xl font-black text-[11px] uppercase tracking-[0.3em] shadow-4xl relative z-10 hover:bg-white hover:text-slate-950 transition-all">
                      Admission_Desk <ArrowUpRight size={16}/>
                   </Link>
                </div>

                <div className="py-10 text-center opacity-40">
                   <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.5em] leading-relaxed">
                     Udaaro Global Architecture v2.9.4 <br /> 
                     Secure_Handshake_Protocol_Active
                   </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Backdrop blur for mobile when menu is open */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-950/40 backdrop-blur-xl z-[80] md:hidden"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}

/** * =============================================================================
 * IV. ATOMIC UI HELPERS
 * ============================================================================= */

const SectionLabel = ({ text }) => (
  <div className="flex items-center gap-4 ml-4 mb-8">
    <div className="h-px w-8 bg-blue-600" />
    <span className="text-[10px] font-black text-blue-600 uppercase tracking-[0.6em] leading-none">{text}</span>
  </div>
);

export default Navbar;