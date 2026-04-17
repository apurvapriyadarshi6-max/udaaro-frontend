/** * =============================================================================
 * UDAARO MASTER REPOSITORY: THE SOVEREIGN OPERATING SYSTEM (VOS)
 * -----------------------------------------------------------------------------
 * FULL SYSTEM INTEGRATION: v4.2.0 (FINAL GOLD BUILD)
 * CORE ARCHITECT: Apurva Priyadarshi (Node: INDIA_VANGUARD)
 * ============================================================================= */

import React, { useState, useEffect, useMemo, useCallback, useReducer } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, useLocation, Navigate } from "react-router-dom";
import { motion, AnimatePresence, useScroll, useSpring, useTransform } from "framer-motion";
import { 
  Shield, Zap, Cpu, Crown, Fingerprint, Box, ArrowUpRight, MessageSquare, X, Send, 
  Landmark, Binary, Network, Globe, Lock, Info, ScrollText, Users, Activity, 
  Terminal, Database, HardDrive, Compass, Layers, Target, Workflow, Search, 
  Bell, Eye, EyeOff, Loader2, ServerCrash, ShieldCheck, TrendingUp, BarChart3,
  IndianRupee, Rocket, Award, AtSign, Smartphone, MapPin, Building, Clock, Printer,
  Download, Maximize2, Hash, ExternalLink, ShieldAlert, CheckCircle2, AlertTriangle
} from "lucide-react";
import { 
  AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell 
} from "recharts";

// --- GLOBAL CONFIGURATION NODE ---
const UDAARO_CORE = {
  founder: "Apurva Priyadarshi",
  batch: "2026",
  status: "Prototype Alpha",
  api: import.meta.env.PROD ? "https://udaaro-backend.onrender.com" : "http://localhost:5000",
  version: "v4.2.0-Imperial"
};

/** * =============================================================================
 * MODULE 1: SECURITY & HANDSHAKE LOGIC
 * =============================================================================
 */

const analyzeHandshake = (token) => {
  try {
    if (!token) return { valid: false, reason: "NULL_NODE" };
    const payload = JSON.parse(atob(token.split(".")[1]));
    const isExpired = Date.now() >= payload.exp * 1000;
    return { valid: !isExpired, payload, remaining: (payload.exp * 1000) - Date.now() };
  } catch { return { valid: false, reason: "MALFORMED_HANDSHAKE" }; }
};

const ProtectedHandshake = ({ children }) => {
  const [isVerifying, setIsVerifying] = useState(true);
  const [auth, setAuth] = useState({ valid: false });
  const location = useLocation();

  useEffect(() => {
    setIsVerifying(true);
    const token = localStorage.getItem("token");
    const result = analyzeHandshake(token);
    setAuth(result);
    setTimeout(() => setIsVerifying(false), 2000); // Institutional Handshake UX
  }, [location.pathname]);

  if (isVerifying) return (
    <div className="h-screen w-full bg-[#0F1419] flex flex-col items-center justify-center">
      <motion.div animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }} className="w-32 h-32 border-2 border-[#D4AF37]/20 rounded-full flex items-center justify-center">
        <div className="w-24 h-24 border-t-2 border-[#D4AF37] rounded-full animate-spin" />
      </motion.div>
      <p className="mt-10 text-[10px] font-black text-[#D4AF37] uppercase tracking-[0.8em] animate-pulse">Neural_Sync_Active</p>
    </div>
  );

  return auth.valid ? children : <Navigate to="/admin-login" state={{ from: location }} />;
};

/** * =============================================================================
 * MODULE 2: IMPERIAL THEME ASSETS (ATOMS)
 * =============================================================================
 */

const JaliPattern = () => (
  <div className="absolute inset-0 pointer-events-none opacity-[0.03] z-0">
    <svg width="100%" height="100%">
      <pattern id="jali" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
        <path d="M60 0 L120 60 L60 120 L0 60 Z" fill="none" stroke="currentColor" strokeWidth="1" />
        <circle cx="60" cy="60" r="15" fill="none" stroke="currentColor" strokeWidth="1" />
      </pattern>
      <rect width="100%" height="100%" fill="url(#jali)" />
    </svg>
  </div>
);

