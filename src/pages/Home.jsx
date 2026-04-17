import React, { useState, useEffect, useRef, useMemo, useCallback } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, AnimatePresence, useInView, useSpring } from "framer-motion";
import { 
  CheckCircle, Rocket, ShieldCheck, Fingerprint, Layers, Crown, Sparkles, 
  ArrowUpRight, Award, Zap, Globe, MessageSquare, ChevronRight, Target, 
  BarChart3, Cpu, Workflow, SearchCheck, Gem, Compass, PieChart, Network,
  Lock, ShieldAlert, ZapOff, Activity, Terminal, Database, HardDrive, 
  UserCheck, Briefcase, Microscope, Lightbulb, TrendingUp, Scale, Radio,
  IndianRupee, Languages, Landmark, Map
} from "lucide-react";

/** * =============================================================================
 * I. GLOBAL CONFIGURATION & CORE DATA (LOCALIZED FOR INDIA)
 * Architected by Apurva Priyadarshi | Design System: Udaaro_Sovereign_Alpha
 * =============================================================================
 */

const BRAND_IDENTITY = {
  founder: "Apurva Priyadarshi",
  tagline: "The Sovereign Layer for Indian Venture Building",
  batch: "Alpha Cycle 2026",
  hq: "India / Global Operations",
  version: "v2.9.2 Stable Build"
};

const STATS_VITAL = [
  { label: "Vetted Founders", value: "850+", trend: "+12.4%", icon: <UserCheck size={14}/> },
  { label: "Institutional Capital", value: "₹1,200Cr+", trend: "+24.1%", icon: <IndianRupee size={14}/> },
  { label: "Mentorship Nodes", value: "240+", trend: "+8.2%", icon: <Network size={14}/> },
  { label: "India-Scale Batches", value: "12", trend: "Active", icon: <Database size={14}/> },
];

const CORE_SERVICES = [
  {
    id: "IV",
    title: "Idea Validation",
    subtitle: "Precision Filtering",
    desc: "We perform a 48-point demographic and psychological stress-test on your concept using India-specific market data to determine survival probability.",
    features: ["B2B/D2C Sentiment Analysis", "Micro-Market Feasibility", "Unit Economic Stress-Testing"],
    icon: <SearchCheck className="text-blue-500" />,
    stats: "High Fidelity"
  },
  {
    id: "BE",
    title: "Business Engineering",
    subtitle: "Structural Resilience",
    desc: "We build the operational skeleton. Engineering your GST-compliant supply chain, MCA legal stacks, and automated India-Stack workflows.",
    features: ["GST/Compliance Automation", "Sovereign Cap-Table Logic", "India-Stack Integration"],
    icon: <Cpu className="text-indigo-500" />,
    stats: "Institutional"
  },
  {
    id: "GA",
    title: "Global Ascension",
    subtitle: "Strategic Dominion",
    desc: "Bridging the gap between Indian innovation and Global Capital. We architect narratives that resonate with SV/London/Singapore syndicates.",
    features: ["Cross-Border GTM Protocol", "Institutional Syndicate Access", "Narrative Dominance"],
    icon: <Globe className="text-cyan-500" />,
    stats: "Alpha Access"
  }
];

const MASTER_WORKFLOW = [
  {
    step: "01",
    title: "The Inbound Terminal",
    desc: "Submission of raw concept metadata for initial algorithmic vetting and Indian market alignment checks.",
    node: "INTAKE_HANDSHAKE"
  },
  {
    step: "02",
    title: "Deep Layer Analysis",
    desc: "Rigorous SWOT stress-testing and competitor vulnerability mapping by our Delhi/Bangalore strategy councils.",
    node: "STRESS_VULNERABILITY"
  },
  {
    step: "03",
    title: "Strategy Synthesis",
    desc: "Development of the Udaaro Custom Blueprint—your 18-month tactical roadmap to market sovereignty.",
    node: "BLUEPRINT_GENERATION"
  },
  {
    step: "04",
    title: "Institutional Scaling",
    desc: "Execution phase: Capital deployment, high-velocity GTM launch, and institutional syndicate synchronization.",
    node: "MARKET_DOMINANCE"
  }
];

const ECOSYSTEM_TIERS = [
  { name: "Alpha Vanguard", access: "Top 1%", status: "High Signal" },
  { name: "Beta Node", access: "Growth Phase", status: "Scaling" },
  { name: "Syndicate Portal", access: "Institutional", status: "Deployment" }
];

/** * =============================================================================
 * II. UI ATOMS & PREMIUM COMPONENTS
 * =============================================================================
 */

const SectionLabel = ({ text }) => (
  <motion.div 
    initial={{ opacity: 0, x: -10 }}
    whileInView={{ opacity: 1, x: 0 }}
    className="flex items-center gap-3 mb-6"
  >
    <div className="w-8 h-[1px] bg-blue-600" />
    <span className="text-[10px] font-black text-blue-600 uppercase tracking-[0.5em]">{text}</span>
  </motion.div>
);

