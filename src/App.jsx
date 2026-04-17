import React, { lazy, Suspense, useEffect, useState, useMemo } from "react";
import { Routes, Route, Outlet, useLocation, Navigate } from "react-router-dom";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { 
  Loader2, 
  ShieldAlert, 
  Wifi, 
  WifiOff, 
  Lock, 
  Globe, 
  Zap, 
  ShieldCheck,
  RefreshCcw,
  Terminal,
  Activity,
  UserCheck
} from "lucide-react";

/** * =============================================================================
 * I. INFRASTRUCTURE CONFIGURATION & CODE SPLITTING
 * Code-splitting optimizes the "Initial Handshake" (First Contentful Paint).
 * Architected by Apurva Priyadarshi for Alpha Cycle 2026.
 * =============================================================================
 */

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
 * II. SOVEREIGN UI ATOMS
 * =============================================================================
 */

const InfrastructureStatus = ({ isOnline }) => (
  <div className="fixed bottom-6 left-6 z-[100] hidden md:flex items-center gap-3 px-4 py-2 bg-slate-950/80 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl">
    <div className={`w-2 h-2 rounded-full ${isOnline ? 'bg-emerald-500 animate-pulse' : 'bg-rose-500'}`} />
    <span className="text-[8px] font-black text-slate-400 uppercase tracking-[0.3em]">
      {isOnline ? 'Network_Synchronized' : 'Handshake_Failed'}
    </span>
    <div className="h-3 w-[1px] bg-white/10 mx-1" />
    <span className="text-[8px] font-mono text-blue-500 uppercase tracking-widest">UDAARO_NODE_01</span>
  </div>
);

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div 
      className="fixed top-0 left-0 right-0 h-[2px] bg-blue-600 origin-left z-[1000] shadow-[0_0_10px_rgba(37,99,235,0.5)]" 
      style={{ scaleX }} 
    />
  );
};

/** * =============================================================================
 * III. PREMIUM LOADING ORCHESTRATION
 * =============================================================================
 */

const SovereignLoader = () => (
  <div className="fixed inset-0 bg-[#fdfdfe] z-[9999] flex flex-col items-center justify-center overflow-hidden">
    {/* Background Pattern */}
    <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none" />
    
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="relative flex flex-col items-center"
    >
      {/* Brand Node */}
      <div className="relative mb-10">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="w-24 h-24 border-t-2 border-r-2 border-blue-600/20 rounded-full absolute -top-6 -left-6" 
        />
        <div className="w-12 h-12 bg-slate-950 rounded-2xl flex items-center justify-center text-white font-black italic shadow-2xl relative z-10">U</div>
      </div>

      {/* Sync Status */}
      <div className="flex flex-col items-center">
        <div className="flex items-center gap-3 mb-4">
          <Loader2 className="w-4 h-4 text-blue-600 animate-spin" />
          <span className="text-[10px] font-black text-slate-900 uppercase tracking-[0.6em]">Protocol_Sync</span>
        </div>
        <div className="w-48 h-[1px] bg-slate-100 rounded-full overflow-hidden">
          <motion.div 
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 2, repeat: Infinity }}
            className="h-full bg-blue-600"
          />
        </div>
        <p className="mt-8 text-[9px] font-bold text-slate-300 uppercase tracking-[0.4em] italic">Architected by Apurva Priyadarshi</p>
      </div>
    </motion.div>
  </div>
);

/** * =============================================================================
 * IV. COORDINATE RECOVERY (404 ERROR)
 * =============================================================================
 */

