import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ShieldCheck, 
  BarChart4, 
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
  Award
} from "lucide-react";

/**
 * ELITE CONFIGURATION
 * Architected by Apurva Priyadarshi for Batch 2026-Alpha
 */
const INVESTMENT_STAGES = [
  { value: "Idea", label: "Pre-Seed / Intellectual Property" },
  { value: "MVP", label: "Minimum Viable Product (MVP)" },
  { value: "Revenue", label: "Seed / Revenue Generating" },
  { value: "Scaling", label: "Series A+ / Expansion" },
];

const SYNDICATE_VALUE_PROPS = [
  {
    icon: <ShieldCheck className="text-blue-500" />,
    title: "Sovereign Pipelines",
    desc: "Gain entry to a high-signal environment of founders vetted by the Apurva Priyadarshi standard."
  },
  {
    icon: <TrendingUp className="text-indigo-500" />,
    title: "Venture Intelligence",
    desc: "Access institutional-grade performance metrics and market synthesis before deployment."
  },
  {
    icon: <Fingerprint className="text-cyan-500" />,
    title: "Direct Synthesis",
    desc: "Frictionless, direct-to-founder communication pathways secured by the Udaaro protocol."
  }
];

function Investors() {
  const API_BASE = import.meta.env.PROD ? "https://udaaro-backend.onrender.com" : "http://localhost:5000";
  const FOUNDER_NAME = "Apurva Priyadarshi";

  const [formData, setFormData] = useState({
    name: "", email: "", firm: "", investmentFocus: "", preferredStage: "", ticketSize: "",
  });

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(""); setError(""); setLoading(true);

    try {
      const response = await fetch(`${API_BASE}/api/investors`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("Syndicate credentials received. The admission council will reach out.");
        setFormData({ name: "", email: "", firm: "", investmentFocus: "", preferredStage: "", ticketSize: "" });
      } else {
        setError(data.message || "Credential verification failed.");
      }
    } catch (err) {
      setError("Infrastructure offline. Please verify terminal connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      
      {/* ================= HEADER NAVIGATION ================= */}
      <nav className="p-8 fixed top-0 left-0 w-full z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 group text-slate-400 hover:text-slate-950 transition-all">
            <ArrowLeft size={18} className="group-hover:-translate-x-2 transition-transform" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em]">Sovereign Terminal</span>
          </Link>
          <div className="flex items-center gap-3">
             <div className="hidden sm:block text-right">
                <p className="text-[9px] font-black text-slate-300 uppercase tracking-widest leading-none">Admission Desk</p>
                <p className="text-[9px] font-black text-blue-600 uppercase tracking-widest mt-1">Status: Open</p>
             </div>
             <div className="h-8 w-[1px] bg-slate-100 mx-2 hidden sm:block" />
             <Crown className="text-blue-600" size={20} />
          </div>
        </div>
      </nav>

      <main className="flex-grow flex flex-col lg:flex-row">
        
        {/* ================= LEFT SIDE: SYNDICATE BRANDING ================= */}
        <section className="lg:w-[42%] bg-slate-950 p-12 lg:p-24 text-white flex flex-col justify-between relative overflow-hidden">
          {/* Ambient Lighting */}
          <div className="absolute top-0 right-0 w-full h-full opacity-20 pointer-events-none">
            <div className="absolute top-[-10%] right-[-10%] w-[30vw] h-[30vw] bg-blue-600 rounded-full blur-[120px]" />
          </div>
          
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative z-10"
          >
            <div className="mb-16">
              <span className="text-blue-500 font-black tracking-[0.4em] text-[10px] uppercase block mb-6 px-3 py-1 bg-white/5 border border-white/10 rounded-lg w-fit">
                Elite Tier Access
              </span>
              <h1 className="text-5xl lg:text-7xl font-black mt-4 leading-none tracking-tighter italic">
                Enter the <br />
                <span className="text-blue-500 underline decoration-blue-900 decoration-8 underline-offset-8">Syndicate.</span>
              </h1>
              <p className="text-slate-400 mt-8 text-lg leading-relaxed max-w-md font-medium">
                Udaaro provides institutional capital and visionary angels a high-signal gateway into the core of Indian innovation.
              </p>
            </div>

            <div className="space-y-12">
              {SYNDICATE_VALUE_PROPS.map((prop, i) => (
                <div key={i} className="flex gap-6 group">
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center transition-all group-hover:bg-blue-600 group-hover:border-blue-400">
                    {React.cloneElement(prop.icon, { className: "text-white group-hover:scale-110 transition-transform" })}
                  </div>
                  <div>
                    <h3 className="font-black text-xs uppercase tracking-widest mb-2">{prop.title}</h3>
                    <p className="text-slate-500 text-xs leading-relaxed max-w-xs font-medium">{prop.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="mt-20 lg:mt-0 pt-10 border-t border-white/10 relative z-10">
            <div className="flex items-center gap-4 text-slate-600 font-black uppercase text-[9px] tracking-[0.4em]">
              <Lock size={12} /> Encrypted Infrastructure
            </div>
            <div className="flex gap-10 mt-6 opacity-40 grayscale hover:opacity-100 transition-all cursor-crosshair">
               <div className="font-black text-xl italic tracking-tighter">VENTURE_CAPITAL</div>
               <div className="font-black text-xl italic tracking-tighter">SOVEREIGN_FUND</div>
            </div>
          </div>
        </section>

        {/* ================= RIGHT SIDE: ADMISSION FORM ================= */}
        <section className="lg:w-[58%] p-8 lg:p-24 flex items-center justify-center bg-[#fdfdfe]">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl w-full"
          >
            <div className="bg-white rounded-[3.5rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.08)] p-10 lg:p-20 border border-slate-100 relative overflow-hidden">
              
              <div className="mb-14 relative z-10">
                <div className="flex items-center gap-2 mb-4">
                    <Zap className="text-blue-600" size={16} fill="currentColor" />
                    <span className="text-[10px] font-black text-blue-600 uppercase tracking-[0.5em]">Admission Desk</span>
                </div>
                <h2 className="text-4xl font-black text-slate-950 tracking-tighter leading-none">Syndicate Application</h2>
                <p className="text-slate-400 text-sm mt-4 font-medium italic">Venture details required for institutional clearance.</p>
              </div>

              <AnimatePresence>
                {error && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} className="mb-8 p-5 bg-red-50 border border-red-100 rounded-2xl flex items-center gap-4 text-red-600 text-[11px] font-black uppercase tracking-widest">
                    <Fingerprint size={18} /> {error}
                  </motion.div>
                )}
                {message && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} className="mb-8 p-8 bg-blue-600 rounded-[3rem] flex items-center gap-6 text-white shadow-2xl shadow-blue-200">
                    <ShieldCheck size={40} className="shrink-0" />
                    <div>
                      <p className="font-black text-sm uppercase tracking-widest">Protocol Accepted</p>
                      <p className="text-[11px] opacity-80 mt-1 uppercase tracking-wider">{message}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                
                {/* Credentials Row */}
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Full Identity</label>
                    <div className="relative group">
                      <User className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-blue-600 transition-colors" size={16} />
                      <input
                        type="text" name="name" value={formData.name} onChange={handleChange}
                        placeholder="e.g. Marcus Vane"
                        className="w-full bg-slate-50 border-0 ring-1 ring-slate-100 focus:ring-2 focus:ring-blue-600 focus:bg-white rounded-2xl py-4 pl-14 pr-4 transition-all outline-none font-bold text-sm"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Secure Email</label>
                    <div className="relative group">
                      <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-blue-600 transition-colors" size={16} />
                      <input
                        type="email" name="email" value={formData.email} onChange={handleChange}
                        placeholder="vane@cap-intl.com"
                        className="w-full bg-slate-50 border-0 ring-1 ring-slate-100 focus:ring-2 focus:ring-blue-600 focus:bg-white rounded-2xl py-4 pl-14 pr-4 transition-all outline-none font-bold text-sm"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Institution Row */}
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Venture Firm</label>
                    <div className="relative group">
                      <Briefcase className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-blue-600 transition-colors" size={16} />
                      <input
                        type="text" name="firm" value={formData.firm} onChange={handleChange}
                        placeholder="Investment Institution"
                        className="w-full bg-slate-50 border-0 ring-1 ring-slate-100 focus:ring-2 focus:ring-blue-600 focus:bg-white rounded-2xl py-4 pl-14 pr-4 transition-all outline-none font-bold text-sm"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Sector Thesis</label>
                    <div className="relative group">
                      <Compass className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-blue-600 transition-colors" size={16} />
                      <input
                        type="text" name="investmentFocus" value={formData.investmentFocus} onChange={handleChange}
                        placeholder="e.g. AI / Bio-Engineering"
                        className="w-full bg-slate-50 border-0 ring-1 ring-slate-100 focus:ring-2 focus:ring-blue-600 focus:bg-white rounded-2xl py-4 pl-14 pr-4 transition-all outline-none font-bold text-sm"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Strategy Row */}
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Preferred Entry Point</label>
                  <div className="relative group">
                    <Layers className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300 pointer-events-none" size={16} />
                    <select
                      name="preferredStage" value={formData.preferredStage} onChange={handleChange}
                      className="w-full bg-slate-50 border-0 ring-1 ring-slate-100 focus:ring-2 focus:ring-blue-600 focus:bg-white rounded-2xl py-4 pl-14 pr-4 transition-all outline-none appearance-none cursor-pointer font-bold text-sm"
                      required
                    >
                      <option value="">Select Stage</option>
                      {INVESTMENT_STAGES.map((s) => (
                        <option key={s.value} value={s.value}>{s.label}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Target Ticket Range</label>
                  <div className="relative group">
                    <Banknote className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-blue-600 transition-colors" size={16} />
                    <input
                      type="text" name="ticketSize" value={formData.ticketSize} onChange={handleChange}
                      placeholder="e.g. $1M - $5M"
                      className="w-full bg-slate-50 border-0 ring-1 ring-slate-200 focus:ring-2 focus:ring-blue-600 focus:bg-white rounded-2xl py-4 pl-14 pr-4 transition-all outline-none font-bold text-sm"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-slate-950 hover:bg-blue-600 text-white font-black py-6 rounded-[2.5rem] shadow-2xl shadow-blue-100 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-3 disabled:opacity-50 mt-10 uppercase text-xs tracking-[0.4em]"
                >
                  {loading ? <Loader2 className="animate-spin" size={20} /> : (
                    <>
                      Verify & Join Syndicate
                      <ChevronRight size={18} />
                    </>
                  )}
                </button>

                <div className="text-center mt-6">
                    <p className="text-[9px] text-slate-400 font-black uppercase tracking-[0.3em] leading-relaxed px-10">
                      Admission is subject to protocol verification. <br /> 
                      Architected by {FOUNDER_NAME}.
                    </p>
                </div>
              </form>
            </div>
          </motion.div>
        </section>
      </main>
    </div>
  );
}

// Internal Styled Icons for consistent Luxury UX
function Loader2({ className, size }) {
    return <Zap className={className} size={size} fill="currentColor" />
}

export default Investors;