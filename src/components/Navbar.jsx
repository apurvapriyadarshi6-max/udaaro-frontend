import React, { useState, useEffect, useCallback, useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { 
  Menu, X, ChevronRight, Terminal, Search, Command, Bell, Fingerprint, 
  ArrowUpRight, Globe2, IndianRupee, ShieldCheck, BookOpen, Cpu, Network, Globe, Lock
} from "lucide-react";

/** * =============================================================================
 * I. PREMIUM NAVIGATION TOPOLOGY
 * Design Language: Imperial Modernism
 * Architected by: Apurva Priyadarshi | Node: INDIA_VANGUARD
 * ============================================================================= */

const NAV_CLUSTERS = [
  { 
    id: "vision",
    name: "Identity", 
    path: "/about", 
    detail: "System Logic",
    icon: <Globe2 size={16} />,
    description: "The architectural theory behind our Venture Operating System.",
    subNodes: [
      { label: "Phase_1_Logic", detail: "Structural Synthesis" },
      { label: "India_Stack", detail: "Modular Integration" },
      { label: "The_Founder_Charter", detail: "Hard Integrity" }
    ]
  },
  { 
    id: "syndicate",
    name: "Syndicate", 
    path: "/investors", 
    detail: "Capital Layer",
    icon: <IndianRupee size={16} />,
    description: "Sovereign gateway for institutional capital nodes.",
    subNodes: [
      { label: "Capital_Deployment", detail: "Vetted Dealflow" },
      { label: "Risk_Scoping", detail: "Logic_Vetting" },
      { label: "Syndicate_Sync", detail: "Alpha_Resonance" }
    ]
  },
  { 
    id: "advisory",
    name: "Advisory", 
    path: "/mentors", 
    detail: "Execution Node",
    icon: <ShieldCheck size={16} />,
    description: "Synchronizing industry wisdom with structural venture engineering.",
    subNodes: [
      { label: "Council_Alpha", detail: "Selective Vetting" },
      { label: "Strategic_Pulse", detail: "Tactical Execution" },
      { label: "Legacy_Mesh", detail: "Industrial Scale" }
    ]
  },
];

const UTILITY_NODES = [
  { name: "Executive Terminal", path: "/admin-login", icon: <Terminal size={14} />, status: "SECURE" },
  { name: "Venture Logs", path: "/blog", icon: <BookOpen size={14} />, status: "ACTIVE" },
];

/** * =============================================================================
 * II. UI ATOMS: GRID TELEMETRY
 * ============================================================================= */

const GridHeartbeatNode = () => (
  <div className="flex items-center gap-3 px-5 py-2.5 bg-slate-950/5 border border-slate-200/50 rounded-full backdrop-blur-2xl">
    <motion.div 
      animate={{ scale: [1, 1.2, 1], opacity: [0.6, 1, 0.6] }}
      transition={{ duration: 2.5, repeat: Infinity }}
      className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,1)]"
    />
    <span className="text-[9px] font-black text-slate-500 uppercase tracking-[0.4em] italic">Grid_Sync: India_Node_01</span>
  </div>
);

const SearchInterface = () => (
  <div className="hidden lg:flex items-center gap-4 px-6 py-3 bg-white border border-slate-100 rounded-2xl group focus-within:ring-4 focus-within:ring-blue-600/5 transition-all shadow-sm">
    <Search size={14} className="text-slate-300 group-focus-within:text-blue-600 transition-colors" />
    <input 
      type="text" 
      placeholder="Search Protocol..." 
      className="bg-transparent border-none outline-none text-[11px] font-bold text-slate-950 placeholder:text-slate-200 w-32 focus:w-48 transition-all uppercase tracking-widest italic"
    />
    <div className="flex items-center gap-1.5 px-2 py-1 bg-slate-50 border border-slate-200 rounded-lg shadow-inner">
      <Command size={10} className="text-slate-400" />
      <span className="text-[9px] font-black text-slate-400">K</span>
    </div>
  </div>
);

