import React, { lazy, Suspense, useEffect, useState, useCallback } from "react";
import { Routes, Route, Outlet, useLocation, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { 
  ShieldX, Zap, RefreshCcw, Radio, Activity, Database, Network, 
  Command, Landmark, ShieldCheck, Wifi, WifiOff, Loader2 
} from "lucide-react";

/** * =============================================================================
 * I. INFRASTRUCTURE: CODE-SPLITTING & NODE OPTIMIZATION
 * ============================================================================= */
const Home = lazy(() => import("./pages/Home"));
const ApplyFounder = lazy(() => import("./pages/ApplyFounder"));
const Investors = lazy(() => import("./pages/Investors"));
const Mentors = lazy(() => import("./pages/Mentors"));
const Admin = lazy(() => import("./pages/Admin"));
const AdminLogin = lazy(() => import("./pages/AdminLogin"));

// Core Institutional Components
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";

/** * =============================================================================
 * II. UI ATOMS: SYSTEM TELEMETRY (LIVE MONITORING)
 * ============================================================================= */

const InfrastructureStatus = ({ isOnline, latency }) => (
  <div className="fixed bottom-8 left-8 z-[100] hidden xl:flex items-center gap-4 px-5 py-3 bg-[#0F1419]/90 backdrop-blur-2xl border border-[#D4AF37]/20 rounded-2xl shadow-2xl">
    <div className="relative">
      <div className={`w-2.5 h-2.5 rounded-full ${isOnline ? 'bg-emerald-500 animate-pulse shadow-[0_0_10px_#10b981]' : 'bg-rose-500'}`} />
    </div>
    <div className="flex flex-col">
       <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest italic">
         {isOnline ? 'System_Handshake_Stable' : 'Handshake_Failure_Node'}
       </span>
       <div className="flex items-center gap-2">
          <span className="text-[8px] font-mono text-[#D4AF37] uppercase">{latency}ms Latency</span>
          <span className="text-[7px] text-slate-600 font-bold uppercase tracking-tighter">Node: ALPHA_S01</span>
       </div>
    </div>
  </div>
);

const SovereignLoader = () => (
  <div className="fixed inset-0 bg-[#FDF9F3] z-[9999] flex flex-col items-center justify-center overflow-hidden">
    <div className="absolute inset-0 opacity-[0.03] bg-jali-grid pointer-events-none" />
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }} 
      animate={{ opacity: 1, scale: 1 }}
      className="flex flex-col items-center relative z-10"
    >
      <div className="relative mb-12">
        <motion.div animate={{ rotate: 360 }} transition={{ duration: 5, repeat: Infinity, ease: "linear" }} className="w-28 h-28 border-t-2 border-[#D4AF37] rounded-full absolute -top-6 -left-6 opacity-30" />
        <div className="w-16 h-16 bg-[#0F1419] text-[#D4AF37] rounded-2xl flex items-center justify-center font-black italic text-2xl shadow-2xl border border-[#D4AF37]/20">U</div>
      </div>
      <p className="text-[10px] font-black uppercase tracking-[1.2em] text-[#0F1419] italic animate-pulse">Synchronizing_Grid</p>
    </motion.div>
  </div>
);

/** * =============================================================================
 * III. COORDINATE RECOVERY: ERROR 404 (Sovereign Fallback)
 * ============================================================================= */

const SovereignRecovery = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0F1419] text-white p-10 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 bg-jali-grid" />
      <div className="max-w-2xl text-center relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
          <ShieldX size={100} className="text-[#D4AF37] mx-auto mb-12 stroke-[1px]" />
          <h2 className="text-6xl md:text-8xl font-black italic tracking-tighter uppercase mb-6 leading-none">Coordinate <span className="text-[#D4AF37]">Drift.</span></h2>
          <p className="text-slate-400 text-xl italic mb-12 font-medium opacity-80">Protocol node does not exist within the Udaaro Alpha Cycle Grid.</p>
          <div className="flex flex-col md:flex-row justify-center gap-8">
            <button onClick={() => navigate('/')} className="px-12 py-6 bg-[#D4AF37] text-[#0F1419] rounded-[2rem] font-black text-xs uppercase tracking-widest italic hover:scale-105 transition-all shadow-xl">Return Base</button>
            <button onClick={() => window.location.reload()} className="px-10 py-6 border border-white/20 text-white rounded-[2rem] font-black text-xs uppercase tracking-widest italic flex items-center justify-center gap-4 hover:bg-white/5 transition-all"><RefreshCcw size={16} /> Re-Sync Grid</button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

