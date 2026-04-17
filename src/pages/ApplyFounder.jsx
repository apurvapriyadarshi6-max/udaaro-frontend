import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { 
  Rocket, User, Mail, Phone, Building2, Tag, 
  BarChart3, CircleDollarSign, FileText, CheckCircle2, 
  ArrowLeft, Loader2, ChevronRight, Info, Sparkles, 
  ShieldCheck, Globe, Fingerprint, Cpu, ShieldAlert,
  Target, Zap, Network, Scale, Database, MessageSquare
} from "lucide-react";

/** * ==========================================
 * INSTITUTIONAL DATA CONFIGURATION
 * Design System: Alpha-Vanguard v2.6
 * ========================================== */

const STARTUP_STAGES = [
  { value: "Idea", label: "Idea / Conceptual", intensity: 20 },
  { value: "MVP", label: "Minimum Viable Product (MVP)", intensity: 45 },
  { value: "Revenue", label: "Revenue Generating", intensity: 75 },
  { value: "Scaling", label: "Scaling / Growth", intensity: 100 },
];

const CURATION_TIERS = [
  { 
    icon: <ShieldCheck />, 
    title: "Vetted Syndicate", 
    desc: "Direct access to the top 1% of institutional backers and angels.",
    color: "text-blue-500"
  },
  { 
    icon: <Cpu />, 
    title: "Intelligence Layer", 
    desc: "Proprietary roadmap engineering for complex problem solving.",
    color: "text-indigo-500"
  },
  { 
    icon: <Globe />, 
    title: "Cross-Border Scale", 
    desc: "Global ascension pathways for sovereign market dominance.",
    color: "text-cyan-500"
  },
];

/** * ==========================================
 * REUSABLE UI ATOMS
 * ========================================== */

const InputWrapper = ({ label, icon: Icon, children, error }) => (
  <div className="space-y-3">
    <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">
      {label}
    </label>
    <div className={`relative group ${error ? 'animate-shake' : ''}`}>
      <div className={`absolute left-5 top-1/2 -translate-y-1/2 transition-colors duration-300 ${error ? 'text-rose-500' : 'text-slate-300 group-focus-within:text-blue-600'}`}>
        <Icon size={16} />
      </div>
      {children}
    </div>
  </div>
);

/** * ==========================================
 * MAIN ARCHITECTURE: APPLYFOUNDER
 * ========================================== */

