import React, { useState, useEffect, useRef, useMemo } from "react";
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
  LineChart as LineIcon
} from "lucide-react";

/** * =============================================================================
 * I. INSTITUTIONAL DATA CONFIGURATION
 * Design System: Alpha-Syndicate v2.9.4
 * Architected by Apurva Priyadarshi | Location: Indian Command Node
 * =============================================================================
 */

const INVESTMENT_STAGES = [
  { value: "Idea", label: "Pre-Seed / Intellectual Property", risk: "High", yield: "Exponential" },
  { value: "MVP", label: "Minimum Viable Product (MVP)", risk: "Moderate", yield: "High" },
  { value: "Revenue", label: "Seed / Revenue Generating", risk: "Low", yield: "Stable" },
  { value: "Scaling", label: "Series A+ / Expansion", risk: "Institutional", yield: "Market Dominant" },
];

const SYNDICATE_VALUE_PROPS = [
  {
    icon: <ShieldCheck />,
    title: "Sovereign Pipelines",
    desc: "Gain entry to a high-signal environment of founders vetted by the Apurva Priyadarshi standard.",
    stat: "Vetting Threshold: 1%"
  },
  {
    icon: <TrendingUp />,
    title: "Venture Intelligence",
    desc: "Access institutional-grade performance metrics and market synthesis before capital deployment.",
    stat: "Real-time Telemetry"
  },
  {
    icon: <Fingerprint />,
    title: "Direct Synthesis",
    desc: "Frictionless, direct-to-founder communication pathways secured by the Sovereign protocol.",
    stat: "E2E Encrypted Sync"
  }
];

const PERFORMANCE_METRICS = [
  { label: "Deployment Velocity", val: "₹1,200Cr+", sub: "Alpha Cycle 2025" },
  { label: "Institutional Nodes", val: "84", sub: "Global VCs / HNIs" },
  { label: "Capital Resonance", val: "3.5x", sub: "Average Portfolio Lift" },
];

const COMPLIANCE_NODES = [
  { label: "KYC_AML_PROTOCOL", status: "VERIFIED" },
  { label: "SEBI_ALIGNMENT_SCAN", status: "ACTIVE" },
  { label: "DPIIT_VENTURE_SHIELD", status: "ENFORCED" }
];

/** * =============================================================================
 * II. UI ATOMS & PREMIUM COMPONENTS
 * =============================================================================
 */

const SectionBadge = ({ text }) => (
  <motion.div 
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-600/10 border border-blue-600/20 text-blue-500 text-[10px] font-black uppercase tracking-[0.4em] mb-10 backdrop-blur-xl"
  >
    <Lock size={12} className="animate-pulse" />
    {text}
  </motion.div>
);

const InputField = ({ label, icon: Icon, name, type = "text", placeholder, value, onChange, required = true }) => (
  <div className="space-y-4">
    <div className="flex justify-between items-center px-1">
       <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{label}</label>
       <span className="text-[8px] font-bold text-blue-500/40 uppercase tracking-widest italic">Node_Required</span>
    </div>
    <div className="relative group">
      <div className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-blue-500 transition-all duration-300">
        <Icon size={18} />
      </div>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full bg-slate-50 border-0 ring-1 ring-slate-100 focus:ring-2 focus:ring-blue-600 focus:bg-white rounded-[1.5rem] py-5 pl-16 pr-6 transition-all outline-none font-bold text-sm shadow-inner"
        required={required}
      />
    </div>
  </div>
);

/** * =============================================================================
 * III. MAIN ARCHITECTURE: INVESTORS (THE SYNDICATE PORTAL)
 * =============================================================================
 */