/** * =============================================================================
 * IV. LAYOUT ARCHITECTURE (Imperial Framework)
 * ============================================================================= */

const PublicLayout = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo({ top: 0, behavior: "smooth" }); }, [pathname]);

  return (
    <div className="min-h-screen bg-[#FDF9F3] selection:bg-[#D4AF37] selection:text-[#0F1419]">
      <Navbar />
      <main className="relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={pathname}
            initial={{ opacity: 0, x: -15, filter: "blur(8px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, x: 15, filter: "blur(8px)" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
      
      <footer className="py-32 border-t border-[#D4AF37]/10 bg-white relative overflow-hidden">
        <div className="max-w-[1800px] mx-auto px-12 relative z-10">
            <div className="grid lg:grid-cols-4 gap-16 items-start opacity-60">
                <div className="lg:col-span-1">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-10 h-10 bg-[#0F1419] text-[#D4AF37] rounded-xl flex items-center justify-center font-black italic shadow-xl">U</div>
                        <span className="text-xl font-black uppercase tracking-tighter italic text-[#0F1419]">Udaaro Sovereign</span>
                    </div>
                </div>
                <div className="lg:col-span-2 flex justify-center items-center gap-16">
                    <Activity size={24} className="text-[#D4AF37] opacity-50" />
                    <Database size={24} className="text-[#D4AF37] opacity-50" />
                </div>
                <div className="lg:col-span-1 flex flex-col items-end">
                    <span className="text-[11px] font-black text-[#0F1419] uppercase tracking-[0.4em] italic mb-3">© 2026 Sovereign_OS</span>
                </div>
            </div>
        </div>
      </footer>
    </div>
  );
};

/** * =============================================================================
 * V. MAIN APP ENGINE (CENTRAL COMMAND)
 * ============================================================================= */

function App() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [latency, setLatency] = useState(14);
  const location = useLocation();

  useEffect(() => {
    const handleSync = () => setIsOnline(navigator.onLine);
    window.addEventListener("online", handleSync);
    window.addEventListener("offline", handleSync);
    const interval = setInterval(() => setLatency(Math.floor(Math.random() * 5) + 12), 5000);
    return () => { clearInterval(interval); window.removeEventListener("online", handleSync); window.removeEventListener("offline", handleSync); };
  }, []);

  return (
    <div className="udaaro-sovereign-application">
      <InfrastructureStatus isOnline={isOnline} latency={latency} />
      <Suspense fallback={<SovereignLoader />}>
        <Routes location={location} key={location.pathname}>
          <Route element={<PublicLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/apply" element={<ApplyFounder />} />
            <Route path="/investors" element={<Investors />} />
            <Route path="/mentors" element={<Mentors />} />
          </Route>
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/admin/*" element={<ProtectedRoute><Admin /></ProtectedRoute>} />
          <Route path="*" element={<SovereignRecovery />} />
        </Routes>
      </Suspense>

      <div className="fixed bottom-12 right-12 z-[100] hidden md:block">
        <motion.button 
          whileHover={{ scale: 1.1, rotate: 90 }}
          whileTap={{ scale: 0.9 }}
          className="w-16 h-16 bg-[#0F1419] text-[#D4AF37] rounded-full flex items-center justify-center border-2 border-[#D4AF37] shadow-7xl relative group"
        >
          <Command size={24} />
          <div className="absolute inset-0 rounded-full animate-ping bg-[#D4AF37]/10" />
        </motion.button>
      </div>
    </div>
  );
}

export default App;