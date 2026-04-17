import React, { useState, useEffect, useRef, useMemo, useCallback } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence, useScroll, useTransform, useInView } from "framer-motion";
import { 
  Users, 
  Lightbulb, 
  Target, 
  Calendar, 
  Award, 
  Briefcase, 
  Mail, 
  User, 
  Star,
  CheckCircle,
  ArrowLeft,
  ChevronRight,
  Sparkles,
  Zap,
  Fingerprint,
  Compass,
  Cpu,
  Globe,
  ShieldCheck,
  Search,
  Linkedin,
  MessageSquare,
  Activity,
  Network,
  Scale,
  BrainCircuit,
  FileBadge,
  History,
  Terminal,
  ZapOff,
  AlertCircle,
  ShieldAlert,
  Dna,
  Binary,
  Microscope,
  HardDrive,
  Globe2,
  Lock,
  CpuIcon,
  Layers,
  MapPin,
  AtSign,
  Smartphone,
  Landmark,
  ShieldQuestion,
  FileCode,
  Box,
  TrendingUp,
  Workflow
} from "lucide-react";

/** * =============================================================================
 * I. INSTITUTIONAL CONFIGURATION
 * Design System: Alpha-Advisory-Sync v3.0.4
 * Architected by Apurva Priyadarshi | Cycle: 2026-Alpha
 * =============================================================================
 */

const EXPERIENCE_MATRIX = [
  { level: "Growth_Expert", label: "5+ Years Precision", focus: "Operational Logic" },
  { level: "Industry_Lead", label: "10+ Years Authority", focus: "Market Dominion" },
  { level: "Executive_Node", label: "15+ Years Architecture", focus: "Institutional Scale" },
  { level: "Board_Veteran", label: "20+ Years Legacy", focus: "Generational Governance" },
];

const STARTUP_ALIGNMENT = [
  { stage: "Validation", label: "Phase 1: Logic Synthesis", color: "blue" },
  { stage: "MVP_Sync", label: "Phase 2: Market Handshake", color: "indigo" },
  { stage: "Series_Alpha", label: "Phase 3: Capital Resonance", color: "cyan" },
  { stage: "Institutional", label: "Phase 4: Global Ascension", color: "emerald" },
];

const BANDWIDTH_PROTOCOLS = [
  "Strategic_Weekly (High Engagement)", 
  "Monthly_Pulse (Tactical Review)", 
  "On_Demand_Sync (Critical Intervention)",
  "Foundational (Governance/Board)"
];

const ADVISORY_VITAL_TELEMETRY = [
  { label: "Executive Nodes", val: "140+", sub: "Verified Pulse", color: "blue" },
  { label: "Logic Hubs", val: "12", sub: "India Regional Grid", color: "indigo" },
  { label: "Resilience Score", val: "94.2%", sub: "Survival Quotient", color: "emerald" }
];

/** * =============================================================================
 * II. UI ATOMS: PREMIUM BUILDING BLOCKS
 * =============================================================================
 */

const SectionBadgeNode = ({ text }) => (
  <motion.div 
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-blue-600/10 border border-blue-600/20 text-blue-500 text-[10px] font-black uppercase tracking-[0.5em] mb-12 backdrop-blur-xl italic"
  >
    <BrainCircuit size={14} className="animate-pulse" />
    {text}
  </motion.div>
);

const LuxuryInputTerminal = ({ label, icon: Icon, name, type = "text", placeholder, value, onChange, required = true }) => (
  <div className="space-y-4">
    <div className="flex justify-between items-center px-1">
       <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em] italic">{label}</label>
       <div className="flex items-center gap-1.5 opacity-40">
          <div className="w-1 h-1 rounded-full bg-blue-500" />
          <span className="text-[8px] font-bold text-slate-950 uppercase tracking-widest leading-none">Socket_Encrypted</span>
       </div>
    </div>
    <div className="relative group">
      <div className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-blue-600 transition-all duration-700">
        <Icon size={18} />
      </div>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full bg-slate-50 border-0 ring-1 ring-slate-200 focus:ring-2 focus:ring-blue-600 focus:bg-white rounded-[1.8rem] py-6 pl-16 pr-6 transition-all outline-none font-bold text-sm shadow-inner placeholder:text-slate-300"
        required={required}
      />
    </div>
  </div>
);

/** * =============================================================================
 * III. MAIN ARCHITECTURE: ADVISORY NODE TERMINAL
 * =============================================================================
 */