function Investors() {
  const API_BASE = import.meta.env.PROD ? "https://udaaro-backend.onrender.com" : "http://localhost:5000";
  const FOUNDER_NAME = "Apurva Priyadarshi";

  const [formData, setFormData] = useState({
    name: "", email: "", firm: "", investmentFocus: "", preferredStage: "", ticketSize: "",
  });

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  
  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(""); setError(""); setLoading(true);
    setIsVerifying(true);

    // Simulate "Institutional Vetting" sequence
    setTimeout(async () => {
      try {
        const response = await fetch(`${API_BASE}/api/investors`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        const data = await response.json();

        if (response.ok) {
          setMessage("Institutional Handshake Accepted. Access tokens are being synchronized for your identity.");
          setFormData({ name: "", email: "", firm: "", investmentFocus: "", preferredStage: "", ticketSize: "" });
        } else {
          setError(data.message || "Credential authentication failed. Access Denied.");
          setIsVerifying(false);
        }
      } catch (err) {
        setError("Sovereign Terminal Offline: Sync node connection lost.");
        setIsVerifying(false);
      } finally {
        setLoading(false);
      }
    }, 2500);
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-[#fcfcfd] flex flex-col font-sans selection:bg-blue-600 selection:text-white overflow-x-hidden">
      
      {/* 1. TOP PROTOCOL HEADER */}
      <nav className="p-10 fixed top-0 left-0 w-full z-50 bg-white/10 backdrop-blur-md border-b border-slate-100 sm:border-none">
        <div className="max-w-[1800px] mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3 group text-slate-400 hover:text-slate-950 transition-all">
            <div className="w-10 h-10 bg-slate-950 rounded-xl flex items-center justify-center text-white font-black italic shadow-xl group-hover:rotate-90 transition-transform duration-500">U</div>
            <span className="text-[11px] font-black uppercase tracking-[0.4em] hidden sm:inline">Udaaro Sovereign Terminal</span>
          </Link>
          
          <div className="flex items-center gap-8">
             <div className="hidden md:flex items-center gap-3 px-5 py-2 bg-slate-950 text-white rounded-2xl shadow-2xl border border-white/10">
                <Activity size={12} className="text-emerald-500 animate-pulse" />
                <span className="text-[9px] font-black uppercase tracking-[0.3em]">Protocol_2.9.4_Active</span>
             </div>
             <Crown className="text-blue-600 shadow-blue-500/20" size={24} />
          </div>
        </div>
      </nav>

      <main className="flex-grow flex flex-col lg:flex-row pt-24 lg:pt-0">
        
        {/* 2. LEFT SIDE: SYNDICATE BRANDING & ANALYTICS */}
        <section className="lg:w-[45%] bg-slate-950 p-12 lg:p-24 text-white flex flex-col justify-between relative overflow-hidden">
          {/* Background Visual Layering */}
          <div className="absolute inset-0 z-0 opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
          <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-blue-600 rounded-full blur-[180px] opacity-20 pointer-events-none" />
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative z-10"
          >
            <div className="mb-24">
              <SectionBadge text="Elite Syndicate Access" />
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="text-6xl lg:text-[8rem] font-black mt-4 leading-[0.8] tracking-tighter italic uppercase mb-12"
              >
                Capital <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-400">Resonance.</span>
              </motion.h1>
              <p className="text-slate-400 mt-12 text-2xl leading-relaxed max-w-lg font-medium italic">
                Udaaro provides institutional capital and visionary syndicates a high-signal gateway into the core of Indian innovation.
              </p>
            </div>

            <div className="space-y-16 mb-24">
              {SYNDICATE_VALUE_PROPS.map((prop, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + (i * 0.15) }}
                  className="flex gap-10 group cursor-pointer"
                >
                  <div className={`flex-shrink-0 w-20 h-20 rounded-[2.5rem] flex items-center justify-center transition-all duration-700 bg-white/5 border border-white/10 group-hover:bg-blue-600 group-hover:shadow-[0_0_50px_rgba(37,99,235,0.4)]`}>
                    {React.cloneElement(prop.icon, { 
                      size: 32, 
                      className: "text-blue-500 group-hover:text-white group-hover:scale-110 transition-all" 
                    })}
                  </div>
                  <div>
                    <div className="flex items-center gap-4 mb-3">
                       <h3 className="font-black text-base uppercase tracking-widest italic">{prop.title}</h3>
                       <span className="text-[9px] font-bold text-blue-600 bg-blue-600/10 px-3 py-1 rounded-full uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-opacity">[{prop.stat}]</span>
                    </div>
                    <p className="text-slate-500 text-sm leading-relaxed max-w-sm font-medium group-hover:text-slate-300 transition-colors">{prop.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* PERFORMANCE METRICS BAR */}
            <div className="grid grid-cols-3 gap-10 pt-16 border-t border-white/10">
               {PERFORMANCE_METRICS.map((stat, i) => (
                 <motion.div key={i} whileHover={{ y: -5 }}>
                    <p className="text-4xl font-black italic tracking-tighter text-blue-500 leading-none mb-3">{stat.val}</p>
                    <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest">{stat.label}</p>
                    <p className="text-[10px] font-bold text-slate-600 uppercase mt-1 italic leading-none">{stat.sub}</p>
                 </motion.div>
               ))}
            </div>
          </motion.div>

          {/* Institutional Compliance Ticker */}
          <div className="mt-32 lg:mt-0 relative z-10 flex flex-col md:flex-row justify-between items-end gap-10 pt-12 border-t border-white/5">
            <div className="space-y-6 w-full md:w-auto">
               <div className="flex items-center gap-4 text-slate-600 font-black uppercase text-[10px] tracking-[0.5em] mb-2 italic">
                 <ShieldCheck size={14} className="text-emerald-500" /> Compliance_Registry_v2.9
               </div>
               <div className="flex gap-4">
                  {COMPLIANCE_NODES.map((node, i) => (
                    <div key={i} className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl flex items-center gap-3 grayscale hover:grayscale-0 transition-all opacity-40 hover:opacity-100">
                       <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                       <span className="text-[8px] font-black tracking-widest uppercase">{node.label}</span>
                    </div>
                  ))}
               </div>
            </div>
            <div className="text-right hidden xl:block">
               <p className="text-[10px] font-black text-slate-700 uppercase tracking-[0.5em] mb-2 leading-none">Architected by</p>
               <p className="text-lg font-black italic tracking-tighter text-slate-500">{FOUNDER_NAME}</p>
            </div>
          </div>
        </section>

        {/* 3. RIGHT SIDE: ADMISSION PROTOCOL (FORM) */}
        <section className="lg:w-[55%] p-8 lg:p-24 flex flex-col items-center justify-center bg-[#fdfdfe] relative overflow-y-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-2xl w-full"
          >
            <div className="bg-white rounded-[5rem] shadow-[0_100px_200px_-50px_rgba(0,0,0,0.1)] p-12 lg:p-20 border border-slate-100 relative group overflow-hidden">
              
              {/* Progress Handshake Bar */}
              <div className="absolute top-0 left-0 w-full h-1.5 bg-slate-50">
                <motion.div 
                   animate={isVerifying ? { width: "100%" } : { width: "15%" }}
                   transition={{ duration: 2.5, ease: "easeInOut" }}
                   className="h-full bg-blue-600 shadow-[0_0_15px_rgba(37,99,235,0.6)]" 
                />
              </div>

              {/* Form Architecture */}
              <div className="mb-20 text-center relative">
                <div className="flex items-center justify-center gap-4 mb-8">
                    <div className="h-px w-12 bg-blue-100" />
                    <Zap className="text-blue-600 animate-bounce" size={24} fill="currentColor" />
                    <div className="h-px w-12 bg-blue-100" />
                </div>
                <h2 className="text-5xl md:text-6xl font-black text-slate-950 tracking-tighter leading-none mb-6 uppercase italic">Syndicate Onboarding</h2>
                <p className="text-slate-400 text-lg font-medium italic uppercase tracking-widest opacity-60">Admission Protocol Alpha-Sync</p>
              </div>

              <AnimatePresence mode="wait">
                {message && (
                  <motion.div 
                    initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
                    className="mb-12 p-12 bg-blue-600 rounded-[4rem] text-white shadow-6xl shadow-blue-500/30 relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 p-10 opacity-10 rotate-12"><CheckCircle2 size={120} /></div>
                    <div className="flex items-center gap-8 relative z-10">
                       <div className="w-20 h-20 rounded-[2rem] bg-white/20 flex items-center justify-center border-2 border-white/20"><ShieldCheck size={40} /></div>
                       <div>
                          <p className="font-black text-2xl tracking-tight leading-none uppercase italic">Sync_Successful</p>
                          <p className="text-sm opacity-80 mt-3 font-medium tracking-wide uppercase leading-relaxed">{message}</p>
                       </div>
                    </div>
                    <Link to="/" className="mt-10 inline-flex items-center gap-3 px-8 py-4 bg-white text-blue-600 rounded-2xl font-black text-[10px] uppercase tracking-widest shadow-xl hover:scale-105 transition-all">
                       Return to Core Node <ChevronRight size={14}/>
                    </Link>
                  </motion.div>
                )}

                {error && (
                  <motion.div initial={{ y: -10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="mb-10 p-6 bg-rose-50 border border-rose-100 rounded-[2.5rem] flex items-center gap-6 text-rose-600 text-xs font-black uppercase tracking-widest shadow-lg">
                    <ShieldAlert size={24} /> {error}
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit} className="space-y-12 relative z-10">
                
                <div className="grid md:grid-cols-2 gap-10">
                  <InputField 
                    label="Identity Matrix" icon={User} name="name" 
                    placeholder="Full Legal Name" value={formData.name} onChange={handleChange} 
                  />
                  <InputField 
                    label="Electronic Terminal" icon={Mail} name="email" type="email"
                    placeholder="name@firm.com" value={formData.email} onChange={handleChange} 
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-10">
                  <InputField 
                    label="Institutional Firm" icon={Briefcase} name="firm" 
                    placeholder="Organization Name" value={formData.firm} onChange={handleChange} 
                  />
                  <InputField 
                    label="Deployment Thesis" icon={Compass} name="investmentFocus" 
                    placeholder="e.g. AI / Fintech IP" value={formData.investmentFocus} onChange={handleChange} 
                  />
                </div>

                {/* ADVANCED SELECTION MATRIX */}
                <div className="space-y-8 p-10 bg-slate-50/50 rounded-[3.5rem] border border-slate-100 relative overflow-hidden group/matrix">
                  <div className="absolute top-0 right-0 p-8 opacity-5 group-hover/matrix:opacity-10 transition-opacity"><LineIcon size={80}/></div>
                  
                  <div className="space-y-6 relative z-10">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em] ml-2 flex items-center gap-3">
                       <Layers size={14} className="text-blue-600" /> Capital Entry Node
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {INVESTMENT_STAGES.map((s) => (
                        <button
                          key={s.value}
                          type="button"
                          onClick={() => setFormData({...formData, preferredStage: s.value})}
                          className={`p-5 rounded-[1.8rem] text-left transition-all duration-500 border-2 ${
                            formData.preferredStage === s.value 
                            ? "bg-slate-950 text-white border-slate-950 shadow-4xl scale-[1.02]" 
                            : "bg-white text-slate-400 border-slate-100 hover:border-blue-300 hover:text-blue-600"
                          }`}
                        >
                          <div className="flex justify-between items-center mb-1">
                             <span className="text-[11px] font-black uppercase tracking-widest">{s.value}</span>
                             {formData.preferredStage === s.value && <div className="w-2 h-2 rounded-full bg-blue-500 animate-ping" />}
                          </div>
                          <p className="text-[9px] font-bold opacity-60 uppercase tracking-tighter leading-none">{s.label}</p>
                        </button>
                      ))}
                    </div>
                  </div>

                  <InputField 
                    label="Target Deployment (INR/USD)" icon={Banknote} name="ticketSize" 
                    placeholder="e.g. ₹5Cr - ₹10Cr" value={formData.ticketSize} onChange={handleChange} 
                  />
                </div>

                <div className="pt-10 relative">
                  {isVerifying && (
                    <div className="absolute -top-10 left-0 w-full flex justify-center">
                       <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-3 px-6 py-2 bg-slate-950 text-blue-400 rounded-full border border-blue-500/20 shadow-2xl">
                          <Cpu size={14} className="animate-spin" />
                          <span className="text-[9px] font-black uppercase tracking-[0.5em]">Verifying_Handshake...</span>
                       </motion.div>
                    </div>
                  )}
                  
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-slate-950 hover:bg-blue-600 text-white font-black py-10 rounded-full shadow-6xl shadow-blue-500/30 transition-all active:scale-[0.98] flex flex-col items-center justify-center gap-3 disabled:opacity-50 uppercase group overflow-hidden relative"
                  >
                    <div className="flex items-center gap-4 relative z-10">
                      <span className="text-sm tracking-[0.5em]">Execute Institutional Sync</span>
                      <ChevronRight size={24} className="group-hover:translate-x-3 transition-transform duration-500" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  </button>
                </div>

                <div className="flex items-center justify-center gap-12 mt-16 pb-4 opacity-30 group-hover:opacity-60 transition-opacity duration-1000">
                   <IconNode icon={<Workflow size={28}/>} label="Mesh_Intel" />
                   <IconNode icon={<Globe2 size={28}/>} label="Grid_Sync" />
                   <IconNode icon={<Scale size={28}/>} label="Vetting_Core" />
                </div>
              </form>
            </div>
          </motion.div>
        </section>
      </main>

      {/* 4. MASTER FOOTER: GRID METADATA */}
      <footer className="p-12 border-t border-slate-200 bg-white flex flex-col xl:flex-row justify-between items-center gap-10">
        <div className="flex items-center gap-12">
           <div className="flex items-center gap-4 group cursor-crosshair">
              <div className="w-10 h-10 bg-slate-950 rounded-2xl flex items-center justify-center text-white font-black italic shadow-lg group-hover:scale-110 transition-transform">U</div>
              <span className="text-sm font-black text-slate-950 tracking-tighter uppercase italic">UDAARO <span className="text-blue-600">SYNDICATE</span></span>
           </div>
           <div className="h-6 w-[1px] bg-slate-200 hidden md:block" />
           <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-4">
             <ShieldCheck size={16} className="text-blue-600" /> Curated under {FOUNDER_NAME.toUpperCase()} Protocol v2.9
           </p>
        </div>
        <div className="flex flex-wrap justify-center gap-10">
           <FooterLink label="Infrastructure Status" />
           <FooterLink label="Risk Charter" />
           <FooterLink label="Handshake Log" />
           <FooterLink label="Sovereign Policy" color="blue" />
        </div>
      </footer>
    </div>
  );
}

/** * =============================================================================
 * IV. ATOMIC HELPERS & UTILITIES
 * =============================================================================
 */

const IconNode = ({ icon, label }) => (
  <div className="flex flex-col items-center gap-3">
    <div className="text-slate-400 group-hover:text-blue-600 transition-colors">{icon}</div>
    <span className="text-[8px] font-black uppercase tracking-[0.4em] text-slate-400">{label}</span>
  </div>
);

const FooterLink = ({ label, color = "slate" }) => (
  <span className={`text-[10px] font-black text-${color}-400 hover:text-slate-950 cursor-pointer transition-colors uppercase tracking-[0.3em] border-b-2 border-transparent hover:border-slate-950 pb-1 italic`}>
    {label}
  </span>
);

export default Investors;