import React, { useState, useEffect, useRef, useMemo, useCallback } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence, useScroll, useTransform, useInView } from "framer-motion";
import { 
  ShieldCheck, 
  Globe2, 
  Briefcase, 
  Mail, 
  User, 
  Compass, 
  Layers, 
  Banknote,
  ChevronRight,
  ArrowLeft,
  Crown,
  Lock,
  Zap,
  Fingerprint,
  TrendingUp,
  Award,
  Activity,
  Cpu,
  Eye,
  Network,
  Scale,
  PieChart,
  BarChart3,
  Target,
  IndianRupee,
  ShieldAlert,
  AlertCircle,
  FileText,
  Workflow,
  CheckCircle2,
  LineChart as LineIcon,
  BarChart,
  Server,
  Key,
  Binary,
  Database,
  Search,
  HardDrive,
  MessageSquare,
  Globe,
  AtSign,
  Smartphone,
  Building,
  Landmark,
  ShieldQuestion,
  FileBadge,
  Terminal,
  Layers3
} from "lucide-react";

/** * =============================================================================
 * I. INSTITUTIONAL DATA CONFIGURATION
 * Design System: Alpha-Syndicate-UX v3.0.4
 * Architected by Apurva Priyadarshi | Region: Global_India_Sync
 * =============================================================================
 */

const DEPLOYMENT_TIERS = [
  { value: "Seed_Node", label: "Seed / Conceptual Capital", risk: "Strategic", yield: "Alpha-Grade" },
  { value: "Growth_Link", label: "Series A / Market Resonance", risk: "Calculated", yield: "High-Fidelity" },
  { value: "Institutional", label: "Series B+ / Market Dominance", risk: "Minimal", yield: "Stable_Exit" },
  { value: "IP_Syndicate", label: "Intellectual Property / Deep Tech", risk: "Venture", yield: "Exponential" },
];

const SYNDICATE_TRUST_ANCHORS = [
  {
    icon: <ShieldCheck />,
    title: "Sovereign Pipelines",
    desc: "Direct access to venture pipelines vetted under the Apurva Priyadarshi Level_01 Logic standard.",
    node: "SYNC_VET_09"
  },
  {
    icon: <TrendingUp />,
    title: "Venture Telemetry",
    desc: "Live access to unit economic stress-tests and market resonance scores before capital deployment.",
    node: "INTEL_GRID_ALPHA"
  },
  {
    icon: <Fingerprint />,
    title: "Encrypted Handshake",
    desc: "Sovereign communication protocols ensuring direct founder-investor alignment without intermediary noise.",
    node: "SECURE_SOC_2"
  }
];

const PERFORMANCE_INDEX = [
  { label: "India Deployment", val: "₹1,400Cr+", sub: "Alpha_Cycle_2026", color: "blue" },
  { label: "Vetted Exit Trajectory", val: "92.4%", sub: "Survival_Index", color: "emerald" },
  { label: "Syndicate Depth", val: "120+", sub: "Institutional_Nodes", color: "indigo" },
];

/** * =============================================================================
 * II. UI ATOMS: PREMIUM BUILDING BLOCKS
 * =============================================================================
 */

const ProtocolLabel = ({ text }) => (
  <motion.div 
    initial={{ opacity: 0, x: -10 }}
    animate={{ opacity: 1, x: 0 }}
    className="flex items-center gap-3 mb-8"
  >
    <div className="h-[1px] w-8 bg-blue-600 shadow-[0_0_10px_blue]" />
    <span className="text-[10px] font-black text-blue-600 uppercase tracking-[0.6em] italic">{text}</span>
  </motion.div>
);

