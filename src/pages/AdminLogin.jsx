/**
 * =============================================================================
 * UDAARO SOVEREIGN VENTURE OS - SECURITY SECURITY GATEWAY
 * -----------------------------------------------------------------------------
 * ARCHITECT: Apurva Priyadarshi
 * FIX: Unified Token Vetting Middleware & Dynamic State Authorization
 * =============================================================================
 */

import React, { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { 
  KeyRound, UserCheck, ArrowRight, ShieldAlert, Fingerprint, 
  Loader2, ArrowUpRight, Workflow, Crown, ChevronRight 
} from "lucide-react";

/** * MODULE 1: SECURITY & HANDSHAKE LOGIC */
export const analyzeHandshake = (token) => {
  try {
    if (!token) return { valid: false, reason: "NULL_NODE" };
    
    // Clean split logic if token string contains 'Bearer ' descriptor
    const cleanToken = token.startsWith("Bearer ") ? token.split(" ")[1] : token;
    const parts = cleanToken.split(".");
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

/** * MODULE 2: ATOMS & UI INFRASTRUCTURE */
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

/** * MODULE 3: EXECUTABLE ADMISSION CONTROLLER */
export default function AdminLogin() {
  const [credentials, setCredentials] = useState({ id: "", key: "" });
  const [status, setStatus] = useState("READY"); // READY, SYNCING, DENIED
  const navigate = useNavigate();
  const location = useLocation();

  // Handle auto-reset for DENIED status
  useEffect(() => {
    if (status === "DENIED") {
      const timer = setTimeout(() => setStatus("READY"), 3000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  const handleAccessRequest = async (e) => {
    e.preventDefault();
    if (status === "SYNCING") return;

    setStatus("SYNCING");

    try {
      const response = await fetch("https://udaaro-backend.onrender.com/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: credentials.id.trim(),
          password: credentials.key
        })
      });

      if (response.ok) {
        const data = await response.json();
        // Pack string directly formatted for your verification middlewares
        localStorage.setItem("udaaro_access_token", `Bearer ${data.token}`);
        
        const destination = location.state?.from?.pathname || "/admin";
        navigate(destination, { replace: true });
      } else {
        setStatus("DENIED");
      }
    } catch (err) {
      console.error("[UDAARO_AUTH] COMPROMISED_HANDSHAKE_LINK:", err);
      setStatus("DENIED");
    }
  };

  return (
    <div className="min-h-screen bg-[#FDF9F3] flex items-center justify-center p-4 md:p-6 relative overflow-hidden pt-24">
      <JaliPattern />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-xl bg-white border border-[#D4AF37]/20 rounded-[3rem] md:rounded-[4rem] shadow-2xl p-8 md:p-16 relative z-10"
      >
        <div className="text-center mb-12 md:mb-16">
          <motion.div 
            whileHover={{ scale: 1.05, rotate: 5 }}
            className="w-16 h-16 md:w-20 md:h-20 bg-[#0F1419] text-[#D4AF37] rounded-[1.5rem] md:rounded-[2rem] flex items-center justify-center mx-auto mb-8 shadow-xl border border-[#D4AF37]/30"
          >
            <Fingerprint size={32} />
          </motion.div>
          <h1 className="text-3xl md:text-4xl font-black italic tracking-tighter uppercase mb-4 text-[#0F1419]">Executive Access</h1>
          <p className="text-[9px] md:text-[10px] font-black text-[#D4AF37] uppercase tracking-[0.4em] md:tracking-[0.5em] italic">Node_Identity_Verification</p>
        </div>

        <form onSubmit={handleAccessRequest} className="space-y-6 md:space-y-8">
          {/* Founder ID / Email Input */}
          <div className="space-y-2">
            <label className="text-[9px] font-black uppercase tracking-widest text-slate-400 ml-6">Founder ID / Email</label>
            <div className="relative">
              <UserCheck className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
              <input 
                required
                type="email" 
                autoComplete="username"
                className="w-full bg-slate-50 border border-slate-100 rounded-2xl md:rounded-3xl py-5 md:py-6 px-16 text-sm font-medium italic outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]/20 transition-all text-[#0F1419]"
                placeholder="Ex: admin@udaaro.com"
                value={credentials.id}
                onChange={(e) => setCredentials(prev => ({...prev, id: e.target.value}))}
              />
            </div>
          </div>

          {/* Sovereign Key Input */}
          <div className="space-y-2">
            <label className="text-[9px] font-black uppercase tracking-widest text-slate-400 ml-6">Sovereign Key</label>
            <div className="relative">
              <KeyRound className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
              <input 
                required
                type="password" 
                autoComplete="current-password"
                className="w-full bg-slate-50 border border-slate-100 rounded-2xl md:rounded-3xl py-5 md:py-6 px-16 text-sm font-medium italic outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]/20 transition-all text-[#0F1419]"
                placeholder="••••••••••••"
                value={credentials.key}
                onChange={(e) => setCredentials(prev => ({...prev, key: e.target.value}))}
              />
            </div>
          </div>

          {/* Action Button */}
          <button 
            type="submit"
            disabled={status === "SYNCING"}
            className={`w-full py-6 md:py-8 rounded-[2rem] md:rounded-[2.5rem] font-black uppercase tracking-[0.3em] md:tracking-[0.4em] italic text-[10px] md:text-xs transition-all duration-500 flex items-center justify-center gap-4 ${
              status === "DENIED" 
                ? "bg-red-600 text-white shadow-[0_0_20px_rgba(220,38,38,0.3)]" 
                : "bg-[#0F1419] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white shadow-xl active:scale-[0.98]"
            }`}
          >
            <AnimatePresence mode="wait">
              {status === "READY" && (
                <motion.div key="ready" className="flex items-center gap-3" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  Initiate Handshake <ArrowRight size={16}/>
                </motion.div>
              )}
              {status === "SYNCING" && (
                <motion.div key="sync" className="flex items-center gap-3" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  <Loader2 size={16} className="animate-spin" /> Analyzing_Logic...
                </motion.div>
              )}
              {status === "DENIED" && (
                <motion.div key="denied" className="flex items-center gap-3" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  Identity_Vetting_Failed <ShieldAlert size={16}/>
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </form>

        {/* Footer Stats */}
        <div className="mt-12 pt-8 border-t border-slate-100 flex justify-between items-center opacity-40">
           <div className="flex items-center gap-3">
             <div className={`w-1.5 h-1.5 rounded-full ${status === "DENIED" ? 'bg-red-500' : 'bg-emerald-500 animate-pulse'}`} />
             <span className="text-[8px] md:text-[9px] font-black uppercase tracking-widest">Logic_Gateway_Secure</span>
           </div>
           <span className="text-[8px] md:text-[9px] font-black uppercase tracking-widest italic">Auth_v2.9_Sovereign</span>
        </div>
      </motion.div>
    </div>
  );
}

/** * LANDING EXPORT FOR CONTEXTUAL ASSET SHARING */
export { JaliPattern, SectionHeader };