const AnimatedNumber = ({ value }) => {
  const [display, setDisplay] = useState(0);
  const isInView = useInView({ once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const numericPart = value.replace(/\D/g, '');
      const end = parseInt(numericPart);
      if (isNaN(end)) return;
      
      const duration = 2000;
      const increment = end / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setDisplay(end);
          clearInterval(timer);
        } else {
          setDisplay(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return <span>{display.toLocaleString()}{value.replace(/[0-9,]/g, '')}</span>;
};

const MagneticButton = ({ children, primary = false, to }) => (
  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
    <Link 
      to={to} 
      className={`
        relative px-12 py-6 rounded-2xl font-black text-xs uppercase tracking-[0.2em] flex items-center gap-3 transition-all overflow-hidden group
        ${primary ? "bg-slate-950 text-white shadow-2xl shadow-blue-500/20" : "bg-white text-slate-950 border border-slate-200"}
      `}
    >
      <span className="relative z-10">{children}</span>
      <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
      {primary && (
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity" />
      )}
    </Link>
  </motion.div>
);

const IndicatorNode = ({ label, color = "blue" }) => (
  <div className="flex items-center gap-2">
    <div className={`w-2 h-2 rounded-full animate-pulse bg-${color}-500 shadow-[0_0_8px_rgba(37,99,235,0.5)]`} />
    <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">{label}</span>
  </div>
);

/** * =============================================================================
 * III. MAIN ARCHITECTURE: UDAARO SOVEREIGN HOME
 * =============================================================================
 */

export default function Home() {
  const [activeSimulation, setActiveSimulation] = useState(0);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll();
  
  // High-performance scroll orchestration
  const yShift = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const opacityFade = useTransform(scrollYProgress, [0.8, 1], [1, 0]);

  return (
    <div className="bg-[#fcfcfd] text-slate-950 selection:bg-blue-600 selection:text-white font-sans overflow-x-hidden">
      
      {/* 1. TOP PROTOCOL BAR (INDUSTRIAL NAVIGATION) */}
      <nav className="fixed top-0 left-0 w-full z-[100] px-6 md:px-10 py-6">
        <div className="max-w-[1800px] mx-auto flex justify-between items-center bg-white/40 backdrop-blur-2xl border border-white/40 rounded-[2.5rem] px-8 py-4 shadow-2xl shadow-slate-900/5">
          <div className="flex items-center gap-12">
            <Link to="/" className="flex items-center gap-4 group">
              <div className="w-11 h-11 bg-slate-950 rounded-2xl flex items-center justify-center text-white font-black italic shadow-2xl group-hover:rotate-90 transition-transform duration-500">U</div>
              <div className="flex flex-col">
                <h1 className="text-2xl font-black tracking-tighter uppercase leading-none italic">Udaaro</h1>
                <span className="text-[8px] font-black text-blue-600 tracking-[0.4em] uppercase mt-1">Sovereign_OS</span>
              </div>
            </Link>
            <div className="hidden xl:flex items-center gap-8">
               <div className="h-4 w-[1px] bg-slate-200" />
               <IndicatorNode label="Institutional_Grid_Active" color="emerald" />
               <IndicatorNode label="Alpha_Node_Mumbai" color="blue" />
            </div>
          </div>
          <div className="flex items-center gap-8">
            <div className="hidden lg:block text-right">
               <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest leading-none italic">Admission Protocol</p>
               <p className="text-[10px] font-black text-blue-600 uppercase tracking-widest mt-1 italic">Status: OPEN_CYCLE</p>
            </div>
            <Link to="/apply" className="px-6 py-3 bg-slate-950 text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-blue-600 transition-all shadow-xl shadow-blue-500/10">Initiate Admission</Link>
          </div>
        </div>
      </nav>

      {/* 2. HERO: THE STARTUP COMPANION ENGINE */}
      <section className="relative min-h-screen flex items-center pt-40 pb-20 px-8 lg:px-10 overflow-hidden">
        {/* Background Visual Engineering */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-20%] right-[-10%] w-[80vw] h-[80vw] bg-blue-50/60 rounded-full blur-[160px]" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[60vw] h-[60vw] bg-indigo-50/50 rounded-full blur-[120px]" />
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03]" />
        </div>

        <div className="max-w-[1800px] mx-auto w-full relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-20 xl:gap-32">
            <div className="lg:w-7/12">
              <motion.div 
                initial={{ opacity: 0, y: 30 }} 
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <SectionLabel text="The Future of Indian Venture" />
                <h1 className="text-7xl md:text-9xl font-black leading-[0.85] tracking-tighter mb-12 italic uppercase">
                  Raw Idea <br />
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500">
                    Sovereign Impact.
                  </span>
                </h1>
                <p className="text-2xl md:text-3xl text-slate-500 mb-16 leading-relaxed max-w-3xl font-medium">
                  Udaaro is the sovereign growth layer for Indian founders. We provide the <span className="text-slate-950 font-black italic">Structural Integrity</span> required to survive the execution gap and lead generational institutions.
                </p>
                <div className="flex flex-wrap gap-8">
                   <MagneticButton primary to="/apply">Submit Your Concept</MagneticButton>
                   <MagneticButton to="/investors">Join the Syndicate</MagneticButton>
                </div>
              </motion.div>

              {/* VITAL STATISTICS TRACKER */}
              <div className="mt-32 grid grid-cols-2 md:grid-cols-4 gap-12 border-t border-slate-100 pt-16">
                {STATS_VITAL.map((stat, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0 }} 
                    whileInView={{ opacity: 1 }} 
                    transition={{ delay: i * 0.1 }}
                  >
                    <div className="flex items-center gap-3 text-blue-600 mb-3">
                       {stat.icon}
                       <span className="text-[10px] font-black uppercase tracking-widest">{stat.label}</span>
                    </div>
                    <p className="text-5xl font-black tracking-tighter text-slate-950 italic leading-none mb-2">
                      <AnimatedNumber value={stat.value} />
                    </p>
                    <span className="text-[9px] font-bold text-emerald-500 uppercase tracking-widest bg-emerald-50 px-2 py-0.5 rounded-full">{stat.trend}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* THE VISUAL TERMINAL NODE (OS SIMULATION) */}
            <div className="lg:w-5/12 w-full relative">
              <motion.div 
                animate={{ y: [0, -25, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                className="p-1 bg-gradient-to-br from-slate-200 via-white to-indigo-100 rounded-[4.5rem] shadow-3xl"
              >
                <div className="bg-slate-950 rounded-[4.3rem] p-12 text-white min-h-[700px] relative overflow-hidden flex flex-col justify-between border border-white/5 shadow-2xl">
                   <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none rotate-12">
                      <Terminal size={350} />
                   </div>
                   
                   <div className="relative z-10">
                      <div className="flex justify-between items-start mb-16">
                         <div className="w-16 h-16 bg-blue-600 rounded-3xl flex items-center justify-center shadow-2xl shadow-blue-500/40 transform -rotate-6">
                            <Zap size={32} className="text-white" fill="white" />
                         </div>
                         <div className="text-right">
                            <p className="text-[10px] font-black text-blue-500 uppercase tracking-[0.5em] mb-1 leading-none">UDAARO_CORE_v2.9</p>
                            <div className="flex items-center gap-2 justify-end">
                               <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                               <p className="text-[9px] font-mono text-slate-500 uppercase tracking-widest italic">Node: STABLE</p>
                            </div>
                         </div>
                      </div>
                      
                      <h3 className="text-6xl font-black tracking-tighter leading-none italic mb-8 uppercase">Venture <br /> Intelligence.</h3>
                      <p className="text-slate-400 font-medium leading-relaxed mb-12 max-w-xs uppercase text-[10px] tracking-[0.2em]">
                        Asynchronous synchronization across 240+ global advisory nodes and institutional clusters.
                      </p>
                   </div>

                   <div className="space-y-8 relative z-10">
                      {ECOSYSTEM_TIERS.map((tier, idx) => (
                        <div key={idx} className="flex justify-between items-center group cursor-crosshair border-b border-white/5 pb-6">
                           <div className="flex items-center gap-5">
                              <div className="w-2 h-2 rounded-full bg-blue-500 group-hover:scale-150 transition-transform shadow-[0_0_10px_rgba(37,99,235,0.8)]" />
                              <div>
                                 <p className="font-black text-base uppercase tracking-widest leading-none italic">{tier.name}</p>
                                 <p className="text-[9px] text-slate-500 font-bold mt-2 uppercase tracking-widest">{tier.access}</p>
                              </div>
                           </div>
                           <span className="text-[9px] font-black border border-white/10 px-4 py-1.5 rounded-full text-slate-400 group-hover:text-blue-400 group-hover:border-blue-500/50 transition-all">{tier.status}</span>
                        </div>
                      ))}
                      
                      <div className="pt-6 flex items-center justify-between">
                         <div className="flex gap-3">
                            <div className="w-3 h-3 rounded-full bg-rose-500/50" />
                            <div className="w-3 h-3 rounded-full bg-amber-500/50" />
                            <div className="w-3 h-3 rounded-full bg-emerald-500/50" />
                         </div>
                         <p className="font-mono text-[10px] text-slate-600 font-bold">SYSTEM_UUID: 0X_AF82_ALPHA</p>
                      </div>
                   </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PROBLEM VECTORS: THE COST OF DEFAULT FAILURE (LOCALIZED) */}
      <section className="py-48 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-20 opacity-[0.03] rotate-12">
           <ShieldAlert size={500} />
        </div>
        <div className="container mx-auto px-10">
           <div className="grid lg:grid-cols-2 gap-32 items-center">
              <div>
                 <SectionLabel text="The Founders Mortality Rate" />
                 <h2 className="text-6xl md:text-8xl font-black text-slate-950 tracking-tighter mb-12 leading-[0.9] italic uppercase">
                    Why Startups Fail <br /> <span className="text-blue-600 underline decoration-blue-100 decoration-[12px] underline-offset-[16px]">In India.</span>
                 </h2>
                 <p className="text-2xl text-slate-500 font-medium leading-relaxed max-w-xl mb-16">
                    Generic mentorship and 'hype' lead to 90% failure rates. Udaaro replaces guesswork with <span className="text-slate-950 font-black">Industrial Engineering</span> and a direct bridge to institutional capital.
                 </p>
                 <div className="space-y-8">
                    {PROBLEM_VECTORS.map((pv, i) => (
                      <motion.div 
                        key={i}
                        whileHover={{ x: 15 }}
                        className="flex items-start gap-10 p-10 bg-white border border-slate-100 rounded-[3rem] shadow-sm group hover:shadow-2xl hover:border-blue-100 transition-all duration-700"
                      >
                         <div className="text-5xl font-black text-slate-100 group-hover:text-blue-100 italic transition-colors leading-none">{pv.id}</div>
                         <div>
                            <h4 className="font-black text-lg uppercase tracking-widest text-slate-950 mb-2 italic group-hover:text-blue-600 transition-colors">{pv.label}</h4>
                            <p className="text-slate-400 text-sm font-medium leading-relaxed">{pv.desc}</p>
                         </div>
                      </motion.div>
                    ))}
                 </div>
              </div>
              
              {/* INTERACTIVE COMPLIANCE STACK (SYSTEM INTERVENTION) */}
              <div className="bg-white rounded-[5rem] p-16 shadow-3xl relative overflow-hidden border border-slate-50">
                 <div className="absolute top-0 right-0 w-40 h-40 bg-blue-50 rounded-full blur-[80px] -translate-y-20 translate-x-20" />
                 <h3 className="text-3xl font-black italic uppercase tracking-tighter text-slate-950 mb-16 flex items-center gap-4">
                   <Cpu size={32} className="text-blue-600" /> System Intervention
                 </h3>
                 
                 <div className="space-y-16">
                    <FeatureNode 
                       icon={<Landmark size={24}/>} 
                       title="Sovereign Compliance"
                       color="blue"
                       desc="End-to-end MCA registration, GST node deployment, and DPIIT startup recognition protocols handled autonomously."
                    />
                    <FeatureNode 
                       icon={<Scale size={24}/>} 
                       title="IP Shielding"
                       color="indigo"
                       desc="High-fidelity patent protection and trademark anchoring for Indian Intellectual Property on a global ledger."
                    />
                    <FeatureNode 
                       icon={<IndianRupee size={24}/>} 
                       title="India-Stack Capital"
                       color="cyan"
                       desc="Seamless syndicate deployment using institutional UPI/Net-banking gateways for high-velocity funding cycles."
                    />
                 </div>

                 <div className="mt-20 pt-12 border-t border-slate-100 flex items-center justify-between">
                    <div className="flex flex-col">
                       <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest">Protocol Shield</span>
                       <span className="text-xs font-bold text-slate-900 mt-1 uppercase italic tracking-tighter">Verified by Alpha Council</span>
                    </div>
                    <ShieldCheck size={40} className="text-emerald-500 opacity-20" />
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* 4. SERVICES: THE THREE SOVEREIGN PILLARS */}
      <section className="py-48 bg-white relative">
        <div className="container mx-auto px-10">
          <div className="text-center max-w-5xl mx-auto mb-40">
            <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-blue-600 font-black tracking-[0.8em] uppercase text-[11px] mb-8 block italic">Venture Operating System</motion.span>
            <h2 className="text-6xl md:text-9xl font-black text-slate-950 tracking-tighter leading-[0.85] italic uppercase mb-12">Build Smarter, <br /> Grow Faster.</h2>
            <div className="h-2 w-32 bg-blue-600 mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {CORE_SERVICES.map((service, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -25 }}
                className="group p-12 bg-slate-50 rounded-[4.5rem] border border-slate-100 hover:bg-slate-950 transition-all duration-700 hover:shadow-[0_60px_120px_-30px_rgba(37,99,235,0.25)] relative"
              >
                <div className="absolute top-10 right-10 text-[10px] font-black text-slate-200 group-hover:text-blue-900 tracking-widest">{service.id}</div>
                <div className="w-24 h-24 bg-white rounded-[2.5rem] flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform mb-16 border border-slate-50">
                   {React.cloneElement(service.icon, { size: 40, className: "group-hover:text-blue-500 transition-colors" })}
                </div>
                <h4 className="text-[11px] font-black text-blue-600 uppercase tracking-[0.3em] mb-4 group-hover:text-blue-400 italic leading-none">{service.subtitle}</h4>
                <h3 className="text-4xl font-black text-slate-950 mb-10 tracking-tight group-hover:text-white leading-none uppercase italic">{service.title}</h3>
                <p className="text-lg text-slate-500 leading-relaxed font-medium mb-16 group-hover:text-slate-400">
                  {service.desc}
                </p>
                
                <div className="pt-12 border-t border-slate-200 group-hover:border-white/10">
                  <ul className="space-y-6">
                    {service.features.map((f, i) => (
                      <li key={i} className="flex items-center gap-5 text-[13px] font-bold text-slate-950 uppercase tracking-tighter group-hover:text-white transition-all italic">
                        <div className="w-2 h-2 rounded-full bg-blue-500 group-hover:bg-blue-400 group-hover:scale-125 transition-all" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-16 flex justify-between items-center">
                   <div className="px-6 py-2 bg-blue-100/50 rounded-full text-[10px] font-black text-blue-700 uppercase tracking-[0.2em] group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      {service.stats}
                   </div>
                   <ArrowUpRight size={24} className="text-slate-300 group-hover:text-blue-400 transform group-hover:rotate-45 transition-all duration-500" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. THE FOUNDER'S LOGIC: APURVA PRIYADARSHI */}
      <section className="py-56 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
           <div className="absolute top-[-15%] left-[-10%] w-[60vw] h-[60vw] bg-blue-700 rounded-full blur-[200px]" />
           <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-indigo-700 rounded-full blur-[180px]" />
        </div>
        
        <div className="container mx-auto px-10 relative z-10">
           <div className="grid lg:grid-cols-2 gap-32 items-center">
              <div className="relative">
                 <div className="aspect-[4/5] bg-white/5 rounded-[6rem] p-6 border border-white/10 backdrop-blur-3xl overflow-hidden group shadow-3xl">
                    <img 
                      src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=2070&auto=format&fit=crop" 
                      className="w-full h-full object-cover rounded-[5rem] group-hover:scale-105 transition-transform duration-1000 grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100"
                      alt="Udaaro Visionary Architecture"
                    />
                 </div>
                 <motion.div 
                    initial={{ scale: 0, rotate: -45 }}
                    whileInView={{ scale: 1, rotate: 5 }}
                    className="absolute -bottom-16 -right-12 p-14 bg-blue-600 rounded-[4rem] shadow-4xl max-w-md border-4 border-slate-950"
                  >
                    <Crown size={64} className="text-white mb-8" />
                    <p className="text-2xl font-bold italic mb-6 leading-tight">"Entrepreneurship in India is no longer about survival. It's about sovereign market dominance."</p>
                    <div className="h-1 w-16 bg-white/40 mb-6 rounded-full" />
                    <p className="text-xs font-black uppercase tracking-[0.5em] text-blue-100">{BRAND_IDENTITY.founder} — VISIONARY LEAD</p>
                 </motion.div>
              </div>

              <div>
                 <SectionLabel text="The Founder's Logic" />
                 <h2 className="text-6xl md:text-[9rem] font-black tracking-tighter leading-[0.8] mb-16 italic uppercase text-gradient-silver">
                    Built On <br /> Hard Integrity.
                 </h2>
                 <p className="text-2xl text-slate-400 font-medium leading-relaxed mb-20 max-w-xl">
                    Apurva Priyadarshi architected Udaaro to bypass the vanity metrics of traditional incubators. We operate on high-signal market intelligence and industrial-grade venture engineering.
                 </p>
                 
                 <div className="grid grid-cols-2 gap-16 border-t border-white/10 pt-20">
                    <div className="space-y-8 group cursor-default">
                       <div className="flex items-center gap-6 text-blue-500">
                          <Microscope size={32} className="group-hover:scale-110 transition-transform" />
                          <h4 className="font-black text-sm uppercase tracking-[0.3em]">Scientific Scaling</h4>
                       </div>
                       <p className="text-base text-slate-500 font-medium leading-relaxed">Optimization of capital velocity through algorithmic resource mapping across the India Stack.</p>
                    </div>
                    <div className="space-y-8 group cursor-default">
                       <div className="flex items-center gap-6 text-cyan-500">
                          <Network size={32} className="group-hover:scale-110 transition-transform" />
                          <h4 className="font-black text-sm uppercase tracking-[0.3em]">Sovereign Mesh</h4>
                       </div>
                       <p className="text-base text-slate-500 font-medium leading-relaxed">Direct entry to a cross-border syndicate of institutional backers, skipping the VC filtration layers.</p>
                    </div>
                 </div>

                 <div className="mt-24 flex items-center gap-12">
                    <div className="flex -space-x-5">
                       {[1,2,3,4,5].map(i => (
                         <motion.div 
                            key={i} 
                            whileHover={{ y: -10, zIndex: 10 }}
                            className="w-16 h-16 rounded-full border-4 border-slate-950 bg-slate-800 overflow-hidden ring-1 ring-white/10 shadow-3xl cursor-pointer"
                          >
                            <img src={`https://i.pravatar.cc/150?u=elite_udaaro_${i}`} alt="Vanguard Member" />
                         </motion.div>
                       ))}
                    </div>
                    <div>
                       <p className="text-lg font-black italic tracking-tight">Consensus Vetted by the Council</p>
                       <p className="text-[11px] text-slate-500 uppercase tracking-widest font-black mt-1">Accepting Top 1% of Incoming Nodes</p>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* 6. THE PROCESS HIERARCHY: ASCENSION WORKFLOW */}
      <section className="py-56 bg-white relative overflow-hidden">
        <div className="container mx-auto px-10">
          <div className="text-center mb-48">
             <SectionLabel text="The Process Hierarchy" />
             <h2 className="text-6xl md:text-[9rem] font-black text-slate-950 tracking-tighter italic uppercase leading-none mb-10">Pathway <br /> To Dominion.</h2>
             <p className="text-xl text-slate-500 font-medium uppercase tracking-[0.3em]">Surgical Execution from Phase 01 to Alpha Exit.</p>
          </div>

          <div className="relative">
             {/* THE TRACK ENGINE (SCROLL SYNCHRONIZED) */}
             <div className="hidden xl:block absolute top-[50%] left-0 w-full h-[2px] bg-slate-100 -translate-y-1/2 overflow-hidden z-0">
                <motion.div 
                   className="h-full bg-blue-600 shadow-[0_0_20px_rgba(37,99,235,0.6)]" 
                   style={{ scaleX: scrollYProgress }} 
                />
             </div>

             <div className="grid xl:grid-cols-4 gap-12 relative z-10">
                {MASTER_WORKFLOW.map((item, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.15, duration: 0.8 }}
                    whileHover={{ y: -15 }}
                    className="group bg-white border border-slate-100 p-12 rounded-[4rem] shadow-2xl hover:shadow-[0_80px_160px_-40px_rgba(0,0,0,0.1)] transition-all duration-700"
                  >
                     <div className="flex justify-between items-center mb-16">
                        <span className="text-6xl font-black italic text-slate-100 group-hover:text-blue-500 transition-all leading-none">{item.step}</span>
                        <div className="w-14 h-14 rounded-2xl bg-slate-50 group-hover:bg-blue-600 flex items-center justify-center transition-all shadow-inner group-hover:rotate-12">
                           <Workflow size={24} className="text-slate-300 group-hover:text-white" />
                        </div>
                     </div>
                     <h3 className="text-3xl font-black text-slate-950 mb-8 tracking-tight group-hover:italic transition-all leading-none uppercase italic">{item.title}</h3>
                     <p className="text-slate-500 text-base font-medium leading-relaxed mb-12">{item.desc}</p>
                     
                     <div className="pt-10 border-t border-slate-50 flex items-center gap-4">
                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                        <span className="text-[10px] font-mono text-slate-400 uppercase tracking-[0.3em] font-black">{item.node}</span>
                     </div>
                  </motion.div>
                ))}
             </div>
          </div>
        </div>
      </section>

      {/* 7. INTELLIGENCE MODULE: THE SYSTEM MONITOR */}
      <section className="py-56 bg-slate-950 rounded-[7rem] mx-6 lg:mx-10 my-48 overflow-hidden relative border border-white/5">
        <div className="absolute inset-0 z-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
        <div className="absolute top-0 right-0 w-[60vw] h-[60vw] bg-blue-600/20 rounded-full blur-[200px]" />

        <div className="container mx-auto px-10 relative z-10">
           <div className="grid lg:grid-cols-2 gap-40 items-center">
              <div>
                 <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="inline-flex items-center gap-3 px-6 py-2 bg-blue-600/10 border border-blue-600/30 rounded-full mb-12 backdrop-blur-xl">
                    <Activity size={14} className="text-blue-500" />
                    <span className="text-[10px] font-black text-blue-500 uppercase tracking-[0.4em]">Ecosystem Intelligence Hub</span>
                 </motion.div>
                 
                 <h2 className="text-7xl md:text-8xl font-black text-white leading-[0.85] tracking-tighter italic uppercase mb-16">
                    Scaling with <br /><span className="text-blue-500 underline decoration-blue-900/50 decoration-[16px] underline-offset-[20px]">Autonomous Intel.</span>
                 </h2>
                 <p className="text-2xl text-slate-400 font-medium leading-relaxed mb-20 max-w-xl">
                    By 2027, Udaaro will deploy the Alpha Decision Node—analyzing 14,000+ venture data points daily to secure your GTM velocity.
                 </p>
                 
                 <div className="grid grid-cols-2 gap-12">
                    <div className="p-10 bg-white/5 border border-white/10 rounded-[3.5rem] backdrop-blur-3xl group hover:bg-white/10 transition-all duration-500">
                       <Radio className="text-blue-500 mb-8 animate-pulse" size={32} />
                       <h4 className="font-black text-sm uppercase tracking-[0.3em] mb-4 text-white">Live Sentiment</h4>
                       <p className="text-xs text-slate-500 font-medium leading-relaxed">Tracking Indian startup ecosystem sentiment across Tier 1 and Tier 2 cities in real-time.</p>
                    </div>
                    <div className="p-10 bg-white/5 border border-white/10 rounded-[3.5rem] backdrop-blur-3xl group hover:bg-white/10 transition-all duration-500">
                       <TrendingUp className="text-cyan-500 mb-8" size={32} />
                       <h4 className="font-black text-sm uppercase tracking-[0.3em] mb-4 text-white">Velocity Index</h4>
                       <p className="text-xs text-slate-500 font-medium leading-relaxed">Predicting market resonance through structural integrity benchmarks and user density maps.</p>
                    </div>
                 </div>
              </div>

              {/* DATA VISUALIZATION DASHBOARD INTERFACE */}
              <div className="bg-slate-900/50 border border-white/10 rounded-[5rem] p-16 backdrop-blur-3xl relative shadow-5xl">
                 <div className="flex justify-between items-center mb-16">
                    <div>
                       <p className="text-[11px] font-black text-blue-500 uppercase tracking-[0.5em] mb-2 leading-none">System_Telemetry</p>
                       <h4 className="text-2xl font-bold italic tracking-tight text-white uppercase leading-none">Venture Pulse Monitor</h4>
                    </div>
                    <div className="px-5 py-2 bg-emerald-500/10 text-emerald-400 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] border border-emerald-500/20 flex items-center gap-3">
                       <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                       Node_Alpha_Synced
                    </div>
                 </div>

                 <div className="space-y-12">
                    <TelemetryBar label="India Batch Resilience" val={88} color="blue" />
                    <TelemetryBar label="Syndicate Liquidity" val={72} color="indigo" />
                    <TelemetryBar label="IP Security Score" val={94} color="cyan" />
                    <TelemetryBar label="Market Dominion Potential" val={65} color="emerald" />
                 </div>

                 <div className="mt-20 grid grid-cols-2 gap-10 border-t border-white/10 pt-16">
                    <div className="bg-white/5 p-8 rounded-3xl border border-white/5">
                       <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2 italic">Node Latency</p>
                       <p className="text-4xl font-black italic tracking-tighter text-blue-500">14ms</p>
                    </div>
                    <div className="bg-white/5 p-8 rounded-3xl border border-white/5">
                       <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2 italic">Ecosystem Uptime</p>
                       <p className="text-4xl font-black italic tracking-tighter text-emerald-500">99.9%</p>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* 8. TESTIMONIALS: THE VANGUARD VOICE */}
      <section className="py-56 bg-white relative">
         <div className="container mx-auto px-10">
            <div className="flex flex-col md:flex-row justify-between items-end mb-40 gap-12">
               <div className="max-w-3xl">
                  <SectionLabel text="Ecosystem Feedback" />
                  <h2 className="text-6xl md:text-8xl font-black text-slate-950 tracking-tighter leading-[0.9] italic uppercase">Voices of the <br /> Alpha Cycle.</h2>
               </div>
               <div className="text-slate-400 font-black text-xs uppercase tracking-[0.4em] mb-4">Verification: SECURE_PROTOCOL</div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-16">
               {[
                 { name: "Deepak R.", role: "Founder, Alpha Batch 01", text: "Udaaro engineered our business model from a concept into a GST-ready powerhouse in 14 days. Their syndicate access is unrivaled in the Indian market." },
                 { name: "Priya S.", role: "CEO, FinTech Vanguard", text: "Most incubators talk about growth. Udaaro builds the infrastructure for it. The structural validation we received saved us 6 months of guesswork." },
                 { name: "Vikram K.", role: "Founding Partner, Syndicate", text: "As an investor, Udaaro provides me with high-signal, vetted opportunities. The fidelity of their validation process is the institutional standard." }
               ].map((item, i) => (
                 <motion.div 
                    key={i}
                    whileHover={{ y: -15, scale: 1.02 }}
                    className="p-16 bg-slate-50 rounded-[5rem] border border-slate-100 hover:bg-white hover:shadow-4xl transition-all duration-700 group relative"
                 >
                    <div className="absolute top-10 right-10 opacity-10 group-hover:opacity-100 transition-opacity">
                       <QuoteIcon size={40} className="text-blue-600" />
                    </div>
                    <div className="flex gap-2 mb-10">
                       {[1,2,3,4,5].map(star => <StarIcon key={star} filled />)}
                    </div>
                    <p className="text-xl font-medium text-slate-700 leading-relaxed italic mb-16 group-hover:text-slate-950 transition-colors">
                       "{item.text}"
                    </p>
                    <div className="flex items-center gap-8 pt-12 border-t border-slate-200 group-hover:border-blue-100 transition-colors">
                       <div className="w-16 h-16 rounded-3xl overflow-hidden grayscale group-hover:grayscale-0 transition-all shadow-2xl">
                          <img src={`https://i.pravatar.cc/150?u=udaaro_voice_${i}`} alt="Founder Node" />
                       </div>
                       <div>
                          <h5 className="font-black text-slate-950 uppercase tracking-widest text-sm italic leading-none">{item.name}</h5>
                          <p className="text-[10px] text-blue-600 font-black mt-2 uppercase tracking-widest leading-none">{item.role}</p>
                       </div>
                    </div>
                 </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* 9. GLOBAL NETWORK MAP: THE SOVEREIGN GRID */}
      <section className="py-56 bg-slate-50 relative overflow-hidden">
         <div className="container mx-auto px-10 text-center relative z-10">
            <SectionLabel text="Institutional Grid Map" />
            <h2 className="text-6xl md:text-9xl font-black text-slate-950 leading-[0.8] tracking-tighter italic uppercase mb-12">Global <br /> Operational Grid.</h2>
            <p className="text-2xl text-slate-500 font-medium max-w-3xl mx-auto mb-32 leading-relaxed">
               Udaaro synchronizes visionaries with the most powerful syndicate of institutional capital nodes across Mumbai, London, Singapore, and Silicon Valley. 
            </p>
            
            <div className="relative h-[800px] bg-white rounded-[6rem] shadow-5xl border border-slate-100 flex items-center justify-center overflow-hidden group">
               <div className="absolute inset-0 opacity-[0.07] bg-[url('https://www.transparenttextures.com/patterns/world-map.png')] bg-center bg-no-repeat group-hover:scale-110 transition-transform duration-[10s]" />
               
               {/* Pulsing Strategic Hubs */}
               <MapMarker x="72%" y="58%" label="Mumbai_Hub" active />
               <MapMarker x="75%" y="62%" label="Bangalore_Node" />
               <MapMarker x="30%" y="42%" label="Palo_Alto_Syndicate" />
               <MapMarker x="82%" y="65%" label="Singapore_Gateway" />
               <MapMarker x="51%" y="35%" label="London_Advisory" />

               <div className="relative z-10 flex flex-col items-center">
                  <div className="relative mb-12">
                     <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="w-48 h-48 border-2 border-dashed border-blue-200 rounded-full" />
                     <Globe size={120} className="text-blue-100 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                  </div>
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    className="px-12 py-5 bg-slate-950 text-white rounded-2xl font-black uppercase text-[11px] tracking-[0.5em] shadow-4xl cursor-none"
                  >
                    Network Status: SYNCHRONIZED
                  </motion.div>
               </div>
            </div>
         </div>
      </section>

      {/* 10. SUCCESS DELTA: THE INSTITUTIONAL EDGE */}
      <section className="py-56 bg-white">
        <div className="container mx-auto px-10">
           <div className="flex flex-col lg:flex-row gap-32 items-end mb-40">
              <div className="lg:w-8/12">
                 <SectionLabel text="The Ascension Delta" />
                 <h2 className="text-6xl md:text-8xl font-black text-slate-950 tracking-tighter leading-[0.85] italic uppercase">Institutional <br /> Performance.</h2>
              </div>
              <div className="lg:w-4/12">
                 <p className="text-2xl text-slate-500 font-medium leading-relaxed mb-10 italic">
                    Udaaro-engineered ventures achieve market resonance 3.5x faster than generic startups.
                 </p>
                 <MagneticButton to="/syndicate">Full Performance Data</MagneticButton>
              </div>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              {[
                 { label: "Handshake Cycle", val: "14 Days", sub: "Concept to Validation", icon: <Zap/> },
                 { label: "Advisor Sync", val: "2:1 Ratio", sub: "Nodes Per Founder", icon: <Network/> },
                 { label: "Alpha Resilience", val: "94.8%", sub: "Survival Threshold", icon: <ShieldCheck/> },
                 { label: "IP Uplift", val: "+240%", sub: "Valuation Benchmark", icon: <TrendingUp/> }
              ].map((stat, i) => (
                <motion.div 
                  key={i} 
                  whileHover={{ y: -10 }}
                  className="p-14 bg-slate-50 rounded-[4rem] border border-slate-100 text-center group hover:bg-slate-950 transition-all duration-700 hover:shadow-4xl"
                >
                   <div className="text-blue-600 mb-8 flex justify-center group-hover:text-blue-400 group-hover:scale-110 transition-all">{stat.icon}</div>
                   <p className="text-[11px] font-black text-slate-400 uppercase tracking-[0.3em] mb-4 group-hover:text-slate-500">{stat.label}</p>
                   <p className="text-5xl font-black text-slate-950 tracking-tighter italic uppercase group-hover:text-white transition-colors">{stat.val}</p>
                   <p className="text-[10px] font-bold text-slate-400 uppercase mt-6 italic tracking-widest leading-none">{stat.sub}</p>
                </motion.div>
              ))}
           </div>
        </div>
      </section>

      {/* 11. CALL TO ACTION: THE FINAL CONVERSION */}
      <section className="py-48 bg-[#fdfdfe] text-center px-6">
         <div className="container mx-auto">
            <div className="max-w-7xl mx-auto">
               <motion.div 
                 initial={{ opacity: 0, scale: 0.95 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                 className="bg-slate-950 text-white border border-white/10 rounded-[7rem] p-20 md:p-40 relative overflow-hidden shadow-6xl"
               >
                  {/* High-Fidelity Glows */}
                  <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-blue-600/30 rounded-full blur-[180px] -translate-y-1/2 translate-x-1/2" />
                  <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-indigo-700/20 rounded-full blur-[160px] translate-y-1/2 -translate-x-1/2" />
                  
                  <motion.div 
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="relative z-10"
                  >
                    <Crown className="text-blue-500 mx-auto mb-16" size={100} />
                    <h2 className="text-6xl md:text-[10rem] font-black mb-16 tracking-[0.05em] leading-none italic uppercase text-gradient-silver">
                      Architect <br /> Your Legacy.
                    </h2>
                    <p className="text-2xl md:text-3xl text-slate-400 mb-24 max-w-4xl mx-auto font-medium leading-relaxed italic">
                      Admission is strictly selective. We prioritize builders with generational intent and sovereign market vision. Apply for Alpha Cycle 2026.
                    </p>
                    
                    <div className="flex flex-col md:flex-row justify-center items-center gap-12">
                       <Link to="/apply" className="px-20 py-10 bg-blue-600 rounded-full font-black text-sm uppercase tracking-[0.4em] shadow-5xl shadow-blue-500/40 hover:bg-white hover:text-slate-950 hover:scale-105 transition-all duration-500 active:scale-95">Initiate Application</Link>
                       <button className="px-16 py-10 bg-white/5 border border-white/10 rounded-full font-black text-sm uppercase tracking-[0.4em] hover:bg-white/10 hover:shadow-xl transition-all flex items-center justify-center gap-5 group">
                          Access Whitepaper <ChevronRight size={24} className="group-hover:translate-x-2 transition-transform" />
                       </button>
                    </div>

                    <div className="mt-40 pt-20 border-t border-white/10 grid grid-cols-3 gap-12">
                       <CTAMetric val="0.1%" label="Admission Rate" />
                       <CTAMetric val="600ms" label="Sync Latency" />
                       <CTAMetric val="2026-A" label="Current Alpha" />
                    </div>
                  </motion.div>
               </motion.div>
            </div>
         </div>
      </section>

      {/* 12. MASTER FOOTER: INSTITUTIONAL NODE */}
      <footer className="bg-slate-50 pt-56 pb-20 border-t border-slate-200 px-10">
        <div className="max-w-[1800px] mx-auto">
          <div className="grid lg:grid-cols-6 gap-24 mb-48">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-4 mb-12">
                <div className="w-14 h-14 bg-slate-950 rounded-2xl flex items-center justify-center text-white font-black italic shadow-3xl text-xl">U</div>
                <h3 className="text-4xl font-black text-slate-950 tracking-tighter uppercase italic leading-none">Udaaro</h3>
              </div>
              <p className="text-slate-400 text-lg font-medium leading-relaxed max-w-sm mb-16 uppercase text-xs tracking-[0.25em] italic opacity-80">
                The Sovereign Layer for Startup Innovation. <br /> Architected for high-fidelity founders and institutional syndicates in India.
              </p>
              <div className="flex gap-8">
                <SocialNode icon={<Globe size={20} />} />
                <SocialNode icon={<MessageSquare size={20} />} />
                <SocialNode icon={<LinkedinIcon size={20} />} />
                <SocialNode icon={<Target size={20} />} />
              </div>
            </div>
            
            <FooterCol title="Venture Operating System" links={["Idea Validation Engine", "Structural Resilience Mapping", "Ascension Strategy", "Institutional Network", "Syndicate Admission"]} />
            <FooterCol title="Foundational Nodes" links={["Mission Directive", "Founder's Blueprint", "Investment Thesis", "Media Terminals", "Strategic Careers"]} />
            <FooterCol title="Institutional Core" links={["Venture Charter", "Privacy Protocol", "Regulatory Compliance", "Infrastructure Status", "Internal Portal"]} />
          </div>

          <div className="pt-20 border-t border-slate-200 flex flex-col xl:flex-row justify-between items-center gap-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
               <div className="text-[11px] font-black text-slate-400 font-mono tracking-[0.4em]">
                 © {new Date().getFullYear()} UDAARO GLOBAL VENTURES. ARCHITECTED BY {BRAND_IDENTITY.founder.toUpperCase()}.
               </div>
               <div className="px-4 py-1.5 bg-slate-950 text-blue-500 rounded font-mono text-[10px] font-bold tracking-widest shadow-2xl">SECURE_SOCKET_STABLE</div>
            </div>
            <div className="flex flex-wrap justify-center gap-12">
               <FooterUtility text="Internal Node Login" />
               <FooterUtility text="Compliance Registry" />
               <FooterUtility text="Infrastructure Pulse: 100%" color="emerald" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

/** * =============================================================================
 * IV. ATOMIC UI UTILITIES & HELPER MODULES
 * =============================================================================
 */

const FeatureNode = ({ icon, title, desc, color }) => (
  <div className="flex gap-10 group">
    <div className={`w-16 h-16 rounded-[2rem] bg-slate-50 flex items-center justify-center text-${color}-600 shadow-inner group-hover:scale-110 group-hover:bg-white group-hover:shadow-2xl transition-all duration-500`}>
      {icon}
    </div>
    <div>
      <h5 className={`font-black text-sm uppercase tracking-[0.3em] mb-3 group-hover:text-${color}-600 transition-colors`}>{title}</h5>
      <p className="text-base text-slate-500 leading-relaxed font-medium group-hover:text-slate-900 transition-colors">{desc}</p>
    </div>
  </div>
);

const TelemetryBar = ({ label, val, color }) => {
  const isInView = useInView({ once: true });
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-end">
        <span className="text-[11px] font-black uppercase tracking-[0.4em] text-slate-400">{label}</span>
        <span className="font-mono text-xs text-white bg-white/5 px-3 py-1 rounded-lg">{val}%</span>
      </div>
      <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
        <motion.div 
          initial={{ width: 0 }}
          animate={isInView ? { width: `${val}%` } : {}}
          transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
          className={`h-full bg-${color}-600 shadow-[0_0_20px_rgba(37,99,235,0.5)]`}
        />
      </div>
    </div>
  );
};

const MapMarker = ({ x, y, label, active }) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0 }}
    whileInView={{ opacity: 1, scale: 1 }}
    className="absolute flex flex-col items-center gap-3"
    style={{ left: x, top: y }}
  >
    <div className={`w-5 h-5 ${active ? 'bg-blue-600 shadow-[0_0_20px_rgba(37,99,235,1)]' : 'bg-slate-300'} rounded-full animate-pulse`} />
    <div className="w-2.5 h-2.5 bg-blue-600 rounded-full absolute top-1.5" />
    <span className="px-4 py-1.5 bg-slate-950 text-white rounded-xl text-[9px] font-black uppercase tracking-widest shadow-5xl border border-white/10 backdrop-blur-3xl">{label}</span>
  </motion.div>
);

const FooterCol = ({ title, links }) => (
  <div className="lg:col-span-1">
    <h4 className="font-black text-slate-950 text-[11px] uppercase tracking-[0.4em] mb-12 border-b-2 border-blue-600 pb-4 inline-block italic">
      {title}
    </h4>
    <ul className="space-y-8">
      {links.map((link, j) => (
        <li key={j}>
          <a href="#" className="text-slate-400 hover:text-blue-600 font-bold text-sm transition-all flex items-center gap-4 group">
            <span className="w-1.5 h-1.5 rounded-full bg-slate-200 group-hover:bg-blue-600 group-hover:scale-150 transition-all" />
            {link}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const CTAMetric = ({ val, label }) => (
  <div className="text-center">
    <p className="text-5xl font-black tracking-tighter text-blue-500 italic mb-2 leading-none uppercase">{val}</p>
    <p className="text-[10px] text-slate-500 uppercase font-black tracking-[0.4em]">{label}</p>
  </div>
);

const FooterUtility = ({ text, color = "slate" }) => (
  <span className={`text-[10px] font-black text-${color}-400 hover:text-slate-950 cursor-pointer transition-colors border-b-2 border-transparent hover:border-slate-950 pb-2 uppercase tracking-[0.3em] italic`}>
    {text}
  </span>
);

const SocialNode = ({ icon }) => (
  <motion.div 
    whileHover={{ y: -5, scale: 1.1 }}
    className="w-14 h-14 bg-white border border-slate-200 rounded-[1.5rem] flex items-center justify-center text-slate-400 hover:text-blue-600 transition-all cursor-pointer shadow-xl hover:shadow-2xl"
  >
    {icon}
  </motion.div>
);

const StarIcon = ({ filled }) => (
  <Sparkles size={18} className={filled ? "text-blue-500 fill-blue-500 shadow-blue-200" : "text-slate-200"} />
);

const QuoteIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 2.5 1 4.066 2 5V21zm14 0c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 2.5 1 4.066 2 5V21z"/>
  </svg>
);

const LinkedinIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>
  </svg>
);