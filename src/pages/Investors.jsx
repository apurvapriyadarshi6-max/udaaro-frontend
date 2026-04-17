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
  Layers3,
  Dna,
  Microscope,
  FileCode,
  Box,
  CpuIcon,
  ActivitySquare,
  BookOpen,
  History
} from "lucide-react";

/** * =============================================================================
 * I. INSTITUTIONAL SYNDICATE CONFIGURATION
 * Design System: Alpha-Syndicate-Sync v3.1.0
 * Logic: Venture Operating System (Venture OS)
 * Architected by Apurva Priyadarshi | Environment: Syndicate Liquidity Node
 * =============================================================================
 */

const SYNDICATE_CONTEXT = {
  status: "Prototype / Alpha Stage",
  focus: "Deep Tech, AI, Fintech",
  model: "Venture OS Integration",
  handshake: "Highly Selective Admission"
};

const CAPITAL_ALLOCATION_NODES = [
  { value: "Seed_Logic", label: "Seed / Execution Frameworks", risk: "Strategic", color: "blue" },
  { value: "Growth_Sovereignty", label: "Series A / Sustainable Scaling", risk: "Calculated", color: "indigo" },
  { value: "Institutional_Grid", label: "Institutional / Exit Pathing", risk: "Minimal", color: "emerald" },
  { value: "Deep_Alpha", label: "Deep Tech / Radical Innovation", risk: "Venture", color: "cyan" },
];

const SYNDICATE_VALUE_CHAIN = [
  {
    icon: <Workflow />,
    title: "Venture OS Integration",
    desc: "Capital is aligned with execution infrastructure, ensuring startups build on structured frameworks.",
    protocol: "EXEC_INFRA_01"
  },
  {
    icon: <ShieldCheck />,
    title: "Radical Transparency",
    desc: "Direct, honest feedback loops between founders and strategic backers through the Sovereign Grid.",
    protocol: "GRID_TRANS_08"
  },
  {
    icon: <Layers />,
    title: "Sovereign Growth",
    desc: "Focus on independent, sustainable scaling to avoid dependency-driven failure models.",
    protocol: "SOV_GROWTH_X"
  }
];

const ALPHA_BENCHMARKS = [
  { label: "India Pipeline", val: "Alpha", sub: "Onboarding_In_Progress", color: "blue" },
  { label: "Handshake Speed", val: "Selective", sub: "Manual_Vetting_Mode", color: "emerald" },
  { label: "Target Sectors", val: "4", sub: "High_Impact_Only", color: "indigo" },
];

/** * =============================================================================
 * II. UI ATOMS: INSTITUTIONAL BUILDING NODES
 * =============================================================================
 */

const SectionBadge = ({ text }) => (
  <motion.div 
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-blue-600/10 border border-blue-600/20 text-blue-500 text-[10px] font-black uppercase tracking-[0.5em] mb-12 backdrop-blur-xl italic"
  >
    <Lock size={14} className="animate-pulse" />
    {text}
  </motion.div>
);

const LuxuryTerminalInput = ({ label, icon: Icon, name, type = "text", placeholder, value, onChange, required = true }) => (
  <div className="space-y-4">
    <div className="flex justify-between items-center px-1">
       <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em] italic">{label}</label>
       <div className="flex items-center gap-1.5 opacity-40">
          <div className="w-1 h-1 rounded-full bg-blue-500 animate-pulse" />
          <span className="text-[8px] font-bold text-slate-950 uppercase tracking-widest">Logic_Verified</span>
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
        className="w-full bg-slate-50 border-0 ring-1 ring-slate-200 focus:ring-2 focus:ring-blue-600 focus:bg-white rounded-[1.8rem] py-6 pl-16 pr-6 transition-all outline-none font-bold text-sm shadow-inner placeholder:text-slate-200"
        required={required}
      />
    </div>
  </div>
);

/** * =============================================================================
 * III. MAIN ARCHITECTURE: SYNDICATE TERMINAL (ALPHA VERSION)
 * =============================================================================
 */

