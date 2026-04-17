import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
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
  BarChart3
} from "lucide-react";

/**
 * INSTITUTIONAL CONFIGURATION
 * Design System: Alpha-Sovereign v2.6
 * Architected by Apurva Priyadarshi
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
    stat: "Top 1% Vetting"
  },
  {
    icon: <TrendingUp />,
    title: "Venture Intelligence",
    desc: "Access institutional-grade performance metrics and market synthesis before deployment.",
    stat: "Data-Driven Logic"
  },
  {
    icon: <Fingerprint />,
    title: "Direct Synthesis",
    desc: "Frictionless, direct-to-founder communication pathways secured by the Udaaro protocol.",
    stat: "End-to-End Encryption"
  }
];

const NETWORK_STATS = [
  { label: "Deployment Velocity", val: "$12M+", sub: "Last Quarter" },
  { label: "Syndicate Members", val: "84", sub: "Institutional/HNI" },
  { label: "Vanguard Startups", val: "12", sub: "Active Alpha Cycle" },
];

/**
 * REUSABLE ANIMATED COMPONENTS
 */
const SectionBadge = ({ text, color = "blue" }) => (
  <span className={`text-${color}-500 font-black tracking-[0.4em] text-[10px] uppercase block mb-6 px-3 py-1 bg-white/5 border border-white/10 rounded-lg w-fit`}>
    {text}
  </span>
);

const InputField = ({ label, icon: Icon, name, type = "text", placeholder, value, onChange, required = true }) => (
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
        className="w-full bg-slate-50 border-0 ring-1 ring-slate-100 focus:ring-2 focus:ring-blue-600 focus:bg-white rounded-2xl py-4 pl-14 pr-4 transition-all outline-none font-bold text-sm"
        required={required}
      />
    </div>
  </div>
);