const SectionHeader = ({ badge, title, subtitle, light = false }) => (
  <div className="mb-32">
    <div className="flex items-center gap-6 mb-8">
      <div className={`h-[1px] w-20 ${light ? 'bg-white/20' : 'bg-[#D4AF37]'}`} />
      <span className={`text-[10px] font-mono font-black uppercase tracking-[0.4em] ${light ? 'text-white/40' : 'text-[#D4AF37]'}`}>{badge}</span>
    </div>
    <h2 className={`text-6xl md:text-9xl font-black italic tracking-tighter leading-[0.85] mb-8 ${light ? 'text-white' : 'text-[#0F1419]'}`}>{title}</h2>
    <p className={`text-xl md:text-2xl font-medium italic max-w-2xl leading-relaxed ${light ? 'text-slate-400' : 'text-slate-500'}`}>{subtitle}</p>
  </div>
);

/** * =============================================================================
 * MODULE 3: THE SOVEREIGN LANDING ENGINE (UI/UX)
 * =============================================================================
 */

const Landing = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.9]);

  return (
    <div className="bg-[#FDF9F3] text-[#0F1419] font-serif overflow-hidden relative">
      <JaliPattern />
      
      {/* --- HERO PORTICO --- */}
      <motion.header style={{ scale }} className="relative h-screen flex items-center justify-center px-10 pt-20">
        <div className="max-w-[1500px] text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2 }}>
            <div className="mb-16 inline-flex items-center gap-5 px-8 py-3 bg-white border border-[#D4AF37]/20 rounded-full shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] italic text-[#0F1419]">Batch 2026 Alpha Online</span>
            </div>
            <h1 className="text-7xl md:text-[14rem] font-black uppercase italic tracking-tighter leading-[0.75] mb-16">
              Engineering <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#0F1419] via-[#D4AF37] to-[#0F1419]">Sovereignty.</span>
            </h1>
            <p className="max-w-4xl mx-auto text-xl md:text-4xl text-slate-500 font-medium leading-relaxed italic mb-24">
              Udaaro is an institutional <span className="text-[#0F1419] font-black underline decoration-[#D4AF37] decoration-[10px] underline-offset-[10px]">Execution Skeleton</span> for elite founders.
            </p>
            <div className="flex flex-wrap justify-center gap-10">
              <Link to="/apply" className="px-20 py-10 bg-[#0F1419] text-[#D4AF37] rounded-[3rem] font-black text-[11px] uppercase tracking-[0.6em] shadow-6xl hover:bg-[#D4AF37] hover:text-white transition-all italic">Initiate Protocol</Link>
              <Link to="/about" className="px-20 py-10 border-2 border-[#0F1419]/10 rounded-[3rem] font-black text-[11px] uppercase tracking-[0.6em] hover:bg-white transition-all flex items-center gap-4 italic">System Logic <ArrowUpRight size={18} /></Link>
            </div>
          </motion.div>
        </div>
      </motion.header>

      {/* --- OPERATING MODEL: THE VENTURE OS --- */}
      <section className="py-72 px-10 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeader 
            badge="The Operating Model"
            title="System Over <br /> Service."
            subtitle="Udaaro delivers repeatable systems that guide founders through each stage of company building—from idea to institution."
          />
          <div className="grid md:grid-cols-3 gap-16">
            {[
              { id: "01", icon: Fingerprint, t: "Curated Admission", d: "Entry-stage evaluation focusing on problem clarity, founder intent, and execution capability." },
              { id: "02", icon: Workflow, t: "Strategic Synthesis", d: "Alignment with AI-driven matching systems for capital, mentorship, and opportunity mapping." },
              { id: "03", icon: Crown, t: "Global Ascension", d: "Structured scaling support ensuring startups transition into independent, scalable companies." }
            ].map((node) => (
              <div key={node.id} className="p-16 bg-[#FDF9F3] border border-transparent hover:border-[#D4AF37]/30 rounded-[5rem] transition-all group">
                <div className="text-5xl font-black italic text-[#D4AF37]/20 group-hover:text-[#D4AF37] transition-colors mb-10">{node.id}</div>
                <node.icon size={48} className="text-[#0F1419] mb-10" />
                <h4 className="text-4xl font-black italic uppercase tracking-tighter mb-8">{node.t}</h4>
                <p className="text-xl text-slate-500 leading-relaxed italic font-medium">{node.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- RADICAL TRANSPARENCY SECTION --- */}
      <section className="py-72 px-10 bg-[#0F1419] text-white relative">
        <div className="absolute top-0 right-0 p-32 opacity-5 rotate-12 scale-150"><Shield size={800} /></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <SectionHeader 
            light
            badge="Foundational Principles"
            title="Radical <br /> Integrity."
            subtitle="Governed by honest feedback loops and realistic projections. No inflated narratives—only execution-led clarity."
          />
          <div className="grid lg:grid-cols-2 gap-32">
            <div className="space-y-20">
              <div className="flex gap-10">
                <div className="w-1.5 h-20 bg-[#D4AF37]" />
                <div>
                  <h4 className="text-4xl font-black italic uppercase mb-6">Sovereign Growth</h4>
                  <p className="text-2xl text-slate-400 italic font-medium leading-relaxed">Focus on independent scaling, avoiding growth models driven purely by external dependency.</p>
                </div>
              </div>
              <div className="flex gap-10">
                <div className="w-1.5 h-20 bg-[#D4AF37]" />
                <div>
                  <h4 className="text-4xl font-black italic uppercase mb-6">Integrated Ecosystem</h4>
                  <p className="text-2xl text-slate-400 italic font-medium leading-relaxed">Connecting founder development, capital pathways, and strategic mentorship into one loop.</p>
                </div>
              </div>
            </div>
            <div className="p-20 bg-white/5 border border-white/10 rounded-[6rem] flex flex-col items-center justify-center text-center">
              <Lock size={120} className="text-[#D4AF37] mb-12 animate-pulse" />
              <h3 className="text-4xl font-black italic uppercase tracking-tighter mb-8">Access Charter</h3>
              <p className="text-slate-500 font-black uppercase tracking-[0.5em] text-[10px] mb-12">Batch 2026 Admissions Open</p>
              <Link to="/apply" className="px-12 py-6 bg-[#D4AF37] text-[#0F1419] rounded-full font-black text-[10px] uppercase tracking-[0.4em] italic shadow-2xl">Submit Portfolio</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

/** * =============================================================================
 * MODULE 4: GOVERNANCE & PRIVACY (POLICY NODES)
 * =============================================================================
 */

const Privacy = () => (
  <div className="bg-[#FDF9F3] min-h-screen py-48 px-10">
    <div className="max-w-4xl mx-auto">
      <SectionHeader badge="Governance" title="Privacy <br /> Protocol." subtitle="Institutional data sovereignty is the bedrock of Udaaro's operating model." />
      <div className="space-y-20 font-medium text-xl italic text-slate-600 leading-relaxed">
        <p>1. <span className="text-[#0F1419] font-black uppercase">Data Autonomy:</span> All startup analysis reports and founder dashboards are encrypted using AES-256 standard protocols.</p>
        <p>2. <span className="text-[#0F1419] font-black uppercase">Vetting Privacy:</span> Founder credentials and application narratives are held within closed-loop advisory nodes.</p>
        <p>3. <span className="text-[#0F1419] font-black uppercase">The Ledger:</span> Transparent audit trails are provided for all capital matchmaking and advisory handshakes.</p>
      </div>
    </div>
  </div>
);

/** * =============================================================================
 * MODULE 5: MASTER ROUTING & WRAPPER
 * =============================================================================
 */

export default function UdaaroApp() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/privacy" element={<Privacy />} />
        {/* Protected Dashboard Nodes */}
        <Route path="/admin" element={<ProtectedHandshake><Admin /></ProtectedHandshake>} />
        {/* 404 Recovery Node */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

/** * FINAL DESIGN NOTE: 
 * This codebase represents the "Skeleton" of Udaaro Sovereign.
 * Architected by Apurva Priyadarshi for Batch 2026. 
 * Node: India_Vanguard.
 * ============================================================================= */