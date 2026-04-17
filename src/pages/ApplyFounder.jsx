import React, { useState, useEffect, useRef, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence, useScroll, useTransform, useInView } from "framer-motion";
import { 
  Rocket, User, Mail, Phone, Building2, Tag, 
  BarChart3, CircleDollarSign, FileText, CheckCircle2, 
  ArrowLeft, Loader2, ChevronRight, Info, Sparkles, 
  ShieldCheck, Globe, Fingerprint, Cpu, ShieldAlert,
  Target, Zap, Network, Scale, Database, MessageSquare,
  Landmark, IndianRupee, ShieldQuestion, Briefcase, Activity,
  Search, Lock, Compass, Eye, Share2, ClipboardCheck
} from "lucide-react";

/** * =============================================================================
 * I. INSTITUTIONAL DATA CONFIGURATION
 * Design System: Alpha-Vanguard v2.9.2
 * Architected by Apurva Priyadarshi
 * =============================================================================
 */

const STARTUP_STAGES = [
  { value: "Idea", label: "Pre-Seed / Intellectual Property", intensity: 20 },
  { value: "MVP", label: "Minimum Viable Product (MVP)", intensity: 45 },
  { value: "Revenue", label: "Seed / Revenue Generating", intensity: 75 },
  { value: "Scaling", label: "Series A+ / Expansion", intensity: 100 },
];

const SECTOR_METADATA = [
  { id: "fin", label: "Fintech & Digital Assets", node: "NODE_FIN_01" },
  { id: "ai", label: "AI & Autonomous Systems", node: "NODE_AI_08" },
  { id: "saas", label: "Enterprise SaaS", node: "NODE_SaaS_04" },
  { id: "health", label: "Health-Tech / Bio-IP", node: "NODE_BIO_02" },
  { id: "d2c", label: "Scalable D2C / Logistics", node: "NODE_D2C_09" }
];

const CURATION_TIERS = [
  { 
    icon: <ShieldCheck />, 
    title: "Vetted Syndicate", 
    desc: "Direct access to the top 1% of institutional backers and global angels.",
    node: "SYNC_DEEP_01"
  },
  { 
    icon: <Cpu />, 
    title: "Intelligence Layer", 
    desc: "Proprietary roadmap engineering and unit-economic stress testing.",
    node: "BLUEPRINT_08"
  },
  { 
    icon: <Globe />, 
    title: "Cross-Border Scale", 
    desc: "Global ascension pathways for sovereign market dominance.",
    node: "GRID_GLOBAL_X"
  },
];

const RISK_PROTOCOLS = [
  { label: "IP_FRAUD_SHIELD", status: "ENFORCED" },
  { label: "MARKET_SATURATION_SCAN", status: "ACTIVE" },
  { label: "UNIT_ECONOMIC_AUDIT", status: "PENDING" }
];

/** * =============================================================================
 * II. UI ATOMS & REUSABLE NODES
 * =============================================================================
 */

const SectionBadge = ({ text }) => (
  <motion.div 
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-50/50 backdrop-blur-md border border-blue-100 text-blue-700 text-[10px] font-black uppercase tracking-[0.3em] mb-8"
  >
    <Fingerprint size={12} className="animate-pulse" />
    {text}
  </motion.div>
);

const InputWrapper = ({ label, icon: Icon, children, error, hint }) => (
  <div className="space-y-3">
    <div className="flex justify-between items-center px-1">
      <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">{label}</label>
      {hint && <span className="text-[9px] font-bold text-blue-500 uppercase tracking-widest opacity-60 italic">Required</span>}
    </div>
    <div className={`relative group ${error ? 'animate-shake' : ''}`}>
      <div className={`absolute left-5 top-1/2 -translate-y-1/2 transition-colors duration-300 ${error ? 'text-rose-500' : 'text-slate-300 group-focus-within:text-blue-600'}`}>
        <Icon size={16} />
      </div>
      {children}
    </div>
  </div>
);

const StatusPill = ({ label, value }) => (
  <div className="flex justify-between items-center p-4 bg-slate-50 rounded-2xl border border-slate-100 group hover:border-blue-100 transition-all">
    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{label}</span>
    <span className="text-[10px] font-mono text-slate-900 font-bold">{value}</span>
  </div>
);