/**
 * MAIN COMPONENT
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
  
  // Interaction State
  const [hoveredProp, setHoveredProp] = useState(null);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

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
        setMessage("Institutional Handshake Initialized. Our admission council will verify your credentials.");
        setFormData({ name: "", email: "", firm: "", investmentFocus: "", preferredStage: "", ticketSize: "" });
      } else {
        setError(data.message || "Credential verification protocol failed.");
      }
    } catch (err) {
      setError("Institutional Node Offline. Check network terminal.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-[#fcfcfd] flex flex-col font-sans selection:bg-blue-600 selection:text-white overflow-x-hidden">
      
      {/* ================= HEADER NAVIGATION ================= */}
      <nav className="p-8 fixed top-0 left-0 w-full z-50 bg-white/10 backdrop-blur-md border-b border-slate-100 sm:border-none sm:bg-transparent transition-all">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 group text-slate-400 hover:text-slate-950 transition-all">
            <ArrowLeft size={18} className="group-hover:-translate-x-2 transition-transform" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] hidden sm:inline">Sovereign Terminal</span>
          </Link>
          
          <div className="flex items-center gap-6">
             <div className="hidden md:flex items-center gap-2 px-4 py-2 bg-slate-950 text-white rounded-full">
                <Activity size={12} className="text-emerald-500 animate-pulse" />
                <span className="text-[9px] font-black uppercase tracking-widest">Protocol 2.6 Alpha</span>
             </div>
             <Crown className="text-blue-600" size={24} />
          </div>
        </div>
      </nav>

      <main className="flex-grow flex flex-col lg:flex-row">
        
        {/* ================= LEFT SIDE: SYNDICATE BRANDING ================= */}
        <section className="lg:w-[45%] bg-slate-950 p-12 lg:p-24 text-white flex flex-col justify-between relative">
          {/* Visual Grid Overlays */}
          <div className="absolute inset-0 z-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
          
          <div className="relative z-10">
            <div className="mb-20">
              <SectionBadge text="Elite Syndicate Portal" color="blue" />
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-6xl lg:text-8xl font-black mt-4 leading-[0.9] tracking-tighter italic uppercase"
              >
                Visionary <br />
                <span className="text-blue-600 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-400">Capital.</span>
              </motion.h1>
              <p className="text-slate-400 mt-10 text-xl leading-relaxed max-w-md font-medium">
                Access the sovereign layer of Indian innovation. We filter the noise, leaving only the most resilient founders.
              </p>
            </div>

            <div className="space-y-12 mb-20">
              {SYNDICATE_VALUE_PROPS.map((prop, i) => (
                <motion.div 
                  key={i} 
                  onMouseEnter={() => setHoveredProp(i)}
                  onMouseLeave={() => setHoveredProp(null)}
                  className="flex gap-8 group cursor-pointer"
                >
                  <div className={`flex-shrink-0 w-16 h-16 rounded-3xl flex items-center justify-center transition-all duration-500 ${
                    hoveredProp === i ? "bg-blue-600 scale-110 shadow-2xl shadow-blue-500/50" : "bg-white/5 border border-white/10"
                  }`}>
                    {React.cloneElement(prop.icon, { 
                      size: 28, 
                      className: hoveredProp === i ? "text-white" : "text-blue-500" 
                    })}
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                       <h3 className="font-black text-sm uppercase tracking-widest">{prop.title}</h3>
                       <span className="text-[8px] font-bold text-blue-500 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">[{prop.stat}]</span>
                    </div>
                    <p className="text-slate-500 text-sm leading-relaxed max-w-sm font-medium transition-colors group-hover:text-slate-300">{prop.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-6 pt-12 border-t border-white/10">
               {NETWORK_STATS.map((stat, i) => (
                 <div key={i}>
                    <p className="text-2xl font-black italic tracking-tighter">{stat.val}</p>
                    <p className="text-[8px] font-black text-slate-500 uppercase tracking-widest mt-1">{stat.label}</p>
                    <p className="text-[8px] font-bold text-blue-600 uppercase mt-1">{stat.sub}</p>
                 </div>
               ))}
            </div>
          </div>

          <div className="mt-24 lg:mt-0 relative z-10 flex justify-between items-end">
            <div>
               <div className="flex items-center gap-3 text-slate-600 font-black uppercase text-[10px] tracking-[0.4em] mb-4">
                 <Lock size={12} /> Institutional Security Enabled
               </div>
               <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer"><PieChart size={18}/></div>
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer"><BarChart3 size={18}/></div>
               </div>
            </div>
            <div className="text-right">
               <p className="text-[9px] font-black text-slate-800 uppercase tracking-[0.5em] mb-2 leading-none">Architected by</p>
               <p className="text-sm font-black italic tracking-tighter text-slate-500">{FOUNDER_NAME}</p>
            </div>
          </div>
        </section>

        {/* ================= RIGHT SIDE: ADMISSION FORM ================= */}
        <section className="lg:w-[55%] p-8 lg:p-24 flex flex-col items-center justify-center overflow-y-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-2xl w-full"
          >
            <div className="bg-white rounded-[4rem] shadow-[0_80px_160px_-40px_rgba(0,0,0,0.12)] p-10 lg:p-20 border border-slate-100 relative overflow-hidden group">
              
              {/* Form Header */}
              <div className="mb-14 text-center">
                <div className="flex items-center justify-center gap-3 mb-6">
                    <div className="h-px w-8 bg-blue-100" />
                    <Zap className="text-blue-600 animate-pulse" size={20} fill="currentColor" />
                    <div className="h-px w-8 bg-blue-100" />
                </div>
                <h2 className="text-5xl font-black text-slate-950 tracking-tighter leading-none mb-4">Syndicate Admission</h2>
                <p className="text-slate-400 text-base font-medium italic">Apply for clearance to access exclusive institutional deal-flow.</p>
              </div>

              {/* Status Messages */}
              <AnimatePresence>
                {error && (
                  <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="mb-8 p-5 bg-rose-50 border border-rose-100 rounded-3xl flex items-center gap-4 text-rose-600 text-[11px] font-black uppercase tracking-widest">
                    <ShieldAlert size={18} /> {error}
                  </motion.div>
                )}
                {message && (
                  <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="mb-8 p-10 bg-blue-600 rounded-[3rem] text-white shadow-2xl shadow-blue-200">
                    <div className="flex items-center gap-6">
                       <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center"><ShieldCheck size={32} /></div>
                       <div>
                          <p className="font-black text-xl tracking-tight leading-none uppercase italic">Clearance Pending</p>
                          <p className="text-xs opacity-80 mt-2 font-medium tracking-wide uppercase">{message}</p>
                       </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit} className="space-y-10">
                
                {/* Section I: Identity */}
                <div className="grid md:grid-cols-2 gap-8">
                  <InputField 
                    label="Lead Identity" icon={User} name="name" 
                    placeholder="Full Name" value={formData.name} onChange={handleChange} 
                  />
                  <InputField 
                    label="Verified Email" icon={Mail} name="email" type="email"
                    placeholder="name@firm.com" value={formData.email} onChange={handleChange} 
                  />
                </div>

                {/* Section II: Institution */}
                <div className="grid md:grid-cols-2 gap-8">
                  <InputField 
                    label="Institution/Firm" icon={Briefcase} name="firm" 
                    placeholder="Organization Name" value={formData.firm} onChange={handleChange} 
                  />
                  <InputField 
                    label="Primary Thesis" icon={Compass} name="investmentFocus" 
                    placeholder="e.g. Deep Tech / AI" value={formData.investmentFocus} onChange={handleChange} 
                  />
                </div>

                {/* Section III: Strategy */}
                <div className="space-y-8 p-8 bg-slate-50/50 rounded-[2.5rem] border border-slate-100">
                  <div className="space-y-4">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1 flex items-center gap-2">
                       <Layers size={12} /> Entry Point Alpha
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      {INVESTMENT_STAGES.map((s) => (
                        <button
                          key={s.value}
                          type="button"
                          onClick={() => setFormData({...formData, preferredStage: s.value})}
                          className={`p-4 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all border ${
                            formData.preferredStage === s.value 
                            ? "bg-slate-950 text-white border-slate-950 shadow-xl" 
                            : "bg-white text-slate-400 border-slate-200 hover:border-blue-300 hover:text-blue-600"
                          }`}
                        >
                          {s.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <InputField 
                    label="Target Ticket Deployment" icon={Banknote} name="ticketSize" 
                    placeholder="e.g. $100k - $500k" value={formData.ticketSize} onChange={handleChange} 
                  />
                </div>

                <div className="pt-6">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-slate-950 hover:bg-blue-600 text-white font-black py-8 rounded-full shadow-2xl shadow-blue-100 transition-all active:scale-95 flex flex-col items-center justify-center gap-2 disabled:opacity-50 uppercase group overflow-hidden relative"
                  >
                    {loading ? (
                      <div className="flex items-center gap-3">
                         <Zap className="animate-spin" size={20} />
                         <span className="text-xs tracking-[0.5em]">Verifying Protocol...</span>
                      </div>
                    ) : (
                      <>
                        <div className="flex items-center gap-3 relative z-10">
                          <span className="text-sm tracking-[0.5em]">Verify Syndicate Access</span>
                          <ChevronRight size={20} className="group-hover:translate-x-2 transition-transform" />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </>
                    )}
                  </button>
                </div>

                <div className="flex items-center justify-center gap-10 mt-10">
                   <div className="flex flex-col items-center opacity-30 group-hover:opacity-60 transition-opacity">
                      <Cpu size={24} className="mb-2 text-slate-400" />
                      <span className="text-[8px] font-black uppercase tracking-widest text-slate-500">Automated Vetting</span>
                   </div>
                   <div className="flex flex-col items-center opacity-30 group-hover:opacity-60 transition-opacity">
                      <Globe2 size={24} className="mb-2 text-slate-400" />
                      <span className="text-[8px] font-black uppercase tracking-widest text-slate-500">Global Connectivity</span>
                   </div>
                   <div className="flex flex-col items-center opacity-30 group-hover:opacity-60 transition-opacity">
                      <Network size={24} className="mb-2 text-slate-400" />
                      <span className="text-[8px] font-black uppercase tracking-widest text-slate-500">Mesh Intelligence</span>
                   </div>
                </div>
              </form>
            </div>
          </motion.div>
        </section>
      </main>

      {/* FOOTER METADATA */}
      <footer className="p-8 border-t border-slate-100 bg-white flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-8">
           <div className="text-[9px] font-black text-slate-300 uppercase tracking-[0.4em]">© 2026 Batch Alpha Alpha</div>
           <div className="h-4 w-[1px] bg-slate-100 hidden md:block" />
           <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
             <ShieldCheck size={12} className="text-blue-600" /> Vetted by {FOUNDER_NAME} Standards
           </p>
        </div>
        <div className="flex gap-8">
           <span className="text-[9px] font-black text-slate-400 hover:text-blue-600 cursor-pointer transition-colors uppercase tracking-widest">Privacy Protocol</span>
           <span className="text-[9px] font-black text-slate-400 hover:text-blue-600 cursor-pointer transition-colors uppercase tracking-widest">Compliance Charter</span>
           <span className="text-[9px] font-black text-slate-400 hover:text-blue-600 cursor-pointer transition-colors uppercase tracking-widest">System Status</span>
        </div>
      </footer>
    </div>
  );
}

// Icon fallbacks for robust loading
function ShieldAlert(props) {
    return <AlertCircle {...props} />
}

export default Investors;