import React, { useState, useEffect, useRef, useMemo, useCallback } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence, useScroll, useTransform, useInView } from "framer-motion";
import { 
  Rocket, User, Mail, Phone, Building2, Tag, 
  BarChart3, CircleDollarSign, FileText, CheckCircle2, 
  ArrowLeft, Loader2, ChevronRight, Info, Sparkles, 
  ShieldCheck, Globe, Fingerprint, Cpu, ShieldAlert,
  Target, Zap, Network, Scale, Database, MessageSquare,
  Landmark, IndianRupee, ShieldQuestion, Briefcase, Activity,
  Search, Lock, Compass, Eye, Share2, ClipboardCheck,
  Dna, Binary, Microscope, HardDrive, Globe2, CpuIcon,
  Layers, MapPin, AtSign, Smartphone, FileCode, Box,
  TrendingUp, Workflow, Server, Key, Layers3, ActivitySquare
} from "lucide-react";

/** * =============================================================================
 * I. STARTUP INTAKE CONFIGURATION (VERIFIED THEORY)
 * Design System: Alpha-Vanguard-UX v3.1.0
 * Logic: Phase 1 Structural Alignment
 * Architected by Apurva Priyadarshi | Deployment Node: INDIA_VANGUARD_01
 * =============================================================================
 */

const VENTURE_LIFECYCLE = [
  { value: "Conceptual", label: "Phase 1: Logic Synthesis", complexity: "High" },
  { value: "Handshake", label: "Phase 2: Market Validation", complexity: "Moderate" },
  { value: "Resonance", label: "Phase 3: Unit Economic Sync", complexity: "Optimized" },
  { value: "Ascension", label: "Phase 4: Sovereign Scaling", complexity: "Institutional" },
];

const SECTOR_NODES = [
  { id: "deep", label: "Deep Tech & IP", protocol: "DT_NODE_01" },
  { id: "intel", label: "Artificial Intelligence", protocol: "AI_NODE_08" },
  { id: "fin", label: "Fintech Sovereignty", protocol: "FT_NODE_04" },
  { id: "infra", label: "Digital Infrastructure", protocol: "DI_NODE_09" }
];

const VANGUARD_CURATION = [
  { 
    icon: <ShieldCheck />, 
    title: "Structural Alignment", 
    desc: "Direct integration with the Udaaro execution skeleton to eliminate operational fragility.",
    node: "VET_SYNC_01"
  },
  { 
    icon: <Cpu />, 
    title: "Logic Engineering", 
    desc: "Proprietary auditing of unit economics and market moats before grid admission.",
    node: "LOGIC_ENG_08"
  },
  { 
    icon: <Globe />, 
    title: "Sovereign Ascension", 
    desc: "Systematic pathways designed for independent scaling and global market dominance.",
    node: "SOV_GRID_X"
  },
];

const SYSTEM_LOGS = [
  { label: "IP_SHIELD_PROTOCOL", status: "ENFORCED", color: "blue" },
  { label: "MCA_DPIIT_HANDSHAKE", status: "ACTIVE", color: "emerald" },
  { label: "RADICAL_TRANSPARENCY", status: "SYNCED", color: "indigo" }
];

/** * =============================================================================
 * II. UI ATOMS: PROTOCOL WRAPPERS
 * =============================================================================
 */

const TerminalBadgeNode = ({ text }) => (
  <motion.div 
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-blue-600/10 border border-blue-600/20 text-blue-500 text-[10px] font-black uppercase tracking-[0.5em] mb-10 backdrop-blur-xl italic"
  >
    <Fingerprint size={14} className="animate-pulse" />
    {text}
  </motion.div>
);

const InputTerminalWrapper = ({ label, icon: Icon, children, error, hint }) => (
  <div className="space-y-4">
    <div className="flex justify-between items-center px-1">
      <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em] italic">{label}</label>
      {hint && <span className="text-[8px] font-bold text-blue-500/40 uppercase tracking-widest italic">Node_Required</span>}
    </div>
    <div className={`relative group ${error ? 'animate-shake' : ''}`}>
      <div className={`absolute left-6 top-1/2 -translate-y-1/2 transition-colors duration-500 ${error ? 'text-rose-500' : 'text-slate-300 group-focus-within:text-blue-600'}`}>
        <Icon size={18} />
      </div>
      {children}
    </div>
  </div>
);

