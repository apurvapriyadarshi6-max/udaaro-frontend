import React, { useState, useEffect, useMemo, useCallback } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ShieldCheck, 
  Lock, 
  Loader2, 
  Fingerprint, 
  ShieldAlert, 
  ShieldX, 
  Activity, 
  Zap, 
  Cpu, 
  Network, 
  Database,
  Terminal,
  Scan,
  RefreshCcw,
  Eye,
  KeyRound
} from "lucide-react";

/** * =============================================================================
 * I. SOVEREIGN SECURITY LOGIC
 * High-precision JWT Analysis with Safety Buffers and Payload Auditing.
 * Architected by Apurva Priyadarshi | Version: 2.9.2 Alpha
 * =============================================================================
 */

const SECURITY_PROTOCOL = {
  expiryBuffer: 30000, // 30s Buffer for critical terminal operations
  handshakeDelay: 1600, // UX delay to emphasize infrastructure scan
  nodeID: "UDAARO_SECURITY_NODE_09"
};

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
 * II. UI ATOMS: SECURITY VISUALIZERS
 * =============================================================================
 */

const SecurityHandshakeLoader = ({ progress }) => (
  <div className="flex flex-col items-center">
    <div className="relative mb-16">
      {/* Outer Rotating Protocol Ring */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="w-32 h-32 rounded-full border-2 border-dashed border-blue-500/20 flex items-center justify-center"
      />
      
      {/* Inner Active Scanning Ring */}
      <motion.div 
        animate={{ rotate: -360 }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 w-32 h-32 rounded-full border-t-2 border-blue-500 shadow-[0_0_20px_rgba(37,99,235,0.4)]"
      />

      {/* Biometric Simulation Core */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="bg-slate-900 p-6 rounded-3xl shadow-2xl border border-white/5"
        >
          <Fingerprint className="text-blue-500 w-10 h-10" />
        </motion.div>
      </div>

      {/* Scanning Laser Effect */}
      <motion.div 
        animate={{ top: ["0%", "100%", "0%"] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-0 right-0 h-[2px] bg-blue-400/50 shadow-[0_0_15px_blue] z-20 pointer-events-none"
      />
    </div>

    <div className="text-center space-y-4">
      <h2 className="text-sm font-black text-white uppercase tracking-[0.6em] italic ml-2">
        Terminal Handshake
      </h2>
      <div className="flex items-center justify-center gap-4">
        <div className="flex items-center gap-2 px-3 py-1 bg-white/5 rounded-lg border border-white/10">
          <Cpu size={12} className="text-blue-500" />
          <span className="text-[8px] font-mono text-slate-400 uppercase tracking-widest">Logic_Audit</span>
        </div>
        <div className="flex items-center gap-2 px-3 py-1 bg-white/5 rounded-lg border border-white/10">
          <Database size={12} className="text-emerald-500" />
          <span className="text-[8px] font-mono text-slate-400 uppercase tracking-widest">Node_Verified</span>
        </div>
      </div>
      
      {/* Logic Progress Bar */}
      <div className="w-64 h-1 bg-white/5 rounded-full overflow-hidden mt-8">
        <motion.div 
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="h-full bg-gradient-to-r from-blue-600 to-indigo-600 shadow-[0_0_10px_blue]"
        />
      </div>
    </div>
  </div>
);

/** * =============================================================================
 * III. MAIN ARCHITECTURE: PROTECTED ROUTE ENGINE
 * =============================================================================
 */

function ProtectedRoute({ children }) {
  const [isSyncing, setIsSyncing] = useState(true);
  const [authResponse, setAuthResponse] = useState({ valid: false, status: "INITIALIZING" });
  const location = useLocation();
  const navigate = useNavigate();

  const performSecurityAudit = useCallback(() => {
    const token = localStorage.getItem("token");
    const audit = analyzeSovereignCredential(token);

    if (audit.valid) {
      setAuthResponse(audit);
    } else {
      localStorage.removeItem("token");
      setAuthResponse(audit);
    }

    // High-Fidelity Handshake Delay
    const timer = setTimeout(() => {
      setIsSyncing(false);
    }, SECURITY_PROTOCOL.handshakeDelay);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    setIsSyncing(true);
    performSecurityAudit();
  }, [location.pathname, performSecurityAudit]);

  // Handle automatic session expiration
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
        /* THE SECURITY LAYER CLOAK */
        <motion.div
          key="security_cloak"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[9999] bg-slate-950 flex flex-col items-center justify-center p-10 overflow-hidden"
        >
          {/* Background Matrix Pattern */}
          <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />

          <SecurityHandshakeLoader />

          {/* Infrastructure Metadata */}
          <div className="absolute bottom-12 left-0 w-full px-12 flex justify-between items-end">
            <div className="space-y-2">
               <p className="text-[8px] font-black text-slate-700 uppercase tracking-[0.4em]">Node Cluster: {SECURITY_PROTOCOL.nodeID}</p>
               <p className="text-[8px] font-black text-slate-800 uppercase tracking-[0.4em]">Protocol Version: v2.9.2 Alpha</p>
            </div>
            <div className="text-right">
               <p className="text-[9px] font-black text-slate-500 uppercase tracking-[0.2em] italic leading-none">Architected by</p>
               <p className="text-[11px] font-black text-slate-300 uppercase tracking-tighter mt-1 italic leading-none">Apurva Priyadarshi</p>
            </div>
          </div>
        </motion.div>
      ) : !authResponse.valid ? (
        /* REDIRECTION LOGIC */
        <Navigate to="/admin-login" state={{ from: location, reason: authResponse.reason }} replace />
      ) : (
        /* THE SOVEREIGN TERMINAL */
        <motion.div
          key="terminal_mount"
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="udaaro-terminal-container"
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/** * =============================================================================
 * IV. ATOMIC UI HELPERS (OPTIONAL EXPORTS)
 * =============================================================================
 */

const SecurityBadge = ({ level = "Alpha" }) => (
  <div className="flex items-center gap-2 px-3 py-1.5 bg-blue-600/10 border border-blue-600/20 rounded-full">
    <Lock size={10} className="text-blue-600" />
    <span className="text-[8px] font-black text-blue-600 uppercase tracking-widest">Sovereign_Shield_{level}</span>
  </div>
);

export default ProtectedRoute;