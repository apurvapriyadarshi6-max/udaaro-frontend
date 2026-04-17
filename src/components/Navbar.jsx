import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Menu, 
  X, 
  ChevronRight, 
  LayoutGrid, 
  ShieldCheck, 
  ArrowUpRight,
  Sparkles
} from "lucide-react";

/** * ==========================================
 * PREMIUM NAVIGATION CONFIGURATION
 * ========================================== */
const NAV_LINKS = [
  { name: "The Vision", path: "/" },
  { name: "Syndicate", path: "/investors" },
  { name: "Advisory", path: "/mentors" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Evolution of background on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Sync menu state with route changes
  useEffect(() => setIsOpen(false), [location]);

  const isActive = (path) => location.pathname === path;

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "circOut" }}
      className={`fixed top-0 w-full z-[100] transition-all duration-500 ${
        scrolled 
        ? "bg-white/70 backdrop-blur-2xl py-3 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] border-b border-slate-100/50" 
        : "bg-transparent py-7"
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
        
        {/* ================= BRAND IDENTITY ================= */}
        <Link to="/" className="flex items-center gap-3 group relative">
          <motion.div 
            whileHover={{ rotate: 90 }}
            className="w-10 h-10 bg-slate-950 rounded-xl flex items-center justify-center text-white font-black italic shadow-2xl shadow-blue-200 group-hover:bg-blue-600 transition-all duration-500"
          >
            U
          </motion.div>
          <div className="flex flex-col">
            <span className="text-xl font-black tracking-[-0.05em] text-slate-950 uppercase leading-none">
              Udaaro
            </span>
            <span className="text-[9px] font-black text-blue-600 uppercase tracking-[0.3em] mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
              Sovereign
            </span>
          </div>
        </Link>

        {/* ================= DESKTOP ELITE MENU ================= */}
        <div className="hidden md:flex items-center gap-10">
          <div className="flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="relative group"
              >
                <span className={`text-[13px] font-black uppercase tracking-widest transition-colors duration-300 ${
                  isActive(link.path) ? "text-blue-600" : "text-slate-500 group-hover:text-slate-950"
                }`}>
                  {link.name}
                </span>
                {isActive(link.path) && (
                  <motion.div 
                    layoutId="activeTab"
                    className="absolute -bottom-2 left-0 right-0 h-[2px] bg-blue-600 rounded-full"
                  />
                )}
              </Link>
            ))}
          </div>

          <div className="h-5 w-[1px] bg-slate-200" />

          <div className="flex items-center gap-6">
            <Link 
              to="/admin-login" 
              className="text-[11px] font-black text-slate-400 hover:text-blue-600 transition-all flex items-center gap-2 uppercase tracking-widest"
            >
              <LayoutGrid size={14} />
              Terminal
            </Link>
            
            <Link 
              to="/apply" 
              className="relative overflow-hidden group bg-slate-950 text-white px-7 py-3 rounded-2xl text-[12px] font-black uppercase tracking-[0.2em] shadow-2xl shadow-slate-200 transition-all hover:shadow-blue-200 active:scale-95"
            >
              <span className="relative z-10 flex items-center gap-2">
                Apply Admission <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-blue-600 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500" />
            </Link>
          </div>
        </div>

        {/* ================= MOBILE CONTROLS ================= */}
        <button
          className="md:hidden p-3 text-slate-900 bg-slate-50 rounded-2xl transition-all active:scale-90"
          onClick={() => setIsOpen(!isOpen)}
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div key="close" initial={{ rotate: -90 }} animate={{ rotate: 0 }} exit={{ rotate: 90 }}>
                <X size={22} />
              </motion.div>
            ) : (
              <motion.div key="menu" initial={{ rotate: 90 }} animate={{ rotate: 0 }} exit={{ rotate: -90 }}>
                <Menu size={22} />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* ================= MOBILE OVERLAY ================= */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-full left-0 w-full bg-white border-b border-slate-100 shadow-2xl overflow-hidden md:hidden"
          >
            <div className="p-8 flex flex-col gap-5">
              <span className="text-[10px] font-black text-slate-300 uppercase tracking-[0.5em] mb-2">Navigation</span>
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`flex items-center justify-between p-5 rounded-[2rem] text-sm font-black uppercase tracking-widest transition-all ${
                    isActive(link.path) 
                    ? "bg-blue-600 text-white shadow-xl shadow-blue-100" 
                    : "text-slate-600 bg-slate-50 hover:bg-slate-100"
                  }`}
                >
                  {link.name}
                  <ChevronRight size={18} />
                </Link>
              ))}
              
              <div className="h-[1px] bg-slate-100 my-4" />
              
              <div className="grid grid-cols-2 gap-4">
                <Link
                  to="/admin-login"
                  className="flex items-center justify-center gap-3 p-5 text-slate-500 font-black text-[11px] uppercase tracking-widest bg-slate-50 rounded-[2rem]"
                >
                  <LayoutGrid size={16} />
                  Terminal
                </Link>
                <Link
                  to="/apply"
                  className="flex items-center justify-center gap-3 p-5 bg-slate-950 text-white font-black text-[11px] uppercase tracking-widest rounded-[2rem] shadow-xl"
                >
                  Apply <Sparkles size={14} className="text-blue-400" />
                </Link>
              </div>
              
              <p className="text-center text-[9px] font-bold text-slate-300 uppercase tracking-widest mt-6">
                Architected by Apurva Priyadarshi
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

export default Navbar;