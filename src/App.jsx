import React, { lazy, Suspense, useEffect, useState } from "react";
import { Routes, Route, Outlet, useLocation, useNavigate } from "react-router-dom";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { 
  ShieldX, Zap, RefreshCcw, Radio, Activity, Database, Network, Command, Landmark
} from "lucide-react";

// --- I. INFRASTRUCTURE: LAZY-LOADING NODES ---
const Home = lazy(() => import("./pages/Home"));
const ApplyFounder = lazy(() => import("./pages/ApplyFounder"));
const Investors = lazy(() => import("./pages/Investors"));
const Mentors = lazy(() => import("./pages/Mentors"));
const Admin = lazy(() => import("./pages/Admin"));
const AdminLogin = lazy(() => import("./pages/AdminLogin"));

// Core Components
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";

/** * =============================================================================
 * II. UI ATOMS: SYSTEM TELEMETRY & LOADERS
 * ============================================================================= */

const InfrastructureStatus = ({ isOnline, latency }) => (
  <div className="fixed bottom-8 left-8 z-[100] hidden xl:flex items-center gap-4 px-5 py-3 bg-[#0F1419]/90 backdrop-blur-2xl border border-[#D4AF37]/20 rounded-2xl shadow-2xl">
    <div className={`w-2 h-2 rounded-full ${isOnline ? 'bg-emerald-500 animate-pulse' : 'bg-rose-500'}`} />
    <div className="flex flex-col">
       <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest italic">
         {isOnline ? 'System_Handshake_Stable' : 'Connection_Lost'}
       </span>
       <span className="text-[8px] font-mono text-[#D4AF37] uppercase">{latency}ms Latency</span>
    </div>
  </div>
);

const SovereignLoader = () => (
  <div className="fixed inset-0 bg-[#FDF9F3] z-[9999] flex flex-col items-center justify-center">
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }}
      className="flex flex-col items-center"
    >
      <div className="relative mb-12">
        <motion.div 
          animate={{ rotate: 360 }} 
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          className="w-24 h-24 border-t-2 border-[#D4AF37] rounded-full absolute -top-4 -left-4" 
        />
        <div className="w-16 h-16 bg-[#0F1419] text-[#D4AF37] rounded-2xl flex items-center justify-center font-black italic text-2xl shadow-xl">U</div>
      </div>
      <p className="text-[10px] font-black uppercase tracking-[1em] text-[#0F1419] italic animate-pulse">Synchronizing_Grid</p>
    </motion.div>
  </div>
);

/** * =============================================================================
 * III. COORDINATE RECOVERY: ERROR 404
 * ============================================================================= */

const SovereignRecovery = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0F1419] text-white p-10">
      <div className="max-w-2xl text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <ShieldX size={80} className="text-[#D4AF37] mx-auto mb-10" />
          <h2 className="text-6xl font-black italic tracking-tighter uppercase mb-6">Coordinate <span className="text-[#D4AF37]">Drift.</span></h2>
          <p className="text-slate-400 text-lg italic mb-12">Requested protocol does not exist within the Udaaro Alpha Grid.</p>
          <div className="flex justify-center gap-6">
            <button onClick={() => navigate('/')} className="px-10 py-5 bg-[#D4AF37] text-black rounded-2xl font-black text-[10px] uppercase tracking-widest italic">Return to Base</button>
            <button onClick={() => window.location.reload()} className="px-10 py-5 border border-white/20 rounded-2xl font-black text-[10px] uppercase tracking-widest italic flex items-center gap-3">
              <RefreshCcw size={14} /> Re-Sync
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

/** * =============================================================================
 * IV. LAYOUT ARCHITECTURE
 * ============================================================================= */

const PublicLayout = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo({ top: 0, behavior: "smooth" }); }, [pathname]);

  return (
    <div className="min-h-screen bg-[#FDF9F3]">
      <Navbar />
      <main className="pt-24 md:pt-32">
        <AnimatePresence mode="wait">
          <motion.div
            key={pathname}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            transition={{ duration: 0.5 }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
      <footer className="py-20 border-t border-[#D4AF37]/10 px-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center opacity-40">
           <div className="flex items-center gap-4 mb-8 md:mb-0">
              <div className="w-8 h-8 bg-[#0F1419] text-[#D4AF37] rounded-lg flex items-center justify-center font-black italic">U</div>
              <span className="text-[10px] font-black uppercase tracking-widest italic">Udaaro Global Ventures</span>
           </div>
           <div className="flex gap-10">
              <span className="text-[9px] font-black uppercase tracking-widest italic">© 2026 Sovereign_OS</span>
              <span className="text-[9px] font-black uppercase tracking-widest italic">Batch_Alpha</span>
           </div>
        </div>
      </footer>
    </div>
  );
};

/** * =============================================================================
 * V. MAIN APP ENGINE
 * ============================================================================= */

function App() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [latency, setLatency] = useState(14);

  useEffect(() => {
    const handleSync = () => setIsOnline(navigator.onLine);
    window.addEventListener("online", handleSync);
    window.addEventListener("offline", handleSync);
    const interval = setInterval(() => setLatency(Math.floor(Math.random() * 5) + 12), 4000);
    return () => { clearInterval(interval); window.removeEventListener("online", handleSync); window.removeEventListener("offline", handleSync); };
  }, []);

  return (
    <div className="udaaro-sovereign-application">
      <InfrastructureStatus isOnline={isOnline} latency={latency} />
      
      <Suspense fallback={<SovereignLoader />}>
        <Routes>
          {/* Public Routes */}
          <Route element={<PublicLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/apply" element={<ApplyFounder />} />
            <Route path="/investors" element={<Investors />} />
            <Route path="/mentors" element={<Mentors />} />
          </Route>

          {/* Authentication */}
          <Route path="/admin-login" element={<AdminLogin />} />

          {/* Protected Administration */}
          <Route path="/admin/*" element={
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>
          } />

          {/* Fallback */}
          <Route path="*" element={<SovereignRecovery />} />
        </Routes>
      </Suspense>

      {/* Floating System Handshake */}
      <div className="fixed bottom-12 right-12 z-[100] hidden md:block">
        <motion.button 
          whileHover={{ scale: 1.1, rotate: 90 }}
          whileTap={{ scale: 0.9 }}
          className="w-16 h-16 bg-[#0F1419] text-[#D4AF37] rounded-full flex items-center justify-center border-2 border-[#D4AF37] shadow-2xl group"
        >
          <Command size={24} />
          <div className="absolute inset-0 rounded-full animate-ping bg-[#D4AF37]/10" />
        </motion.button>
      </div>
    </div>
  );
}

export default App;