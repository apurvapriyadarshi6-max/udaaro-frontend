import React, { useState, useEffect, useRef, useMemo } from "react";
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
  AlertCircle
} from "lucide-react";

/** * =============================================================================
 * I. INSTITUTIONAL CONFIGURATION
 * Design System: Alpha-Advisory v2.9.2
 * Architected by Apurva Priyadarshi | Node: Global Advisory
 * =============================================================================
 */

const EXPERIENCE_LEVELS = [
  "5+ years (Growth Expert)", 
  "10+ years (Industry Lead)", 
  "15+ years (Executive Node)", 
  "20+ years (Legacy Architect)", 
  "Board Member / Veteran"
];

const STARTUP_STAGES = [
  "Pre-Seed / Idea Validation", 
  "MVP / Market Handshake", 
  "Growth / Series A-B", 
  "Scale-up / Institutional"
];

const AVAILABILITY_OPTIONS = [
  "Strategic (Weekly Sync)", 
  "Quarterly (Monthly Pulse)", 
  "Tactical (On Demand)",
  "Foundational (Board Level)"
];

const ADVISORY_PILLARS = [
  {
    icon: <Users />,
    title: "Legacy Crafting",
    desc: "Directly architect the trajectory of India's most disruptive ventures within the Udaaro ecosystem.",
    metric: "1:1 Strategic Depth"
  },
  {
    icon: <Award />,
    title: "Elite Peerage",
    desc: "Join an exclusive sovereign circle of industry veterans and global executive leaders.",
    metric: "Vetted Executive Rank"
  },
  {
    icon: <Lightbulb />,
    title: "Venture Synthesis",
    desc: "Influence market trends by steering high-signal innovation from the conceptual layer.",
    metric: "IP Influence Node"
  }
];

const ADVISOR_VITAL_STATS = [
  { label: "Advisory Nodes", val: "140+", sub: "Institutional Sync" },
  { label: "Global Clusters", val: "12", sub: "Regional Strategy" },
  { label: "Validation Delta", val: "94%", sub: "Survival Quotient" }
];

const ADVISORY_LOGS = [
  { event: "Node_Handshake: Fintech_Lead", time: "04:12 AM", status: "SYNCED" },
  { event: "Protocol_Update: GTM_Matrix", time: "02:45 AM", status: "ACTIVE" },
  { event: "Vanguard_Audit: Batch_Alpha", time: "11:20 PM", status: "VERIFIED" }
];

/** * =============================================================================
 * II. UI ATOMS & PREMIUM NODES
 * =============================================================================
 */

const SectionBadge = ({ text }) => (
  <motion.div 
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    className="inline-flex items-center gap-2 py-2 px-5 mb-10 text-[10px] font-black tracking-[0.4em] uppercase bg-white/10 border border-white/20 rounded-2xl shadow-xl backdrop-blur-xl"
  >
    <Sparkles size={12} className="text-blue-200 animate-pulse" />
    {text}
  </motion.div>
);

const LuxuryInput = ({ label, icon: Icon, name, type = "text", placeholder, value, onChange, required = true }) => (
  <div className="space-y-4">
    <div className="flex justify-between items-center px-1">
      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{label}</label>
      <span className="text-[8px] font-bold text-blue-500/40 uppercase tracking-widest italic">Secure_Socket</span>
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
        className="w-full bg-slate-50 border-0 ring-1 ring-slate-100 focus:ring-2 focus:ring-blue-600 focus:bg-white rounded-[1.5rem] py-5 pl-16 pr-6 transition-all outline-none font-bold text-sm shadow-inner"
        required={required}
      />
    </div>
  </div>
);

/** * =============================================================================
 * III. MAIN ARCHITECTURE: MENTORS (THE ADVISORY HUB)
 * =============================================================================
 */

