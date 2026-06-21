/** * =============================================================================
 * UDAARO INTELLIGENCE NODE & HOME MATRIX GATEWAY
 * -----------------------------------------------------------------------------
 * ARCHITECT: Apurva Priyadarshi
 * REVISION: ZERO_DRIFT_ROUTER_DECOUPLING
 * ============================================================================= */

import React, { 
  useState, useEffect, useReducer, useRef, useMemo, 
  useCallback, Suspense 
} from "react";
import { Link, useLocation, Navigate, Routes, Route } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Shield, Zap, Cpu, Fingerprint, X, Send, 
  Landmark, Globe, Activity, BarChart3, 
  ShieldCheck, Microscope, Bot, Loader2, UserCheck, Target, TrendingUp
} from "lucide-react";
import { 
  AreaChart, Area, CartesianGrid, Tooltip, ResponsiveContainer
} from "recharts";
import ReactMarkdown from 'react-markdown';

// --- I. SYSTEM CONFIGURATION ---
const UDAARO_CONFIG = {
  version: "6.1.1-Imperial",
  apiBase: "https://udaaro-backend.onrender.com",
  neuralModel: "Sovereign-LLM-v6-Turbo",
};

const THEME = {
  colors: { sandstone: "#FDF9F3", royalSlate: "#0F1419", goldLeaf: "#D4AF37" },
  typography: {
    heading: "font-serif tracking-tighter italic",
    ui: "font-mono uppercase tracking-[0.4em] text-[10px] font-black",
  }
};

// --- II. RESILIENCE WRAPPERS ---
const SovereignLoader = () => (
  <div className="fixed inset-0 z-[99999] bg-[#FDF9F3] flex flex-col items-center justify-center">
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center">
      <div className="w-32 h-32 md:w-48 md:h-48 bg-[#0F1419] rounded-[3rem] md:rounded-[4rem] flex items-center justify-center text-[#D4AF37] border-4 border-[#D4AF37]/20 relative shadow-2xl">
        <motion.span animate={{ scale: [1, 1.1, 1] }} transition={{ repeat: Infinity, duration: 2 }} className="text-5xl md:text-7xl font-black italic">U</motion.span>
      </div>
      <p className={`${THEME.typography.ui} mt-12 text-[#0F1419] animate-pulse`}>Syncing_Imperial_Grid</p>
    </motion.div>
  </div>
);

// --- IV. DATA VISUALIZATION NODES ---
const ImperialChart = ({ data }) => (
  <div className="bg-white p-8 md:p-12 rounded-[3rem] md:rounded-[4rem] shadow-2xl border border-slate-100 h-[450px] md:h-[600px] w-full">
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart data={data}>
        <defs>
          <linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#D4AF37" stopOpacity={0.3}/>
            <stop offset="95%" stopColor="#D4AF37" stopOpacity={0}/>
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#eee" />
        <Tooltip contentStyle={{ borderRadius: '1rem', border: 'none' }} />
        <Area type="monotone" dataKey="res" stroke="#D4AF37" strokeWidth={6} fill="url(#g)" />
      </AreaChart>
    </ResponsiveContainer>
  </div>
);

// --- V. MASTER CONTROL MCP ---
const MasterControl = () => {
  const chartData = useMemo(() => Array.from({ length: 12 }, (_, i) => ({
    time: `${i}h`, res: 4000 + Math.random() * 2000
  })), []);

  return (
    <div className="pt-32 pb-20 px-6 md:px-16 max-w-[1800px] mx-auto space-y-16">
       <h1 className="text-5xl md:text-8xl font-black italic uppercase tracking-tighter">Grid_Intelligence</h1>
       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-10 bg-white rounded-[3rem] border shadow-xl flex items-center justify-between">
             <div>
                <p className={THEME.typography.ui}>Grid_Resonance</p>
                <h3 className="text-4xl font-black italic">99.9%</h3>
             </div>
             <Activity className="text-[#D4AF37]" size={40} />
          </div>
          <div className="p-10 bg-white rounded-[3rem] border shadow-xl flex items-center justify-between">
             <div>
                <p className={THEME.typography.ui}>Node_Uptime</p>
                <h3 className="text-4xl font-black italic">STABLE</h3>
             </div>
             <ShieldCheck className="text-emerald-500" size={40} />
          </div>
       </div>
       <ImperialChart data={chartData} />
    </div>
  );
};

// --- VI. MAIN INTERIOR CORE ENTRY LAYOUT ---
export default function Home() {
  const [isReady, setIsReady] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => setIsReady(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!isReady) return <SovereignLoader />;

  return (
    <div className="min-h-screen bg-[#FDF9F3] selection:bg-[#D4AF37]">
      <nav className="fixed top-0 w-full z-[1000] p-6 flex justify-between items-center bg-white/70 backdrop-blur-xl border-b border-[#D4AF37]/10">
        <Link to="/" className="flex items-center gap-4">
          <div className="w-10 h-10 bg-[#0F1419] text-[#D4AF37] rounded-lg flex items-center justify-center font-black italic">U</div>
          <span className="text-xl font-black italic tracking-tighter uppercase">Udaaro</span>
        </Link>
        <div className="flex gap-8 items-center">
          <Link to="/intelligence" className={THEME.typography.ui}>Intelligence</Link>
          <Link to="/apply" className="px-6 py-2 bg-[#0F1419] text-white rounded-full text-[9px] font-black uppercase tracking-widest">Admission</Link>
        </div>
      </nav>

      <motion.main 
        key={location.pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="pt-20"
      >
        <Routes>
          <Route path="/" element={<div className="h-screen flex items-center justify-center text-8xl font-black italic uppercase tracking-tighter text-slate-900">Imperial_Home</div>} />
          <Route path="/intelligence" element={<MasterControl />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </motion.main>
    </div>
  );
}