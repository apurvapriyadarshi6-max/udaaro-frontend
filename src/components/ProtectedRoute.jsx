import React, { useState, useEffect, useMemo } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, Lock, Loader2, Fingerprint } from "lucide-react";

/**
 * SOVEREIGN UTILITY: JWT Analysis
 * High-precision token validation with safety buffers.
 */
const analyzeCredential = (token) => {
  try {
    if (!token || typeof token !== "string") return false;

    const parts = token.split(".");
    if (parts.length !== 3) return false;

    const payload = JSON.parse(
      decodeURIComponent(
        atob(parts[1])
          .split("")
          .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
          .join("")
      )
    );

    if (!payload.exp) return false;

    // Luxury Buffer: Expire 15s early to ensure session integrity during critical tasks
    const expiryTime = payload.exp * 1000;
    return Date.now() < (expiryTime - 15000);
  } catch (error) {
    return false;
  }
};

/**
 * COMPONENT: ProtectedRoute
 * The Private Gateway to the Udaaro Terminal.
 * Architected by Apurva Priyadarshi.
 */
function ProtectedRoute({ children }) {
  const [isSyncing, setIsSyncing] = useState(true);
  const [isAuthorized, setIsAuthorized] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const performSecurityHandshake = () => {
      const token = localStorage.getItem("token");
      const isValid = analyzeCredential(token);

      if (isValid) {
        setIsAuthorized(true);
      } else {
        localStorage.removeItem("token");
        setIsAuthorized(false);
      }

      // Smooth transition delay to emphasize the "Security Scan"
      const timer = setTimeout(() => setIsSyncing(false), 1200);
      return () => clearTimeout(timer);
    };

    performSecurityHandshake();
  }, [location.pathname]);

  return (
    <AnimatePresence mode="wait">
      {isSyncing ? (
        <motion.div
          key="loader"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-6 overflow-hidden"
        >
          {/* Animated Security Orb */}
          <div className="relative mb-12">
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="w-24 h-24 rounded-full border border-blue-500/30 border-t-blue-500 flex items-center justify-center"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <Fingerprint className="text-blue-500 w-10 h-10 animate-pulse" />
            </div>
            <motion.div 
              animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.5, 0.2] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute -inset-4 bg-blue-500/10 rounded-full blur-2xl"
            />
          </div>

          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            <h2 className="text-sm font-black text-white uppercase tracking-[0.5em] mb-3">
              Terminal Handshake
            </h2>
            <div className="flex items-center gap-2 text-slate-500 font-mono text-[10px] uppercase tracking-widest">
              <Lock size={10} className="text-blue-600" />
              Verifying Sovereign Credentials
            </div>
          </motion.div>

          {/* Branding Footer */}
          <div className="absolute bottom-12 text-[9px] font-black text-slate-700 uppercase tracking-[0.3em]">
            Udaaro Infrastructure • Architect: Apurva Priyadarshi
          </div>
        </motion.div>
      ) : !isAuthorized ? (
        <Navigate to="/admin-login" state={{ from: location }} replace />
      ) : (
        <motion.div
          key="content"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default ProtectedRoute;