export default function Investors() {
  const API_BASE = import.meta.env.PROD ? "https://udaaro-backend.onrender.com" : "http://localhost:5000";
  const FOUNDER_NAME = "Apurva Priyadarshi";

  const [formData, setFormData] = useState({
    name: "", email: "", firm: "", investmentFocus: "", preferredStage: "", ticketSize: "",
  });

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
  const [progress, setProgress] = useState(0);

  const containerRef = useRef(null);
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (error) setError("");
  };

  const executeSyndicateSync = async (e) => {
    e.preventDefault();
    if (!formData.preferredStage) {
      setError("Logical Failure: Capital entry node selection mandatory.");
      return;
    }

    setMessage(""); setError(""); setLoading(true);
    setIsVerifying(true);

    const interval = setInterval(() => {
      setProgress(prev => (prev < 100 ? prev + 1 : 100));
    }, 32);

    setTimeout(async () => {
      try {
        const response = await fetch(`${API_BASE}/api/investors`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        const data = await response.json();

        if (response.ok) {
          setMessage("Handshake Successful. Your credentials have been synchronized with the Alpha Governance Node.");
          clearInterval(interval);
          setProgress(100);
        } else {
          setError(data.message || "Credential authentication failed. Handshake Aborted.");
          setIsVerifying(false);
          clearInterval(interval);
        }
      } catch (err) {
        setError("Infrastructure Timeout: Peer-to-peer sync failed.");
        setIsVerifying(false);
        clearInterval(interval);
      } finally {
        setLoading(false);
      }
    }, 3500);
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-[#fcfcfd] flex flex-col font-sans selection:bg-blue-600 selection:text-white overflow-x-hidden">
      
      {/* 1. MASTER PROTOCOL HEADER */}
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
               <span className="text-[9px] font-black text-blue-600 uppercase tracking-[0.5em] mt-2 italic">Syndicate_Node</span>
            </div>
          </Link>
          
          <div className="flex items-center gap-10">
             <div className="hidden lg:flex items-center gap-4 px-6 py-2.5 bg-slate-950 text-white rounded-2xl shadow-3xl">
                <Activity size={12} className="text-emerald-500 animate-pulse" />
                <span className="text-[9px] font-black uppercase tracking-[0.4em] italic leading-none">Status: ALPHA_SYNCING</span>
             </div>
             <ShieldCheck className="text-blue-600" size={28} />
          </div>
        </div>
      </nav>

      <main className="flex-grow flex flex-col lg:flex-row pt-28 lg:pt-0">
        
        {/* 2. LEFT SIDE: SYSTEM BRANDING & ALPHA BENCHMARKS */}
        <section className="lg:w-[45%] bg-slate-950 p-12 lg:p-24 text-white flex flex-col justify-between relative overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-[0.08] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
          <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-blue-600/20 rounded-full blur-[200px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[30vw] h-[30vw] bg-indigo-900/10 rounded-full blur-[160px] pointer-events-none" />
          
          <motion.div 
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10"
          >
            <div className="mb-24">
              <SectionBadge text="Elite Syndicate Admission" />
              <h1 className="text-6xl lg:text-[10rem] font-black leading-[0.8] tracking-tighter italic uppercase text-gradient-silver mb-14">
                Capital <br />
                <span className="text-blue-600 italic underline decoration-blue-900 decoration-[16px] underline-offset-[24px]">Resonance.</span>
              </h1>
              <p className="text-slate-400 mt-16 text-2xl md:text-3xl leading-relaxed max-w-lg font-medium italic">
                Udaaro synchronizes strategic capital with high-potential founders through our proprietary <span className="text-white font-black uppercase tracking-widest leading-none">Venture Operating System.</span>
              </p>
            </div>

            <div className="space-y-16 mb-24">
              {SYNDICATE_VALUE_CHAIN.map((node, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + (i * 0.15) }}
                  className="flex gap-10 group cursor-default"
                >
                  <div className="flex-shrink-0 w-20 h-20 rounded-[2.5rem] bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-700 group-hover:bg-blue-600 group-hover:shadow-7xl group-hover:border-blue-400 group-hover:scale-110">
                    {React.cloneElement(node.icon, { size: 32, className: "text-blue-500 group-hover:text-white transition-all duration-500" })}
                  </div>
                  <div>
                    <h3 className="font-black text-xl uppercase tracking-tighter italic group-hover:text-blue-400 transition-colors leading-none mb-3">{node.title}</h3>
                    <p className="text-slate-500 text-base leading-relaxed max-w-sm font-medium group-hover:text-slate-300 transition-colors italic">"{node.desc}"</p>
                    <span className="text-[9px] font-black text-blue-600/40 uppercase tracking-widest mt-2 block italic">Protocol: {node.protocol}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* ALPHA BENCHMARK TELEMETRY */}
            <div className="grid grid-cols-3 gap-10 pt-16 border-t border-white/10">
               {ALPHA_BENCHMARKS.map((stat, i) => (
                 <div key={i} className="group">
                    <p className={`text-4xl font-black italic tracking-tighter text-white leading-none mb-4 group-hover:scale-110 transition-transform origin-left duration-500`}>{stat.val}</p>
                    <p className="text-[10px] font-black text-blue-200 uppercase tracking-[0.4em] mb-2 leading-none">{stat.label}</p>
                    <p className="text-[9px] font-bold text-blue-300/30 uppercase italic tracking-widest leading-none">{stat.sub}</p>
                 </div>
               ))}
            </div>
          </motion.div>

          {/* Institutional Compliance Signature */}
          <div className="mt-32 lg:mt-0 relative z-10 flex flex-col md:flex-row justify-between items-end gap-12 pt-12 border-t border-white/10">
            <div className="space-y-8">
               <div className="flex items-center gap-4 text-blue-100 font-black uppercase text-[10px] tracking-[0.5em] italic leading-none">
                 <ShieldCheck size={16} className="text-white" /> Global_Syndicate_Alpha_v3.1
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
                   animate={{ width: `${progress}%` }}
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
                <p className="text-slate-400 text-xl font-medium italic uppercase tracking-widest opacity-60">Handshake Phase: Alpha Admission</p>
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
                       <p className="font-black text-4xl tracking-tighter leading-none uppercase italic mb-6">Handshake_Accepted</p>
                       <p className="text-xl opacity-90 font-medium tracking-wide leading-relaxed mb-12 uppercase italic tracking-widest">
                         {message}
                       </p>
                       <Link to="/" className="inline-flex items-center gap-4 px-12 py-6 bg-white text-blue-600 rounded-2xl font-black text-xs uppercase tracking-[0.4em] shadow-4xl hover:scale-105 active:scale-95 transition-all italic">
                          Return to Sovereign Node <ChevronRight size={18}/>
                       </Link>
                    </div>
                  </motion.div>
                ) : (
                  <form onSubmit={executeSyndicateSync} className="space-y-16 relative z-10">
                    
                    {/* Section 01: Lead Identity */}
                    <div className="grid md:grid-cols-2 gap-10">
                      <LuxuryTerminalInput 
                        label="Executive Identity" icon={User} name="name" 
                        placeholder="Full Legal Name" value={formData.name} onChange={handleChange} 
                      />
                      <LuxuryTerminalInput 
                        label="Institutional Node" icon={AtSign} name="email" type="email"
                        placeholder="hni@institution.com" value={formData.email} onChange={handleChange} 
                      />
                    </div>

                    {/* Section 02: Institutional Context */}
                    <LuxuryTerminalInput 
                        label="Firm / Asset Management Identity" icon={Building} name="firm" 
                        placeholder="Organization Name" value={formData.firm} onChange={handleChange} 
                    />

                    {/* Section 03: Decision Matrix */}
                    <div className="space-y-12 p-12 bg-slate-50 rounded-[4rem] border border-slate-100 relative group/matrix">
                       <div className="absolute top-0 right-0 p-12 opacity-5 group-hover/matrix:opacity-10 transition-opacity"><Binary size={120}/></div>
                       
                       <div className="space-y-10 relative z-10">
                          <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.5em] ml-2 flex items-center gap-4 italic">
                             <Layers size={18} className="text-blue-600" /> Capital Deployment Node
                          </label>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                             {CAPITAL_ALLOCATION_NODES.map((item) => (
                               <button
                                 key={item.value}
                                 type="button"
                                 onClick={() => setFormData({...formData, preferredStage: item.value})}
                                 className={`p-6 rounded-[2rem] text-left transition-all duration-700 border-2 ${
                                   formData.preferredStage === item.value 
                                   ? "bg-slate-950 text-white border-slate-950 shadow-6xl scale-[1.03]" 
                                   : "bg-white text-slate-400 border-slate-100 hover:border-blue-300 hover:text-blue-600"
                                 }`}
                               >
                                 <div className="flex justify-between items-center mb-2">
                                    <span className="text-[13px] font-black uppercase tracking-widest leading-none italic">{item.value.replace('_', ' ')}</span>
                                    {formData.preferredStage === item.value && (
                                       <motion.div layoutId="syndicateTick" className="w-3 h-3 rounded-full bg-blue-500 shadow-[0_0_10px_blue]" />
                                    )}
                                 </div>
                                 <p className="text-[10px] font-bold opacity-60 uppercase tracking-tighter italic leading-relaxed">{item.label}</p>
                                 <div className="mt-4 pt-4 border-t border-slate-100/10 opacity-40">
                                    <span className="text-[8px] font-black uppercase tracking-widest">{item.risk}_Risk_Scoping</span>
                                 </div>
                               </button>
                             ))}
                          </div>
                       </div>

                       <LuxuryTerminalInput 
                          label="Deployment Thesis / Target Ticket" icon={IndianRupee} name="ticketSize" 
                          placeholder="e.g. ₹5Cr - ₹10Cr" value={formData.ticketSize} onChange={handleChange} 
                       />
                    </div>

                    {/* Vetting Telemetry Display */}
                    <AnimatePresence>
                       {isVerifying && !message && (
                         <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} className="p-12 bg-slate-950 rounded-[4rem] text-white border border-blue-500/30 shadow-7xl">
                            <div className="flex justify-between items-center mb-10">
                               <div className="flex items-center gap-5">
                                  <Cpu className="text-blue-500 animate-spin" size={28} />
                                  <div>
                                     <span className="text-[11px] font-black uppercase tracking-[0.5em] italic block text-blue-500">Institutional_Sync_Active</span>
                                     <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest italic">Authenticating Access Nodes...</span>
                                  </div>
                               </div>
                               <span className="text-2xl font-black font-mono text-blue-400 italic">{progress}%</span>
                            </div>
                            <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden mb-8 shadow-inner">
                               <motion.div animate={{ width: `${progress}%` }} className="h-full bg-blue-600 shadow-[0_0_20px_blue]" />
                            </div>
                            <div className="flex justify-between items-center opacity-40">
                               <div className="flex items-center gap-3">
                                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                  <span className="text-[8px] font-black uppercase tracking-[0.5em]">Ledger: Encrypted</span>
                               </div>
                               <span className="text-[8px] font-black uppercase tracking-[0.5em]">Node: India_Gateway_01</span>
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
                          <span className="text-lg tracking-[0.6em] italic leading-none font-black uppercase">Verify Syndicate Access</span>
                          <ChevronRight size={32} className="group-hover:translate-x-5 transition-transform duration-700" />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                      </button>
                    </div>

                    {/* Industrial Logic Stack Visuals */}
                    <div className="flex items-center justify-center gap-20 mt-24 opacity-20 group-hover:opacity-60 transition-opacity duration-1000">
                       <AdvisoryLogicNode icon={<Binary size={40}/>} label="Logic_Vetting" />
                       <AdvisoryLogicNode icon={<Globe size={40}/>} label="Global_Mesh" />
                       <AdvisoryLogicNode icon={<Scale size={40}/>} label="Compliance" />
                       <AdvisoryLogicNode icon={<Workflow size={40}/>} label="Grid_Init" />
                    </div>
                  </form>
                )}
              </AnimatePresence>

              {/* Protocol Error Logging */}
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
                   Udaaro Alpha Network v3.1.0 <br /> 
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
                 <span className="text-xl font-black text-slate-950 tracking-tighter uppercase italic leading-none">Udaaro Syndicate</span>
                 <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Capital_Governance_Node</span>
              </div>
           </div>
           <div className="h-12 w-[1px] bg-slate-200 hidden md:block" />
           <p className="text-[12px] font-bold text-slate-400 uppercase tracking-[0.3em] flex items-center gap-6 italic">
             <ShieldCheck size={24} className="text-blue-600 animate-pulse" /> Vetted under {FOUNDER_NAME.toUpperCase()} Governance Protocol v3.1
           </p>
        </div>
        <div className="flex flex-wrap justify-center gap-14">
           <FooterProtocol icon={<HardDrive size={18}/>} label="Node_Health" />
           <FooterProtocol icon={<ShieldQuestion size={18}/>} label="Ethical_Charter" />
           <FooterProtocol icon={<Terminal size={18}/>} label="Admin_Pulse" />
           <FooterProtocol icon={<Key size={18}/>} label="Sovereign_Access" color="blue" />
        </div>
      </footer>
    </div>
  );
}

/** * =============================================================================
 * IV. ATOMIC SUB-COMPONENTS
 * ============================================================================= */

const AdvisoryLogicNode = ({ icon, label }) => (
  <div className="flex flex-col items-center gap-5 group cursor-help">
    <div className="text-slate-400 group-hover:text-blue-600 group-hover:scale-125 transition-all duration-1000 transform group-hover:rotate-6">{icon}</div>
    <span className="text-[10px] font-black uppercase tracking-[0.6em] text-slate-400 group-hover:text-slate-950 transition-colors italic">{label}</span>
  </div>
);

const FooterProtocol = ({ icon, label, color = "slate" }) => (
  <div className="flex items-center gap-5 group cursor-pointer border-b-2 border-transparent hover:border-blue-600 pb-3 transition-all duration-700">
    <div className={`text-${color}-400 group-hover:scale-125 transition-transform duration-500`}>{icon}</div>
    <span className={`text-[11px] font-black text-${color}-400 group-hover:text-slate-950 uppercase tracking-[0.5em] italic transition-colors`}>{label}</span>
  </div>
);