import React, { useState, useEffect, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
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
  Circle
} from "lucide-react";

/** * ==========================================
 * PREMIUM NAVIGATION CONFIGURATION
 * Design System: Alpha-Sync v2.8
 * ========================================== */

const NAV_LINKS = [
  { 
    name: "The Vision", 
    path: "/", 
    detail: "Mission Narrative",
    icon: <Globe size={14} className="text-blue-500" />
  },
  { 
    name: "Syndicate", 
    path: "/investors", 
    detail: "Capital Layer",
    icon: <Lock size={14} className="text-indigo-500" />
  },
  { 
    name: "Advisory", 
    path: "/mentors", 
    detail: "Elite Mentorship",
    icon: <ShieldCheck size={14} className="text-cyan-500" />
  },
];

const UTILITY_LINKS = [
  { name: "Terminal", path: "/admin-login", icon: <LayoutGrid size={14} /> },
  { name: "System Status", path: "#", icon: <Zap size={14} /> },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(null);
  const location = useLocation();

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
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
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
          ? "bg-white/60 backdrop-blur-2xl py-3 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.08)] border-b border-slate-200/40" 
          : "bg-transparent py-8"
        }`}
      >
        <div className="max-w-[1800px] mx-auto px-6 md:px-12 flex justify-between items-center">
          
          {/* ================= BRAND IDENTITY: SOVEREIGN NODE ================= */}
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center gap-4 group relative">
              <motion.div 
                whileHover={{ rotate: 90, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-11 h-11 bg-slate-950 rounded-2xl flex items-center justify-center text-white font-black italic shadow-2xl shadow-blue-500/20 group-hover:bg-blue-600 transition-all duration-500"
              >
                U
              </motion.div>
              <div className="flex flex-col">
                <span className="text-2xl font-black tracking-[-0.06em] text-slate-950 uppercase leading-none italic">
                  Udaaro
                </span>
                <div className="flex items-center gap-1.5 mt-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[8px] font-black text-slate-400 uppercase tracking-[0.4em]">
                    Sovereign_Active
                  </span>
                </div>
              </div>
            </Link>

            {/* Desktop Quick-Stats (Institutional Feel) */}
            <div className="hidden lg:flex items-center gap-4 border-l border-slate-100 pl-8 ml-2">
               <div className="flex flex-col">
                 <span className="text-[7px] font-black text-slate-300 uppercase tracking-widest">Protocol</span>
                 <span className="text-[10px] font-bold text-slate-500">v2.8.4</span>
               </div>
            </div>
          </div>

          {/* ================= DESKTOP ELITE INTERFACE ================= */}
          <div className="hidden md:flex items-center gap-12">
            <div className="flex items-center gap-10">
              {NAV_LINKS.map((link, idx) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onMouseEnter={() => setIsHovered(idx)}
                  onMouseLeave={() => setIsHovered(null)}
                  className="relative flex flex-col group"
                >
                  <div className="flex items-center gap-2">
                    <span className={`text-[12px] font-black uppercase tracking-[0.2em] transition-all duration-300 ${
                      isActive(link.path) ? "text-blue-600" : "text-slate-500 group-hover:text-slate-950"
                    }`}>
                      {link.name}
                    </span>
                    {link.icon && <div className={`opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-1 ${isActive(link.path) && 'opacity-100'}`}>{link.icon}</div>}
                  </div>
                  
                  {/* Luxury Animated Underline */}
                  <div className="absolute -bottom-1 left-0 w-full h-[1.5px] bg-slate-100 overflow-hidden">
                    <motion.div 
                      initial={{ x: "-100%" }}
                      animate={{ x: isActive(link.path) || isHovered === idx ? "0%" : "-100%" }}
                      className="w-full h-full bg-blue-600"
                    />
                  </div>
                </Link>
              ))}
            </div>

            <div className="h-6 w-[1px] bg-slate-200" />

            <div className="flex items-center gap-8">
              <Link 
                to="/admin-login" 
                className="group flex items-center gap-2.5"
              >
                <div className="p-2 bg-slate-50 rounded-lg text-slate-400 group-hover:bg-blue-50 group-hover:text-blue-600 transition-all duration-300">
                  <LayoutGrid size={15} />
                </div>
                <span className="text-[11px] font-black text-slate-500 uppercase tracking-widest group-hover:text-slate-950 transition-colors">Terminal</span>
              </Link>
              
              <Link 
                to="/apply" 
                className="relative flex items-center px-8 py-4 bg-slate-950 text-white rounded-[1.2rem] text-[11px] font-black uppercase tracking-[0.3em] shadow-2xl transition-all hover:scale-[1.03] active:scale-[0.98] group overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-3">
                  Initiate Admission 
                  <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </Link>
            </div>
          </div>

          {/* ================= MOBILE TOGGLE ================= */}
          <div className="md:hidden flex items-center gap-4">
            <Link to="/apply" className="p-3 bg-blue-600 text-white rounded-xl shadow-lg shadow-blue-500/30">
               <Zap size={18} fill="white" />
            </Link>
            <button
              className="p-3.5 text-slate-900 bg-white border border-slate-100 rounded-2xl transition-all active:scale-90 shadow-sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* ================= MOBILE EXPANDABLE OVERLAY ================= */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="fixed top-0 left-0 w-full h-screen bg-white z-[90] md:hidden pt-32 px-8 overflow-y-auto"
            >
              {/* Decorative Background Elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-[100px] opacity-60 -z-10" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-50 rounded-full blur-[100px] opacity-60 -z-10" />

              <div className="flex flex-col gap-10">
                <div className="space-y-4">
                  <span className="text-[10px] font-black text-slate-300 uppercase tracking-[0.6em] ml-2 block mb-6">Core Navigation</span>
                  <div className="grid gap-3">
                    {NAV_LINKS.map((link) => (
                      <Link
                        key={link.path}
                        to={link.path}
                        className={`group flex items-center justify-between p-6 rounded-[2rem] transition-all duration-300 border ${
                          isActive(link.path) 
                          ? "bg-slate-950 text-white border-slate-900 shadow-2xl" 
                          : "bg-slate-50/50 text-slate-600 border-slate-100 active:bg-slate-100"
                        }`}
                      >
                        <div className="flex flex-col">
                          <span className="text-base font-black uppercase tracking-widest leading-none mb-1.5">{link.name}</span>
                          <span className={`text-[9px] font-bold uppercase tracking-widest ${isActive(link.path) ? 'text-blue-400' : 'text-slate-400'}`}>
                            {link.detail}
                          </span>
                        </div>
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${isActive(link.path) ? 'bg-blue-600' : 'bg-white shadow-sm text-slate-400'}`}>
                           <ChevronRight size={18} />
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="space-y-6">
                   <span className="text-[10px] font-black text-slate-300 uppercase tracking-[0.6em] ml-2 block mb-6">System Protocols</span>
                   <div className="grid grid-cols-2 gap-4">
                      {UTILITY_LINKS.map((util) => (
                        <Link key={util.name} to={util.path} className="flex flex-col items-center gap-4 p-8 bg-white border border-slate-100 rounded-[2.5rem] shadow-sm active:scale-95 transition-all">
                           <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400">
                             {util.icon}
                           </div>
                           <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-900">{util.name}</span>
                        </Link>
                      ))}
                   </div>
                </div>

                <div className="mt-10 p-10 bg-blue-600 rounded-[3rem] shadow-2xl shadow-blue-500/40 relative overflow-hidden group">
                   <div className="absolute top-0 right-0 p-8 opacity-20"><Sparkles size={100}/></div>
                   <h4 className="text-white text-2xl font-black italic tracking-tighter leading-tight mb-4 relative z-10">Start Your <br /> Vanguard Journey.</h4>
                   <Link to="/apply" className="inline-flex items-center gap-3 px-8 py-4 bg-white text-blue-600 rounded-2xl font-black text-[10px] uppercase tracking-widest shadow-xl relative z-10">
                      Admission Desk <ArrowUpRight size={14}/>
                   </Link>
                </div>

                <div className="py-12 border-t border-slate-100 text-center">
                   <p className="text-[9px] font-black text-slate-300 uppercase tracking-[0.5em] leading-relaxed">
                     Architected by Apurva Priyadarshi <br /> 
                     Udaaro Global Governance Protocol v2.8.4
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
            className="fixed inset-0 bg-slate-950/20 backdrop-blur-md z-[80] md:hidden"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;