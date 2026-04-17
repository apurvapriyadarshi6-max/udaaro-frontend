import React, { useState, useEffect, useMemo, useCallback, createContext, useContext } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ShieldCheck, 
  Lock, 
  Fingerprint, 
  Cpu, 
  Database,
  Terminal,
  Activity,
  ShieldAlert,
  KeyRound,
  X
} from "lucide-react";

/** * =============================================================================
 * I. SOVEREIGN SECURITY CONFIGURATION
 * Logic by: Apurva Priyadarshi | Cycle: 2026-Alpha
 * =============================================================================
 */

const SECURITY_PROTOCOL = {
  expiryBuffer: 30000, // 30s Buffer for critical terminal operations
  handshakeDelay: 1800, // UX delay for "Royal Handshake" feel
  nodeID: "UDAARO_SECURITY_NODE_09",
  version: "v2.9.2 Alpha"
};

/** * =============================================================================
 * II. SECURITY UTILS: JWT ANALYSIS ENGINE
 * =============================================================================
 */

const analyzeSovereignCredential = (token) => {
  try {
    if (!token || typeof token !== "string") return { valid: false, reason: "NULL_TOKEN" };

    const parts = token.split(".");
    if (parts.length !== 3) return { valid: false, reason: "MALFORMED_STRUCTURE" };

    // Decode Payload with Unicode Support
    const payload = JSON.parse(
      decodeURIComponent(
        atob(parts[1])
          .split("")
          .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
          .join("")
      )
    );

    if (!payload.exp) return { valid: false, reason: "MISSING_EXPIRY" };

    const currentTime = Date.now();
    const expiryTime = payload.exp * 1000;
    const isActive = currentTime < (expiryTime - SECURITY_PROTOCOL.expiryBuffer);

    return {
      valid: isActive,
      payload: payload,
      remaining: expiryTime - currentTime,
      status: isActive ? "AUTHORIZED" : "TOKEN_EXPIRED"
    };
  } catch (error) {
    return { valid: false, reason: "PARSING_ERROR" };
  }
};

/** * =============================================================================
 * III. UI COMPONENT: THE ROYAL HANDSHAKE LOADER
 * =============================================================================
 */

