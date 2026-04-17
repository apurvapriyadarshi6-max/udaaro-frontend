import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Rocket, User, Mail, Phone, Building2, Tag, 
  BarChart3, CircleDollarSign, FileText, CheckCircle2, 
  ArrowLeft, Loader2, ChevronRight, Info, Sparkles, 
  ShieldCheck, Globe, Fingerprint
} from "lucide-react";

const STARTUP_STAGES = [
  { value: "Idea", label: "Idea / Conceptual" },
  { value: "MVP", label: "Minimum Viable Product (MVP)" },
  { value: "Revenue", label: "Revenue Generating" },
  { value: "Scaling", label: "Scaling / Growth" },
];

const CURATION_TIERS = [
  { icon: <ShieldCheck size={18} />, title: "Vetted Network", desc: "Access the top 1% of the syndicate." },
  { icon: <Fingerprint size={18} />, title: "Sovereign Identity", desc: "Founder-first IP protection." },
  { icon: <Globe size={18} />, title: "Global Scale", desc: "Direct bridge to international capital." },
];

function ApplyFounder() {
  const API_BASE = import.meta.env.PROD ? "https://udaaro-backend.onrender.com" : "http://localhost:5000";
  const FOUNDER_NAME = "Apurva Priyadarshi";

  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", startup: "",
    industry: "", stage: "", fundingNeeded: "", description: "",
  });

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(""); setError(""); setLoading(true);
    try {
      const response = await fetch(`${API_BASE}/api/founders`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (response.ok) {
        setMessage("Your application is in orbit! The syndicate will review your credentials.");
        setFormData({ name: "", email: "", phone: "", startup: "", industry: "", stage: "", fundingNeeded: "", description: "" });
      } else {
        setError(data.message || "Credential verification failed. Please review your inputs.");
      }
    } catch (err) {
      setError("Infrastructure offline. Please try again in a moment.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      {/* ================= HEADER NAVIGATION ================= */}
      <nav className="p-8 fixed top-0 left-0 w-full z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 group text-slate-400 hover:text-slate-900 transition-all">
            <ArrowLeft size={20} className="group-hover:-translate-x-2 transition-transform" />
            <span className="text-xs font-black uppercase tracking-[0.3em]">Exit to Terminal</span>
          </Link>
          <div className="text-[10px] font-black text-slate-300 uppercase tracking-[0.5em]">
            Udaaro Admission Protocol
          </div>
        </div>
      </nav>

      <main className="flex-grow flex flex-col lg:flex-row">
        
        {/* ================= LEFT SIDE: BRAND NARRATIVE ================= */}
        <section className="lg:w-[45%] bg-slate-950 p-12 lg:p-24 flex flex-col justify-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            animate={{ opacity: 1, x: 0 }} 
            className="relative z-10 max-w-md mx-auto"
          >
            <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-10 shadow-2xl shadow-blue-500/20">
              <Rocket size={32} className="text-white" />
            </div>
            <h1 className="text-5xl lg:text-7xl font-black leading-[0.9] mb-8 tracking-tighter italic">
              Join the <br /> <span className="text-blue-500 underline decoration-blue-900 decoration-8 underline-offset-8">Vanguard.</span>
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed mb-12 font-medium">
              Founded by <span className="text-white">{FOUNDER_NAME}</span>, Udaaro is a closed-loop ecosystem for generational builders. Admission is selective.
            </p>

            <div className="space-y-8">
              {CURATION_TIERS.map((tier, idx) => (
                <div key={idx} className="flex gap-5 items-start">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-blue-500 border border-white/10">
                    {tier.icon}
                  </div>
                  <div>
                    <h4 className="font-black text-xs uppercase tracking-widest mb-1">{tier.title}</h4>
                    <p className="text-slate-500 text-xs leading-relaxed">{tier.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-20 pt-10 border-t border-white/10 flex items-center gap-4">
               <div className="text-[10px] font-black text-slate-600 uppercase tracking-[0.4em]">Official Founder Seal</div>
               <div className="px-3 py-1 bg-white/5 rounded text-[9px] font-black uppercase tracking-widest text-blue-400 border border-white/10">
                 {FOUNDER_NAME}
               </div>
            </div>
          </motion.div>
        </section>

        {/* ================= RIGHT SIDE: LUXURY FORM ================= */}
        <section className="lg:w-[55%] p-8 lg:p-24 bg-white flex items-center justify-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="max-w-xl w-full"
          >
            <div className="mb-12">
              <div className="flex items-center gap-3 text-blue-600 mb-4">
                <Sparkles size={20} />
                <span className="text-xs font-black uppercase tracking-[0.4em]">Application Portal</span>
              </div>
              <h2 className="text-4xl font-black text-slate-950 tracking-tighter leading-none">Founder Admission.</h2>
              <p className="text-slate-400 mt-4 text-sm font-medium">Please provide your institutional and venture credentials.</p>
            </div>

            <AnimatePresence>
              {error && (
                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} className="mb-8 p-5 bg-red-50 border border-red-100 rounded-2xl flex items-center gap-4 text-red-600 text-xs font-bold uppercase tracking-wider">
                  <Info size={18} /> {error}
                </motion.div>
              )}
              {message && (
                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} className="mb-8 p-6 bg-emerald-50 border border-emerald-100 rounded-[2.5rem] flex items-center gap-5 text-emerald-800">
                  <CheckCircle2 className="text-emerald-500 shrink-0" size={32} />
                  <p className="font-black text-sm uppercase tracking-widest">{message}</p>
                </motion.div>
              )}
            </AnimatePresence>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Legal Name</label>
                  <div className="relative group">
                    <User className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-blue-600 transition-colors" size={16} />
                    <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full bg-slate-50 border-0 ring-1 ring-slate-100 focus:ring-2 focus:ring-blue-600 focus:bg-white rounded-2xl py-4 pl-14 pr-4 transition-all outline-none font-bold text-sm" placeholder="Apurva Priyadarshi" required />
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Email Terminal</label>
                  <div className="relative group">
                    <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-blue-600 transition-colors" size={16} />
                    <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full bg-slate-50 border-0 ring-1 ring-slate-100 focus:ring-2 focus:ring-blue-600 focus:bg-white rounded-2xl py-4 pl-14 pr-4 transition-all outline-none font-bold text-sm" placeholder="founder@udaaro.com" required />
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Direct Contact</label>
                  <div className="relative group">
                    <Phone className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-blue-600 transition-colors" size={16} />
                    <input type="text" name="phone" value={formData.phone} onChange={handleChange} className="w-full bg-slate-50 border-0 ring-1 ring-slate-100 focus:ring-2 focus:ring-blue-600 focus:bg-white rounded-2xl py-4 pl-14 pr-4 transition-all outline-none font-bold text-sm" placeholder="+91 XXXX XXXX" required />
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Startup Identity</label>
                  <div className="relative group">
                    <Building2 className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-blue-600 transition-colors" size={16} />
                    <input type="text" name="startup" value={formData.startup} onChange={handleChange} className="w-full bg-slate-50 border-0 ring-1 ring-slate-100 focus:ring-2 focus:ring-blue-600 focus:bg-white rounded-2xl py-4 pl-14 pr-4 transition-all outline-none font-bold text-sm" placeholder="Startup Name" required />
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Industry</label>
                  <div className="relative group">
                    <Tag className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-blue-600 transition-colors" size={16} />
                    <input type="text" name="industry" value={formData.industry} onChange={handleChange} className="w-full bg-slate-50 border-0 ring-1 ring-slate-100 focus:ring-2 focus:ring-blue-600 focus:bg-white rounded-2xl py-4 pl-14 pr-4 transition-all outline-none font-bold text-sm" placeholder="AI / Biotech / SaaS" required />
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Current Stage</label>
                  <div className="relative group">
                    <BarChart3 className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300 pointer-events-none" size={16} />
                    <select name="stage" value={formData.stage} onChange={handleChange} className="w-full bg-slate-50 border-0 ring-1 ring-slate-100 focus:ring-2 focus:ring-blue-600 focus:bg-white rounded-2xl py-4 pl-14 pr-4 transition-all outline-none appearance-none cursor-pointer font-bold text-sm" required>
                      <option value="">Select Phase</option>
                      {STARTUP_STAGES.map(s => <option key={s.value} value={s.value}>{s.label}</option>)}
                    </select>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Pitch / Thesis</label>
                <div className="relative group">
                  <FileText className="absolute left-5 top-6 text-slate-300 group-focus-within:text-blue-600 transition-colors" size={16} />
                  <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Describe the problem you are solving..." rows="5" className="w-full bg-slate-50 border-0 ring-1 ring-slate-100 focus:ring-2 focus:ring-blue-600 focus:bg-white rounded-[2rem] py-5 pl-14 pr-4 transition-all outline-none font-bold text-sm leading-relaxed" required></textarea>
                </div>
              </div>

              <button type="submit" disabled={loading} className="w-full bg-slate-950 hover:bg-blue-600 text-white font-black py-6 rounded-[2rem] shadow-2xl shadow-blue-100 transition-all flex items-center justify-center gap-4 group disabled:opacity-50 mt-10 uppercase text-xs tracking-[0.3em]">
                {loading ? <Loader2 className="animate-spin" size={20} /> : (
                  <>
                    Submit Credentials
                    <ChevronRight size={18} className="group-hover:translate-x-2 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </section>
      </main>
    </div>
  );
}

export default ApplyFounder;