function ApplyFounder() {
  const API_BASE = import.meta.env.PROD ? "https://udaaro-backend.onrender.com" : "http://localhost:5000";
  const FOUNDER_NAME = "Apurva Priyadarshi";

  // State Management
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", startup: "",
    industry: "", stage: "", fundingNeeded: "", description: "",
    linkedin: "", location: "India"
  });

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [isScanning, setIsScanning] = useState(false);

  // Animation Utilities
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0.9]);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const validateStepOne = () => {
    if (!formData.name || !formData.email || !formData.phone) {
      setError("Identity verification required for Step 1.");
      return false;
    }
    setError("");
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(""); setError(""); setLoading(true);
    setIsScanning(true); // Simulate a "Security Scan" of the idea

    // Delay for "Institutional Processing" feel
    setTimeout(async () => {
      try {
        const response = await fetch(`${API_BASE}/api/founders`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        const data = await response.json();

        if (response.ok) {
          setMessage("Credential Handshake Successful. Your venture is now in the Admission Pipeline.");
          setFormData({ name: "", email: "", phone: "", startup: "", industry: "", stage: "", fundingNeeded: "", description: "", linkedin: "", location: "India" });
          setStep(3); // Move to Success state
        } else {
          setError(data.message || "Credential verification protocol failed.");
        }
      } catch (err) {
        setError("Infrastructure Offline: Peer node handshake failed. Try again.");
      } finally {
        setLoading(false);
        setIsScanning(false);
      }
    }, 2000);
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-[#fcfcfd] flex flex-col font-sans selection:bg-blue-600 selection:text-white overflow-x-hidden">
      
      {/* ================= HEADER NAVIGATION ================= */}
      <nav className="p-8 fixed top-0 left-0 w-full z-50 bg-white/10 backdrop-blur-md border-b border-slate-100 sm:border-none">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 group text-slate-400 hover:text-slate-950 transition-all">
            <ArrowLeft size={18} className="group-hover:-translate-x-2 transition-transform" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] hidden sm:inline">Back to Command Terminal</span>
          </Link>
          <div className="flex items-center gap-4">
             <div className="flex items-center gap-2 px-4 py-2 bg-slate-950 text-white rounded-full">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[9px] font-black uppercase tracking-widest">Admission_Active</span>
             </div>
          </div>
        </div>
      </nav>

      <main className="flex-grow flex flex-col lg:flex-row">
        
        {/* ================= LEFT SIDE: SOVEREIGN BRANDING ================= */}
        <section className="lg:w-[45%] bg-slate-950 p-12 lg:p-24 text-white flex flex-col justify-between relative overflow-hidden">
          {/* Ambient Lighting & Grid */}
          <div className="absolute inset-0 z-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
          <div className="absolute top-[-10%] right-[-10%] w-[30vw] h-[30vw] bg-blue-600 rounded-full blur-[120px] opacity-20" />
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            animate={{ opacity: 1, x: 0 }} 
            className="relative z-10"
          >
            <div className="mb-20">
              <span className="inline-flex items-center gap-2 py-2 px-5 mb-8 text-[10px] font-black tracking-[0.4em] uppercase bg-white/5 border border-white/10 rounded-2xl shadow-xl backdrop-blur-xl">
                <Fingerprint size={12} className="text-blue-400" /> VANGUARD REGISTRATION
              </span>
              <h1 className="text-6xl lg:text-8xl font-black leading-[0.85] mb-8 tracking-tighter italic uppercase">
                Join the <br /> <span className="text-blue-500 underline decoration-blue-900 decoration-8 underline-offset-8">Rank.</span>
              </h1>
              <p className="text-slate-400 text-xl leading-relaxed max-w-md font-medium">
                Founder <span className="text-white font-black italic">{FOUNDER_NAME}</span> architected Udaaro as a closed-loop sanctuary for India's top 1% of builders.
              </p>
            </div>

            <div className="space-y-10">
              {CURATION_TIERS.map((tier, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + (idx * 0.1) }}
                  className="flex gap-6 items-center group cursor-pointer"
                >
                  <div className={`w-14 h-14 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-500 group-hover:bg-blue-600 group-hover:border-blue-400 shadow-2xl`}>
                    {React.cloneElement(tier.icon, { size: 24, className: "text-white group-hover:scale-110 transition-transform" })}
                  </div>
                  <div>
                    <h4 className="font-black text-xs uppercase tracking-widest mb-1">{tier.title}</h4>
                    <p className="text-slate-500 text-sm leading-relaxed max-w-xs transition-colors group-hover:text-slate-300">{tier.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="mt-24 lg:mt-0 relative z-10 flex flex-col gap-6">
             <div className="flex items-center gap-4 text-slate-600 font-black uppercase text-[10px] tracking-[0.4em]">
                <Database size={14} /> Secure_Ledger_Active
             </div>
             <div className="flex gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center grayscale hover:grayscale-0 transition-all opacity-40 hover:opacity-100 cursor-crosshair"><Cpu size={20}/></div>
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center grayscale hover:grayscale-0 transition-all opacity-40 hover:opacity-100 cursor-crosshair"><Network size={20}/></div>
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center grayscale hover:grayscale-0 transition-all opacity-40 hover:opacity-100 cursor-crosshair"><Scale size={20}/></div>
             </div>
          </div>
        </section>

        {/* ================= RIGHT SIDE: MULTI-STEP TERMINAL ================= */}
        <section className="lg:w-[55%] p-8 lg:p-24 bg-[#fdfdfe] flex flex-col items-center justify-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="max-w-2xl w-full"
          >
            <div className="bg-white rounded-[4rem] shadow-[0_80px_160px_-40px_rgba(0,0,0,0.12)] p-10 lg:p-20 border border-slate-100 relative group overflow-hidden">
              
              {/* Progress Bar */}
              <div className="absolute top-0 left-0 w-full h-1 bg-slate-50">
                 <motion.div 
                    animate={{ width: `${(step / 3) * 100}%` }} 
                    className="h-full bg-blue-600 shadow-[0_0_15px_rgba(37,99,235,0.5)]" 
                 />
              </div>

              {step < 3 && (
                <div className="mb-14 text-center">
                  <div className="flex items-center justify-center gap-3 mb-6">
                      <div className="h-px w-8 bg-blue-100" />
                      <Zap className="text-blue-600 animate-pulse" size={20} fill="currentColor" />
                      <div className="h-px w-8 bg-blue-100" />
                  </div>
                  <h2 className="text-5xl font-black text-slate-950 tracking-tighter leading-none mb-4 italic">Venture Intake</h2>
                  <p className="text-slate-400 text-base font-medium italic">Credential analysis Phase {step} of 2.</p>
                </div>
              )}

              <AnimatePresence mode="wait">
                {step === 1 && (
                  <motion.div 
                    key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
                    className="space-y-8"
                  >
                    <div className="grid md:grid-cols-2 gap-8">
                      <InputWrapper label="Executive Identity" icon={User} error={error && !formData.name}>
                        <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full bg-slate-50 border-0 ring-1 ring-slate-100 focus:ring-2 focus:ring-blue-600 focus:bg-white rounded-2xl py-4 pl-14 pr-4 transition-all outline-none font-bold text-sm" placeholder="Full Name" required />
                      </InputWrapper>
                      <InputWrapper label="Vetted Email" icon={Mail} error={error && !formData.email}>
                        <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full bg-slate-50 border-0 ring-1 ring-slate-100 focus:ring-2 focus:ring-blue-600 focus:bg-white rounded-2xl py-4 pl-14 pr-4 transition-all outline-none font-bold text-sm" placeholder="founder@domain.com" required />
                      </InputWrapper>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                      <InputWrapper label="Telecom Node" icon={Phone}>
                        <input type="text" name="phone" value={formData.phone} onChange={handleChange} className="w-full bg-slate-50 border-0 ring-1 ring-slate-100 focus:ring-2 focus:ring-blue-600 focus:bg-white rounded-2xl py-4 pl-14 pr-4 transition-all outline-none font-bold text-sm" placeholder="+91 XXXX XXXX" />
                      </InputWrapper>
                      <InputWrapper label="Venture Identity" icon={Building2}>
                        <input type="text" name="startup" value={formData.startup} onChange={handleChange} className="w-full bg-slate-50 border-0 ring-1 ring-slate-100 focus:ring-2 focus:ring-blue-600 focus:bg-white rounded-2xl py-4 pl-14 pr-4 transition-all outline-none font-bold text-sm" placeholder="Entity Name" />
                      </InputWrapper>
                    </div>

                    <button 
                      onClick={() => validateStepOne() && setStep(2)}
                      className="w-full bg-slate-950 hover:bg-blue-600 text-white font-black py-6 rounded-full shadow-2xl transition-all flex items-center justify-center gap-3 uppercase text-xs tracking-[0.4em]"
                    >
                      Proceed to Venture Thesis <ChevronRight size={18} />
                    </button>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.form 
                    key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} onSubmit={handleSubmit}
                    className="space-y-8"
                  >
                    <div className="grid md:grid-cols-2 gap-8">
                      <InputWrapper label="Primary Sector" icon={Target}>
                        <input type="text" name="industry" value={formData.industry} onChange={handleChange} className="w-full bg-slate-50 border-0 ring-1 ring-slate-100 focus:ring-2 focus:ring-blue-600 focus:bg-white rounded-2xl py-4 pl-14 pr-4 transition-all outline-none font-bold text-sm" placeholder="AI / Biotech / etc." />
                      </InputWrapper>
                      <InputWrapper label="Phase Selection" icon={BarChart3}>
                        <select name="stage" value={formData.stage} onChange={handleChange} className="w-full bg-slate-50 border-0 ring-1 ring-slate-100 focus:ring-2 focus:ring-blue-600 focus:bg-white rounded-2xl py-4 pl-14 pr-4 transition-all outline-none appearance-none cursor-pointer font-bold text-sm" required>
                          <option value="">Lifecycle Phase</option>
                          {STARTUP_STAGES.map(s => <option key={s.value} value={s.value}>{s.label}</option>)}
                        </select>
                      </InputWrapper>
                    </div>

                    <InputWrapper label="Problem Statement & IP Logic" icon={FileText}>
                      <textarea name="description" value={formData.description} onChange={handleChange} rows="4" className="w-full bg-slate-50 border-0 ring-1 ring-slate-100 focus:ring-2 focus:ring-blue-600 focus:bg-white rounded-[2rem] py-5 pl-14 pr-4 transition-all outline-none font-bold text-sm leading-relaxed" placeholder="Briefly architect your core value proposition..." required />
                    </InputWrapper>

                    <div className="flex gap-4">
                       <button type="button" onClick={() => setStep(1)} className="flex-1 py-6 border border-slate-200 rounded-full font-black text-xs uppercase tracking-widest text-slate-400 hover:bg-slate-50 transition-all">Back</button>
                       <button type="submit" disabled={loading} className="flex-[2] bg-slate-950 hover:bg-blue-600 text-white font-black py-6 rounded-full shadow-2xl transition-all disabled:opacity-50 uppercase text-xs tracking-[0.4em] relative overflow-hidden group">
                          <AnimatePresence mode="wait">
                            {isScanning ? (
                              <motion.div key="scan" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-3">
                                 <Loader2 className="animate-spin" size={18} /> SCANNING_CONCEPT...
                              </motion.div>
                            ) : (
                              <motion.div key="submit" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-3">
                                 Perform Concept Handshake <ChevronRight size={18} className="group-hover:translate-x-2 transition-transform" />
                              </motion.div>
                            )}
                          </AnimatePresence>
                       </button>
                    </div>
                  </motion.form>
                )}

                {step === 3 && (
                  <motion.div 
                    key="step3" initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
                    className="text-center py-10"
                  >
                    <div className="w-24 h-24 bg-emerald-50 rounded-[2.5rem] flex items-center justify-center text-emerald-500 mx-auto mb-10 shadow-xl shadow-emerald-100 border border-emerald-100">
                       <CheckCircle2 size={48} />
                    </div>
                    <h3 className="text-4xl font-black text-slate-950 tracking-tighter mb-4 italic">Protocol Synchronized.</h3>
                    <p className="text-slate-500 font-medium leading-relaxed max-w-sm mx-auto mb-12">
                      {message} <br /> Access codes will be dispatched to your terminal email.
                    </p>
                    <Link to="/" className="inline-flex items-center gap-3 px-10 py-5 bg-slate-950 text-white rounded-2xl font-black text-xs uppercase tracking-[0.3em] shadow-2xl shadow-blue-200 transition-all hover:bg-blue-600">
                       Return to Core Terminal
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Error Protocol */}
              <AnimatePresence>
                 {error && (
                    <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="mt-8 p-5 bg-rose-50 border border-rose-100 rounded-3xl flex items-center gap-4 text-rose-600 text-[11px] font-black uppercase tracking-widest">
                       <ShieldAlert size={18} /> {error}
                    </motion.div>
                 )}
              </AnimatePresence>

              <div className="text-center mt-12 pt-8 border-t border-slate-50">
                 <p className="text-[9px] text-slate-300 font-black uppercase tracking-[0.5em] leading-relaxed">
                   Udaaro Protocol v2.6.4 Alpha <br /> 
                   End-to-End Encrypted Concept Handshake
                 </p>
              </div>
            </div>
          </motion.div>
        </section>
      </main>

      {/* FOOTER METADATA */}
      <footer className="p-8 border-t border-slate-100 bg-white flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-10">
           <div className="text-[10px] font-black text-slate-950 tracking-tighter uppercase italic">UDAARO <span className="text-blue-600">VANGUARD</span></div>
           <div className="h-4 w-[1px] bg-slate-100 hidden md:block" />
           <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2 group cursor-help">
             <ShieldCheck size={12} className="text-blue-600 group-hover:animate-bounce" /> Admission Council Protocol
           </p>
        </div>
        <div className="flex gap-8">
           <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 hover:text-blue-600 hover:bg-blue-50 transition-all cursor-pointer shadow-sm hover:shadow-md"><MessageSquare size={18}/></div>
           <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 hover:text-blue-600 hover:bg-blue-50 transition-all cursor-pointer shadow-sm hover:shadow-md"><Globe size={18}/></div>
        </div>
      </footer>
    </div>
  );
}

export default ApplyFounder;