const SecurityHandshakeLoader = () => (
  <div className="flex flex-col items-center">
    <div className="relative mb-20">
      {/* Imperial Outer Ring */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="w-40 h-40 rounded-full border border-[#D4AF37]/20 flex items-center justify-center"
      />
      
      {/* Active Scanning Arc */}
      <motion.div 
        animate={{ rotate: -360 }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 w-40 h-40 rounded-full border-t-2 border-[#D4AF37] shadow-[0_0_25px_rgba(212,175,55,0.3)]"
      />

      {/* Core Identity Plate */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          animate={{ scale: [1, 1.05, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="bg-[#0F1419] p-8 rounded-[2rem] shadow-2xl border border-[#D4AF37]/30"
        >
          <Fingerprint className="text-[#D4AF37] w-12 h-12" />
        </motion.div>
      </div>

      {/* Laser Scanning Line */}
      <motion.div 
        animate={{ top: ["10%", "90%", "10%"] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-6 right-6 h-[1px] bg-[#D4AF37]/60 shadow-[0_0_15px_#D4AF37] z-20 pointer-events-none"
      />
    </div>

    <div className="text-center space-y-6">
      <h2 className="text-sm font-black text-[#0F1419] uppercase tracking-[0.8em] italic ml-4">
        Handshake Protocol
      </h2>
      <div className="flex items-center justify-center gap-6">
        <div className="flex items-center gap-2 px-4 py-2 bg-white border border-[#D4AF37]/20 rounded-xl">
          <Cpu size={14} className="text-[#D4AF37]" />
          <span className="text-[9px] font-black text-[#0F1419] uppercase tracking-widest italic">Logic_Audit</span>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 bg-white border border-emerald-100 rounded-xl">
          <Database size={14} className="text-emerald-500" />
          <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest italic">Node_Safe</span>
        </div>
      </div>
      
      {/* Progress Bar */}
      <div className="w-72 h-[2px] bg-slate-100 rounded-full overflow-hidden mt-10">
        <motion.div 
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.8, ease: "easeInOut" }}
          className="h-full bg-gradient-to-r from-[#0F1419] to-[#D4AF37]"
        />
      </div>
    </div>
  </div>
);

/** * =============================================================================
 * IV. MAIN ARCHITECTURE: PROTECTED ROUTE ENGINE
 * =============================================================================
 */

function ProtectedRoute({ children }) {
  const [isSyncing, setIsSyncing] = useState(true);
  const [authResponse, setAuthResponse] = useState({ valid: false, status: "INITIALIZING" });
  const location = useLocation();

  const performSecurityAudit = useCallback(() => {
    const token = localStorage.getItem("token");
    const audit = analyzeSovereignCredential(token);

    if (audit.valid) {
      setAuthResponse(audit);
    } else {
      localStorage.removeItem("token");
      setAuthResponse(audit);
    }

    // High-Fidelity UX Handshake Delay
    const timer = setTimeout(() => {
      setIsSyncing(false);
    }, SECURITY_PROTOCOL.handshakeDelay);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    setIsSyncing(true);
    performSecurityAudit();
  }, [location.pathname, performSecurityAudit]);

  // Session Auto-Expiry Handler
  useEffect(() => {
    if (authResponse.valid && authResponse.remaining > 0) {
      const autoLogout = setTimeout(() => {
        setIsSyncing(true);
        performSecurityAudit();
      }, authResponse.remaining);
      return () => clearTimeout(autoLogout);
    }
  }, [authResponse, performSecurityAudit]);

  return (
    <AnimatePresence mode="wait">
      {isSyncing ? (
        /* THE ROYAL SECURITY CLOAK */
        <motion.div
          key="security_cloak"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[9999] bg-[#FDF9F3] flex flex-col items-center justify-center p-10 overflow-hidden"
        >
          {/* Background Textures */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
            <svg width="100%" height="100%"><pattern id="jali" width="100" height="100" patternUnits="userSpaceOnUse"><path d="M50 0 L100 50 L50 100 L0 50 Z" fill="none" stroke="black" strokeWidth="1"/></pattern><rect width="100%" height="100%" fill="url(#jali)"/></svg>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] bg-[#D4AF37]/5 rounded-full blur-[150px] pointer-events-none" />

          <SecurityHandshakeLoader />

          {/* Infrastructure Footer Meta */}
          <div className="absolute bottom-12 left-0 w-full px-16 flex justify-between items-end opacity-40">
            <div className="space-y-1">
               <p className="text-[9px] font-black text-[#0F1419] uppercase tracking-[0.4em] italic">Cluster: {SECURITY_PROTOCOL.nodeID}</p>
               <p className="text-[9px] font-black text-[#0F1419] uppercase tracking-[0.4em] italic">Logic: {SECURITY_PROTOCOL.version}</p>
            </div>
            <div className="text-right">
               <p className="text-[10px] font-black text-[#D4AF37] uppercase tracking-widest italic leading-none mb-1">Architect</p>
               <p className="text-[14px] font-black text-[#0F1419] uppercase tracking-tighter italic leading-none">Apurva Priyadarshi</p>
            </div>
          </div>
        </motion.div>
      ) : !authResponse.valid ? (
        /* ACCESS DENIED REDIRECTION */
        <Navigate 
          to="/admin-login" 
          state={{ from: location, reason: authResponse.reason }} 
          replace 
        />
      ) : (
        /* THE SOVEREIGN MOUNT */
        <motion.div
          key="terminal_mount"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="udaaro-sovereign-container"
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/** * =============================================================================
 * V. ATOMIC SECURITY VISUALIZERS
 * =============================================================================
 */

export const SecurityBadge = ({ level = "Alpha" }) => (
  <div className="flex items-center gap-3 px-5 py-2 bg-[#0F1419] border border-[#D4AF37]/30 rounded-full shadow-lg">
    <ShieldCheck size={14} className="text-[#D4AF37]" />
    <span className="text-[10px] font-black text-white uppercase tracking-[0.3em] italic">
      Sovereign_Shield_{level}
    </span>
  </div>
);

export default ProtectedRoute;