function Mentors() {
  const API_BASE = import.meta.env.PROD ? "https://udaaro-backend.onrender.com" : "http://localhost:5000";
  const FOUNDER_NAME = "Apurva Priyadarshi";

  const [formData, setFormData] = useState({
    name: "", email: "", expertise: "", experienceLevel: "", preferredStage: "", availability: "", linkedin: ""
  });

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [activePillar, setActivePillar] = useState(null);

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  
  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(""); setError(""); setLoading(true);

    try {
      const response = await fetch(`${API_BASE}/api/mentors`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("Admission credentials verified. Our council will initiate the handshake protocol shortly.");
        setFormData({ name: "", email: "", expertise: "", experienceLevel: "", preferredStage: "", availability: "", linkedin: "" });
      } else {
        setError(data.message || "Credential verification protocol failed.");
      }
    } catch (err) {
      setError("Infrastructure node offline. Verify network terminal connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-[#fcfcfd] font-sans selection:bg-blue-600 selection:text-white overflow-x-hidden">
      
      {/* 1. TOP PROTOCOL NAVIGATION */}
      <nav className="p-10 fixed top-0 left-0 w-full z-50 bg-white/10 backdrop-blur-md border-b border-slate-200/20 sm:bg-transparent sm:border-none">
        <div className="max-w-[1800px] mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3 group text-slate-400 hover:text-slate-900 transition-all">
            <ArrowLeft size={18} className="group-hover:-translate-x-2 transition-transform" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] hidden md:inline leading-none italic">Sovereign Node / core</span>
          </Link>
          <div className="flex items-center gap-8">
             <div className="hidden md:flex items-center gap-4 px-6 py-2.5 bg-slate-950 text-white rounded-[1.2rem] shadow-2xl">
                <Activity size={12} className="text-emerald-500 animate-pulse" />
                <span className="text-[9px] font-black uppercase tracking-[0.3em]">Network_Sync: 100%</span>
             </div>
             <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center shadow-4xl shadow-blue-500/20 border-2 border-white">
                <Network className="text-white" size={24} />
             </div>
          </div>
        </div>
      </nav>

      <main className="flex flex-col lg:flex-row pt-28 lg:pt-0">
        
        {/* 2. LEFT SECTOR: ADVISORY BRANDING & LEGACY NARRATIVE */}
        <section className="lg:w-[45%] bg-blue-600 p-12 lg:p-24 text-white flex flex-col justify-between relative overflow-hidden">
          {/* Visual Grid Overlays */}
          <div className="absolute inset-0 z-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
          <div className="absolute -bottom-40 -left-40 w-[50vw] h-[50vw] bg-white/10 rounded-full blur-[180px] opacity-40 pointer-events-none" />
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10"
          >
            <div className="mb-24">
              <SectionBadge text="Elite Advisor Intake Cycle" />
              <h1 className="text-6xl lg:text-[9rem] font-black mb-12 leading-[0.8] tracking-tighter italic uppercase">
                Architect <br /><span className="text-blue-100 underline decoration-blue-300 decoration-[16px] underline-offset-[20px]">Legacy.</span>
              </h1>
              <p className="text-blue-100/80 text-2xl mb-16 max-w-lg leading-relaxed font-medium italic">
                Udaaro is an incubator of excellence where industry veterans shape the sovereign economy. We bridge wisdom with raw ambition.
              </p>
            </div>

            <div className="space-y-10 mb-24">
              {ADVISORY_PILLARS.map((pillar, i) => (
                <motion.div 
                  key={i} 
                  onMouseEnter={() => setActivePillar(i)}
                  onMouseLeave={() => setActivePillar(null)}
                  className="flex items-center gap-10 group cursor-pointer"
                >
                  <div className={`flex-shrink-0 w-20 h-20 rounded-[2.5rem] flex items-center justify-center transition-all duration-700 shadow-2xl ${
                    activePillar === i ? "bg-white scale-110 shadow-blue-400" : "bg-blue-500/40 border border-blue-400"
                  }`}>
                    {React.cloneElement(pillar.icon, { 
                      size: 32, 
                      className: activePillar === i ? "text-blue-600" : "text-white" 
                    })}
                  </div>
                  <div>
                    <div className="flex items-center gap-4 mb-2">
                       <h3 className="font-black text-base uppercase tracking-widest italic group-hover:text-blue-100 transition-colors">{pillar.title}</h3>
                       <span className="text-[9px] font-bold text-blue-200 border border-blue-400/50 px-3 py-1 rounded-full uppercase tracking-widest backdrop-blur-md">[{pillar.metric}]</span>
                    </div>
                    <p className="text-blue-100/60 text-sm leading-relaxed max-w-sm font-medium group-hover:text-white transition-colors">{pillar.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* VITAL STATISTICS MODULE */}
            <div className="grid grid-cols-3 gap-10 pt-16 border-t border-white/20">
               {ADVISOR_VITAL_STATS.map((stat, i) => (
                 <div key={i} className="group">
                    <p className="text-4xl font-black italic tracking-tighter leading-none mb-3 group-hover:text-white transition-colors">{stat.val}</p>
                    <p className="text-[10px] font-black text-blue-200 uppercase tracking-widest leading-none">{stat.label}</p>
                    <p className="text-[10px] font-bold text-white/30 uppercase mt-2 italic leading-none">{stat.sub}</p>
                 </div>
               ))}
            </div>
          </motion.div>

          <div className="mt-32 lg:mt-0 relative z-10 flex justify-between items-end border-t border-white/10 pt-16">
            <div className="space-y-8">
               <div className="flex items-center gap-4 text-blue-200 font-black uppercase text-[10px] tracking-[0.5em] mb-4 italic">
                 <ShieldCheck size={16} className="text-white" /> Global_Council_Registry
               </div>
               <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all cursor-pointer shadow-xl"><Globe size={24}/></div>
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all cursor-pointer shadow-xl"><Cpu size={24}/></div>
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all cursor-pointer shadow-xl"><BrainCircuit size={24}/></div>
               </div>
            </div>
            <div className="text-right hidden xl:block">
               <p className="text-[10px] font-black text-blue-300 uppercase tracking-[0.5em] mb-3 leading-none italic">Curated by</p>
               <p className="text-xl font-black italic tracking-tighter text-white uppercase">{FOUNDER_NAME}</p>
            </div>
          </div>
        </section>

        {/* 3. RIGHT SECTOR: ADMISSION TERMINAL (FORM) */}
        <section className="lg:w-[55%] bg-slate-50 p-8 lg:p-24 flex flex-col items-center justify-center overflow-y-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-2xl w-full"
          >
            <div className="bg-white rounded-[5rem] p-12 lg:p-20 shadow-[0_100px_200px_-50px_rgba(0,0,0,0.15)] border border-slate-100 relative group overflow-hidden">
              
              {/* Progress Handshake System */}
              <div className="absolute top-0 left-0 w-full h-2 bg-slate-50">
                <motion.div 
                   animate={loading ? { width: "100%" } : { width: "10%" }}
                   transition={{ duration: 3, ease: "easeInOut" }}
                   className="h-full bg-blue-600 shadow-[0_0_20px_rgba(37,99,235,0.6)]" 
                />
              </div>

              {/* Form Architecture */}
              <div className="mb-20 text-center relative">
                <div className="flex items-center justify-center gap-5 mb-10">
                    <div className="h-px w-12 bg-blue-100" />
                    <Star className="text-blue-600 animate-bounce" size={24} fill="currentColor" />
                    <div className="h-px w-12 bg-blue-100" />
                </div>
                <h2 className="text-5xl md:text-7xl font-black text-slate-950 tracking-tighter leading-none mb-6 uppercase italic">Advisor Intake</h2>
                <p className="text-slate-400 text-lg font-medium italic uppercase tracking-widest opacity-60">Credential Protocol Sync: Cycle Alpha</p>
              </div>

              <AnimatePresence mode="wait">
                {message && (
                  <motion.div 
                    initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
                    className="mb-14 p-12 bg-blue-600 rounded-[4rem] text-white shadow-6xl relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 p-12 opacity-10 rotate-12"><CheckCircle size={140} /></div>
                    <div className="flex items-center gap-10 relative z-10">
                       <div className="w-24 h-24 rounded-[2.5rem] bg-white/20 flex items-center justify-center border-2 border-white/20"><ShieldCheck size={48} /></div>
                       <div>
                          <p className="font-black text-3xl tracking-tight leading-none uppercase italic">Verification Active</p>
                          <p className="text-sm opacity-80 mt-4 font-medium tracking-widest uppercase leading-relaxed">{message}</p>
                       </div>
                    </div>
                  </motion.div>
                )}

                {error && (
                  <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="mb-12 p-8 bg-rose-50 border border-rose-100 rounded-[3rem] flex items-center gap-8 text-rose-600 text-sm font-black uppercase tracking-widest shadow-xl">
                    <ShieldAlert size={28} /> {error}
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit} className="space-y-12 relative z-10">
                
                {/* Identity Cluster */}
                <div className="grid md:grid-cols-2 gap-12">
                  <LuxuryInput 
                    label="Executive Identity" icon={User} name="name" 
                    placeholder="Full Legal Name" value={formData.name} onChange={handleChange} 
                  />
                  <LuxuryInput 
                    label="Corporate Node" icon={Mail} name="email" type="email"
                    placeholder="name@executive.com" value={formData.email} onChange={handleChange} 
                  />
                </div>

                {/* Connection Protocol */}
                <LuxuryInput 
                    label="LinkedIn Intelligence" icon={Linkedin} name="linkedin" 
                    placeholder="linkedin.com/in/architect" value={formData.linkedin} onChange={handleChange} 
                />

                {/* Domain Mastery Section */}
                <div className="space-y-4">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-2 flex items-center gap-3">
                     <BrainCircuit size={14} className="text-blue-600" /> Domain Mastery Protocol
                  </label>
                  <div className="relative group">
                    <div className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-blue-600 transition-all duration-500">
                       <Sparkles size={20} />
                    </div>
                    <input
                      type="text" name="expertise" value={formData.expertise} onChange={handleChange}
                      placeholder="e.g. AI Governance, FinTech GTM, SaaS Logistics"
                      className="w-full bg-slate-50 border-0 ring-1 ring-slate-100 focus:ring-2 focus:ring-blue-600 focus:bg-white rounded-[2rem] py-6 pl-16 pr-6 transition-all outline-none font-bold text-sm shadow-inner"
                      required
                    />
                  </div>
                </div>

                {/* Decision Matrices */}
                <div className="grid md:grid-cols-2 gap-12">
                   <div className="space-y-6">
                     <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em] ml-2 flex items-center gap-3">
                       <FileBadge size={14} className="text-indigo-600" /> Tenure Layer
                     </label>
                     <div className="grid grid-cols-1 gap-3">
                        {EXPERIENCE_LEVELS.map(lvl => (
                          <button
                            key={lvl} type="button"
                            onClick={() => setFormData({...formData, experienceLevel: lvl})}
                            className={`px-8 py-5 rounded-2xl text-[11px] font-black uppercase text-left transition-all duration-500 border ${
                              formData.experienceLevel === lvl 
                              ? "bg-slate-950 text-white border-slate-950 shadow-4xl scale-[1.03]" 
                              : "bg-white text-slate-400 border-slate-100 hover:border-blue-300 hover:text-blue-600"
                            }`}
                          >
                            {lvl}
                          </button>
                        ))}
                     </div>
                   </div>

                   <div className="space-y-6">
                     <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em] ml-2 flex items-center gap-3">
                       <Target size={14} className="text-cyan-600" /> Phase Alignment
                     </label>
                     <div className="grid grid-cols-1 gap-3">
                        {STARTUP_STAGES.map(stage => (
                          <button
                            key={stage} type="button"
                            onClick={() => setFormData({...formData, preferredStage: stage})}
                            className={`px-8 py-5 rounded-2xl text-[11px] font-black uppercase text-left transition-all duration-500 border ${
                              formData.preferredStage === stage 
                              ? "bg-blue-600 text-white border-blue-600 shadow-4xl scale-[1.03]" 
                              : "bg-white text-slate-400 border-slate-100 hover:border-blue-300 hover:text-blue-600"
                            }`}
                          >
                            {stage}
                          </button>
                        ))}
                     </div>
                   </div>
                </div>

                {/* Capacity Protocol */}
                <div className="space-y-6 p-10 bg-slate-50/50 rounded-[4rem] border border-slate-100 relative group/band">
                  <div className="absolute top-0 right-0 p-10 opacity-[0.03] group-hover/band:opacity-[0.08] transition-opacity duration-1000"><History size={80}/></div>
                  <label className="text-[10px] font-black text-blue-600 uppercase tracking-[0.5em] ml-2 flex items-center gap-4">
                     <Calendar size={18} /> bandwidth synchronization
                  </label>
                  <div className="flex flex-wrap gap-4 relative z-10">
                     {AVAILABILITY_OPTIONS.map(opt => (
                       <button
                         key={opt} type="button"
                         onClick={() => setFormData({...formData, availability: opt})}
                         className={`px-10 py-5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all duration-500 shadow-sm ${
                           formData.availability === opt 
                           ? "bg-blue-600 text-white shadow-4xl scale-105" 
                           : "bg-white text-blue-400 border border-blue-100 hover:border-blue-300 hover:bg-blue-50"
                         }`}
                       >
                         {opt}
                       </button>
                     ))}
                  </div>
                </div>

                <div className="pt-10">
                  <button
                    type="submit" disabled={loading}
                    className="w-full bg-slate-950 hover:bg-blue-600 text-white font-black py-10 rounded-full shadow-6xl shadow-blue-500/40 transition-all active:scale-[0.98] flex flex-col items-center justify-center gap-3 disabled:opacity-50 uppercase group relative overflow-hidden"
                  >
                    {loading ? (
                      <div className="flex items-center gap-4">
                         <Zap className="animate-spin" size={24} />
                         <span className="text-sm tracking-[0.5em]">Synchronizing Node...</span>
                      </div>
                    ) : (
                      <>
                        <div className="flex items-center gap-5 relative z-10">
                          <span className="text-base tracking-[0.6em] font-black italic">Ascend to Advisor Rank</span>
                          <ChevronRight size={24} className="group-hover:translate-x-4 transition-transform duration-700" />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                      </>
                    )}
                  </button>
                </div>
                
                <div className="text-center pt-8">
                   <p className="text-[9px] font-black text-slate-300 uppercase tracking-[0.8em] italic">System v2.9.2 • Institutional Node Active • secure_handshake</p>
                </div>
              </form>
            </div>
          </motion.div>
        </section>
      </main>

      {/* 4. MASTER FOOTER: INSTITUTIONAL GRID METADATA */}
      <footer className="p-12 border-t border-slate-200 bg-white flex flex-col xl:flex-row justify-between items-center gap-10">
        <div className="flex items-center gap-12">
           <div className="flex items-center gap-5 group cursor-help">
              <div className="w-12 h-12 bg-slate-950 rounded-2xl flex items-center justify-center text-white font-black italic text-xl shadow-2xl group-hover:scale-110 transition-transform">U</div>
              <span className="text-lg font-black text-slate-950 tracking-tighter uppercase italic leading-none">UDAARO <span className="text-blue-600">ADVISORY</span></span>
           </div>
           <div className="h-8 w-[1px] bg-slate-100 hidden md:block" />
           <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-4">
             <ShieldCheck size={18} className="text-blue-600" /> Vetted by {FOUNDER_NAME.toUpperCase()} Protocol
           </p>
        </div>
        <div className="flex flex-wrap justify-center gap-12">
           <div className="flex items-center gap-3 group cursor-pointer">
              <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:text-blue-600 group-hover:bg-blue-50 transition-all shadow-sm"><Linkedin size={22}/></div>
              <span className="text-[9px] font-black uppercase tracking-widest text-slate-400 group-hover:text-slate-950 transition-colors italic">Executive_Grid</span>
           </div>
           <div className="flex items-center gap-3 group cursor-pointer">
              <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:text-blue-600 group-hover:bg-blue-50 transition-all shadow-sm"><MessageSquare size={22}/></div>
              <span className="text-[9px] font-black uppercase tracking-widest text-slate-400 group-hover:text-slate-950 transition-colors italic">Query_Terminal</span>
           </div>
           <div className="flex items-center gap-3 group cursor-pointer border-l border-slate-100 pl-12 hidden md:flex">
              <div className="text-right">
                 <p className="text-[9px] font-black text-slate-300 uppercase tracking-widest leading-none italic">System Status</p>
                 <p className="text-[11px] font-black text-emerald-500 uppercase tracking-widest mt-1">Operational</p>
              </div>
              <Activity size={24} className="text-emerald-500 animate-pulse" />
           </div>
        </div>
      </footer>
    </div>
  );
}

export default Mentors;