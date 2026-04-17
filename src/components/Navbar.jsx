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
  UserCheck,
  Binary,
  Layers,
  Shield,
  Radio,
  Globe2,
  HardDrive,
  CpuIcon,
  IndianRupee,
  Landmark,
  ShieldAlert,
  Compass,
  ActivitySquare,
  Key,
  Server,
  FileCode,
  BookOpen,
  Info
} from "lucide-react";

/** * =============================================================================
 * I. PREMIUM NAVIGATION TOPOLOGY (STARTUP CORE)
 * Design System: Alpha-Sync v3.1.0
 * Logic: Venture Operating System (Venture OS)
 * Architected by Apurva Priyadarshi | Deployment Node: INDIA_VANGUARD_HUB
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
          ? "bg-white/60 backdrop-blur-3xl py-4 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.08)] border-b border-slate-200/40" 
          : "bg-transparent py-12"
        }`}
      >
        {/* Institutional Progress Node */}
        <motion.div className="absolute top-0 left-0 right-0 h-[3px] bg-blue-600 origin-left shadow-[0_0_15px_blue]" style={{ scaleX }} />

        <div className="max-w-[1900px] mx-auto px-8 md:px-16 flex justify-between items-center">
          
          {/* ================= IDENTITY NODE: UDAARO OS ================= */}
          <div className="flex items-center gap-14">
            <Link to="/" className="flex items-center gap-5 group relative">
              <motion.div 
                whileHover={{ rotate: 90, scale: 1.1 }}
                className="w-12 h-12 bg-slate-950 rounded-3xl flex items-center justify-center text-white font-black italic shadow-4xl group-hover:bg-blue-600 transition-all duration-700 border border-white/10"
              >
                U
              </motion.div>
              <div className="flex flex-col">
                <span className="text-3xl font-black tracking-tighter text-slate-950 uppercase leading-none italic">
                  Udaaro
                </span>
                <div className="flex items-center gap-2 mt-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[9px] font-black text-slate-400 uppercase tracking-[0.5em] italic">
                    Grid_State: Alpha
                  </span>
                </div>
              </div>
            </Link>

            {/* Grid Telemetry Divider */}
            <div className="hidden xl:flex items-center gap-10 border-l border-slate-200 pl-14">
               <GridHeartbeatNode />
               <div className="flex flex-col">
                 <span className="text-[8px] font-black text-slate-300 uppercase tracking-widest leading-none mb-1">Architecture_v3.1</span>
                 <span className="text-[10px] font-bold text-blue-600 uppercase font-mono italic">Phase_1_Synthesis</span>
               </div>
            </div>
          </div>

          {/* ================= COMMAND BRIDGE (DESKTOP) ================= */}
          <div className="hidden md:flex items-center gap-16">
            
            <SearchInterface />

            <div className="flex items-center gap-12">
              {NAV_CLUSTERS.map((node, idx) => (
                <div
                  key={node.path}
                  onMouseEnter={() => setHandshakeNode(idx)}
                  onMouseLeave={() => setHandshakeNode(null)}
                  className="relative py-2"
                >
                  <Link to={node.path} className="group flex flex-col items-center">
                    <div className="flex items-center gap-3">
                      <span className={`text-[12px] font-black uppercase tracking-[0.4em] transition-all duration-500 italic ${
                        isActive(node.path) ? "text-blue-600" : "text-slate-500 group-hover:text-slate-950"
                      }`}>
                        {node.name}
                      </span>
                      <ChevronRight size={12} className={`text-slate-200 transition-all duration-500 ${handshakeNode === idx ? 'rotate-90 text-blue-600' : ''}`} />
                    </div>
                    
                    <AnimatePresence>
                      {(isActive(node.path) || handshakeNode === idx) && (
                        <motion.div 
                          layoutId="navGlowNode"
                          initial={{ opacity: 0, width: 0 }}
                          animate={{ opacity: 1, width: "100%" }}
                          exit={{ opacity: 0, width: 0 }}
                          className="absolute -bottom-2 left-0 h-[2.5px] bg-blue-600 shadow-[0_5px_15px_blue]"
                        />
                      )}
                    </AnimatePresence>
                  </Link>

                  {/* ================= MEGA-TERMINAL HANDSHAKE ================= */}
                  <AnimatePresence>
                    {handshakeNode === idx && (
                      <motion.div 
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute top-full left-1/2 -translate-x-1/2 pt-10 w-[420px] z-[2000] pointer-events-none group-hover:pointer-events-auto"
                      >
                        <div className="bg-slate-950 rounded-[4rem] p-12 shadow-7xl border border-white/10 overflow-hidden relative group/mega">
                           <div className="absolute top-0 right-0 p-10 opacity-10 text-white scale-150 group-hover/mega:scale-100 transition-transform duration-1000">
                             {node.icon}
                           </div>
                           
                           <div className="relative z-10">
                              <h4 className="text-[10px] font-black text-blue-500 uppercase tracking-[0.7em] mb-8">{node.detail}</h4>
                              <p className="text-sm text-slate-400 font-medium leading-relaxed mb-12 italic">"{node.description}"</p>
                              
                              <div className="space-y-5">
                                 {node.subNodes.map((sub, i) => (
                                   <div key={i} className="flex items-center justify-between group/sub cursor-pointer p-5 bg-white/5 rounded-2xl hover:bg-white/10 transition-all border border-transparent hover:border-white/10">
                                      <div className="flex flex-col">
                                         <span className="text-[12px] font-black text-white uppercase tracking-widest leading-none mb-2">{sub.label}</span>
                                         <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest leading-none">{sub.detail}</span>
                                      </div>
                                      <ArrowUpRight size={16} className="text-slate-600 group-hover/sub:text-blue-500 group-hover/sub:translate-x-1 group-hover/sub:-translate-y-1 transition-all" />
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

            <div className="h-10 w-px bg-slate-200" />

            {/* CORE CONVERSION NODE */}
            <div className="flex items-center gap-8">
              <Link to="/admin-login" className="p-4 bg-slate-50 hover:bg-blue-600 hover:text-white text-slate-400 rounded-2xl transition-all duration-700 group shadow-inner border border-slate-100">
                <Terminal size={22} className="group-hover:rotate-12 transition-transform" />
              </Link>
              
              <Link 
                to="/apply" 
                className="relative flex items-center px-14 py-5 bg-slate-950 text-white rounded-[1.8rem] text-[13px] font-black uppercase tracking-[0.4em] shadow-7xl transition-all hover:scale-[1.05] hover:bg-blue-600 active:scale-95 group overflow-hidden border border-white/10"
              >
                <span className="relative z-10 flex items-center gap-4 italic leading-none">
                  Admission_Desk 
                  <ArrowUpRight size={20} className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              </Link>
            </div>
          </div>

          {/* ================= MOBILE NAVIGATION ================= */}
          <div className="md:hidden flex items-center gap-6">
             <motion.button whileTap={{ scale: 0.9 }} className="p-4 bg-slate-950 text-white rounded-2xl shadow-3xl shadow-blue-900/20">
                <Bell size={24} className="animate-pulse" />
             </motion.button>
             <button
                className="p-5 text-slate-950 bg-white border border-slate-200 rounded-[2rem] transition-all active:scale-90 shadow-2xl"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
             </button>
          </div>
        </div>

        {/* ================= MOBILE OVERLAY TERMINAL ================= */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, x: "100%" }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="fixed top-0 left-0 w-full h-screen bg-[#fcfcfd] z-[900] md:hidden flex flex-col pt-36 px-10 overflow-y-auto"
            >
              <div className="absolute top-0 right-0 w-[100vw] h-[100vw] bg-blue-50/40 rounded-full blur-[180px] -z-10" />
              
              <div className="flex flex-col gap-16 pb-32">
                <div className="space-y-10">
                  <SectionLabel text="Sovereign_Clusters" />
                  <div className="grid gap-6">
                    {NAV_CLUSTERS.map((node) => (
                      <Link
                        key={node.path}
                        to={node.path}
                        className={`group flex items-center justify-between p-10 rounded-[3.5rem] transition-all duration-700 border ${
                          isActive(node.path) 
                          ? "bg-slate-950 text-white border-slate-950 shadow-7xl scale-[1.03]" 
                          : "bg-white text-slate-600 border-slate-100 active:bg-slate-50 shadow-xl"
                        }`}
                      >
                        <div className="flex items-center gap-10">
                          <div className={`w-16 h-16 rounded-[2rem] flex items-center justify-center transition-all ${isActive(node.path) ? 'bg-blue-600 shadow-3xl' : 'bg-slate-50'}`}>
                             {React.cloneElement(node.icon, { size: 32, className: isActive(node.path) ? 'text-white' : 'text-slate-400' })}
                          </div>
                          <div className="flex flex-col">
                            <span className="text-2xl font-black uppercase tracking-tighter italic leading-none mb-3">{node.name}</span>
                            <span className={`text-[11px] font-bold uppercase tracking-widest ${isActive(node.path) ? 'text-blue-400' : 'text-slate-400'}`}>
                              {node.detail}
                            </span>
                          </div>
                        </div>
                        <ChevronRight size={32} className={isActive(node.path) ? 'text-blue-500' : 'text-slate-200'} />
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="space-y-10">
                   <SectionLabel text="System_Nodes" />
                   <div className="grid grid-cols-2 gap-6">
                      {UTILITY_NODES.map((util) => (
                        <Link key={util.name} to={util.path} className="flex flex-col p-10 bg-white border border-slate-100 rounded-[3.5rem] shadow-xl active:scale-95 transition-all group">
                           <div className="flex justify-between items-start mb-8">
                              <div className="p-4 bg-slate-50 rounded-2xl text-slate-400 group-hover:text-blue-600 group-hover:bg-blue-50 transition-all shadow-inner">
                                {util.icon}
                              </div>
                              <div className="flex items-center gap-2 px-3 py-1 bg-emerald-50 rounded-full border border-emerald-100">
                                 <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                 <span className="text-[9px] font-black text-emerald-600">{util.status}</span>
                              </div>
                           </div>
                           <span className="text-[13px] font-black uppercase tracking-[0.2em] text-slate-950 italic">{util.name}</span>
                        </Link>
                      ))}
                   </div>
                </div>

                {/* Mobile Identity Conversion */}
                <div className="p-16 bg-slate-950 text-white rounded-[5rem] shadow-8xl relative overflow-hidden group">
                   <div className="absolute top-0 right-0 p-10 opacity-20"><Fingerprint size={200} className="text-blue-500" /></div>
                   <h4 className="text-white text-5xl font-black italic tracking-tighter leading-[0.85] mb-12 relative z-10 uppercase">Architect <br /> Your Sovereign <br /> Impact.</h4>
                   <Link to="/apply" className="inline-flex items-center gap-6 px-14 py-8 bg-blue-600 text-white rounded-[2.5rem] font-black text-[13px] uppercase tracking-[0.5em] shadow-6xl relative z-10 hover:bg-white hover:text-slate-950 transition-all italic leading-none">
                      Initiate_Admission <ArrowUpRight size={24}/>
                   </Link>
                </div>

                {/* Mobile Terminal Metadata */}
                <div className="py-14 text-center border-t border-slate-100">
                   <div className="flex justify-center gap-8 mb-10 opacity-20">
                      <Network size={28} /> <Globe size={28} /> <Cpu size={28} /> <Lock size={28} />
                   </div>
                   <p className="text-[11px] font-black text-slate-300 uppercase tracking-[0.6em] leading-relaxed italic">
                     Udaaro Global Grid v3.1.0 <br /> 
                     Logic_Synthesis_Protocol_Active
                   </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-950/40 backdrop-blur-2xl z-[850] md:hidden"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}

/** * =============================================================================
 * IV. ATOMIC UI HELPERS (SYSTEM WRAPPERS)
 * ============================================================================= */

const SectionLabel = ({ text }) => (
  <div className="flex items-center gap-6 ml-6 mb-12">
    <div className="h-[2.5px] w-14 bg-blue-600 shadow-[0_0_15px_blue]" />
    <span className="text-[12px] font-black text-blue-600 uppercase tracking-[0.6em] leading-none italic">{text}</span>
  </div>
);

export default Navbar;