const LuxuryInput = ({ label, icon: Icon, name, type = "text", placeholder, value, onChange, required = true }) => (
  <div className="space-y-4">
    <div className="flex justify-between items-center px-1">
       <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] italic">{label}</label>
       <div className="flex items-center gap-1.5">
          <div className="w-1 h-1 rounded-full bg-blue-500 animate-pulse" />
          <span className="text-[8px] font-bold text-blue-500/40 uppercase tracking-widest">Protocol_Sync</span>
       </div>
    </div>
    <div className="relative group">
      <div className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-blue-600 transition-all duration-500">
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
 * III. MAIN ARCHITECTURE: INVESTORS (SYNDICATE TERMINAL)
 * =============================================================================
 */

export default function Investors() {
  const API_BASE = import.meta.env.PROD ? "https://udaaro-backend.onrender.com" : "http://localhost:5000";
  const FOUNDER_NAME = "Apurva Priyadarshi";

  // --- Core Protocol State ---
  const [formData, setFormData] = useState({
    name: "", email: "", firm: "", investmentFocus: "", preferredStage: "", ticketSize: "",
  });

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
  const [handshakeProgress, setHandshakeProgress] = useState(0);

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (error) setError("");
  };

  const executeSovereignHandshake = async (e) => {
    e.preventDefault();
    if (!formData.preferredStage) {
      setError("Logical Failure: Capital Entry Node selection required.");
      return;
    }

    setMessage(""); setError(""); setLoading(true);
    setIsVerifying(true);

    // Simulated Verification Telemetry
    const interval = setInterval(() => {
      setHandshakeProgress(prev => (prev < 100 ? prev + 2 : 100));
    }, 40);

    setTimeout(async () => {
      try {
        const response = await fetch(`${API_BASE}/api/investors`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        const data = await response.json();

        if (response.ok) {
          setMessage("Institutional Handshake Accepted. Your access tokens are being generated by the Alpha Council.");
          clearInterval(interval);
          setHandshakeProgress(100);
        } else {
          setError(data.message || "Credential verification protocol failed. Access Denied.");
          setIsVerifying(false);
          clearInterval(interval);
        }
      } catch (err) {
        setError("Sovereign Terminal Offline: Handshake synchronization timeout.");
        setIsVerifying(false);
        clearInterval(interval);
      } finally {
        setLoading(false);
      }
    }, 2500);
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
               <span className="text-[9px] font-black text-blue-600 uppercase tracking-[0.4em] mt-2 italic">Sovereign_Sync</span>
            </div>
          </Link>
          
          <div className="flex items-center gap-10">
             <div className="hidden lg:flex items-center gap-4 px-6 py-2.5 bg-slate-950 text-white rounded-2xl shadow-3xl">
                <Activity size={12} className="text-emerald-500 animate-pulse" />
                <span className="text-[9px] font-black uppercase tracking-[0.4em] italic leading-none">Handshake_Active</span>
             </div>
             <Crown className="text-blue-600" size={28} />
          </div>
        </div>
      </nav>

      <main className="flex-grow flex flex-col lg:flex-row pt-28 lg:pt-0">
        
        {/* 2. LEFT SECTOR: SYNDICATE BRANDING & ANALYTICS */}
        <section className="lg:w-[45%] bg-slate-950 p-12 lg:p-24 text-white flex flex-col justify-between relative overflow-hidden">
          {/* Background Visual Layering */}
          <div className="absolute inset-0 z-0 opacity-[0.08] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
          <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-blue-600/20 rounded-full blur-[200px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[30vw] h-[30vw] bg-indigo-900/10 rounded-full blur-[160px] pointer-events-none" />
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10"
          >
            <div className="mb-24">
              <ProtocolLabel text="Elite Syndicate Portal" />
              <h1 className="text-6xl lg:text-[10rem] font-black leading-[0.8] tracking-tighter italic uppercase text-gradient-silver mb-12">
                Capital <br />
                <span className="text-blue-600 italic underline decoration-blue-900 decoration-[16px] underline-offset-[24px]">Resonance.</span>
              </h1>
              <p className="text-slate-400 mt-16 text-2xl md:text-3xl leading-relaxed max-w-lg font-medium italic">
                Udaaro provides institutional capital nodes a high-signal gateway into the core of Indian venture engineering.
              </p>
            </div>

            <div className="space-y-16 mb-24">
              {SYNDICATE_TRUST_ANCHORS.map((anchor, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + (i * 0.15) }}
                  className="flex gap-10 group cursor-default"
                >
                  <div className="flex-shrink-0 w-20 h-20 rounded-[2.5rem] bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-700 group-hover:bg-blue-600 group-hover:shadow-7xl group-hover:border-blue-400 group-hover:scale-110">
                    {React.cloneElement(anchor.icon, { 
                      size: 32, 
                      className: "text-blue-500 group-hover:text-white transition-all duration-500" 
                    })}
                  </div>
                  <div>
                    <div className="flex items-center gap-4 mb-3">
                       <h3 className="font-black text-lg uppercase tracking-tighter italic group-hover:text-blue-400 transition-colors leading-none">{anchor.title}</h3>
                       <span className="text-[9px] font-bold text-blue-600 bg-blue-600/10 px-3 py-1 rounded-lg uppercase tracking-widest opacity-40 italic">{anchor.node}</span>
                    </div>
                    <p className="text-slate-500 text-base leading-relaxed max-w-sm font-medium group-hover:text-slate-300 transition-colors">{anchor.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* PERFORMANCE METRICS MATRIX */}
            <div className="grid grid-cols-3 gap-10 pt-16 border-t border-white/10">
               {PERFORMANCE_INDEX.map((metric, i) => (
                 <div key={i} className="group">
                    <p className={`text-4xl font-black italic tracking-tighter text-${metric.color}-500 leading-none mb-4 group-hover:scale-110 transition-transform origin-left duration-500`}>{metric.val}</p>
                    <p className="text-[10px] font-black text-slate-300 uppercase tracking-[0.4em] mb-2">{metric.label}</p>
                    <p className="text-[9px] font-bold text-slate-600 uppercase italic tracking-widest">{metric.sub}</p>
                 </div>
               ))}
            </div>
          </motion.div>

          {/* Compliance & Engineering Ledger */}
          <div className="mt-32 lg:mt-0 relative z-10 flex flex-col md:flex-row justify-between items-end gap-12 pt-12 border-t border-white/5">
            <div className="space-y-8">
               <div className="flex items-center gap-4 text-slate-600 font-black uppercase text-[10px] tracking-[0.5em] italic">
                 <ShieldCheck size={16} className="text-emerald-500" /> Compliance_Governance_v3.0
               </div>
               <div className="flex gap-6">
                  {['KYC_SYNC', 'SEBI_PROTOCOL', 'DPIIT_READY'].map((label, i) => (
                    <div key={i} className="px-5 py-2.5 bg-white/5 border border-white/10 rounded-2xl flex items-center gap-3 group hover:bg-white/10 transition-all cursor-crosshair">
                       <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_blue]" />
                       <span className="text-[9px] font-black text-white/50 tracking-widest uppercase group-hover:text-white transition-colors">{label}</span>
                    </div>
                  ))}
               </div>
            </div>
            <div className="text-right hidden xl:block">
               <p className="text-[10px] font-black text-slate-700 uppercase tracking-[0.6em] mb-3 leading-none italic">Architected by</p>
               <p className="text-xl font-black italic tracking-tighter text-slate-500 uppercase leading-none">{FOUNDER_NAME.toUpperCase()}</p>
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
              
              {/* Progress Handshake Telemetry */}
              <div className="absolute top-0 left-0 w-full h-2 bg-slate-50">
                <motion.div 
                   animate={{ width: `${handshakeProgress}%` }}
                   transition={{ duration: 0.5, ease: "easeOut" }}
                   className="h-full bg-blue-600 shadow-[0_0_20px_blue]" 
                />
              </div>

              {/* Terminal Interface Header */}
              <div className="mb-24 text-center relative">
                <div className="flex items-center justify-center gap-6 mb-12">
                    <div className="h-px w-16 bg-blue-100" />
                    <div className="w-16 h-16 bg-blue-50 rounded-[1.8rem] flex items-center justify-center border border-blue-100 shadow-inner">
                       <Zap className="text-blue-600 animate-bounce" size={32} fill="currentColor" />
                    </div>
                    <div className="h-px w-16 bg-blue-100" />
                </div>
                <h2 className="text-6xl md:text-7xl font-black text-slate-950 tracking-tighter leading-none mb-8 uppercase italic">Syndicate Sync</h2>
                <p className="text-slate-400 text-xl font-medium italic uppercase tracking-widest opacity-60">Admission Node: Cycle_Alpha_2026</p>
              </div>

              <AnimatePresence mode="wait">
                {message ? (
                  <motion.div 
                    initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
                    className="mb-14 p-16 bg-blue-600 rounded-[5rem] text-white shadow-7xl relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 p-12 opacity-10 rotate-12"><CheckCircle2 size={160} /></div>
                    <div className="flex flex-col items-center text-center relative z-10">
                       <div className="w-24 h-24 rounded-[2.5rem] bg-white/20 flex items-center justify-center border-2 border-white/20 mb-8 shadow-4xl"><ShieldCheck size={56} /></div>
                       <p className="font-black text-4xl tracking-tighter leading-none uppercase italic mb-6">Handshake_Verified</p>
                       <p className="text-xl opacity-90 font-medium tracking-wide leading-relaxed mb-12">
                         {message}
                       </p>
                       <Link to="/" className="inline-flex items-center gap-4 px-12 py-6 bg-white text-blue-600 rounded-2xl font-black text-xs uppercase tracking-[0.4em] shadow-4xl hover:scale-105 active:scale-95 transition-all italic">
                          Return to Grid <ChevronRight size={18}/>
                       </Link>
                    </div>
                  </motion.div>
                ) : (
                  <form onSubmit={executeSovereignHandshake} className="space-y-16 relative z-10">
                    
                    {/* Section 01: Lead Identity */}
                    <div className="grid md:grid-cols-2 gap-10">
                      <LuxuryInput 
                        label="Executive Identity" icon={User} name="name" 
                        placeholder="Full Legal Name" value={formData.name} onChange={handleChange} 
                      />
                      <LuxuryInput 
                        label="Electronic Node" icon={AtSign} name="email" type="email"
                        placeholder="institutional@domain.com" value={formData.email} onChange={handleChange} 
                      />
                    </div>

                    {/* Section 02: Institutional Context */}
                    <div className="grid md:grid-cols-2 gap-10">
                      <LuxuryInput 
                        label="Institutional Firm" icon={Building} name="firm" 
                        placeholder="Organization Name" value={formData.firm} onChange={handleChange} 
                      />
                      <LuxuryInput 
                        label="Deployment Thesis" icon={Compass} name="investmentFocus" 
                        placeholder="e.g. AI / India_Stack / SaaS" value={formData.investmentFocus} onChange={handleChange} 
                      />
                    </div>

                    {/* Section 03: Decision Matrix (The Stage Selector) */}
                    <div className="space-y-10 p-12 bg-slate-50 rounded-[4rem] border border-slate-100 relative group/matrix">
                       <div className="absolute top-0 right-0 p-12 opacity-5 group-hover/matrix:opacity-10 transition-opacity"><LineIcon size={120}/></div>
                       
                       <div className="space-y-8 relative z-10">
                          <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.5em] ml-2 flex items-center gap-4 italic">
                             <Layers size={18} className="text-blue-600" /> Capital Entry Tier
                          </label>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                             {DEPLOYMENT_TIERS.map((tier) => (
                               <button
                                 key={tier.value}
                                 type="button"
                                 onClick={() => setFormData({...formData, preferredStage: tier.value})}
                                 className={`p-6 rounded-[2rem] text-left transition-all duration-700 border-2 ${
                                   formData.preferredStage === tier.value 
                                   ? "bg-slate-950 text-white border-slate-950 shadow-6xl scale-[1.03]" 
                                   : "bg-white text-slate-400 border-slate-100 hover:border-blue-300 hover:text-blue-600"
                                 }`}
                               >
                                 <div className="flex justify-between items-center mb-2">
                                    <span className="text-[13px] font-black uppercase tracking-widest leading-none italic">{tier.value.replace('_', ' ')}</span>
                                    {formData.preferredStage === tier.value && (
                                       <motion.div layoutId="activeTick" className="w-3 h-3 rounded-full bg-blue-500 shadow-[0_0_10px_blue]" />
                                    )}
                                 </div>
                                 <p className="text-[10px] font-bold opacity-60 uppercase tracking-tighter italic leading-relaxed">{tier.label}</p>
                                 <div className="mt-4 pt-4 border-t border-slate-100/10 flex justify-between items-center opacity-40">
                                    <span className="text-[8px] font-black uppercase">{tier.risk}_Risk</span>
                                    <span className="text-[8px] font-black uppercase">{tier.yield}</span>
                                 </div>
                               </button>
                             ))}
                          </div>
                       </div>

                       <LuxuryInput 
                          label="Target Deployment Capacity" icon={IndianRupee} name="ticketSize" 
                          placeholder="e.g. ₹5Cr - ₹10Cr" value={formData.ticketSize} onChange={handleChange} 
                       />
                    </div>

                    {/* Vetting Telemetry Display */}
                    <AnimatePresence>
                       {isVerifying && !message && (
                         <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} className="p-10 bg-slate-950 rounded-[4rem] text-white border border-blue-500/30 shadow-7xl">
                            <div className="flex justify-between items-center mb-8">
                               <div className="flex items-center gap-4">
                                  <Cpu className="text-blue-500 animate-spin" size={24} />
                                  <span className="text-[11px] font-black uppercase tracking-[0.5em] italic">Algorithmic_Logic_Validation</span>
                               </div>
                               <span className="text-[11px] font-mono text-blue-400 font-bold">{handshakeProgress}%</span>
                            </div>
                            <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                               <motion.div animate={{ width: `${handshakeProgress}%` }} className="h-full bg-blue-600 shadow-[0_0_15px_blue]" />
                            </div>
                            <div className="mt-8 flex justify-between items-center">
                               <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest italic">Node_Sync: Tokyo_Alpha_Active</p>
                               <div className="flex items-center gap-2">
                                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                                  <span className="text-[9px] font-black uppercase text-emerald-500 tracking-widest">Protocol_Secure</span>
                               </div>
                            </div>
                         </motion.div>
                       )}
                    </AnimatePresence>

                    {/* Primary Trigger Node */}
                    <div className="pt-10">
                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-slate-950 hover:bg-blue-600 text-white font-black py-10 rounded-full shadow-7xl transition-all active:scale-[0.98] flex flex-col items-center justify-center gap-4 disabled:opacity-50 uppercase group overflow-hidden relative"
                      >
                        <div className="flex items-center gap-6 relative z-10">
                          <span className="text-base tracking-[0.6em] italic leading-none">Execute Syndicate Sync</span>
                          <ChevronRight size={28} className="group-hover:translate-x-4 transition-transform duration-700" />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                      </button>
                    </div>

                    {/* Visual Tech Stack Grid */}
                    <div className="flex items-center justify-center gap-16 mt-20 opacity-20 group-hover:opacity-50 transition-opacity duration-1000">
                       <TerminalNode icon={<Binary size={36}/>} label="Mesh_Intel" />
                       <TerminalNode icon={<Globe2 size={36}/>} label="Grid_Sync" />
                       <TerminalNode icon={<Scale size={36}/>} label="Vetting_Core" />
                       <TerminalNode icon={<Layers3 size={36}/>} label="Stack_Init" />
                    </div>
                  </form>
                )}
              </AnimatePresence>

              {/* Protocol Error Logging */}
              <AnimatePresence>
                 {error && (
                    <motion.div 
                      initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} 
                      className="mt-14 p-8 bg-rose-50 border border-rose-100 rounded-[3rem] flex items-center gap-8 text-rose-600 text-sm font-black uppercase tracking-[0.3em] shadow-xl italic"
                    >
                       <ShieldAlert size={32} /> {error}
                    </motion.div>
                 )}
              </AnimatePresence>

              <div className="mt-24 pt-12 border-t border-slate-50 text-center opacity-30">
                 <p className="text-[10px] font-black text-slate-300 uppercase tracking-[0.8em] leading-relaxed italic">
                   Udaaro Alpha Network v3.0.4 <br /> 
                   SECURE_INSTITUTIONAL_HANDSHAKE_NODE
                 </p>
              </div>
            </div>
          </motion.div>
        </section>
      </main>

      {/* 4. MASTER FOOTER: GRID METADATA */}
      <footer className="p-16 border-t border-slate-100 bg-white flex flex-col xl:flex-row justify-between items-center gap-12">
        <div className="flex items-center gap-16">
           <div className="flex items-center gap-5 group cursor-crosshair">
              <div className="w-12 h-12 bg-slate-950 rounded-2xl flex items-center justify-center text-white font-black italic shadow-3xl text-xl group-hover:rotate-12 transition-all">U</div>
              <div className="flex flex-col">
                 <span className="text-lg font-black text-slate-950 tracking-tighter uppercase italic leading-none">Udaaro Syndicate</span>
                 <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-1">Capital_Governance_Node</span>
              </div>
           </div>
           <div className="h-10 w-[1px] bg-slate-200 hidden md:block" />
           <p className="text-[11px] font-bold text-slate-400 uppercase tracking-[0.2em] flex items-center gap-5">
             <ShieldCheck size={20} className="text-blue-600 animate-pulse" /> Vetted under {FOUNDER_NAME.toUpperCase()} Logic Protocol v3.0
           </p>
        </div>
        <div className="flex flex-wrap justify-center gap-12">
           <FooterUtility icon={<HardDrive size={16}/>} label="Infra_Status" />
           <FooterUtility icon={<ShieldQuestion size={16}/>} label="Risk_Matrix" />
           <FooterUtility icon={<Terminal size={16}/>} label="Handshake_Log" />
           <FooterUtility icon={<Key size={16}/>} label="Access_Protocol" color="blue" />
        </div>
      </footer>
    </div>
  );
}

/** * =============================================================================
 * IV. ATOMIC SUB-COMPONENTS
 * =============================================================================
 */

const TerminalNode = ({ icon, label }) => (
  <div className="flex flex-col items-center gap-4 group cursor-help">
    <div className="text-slate-400 group-hover:text-blue-600 group-hover:scale-110 transition-all duration-700">{icon}</div>
    <span className="text-[9px] font-black uppercase tracking-[0.5em] text-slate-400 group-hover:text-slate-950 transition-colors">{label}</span>
  </div>
);

const FooterUtility = ({ icon, label, color = "slate" }) => (
  <div className="flex items-center gap-4 group cursor-pointer border-b-2 border-transparent hover:border-blue-600 pb-2 transition-all duration-500">
    <div className={`text-${color}-400 group-hover:scale-110 transition-transform`}>{icon}</div>
    <span className={`text-[10px] font-black text-${color}-400 group-hover:text-slate-950 uppercase tracking-[0.4em] italic transition-colors`}>{label}</span>
  </div>
);

const StarIcon = ({ filled }) => (
  <Sparkles size={18} className={filled ? "text-blue-500 fill-blue-500 shadow-[0_0_10px_blue]" : "text-slate-200"} />
);