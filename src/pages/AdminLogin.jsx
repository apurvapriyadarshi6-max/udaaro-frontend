import React, { useState, useEffect, useMemo } from "react";
import { BrowserRouter as Router, Routes, Route, Link, Navigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { 
  Shield, Zap, Crown, Fingerprint, ArrowUpRight, Lock, Workflow, ChevronRight
} from "lucide-react";

/** * MODULE 1: SECURITY & HANDSHAKE LOGIC
 * Refined for robust error handling and token lifecycle management.
 */
const analyzeHandshake = (token) => {
  try {
    if (!token) return { valid: false, reason: "NULL_NODE" };
    // Split and decode the JWT payload
    const parts = token.split(".");
    if (parts.length !== 3) return { valid: false, reason: "INVALID_FORMAT" };
    
    const payload = JSON.parse(atob(parts[1]));
    const isExpired = Date.now() >= payload.exp * 1000;
    
    return { 
      valid: !isExpired, 
      payload, 
      remaining: (payload.exp * 1000) - Date.now() 
    };
  } catch (err) { 
    return { valid: false, reason: "MALFORMED_HANDSHAKE" }; 
  }
};

const ProtectedHandshake = ({ children }) => {
  const [isVerifying, setIsVerifying] = useState(true);
  const [auth, setAuth] = useState({ valid: false });
  const location = useLocation();

  useEffect(() => {
    const verify = () => {
      const token = localStorage.getItem("udaaro_access_token");
      const result = analyzeHandshake(token);
      setAuth(result);
      // UX delay to maintain "Institutional Handshake" feel
      const timer = setTimeout(() => setIsVerifying(false), 1500);
      return () => clearTimeout(timer);
    };
    verify();
  }, [location.pathname]);

  if (isVerifying) return (
    <div className="h-screen w-full bg-[#0F1419] flex flex-col items-center justify-center">
      <motion.div 
        animate={{ rotate: 360 }} 
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }} 
        className="w-24 h-24 border-2 border-[#D4AF37]/10 rounded-full flex items-center justify-center"
      >
        <div className="w-16 h-16 border-t-2 border-[#D4AF37] rounded-full animate-spin" />
      </motion.div>
      <p className="mt-8 text-[9px] font-black text-[#D4AF37] uppercase tracking-[0.6em] animate-pulse">Neural_Sync_Active</p>
    </div>
  );

  return auth.valid ? children : <Navigate to="/admin-login" state={{ from: location }} replace />;
};

/** * MODULE 2: ATOMS & UI INFRASTRUCTURE
 */
const JaliPattern = () => (
  <div className="absolute inset-0 pointer-events-none opacity-[0.03] z-0 overflow-hidden">
    <svg width="100%" height="100%" aria-hidden="true">
      <pattern id="jali" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
        <path d="M50 0 L100 50 L50 100 L0 50 Z" fill="none" stroke="currentColor" strokeWidth="0.5" />
      </pattern>
      <rect width="100%" height="100%" fill="url(#jali)" />
    </svg>
  </div>
);

const SectionHeader = ({ badge, title, subtitle, light = false }) => (
  <div className="mb-24 md:mb-32">
    <div className="flex items-center gap-4 md:gap-6 mb-8">
      <div className={`h-[1px] w-12 md:w-20 ${light ? 'bg-white/20' : 'bg-[#D4AF37]'}`} />
      <span className={`text-[9px] md:text-[10px] font-mono font-black uppercase tracking-[0.4em] ${light ? 'text-white/40' : 'text-[#D4AF37]'}`}>
        {badge}
      </span>
    </div>
    <h2 
      className={`text-5xl md:text-8xl font-black italic tracking-tighter leading-[0.9] mb-8 ${light ? 'text-white' : 'text-[#0F1419]'}`}
      dangerouslySetInnerHTML={{ __html: title }}
    />
    <p className={`text-lg md:text-xl font-medium italic max-w-2xl leading-relaxed ${light ? 'text-slate-400' : 'text-slate-500'}`}>
      {subtitle}
    </p>
  </div>
);

/** * MODULE 3: LANDING ENGINE
 */
