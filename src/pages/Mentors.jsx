import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
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
  Compass
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
    icon: <Users className="text-blue-500" />,
    title: "Legacy Crafting",
    desc: "Directly architect the trajectory of India's most disruptive early-stage ventures."
  },
  {
    icon: <Award className="text-amber-500" />,
    title: "Elite Peerage",
    desc: "Join an exclusive sovereign circle of industry veterans and global executive leaders."
  },
  {
    icon: <Lightbulb className="text-indigo-500" />,
    title: "Venture Synthesis",
    desc: "Influence market trends by steering high-signal innovation from the ground floor."
  }
];

function Mentors() {
  const API_BASE = import.meta.env.PROD ? "https://udaaro-backend.onrender.com" : "http://localhost:5000";
  const FOUNDER_NAME = "Apurva Priyadarshi";

  const [formData, setFormData] = useState({
    name: "", email: "", expertise: "", experienceLevel: "", preferredStage: "", availability: "",
  });

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

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
        setMessage("Admission credentials verified. Our council will review your profile shortly.");
        setFormData({ name: "", email: "", expertise: "", experienceLevel: "", preferredStage: "", availability: "" });
      } else {
        setError(data.message || "Credential verification failed. Please check inputs.");
      }
    } catch (err) {
      setError("Terminal offline. Please verify network protocol.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-blue-600 selection:text-white">
      
      {/* ================= HEADER NAVIGATION ================= */}
      <nav className="p-8 fixed top-0 left-0 w-full z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 group text-slate-400 hover:text-slate-900 transition-all">
            <ArrowLeft size={18} className="group-hover:-translate-x-2 transition-transform" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em]">Back to Core</span>
          </Link>
          <div className="flex items-center gap-3">
             <div className="text-right">
                <p className="text-[9px] font-black text-slate-300 uppercase tracking-widest">Advisory Protocol</p>
                <p className="text-[9px] font-black text-blue-600 uppercase tracking-widest mt-1">Batch 2026</p>
             </div>
          </div>
        </div>
      </nav>

      <main className="flex flex-col lg:flex-row min-h-screen">
        
        {/* ================= LEFT SIDE: SOVEREIGN ADVISORY BRANDING ================= */}
        <section className="lg:w-[42%] bg-blue-600 p-12 lg:p-24 text-white flex flex-col justify-center relative overflow-hidden">
          {/* Luxury Ambient Art */}
          <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-white/10 rounded-full blur-[120px]" />
          <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative z-10"
          >
            <div className="mb-14">
              <span className="inline-flex items-center gap-2 py-2 px-4 mb-8 text-[10px] font-black tracking-[0.3em] uppercase bg-blue-500 border border-blue-400 rounded-xl shadow-lg">
                <Sparkles size={12} /> Elite Advisory Circle
              </span>
              <h1 className="text-5xl lg:text-7xl font-black mb-8 leading-[0.9] tracking-tighter italic">
                Architect the <br /><span className="text-blue-100 underline decoration-blue-200 decoration-8 underline-offset-[12px]">Future.</span>
              </h1>
              <p className="text-blue-100 text-lg mb-12 max-w-sm leading-relaxed font-medium">
                Mentorship at Udaaro is an act of legacy. Guide the next wave of sovereign companies through strategic synthesis.
              </p>
            </div>

            <div className="space-y-12">
              {ADVISORY_PILLARS.map((pillar, i) => (
                <div key={i} className="flex items-start gap-6 group">
                  <div className="flex-shrink-0 w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-2xl shadow-blue-900/20 group-hover:scale-110 transition-transform duration-500">
                    {pillar.icon}
                  </div>
                  <div>
                    <h3 className="font-black text-xs uppercase tracking-widest mb-2">{pillar.title}</h3>
                    <p className="text-blue-100/70 text-xs leading-relaxed max-w-xs">{pillar.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-24 pt-10 border-t border-white/10 flex items-center gap-6">
                <div className="text-[9px] font-black text-blue-200 uppercase tracking-[0.4em]">Curated by {FOUNDER_NAME}</div>
                <Zap size={16} className="text-blue-200" fill="currentColor" />
            </div>
          </motion.div>
        </section>

        {/* ================= RIGHT SIDE: ADMISSION TERMINAL ================= */}
        <section className="lg:w-[58%] bg-slate-50 p-8 lg:p-24 flex items-center justify-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl w-full"
          >
            <div className="bg-white rounded-[3.5rem] p-10 lg:p-20 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.06)] border border-slate-100 relative">
              
              <div className="mb-14">
                <div className="flex items-center gap-3 text-blue-600 mb-4">
                    <Fingerprint size={20} />
                    <span className="text-[10px] font-black uppercase tracking-[0.4em]">Advisor Admission</span>
                </div>
                <h2 className="text-4xl font-black text-slate-950 tracking-tighter leading-none">Become a Mentor.</h2>
                <p className="text-slate-400 mt-4 text-sm font-medium">Help us synchronize your expertise with our high-signal founders.</p>
              </div>

              <AnimatePresence>
                {error && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} className="mb-8 p-5 bg-red-50 border border-red-100 rounded-2xl flex items-center gap-4 text-red-600 text-[11px] font-black uppercase tracking-widest">
                    <Compass size={18} /> {error}
                  </motion.div>
                )}
                {message && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} className="mb-8 p-8 bg-emerald-50 border border-emerald-100 rounded-[3rem] flex items-center gap-6 text-emerald-800 shadow-xl shadow-emerald-100">
                    <CheckCircle className="text-emerald-500 shrink-0" size={32} />
                    <div>
                      <p className="font-black text-sm uppercase tracking-widest leading-none">Protocol Initiated</p>
                      <p className="text-[11px] opacity-70 mt-2 uppercase tracking-wider">{message}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                
                {/* Identity Matrix */}
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Legal Name</label>
                  <div className="relative group">
                    <User className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-blue-500 transition-colors" size={16} />
                    <input
                      type="text" name="name" value={formData.name} onChange={handleChange}
                      placeholder="e.g. Marcus Aurelius"
                      className="w-full bg-slate-50 border-0 ring-1 ring-slate-100 focus:ring-2 focus:ring-blue-600 focus:bg-white rounded-2xl py-4 pl-14 pr-4 transition-all outline-none font-bold text-sm shadow-inner"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Professional Email</label>
                  <div className="relative group">
                    <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-blue-500 transition-colors" size={16} />
                    <input
                      type="email" name="email" value={formData.email} onChange={handleChange}
                      placeholder="mentor@udaaro.com"
                      className="w-full bg-slate-50 border-0 ring-1 ring-slate-100 focus:ring-2 focus:ring-blue-600 focus:bg-white rounded-2xl py-4 pl-14 pr-4 transition-all outline-none font-bold text-sm shadow-inner"
                      required
                    />
                  </div>
                </div>

                {/* Expertise Field */}
                <div className="md:col-span-2 space-y-3">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Domain Mastery</label>
                  <div className="relative group">
                    <Star className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-blue-500 transition-colors" size={16} />
                    <input
                      type="text" name="expertise" value={formData.expertise} onChange={handleChange}
                      placeholder="e.g. AI Architecture, FinTech GTM, SaaS Scaling"
                      className="w-full bg-slate-50 border-0 ring-1 ring-slate-100 focus:ring-2 focus:ring-blue-600 focus:bg-white rounded-2xl py-4 pl-14 pr-4 transition-all outline-none font-bold text-sm shadow-inner"
                      required
                    />
                  </div>
                </div>

                {/* Logistics Matrix */}
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Tenure</label>
                  <div className="relative group">
                    <Briefcase className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300 pointer-events-none" size={16} />
                    <select
                      name="experienceLevel" value={formData.experienceLevel} onChange={handleChange}
                      className="w-full bg-slate-50 border-0 ring-1 ring-slate-100 focus:ring-2 focus:ring-blue-600 focus:bg-white rounded-2xl py-4 pl-14 pr-4 transition-all outline-none appearance-none cursor-pointer font-bold text-sm shadow-inner"
                      required
                    >
                      <option value="">Years of Mastery</option>
                      {EXPERIENCE_LEVELS.map(lvl => <option key={lvl} value={lvl}>{lvl}</option>)}
                    </select>
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Venture Stage</label>
                  <div className="relative group">
                    <Target className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300 pointer-events-none" size={16} />
                    <select
                      name="preferredStage" value={formData.preferredStage} onChange={handleChange}
                      className="w-full bg-slate-50 border-0 ring-1 ring-slate-100 focus:ring-2 focus:ring-blue-600 focus:bg-white rounded-2xl py-4 pl-14 pr-4 transition-all outline-none appearance-none cursor-pointer font-bold text-sm shadow-inner"
                      required
                    >
                      <option value="">Target Lifecycle</option>
                      {STARTUP_STAGES.map(stage => <option key={stage} value={stage}>{stage}</option>)}
                    </select>
                  </div>
                </div>

                <div className="md:col-span-2 space-y-3">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Advisory Bandwidth</label>
                  <div className="relative group">
                    <Calendar className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300 pointer-events-none" size={16} />
                    <select
                      name="availability" value={formData.availability} onChange={handleChange}
                      className="w-full bg-slate-50 border-0 ring-1 ring-slate-100 focus:ring-2 focus:ring-blue-600 focus:bg-white rounded-2xl py-4 pl-14 pr-4 transition-all outline-none appearance-none cursor-pointer font-bold text-sm shadow-inner"
                      required
                    >
                      <option value="">Synchronization Level</option>
                      {AVAILABILITY_OPTIONS.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                    </select>
                  </div>
                </div>

                {/* The Sovereign Action */}
                <div className="md:col-span-2 pt-8">
                  <button
                    type="submit" disabled={loading}
                    className="w-full bg-slate-950 hover:bg-blue-600 text-white font-black py-6 rounded-[2.5rem] transition-all transform hover:-translate-y-1 shadow-2xl shadow-blue-200 flex items-center justify-center gap-4 group disabled:opacity-50 uppercase text-[11px] tracking-[0.4em]"
                  >
                    {loading ? <Loader2 className="animate-spin" size={18} /> : (
                      <>
                        Ascend to Mentor Network
                        <ChevronRight size={18} className="group-hover:translate-x-2 transition-transform" />
                      </>
                    )}
                  </button>
                  <div className="text-center mt-8">
                    <p className="text-[9px] text-slate-400 font-black uppercase tracking-[0.3em] leading-relaxed px-10">
                      Admission is subject to council verification. <br /> 
                      Governance by {FOUNDER_NAME}.
                    </p>
                  </div>
                </div>

              </form>
            </div>
          </motion.div>
        </section>
      </main>
    </div>
  );
}

export default Mentors;