import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
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
  Network
} from "lucide-react";

/** * ==========================================
 * ELITE CONFIGURATION
 * Architected by Apurva Priyadarshi
 * ==========================================
 */
const EXPERIENCE_LEVELS = ["5+ years", "10+ years", "15+ years", "20+ years", "Veteran / Board Member"];
const STARTUP_STAGES = ["Pre-Seed / Idea", "MVP / Beta", "Growth / Series A", "Scale-up / IPO Ready"];
const AVAILABILITY_OPTIONS = ["Strategic (Weekly)", "Quarterly (Monthly)", "Tactical (On Demand)"];

const ADVISORY_PILLARS = [
  {
    icon: <Users />,
    title: "Legacy Crafting",
    desc: "Directly architect the trajectory of India's most disruptive early-stage ventures.",
    metric: "1:1 Strategy"
  },
  {
    icon: <Award />,
    title: "Elite Peerage",
    desc: "Join an exclusive sovereign circle of industry veterans and global executive leaders.",
    metric: "Vetted Circle"
  },
  {
    icon: <Lightbulb />,
    title: "Venture Synthesis",
    desc: "Influence market trends by steering high-signal innovation from the ground floor.",
    metric: "IP Influence"
  }
];

const ADVISOR_VITAL_STATS = [
  { label: "Active Nodes", val: "120+", sub: "Industry Veterans" },
  { label: "Global Presence", val: "14", sub: "Regional Clusters" },
  { label: "Success Quotient", val: "94%", sub: "Validation Rate" }
];

/** * ==========================================
 * REUSABLE MODULAR UI COMPONENTS
 * ==========================================
 */

const LuxuryInput = ({ label, icon: Icon, name, type = "text", placeholder, value, onChange, required = true }) => (
  <div className="space-y-3">
    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">{label}</label>
    <div className="relative group">
      <div className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-blue-600 transition-colors">
        <Icon size={16} />
      </div>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full bg-slate-50 border-0 ring-1 ring-slate-100 focus:ring-2 focus:ring-blue-600 focus:bg-white rounded-2xl py-4 pl-14 pr-4 transition-all outline-none font-bold text-sm shadow-inner"
        required={required}
      />
    </div>
  </div>
);