export default function Mentors() {
  const API_BASE = import.meta.env.PROD ? "https://udaaro-backend.onrender.com" : "http://localhost:5000";
  const FOUNDER_NAME = "Apurva Priyadarshi";

  // --- State Configuration ---
  const [formData, setFormData] = useState({
    name: "", email: "", expertise: "", experienceLevel: "", preferredStage: "", availability: "", linkedin: ""
  });

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [isVetting, setIsVetting] = useState(false);
  const [vettingProgress, setVettingProgress] = useState(0);

  const containerRef = useRef(null);
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (error) setError("");
  };

  const executeAdvisorSync = async (e) => {
    e.preventDefault();
    if (!formData.experienceLevel || !formData.preferredStage) {
      setError("Logical Failure: Institutional alignment nodes must be selected.");
      return;
    }

    setMessage(""); setError(""); setLoading(true);
    setIsVetting(true);

    // Simulated Vetting Logic Telemetry
    const interval = setInterval(() => {
      setVettingProgress(prev => (prev < 100 ? prev + 1 : 100));
    }, 30);

    setTimeout(async () => {
      try {
        const response = await fetch(`${API_BASE}/api/mentors`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        const data = await response.json();

        if (response.ok) {
          setMessage("Credential Synchronization Successful. The Alpha Council will initiate the handshake protocol via your terminal email.");
          clearInterval(interval);
          setVettingProgress(100);
        } else {
          setError(data.message || "Credential verification failed. Access Stalled.");
          setIsVetting(false);
          clearInterval(interval);
        }
      } catch (err) {
        setError("Infrastructure Node Offline: Grid handshake timeout.");
        setIsVetting(false);
        clearInterval(interval);
      } finally {
        setLoading(false);
      }
    }, 3000);
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-[#fcfcfd] flex flex-col font-sans selection:bg-blue-600 selection:text-white overflow-x-hidden">
      
      {/* 1. TOP PROTOCOL NAVIGATION */}
      <nav className="p-10 fixed top-0 left-0 w-full z-[1000] bg-white/10 backdrop-blur-md border-b border-slate-200/20 sm:bg-transparent sm:border-none">
        <div className="max-w-[1800px] mx-auto flex justify-between items-center px-4">
          <Link to="/" className="flex items-center gap-4 group">
            <motion.div 
              whileHover={{ rotate: 90, scale: 1.1 }}
              className="w-12 h-12 bg-slate-950 rounded-2xl flex items-center justify-center text-white font-black italic shadow-4xl group-hover:bg-blue-600 transition-all duration-700"
            >
              U
            </motion.div>
            <div className="flex flex-col">
               <span className="text-2xl font-black tracking-tighter text-slate-950 uppercase italic leading-none">Udaaro</span>
               <span className="text-[9px] font-black text-blue-600 uppercase tracking-[0.5em] mt-2 italic">Advisory_Node</span>
            </div>
          </Link>
          
          <div className="flex items-center gap-10">
             <div className="hidden lg:flex items-center gap-4 px-6 py-2.5 bg-slate-950 text-white rounded-2xl shadow-3xl">
                <Activity size={12} className="text-emerald-500 animate-pulse" />
                <span className="text-[9px] font-black uppercase tracking-[0.4em] italic leading-none">Council_Grid: Active</span>
             </div>
             <Network className="text-blue-600" size={28} />
          </div>
        </div>
      </nav>

      <main className="flex-grow flex flex-col lg:flex-row pt-28 lg:pt-0">
        
        {/* 2. LEFT SECTOR: ADVISORY BRANDING & TELEMETRY */}
        <section className="lg:w-[45%] bg-blue-600 p-12 lg:p-24 text-white flex flex-col justify-between relative overflow-hidden">
          {/* Background Visual Engineering */}
          <div className="absolute inset-0 z-0 opacity-[0.12] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
          <div className="absolute top-0 right-0 w-[60vw] h-[60vw] bg-white/10 rounded-full blur-[200px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-blue-900/20 rounded-full blur-[160px] pointer-events-none" />
          
          <motion.div 
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10"
          >
            <div className="mb-24">
              <SectionBadgeNode text="Elite Advisor Admission Cycle" />
              <h1 className="text-6xl lg:text-[10rem] font-black leading-[0.8] tracking-tighter italic uppercase text-white mb-14">
                Architect <br />
                <span className="text-blue-100 underline decoration-white/30 decoration-[16px] underline-offset-[24px]">Legacy.</span>
              </h1>
              <p className="text-blue-100/80 mt-16 text-2xl md:text-3xl leading-relaxed max-w-lg font-medium italic">
                Udaaro is an incubator of excellence where industry veterans shape the structural integrity of India's sovereign economy.
              </p>
            </div>

            <div className="space-y-16 mb-24">
              {[
                { icon: <Users/>, title: "Strategic Depth", desc: "1:1 engagement with founders focused on logic-synthesis and structural resilience." },
                { icon: <Award/>, title: "Elite Peerage", desc: "Join an exclusive circle of sovereign leaders and industrial veterans in the global hub." },
                { icon: <Lightbulb/>, title: "IP Synthesis", desc: "Guide high-signal innovation nodes from conceptual raw ideas to institutional dominance." }
              ].map((prop, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + (i * 0.15) }}
                  className="flex gap-10 group cursor-default"
                >
                  <div className="flex-shrink-0 w-20 h-20 rounded-[2.5rem] bg-white/10 border border-white/20 flex items-center justify-center transition-all duration-700 group-hover:bg-white group-hover:shadow-7xl group-hover:scale-110">
                    {React.cloneElement(prop.icon, { 
                      size: 32, 
                      className: "text-white group-hover:text-blue-600 transition-all duration-500" 
                    })}
                  </div>
                  <div>
                    <h3 className="font-black text-xl uppercase tracking-tighter italic group-hover:text-blue-100 transition-colors leading-none mb-3">{prop.title}</h3>
                    <p className="text-blue-100/60 text-base leading-relaxed max-w-sm font-medium group-hover:text-white transition-colors">{prop.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* NETWORK VITAL TELEMETRY MATRIX */}
            <div className="grid grid-cols-3 gap-10 pt-16 border-t border-white/20">
               {ADVISORY_VITAL_TELEMETRY.map((stat, i) => (
                 <div key={i} className="group">
                    <p className={`text-4xl font-black italic tracking-tighter text-white leading-none mb-4 group-hover:scale-110 transition-transform origin-left duration-500`}>{stat.val}</p>
                    <p className="text-[10px] font-black text-blue-200 uppercase tracking-[0.4em] mb-2 leading-none">{stat.label}</p>
                    <p className="text-[9px] font-bold text-blue-300/40 uppercase italic tracking-widest">{stat.sub}</p>
                 </div>
               ))}
            </div>
          </motion.div>

          {/* Infrastructure & Architect Signature */}
          <div className="mt-32 lg:mt-0 relative z-10 flex flex-col md:flex-row justify-between items-end gap-12 pt-12 border-t border-white/10">
            <div className="space-y-8">
               <div className="flex items-center gap-4 text-blue-100 font-black uppercase text-[10px] tracking-[0.5em] italic">
                 <ShieldCheck size={16} className="text-white" /> Global_Advisory_Registry_v3.0
               </div>
               <div className="flex gap-6">
                  {[<Globe2/>, <CpuIcon/>, <Microscope/>].map((icon, i) => (
                    <div key={i} className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-white hover:bg-white hover:text-blue-600 transition-all duration-500 shadow-xl cursor-crosshair">
                       {React.cloneElement(icon, { size: 20 })}
                    </div>
                  ))}
               </div>
            </div>
            <div className="text-right hidden xl:block">
               <p className="text-[10px] font-black text-blue-200 uppercase tracking-[0.6em] mb-3 leading-none italic">Architected by</p>
               <p className="text-xl font-black italic tracking-tighter text-white uppercase leading-none">{FOUNDER_NAME.toUpperCase()}</p>
            </div>
          </div>
        </section>

        {/* 3. RIGHT SECTOR: ADMISSION TERMINAL (FORM) */}
        <section className="lg:w-[55%] p-8 lg:p-24 flex flex-col items-center justify-center bg-[#fdfdfe] relative overflow-y-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-3xl w-full"
          >
            <div className="bg-white rounded-[5rem] shadow-7xl p-12 lg:p-20 border border-slate-100 relative group overflow-hidden">
              
              {/* Progress Handshake System */}
              <div className="absolute top-0 left-0 w-full h-2 bg-slate-50">
                <motion.div 
                   animate={{ width: `${vettingProgress}%` }}
                   transition={{ duration: 0.5, ease: "easeOut" }}
                   className="h-full bg-blue-600 shadow-[0_0_20px_blue]" 
                />
              </div>

              {/* Terminal Interface Header */}
              <div className="mb-24 text-center relative">
                <div className="flex items-center justify-center gap-6 mb-12">
                    <div className="h-px w-16 bg-blue-100" />
                    <div className="w-16 h-16 bg-blue-50 rounded-[1.8rem] flex items-center justify-center border border-blue-100 shadow-inner">
                       <Dna className="text-blue-600 animate-bounce" size={32} />
                    </div>
                    <div className="h-px w-16 bg-blue-100" />
                </div>
                <h2 className="text-6xl md:text-7xl font-black text-slate-950 tracking-tighter leading-none mb-8 uppercase italic">Advisor Intake</h2>
                <p className="text-slate-400 text-xl font-medium italic uppercase tracking-widest opacity-60">Credential Handshake: Alpha Cycle 2026</p>
              </div>

              <AnimatePresence mode="wait">
                {message ? (
                  <motion.div 
                    initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
                    className="mb-14 p-16 bg-blue-600 rounded-[5rem] text-white shadow-7xl relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 p-12 opacity-10 rotate-12"><CheckCircle size={160} /></div>
                    <div className="flex flex-col items-center text-center relative z-10">
                       <div className="w-24 h-24 rounded-[2.5rem] bg-white/20 flex items-center justify-center border-2 border-white/20 mb-8 shadow-4xl"><ShieldCheck size={56} /></div>
                       <p className="font-black text-4xl tracking-tighter leading-none uppercase italic mb-6">Credential_Sync: SUCCESS</p>
                       <p className="text-xl opacity-90 font-medium tracking-wide leading-relaxed mb-12 uppercase italic tracking-widest">
                         {message}
                       </p>
                       <Link to="/" className="inline-flex items-center gap-4 px-12 py-6 bg-white text-blue-600 rounded-2xl font-black text-[10px] uppercase tracking-[0.4em] shadow-4xl hover:scale-105 active:scale-95 transition-all italic">
                          Return to Sovereign Node <ChevronRight size={18}/>
                       </Link>
                    </div>
                  </motion.div>
                ) : (
                  <form onSubmit={executeAdvisorSync} className="space-y-16 relative z-10">
                    
                    {/* Section 01: Lead Identity */}
                    <div className="grid md:grid-cols-2 gap-10">
                      <LuxuryInputTerminal 
                        label="Executive Identity" icon={User} name="name" 
                        placeholder="Full Legal Name" value={formData.name} onChange={handleChange} 
                      />
                      <LuxuryInputTerminal 
                        label="Corporate Terminal" icon={AtSign} name="email" type="email"
                        placeholder="executive@institution.com" value={formData.email} onChange={handleChange} 
                      />
                    </div>

                    {/* Section 02: Pulse Connectivity */}
                    <LuxuryInputTerminal 
                        label="LinkedIn Professional Pulse" icon={Linkedin} name="linkedin" 
                        placeholder="linkedin.com/in/architect-profile" value={formData.linkedin} onChange={handleChange} 
                    />

                    {/* Section 03: Decision Matrix (Industrial Experience) */}
                    <div className="space-y-12 p-12 bg-slate-50 rounded-[4rem] border border-slate-100 relative group/matrix">
                       <div className="absolute top-0 right-0 p-12 opacity-5 group-hover/matrix:opacity-10 transition-opacity"><Binary size={120}/></div>
                       
                       <div className="space-y-10 relative z-10">
                          <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.5em] ml-2 flex items-center gap-4 italic">
                             <FileBadge size={18} className="text-blue-600" /> Tenure Layer Alignment
                          </label>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                             {EXPERIENCE_MATRIX.map((item) => (
                               <button
                                 key={item.level}
                                 type="button"
                                 onClick={() => setFormData({...formData, experienceLevel: item.level})}
                                 className={`p-6 rounded-[2rem] text-left transition-all duration-700 border-2 ${
                                   formData.experienceLevel === item.level 
                                   ? "bg-slate-950 text-white border-slate-950 shadow-6xl scale-[1.03]" 
                                   : "bg-white text-slate-400 border-slate-100 hover:border-blue-300 hover:text-blue-600"
                                 }`}
                               >
                                 <div className="flex justify-between items-center mb-2">
                                    <span className="text-[13px] font-black uppercase tracking-widest leading-none italic">{item.level.replace('_', ' ')}</span>
                                    {formData.experienceLevel === item.level && (
                                       <motion.div layoutId="advisorTick" className="w-3 h-3 rounded-full bg-blue-500 shadow-[0_0_10px_blue]" />
                                    )}
                                 </div>
                                 <p className="text-[10px] font-bold opacity-60 uppercase tracking-tighter italic leading-relaxed">{item.label}</p>
                                 <div className="mt-4 pt-4 border-t border-slate-100/10 opacity-40">
                                    <span className="text-[8px] font-black uppercase tracking-widest">{item.focus}</span>
                                 </div>
                               </button>
                             ))}
                          </div>
                       </div>

                       <div className="space-y-10 relative z-10">
                          <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.5em] ml-2 flex items-center gap-4 italic">
                             <Target size={18} className="text-indigo-600" /> Preferred Venture Phase
                          </label>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                             {STARTUP_ALIGNMENT.map((item) => (
                               <button
                                 key={item.stage}
                                 type="button"
                                 onClick={() => setFormData({...formData, preferredStage: item.stage})}
                                 className={`p-6 rounded-[2rem] text-left transition-all duration-700 border-2 ${
                                   formData.preferredStage === item.stage 
                                   ? "bg-blue-600 text-white border-blue-600 shadow-6xl scale-[1.03]" 
                                   : "bg-white text-slate-400 border-slate-100 hover:border-blue-300 hover:text-blue-600"
                                 }`}
                               >
                                 <span className="text-[12px] font-black uppercase tracking-widest leading-none italic block mb-2">{item.stage.replace('_', ' ')}</span>
                                 <p className="text-[9px] font-bold opacity-70 uppercase tracking-tighter italic">{item.label}</p>
                               </button>
                             ))}
                          </div>
                       </div>
                    </div>

                    {/* Section 04: Capacity Logic */}
                    <div className="space-y-8 p-12 bg-slate-50 rounded-[4rem] border border-slate-100 relative group/band">
                       <label className="text-[10px] font-black text-blue-600 uppercase tracking-[0.5em] ml-2 flex items-center gap-4 italic">
                          <Calendar size={18} /> bandwidth synchronization
                       </label>
                       <div className="flex flex-wrap gap-4">
                          {BANDWIDTH_PROTOCOLS.map((protocol) => (
                            <button
                              key={protocol}
                              type="button"
                              onClick={() => setFormData({...formData, availability: protocol})}
                              className={`px-10 py-5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all duration-500 shadow-sm ${
                                formData.availability === protocol 
                                ? "bg-slate-950 text-white shadow-5xl scale-105" 
                                : "bg-white text-blue-400 border border-blue-100 hover:border-blue-300 hover:bg-blue-50"
                              }`}
                            >
                              {protocol}
                            </button>
                          ))}
                       </div>
                    </div>

                    {/* Vetting Telemetry Display */}
                    <AnimatePresence>
                       {isVetting && !message && (
                         <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} className="p-12 bg-slate-950 rounded-[4rem] text-white border border-blue-500/30 shadow-7xl">
                            <div className="flex justify-between items-center mb-10">
                               <div className="flex items-center gap-5">
                                  <Cpu className="text-blue-500 animate-spin" size={28} />
                                  <div>
                                     <span className="text-[11px] font-black uppercase tracking-[0.5em] italic block">Cognitive_Handshake_Active</span>
                                     <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest italic">Vetting Executive Credentials...</span>
                                  </div>
                               </div>
                               <span className="text-2xl font-black font-mono text-blue-400 italic">{vettingProgress}%</span>
                            </div>
                            <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden mb-8">
                               <motion.div animate={{ width: `${vettingProgress}%` }} className="h-full bg-blue-600 shadow-[0_0_20px_blue]" />
                            </div>
                            <div className="flex justify-between items-center opacity-40">
                               <div className="flex items-center gap-3">
                                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                  <span className="text-[8px] font-black uppercase tracking-[0.5em]">Ledger_Verification: STABLE</span>
                               </div>
                               <span className="text-[8px] font-black uppercase tracking-[0.5em]">Protocol_ID: UDA_ADV_SYNC</span>
                            </div>
                         </motion.div>
                       )}
                    </AnimatePresence>

                    {/* Primary Execution Node */}
                    <div className="pt-10">
                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-slate-950 hover:bg-blue-600 text-white font-black py-12 rounded-full shadow-7xl transition-all active:scale-[0.98] flex flex-col items-center justify-center gap-5 disabled:opacity-50 uppercase group overflow-hidden relative"
                      >
                        <div className="flex items-center gap-6 relative z-10">
                          <span className="text-lg tracking-[0.6em] italic leading-none font-black uppercase">Ascend to Advisor Rank</span>
                          <ChevronRight size={32} className="group-hover:translate-x-5 transition-transform duration-700" />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                      </button>
                    </div>

                    {/* Industrial Logic Stacks */}
                    <div className="flex items-center justify-center gap-20 mt-24 opacity-20 group-hover:opacity-60 transition-opacity duration-1000">
                       <TechNode icon={<Binary size={40}/>} label="Logic_Mesh" />
                       <TechNode icon={<Globe size={40}/>} label="Global_Sync" />
                       <TechNode icon={<Scale size={40}/>} label="Vetting_Core" />
                       <TechNode icon={<Workflow size={40}/>} label="Matrix_Init" />
                    </div>
                  </form>
                )}
              </AnimatePresence>

              {/* Protocol Alert Logging */}
              <AnimatePresence>
                 {error && (
                    <motion.div 
                      initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} 
                      className="mt-16 p-10 bg-rose-50 border border-rose-100 rounded-[3.5rem] flex items-center gap-8 text-rose-600 text-sm font-black uppercase tracking-[0.3em] shadow-2xl italic leading-relaxed"
                    >
                       <ShieldAlert size={40} /> {error}
                    </motion.div>
                 )}
              </AnimatePresence>

              <div className="mt-24 pt-14 border-t border-slate-50 text-center opacity-30">
                 <p className="text-[10px] font-black text-slate-300 uppercase tracking-[0.8em] leading-relaxed italic">
                   Udaaro Global Architecture v3.0.4 <br /> 
                   SECURE_GOVERNANCE_ADVISORY_NODE
                 </p>
              </div>
            </div>
          </motion.div>
        </section>
      </main>

      {/* 4. MASTER FOOTER: GRID METADATA */}
      <footer className="p-16 border-t border-slate-100 bg-white flex flex-col xl:flex-row justify-between items-center gap-14">
        <div className="flex items-center gap-20">
           <div className="flex items-center gap-6 group cursor-help">
              <div className="w-14 h-14 bg-slate-950 rounded-2xl flex items-center justify-center text-white font-black italic shadow-4xl text-xl group-hover:rotate-12 transition-all border border-white/10">U</div>
              <div className="flex flex-col">
                 <span className="text-xl font-black text-slate-950 tracking-tighter uppercase italic leading-none">Udaaro Advisory</span>
                 <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Global_Leadership_Grid</span>
              </div>
           </div>
           <div className="h-12 w-[1px] bg-slate-200 hidden md:block" />
           <p className="text-[12px] font-bold text-slate-400 uppercase tracking-[0.3em] flex items-center gap-6 italic">
             <ShieldCheck size={24} className="text-blue-600 animate-pulse" /> Vetted under {FOUNDER_NAME.toUpperCase()} Governance Protocol v3.0
           </p>
        </div>
        <div className="flex flex-wrap justify-center gap-14">
           <FooterUtility icon={<HardDrive size={18}/>} label="Node_Health" />
           <FooterUtility icon={<ShieldQuestion size={18}/>} label="Ethical_Charter" />
           <FooterUtility icon={<Terminal size={18}/>} label="Admin_Pulse" />
           <FooterUtility icon={<Key size={18}/>} label="Sovereign_Access" color="blue" />
        </div>
      </footer>
    </div>
  );
}

/** * =============================================================================
 * IV. ATOMIC SUB-COMPONENTS
 * ============================================================================= */

const TechNode = ({ icon, label }) => (
  <div className="flex flex-col items-center gap-5 group cursor-help">
    <div className="text-slate-400 group-hover:text-blue-600 group-hover:scale-125 transition-all duration-1000 transform group-hover:rotate-6">{icon}</div>
    <span className="text-[10px] font-black uppercase tracking-[0.6em] text-slate-400 group-hover:text-slate-950 transition-colors italic">{label}</span>
  </div>
);

const FooterUtility = ({ icon, label, color = "slate" }) => (
  <div className="flex items-center gap-5 group cursor-pointer border-b-2 border-transparent hover:border-blue-600 pb-3 transition-all duration-700">
    <div className={`text-${color}-400 group-hover:scale-125 transition-transform duration-500`}>{icon}</div>
    <span className={`text-[11px] font-black text-${color}-400 group-hover:text-slate-950 uppercase tracking-[0.5em] italic transition-colors`}>{label}</span>
  </div>
);