/** * =============================================================================
 * III. MAIN ARCHITECTURE: APPLYFOUNDER (VANGUARD INTAKE)
 * =============================================================================
 */

function ApplyFounder() {
  const API_BASE = import.meta.env.PROD ? "https://udaaro-backend.onrender.com" : "http://localhost:5000";
  const FOUNDER_NAME = "Apurva Priyadarshi";

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", startup: "",
    industry: "", stage: "", fundingNeeded: "", description: "",
    linkedin: "", location: "India", turnover: ""
  });

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [isScanning, setIsScanning] = useState(false);
  const [logicProgress, setLogicProgress] = useState(0);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (error) setError("");
  };

  const runLogicSync = () => {
    setIsScanning(true);
    setLogicProgress(0);
    const interval = setInterval(() => {
      setLogicProgress(prev => (prev < 100 ? prev + 1 : 100));
    }, 25);
    return interval;
  };

  const validateIdentity = () => {
    if (!formData.name || !formData.email || !formData.phone || !formData.startup) {
      setError("Logical Failure: Core identity nodes missing from handshake.");
      return false;
    }
    setError("");
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(""); setError(""); setLoading(true);
    const interval = runLogicSync();

    setTimeout(async () => {
      try {
        const response = await fetch(`${API_BASE}/api/founders`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        const data = await response.json();

        if (response.ok) {
          setMessage("Institutional Synchronization Complete. Your venture logic has been queued for audit.");
          clearInterval(interval);
          setStep(3);
        } else {
          setError(data.message || "Credential verification protocol failed.");
          setIsScanning(false);
          clearInterval(interval);
        }
      } catch (err) {
        setError("Infrastructure Offline: Sync node connection lost.");
        setIsScanning(false);
        clearInterval(interval);
      } finally {
        setLoading(false);
      }
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-[#fcfcfd] flex flex-col font-sans selection:bg-blue-600 selection:text-white overflow-x-hidden">
      
      {/* 1. TOP PROTOCOL NAVIGATION */}
      <nav className="p-10 fixed top-0 left-0 w-full z-[1000] bg-white/10 backdrop-blur-md border-b border-slate-200/20 sm:bg-transparent sm:border-none">
        <div className="max-w-[1800px] mx-auto flex justify-between items-center px-4">
          <Link to="/" className="flex items-center gap-4 group">
            <motion.div whileHover={{ rotate: 90, scale: 1.1 }} className="w-12 h-12 bg-slate-950 rounded-2xl flex items-center justify-center text-white font-black italic shadow-4xl group-hover:bg-blue-600 transition-all duration-700">U</motion.div>
            <div className="flex flex-col">
               <span className="text-2xl font-black tracking-tighter text-slate-950 uppercase italic leading-none">Udaaro</span>
               <span className="text-[9px] font-black text-blue-600 uppercase tracking-[0.5em] mt-2 italic">Vanguard_Intake</span>
            </div>
          </Link>
          <div className="flex items-center gap-10">
             <div className="hidden lg:flex items-center gap-4 px-6 py-2.5 bg-slate-950 text-white rounded-2xl shadow-3xl">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.8)]" />
                <span className="text-[9px] font-black uppercase tracking-[0.3em] italic leading-none">Admission_Node: Alpha</span>
             </div>
             <Dna className="text-blue-600" size={28} />
          </div>
        </div>
      </nav>

      <main className="flex-grow flex flex-col lg:flex-row pt-28 lg:pt-0">
        
        {/* 2. LEFT SECTOR: VANGUARD BRAND THEORY */}
        <section className="lg:w-[45%] bg-slate-950 p-12 lg:p-24 text-white flex flex-col justify-between relative overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-[0.08] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
          <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-blue-600/20 rounded-full blur-[200px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[30vw] h-[30vw] bg-indigo-900/10 rounded-full blur-[160px] pointer-events-none" />
          
          <motion.div initial={{ opacity: 0, x: -60 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }} className="relative z-10">
            <div className="mb-24">
              <TerminalBadgeNode text="Sovereign Builder Admission" />
              <h1 className="text-6xl lg:text-[10rem] font-black leading-[0.8] tracking-tighter italic uppercase text-gradient-silver mb-12">
                Join the <br />
                <span className="text-blue-500 italic underline decoration-blue-900 decoration-[16px] underline-offset-[24px]">Rank.</span>
              </h1>
              <p className="text-slate-400 mt-16 text-2xl md:text-3xl leading-relaxed max-w-lg font-medium italic">
                Udaaro is a closed-loop Venture OS for India's high-potential builders. We engineering vision into scalable institutions. <br />
                <span className="text-white font-black italic">— Architected by {FOUNDER_NAME}</span>
              </p>
            </div>

            <div className="space-y-16 mb-24">
              {VANGUARD_CURATION.map((layer, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 + (i * 0.15) }} className="flex gap-10 group cursor-default">
                  <div className="flex-shrink-0 w-20 h-20 rounded-[2.5rem] bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-700 group-hover:bg-blue-600 group-hover:shadow-7xl group-hover:scale-110">
                    {React.cloneElement(layer.icon, { size: 32, className: "text-blue-500 group-hover:text-white transition-all duration-500" })}
                  </div>
                  <div>
                    <div className="flex items-center gap-4 mb-3">
                       <h3 className="font-black text-xl uppercase tracking-tighter italic group-hover:text-blue-400 transition-colors leading-none">{layer.title}</h3>
                       <span className="text-[9px] font-bold text-blue-600 bg-blue-600/10 px-3 py-1 rounded-lg uppercase tracking-widest opacity-40 italic">{layer.node}</span>
                    </div>
                    <p className="text-slate-500 text-base leading-relaxed max-w-sm font-medium group-hover:text-slate-300 transition-colors italic">"{layer.desc}"</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="mt-32 lg:mt-0 relative z-10 flex flex-col md:flex-row justify-between items-end gap-12 pt-12 border-t border-white/5">
            <div className="space-y-8">
               <div className="flex items-center gap-4 text-slate-600 font-black uppercase text-[10px] tracking-[0.5em] italic leading-none">
                 <Lock size={16} className="text-blue-600" /> Infrastructure_Security_Grid
               </div>
               <div className="flex gap-6">
                  {SYSTEM_LOGS.map((log, i) => (
                    <div key={i} className="px-5 py-2.5 bg-white/5 border border-white/10 rounded-2xl flex items-center gap-3 group hover:bg-white/10 transition-all cursor-crosshair">
                       <div className={`w-1.5 h-1.5 rounded-full bg-${log.color}-500 animate-pulse shadow-[0_0_8px_blue]`} />
                       <span className="text-[9px] font-black text-white/50 tracking-widest uppercase group-hover:text-white transition-colors">{log.label}</span>
                    </div>
                  ))}
               </div>
            </div>
          </div>
        </section>

        {/* 3. RIGHT SECTOR: INTAKE TERMINAL (FORM) */}
        <section className="lg:w-[55%] p-8 lg:p-24 flex flex-col items-center justify-center bg-[#fdfdfe] relative overflow-y-auto">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="max-w-3xl w-full">
            <div className="bg-white rounded-[5rem] shadow-7xl p-12 lg:p-20 border border-slate-100 relative group overflow-hidden">
              
              {/* Progress Handshake System */}
              <div className="absolute top-0 left-0 w-full h-2 bg-slate-50">
                <motion.div animate={{ width: `${(step / 3) * 100}%` }} transition={{ duration: 0.5, ease: "easeOut" }} className="h-full bg-blue-600 shadow-[0_0_20px_blue]" />
              </div>

              {step < 3 && (
                <div className="mb-24 text-center relative">
                  <div className="flex items-center justify-center gap-6 mb-12">
                      <div className="h-px w-16 bg-blue-100" />
                      <div className="w-16 h-16 bg-blue-50 rounded-[1.8rem] flex items-center justify-center border border-blue-100 shadow-inner">
                         <Zap className="text-blue-600 animate-bounce" size={32} fill="currentColor" />
                      </div>
                      <div className="h-px w-16 bg-blue-100" />
                  </div>
                  <h2 className="text-6xl md:text-7xl font-black text-slate-950 tracking-tighter leading-none mb-8 uppercase italic">Venture Intake</h2>
                  <p className="text-slate-400 text-xl font-medium italic uppercase tracking-widest opacity-60">Admission Phase {step} — Grid Handshake</p>
                </div>
              )}

              <AnimatePresence mode="wait">
                {step === 1 && (
                  <motion.div key="step1" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} className="space-y-12">
                    <div className="grid md:grid-cols-2 gap-10">
                      <InputTerminalWrapper label="Executive Identity" icon={User} error={error && !formData.name} hint>
                        <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full bg-slate-50 border-0 ring-1 ring-slate-200 focus:ring-2 focus:ring-blue-600 focus:bg-white rounded-[1.5rem] py-6 pl-16 pr-6 transition-all outline-none font-bold text-sm shadow-inner" placeholder="Full Legal Name" required />
                      </InputTerminalWrapper>
                      <InputTerminalWrapper label="Corporate Terminal" icon={Mail} error={error && !formData.email} hint>
                        <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full bg-slate-50 border-0 ring-1 ring-slate-200 focus:ring-2 focus:ring-blue-600 focus:bg-white rounded-[1.5rem] py-6 pl-16 pr-6 transition-all outline-none font-bold text-sm shadow-inner" placeholder="founder@institution.com" required />
                      </InputTerminalWrapper>
                    </div>

                    <div className="grid md:grid-cols-2 gap-10">
                      <InputTerminalWrapper label="Handshake Node (Phone)" icon={Phone} hint>
                        <input type="text" name="phone" value={formData.phone} onChange={handleChange} className="w-full bg-slate-50 border-0 ring-1 ring-slate-200 focus:ring-2 focus:ring-blue-600 focus:bg-white rounded-[1.5rem] py-6 pl-16 pr-6 transition-all outline-none font-bold text-sm shadow-inner" placeholder="+91 XXXX XXXX" />
                      </InputTerminalWrapper>
                      <InputTerminalWrapper label="Venture Entity Name" icon={Building2} hint>
                        <input type="text" name="startup" value={formData.startup} onChange={handleChange} className="w-full bg-slate-50 border-0 ring-1 ring-slate-200 focus:ring-2 focus:ring-blue-600 focus:bg-white rounded-[1.5rem] py-6 pl-16 pr-6 transition-all outline-none font-bold text-sm shadow-inner" placeholder="Organization Identity" />
                      </InputTerminalWrapper>
                    </div>

                    <div className="p-10 bg-blue-50/50 rounded-[3.5rem] border border-blue-100 flex items-center justify-between group cursor-help transition-all hover:bg-blue-50">
                       <div className="flex items-center gap-6">
                          <div className="p-4 bg-white rounded-2xl shadow-xl group-hover:scale-110 transition-transform"><ShieldCheck className="text-blue-600" size={24} /></div>
                          <div>
                             <p className="text-[11px] font-black text-slate-400 uppercase tracking-widest mb-1 italic">Protocol Integrity</p>
                             <p className="text-sm font-bold text-slate-700 italic leading-none">Institutional Encryption: Active Node_Tokyo_01</p>
                          </div>
                       </div>
                    </div>

                    <button onClick={() => validateIdentity() && setStep(2)} className="w-full bg-slate-950 hover:bg-blue-600 text-white font-black py-10 rounded-full shadow-7xl transition-all flex items-center justify-center gap-5 uppercase text-xs tracking-[0.5em] group italic active:scale-95">
                      Establish Identity & Proceed <ChevronRight size={20} className="group-hover:translate-x-3 transition-transform duration-500" />
                    </button>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.form key="step2" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} onSubmit={handleSubmit} className="space-y-12">
                    <div className="grid md:grid-cols-2 gap-10">
                      <InputTerminalWrapper label="Primary Logic Vertical" icon={Target}>
                         <select name="industry" value={formData.industry} onChange={handleChange} className="w-full bg-slate-50 border-0 ring-1 ring-slate-200 focus:ring-2 focus:ring-blue-600 focus:bg-white rounded-[1.5rem] py-6 pl-16 pr-6 transition-all outline-none appearance-none cursor-pointer font-bold text-sm shadow-inner uppercase tracking-widest italic" required>
                           <option value="">Select Vertical</option>
                           {SECTOR_NODES.map(s => <option key={s.id} value={s.label}>{s.label}</option>)}
                         </select>
                      </InputTerminalWrapper>
                      <InputTerminalWrapper label="Structural Phase" icon={Activity}>
                        <select name="stage" value={formData.stage} onChange={handleChange} className="w-full bg-slate-50 border-0 ring-1 ring-slate-200 focus:ring-2 focus:ring-blue-600 focus:bg-white rounded-[1.5rem] py-6 pl-16 pr-6 transition-all outline-none appearance-none cursor-pointer font-bold text-sm shadow-inner uppercase tracking-widest italic" required>
                          <option value="">Current Lifecycle</option>
                          {VENTURE_LIFECYCLE.map(s => <option key={s.value} value={s.value}>{s.label}</option>)}
                        </select>
                      </InputTerminalWrapper>
                    </div>

                    <div className="grid md:grid-cols-2 gap-10">
                      <InputTerminalWrapper label="Target Capital Node (₹)" icon={IndianRupee}>
                        <input type="text" name="fundingNeeded" value={formData.fundingNeeded} onChange={handleChange} className="w-full bg-slate-50 border-0 ring-1 ring-slate-200 focus:ring-2 focus:ring-blue-600 focus:bg-white rounded-[1.5rem] py-6 pl-16 pr-6 transition-all outline-none font-bold text-sm shadow-inner" placeholder="e.g. ₹50 Lakhs" />
                      </InputTerminalWrapper>
                      <InputTerminalWrapper label="Regional Node" icon={MapPin}>
                         <input type="text" name="location" value={formData.location} onChange={handleChange} className="w-full bg-slate-50 border-0 ring-1 ring-slate-200 focus:ring-2 focus:ring-blue-600 focus:bg-white rounded-[1.5rem] py-6 pl-16 pr-6 transition-all outline-none font-bold text-sm shadow-inner placeholder:italic" placeholder="India Grid Location" />
                      </InputTerminalWrapper>
                    </div>

                    <InputTerminalWrapper label="Structural Thesis & Moat Logic" icon={FileCode}>
                      <textarea name="description" value={formData.description} onChange={handleChange} rows="6" className="w-full bg-slate-50 border-0 ring-1 ring-slate-200 focus:ring-2 focus:ring-blue-600 focus:bg-white rounded-[3rem] py-10 pl-16 pr-10 transition-all outline-none font-bold text-sm leading-relaxed shadow-inner placeholder:italic" placeholder="Architect your core value proposition and industrial failure-mitigation logic..." required />
                    </InputTerminalWrapper>

                    <AnimatePresence>
                       {isScanning && (
                         <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} className="p-10 bg-slate-950 rounded-[4rem] text-white border border-blue-500/30 shadow-7xl">
                            <div className="flex justify-between items-center mb-8">
                               <div className="flex items-center gap-5">
                                  <Cpu className="text-blue-500 animate-spin" size={28} />
                                  <span className="text-[11px] font-black uppercase tracking-[0.5em] italic leading-none">Logic_Vetting_Active</span>
                               </div>
                               <span className="text-2xl font-black font-mono text-blue-400 italic">{logicProgress}%</span>
                            </div>
                            <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden mb-8 shadow-inner">
                               <motion.div animate={{ width: `${logicProgress}%` }} className="h-full bg-blue-600 shadow-[0_0_15px_blue]" />
                            </div>
                            <div className="flex justify-between items-center opacity-60 italic">
                               <p className="text-[10px] font-bold text-slate-500 uppercase">Target: INDIA_MARKET_01</p>
                               <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /><p className="text-[10px] font-bold text-emerald-500 text-right uppercase tracking-widest">Protocol: Stable</p></div>
                            </div>
                         </motion.div>
                       )}
                    </AnimatePresence>

                    <div className="flex gap-8 pt-10">
                       <button type="button" onClick={() => setStep(1)} className="flex-1 py-10 border-2 border-slate-100 rounded-full font-black text-xs uppercase tracking-widest text-slate-300 hover:border-blue-200 hover:text-blue-600 transition-all active:scale-95 italic">Back</button>
                       <button type="submit" disabled={loading} className="flex-[2.5] bg-slate-950 hover:bg-blue-600 text-white font-black py-10 rounded-full shadow-7xl transition-all disabled:opacity-50 uppercase text-xs tracking-[0.5em] group relative overflow-hidden italic active:scale-95">
                          <AnimatePresence mode="wait">
                            {loading ? (
                              <motion.div key="load" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-5 uppercase"><Loader2 className="animate-spin" size={24} /> Vetting_Logic...</motion.div>
                            ) : (
                              <motion.div key="init" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-5 uppercase">Execute Alpha Handshake <ChevronRight size={24} className="group-hover:translate-x-4 transition-transform duration-700" /></motion.div>
                            )}
                          </AnimatePresence>
                       </button>
                    </div>
                  </motion.form>
                )}

                {step === 3 && (
                  <motion.div key="step3" initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-center py-20">
                    <div className="relative inline-block mb-16">
                       <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="w-56 h-56 border-2 border-dashed border-emerald-200 rounded-full absolute -top-16 -left-16 opacity-40" />
                       <div className="w-28 h-28 bg-emerald-50 rounded-[3.5rem] flex items-center justify-center text-emerald-500 shadow-5xl shadow-emerald-100 border-2 border-emerald-100 relative z-10">
                          <CheckCircle2 size={64} strokeWidth={1.5} />
                       </div>
                    </div>
                    <h3 className="text-6xl font-black text-slate-950 tracking-tighter mb-8 italic uppercase leading-none">Sync Successful.</h3>
                    <p className="text-slate-500 text-2xl font-medium leading-relaxed max-w-sm mx-auto mb-20 italic">Vanguard admission queued. Your terminal access codes will be dispatched to <span className="text-blue-600 font-bold">{formData.email}</span> within 24 operational hours.</p>
                    <Link to="/" className="inline-flex items-center gap-5 px-16 py-10 bg-slate-950 text-white rounded-[2.5rem] font-black text-[11px] uppercase tracking-[0.6em] shadow-7xl shadow-blue-500/20 transition-all hover:bg-blue-600 hover:scale-105 active:scale-95 italic"><Globe size={20} /> Return to Sovereign Node</Link>
                  </motion.div>
                )}
              </AnimatePresence>

              <AnimatePresence>
                 {error && (
                    <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="mt-16 p-10 bg-rose-50 border border-rose-100 rounded-[3.5rem] flex items-center gap-8 text-rose-600 text-sm font-black uppercase tracking-[0.3em] shadow-xl italic leading-relaxed"><ShieldAlert size={40} /> {error}</motion.div>
                 )}
              </AnimatePresence>

              <div className="mt-28 pt-12 border-t border-slate-50 text-center opacity-30">
                 <p className="text-[10px] font-black text-slate-400 uppercase tracking-[1em] leading-relaxed italic">Udaaro Alpha Network v3.1.0 <br /> RADICAL_TRANSPARENCY_NODE_ENFORCED</p>
              </div>
            </div>
          </motion.div>
        </section>
      </main>

      {/* 4. MASTER FOOTER: GRID METADATA */}
      <footer className="p-12 border-t border-slate-100 bg-white flex flex-col xl:flex-row justify-between items-center gap-10">
        <div className="flex items-center gap-16">
           <div className="flex items-center gap-5 group cursor-crosshair">
              <div className="w-12 h-12 bg-slate-950 rounded-2xl flex items-center justify-center text-white font-black italic shadow-3xl text-xl group-hover:rotate-12 transition-all border border-white/10">U</div>
              <div className="flex flex-col">
                 <span className="text-xl font-black text-slate-950 tracking-tighter uppercase italic leading-none">Udaaro Vanguard</span>
                 <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-1">Institutional_Admission_Grid</span>
              </div>
           </div>
           <div className="h-10 w-[1px] bg-slate-200 hidden md:block" />
           <p className="text-[11px] font-bold text-slate-400 uppercase tracking-[0.3em] flex items-center gap-5 italic leading-none">
             <ShieldCheck size={20} className="text-blue-600 animate-pulse" /> Vetted under {FOUNDER_NAME.toUpperCase()} Governance Protocol v3.1
           </p>
        </div>
        <div className="flex flex-wrap justify-center gap-12">
           <FooterProtocol icon={<MessageSquare size={16}/>} label="Query_Node" />
           <FooterProtocol icon={<Globe size={16}/>} label="Grid_Status" />
           <FooterProtocol icon={<ActivitySquare size={16}/>} label="Handshake_Status" />
           <FooterProtocol icon={<HardDrive size={16}/>} label="Infra_Pulse" />
        </div>
      </footer>
    </div>
  );
}

/** * =============================================================================
 * IV. ATOMIC UI HELPERS
 * ============================================================================= */

const FooterProtocol = ({ icon, label }) => (
  <div className="flex items-center gap-4 group cursor-pointer border-b-2 border-transparent hover:border-blue-600 pb-2 transition-all duration-500">
    <div className="text-slate-300 group-hover:text-blue-600 group-hover:scale-110 transition-all duration-500">{icon}</div>
    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 group-hover:text-slate-950 transition-colors italic leading-none">{label}</span>
  </div>
);

const TerminalBadge = ({ text }) => (
  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-blue-600/10 border border-blue-600/20 text-blue-500 text-[10px] font-black uppercase tracking-[0.5em] mb-12 backdrop-blur-xl italic">
    <Fingerprint size={14} className="animate-pulse" /> {text}
  </motion.div>
);

export default ApplyFounder;