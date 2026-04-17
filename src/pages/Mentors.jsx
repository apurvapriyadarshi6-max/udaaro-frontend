import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Users, Lightbulb, Target, Calendar, Award, Briefcase, Mail, User, Star,
  CheckCircle, ArrowLeft, ChevronRight, Sparkles, Zap, Fingerprint, Compass,
  Cpu, Globe, ShieldCheck, Search, MessageSquare, Activity,
  Network, Scale, BrainCircuit, FileBadge, History, Terminal, ZapOff,
  AlertCircle, ShieldAlert, Dna, Binary, Microscope, HardDrive, Globe2,
  Lock, CpuIcon, Layers, MapPin, AtSign, Smartphone, Landmark, ShieldQuestion,
  FileCode, Box, TrendingUp, Workflow, Server, Key, Layers3, ClipboardCheck,
  Eye, ActivitySquare, BookOpen, UserCheck, Share2
} from "lucide-react";

/** * =============================================================================
 * I. MANUAL ICON DEFINITION (Bypassing Library Conflicts)
 * ============================================================================= */

const LinkedinManualIcon = ({ size = 20, className = "" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect width="4" height="12" x="2" y="9"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

/** * =============================================================================
 * II. INSTITUTIONAL CONFIGURATION
 * ============================================================================= */

const EXPERIENCE_MATRIX = [
  { level: "Growth_Expert", label: "5+ Years Precision", focus: "Operational Logic" },
  { level: "Industry_Lead", label: "10+ Years Authority", focus: "Market Dominion" },
  { level: "Executive_Node", label: "15+ Years Architecture", focus: "Institutional Scale" },
  { level: "Board_Veteran", label: "20+ Years Legacy", focus: "Generational Governance" },
];

const STARTUP_ALIGNMENT = [
  { stage: "Validation", label: "Phase 1: Logic Synthesis" },
  { stage: "MVP_Sync", label: "Phase 2: Market Handshake" },
  { stage: "Series_Alpha", label: "Phase 3: Capital Resonance" },
  { stage: "Institutional", label: "Phase 4: Global Ascension" },
];

const ADVISORY_VITAL_TELEMETRY = [
  { label: "Executive Nodes", val: "140+", sub: "Verified Pulse" },
  { label: "Logic Hubs", val: "12", sub: "India Regional Grid" },
  { label: "Resilience Score", val: "94.2%", sub: "Survival Quotient" }
];

/** * =============================================================================
 * III. UI ATOMS: PREMIUM ADVISORY NODES
 * ============================================================================= */

const SectionBadgeNode = ({ text }) => (
  <motion.div 
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] text-[10px] font-black uppercase tracking-[0.5em] mb-12 backdrop-blur-xl italic"
  >
    <BrainCircuit size={14} className="animate-pulse" />
    {text}
  </motion.div>
);

const LuxuryInputTerminal = ({ label, icon: Icon, name, type = "text", placeholder, value, onChange }) => (
  <div className="space-y-4">
    <label className="text-[11px] font-black text-[#D4AF37] uppercase tracking-[0.5em] ml-2 italic">{label}</label>
    <div className="relative group">
      <div className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-[#D4AF37] transition-all">
        <Icon size={18} />
      </div>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full bg-white border border-[#D4AF37]/10 focus:border-[#D4AF37] rounded-[2rem] py-6 pl-16 pr-6 transition-all outline-none font-bold text-sm shadow-sm italic"
        required
      />
    </div>
  </div>
);

/** * =============================================================================
 * IV. MAIN ARCHITECTURE: ADVISORY NODE TERMINAL
 * ============================================================================= */

export default function Mentors() {
  const API_BASE = import.meta.env.PROD ? "https://udaaro-backend.onrender.com" : "http://localhost:5000";
  const FOUNDER_NAME = "Apurva Priyadarshi";

  const [formData, setFormData] = useState({
    name: "", email: "", expertise: "", experienceLevel: "", preferredStage: "", availability: "", linkedin: ""
  });

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [vettingProgress, setVettingProgress] = useState(0);
  const [isVetting, setIsVetting] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const executeAdvisorSync = async (e) => {
    e.preventDefault();
    if (!formData.experienceLevel || !formData.preferredStage) {
      setError("Logical Failure: Institutional alignment nodes required.");
      return;
    }

    setLoading(true); setIsVetting(true);
    const interval = setInterval(() => setVettingProgress(p => (p < 100 ? p + 1 : 100)), 30);

    try {
      const response = await fetch(`${API_BASE}/api/mentors`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMessage("Credential Synchronization Successful. Alpha Council will initiate handshake.");
      } else {
        const data = await response.json();
        setError(data.message || "Verification failed.");
        setIsVetting(false);
      }
    } catch (err) {
      setError("Infrastructure Node Offline: Grid handshake timeout.");
      setIsVetting(false);
    } finally {
      clearInterval(interval);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FDF9F3] flex flex-col font-serif selection:bg-[#D4AF37] selection:text-white">
      <main className="flex-grow flex flex-col lg:flex-row">
        
        <section className="lg:w-[45%] bg-[#0F1419] p-12 lg:p-24 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 bg-jali-grid pointer-events-none" />
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} className="relative z-10">
            <SectionBadgeNode text="Elite Advisor Admission Cycle" />
            <h1 className="text-6xl lg:text-[10rem] font-black leading-[0.85] tracking-tighter italic uppercase text-[#D4AF37] mb-12">
              Architect <br /> <span className="text-white">Legacy.</span>
            </h1>
            <p className="text-slate-400 text-2xl md:text-3xl leading-relaxed max-w-lg font-medium italic mb-20">
              Udaaro is an incubator of excellence where veterans shape the structural integrity of India's sovereign economy.
            </p>

            <div className="space-y-16">
              {[
                { icon: <Users/>, title: "Strategic Depth", desc: "Focus on logic-synthesis and structural resilience." },
                { icon: <Award/>, title: "Elite Peerage", desc: "Join an exclusive circle of global industrial veterans." },
                { icon: <Lightbulb/>, title: "IP Synthesis", desc: "Guide high-signal nodes from conceptual raw ideas." }
              ].map((prop, i) => (
                <div key={i} className="flex gap-10 group">
                  <div className="w-16 h-16 bg-[#D4AF37] text-[#0F1419] rounded-[1.8rem] flex items-center justify-center transition-transform group-hover:rotate-12 shadow-lg">
                    {React.cloneElement(prop.icon, { size: 28 })}
                  </div>
                  <div>
                    <h3 className="font-black text-xl uppercase italic text-white mb-2">{prop.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed max-w-xs font-medium">"{prop.desc}"</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-10 mt-24 pt-16 border-t border-white/10">
               {ADVISORY_VITAL_TELEMETRY.map((stat, i) => (
                 <div key={i}>
                    <p className="text-3xl font-black italic tracking-tighter text-white mb-2">{stat.val}</p>
                    <p className="text-[9px] font-black text-[#D4AF37] uppercase tracking-widest">{stat.label}</p>
                 </div>
               ))}
            </div>
          </motion.div>
        </section>

        <section className="lg:w-[55%] p-8 lg:p-24 flex flex-col items-center justify-center bg-white relative overflow-y-auto">
          <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} className="max-w-3xl w-full">
            <div className="bg-[#FDF9F3] rounded-[4rem] p-12 lg:p-20 border border-[#D4AF37]/10 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-slate-200">
                <motion.div animate={{ width: `${vettingProgress}%` }} className="h-full bg-[#D4AF37] shadow-[0_0_15px_#D4AF37]" />
              </div>

              <div className="text-center mb-16">
                <Dna className="text-[#D4AF37] mx-auto mb-6 animate-pulse" size={40} />
                <h2 className="text-5xl font-black italic uppercase text-[#0F1419] mb-4">Advisor Intake</h2>
                <p className="text-[#D4AF37] text-xs font-black uppercase tracking-widest italic opacity-60">Admission Node: Alpha Cycle 2026</p>
              </div>

              <AnimatePresence mode="wait">
                {message ? (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center p-12 bg-[#0F1419] rounded-[3rem] text-white">
                    <CheckCircle size={60} className="text-[#D4AF37] mx-auto mb-8" />
                    <h3 className="text-3xl font-black italic uppercase mb-4">Sync Success</h3>
                    <p className="text-slate-400 italic mb-10 leading-relaxed">{message}</p>
                    <Link to="/" className="px-12 py-5 bg-[#D4AF37] text-[#0F1419] rounded-2xl font-black text-[11px] uppercase tracking-widest italic hover:scale-105 transition-transform inline-block">Return Base</Link>
                  </motion.div>
                ) : (
                  <form onSubmit={executeAdvisorSync} className="space-y-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <LuxuryInputTerminal label="Identity" icon={User} name="name" placeholder="Full Legal Name" value={formData.name} onChange={handleChange} />
                      <LuxuryInputTerminal label="Corporate" icon={AtSign} name="email" type="email" placeholder="executive@institution.com" value={formData.email} onChange={handleChange} />
                    </div>

                    <LuxuryInputTerminal label="Professional Pulse" icon={LinkedinManualIcon} name="linkedin" placeholder="linkedin.com/in/architect" value={formData.linkedin} onChange={handleChange} />

                    <div className="space-y-8">
                      <label className="text-[11px] font-black text-[#D4AF37] uppercase tracking-[0.5em] italic flex items-center gap-4">
                         <FileBadge size={16} /> Tenure Alignment
                      </label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {EXPERIENCE_MATRIX.map((item) => (
                          <button
                            key={item.level}
                            type="button"
                            onClick={() => setFormData({...formData, experienceLevel: item.level})}
                            className={`p-6 rounded-3xl text-left border-2 transition-all ${
                              formData.experienceLevel === item.level ? "bg-[#0F1419] text-white border-[#0F1419]" : "bg-white text-slate-400 border-slate-100 hover:border-[#D4AF37]/50"
                            }`}
                          >
                            <span className="text-[11px] font-black uppercase italic block mb-1">{item.level.replace('_', ' ')}</span>
                            <span className="text-[8px] opacity-60 uppercase tracking-widest">{item.label}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-8">
                      <label className="text-[11px] font-black text-[#D4AF37] uppercase tracking-[0.5em] italic flex items-center gap-4">
                         <Target size={16} /> Preferred Phase
                      </label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {STARTUP_ALIGNMENT.map((item) => (
                          <button
                            key={item.stage}
                            type="button"
                            onClick={() => setFormData({...formData, preferredStage: item.stage})}
                            className={`p-5 rounded-3xl text-left border-2 transition-all ${
                              formData.preferredStage === item.stage ? "bg-[#D4AF37] text-[#0F1419] border-[#D4AF37]" : "bg-white text-slate-400 border-slate-100 hover:border-[#D4AF37]/50"
                            }`}
                          >
                            <span className="text-[11px] font-black uppercase italic block mb-1">{item.stage.replace('_', ' ')}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    <button type="submit" disabled={loading} className="w-full py-10 bg-[#0F1419] text-[#D4AF37] rounded-full font-black uppercase tracking-[0.5em] italic shadow-2xl hover:bg-[#D4AF37] hover:text-[#0F1419] transition-all">
                      {loading ? "Vetting Logic..." : "Ascend to Advisor Rank"}
                    </button>
                  </form>
                )}
              </AnimatePresence>

              {error && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-8 p-6 bg-rose-50 text-rose-600 rounded-3xl flex items-center gap-4 italic text-sm border border-rose-100">
                  <ShieldAlert size={20} /> {error}
                </motion.div>
              )}
            </div>
          </motion.div>
        </section>
      </main>

      <footer className="p-16 border-t border-[#D4AF37]/10 bg-white flex flex-col md:flex-row justify-between items-center opacity-40 italic">
        <div className="flex items-center gap-6">
           <div className="w-12 h-12 bg-[#0F1419] rounded-xl flex items-center justify-center text-[#D4AF37] font-black italic shadow-lg">U</div>
           <span className="text-[11px] font-black uppercase tracking-widest leading-none">Global Advisory Registry v4.0</span>
        </div>
        <p className="text-[10px] font-bold text-slate-400 mt-8 md:mt-0 uppercase tracking-[0.4em]">Vetted under {FOUNDER_NAME.toUpperCase()} Governance Protocol</p>
      </footer>
    </div>
  );
}