/** * ==========================================
 * MAIN COMPONENT: MENTORS
 * ==========================================
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
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.98]);

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
    <div className="min-h-screen bg-[#fcfcfd] font-sans selection:bg-blue-600 selection:text-white">
      
      {/* ================= HEADER NAVIGATION ================= */}
      <nav className="p-8 fixed top-0 left-0 w-full z-50 bg-white/10 backdrop-blur-md border-b border-slate-100 sm:bg-transparent sm:border-none">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 group text-slate-400 hover:text-slate-900 transition-all">
            <ArrowLeft size={18} className="group-hover:-translate-x-2 transition-transform" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em]">Handshake Protocol</span>
          </Link>
          <div className="flex items-center gap-6">
             <div className="hidden md:flex items-center gap-2 px-4 py-2 bg-slate-950 text-white rounded-full">
                <Activity size={12} className="text-emerald-500 animate-pulse" />
                <span className="text-[9px] font-black uppercase tracking-widest">Network_Online</span>
             </div>
             <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-200">
                <Network className="text-white" size={18} />
             </div>
          </div>
        </div>
      </nav>

      <main className="flex flex-col lg:flex-row">
        
        {/* ================= LEFT SIDE: SOVEREIGN ADVISORY BRANDING ================= */}
        <section className="lg:w-[45%] bg-blue-600 p-12 lg:p-24 text-white flex flex-col justify-between relative overflow-hidden">
          {/* Visual Grid Overlays */}
          <div className="absolute inset-0 z-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
          <div className="absolute -bottom-40 -left-40 w-[40vw] h-[40vw] bg-white/10 rounded-full blur-[140px]" />
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative z-10"
          >
            <div className="mb-20">
              <motion.span 
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                className="inline-flex items-center gap-2 py-2 px-5 mb-8 text-[10px] font-black tracking-[0.4em] uppercase bg-white/10 border border-white/20 rounded-2xl shadow-xl backdrop-blur-xl"
              >
                <Fingerprint size={12} /> Elite Advisor Admission
              </motion.span>
              <h1 className="text-6xl lg:text-8xl font-black mb-8 leading-[0.9] tracking-tighter italic uppercase">
                Architect <br /><span className="text-blue-100 underline decoration-blue-300 decoration-8 underline-offset-[16px]">Legacy.</span>
              </h1>
              <p className="text-blue-100/80 text-xl mb-12 max-w-md leading-relaxed font-medium">
                Udaaro is not a marketplace. It is an incubator of excellence where industry veterans shape the sovereign economy.
              </p>
            </div>

            <div className="space-y-8 mb-20">
              {ADVISORY_PILLARS.map((pillar, i) => (
                <motion.div 
                  key={i} 
                  onMouseEnter={() => setActivePillar(i)}
                  onMouseLeave={() => setActivePillar(null)}
                  className="flex items-center gap-8 group cursor-pointer"
                >
                  <div className={`flex-shrink-0 w-16 h-16 rounded-[2rem] flex items-center justify-center transition-all duration-500 shadow-2xl ${
                    activePillar === i ? "bg-white scale-110 shadow-blue-400" : "bg-blue-500/50 border border-blue-400"
                  }`}>
                    {React.cloneElement(pillar.icon, { 
                      size: 28, 
                      className: activePillar === i ? "text-blue-600" : "text-white" 
                    })}
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                       <h3 className="font-black text-sm uppercase tracking-widest">{pillar.title}</h3>
                       <span className="text-[8px] font-bold text-blue-200 border border-blue-400/50 px-2 py-0.5 rounded-full uppercase tracking-widest">[{pillar.metric}]</span>
                    </div>
                    <p className="text-blue-100/60 text-sm leading-relaxed max-w-xs font-medium group-hover:text-white transition-colors">{pillar.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-6 pt-12 border-t border-white/20">
               {ADVISOR_VITAL_STATS.map((stat, i) => (
                 <div key={i}>
                    <p className="text-3xl font-black italic tracking-tighter">{stat.val}</p>
                    <p className="text-[8px] font-black text-blue-200 uppercase tracking-[0.2em] mt-1">{stat.label}</p>
                    <p className="text-[8px] font-bold text-white/40 uppercase mt-1 italic">{stat.sub}</p>
                 </div>
               ))}
            </div>
          </motion.div>

          <div className="mt-24 lg:mt-0 relative z-10 flex justify-between items-end border-t border-white/10 pt-10">
            <div>
               <div className="flex items-center gap-3 text-blue-200 font-black uppercase text-[10px] tracking-[0.4em] mb-4">
                 <ShieldCheck size={14} /> Council_Curated_Network
               </div>
               <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all cursor-pointer"><Globe size={18}/></div>
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all cursor-pointer"><Cpu size={18}/></div>
               </div>
            </div>
            <div className="text-right">
               <p className="text-[9px] font-black text-blue-300 uppercase tracking-[0.5em] mb-2 leading-none">Architected by</p>
               <p className="text-base font-black italic tracking-tighter text-white">{FOUNDER_NAME}</p>
            </div>
          </div>
        </section>

        {/* ================= RIGHT SIDE: ADMISSION TERMINAL ================= */}
        <section className="lg:w-[55%] bg-slate-50 p-8 lg:p-24 flex flex-col items-center justify-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl w-full"
          >
            <div className="bg-white rounded-[4rem] p-10 lg:p-20 shadow-[0_80px_160px_-40px_rgba(0,0,0,0.12)] border border-slate-100 relative group overflow-hidden">
              
              {/* Form Header */}
              <div className="mb-14 text-center">
                <div className="flex items-center justify-center gap-4 mb-6">
                    <div className="h-px w-8 bg-blue-100" />
                    <Star className="text-blue-600 animate-pulse" size={20} fill="currentColor" />
                    <div className="h-px w-8 bg-blue-100" />
                </div>
                <h2 className="text-5xl font-black text-slate-950 tracking-tighter leading-none mb-4 uppercase italic">Advisor Intake</h2>
                <p className="text-slate-400 text-base font-medium italic">Credential analysis for high-signal mentorship synchronization.</p>
              </div>

              <AnimatePresence mode="wait">
                {error && (
                  <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="mb-8 p-5 bg-rose-50 border border-rose-100 rounded-3xl flex items-center gap-4 text-rose-600 text-[11px] font-black uppercase tracking-widest">
                    <AlertCircle size={18} /> {error}
                  </motion.div>
                )}
                {message && (
                  <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="mb-8 p-10 bg-blue-600 rounded-[3rem] text-white shadow-2xl">
                    <div className="flex items-center gap-6">
                       <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center border border-white/20"><CheckCircle size={32} /></div>
                       <div>
                          <p className="font-black text-xl tracking-tight leading-none uppercase italic">Verification Syncing</p>
                          <p className="text-[10px] opacity-80 mt-2 font-medium tracking-widest uppercase">{message}</p>
                       </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit} className="space-y-8">
                
                {/* Identity Matrix */}
                <div className="grid md:grid-cols-2 gap-8">
                  <LuxuryInput 
                    label="Executive Identity" icon={User} name="name" 
                    placeholder="Full Legal Name" value={formData.name} onChange={handleChange} 
                  />
                  <LuxuryInput 
                    label="Vetted Email" icon={Mail} name="email" type="email"
                    placeholder="name@executive.com" value={formData.email} onChange={handleChange} 
                  />
                </div>

                {/* Professional URL */}
                <LuxuryInput 
                    label="LinkedIn Pulse" icon={Linkedin} name="linkedin" 
                    placeholder="linkedin.com/in/username" value={formData.linkedin} onChange={handleChange} 
                />

                {/* Domain Mastery */}
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Domain Expertise Hub</label>
                  <div className="relative group">
                    <div className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-blue-500 transition-colors">
                       <Sparkles size={16} />
                    </div>
                    <input
                      type="text" name="expertise" value={formData.expertise} onChange={handleChange}
                      placeholder="e.g. Fintech Regulation, AI Scalability, SaaS GTM"
                      className="w-full bg-slate-50 border-0 ring-1 ring-slate-100 focus:ring-2 focus:ring-blue-600 focus:bg-white rounded-2xl py-5 pl-14 pr-4 transition-all outline-none font-bold text-sm"
                      required
                    />
                  </div>
                </div>

                {/* Selection Grids */}
                <div className="grid md:grid-cols-2 gap-8">
                   <div className="space-y-4">
                     <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1 flex items-center gap-2">
                       <Award size={14} /> Tenure Layer
                     </label>
                     <div className="grid grid-cols-1 gap-2">
                        {EXPERIENCE_LEVELS.map(lvl => (
                          <button
                            key={lvl} type="button"
                            onClick={() => setFormData({...formData, experienceLevel: lvl})}
                            className={`px-6 py-3 rounded-xl text-[10px] font-black uppercase text-left transition-all border ${
                              formData.experienceLevel === lvl 
                              ? "bg-slate-950 text-white border-slate-950 shadow-lg" 
                              : "bg-white text-slate-400 border-slate-200 hover:border-blue-300"
                            }`}
                          >
                            {lvl}
                          </button>
                        ))}
                     </div>
                   </div>

                   <div className="space-y-4">
                     <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1 flex items-center gap-2">
                       <Target size={14} /> Preferred Lifecycle
                     </label>
                     <div className="grid grid-cols-1 gap-2">
                        {STARTUP_STAGES.map(stage => (
                          <button
                            key={stage} type="button"
                            onClick={() => setFormData({...formData, preferredStage: stage})}
                            className={`px-6 py-3 rounded-xl text-[10px] font-black uppercase text-left transition-all border ${
                              formData.preferredStage === stage 
                              ? "bg-blue-600 text-white border-blue-600 shadow-lg" 
                              : "bg-white text-slate-400 border-slate-200 hover:border-blue-300"
                            }`}
                          >
                            {stage}
                          </button>
                        ))}
                     </div>
                   </div>
                </div>

                {/* Bandwidth Selector */}
                <div className="space-y-4 p-8 bg-blue-50/50 rounded-[2.5rem] border border-blue-100">
                  <label className="text-[10px] font-black text-blue-600 uppercase tracking-[0.3em] ml-1 flex items-center gap-2">
                     <Calendar size={14} /> advisory bandwidth
                  </label>
                  <div className="flex flex-wrap gap-2">
                     {AVAILABILITY_OPTIONS.map(opt => (
                       <button
                         key={opt} type="button"
                         onClick={() => setFormData({...formData, availability: opt})}
                         className={`px-6 py-3 rounded-full text-[9px] font-black uppercase tracking-widest transition-all ${
                           formData.availability === opt 
                           ? "bg-blue-600 text-white shadow-xl" 
                           : "bg-white text-blue-400 border border-blue-100 hover:border-blue-300"
                         }`}
                       >
                         {opt}
                       </button>
                     ))}
                  </div>
                </div>

                <div className="pt-8">
                  <button
                    type="submit" disabled={loading}
                    className="w-full bg-slate-950 hover:bg-blue-600 text-white font-black py-8 rounded-full shadow-2xl shadow-blue-100 transition-all active:scale-95 flex flex-col items-center justify-center gap-2 disabled:opacity-50 uppercase group relative overflow-hidden"
                  >
                    {loading ? (
                      <div className="flex items-center gap-3">
                         <Zap className="animate-spin" size={20} />
                         <span className="text-xs tracking-[0.5em]">Verifying credentials...</span>
                      </div>
                    ) : (
                      <>
                        <div className="flex items-center gap-3 relative z-10">
                          <span className="text-sm tracking-[0.5em]">Ascend to Advisor Rank</span>
                          <ChevronRight size={20} className="group-hover:translate-x-2 transition-transform" />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      </>
                    )}
                  </button>
                </div>
                
                <div className="text-center pt-4">
                   <p className="text-[8px] font-black text-slate-300 uppercase tracking-[0.6em]">System Protocol V2.6.4 • Secure Socket Active</p>
                </div>
              </form>
            </div>
          </motion.div>
        </section>
      </main>

      {/* FOOTER METADATA */}
      <footer className="p-8 border-t border-slate-100 bg-white flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-10">
           <div className="text-[10px] font-black text-slate-950 tracking-tighter uppercase italic">UDAARO <span className="text-blue-600">ADVISORY</span></div>
           <div className="h-4 w-[1px] bg-slate-100 hidden md:block" />
           <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2 group cursor-help">
             <ShieldCheck size={12} className="text-blue-600 group-hover:animate-bounce" /> Admission Council Verified
           </p>
        </div>
        <div className="flex gap-8">
           <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 hover:text-blue-600 hover:bg-blue-50 transition-all cursor-pointer"><Linkedin size={18}/></div>
           <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 hover:text-blue-600 hover:bg-blue-50 transition-all cursor-pointer"><MessageSquare size={18}/></div>
           <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 hover:text-blue-600 hover:bg-blue-50 transition-all cursor-pointer"><Search size={18}/></div>
        </div>
      </footer>
    </div>
  );
}

/** * ==========================================
 * ICON FALLBACKS & ANIMATIONS
 * ==========================================
 */
function Loader2({ className, size }) {
    return <Zap className={className} size={size} fill="currentColor" />
}

function AlertCircle(props) {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
        </svg>
    )
}

export default Mentors;