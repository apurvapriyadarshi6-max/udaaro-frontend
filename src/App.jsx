import React, { lazy, Suspense, useEffect, useState, useMemo, useCallback } from "react";
import { Routes, Route, Outlet, useLocation, Navigate, useNavigate } from "react-router-dom";
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
  UserCheck,
  Cpu,
  Database,
  Fingerprint,
  Network,
  Command,
  Bell,
  HardDrive,
  Radio
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
 * II. SOVEREIGN UI ATOMS & SYSTEM TELEMETRY
 * =============================================================================
 */

const InfrastructureStatus = ({ isOnline, latency }) => (
  <div className="fixed bottom-8 left-8 z-[100] hidden xl:flex items-center gap-4 px-5 py-3 bg-slate-950/90 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-3xl shadow-blue-950/20">
    <div className="relative">
       <div className={`w-2.5 h-2.5 rounded-full ${isOnline ? 'bg-emerald-500 animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.8)]' : 'bg-rose-500'}`} />
    </div>
    <div className="flex flex-col">
       <span className="text-[9px] font-black text-slate-400 uppercase tracking-[0.3em]">
         {isOnline ? 'System_Handshake_Active' : 'Handshake_Failure_Node'}
       </span>
       <div className="flex items-center gap-3 mt-1">
          <span className="text-[8px] font-mono text-blue-500 uppercase tracking-widest italic">Node: 0X_AF82</span>
          <div className="w-1 h-1 rounded-full bg-slate-700" />
          <span className="text-[8px] font-mono text-slate-500 uppercase tracking-widest">{latency}ms Latency</span>
       </div>
    </div>
  </div>
);

const ScrollProgressNode = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 35,
    restDelta: 0.001
  });

  return (
    <motion.div 
      className="fixed top-0 left-0 right-0 h-[2.5px] bg-blue-600 origin-left z-[2000] shadow-[0_0_15px_rgba(37,99,235,0.6)]" 
      style={{ scaleX }} 
    />
  );
};

/** * =============================================================================
 * III. PREMIUM LOADING & HANDSHAKE ORCHESTRATION
 * =============================================================================
 */

