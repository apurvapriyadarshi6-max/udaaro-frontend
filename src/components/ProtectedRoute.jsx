/** * =============================================================================
 * UDAARO EXECUTIVE TERMINAL - ACCESS GATEWAY
 * Design: Neo-Heritage Imperialism | Logic: Apurva Priyadarshi
 * ============================================================================= */

import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  KeyRound, 
  UserCheck, 
  Terminal, 
  ArrowRight, 
  ShieldAlert,
  Fingerprint
} from "lucide-react";

export default function AdminLogin() {
  const [credentials, setCredentials] = useState({ id: "", key: "" });
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const [status, setStatus] = useState("READY"); // READY, SYNCING, DENIED
  const navigate = useNavigate();
  const location = useLocation();

  const handleAccessRequest = async (e) => {
    e.preventDefault();
    setIsAuthenticating(true);
    setStatus("SYNCING");

    // Simulate Institutional Logic Audit
    setTimeout(() => {
      if (credentials.id === "AP_2026" && credentials.key === "SOVEREIGN_VOS") {
        const mockToken = `header.${btoa(JSON.stringify({ 
          id: "AP_2026", 
          exp: Math.floor(Date.now() / 1000) + 3600 
        }))}.signature`;
        
        localStorage.setItem("token", mockToken);
        navigate(location.state?.from?.pathname || "/dashboard");
      } else {
        setStatus("DENIED");
        setIsAuthenticating(false);
        setTimeout(() => setStatus("READY"), 3000);
      }
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-[#FDF9F3] flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background Jali Pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <svg width="100%" height="100%"><pattern id="jali-bg" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse"><path d="M60 0 L120 60 L60 120 L0 60 Z" fill="none" stroke="black" strokeWidth="1" /></pattern><rect width="100%" height="100%" fill="url(#jali-bg)" /></svg>
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-xl bg-white border border-[#D4AF37]/20 rounded-[4rem] shadow-2xl p-16 relative z-10"
      >
        <div className="text-center mb-16">
          <div className="w-20 h-20 bg-[#0F1419] text-[#D4AF37] rounded-[2rem] flex items-center justify-center mx-auto mb-10 shadow-xl border border-[#D4AF37]/30">
            <Fingerprint size={36} />
          </div>
          <h1 className="text-4xl font-black italic tracking-tighter uppercase mb-4">Executive Access</h1>
          <p className="text-[10px] font-black text-[#D4AF37] uppercase tracking-[0.5em] italic">Node_Identity_Verification</p>
        </div>

        <form onSubmit={handleAccessRequest} className="space-y-8">
          <div className="space-y-2">
            <label className="text-[9px] font-black uppercase tracking-widest text-slate-400 ml-6">Founder ID</label>
            <div className="relative">
              <UserCheck className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
              <input 
                type="text" 
                className="w-full bg-slate-50 border border-slate-100 rounded-3xl py-6 px-16 text-sm font-medium italic outline-none focus:border-[#D4AF37] transition-all"
                placeholder="Ex: AP_2026"
                value={credentials.id}
                onChange={(e) => setCredentials({...credentials, id: e.target.value})}
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[9px] font-black uppercase tracking-widest text-slate-400 ml-6">Sovereign Key</label>
            <div className="relative">
              <KeyRound className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
              <input 
                type="password" 
                className="w-full bg-slate-50 border border-slate-100 rounded-3xl py-6 px-16 text-sm font-medium italic outline-none focus:border-[#D4AF37] transition-all"
                placeholder="••••••••••••"
                value={credentials.key}
                onChange={(e) => setCredentials({...credentials, key: e.target.value})}
              />
            </div>
          </div>

          <button 
            type="submit"
            disabled={isAuthenticating}
            className={`w-full py-8 rounded-[2.5rem] font-black uppercase tracking-[0.4em] italic text-xs transition-all flex items-center justify-center gap-4 ${
              status === "DENIED" ? "bg-red-500 text-white" : "bg-[#0F1419] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white"
            }`}
          >
            {status === "READY" && <>Initiate Handshake <ArrowRight size={16}/></>}
            {status === "SYNCING" && <span className="animate-pulse">Analyzing_Logic...</span>}
            {status === "DENIED" && <>Identity_Vetting_Failed <ShieldAlert size={16}/></>}
          </button>
        </form>

        <div className="mt-12 pt-10 border-t border-slate-50 flex justify-between items-center opacity-40">
           <div className="flex items-center gap-3">
             <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
             <span className="text-[9px] font-black uppercase tracking-widest">Logic_Gateway_Secure</span>
           </div>
           <span className="text-[9px] font-black uppercase tracking-widest italic">Auth_v2.9_Alpha</span>
        </div>
      </motion.div>
    </div>
  );
}