/** * =============================================================================
 * III. MAIN ARCHITECTURE: NAVBRIDGE SYSTEM
 * ============================================================================= */

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [handshakeNode, setHandshakeNode] = useState(null);
  const location = useLocation();
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const monitorScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", monitorScroll);
    return () => window.removeEventListener("scroll", monitorScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
  }, [location, isOpen]);

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <motion.nav 
        initial={{ y: -120 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 w-full z-[1000] transition-all duration-700 ${
          isScrolled 
          ? "bg-white/70 backdrop-blur-3xl py-4 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.05)] border-b border-[#D4AF37]/10" 
          : "bg-transparent py-10"
        }`}
      >
        {/* Institutional Progress Bar */}
        <motion.div className="absolute top-0 left-0 right-0 h-[3px] bg-[#D4AF37] origin-left shadow-[0_0_15px_#D4AF37]" style={{ scaleX }} />

        <div className="max-w-[1800px] mx-auto px-8 md:px-16 flex justify-between items-center">
          
          {/* IDENTITY CLUSTER */}
          <div className="flex items-center gap-14">
            <Link to="/" className="flex items-center gap-5 group">
              <motion.div 
                whileHover={{ rotate: 90, scale: 1.1 }}
                className="w-12 h-12 bg-[#0F1419] rounded-2xl flex items-center justify-center text-[#D4AF37] font-black italic shadow-xl border border-[#D4AF37]/20"
              >
                U
              </motion.div>
              <div className="flex flex-col">
                <span className="text-2xl font-black tracking-tighter text-[#0F1419] uppercase leading-none italic">
                  Udaaro
                </span>
                <span className="text-[9px] font-black text-[#D4AF37] uppercase tracking-[0.5em] italic mt-1.5">
                  Sovereign_OS
                </span>
              </div>
            </Link>

            <div className="hidden xl:flex items-center gap-10 border-l border-slate-200 pl-14 opacity-60">
               <GridHeartbeatNode />
            </div>
          </div>

          {/* COMMAND BRIDGE (DESKTOP) */}
          <div className="hidden md:flex items-center gap-12">
            <div className="flex items-center gap-12 mr-8">
              {NAV_CLUSTERS.map((node, idx) => (
                <div
                  key={node.path}
                  onMouseEnter={() => setHandshakeNode(idx)}
                  onMouseLeave={() => setHandshakeNode(null)}
                  className="relative py-2"
                >
                  <Link to={node.path} className="group flex flex-col items-center">
                    <span className={`text-[11px] font-black uppercase tracking-[0.4em] transition-all italic ${
                      isActive(node.path) ? "text-[#D4AF37]" : "text-slate-500 hover:text-[#0F1419]"
                    }`}>
                      {node.name}
                    </span>
                    
                    <AnimatePresence>
                      {(isActive(node.path) || handshakeNode === idx) && (
                        <motion.div 
                          layoutId="navGlowNode"
                          initial={{ opacity: 0, width: 0 }}
                          animate={{ opacity: 1, width: "100%" }}
                          exit={{ opacity: 0, width: 0 }}
                          className="absolute -bottom-2 left-0 h-[2px] bg-[#D4AF37] shadow-[0_4px_10px_#D4AF37]"
                        />
                      )}
                    </AnimatePresence>
                  </Link>

                  {/* MEGA-TERMINAL DROP */}
                  <AnimatePresence>
                    {handshakeNode === idx && (
                      <motion.div 
                        initial={{ opacity: 0, y: 20, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.98 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 pt-8 w-[380px] z-[2000]"
                      >
                        <div className="bg-[#0F1419] rounded-[3rem] p-10 shadow-2xl border border-[#D4AF37]/20 relative">
                           <div className="relative z-10">
                              <h4 className="text-[10px] font-black text-[#D4AF37] uppercase tracking-[0.6em] mb-6">{node.detail}</h4>
                              <p className="text-xs text-slate-400 font-medium leading-relaxed mb-8 italic">"{node.description}"</p>
                              
                              <div className="space-y-4">
                                 {node.subNodes.map((sub, i) => (
                                   <div key={i} className="flex items-center justify-between p-4 bg-white/5 rounded-2xl hover:bg-[#D4AF37]/10 transition-all border border-transparent hover:border-[#D4AF37]/20 cursor-pointer group/sub">
                                      <div className="flex flex-col">
                                         <span className="text-[11px] font-black text-white uppercase tracking-widest">{sub.label}</span>
                                         <span className="text-[8px] font-bold text-slate-500 uppercase">{sub.detail}</span>
                                      </div>
                                      <ArrowUpRight size={14} className="text-slate-600 group-hover/sub:text-[#D4AF37] transition-all" />
                                   </div>
                                 ))}
                              </div>
                           </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            <SearchInterface />

            <div className="flex items-center gap-6">
              <Link to="/admin-login" className="p-4 bg-[#0F1419] text-[#D4AF37] rounded-2xl hover:scale-110 transition-all shadow-lg">
                <Terminal size={20} />
              </Link>
              <Link 
                to="/apply" 
                className="px-12 py-4 bg-[#0F1419] text-white rounded-2xl text-[11px] font-black uppercase tracking-[0.4em] shadow-xl hover:bg-[#D4AF37] transition-all italic"
              >
                Join_Batch
              </Link>
            </div>
          </div>

          {/* MOBILE TOGGLE */}
          <div className="md:hidden">
            <button
              className="p-4 text-[#0F1419] bg-white border border-slate-200 rounded-2xl shadow-lg"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* MOBILE OVERLAY */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, x: "100%" }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              className="fixed top-0 left-0 w-full h-screen bg-[#FDF9F3] z-[900] md:hidden flex flex-col pt-32 px-10"
            >
              <div className="space-y-8">
                {NAV_CLUSTERS.map((node) => (
                  <Link
                    key={node.path}
                    to={node.path}
                    className="flex items-center justify-between p-8 bg-white border border-slate-100 rounded-[2.5rem] shadow-sm active:scale-95 transition-all"
                  >
                    <div className="flex flex-col">
                      <span className="text-xl font-black uppercase italic text-[#0F1419]">{node.name}</span>
                      <span className="text-[9px] font-bold text-[#D4AF37] uppercase tracking-widest">{node.detail}</span>
                    </div>
                    <ChevronRight className="text-[#D4AF37]" />
                  </Link>
                ))}
                
                <div className="pt-10 border-t border-slate-100 flex flex-col gap-6">
                  <Link to="/apply" className="w-full py-8 bg-[#0F1419] text-white rounded-[2.5rem] text-center font-black uppercase tracking-[0.5em] italic shadow-2xl">
                    Initiate_Admission
                  </Link>
                  <Link to="/admin-login" className="w-full py-8 bg-white border-2 border-[#0F1419] text-[#0F1419] rounded-[2.5rem] text-center font-black uppercase tracking-[0.5em] italic">
                    Executive_Terminal
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}

export default Navbar;