const SovereignRecovery = () => (
  <div className="min-h-screen flex items-center justify-center bg-slate-950 text-white p-10 overflow-hidden relative">
    {/* Decorative Elements */}
    <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-blue-600/10 rounded-full blur-[120px]" />
    <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-indigo-600/10 rounded-full blur-[100px]" />
    
    <div className="max-w-xl w-full relative z-10 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "circOut" }}
      >
        <div className="flex justify-center mb-12">
          <div className="p-6 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-xl group hover:border-rose-500/50 transition-all duration-500">
             <ShieldAlert size={64} className="text-rose-500 group-hover:scale-110 transition-transform" />
          </div>
        </div>
        
        <h1 className="text-8xl font-black tracking-tighter italic mb-4 opacity-10">ERROR_404</h1>
        <h2 className="text-4xl font-black tracking-tighter uppercase mb-6 italic leading-none">
          Trajectory <span className="text-blue-500">Compromised.</span>
        </h2>
        <p className="text-slate-500 text-lg font-medium leading-relaxed mb-12 max-w-md mx-auto">
          The coordinate matrix you entered does not exist within the current Udaaro Alpha infrastructure.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <a 
            href="/" 
            className="px-12 py-5 bg-blue-600 text-white rounded-2xl font-black text-[11px] uppercase tracking-[0.3em] shadow-2xl shadow-blue-500/30 hover:bg-white hover:text-slate-950 transition-all flex items-center justify-center gap-3"
          >
            <Zap size={14} fill="currentColor" /> Return to Core Terminal
          </a>
          <button 
            onClick={() => window.location.reload()}
            className="px-12 py-5 bg-white/5 border border-white/10 text-white rounded-2xl font-black text-[11px] uppercase tracking-[0.3em] hover:bg-white/10 transition-all flex items-center justify-center gap-3"
          >
            <RefreshCcw size={14} /> Re-Sync Node
          </button>
        </div>
      </motion.div>
    </div>
    
    {/* Global Coordinates Footer */}
    <div className="absolute bottom-10 left-0 w-full px-10 flex justify-between items-end opacity-20">
       <div className="text-[10px] font-mono tracking-widest uppercase">LAT: 28.6139° N | LONG: 77.2090° E</div>
       <div className="text-[10px] font-mono tracking-widest uppercase">SYSTEM_STATE: RECOVERY_MODE</div>
    </div>
  </div>
);

/** * =============================================================================
 * V. LAYOUT ARCHITECTURE
 * =============================================================================
 */

const PublicLayout = () => {
  const { pathname } = useLocation();

  // Route Synchronization Logic
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    // Dynamically update document title based on coord matrix
    const pageName = pathname === "/" ? "Home" : pathname.slice(1).charAt(0).toUpperCase() + pathname.slice(2);
    document.title = `UDAARO | ${pageName} Node`;
  }, [pathname]);

  return (
    <div className="flex flex-col min-h-screen bg-[#fcfcfd]">
      <ScrollProgress />
      <Navbar />
      
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={pathname}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Global Meta Terminal (Optional Footer Layer) */}
      <footer className="py-10 px-8 border-t border-slate-100 bg-white/50 backdrop-blur-md">
         <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-4">
               <div className="w-8 h-8 bg-slate-950 rounded-lg flex items-center justify-center text-white font-black italic text-xs">U</div>
               <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">Protocol v2.8 Stable</span>
            </div>
            <div className="flex gap-8">
               <span className="text-[9px] font-black text-slate-300 uppercase tracking-widest hover:text-blue-600 transition-colors cursor-crosshair flex items-center gap-2"><Activity size={10}/> Pulse: Synchronized</span>
               <span className="text-[9px] font-black text-slate-300 uppercase tracking-widest hover:text-blue-600 transition-colors cursor-crosshair flex items-center gap-2"><Globe size={10}/> Grid: Tokyo_Global</span>
            </div>
         </div>
      </footer>
    </div>
  );
};

/** * =============================================================================
 * VI. MAIN APP ENGINE
 * =============================================================================
 */

function App() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  // Network Sensitivity Protocol
  useEffect(() => {
    const goOnline = () => setIsOnline(true);
    const goOffline = () => setIsOnline(false);
    window.addEventListener("online", goOnline);
    window.addEventListener("offline", goOffline);
    return () => {
      window.removeEventListener("online", goOnline);
      window.removeEventListener("offline", goOffline);
    };
  }, []);

  return (
    <div className="udaaro-app-terminal">
      <InfrastructureStatus isOnline={isOnline} />
      
      <Suspense fallback={<SovereignLoader />}>
        <Routes>
          
          {/* 1. PUBLIC VANGUARD SECTOR */}
          <Route element={<PublicLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/apply" element={<ApplyFounder />} />
            <Route path="/investors" element={<Investors />} />
            <Route path="/mentors" element={<Mentors />} />
          </Route>

          {/* 2. SECURITY SECTOR (Login) */}
          <Route path="/admin-login" element={
            <AnimatePresence mode="wait">
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
              >
                <AdminLogin />
              </motion.div>
            </AnimatePresence>
          } />

          {/* 3. GOVERNANCE SECTOR (Protected Admin) */}
          <Route
            path="/admin/*"
            element={
              <ProtectedRoute>
                <motion.div
                  initial={{ opacity: 0, scale: 0.99 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Admin />
                </motion.div>
              </ProtectedRoute>
            }
          />

          {/* 4. RECOVERY SECTOR (Catch-all) */}
          <Route path="*" element={<SovereignRecovery />} />

        </Routes>
      </Suspense>
    </div>
  );
}

export default App;