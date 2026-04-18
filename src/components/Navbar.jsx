import React, { useState, useEffect, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { 
  Menu, X, ChevronRight, Terminal, ArrowUpRight 
} from "lucide-react";

/** * 1. DATA ARCHITECTURE 
 * Moved outside component to prevent re-declaration on every render.
 */
const NAV_CLUSTERS = [
  { 
    name: "Identity", 
    path: "/about", 
    detail: "System Logic",
    description: "The architectural theory behind our Venture Operating System.",
    subNodes: [
      { label: "Phase_1_Logic", detail: "Structural Synthesis" },
      { label: "India_Stack", detail: "Modular Integration" },
      { label: "Founder_Charter", detail: "Hard Integrity" }
    ]
  },
  { 
    name: "Syndicate", 
    path: "/investors", 
    detail: "Capital Layer",
    description: "Sovereign gateway for institutional capital nodes.",
    subNodes: [
      { label: "Vetted_Dealflow", detail: "Deployment" },
      { label: "Risk_Scoping", detail: "Logic_Vetting" },
      { label: "Alpha_Resonance", detail: "Sync" }
    ]
  },
  { 
    name: "Advisory", 
    path: "/mentors", 
    detail: "Execution Node",
    description: "Synchronizing industry wisdom with structural engineering.",
    subNodes: [
      { label: "Council_Alpha", detail: "Selective" },
      { label: "Strategic_Pulse", detail: "Tactical" },
      { label: "Legacy_Mesh", detail: "Scale" }
    ]
  },
];

// 2. UI ATOMS
const TelemetryBadge = () => (
  <div className="flex items-center gap-3 px-4 py-2 bg-slate-950/5 border border-slate-200/50 rounded-full">
    <motion.div 
      animate={{ opacity: [0.4, 1, 0.4] }} 
      transition={{ duration: 2, repeat: Infinity }}
      className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981]"
    />
    <span className="text-[8px] font-black text-slate-500 uppercase tracking-[0.3em] italic">Node: India_Alpha_01</span>
  </div>
);

// 3. MAIN COMPONENT
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeHover, setActiveHover] = useState(null);
  const location = useLocation();
  const { scrollYProgress } = useScroll();

  const progressLine = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  // Handle Scroll logic
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  return (
    <nav 
      role="navigation"
      className={`fixed top-0 w-full z-[1000] transition-all duration-500 ${
        isScrolled ? "bg-white/90 backdrop-blur-2xl py-4 border-b border-[#D4AF37]/10 shadow-xl" : "bg-transparent py-10"
      }`}
    >
      {/* Sovereign Progress Indicator */}
      <motion.div 
        style={{ scaleX: progressLine }} 
        className="absolute top-0 left-0 right-0 h-[3px] bg-[#D4AF37] origin-left z-50" 
      />

      <div className="max-w-[1800px] mx-auto px-6 md:px-10 flex justify-between items-center">
        
        {/* LOGO GROUP */}
        <div className="flex items-center gap-6 lg:gap-12">
          <Link to="/" className="flex items-center gap-4 group">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-[#0F1419] text-[#D4AF37] rounded-xl flex items-center justify-center font-black italic text-xl border border-[#D4AF37]/20 group-hover:rotate-90 transition-transform duration-300">
              U
            </div>
            <div className="flex flex-col">
              <span className="text-lg md:text-xl font-black text-[#0F1419] uppercase tracking-tighter leading-none italic">Udaaro</span>
              <span className="text-[7px] md:text-[8px] font-black text-[#D4AF37] uppercase tracking-[0.4em] italic mt-1">Sovereign_OS</span>
            </div>
          </Link>
          <div className="hidden lg:block border-l border-slate-200 pl-10">
            <TelemetryBadge />
          </div>
        </div>

        {/* NAVIGATION LINKS */}
        <div className="hidden md:flex items-center gap-10">
          {NAV_CLUSTERS.map((node, i) => (
            <div 
              key={node.path} 
              className="relative py-2"
              onMouseEnter={() => setActiveHover(i)}
              onMouseLeave={() => setActiveHover(null)}
            >
              <Link 
                to={node.path}
                className={`text-[10px] font-black uppercase tracking-[0.4em] italic transition-colors ${
                  location.pathname === node.path ? "text-[#D4AF37]" : "text-slate-500 hover:text-[#0F1419]"
                }`}
              >
                {node.name}
              </Link>

              {/* Mega Dropdown */}
              <AnimatePresence>
                {activeHover === i && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 pt-6 w-[350px]"
                  >
                    <div className="bg-[#0F1419] rounded-[2rem] p-8 border border-[#D4AF37]/20 shadow-2xl">
                      <h6 className="text-[9px] font-black text-[#D4AF37] uppercase tracking-[0.5em] mb-4">{node.detail}</h6>
                      <p className="text-[11px] text-slate-400 italic mb-6 leading-relaxed">"{node.description}"</p>
                      <div className="space-y-3">
                        {node.subNodes.map((sub, si) => (
                          <div key={si} className="p-4 bg-white/5 rounded-2xl hover:bg-[#D4AF37]/10 border border-transparent hover:border-[#D4AF37]/20 transition-all cursor-pointer flex justify-between items-center group/item">
                            <div>
                              <p className="text-[10px] font-black text-white uppercase tracking-widest">{sub.label}</p>
                              <p className="text-[8px] font-bold text-slate-500 uppercase">{sub.detail}</p>
                            </div>
                            <ArrowUpRight size={14} className="text-slate-600 group-hover/item:text-[#D4AF37]" />
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

        {/* UTILITY BUTTONS */}
        <div className="hidden md:flex items-center gap-6">
          <Link to="/admin-login" title="Terminal" className="w-12 h-12 flex items-center justify-center bg-slate-50 border border-slate-200 rounded-xl text-slate-400 hover:text-[#0F1419] hover:bg-white transition-all shadow-sm">
            <Terminal size={18} />
          </Link>
          <Link to="/apply" className="px-8 lg:px-10 py-4 bg-[#0F1419] text-white rounded-xl text-[10px] font-black uppercase tracking-[0.4em] italic hover:bg-[#D4AF37] transition-all shadow-lg whitespace-nowrap">
            Join_Batch_2026
          </Link>
        </div>

        {/* MOBILE MENU TRIGGER */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          aria-label="Toggle Menu"
          className="md:hidden p-3 bg-white border border-slate-200 rounded-xl z-[1100]"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* MOBILE FULL-SCREEN OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, x: "100%" }} 
            animate={{ opacity: 1, x: 0 }} 
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-[#FDF9F3] z-[1050] md:hidden pt-32 px-6 flex flex-col gap-4 overflow-y-auto"
          >
            {NAV_CLUSTERS.map((node) => (
              <Link 
                key={node.path} 
                to={node.path} 
                className="p-6 bg-white border border-slate-100 rounded-3xl flex justify-between items-center shadow-sm"
              >
                <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-[#D4AF37] uppercase mb-1">{node.detail}</span>
                    <span className="text-lg font-black uppercase italic text-[#0F1419]">{node.name}</span>
                </div>
                <ChevronRight size={20} className="text-[#D4AF37]" />
              </Link>
            ))}
            <Link to="/apply" className="w-full py-6 bg-[#0F1419] text-white rounded-3xl text-center font-black uppercase tracking-[0.5em] italic mt-6 shadow-xl">
              Initiate_Admission
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}