/** * =============================================================================
 * III. MAIN ARCHITECTURE: APPLYFOUNDER (VANGUARD INTAKE)
 * =============================================================================
 */

function ApplyFounder() {
  const API_BASE = import.meta.env.PROD ? "https://udaaro-backend.onrender.com" : "http://localhost:5000";
  const FOUNDER_NAME = "Apurva Priyadarshi";

  // --- State Configuration ---
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
  const [scanProgress, setScanProgress] = useState(0);

  // --- Scroll & View Orchestration ---
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const opacity = useTransform(scrollYProgress, [0, 0.15], [1, 0.85]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (error) setError("");
  };

  const simulateInstitutionalScan = () => {
    setIsScanning(true);
    setScanProgress(0);
    const interval = setInterval(() => {
      setScanProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 40);
  };

  const validateStepOne = () => {
    if (!formData.name || !formData.email || !formData.phone || !formData.startup) {
      setError("Handshake Failure: Identity and Venture metadata required.");
      return false;
    }
    setError("");
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(""); setError(""); setLoading(true);
    simulateInstitutionalScan();

    setTimeout(async () => {
      try {
        const response = await fetch(`${API_BASE}/api/founders`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        const data = await response.json();

        if (response.ok) {
          setMessage("Concept Synchronized. The Syndicate Admission Council has queued your credentials.");
          setStep(3);
        } else {
          setError(data.message || "Credential verification protocol failed.");
          setIsScanning(false);
        }
      } catch (err) {
        setError("Infrastructure Offline: Sync node connection timed out.");
        setIsScanning(false);
      } finally {
        setLoading(false);
      }
    }, 2500);
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-[#fcfcfd] flex flex-col font-sans selection:bg-blue-600 selection:text-white overflow-x-hidden">
      
      {/* 1. TOP PROTOCOL NAVIGATION */}
      <nav className="p-8 fixed top-0 left-0 w-full z-50 bg-white/10 backdrop-blur-md border-b border-slate-200/20 sm:border-none">
        <div className="max-w-[1800px] mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3 group text-slate-400 hover:text-slate-950 transition-all">
            <div className="w-10 h-10 bg-slate-950 rounded-xl flex items-center justify-center text-white font-black italic shadow-xl group-hover:rotate-90 transition-transform duration-500">U</div>
            <span className="text-[10px] font-black uppercase tracking-[0.4em] hidden sm:inline leading-none">Udaaro / Sovereign</span>
          </Link>
          <div className="flex items-center gap-6">
             <div className="flex items-center gap-3 px-5 py-2.5 bg-slate-950 text-white rounded-2xl shadow-2xl border border-white/10">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.8)]" />
                <span className="text-[9px] font-black uppercase tracking-[0.3em]">Protocol_2.9.2_Alpha</span>
             </div>
          </div>
        </div>
      </nav>

      <main className="flex-grow flex flex-col lg:flex-row pt-20 lg:pt-0">
        
        {/* 2. LEFT SECTOR: VANGUARD BRAND NARRATIVE */}
        <section className="lg:w-[45%] bg-slate-950 p-12 lg:p-24 text-white flex flex-col justify-between relative overflow-hidden">
          {/* Visual Layering */}
          <div className="absolute inset-0 z-0 opacity-[0.07] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
          <div className="absolute top-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-blue-600 rounded-full blur-[180px] opacity-20" />
          <div className="absolute bottom-[-20%] left-[-10%] w-[30vw] h-[30vw] bg-indigo-600 rounded-full blur-[140px] opacity-10" />
          
          <motion.div 
            initial={{ opacity: 0, x: -40 }} 
            animate={{ opacity: 1, x: 0 }} 
            className="relative z-10"
          >
            <div className="mb-24">
              <SectionBadge text="Vanguard Admission Cycle" />
              <h1 className="text-6xl lg:text-[7.5rem] font-black leading-[0.8] tracking-tighter italic uppercase mb-10">
                Vanguard <br /> <span className="text-blue-500 underline decoration-blue-900/50 decoration-[16px] underline-offset-[20px]">Intake.</span>
              </h1>
              <p className="text-slate-400 text-xl md:text-2xl leading-relaxed max-w-lg font-medium italic">
                Udaaro is the sovereign layer for Indian founders building generational institutions. <br />
                <span className="text-white font-black italic">— Architected by {FOUNDER_NAME}</span>
              </p>
            </div>

            <div className="space-y-12">
              {CURATION_TIERS.map((tier, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + (idx * 0.15) }}
                  className="flex gap-8 items-center group cursor-pointer"
                >
                  <div className="w-16 h-16 rounded-[2rem] bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-700 group-hover:bg-blue-600 group-hover:shadow-[0_0_40px_rgba(37,99,235,0.4)]">
                    {React.cloneElement(tier.icon, { size: 28, className: "text-blue-500 group-hover:text-white transition-all duration-500 group-hover:scale-110" })}
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-1.5">
                       <h4 className="font-black text-sm uppercase tracking-widest">{tier.title}</h4>
                       <span className="text-[8px] font-mono text-blue-500 bg-blue-500/10 px-2 py-0.5 rounded-full">{tier.node}</span>
                    </div>
                    <p className="text-slate-500 text-sm leading-relaxed max-w-sm group-hover:text-slate-300 transition-colors">{tier.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Infrastructure Health Ticker */}
          <div className="mt-24 lg:mt-0 relative z-10 grid grid-cols-2 gap-4 pt-12 border-t border-white/5">
             <div className="col-span-2 flex items-center gap-4 text-slate-600 font-black uppercase text-[10px] tracking-[0.5em] mb-4 italic">
                <Lock size={12} className="text-blue-600" /> Vetting_Security_Grid
             </div>
             {RISK_PROTOCOLS.map((risk, i) => (
               <div key={i} className="p-5 bg-white/5 border border-white/10 rounded-2xl flex flex-col justify-between hover:bg-white/10 transition-all cursor-default">
                  <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-4 italic">{risk.label}</p>
                  <div className="flex items-center gap-2">
                     <div className={`w-1.5 h-1.5 rounded-full ${risk.status === 'ENFORCED' ? 'bg-blue-500' : 'bg-emerald-500 animate-pulse'}`} />
                     <span className="text-[9px] font-bold text-white uppercase">{risk.status}</span>
                  </div>
               </div>
             ))}
          </div>
        </section>

        {/* 3. RIGHT SECTOR: INTAKE TERMINAL (FORM) */}
        <section className="lg:w-[55%] p-8 lg:p-24 bg-[#fdfdfe] flex flex-col items-center justify-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }} 
            animate={{ opacity: 1, scale: 1 }} 
            className="max-w-2xl w-full"
          >
            <div className="bg-white rounded-[5rem] shadow-[0_100px_200px_-50px_rgba(0,0,0,0.12)] p-12 lg:p-20 border border-slate-100 relative group overflow-hidden">
              
              {/* Institutional Progress Matrix */}
              <div className="absolute top-0 left-0 w-full h-1.5 bg-slate-50">
                 <motion.div 
                    animate={{ width: `${(step / 3) * 100}%` }} 
                    className="h-full bg-blue-600 shadow-[0_0_20px_rgba(37,99,235,0.6)]" 
                 />
              </div>

              {step < 3 && (
                <div className="mb-20 text-center relative">
                  <div className="flex items-center justify-center gap-4 mb-8">
                      <div className="h-[2px] w-12 bg-blue-100" />
                      <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center">
                         <Zap className="text-blue-600 animate-pulse" size={24} fill="currentColor" />
                      </div>
                      <div className="h-[2px] w-12 bg-blue-100" />
                  </div>
                  <h2 className="text-5xl md:text-6xl font-black text-slate-950 tracking-tighter leading-none mb-6 uppercase italic">Venture Intake</h2>
                  <p className="text-slate-400 text-lg font-medium italic uppercase tracking-widest opacity-60">Phase {step} — Credential Syncing</p>
                </div>
              )}

              <AnimatePresence mode="wait">
                {/* STEP 1: IDENTITY & ENTITY META */}
                {step === 1 && (
                  <motion.div 
                    key="step1" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }}
                    className="space-y-10"
                  >
                    <div className="grid md:grid-cols-2 gap-10">
                      <InputWrapper label="Executive Identity" icon={User} error={error && !formData.name} hint>
                        <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full bg-slate-50 border-0 ring-1 ring-slate-100 focus:ring-2 focus:ring-blue-600 focus:bg-white rounded-2xl py-5 pl-14 pr-4 transition-all outline-none font-bold text-sm" placeholder="Full Legal Name" required />
                      </InputWrapper>
                      <InputWrapper label="Corporate Terminal" icon={Mail} error={error && !formData.email} hint>
                        <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full bg-slate-50 border-0 ring-1 ring-slate-100 focus:ring-2 focus:ring-blue-600 focus:bg-white rounded-2xl py-5 pl-14 pr-4 transition-all outline-none font-bold text-sm" placeholder="founder@company.com" required />
                      </InputWrapper>
                    </div>

                    <div className="grid md:grid-cols-2 gap-10">
                      <InputWrapper label="Venture Handshake (Phone)" icon={Phone} hint>
                        <input type="text" name="phone" value={formData.phone} onChange={handleChange} className="w-full bg-slate-50 border-0 ring-1 ring-slate-100 focus:ring-2 focus:ring-blue-600 focus:bg-white rounded-2xl py-5 pl-14 pr-4 transition-all outline-none font-bold text-sm" placeholder="+91 XXXX XXXX" />
                      </InputWrapper>
                      <InputWrapper label="Entity Identity" icon={Building2} hint>
                        <input type="text" name="startup" value={formData.startup} onChange={handleChange} className="w-full bg-slate-50 border-0 ring-1 ring-slate-100 focus:ring-2 focus:ring-blue-600 focus:bg-white rounded-2xl py-5 pl-14 pr-4 transition-all outline-none font-bold text-sm" placeholder="Startup Name" />
                      </InputWrapper>
                    </div>

                    <div className="p-8 bg-blue-50/50 rounded-[3rem] border border-blue-100 flex items-center justify-between group cursor-help">
                       <div className="flex items-center gap-5">
                          <div className="p-3 bg-white rounded-xl shadow-sm group-hover:scale-110 transition-transform"><ShieldCheck className="text-blue-600" size={20} /></div>
                          <div>
                             <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Handshake Privacy</p>
                             <p className="text-xs font-bold text-slate-700 italic">256-bit Institutional Encryption Active</p>
                          </div>
                       </div>
                    </div>

                    <button 
                      onClick={() => validateStepOne() && setStep(2)}
                      className="w-full bg-slate-950 hover:bg-blue-600 text-white font-black py-8 rounded-full shadow-4xl transition-all flex items-center justify-center gap-4 uppercase text-xs tracking-[0.5em] group"
                    >
                      Verify Identity & Proceed <ChevronRight size={20} className="group-hover:translate-x-2 transition-transform" />
                    </button>
                  </motion.div>
                )}

                {/* STEP 2: VENTURE LOGIC & THESIS */}
                {step === 2 && (
                  <motion.form 
                    key="step2" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }}
                    onSubmit={handleSubmit}
                    className="space-y-10"
                  >
                    <div className="grid md:grid-cols-2 gap-10">
                      <InputWrapper label="Primary Vertical" icon={Target}>
                         <select name="industry" value={formData.industry} onChange={handleChange} className="w-full bg-slate-50 border-0 ring-1 ring-slate-100 focus:ring-2 focus:ring-blue-600 focus:bg-white rounded-2xl py-5 pl-14 pr-4 transition-all outline-none appearance-none cursor-pointer font-bold text-sm" required>
                           <option value="">Select Vertical</option>
                           {SECTOR_METADATA.map(s => <option key={s.id} value={s.label}>{s.label}</option>)}
                         </select>
                      </InputWrapper>
                      <InputWrapper label="Lifecycle Phase" icon={Activity}>
                        <select name="stage" value={formData.stage} onChange={handleChange} className="w-full bg-slate-50 border-0 ring-1 ring-slate-100 focus:ring-2 focus:ring-blue-600 focus:bg-white rounded-2xl py-5 pl-14 pr-4 transition-all outline-none appearance-none cursor-pointer font-bold text-sm" required>
                          <option value="">Current Lifecycle</option>
                          {STARTUP_STAGES.map(s => <option key={s.value} value={s.value}>{s.label}</option>)}
                        </select>
                      </InputWrapper>
                    </div>

                    <div className="grid md:grid-cols-2 gap-10">
                      <InputWrapper label="Funding Required (₹)" icon={IndianRupee}>
                        <input type="text" name="fundingNeeded" value={formData.fundingNeeded} onChange={handleChange} className="w-full bg-slate-50 border-0 ring-1 ring-slate-100 focus:ring-2 focus:ring-blue-600 focus:bg-white rounded-2xl py-5 pl-14 pr-4 transition-all outline-none font-bold text-sm" placeholder="e.g. 50 Lakhs" />
                      </InputWrapper>
                      <InputWrapper label="Location Base" icon={MapPin}>
                         <input type="text" name="location" value={formData.location} onChange={handleChange} className="w-full bg-slate-50 border-0 ring-1 ring-slate-100 focus:ring-2 focus:ring-blue-600 focus:bg-white rounded-2xl py-5 pl-14 pr-4 transition-all outline-none font-bold text-sm" placeholder="e.g. Bengaluru / Delhi" />
                      </InputWrapper>
                    </div>

                    <div className="space-y-4">
                      <InputWrapper label="Venture Thesis & Problem Logic" icon={FileText}>
                        <textarea name="description" value={formData.description} onChange={handleChange} rows="5" className="w-full bg-slate-50 border-0 ring-1 ring-slate-100 focus:ring-2 focus:ring-blue-600 focus:bg-white rounded-[3rem] py-8 pl-16 pr-8 transition-all outline-none font-bold text-sm leading-relaxed" placeholder="Briefly architect your core value proposition and market 'moat'..." required />
                      </InputWrapper>
                    </div>

                    {/* Vetting Simulation Loader */}
                    <AnimatePresence>
                       {isScanning && (
                         <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} className="p-8 bg-slate-950 rounded-[3rem] text-white border border-blue-500/50 shadow-blue-500/10">
                            <div className="flex justify-between items-center mb-6">
                               <div className="flex items-center gap-3">
                                  <Cpu className="text-blue-500 animate-spin" size={20} />
                                  <span className="text-[10px] font-black uppercase tracking-[0.4em]">Algorithmic_Vetting_Protocol</span>
                               </div>
                               <span className="text-[10px] font-mono text-blue-400">{scanProgress}%</span>
                            </div>
                            <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                               <motion.div animate={{ width: `${scanProgress}%` }} className="h-full bg-blue-600" />
                            </div>
                            <div className="mt-6 grid grid-cols-2 gap-4">
                               <p className="text-[9px] font-bold text-slate-500 italic">Targeting Market Node: Mumbai_HQ</p>
                               <p className="text-[9px] font-bold text-slate-500 italic text-right">Handshake: {scanProgress > 50 ? 'SECURE' : 'SYNCING'}</p>
                            </div>
                         </motion.div>
                       )}
                    </AnimatePresence>

                    <div className="flex gap-6">
                       <button type="button" onClick={() => setStep(1)} className="flex-1 py-8 border-2 border-slate-100 rounded-full font-black text-xs uppercase tracking-widest text-slate-300 hover:border-blue-200 hover:text-blue-600 transition-all">Back</button>
                       <button type="submit" disabled={loading} className="flex-[2.5] bg-slate-950 hover:bg-blue-600 text-white font-black py-8 rounded-full shadow-5xl transition-all disabled:opacity-50 uppercase text-xs tracking-[0.5em] group relative overflow-hidden">
                          <AnimatePresence mode="wait">
                            {loading ? (
                              <motion.div key="load" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-4">
                                 <Loader2 className="animate-spin" size={20} /> VERIFYING_LOGIC...
                              </motion.div>
                            ) : (
                              <motion.div key="init" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-4">
                                 Initiate Alpha Handshake <ChevronRight size={20} className="group-hover:translate-x-2 transition-transform" />
                              </motion.div>
                            )}
                          </AnimatePresence>
                       </button>
                    </div>
                  </motion.form>
                )}

                {/* STEP 3: SUCCESS COORDINATES */}
                {step === 3 && (
                  <motion.div 
                    key="step3" initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
                    className="text-center py-20"
                  >
                    <div className="relative inline-block mb-12">
                       <motion.div animate={{ rotate: 360 }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }} className="w-48 h-48 border-2 border-dashed border-emerald-200 rounded-full absolute -top-12 -left-12" />
                       <div className="w-24 h-24 bg-emerald-50 rounded-[3rem] flex items-center justify-center text-emerald-500 shadow-3xl shadow-emerald-100 border-2 border-emerald-100 relative z-10">
                          <CheckCircle2 size={56} />
                       </div>
                    </div>
                    <h3 className="text-5xl font-black text-slate-950 tracking-tighter mb-6 italic uppercase">Logic Synchronized.</h3>
                    <p className="text-slate-500 text-xl font-medium leading-relaxed max-w-sm mx-auto mb-16">
                      Vanguard admission successful. Your terminal access codes will be dispatched to <span className="text-blue-600 font-bold italic">{formData.email}</span> within 24 hours.
                    </p>
                    <Link to="/" className="inline-flex items-center gap-4 px-14 py-8 bg-slate-950 text-white rounded-[2rem] font-black text-[10px] uppercase tracking-[0.4em] shadow-6xl shadow-blue-500/20 transition-all hover:bg-blue-600 hover:scale-105 active:scale-95">
                       Return to Core OS <Network size={16} />
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* PROTOCOL FEEDBACK SECTOR */}
              <AnimatePresence>
                 {error && (
                    <motion.div 
                      initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} 
                      className="mt-12 p-6 bg-rose-50 border border-rose-100 rounded-[2.5rem] flex items-center gap-5 text-rose-600 text-xs font-black uppercase tracking-[0.2em] shadow-lg shadow-rose-900/5"
                    >
                       <ShieldAlert size={24} /> {error}
                    </motion.div>
                 )}
              </AnimatePresence>

              {/* SYSTEM FOOTER META */}
              <div className="mt-20 pt-10 border-t border-slate-50 text-center opacity-40">
                 <p className="text-[10px] font-black text-slate-300 uppercase tracking-[0.6em] leading-relaxed">
                   Udaaro Alpha Network v2.9.2 <br /> 
                   DPIIT_COMPLIANT_HANDSHAKE_NODE
                 </p>
              </div>
            </div>
          </motion.div>
        </section>
      </main>

      {/* 4. MASTER FOOTER: INSTITUTIONAL GRID */}
      <footer className="p-8 border-t border-slate-100 bg-white flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-12">
           <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-slate-950 rounded-lg flex items-center justify-center text-white font-black italic text-xs shadow-lg">U</div>
              <span className="text-[11px] font-black text-slate-950 tracking-tighter uppercase italic">UDAARO <span className="text-blue-600">VANGUARD</span></span>
           </div>
           <div className="h-5 w-[1px] bg-slate-200 hidden md:block" />
           <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-3 group cursor-help">
             <ShieldCheck size={14} className="text-blue-600 group-hover:scale-125 transition-transform" /> Admission Protocol Alpha-Zero
           </p>
        </div>
        <div className="flex gap-10">
           <FooterUtility icon={<MessageSquare size={16}/>} label="Query_Node" />
           <FooterUtility icon={<Globe size={16}/>} label="Grid_Status" />
           <FooterUtility icon={<Cpu size={16}/>} label="Core_Terminal" />
        </div>
      </footer>
    </div>
  );
}

/** * =============================================================================
 * IV. ATOMIC UTILITIES & HELPER NODES
 * =============================================================================
 */

const FooterUtility = ({ icon, label }) => (
  <div className="flex items-center gap-2 text-slate-300 hover:text-blue-600 transition-colors cursor-pointer group">
    <div className="p-2 bg-slate-50 rounded-lg group-hover:bg-blue-50 transition-all">{icon}</div>
    <span className="text-[9px] font-black uppercase tracking-[0.3em] italic">{label}</span>
  </div>
);

const StarIcon = ({ filled }) => (
  <Sparkles size={16} className={filled ? "text-blue-500 fill-blue-500" : "text-slate-200"} />
);

export default ApplyFounder;