const SovereignLoader = () => (
  <div className="fixed inset-0 bg-[#fcfcfd] z-[9999] flex flex-col items-center justify-center overflow-hidden">
    {/* Architectural Grid Background */}
    <div className="absolute inset-0 opacity-[0.04] bg-grid-node pointer-events-none" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] bg-blue-500/5 rounded-full blur-[160px] animate-pulse" />
    
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="relative flex flex-col items-center"
    >
      {/* Brand Synchronization Node */}
      <div className="relative mb-14">
        <motion.div 
          animate={{ rotate: 360, scale: [1, 1.1, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          className="w-32 h-32 border-t-2 border-r-2 border-blue-600/30 rounded-[2.5rem] absolute -top-10 -left-10" 
        />
        <motion.div 
          animate={{ rotate: -360 }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="w-40 h-40 border-b-2 border-l-2 border-indigo-600/10 rounded-full absolute -top-14 -left-14" 
        />
        <div className="w-14 h-14 bg-slate-950 rounded-2xl flex items-center justify-center text-white font-black italic shadow-4xl relative z-10 text-xl border border-white/10">U</div>
      </div>

      {/* Protocol Sync Telemetry */}
      <div className="flex flex-col items-center w-64">
        <div className="flex justify-between items-center w-full mb-4 px-2">
          <div className="flex items-center gap-3">
            <Radio className="w-3 h-3 text-blue-600 animate-pulse" />
            <span className="text-[10px] font-black text-slate-950 uppercase tracking-[0.6em]">Node_Sync</span>
          </div>
          <span className="text-[9px] font-mono text-slate-400 font-bold tracking-widest italic">S_0X82</span>
        </div>
        
        <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden shadow-inner">
          <motion.div 
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            className="h-full bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 shadow-[0_0_15px_blue]"
          />
        </div>
        
        <div className="mt-10 flex flex-col items-center">
           <p className="text-[9px] font-black text-slate-300 uppercase tracking-[0.5em] italic text-center leading-relaxed">
             Institutional Handshake Protocol v2.9.2 <br /> 
             Architected by Apurva Priyadarshi
           </p>
        </div>
      </div>
    </motion.div>
  </div>
);

/** * =============================================================================
 * IV. COORDINATE RECOVERY: ERROR PROTOCOL 404
 * =============================================================================
 */

const SovereignRecovery = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 text-white p-12 overflow-hidden relative">
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[60vw] h-[60vw] bg-blue-600/10 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[50vw] h-[50vw] bg-indigo-900/10 rounded-full blur-[140px] pointer-events-none" />
      
      <div className="max-w-2xl w-full relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex justify-center mb-16 relative">
            <motion.div 
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="p-10 bg-white/5 border border-white/10 rounded-[3rem] backdrop-blur-2xl group hover:border-rose-500/40 transition-all duration-700 shadow-7xl shadow-blue-900/10"
            >
               <ShieldX size={80} className="text-rose-500 group-hover:scale-110 transition-transform duration-700" strokeWidth={1.5} />
            </motion.div>
            <div className="absolute -bottom-4 right-1/2 translate-x-24 px-4 py-2 bg-rose-500 text-white rounded-xl text-[9px] font-black uppercase tracking-widest shadow-2xl">Unauthorized_Zone</div>
          </div>
          
          <h1 className="text-9xl font-black tracking-tighter italic mb-6 opacity-5 select-none">ERROR_404</h1>
          <h2 className="text-5xl font-black tracking-tighter uppercase mb-8 italic leading-none">
            Coordinate <span className="text-blue-500 italic underline decoration-blue-900 decoration-[12px] underline-offset-8">Drift Detected.</span>
          </h2>
          <p className="text-slate-500 text-xl font-medium leading-relaxed mb-16 max-w-lg mx-auto italic">
            The institutional trajectory you requested is non-existent within the Udaaro Alpha Cycle Grid. Re-syncing is recommended.
          </p>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <button 
              onClick={() => navigate('/')}
              className="w-full md:w-auto px-16 py-7 bg-blue-600 text-white rounded-[2rem] font-black text-xs uppercase tracking-[0.4em] shadow-6xl shadow-blue-500/20 hover:bg-white hover:text-slate-950 transition-all duration-500 flex items-center justify-center gap-4 group"
            >
              <Zap size={18} fill="currentColor" className="group-hover:scale-125 transition-transform" /> Start Handshake Node
            </button>
            <button 
              onClick={() => window.location.reload()}
              className="w-full md:w-auto px-14 py-7 bg-white/5 border border-white/10 text-white rounded-[2rem] font-black text-xs uppercase tracking-[0.4em] hover:bg-white/10 transition-all duration-500 flex items-center justify-center gap-4"
            >
              <RefreshCcw size={18} className="animate-reverse-spin" /> Re-Sync Node_Grid
            </button>
          </div>
        </motion.div>
      </div>
      
      {/* Global Meta Terminal Footer */}
      <div className="absolute bottom-12 left-0 w-full px-12 flex justify-between items-end opacity-20 hidden md:flex">
         <div className="flex items-center gap-4">
            <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center font-black italic text-xs">U</div>
            <div className="text-[10px] font-mono tracking-[0.3em] uppercase leading-relaxed">
              LAT_GRID: 28.6139° N <br />
              LON_GRID: 77.2090° E
            </div>
         </div>
         <div className="text-right">
            <div className="text-[10px] font-mono tracking-[0.4em] uppercase mb-1">STATE: RECOVERY_ALPHA_01</div>
            <div className="text-[10px] font-mono tracking-[0.4em] uppercase">SYNC: HANDSHAKE_STALLED</div>
         </div>
      </div>
    </div>
  );
};

/** * =============================================================================
 * V. LAYOUT ARCHITECTURE: SOVEREIGN SPHERE
 * =============================================================================
 */

const PublicLayout = () => {
  const { pathname } = useLocation();

  // Unified Route Orchestration
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    
    // Dynamic Metadata Node Sync
    const metaMap = {
      "/": "Core Terminal",
      "/apply": "Vanguard Intake",
      "/investors": "Syndicate Portal",
      "/mentors": "Advisory Circle"
    };
    
    document.title = `UDAARO | ${metaMap[pathname] || "Alpha Node"}`;
  }, [pathname]);

  return (
    <div className="flex flex-col min-h-screen bg-[#fcfcfd] selection:bg-blue-600 selection:text-white">
      <ScrollProgressNode />
      <Navbar />
      
      <main className="flex-grow pt-0 relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={pathname}
            initial={{ opacity: 0, x: -15, filter: "blur(5px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, x: 15, filter: "blur(5px)" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Global Metadata Footer Engine */}
      <footer className="py-20 px-10 border-t border-slate-100 bg-white/60 backdrop-blur-3xl relative z-20">
         <div className="max-w-[1800px] mx-auto grid lg:grid-cols-4 gap-12 items-center">
            <div className="lg:col-span-1">
               <div className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-10 h-10 bg-slate-950 rounded-2xl flex items-center justify-center text-white font-black italic text-sm shadow-xl group-hover:rotate-12 transition-transform duration-500">U</div>
                  <span className="text-[12px] font-black uppercase tracking-tighter italic">Udaaro Global Grid</span>
               </div>
            </div>
            
            <div className="lg:col-span-2 flex justify-center gap-16">
               <TelemetryNode icon={<Activity size={12}/>} label="Node_Pulse" val="Stable" color="emerald" />
               <TelemetryNode icon={<Database size={12}/>} label="Data_Grid" val="Encrypted" color="blue" />
               <TelemetryNode icon={<Network size={12}/>} label="Sync_Cluster" val="Tokyo_B" color="indigo" />
            </div>

            <div className="lg:col-span-1 flex justify-end gap-10">
               <div className="text-right">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1 italic">Governance_v2.9.2</p>
                  <p className="text-[9px] font-bold text-slate-300 uppercase tracking-[0.4em] leading-none">© 2026 Sovereign Assets</p>
               </div>
            </div>
         </div>
      </footer>
    </div>
  );
};

const TelemetryNode = ({ icon, label, val, color }) => (
  <div className="flex items-center gap-3 group cursor-help">
     <div className={`p-2 rounded-xl bg-${color}-50 text-${color}-600 border border-${color}-100/50 shadow-sm group-hover:scale-110 transition-transform`}>{icon}</div>
     <div className="flex flex-col">
        <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">{label}</span>
        <span className={`text-[10px] font-bold text-${color}-600 uppercase tracking-widest leading-none`}>{val}</span>
     </div>
  </div>
);

/** * =============================================================================
 * VI. MAIN APP ENGINE: CENTRAL COMMAND
 * =============================================================================
 */

function App() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [latency, setLatency] = useState(14);

  // Network Sensitivity & Latency Simulation
  useEffect(() => {
    const handleConnect = () => setIsOnline(true);
    const handleDisconnect = () => setIsOnline(false);
    
    window.addEventListener("online", handleConnect);
    window.addEventListener("offline", handleDisconnect);

    const jitter = setInterval(() => {
       setLatency(Math.floor(Math.random() * (18 - 12 + 1)) + 12);
    }, 5000);

    return () => {
      window.removeEventListener("online", handleConnect);
      window.removeEventListener("offline", handleDisconnect);
      clearInterval(jitter);
    };
  }, []);

  return (
    <div className="udaaro-sovereign-application h-full w-full relative">
      <InfrastructureStatus isOnline={isOnline} latency={latency} />
      
      <Suspense fallback={<SovereignLoader />}>
        <Routes>
          
          {/* 1. PUBLIC VANGUARD LAYER */}
          <Route element={<PublicLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/apply" element={<ApplyFounder />} />
            <Route path="/investors" element={<Investors />} />
            <Route path="/mentors" element={<Mentors />} />
          </Route>

          {/* 2. SECURITY SECTOR (ADMISSION) */}
          <Route path="/admin-login" element={
            <AnimatePresence mode="wait">
              <motion.div 
                initial={{ opacity: 0, scale: 0.98 }} 
                animate={{ opacity: 1, scale: 1 }} 
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <AdminLogin />
              </motion.div>
            </AnimatePresence>
          } />

          {/* 3. GOVERNANCE SECTOR (CENTRAL COMMAND) */}
          <Route
            path="/admin/*"
            element={
              <ProtectedRoute>
                <motion.div
                  initial={{ opacity: 0, filter: "blur(10px)" }}
                  animate={{ opacity: 1, filter: "blur(0px)" }}
                  transition={{ duration: 0.7 }}
                  className="udaaro-admin-sphere"
                >
                  <Admin />
                </motion.div>
              </ProtectedRoute>
            }
          />

          {/* 4. RECOVERY SECTOR (FALLBACK) */}
          <Route path="*" element={<SovereignRecovery />} />

        </Routes>
      </Suspense>

      {/* Floating System Handshake Action */}
      <div className="fixed bottom-12 right-12 z-[100] hidden md:block">
         <motion.button 
            whileHover={{ scale: 1.1, rotate: 90, boxShadow: "0 0 30px rgba(37,99,235,0.4)" }}
            whileTap={{ scale: 0.9 }}
            className="w-16 h-16 bg-slate-950 text-white rounded-[2rem] flex items-center justify-center border-2 border-white shadow-7xl relative group"
         >
            <Command size={24} className="group-hover:text-blue-500 transition-colors" />
            <div className="absolute top-0 right-0 w-4 h-4 bg-blue-600 rounded-full border-4 border-slate-950" />
            <div className="absolute inset-0 rounded-[2rem] bg-blue-600/10 animate-ping opacity-20 pointer-events-none" />
         </motion.button>
      </div>
    </div>
  );
}

export default App;