const Landing = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);
  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0.8]);

  return (
    <div className="bg-[#FDF9F3] text-[#0F1419] font-serif selection:bg-[#D4AF37] selection:text-white">
      <JaliPattern />
      
      {/* HERO SECTION */}
      <motion.header style={{ scale, opacity }} className="relative min-h-screen flex items-center justify-center px-6 md:px-10 py-20">
        <div className="max-w-[1400px] text-center z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <div className="mb-12 md:mb-16 inline-flex items-center gap-4 px-6 py-2 md:px-8 md:py-3 bg-white border border-[#D4AF37]/20 rounded-full shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] italic text-[#0F1419]">Node: INDIA_VANGUARD_2026</span>
            </div>
            <h1 className="text-6xl md:text-[11rem] font-black uppercase italic tracking-tighter leading-[0.8] mb-12">
              Engineering <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#0F1419] via-[#D4AF37] to-[#0F1419]">Sovereignty.</span>
            </h1>
            <p className="max-w-3xl mx-auto text-lg md:text-3xl text-slate-500 font-medium leading-relaxed italic mb-16 md:mb-20">
              Udaaro is an institutional <span className="text-[#0F1419] font-black underline decoration-[#D4AF37]/40 decoration-[6px] md:decoration-[10px] underline-offset-[8px]">Execution Skeleton</span> for elite founders.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-10">
              <Link to="/apply" className="px-12 md:px-20 py-6 md:py-10 bg-[#0F1419] text-[#D4AF37] rounded-3xl md:rounded-[3rem] font-black text-[10px] md:text-[11px] uppercase tracking-[0.5em] shadow-xl hover:bg-[#D4AF37] hover:text-white transition-all italic">Initiate Protocol</Link>
              <Link to="/about" className="px-12 md:px-20 py-6 md:py-10 border-2 border-[#0F1419]/10 rounded-3xl md:rounded-[3rem] font-black text-[10px] md:text-[11px] uppercase tracking-[0.5em] hover:bg-white transition-all flex items-center justify-center gap-4 italic text-[#0F1419]">System Logic <ArrowUpRight size={18} /></Link>
            </div>
          </motion.div>
        </div>
      </motion.header>

      {/* CORE MODEL SECTION */}
      <section className="py-32 md:py-64 px-6 md:px-10 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeader 
            badge="The Operating Model"
            title="System Over <br /> Service."
            subtitle="Udaaro delivers repeatable systems that guide founders through each stage of company building—from idea to institution."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
            {[
              { id: "01", icon: Fingerprint, t: "Curated Admission", d: "Entry-stage evaluation focusing on problem clarity, founder intent, and execution capability." },
              { id: "02", icon: Workflow, t: "Strategic Synthesis", d: "Alignment with AI-driven matching systems for capital, mentorship, and opportunity mapping." },
              { id: "03", icon: Crown, t: "Global Ascension", d: "Structured scaling support ensuring startups transition into independent, scalable companies." }
            ].map((node) => (
              <motion.div 
                whileHover={{ y: -10 }}
                key={node.id} 
                className="p-10 md:p-16 bg-[#FDF9F3] border border-slate-100 hover:border-[#D4AF37]/30 rounded-[3rem] md:rounded-[5rem] transition-all group shadow-sm hover:shadow-xl"
              >
                <div className="text-4xl md:text-5xl font-black italic text-[#D4AF37]/20 group-hover:text-[#D4AF37] transition-colors mb-8 md:mb-10">{node.id}</div>
                <node.icon size={42} className="text-[#0F1419] mb-8" />
                <h4 className="text-3xl md:text-4xl font-black italic uppercase tracking-tighter mb-6 md:mb-8">{node.t}</h4>
                <p className="text-lg md:text-xl text-slate-500 leading-relaxed italic font-medium">{node.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

/** * MODULE 4: MASTER ROUTING
 */
export default function UdaaroApp() {
  return (
    <Router>
      <div className="min-h-screen selection:bg-[#D4AF37]/30">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/privacy" element={<Privacy />} />
          
          {/* Dashboard and Core Admin require ProtectedHandshake */}
          <Route path="/dashboard" element={
            <ProtectedHandshake>
              {/* <Dashboard /> component would go here */}
              <div className="p-20 font-black italic uppercase">Access_Granted: Welcome to the Command Center.</div>
            </ProtectedHandshake>
          } />

          {/* Fallback Node */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}