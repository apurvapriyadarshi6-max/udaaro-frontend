import React, { useState, useEffect, useRef, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, AnimatePresence, useInView, useSpring } from "framer-motion";
import { 
  CheckCircle, Rocket, ShieldCheck, Fingerprint, Layers, Crown, Sparkles, 
  ArrowUpRight, Award, Zap, Globe, MessageSquare, ChevronRight, Target, 
  BarChart3, Cpu, Workflow, SearchCheck, Gem, Compass, PieChart, Network,
  Lock, ShieldAlert, ZapOff, Activity, Terminal, Database, HardDrive, 
  UserCheck, Briefcase, Microscope, Lightbulb, TrendingUp, Scale, Radio
} from "lucide-react";

/** * =============================================================================
 * I. GLOBAL CONFIGURATION & MASTER DATA
 * Architected by Apurva Priyadarshi
 * =============================================================================
 */

const BRAND_IDENTITY = {
  founder: "Apurva Priyadarshi",
  tagline: "The Sovereign Layer for Institutional Venture Building",
  batch: "Alpha Cycle 2026",
  location: "Global Intelligence Hub",
  version: "v2.8.4 Stable"
};

const STATS_VITAL = [
  { label: "Vetted Founders", value: "850+", trend: "+12.4%", icon: <UserCheck size={14}/> },
  { label: "Institutional Capital", value: "$140M+", trend: "+24.1%", icon: <Briefcase size={14}/> },
  { label: "Mentorship Nodes", value: "240+", trend: "+8.2%", icon: <Network size={14}/> },
  { label: "Global Alpha Batches", value: "12", trend: "Stable", icon: <Database size={14}/> },
];

const CORE_SERVICES = [
  {
    id: "IV",
    title: "Idea Validation",
    subtitle: "Precision Filtering",
    desc: "We perform a 48-point demographic and psychological stress-test on your concept to determine its survival probability in a saturated market.",
    features: ["Proprietary Sentiment Analysis", "Micro-Targeting Feasibility", "Unit Economic Forecasting"],
    icon: <SearchCheck className="text-blue-500" />,
    stats: "92% Accuracy"
  },
  {
    id: "BE",
    title: "Business Engineering",
    subtitle: "Structural Resilience",
    desc: "We move beyond the pitch deck. We build the operational skeleton—engineering your supply chain, legal stack, and automated workflows.",
    features: ["Workflow Automation Maps", "Sovereign Compliance Stacks", "Margin Optimization"],
    icon: <Cpu className="text-indigo-500" />,
    stats: "Institutional Grade"
  },
  {
    id: "GA",
    title: "Global Ascension",
    subtitle: "Strategic Dominion",
    desc: "Market entry as a surgical operation. We architect brand narratives that bypass cultural noise to secure global institutional trust.",
    features: ["Cross-Border GTM Protocol", "Syndicate Matchmaking", "Narrative Dominance"],
    icon: <Globe className="text-cyan-500" />,
    stats: "Alpha Access"
  }
];

const MASTER_WORKFLOW = [
  {
    step: "01",
    title: "The Inbound Terminal",
    desc: "Submission of raw concept metadata for initial algorithmic vetting and sanity checks.",
    node: "INTAKE_HANDSHAKE"
  },
  {
    step: "02",
    title: "Deep Layer Analysis",
    desc: "Rigorous SWOT stress-testing and competitor vulnerability mapping by our strategy council.",
    node: "STRESS_VULNERABILITY"
  },
  {
    step: "03",
    title: "Strategy Synthesis",
    desc: "Development of the Udaaro Custom Blueprint—your 18-month tactical roadmap to sovereignty.",
    node: "BLUEPRINT_GENERATION"
  },
  {
    step: "04",
    title: "Institutional Scaling",
    desc: "Execution phase involving capital deployment, global GTM launch, and team synchronization.",
    node: "MARKET_DOMINANCE"
  }
];

const ECOSYSTEM_TIERS = [
  { name: "Alpha Vanguard", access: "Top 1%", status: "Selective" },
  { name: "Beta Node", access: "Growth Phase", status: "Active" },
  { name: "Institutional Syndicate", access: "Capital Layer", status: "Vetted" }
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
      const end = parseInt(value.replace(/\D/g, ''));
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

  return <span>{display}{value.replace(/[0-9]/g, '')}</span>;
};

const MagneticButton = ({ children, primary = false, to }) => (
  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
    <Link 
      to={to} 
      className={`
        relative px-12 py-6 rounded-2xl font-black text-xs uppercase tracking-[0.2em] flex items-center gap-3 transition-all overflow-hidden group
        ${primary ? "bg-slate-950 text-white shadow-2xl" : "bg-white text-slate-950 border border-slate-200"}
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

/** * =============================================================================
 * III. MAIN ARCHITECTURE
 * =============================================================================
 */

function Home() {
  const [activeSimulation, setActiveSimulation] = useState(0);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const yShift = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return (
    <div className="bg-[#fcfcfd] text-slate-950 selection:bg-blue-600 selection:text-white font-sans overflow-x-hidden">
      
      {/* 1. TOP STATUS BAR (INDUSTRIAL NAV) */}
      <nav className="fixed top-0 left-0 w-full z-[100] px-10 py-6">
        <div className="max-w-[1800px] mx-auto flex justify-between items-center bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl px-8 py-4 shadow-2xl shadow-slate-900/5">
          <div className="flex items-center gap-10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-slate-950 rounded-xl flex items-center justify-center text-white font-black italic shadow-xl">U</div>
              <h1 className="text-xl font-black tracking-tighter uppercase leading-none">Udaaro</h1>
            </div>
            <div className="hidden lg:flex items-center gap-6">
               <div className="h-4 w-[1px] bg-slate-200" />
               <Indicator label="Protocol_v2.8" color="blue" />
               <Indicator label="Sync_Node_Tokyo" color="emerald" />
            </div>
          </div>
          <div className="flex items-center gap-6">
            <Link to="/apply" className="text-[10px] font-black uppercase tracking-widest hover:text-blue-600 transition-colors">Vanguard_Admission</Link>
            <div className="w-10 h-10 rounded-full border-2 border-slate-100 p-1">
              <img src={`https://ui-avatars.com/api/?name=${BRAND_IDENTITY.founder}&background=0f172a&color=fff`} className="rounded-full" alt="Founder" />
            </div>
          </div>
        </div>
      </nav>

      {/* 2. HERO: THE STARTUP COMPANION ENGINE */}
      <section className="relative min-h-screen flex items-center pt-40 pb-20 px-10 overflow-hidden">
        {/* Background Engineering */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-20%] right-[-10%] w-[80vw] h-[80vw] bg-blue-50/50 rounded-full blur-[140px]" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[60vw] h-[60vw] bg-indigo-50/40 rounded-full blur-[120px]" />
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/graphy.png')] opacity-[0.05]" />
        </div>

        <div className="max-w-[1800px] mx-auto w-full relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="lg:w-7/12">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                <SectionLabel text="Institutional Startup Development" />
                <h1 className="text-7xl md:text-9xl font-black leading-[0.9] tracking-tighter mb-12 italic uppercase">
                  From Raw Concept <br />
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-400">
                    To Institutional Impact.
                  </span>
                </h1>
                <p className="text-2xl md:text-3xl text-slate-500 mb-16 leading-relaxed max-w-3xl font-medium">
                  Udaaro is the sovereign layer for founders. We provide the <span className="text-slate-950 font-black italic">Structural Integrity</span> required to survive the execution gap and lead the new economy.
                </p>
                <div className="flex flex-wrap gap-8">
                   <MagneticButton primary to="/apply">Start Admission Protocol</MagneticButton>
                   <MagneticButton to="/syndicate">Explore the Syndicate</MagneticButton>
                </div>
              </motion.div>

              <div className="mt-32 grid grid-cols-2 md:grid-cols-4 gap-10 border-t border-slate-100 pt-12">
                {STATS_VITAL.map((stat, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0 }} 
                    whileInView={{ opacity: 1 }} 
                    transition={{ delay: i * 0.1 }}
                  >
                    <div className="flex items-center gap-2 text-blue-600 mb-2">
                       {stat.icon}
                       <span className="text-[10px] font-black uppercase tracking-widest">{stat.label}</span>
                    </div>
                    <p className="text-4xl font-black tracking-tighter text-slate-950 italic">
                      <AnimatedNumber value={stat.value} />
                    </p>
                    <span className="text-[9px] font-bold text-emerald-500 uppercase tracking-widest">{stat.trend}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* THE VISUAL TERMINAL NODE */}
            <div className="lg:w-5/12 w-full relative">
              <motion.div 
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="p-1 bg-gradient-to-br from-slate-200 to-white rounded-[4rem] shadow-3xl"
              >
                <div className="bg-slate-950 rounded-[3.8rem] p-12 text-white min-h-[650px] relative overflow-hidden flex flex-col justify-between">
                   <div className="absolute top-0 right-0 p-10 opacity-5 pointer-events-none">
                      <Terminal size={300} />
                   </div>
                   
                   <div className="relative z-10">
                      <div className="flex justify-between items-start mb-12">
                         <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-blue-500/40">
                            <Zap size={32} className="text-white" fill="white" />
                         </div>
                         <div className="text-right">
                            <p className="text-[10px] font-black text-blue-400 uppercase tracking-[0.4em] mb-1 leading-none">UDAARO_CORE_OS</p>
                            <p className="text-[10px] font-mono text-slate-500">BOOT_SEQ: SUCCESS</p>
                         </div>
                      </div>
                      
                      <h3 className="text-5xl font-black tracking-tighter leading-none italic mb-6">Autonomous <br /> Venture Intel.</h3>
                      <p className="text-slate-400 font-medium leading-relaxed mb-10 max-w-xs uppercase text-xs tracking-widest">
                        Real-time synchronization across 240 advisory nodes and 12 alpha batches.
                      </p>
                   </div>

                   <div className="space-y-8 relative z-10">
                      {ECOSYSTEM_TIERS.map((tier, idx) => (
                        <div key={idx} className="flex justify-between items-center group cursor-crosshair">
                           <div className="flex items-center gap-4">
                              <div className="w-2 h-2 rounded-full bg-blue-500 group-hover:scale-150 transition-transform" />
                              <div>
                                 <p className="font-black text-sm uppercase tracking-widest leading-none">{tier.name}</p>
                                 <p className="text-[9px] text-slate-500 font-bold mt-1 uppercase">Clearance: {tier.access}</p>
                              </div>
                           </div>
                           <span className="text-[8px] font-black border border-white/20 px-3 py-1 rounded-full text-slate-500 group-hover:text-blue-400 transition-colors">{tier.status}</span>
                        </div>
                      ))}
                      
                      <div className="pt-8 border-t border-white/10 flex items-center justify-between">
                         <div className="flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-rose-500" />
                            <div className="w-3 h-3 rounded-full bg-amber-500" />
                            <div className="w-3 h-3 rounded-full bg-emerald-500" />
                         </div>
                         <p className="font-mono text-[9px] text-slate-600">SYST_LOG: 0X82F_SECURE</p>
                      </div>
                   </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PROBLEM VECTORS: THE COST OF ERROR */}
      <section className="py-40 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-20 opacity-[0.02]">
           <ShieldAlert size={400} />
        </div>
        <div className="container mx-auto px-10">
           <div className="grid lg:grid-cols-2 gap-24 items-center">
              <div>
                 <SectionLabel text="The Mortality Gap" />
                 <h2 className="text-6xl font-black text-slate-950 tracking-tighter mb-10 leading-none">
                    Why Founders Fail <br /> <span className="italic text-blue-600 underline decoration-blue-100 decoration-8 underline-offset-8">By Default.</span>
                 </h2>
                 <p className="text-xl text-slate-500 font-medium leading-relaxed max-w-xl mb-12">
                    Startups don't die from competition. They die from <span className="text-slate-950 font-black">Internal Fragility</span>. Without validation, structure, and elite guidance, failure is a statistical certainty.
                 </p>
                 <div className="space-y-6">
                    {PROBLEM_VECTORS.map((pv, i) => (
                      <motion.div 
                        key={i}
                        whileHover={{ x: 10 }}
                        className="flex items-start gap-6 p-8 bg-white border border-slate-100 rounded-3xl shadow-sm group hover:shadow-xl transition-all duration-500"
                      >
                         <div className="text-4xl font-black text-slate-100 group-hover:text-blue-100 italic transition-colors leading-none">{pv.id}</div>
                         <div>
                            <h4 className="font-black text-sm uppercase tracking-widest text-slate-950 mb-1">{pv.label}</h4>
                            <p className="text-slate-400 text-sm font-medium">{pv.desc}</p>
                         </div>
                      </motion.div>
                    ))}
                 </div>
              </div>
              
              {/* THE INFRASTRUCTURE MODULE */}
              <div className="bg-white rounded-[4rem] p-12 shadow-2xl shadow-blue-900/5 relative">
                 <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-600 rounded-full flex items-center justify-center shadow-2xl rotate-12">
                    <Award className="text-white" size={48} />
                 </div>
                 <h3 className="text-2xl font-black italic uppercase tracking-tighter text-slate-950 mb-10">System Intervention</h3>
                 <div className="space-y-12">
                    <div className="flex gap-8">
                       <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-blue-600 shadow-inner"><HardDrive size={24}/></div>
                       <div>
                          <h5 className="font-black text-xs uppercase tracking-widest mb-2">Venture Infrastructure</h5>
                          <p className="text-sm text-slate-500 leading-relaxed font-medium">Udaaro deploys a standardized operational stack including legal compliance, payroll, and automated tax nodes from Day 0.</p>
                       </div>
                    </div>
                    <div className="flex gap-8">
                       <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-indigo-600 shadow-inner"><Fingerprint size={24}/></div>
                       <div>
                          <h5 className="font-black text-xs uppercase tracking-widest mb-2">Identity Protocol</h5>
                          <p className="text-sm text-slate-500 leading-relaxed font-medium">Your Intellectual Property is mapped and shielded within a sovereign structure, ensuring long-term asset security.</p>
                       </div>
                    </div>
                    <div className="flex gap-8">
                       <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-cyan-600 shadow-inner"><Activity size={24}/></div>
                       <div>
                          <h5 className="font-black text-xs uppercase tracking-widest mb-2">Network Liquidity</h5>
                          <p className="text-sm text-slate-500 leading-relaxed font-medium">Direct access to the syndicate, bypassing the generic VC noise. High-fidelity capital for high-fidelity founders.</p>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* 4. CORE PROTOCOL: HOW WE ARCHITECT SUCCESS */}
      <section className="py-48 bg-white">
        <div className="container mx-auto px-10">
          <div className="text-center max-w-4xl mx-auto mb-32">
            <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-blue-600 font-black tracking-[0.6em] uppercase text-[10px] mb-6 block">The Operations Stack</motion.span>
            <h2 className="text-5xl md:text-8xl font-black text-slate-950 tracking-tighter leading-[0.9] italic uppercase">Building Smarter, <br /> Growing Faster.</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {CORE_SERVICES.map((service, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -20 }}
                className="group p-12 bg-slate-50 rounded-[4rem] border border-slate-100 hover:bg-slate-950 transition-all duration-700 hover:shadow-[0_50px_100px_-20px_rgba(37,99,235,0.2)]"
              >
                <div className="w-20 h-20 bg-white rounded-[2rem] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform mb-12">
                   {React.cloneElement(service.icon, { size: 36, className: "group-hover:text-blue-500 transition-colors" })}
                </div>
                <h4 className="text-[10px] font-black text-blue-600 uppercase tracking-widest mb-3 group-hover:text-blue-400">{service.subtitle}</h4>
                <h3 className="text-3xl font-black text-slate-950 mb-8 tracking-tight group-hover:text-white">{service.title}</h3>
                <p className="text-slate-500 leading-relaxed font-medium mb-12 group-hover:text-slate-400">
                  {service.desc}
                </p>
                
                <div className="pt-10 border-t border-slate-200 group-hover:border-white/10">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6">Service Capabilities</p>
                  <ul className="space-y-5">
                    {service.features.map((f, i) => (
                      <li key={i} className="flex items-center gap-4 text-sm font-bold text-slate-950 uppercase tracking-tighter group-hover:text-white transition-colors italic">
                        <CheckCircle size={14} className="text-blue-600 group-hover:text-blue-400" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-12 flex justify-between items-center">
                   <div className="px-4 py-1.5 bg-blue-50 rounded-full text-[9px] font-black text-blue-600 uppercase tracking-widest group-hover:bg-blue-600 group-hover:text-white">
                      {service.stats}
                   </div>
                   <ArrowUpRight size={20} className="text-slate-300 group-hover:text-blue-400 transform group-hover:rotate-45 transition-all" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. THE APURVA PRIYADARSHI STANDARD: PHILOSOPHY */}
      <section className="py-48 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
           <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-blue-600 rounded-full blur-[160px]" />
           <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-indigo-600 rounded-full blur-[140px]" />
        </div>
        
        <div className="container mx-auto px-10 relative z-10">
           <div className="grid lg:grid-cols-2 gap-24 items-center">
              <div className="relative">
                 <div className="aspect-[3/4] bg-white/5 rounded-[5rem] p-5 border border-white/10 backdrop-blur-3xl overflow-hidden group">
                    <img 
                      src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
                      className="w-full h-full object-cover rounded-[4rem] group-hover:scale-110 transition-transform duration-1000 grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100"
                      alt="Udaaro HQ"
                    />
                 </div>
                 <div className="absolute -bottom-10 -right-10 p-12 bg-blue-600 rounded-[3rem] shadow-3xl max-w-sm rotate-3">
                    <Crown size={48} className="text-white mb-6" />
                    <p className="text-xl font-bold italic mb-4">"We don't build features. We build generational systems of value."</p>
                    <div className="h-px w-12 bg-white/30 mb-4" />
                    <p className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-100">{BRAND_IDENTITY.founder} — FOUNDER</p>
                 </div>
              </div>

              <div>
                 <SectionLabel text="The Founder's Logic" />
                 <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-12 italic uppercase">
                    A Platform Built <br /> On Hard Integrity.
                 </h2>
                 <p className="text-xl text-slate-400 font-medium leading-relaxed mb-16">
                    Apurva Priyadarshi envisioned Udaaro as a sanctuary for builders who refuse to follow generic growth cycles. We operate on high-signal data and long-term institutional engineering.
                 </p>
                 
                 <div className="grid grid-cols-2 gap-12 border-t border-white/10 pt-16">
                    <div className="space-y-6">
                       <div className="flex items-center gap-4 text-blue-500">
                          <Microscope size={24} />
                          <h4 className="font-black text-xs uppercase tracking-widest">Scientific Growth</h4>
                       </div>
                       <p className="text-sm text-slate-500 font-medium leading-relaxed">Optimization of capital velocity through algorithmic resource allocation.</p>
                    </div>
                    <div className="space-y-6">
                       <div className="flex items-center gap-4 text-cyan-500">
                          <Network size={24} />
                          <h4 className="font-black text-xs uppercase tracking-widest">Global Mesh</h4>
                       </div>
                       <p className="text-sm text-slate-500 font-medium leading-relaxed">Direct entry to a cross-border syndicate of institutional backers and angels.</p>
                    </div>
                 </div>

                 <div className="mt-20 flex gap-8">
                    <div className="flex -space-x-4">
                       {[1,2,3,4,5].map(i => (
                         <div key={i} className="w-12 h-12 rounded-full border-4 border-slate-950 bg-slate-800 overflow-hidden ring-1 ring-white/10 shadow-2xl">
                            <img src={`https://i.pravatar.cc/150?u=premium${i}`} alt="Elite" />
                         </div>
                       ))}
                    </div>
                    <div>
                       <p className="text-sm font-black italic tracking-tight">Consensus Vetted by the Alpha Council</p>
                       <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Admitting 1% of Applications</p>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* 6. VENTURE ROADMAP SIMULATION: ASCENSION WORKFLOW */}
      <section className="py-48 bg-white relative overflow-hidden">
        <div className="container mx-auto px-10">
          <div className="text-center mb-40">
             <SectionLabel text="The Process Hierarchy" />
             <h2 className="text-5xl md:text-8xl font-black text-slate-950 tracking-tighter italic uppercase leading-none">Your Pathway <br /> To Dominion.</h2>
          </div>

          <div className="relative">
             {/* THE TRACK ENGINE */}
             <div className="hidden xl:block absolute top-[50%] left-0 w-full h-1 bg-slate-50 -translate-y-1/2 overflow-hidden z-0">
                <motion.div 
                   className="h-full bg-blue-600" 
                   style={{ width: scrollYProgress, scaleX: scrollYProgress }} 
                />
             </div>

             <div className="grid xl:grid-cols-4 gap-8 relative z-10">
                {MASTER_WORKFLOW.map((item, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    whileHover={{ scale: 1.03 }}
                    className="group bg-white border border-slate-100 p-10 rounded-[3rem] shadow-xl hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.05)] transition-all duration-500"
                  >
                     <div className="flex justify-between items-center mb-10">
                        <span className="text-4xl font-black italic text-slate-100 group-hover:text-blue-500 transition-colors leading-none">{item.step}</span>
                        <div className="w-10 h-10 rounded-xl bg-slate-50 group-hover:bg-blue-600 flex items-center justify-center transition-all">
                           <Workflow size={18} className="text-slate-300 group-hover:text-white" />
                        </div>
                     </div>
                     <h3 className="text-2xl font-black text-slate-950 mb-6 tracking-tight group-hover:italic transition-all">{item.title}</h3>
                     <p className="text-slate-500 text-sm font-medium leading-relaxed mb-8">{item.desc}</p>
                     
                     <div className="pt-8 border-t border-slate-50 flex items-center gap-4">
                        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="text-[9px] font-mono text-slate-400 uppercase tracking-widest">{item.node}</span>
                     </div>
                  </motion.div>
                ))}
             </div>
          </div>
        </div>
      </section>

      {/* 7. INTELLIGENCE MODULE: DATA VISUALIZATION */}
      <section className="py-48 bg-slate-950 rounded-[6rem] mx-8 my-40 overflow-hidden relative">
        <div className="absolute inset-0 z-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
        <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-blue-600/30 rounded-full blur-[180px]" />

        <div className="container mx-auto px-10 relative z-10">
           <div className="grid lg:grid-cols-2 gap-32 items-center">
              <div>
                 <LuxuryBadge text="Venture Intelligence Node" />
                 <h2 className="text-6xl md:text-7xl font-black text-white leading-none tracking-tighter italic uppercase mb-12">
                    Scaling with <br /><span className="text-blue-500">Autonomous Logic.</span>
                 </h2>
                 <p className="text-xl text-slate-400 font-medium leading-relaxed mb-16">
                    By 2027, Udaaro will integrate the AI Decision Engine—a proprietary system that analyzes global market shifts in real-time, providing our founders with an unmatched strategic advantage.
                 </p>
                 
                 <div className="grid grid-cols-2 gap-10">
                    <div className="p-8 bg-white/5 border border-white/10 rounded-[2.5rem] backdrop-blur-xl">
                       <Radio className="text-blue-500 mb-6 animate-pulse" size={24} />
                       <h4 className="font-black text-xs uppercase tracking-widest mb-2">Live Sentiment</h4>
                       <p className="text-xs text-slate-500 font-medium">Tracking global venture sentiment across 12,000 data nodes daily.</p>
                    </div>
                    <div className="p-8 bg-white/5 border border-white/10 rounded-[2.5rem] backdrop-blur-xl">
                       <TrendingUp className="text-cyan-500 mb-6" size={24} />
                       <h4 className="font-black text-xs uppercase tracking-widest mb-2">Velocity Index</h4>
                       <p className="text-xs text-slate-500 font-medium">Calculating growth probability based on structural resilience scores.</p>
                    </div>
                 </div>
              </div>

              {/* DATA DASHBOARD VISUAL */}
              <div className="bg-white/5 border border-white/10 rounded-[4rem] p-12 backdrop-blur-2xl">
                 <div className="flex justify-between items-center mb-12">
                    <div>
                       <p className="text-[10px] font-black text-blue-500 uppercase tracking-[0.4em] mb-1">Ecosystem Monitor</p>
                       <h4 className="text-xl font-bold italic tracking-tight text-white">Venture Momentum Index</h4>
                    </div>
                    <div className="px-4 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-[9px] font-black uppercase tracking-widest border border-emerald-500/20">LIVE_HANDSHAKE</div>
                 </div>

                 <div className="space-y-10">
                    {[
                       { label: "Alpha Batch Growth", val: 84, color: "bg-blue-600" },
                       { label: "Syndicate Deployment", val: 62, color: "bg-indigo-600" },
                       { label: "Idea Survival Rate", val: 91, color: "bg-cyan-600" },
                       { label: "Market Resonance", val: 78, color: "bg-emerald-600" }
                    ].map((bar, i) => (
                      <div key={i}>
                         <div className="flex justify-between items-end mb-3">
                            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">{bar.label}</span>
                            <span className="font-mono text-xs text-white">{bar.val}%</span>
                         </div>
                         <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                            <motion.div 
                               initial={{ width: 0 }}
                               whileInView={{ width: `${bar.val}%` }}
                               transition={{ duration: 1.5, delay: i * 0.1 }}
                               className={`h-full ${bar.color} shadow-[0_0_15px_rgba(37,99,235,0.5)]`} 
                            />
                         </div>
                      </div>
                    ))}
                 </div>

                 <div className="mt-16 grid grid-cols-2 gap-6">
                    <div className="bg-white/5 p-6 rounded-3xl border border-white/5">
                       <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Node Latency</p>
                       <p className="text-2xl font-black italic tracking-tighter text-blue-500">14ms</p>
                    </div>
                    <div className="bg-white/5 p-6 rounded-3xl border border-white/5">
                       <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Uptime</p>
                       <p className="text-2xl font-black italic tracking-tighter text-emerald-500">99.9%</p>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* 8. TESTIMONIALS: THE VANGUARD VOICE */}
      <section className="py-40 bg-white">
         <div className="container mx-auto px-10">
            <SectionHeading 
               badge="Vanguard Testimonials"
               title="Voices of the Alpha Cycle."
               desc="Udaaro is more than a platform. It is an institution. Here is how our high-signal builders perceive the ecosystem."
               centered
            />
            
            <div className="grid md:grid-cols-3 gap-12">
               {[1,2,3].map(i => (
                 <motion.div 
                    key={i}
                    whileHover={{ y: -10 }}
                    className="p-12 bg-slate-50 rounded-[3.5rem] border border-slate-100 hover:bg-white hover:shadow-2xl transition-all duration-500 group"
                 >
                    <div className="flex gap-1 mb-8">
                       {[1,2,3,4,5].map(star => <StarIcon key={star} filled={star <= 5} />)}
                    </div>
                    <p className="text-lg font-medium text-slate-700 leading-relaxed italic mb-10 group-hover:text-slate-950 transition-colors">
                       "Udaaro bypasses the generic noise of the startup world. They engineered our unit economics from scratch, allowing us to focus entirely on product narrative and institutional scale."
                    </p>
                    <div className="flex items-center gap-6 pt-10 border-t border-slate-100">
                       <div className="w-14 h-14 rounded-2xl overflow-hidden grayscale group-hover:grayscale-0 transition-all shadow-xl">
                          <img src={`https://i.pravatar.cc/150?u=founder${i}`} alt="Founder" />
                       </div>
                       <div>
                          <h5 className="font-black text-slate-950 uppercase tracking-widest text-xs leading-none">Founder {i}</h5>
                          <p className="text-[10px] text-blue-600 font-black mt-1 uppercase tracking-widest">Alpha Cycle Startup</p>
                       </div>
                    </div>
                 </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* 9. GLOBAL NETWORK MAP (ILLUSTRATIVE SECTION) */}
      <section className="py-48 bg-slate-50 relative overflow-hidden">
         <div className="container mx-auto px-10 text-center relative z-10">
            <SectionLabel text="Global Operational Grid" />
            <h2 className="text-6xl md:text-8xl font-black text-slate-950 leading-[0.9] tracking-tighter italic uppercase mb-10">Institutional <br /> Connectivity.</h2>
            <p className="text-xl text-slate-500 font-medium max-w-2xl mx-auto mb-20 leading-relaxed">
               Udaaro connects visionaries to the most powerful syndicate of capital nodes across India, the US, and Southeast Asia. 
            </p>
            
            {/* ILLUSTRATIVE MAP NODE */}
            <div className="relative h-[600px] bg-white rounded-[5rem] shadow-2xl border border-slate-100 flex items-center justify-center overflow-hidden">
               <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/world-map.png')] bg-center bg-no-repeat" />
               
               {/* Pulsing City Nodes */}
               <MapNode x="30%" y="40%" label="Silicon Valley" />
               <MapNode x="70%" y="55%" label="Mumbai Hub" />
               <MapNode x="80%" y="65%" label="Singapore Node" />
               <MapNode x="50%" y="30%" label="London Advisory" />

               <div className="relative z-10 flex flex-col items-center">
                  <Globe size={120} className="text-blue-100 animate-spin-slow" />
                  <div className="mt-10 px-8 py-4 bg-slate-950 text-white rounded-2xl font-black uppercase text-[10px] tracking-[0.4em] shadow-2xl">Network Handshake: Active</div>
               </div>
            </div>
         </div>
      </section>

      {/* 10. REVENUE & SUCCESS MATRIX (TRUST MODULE) */}
      <section className="py-48 bg-white">
        <div className="container mx-auto px-10">
           <div className="flex flex-col lg:flex-row gap-24 items-end mb-32">
              <div className="lg:w-7/12">
                 <SectionLabel text="The Growth Delta" />
                 <h2 className="text-6xl md:text-7xl font-black text-slate-950 tracking-tighter leading-none italic uppercase">Institutional <br /> Value Generation.</h2>
              </div>
              <div className="lg:w-5/12">
                 <p className="text-xl text-slate-500 font-medium leading-relaxed mb-8">
                    Udaaro startups outperform generic incubators by a factor of 3.5x in the first 12 months.
                 </p>
                 <MagneticButton to="/syndicate">View Performance Data</MagneticButton>
              </div>
           </div>

           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                 { label: "Deployment Cycle", val: "14 Days", sub: "Concept to Vetting" },
                 { label: "Mentor Engagement", val: "1:1 Sync", sub: "Institutional Pulse" },
                 { label: "Survival Rate", val: "94.2%", sub: "Alpha Batches" },
                 { label: "IP Valuation", val: "+210%", sub: "Average Uplift" }
              ].map((stat, i) => (
                <div key={i} className="p-10 bg-slate-50 rounded-[3rem] border border-slate-100 text-center group hover:bg-slate-950 transition-all duration-500">
                   <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4 group-hover:text-blue-500 transition-colors">{stat.label}</p>
                   <p className="text-4xl font-black text-slate-950 tracking-tighter italic uppercase group-hover:text-white transition-colors">{stat.val}</p>
                   <p className="text-[9px] font-bold text-slate-500 uppercase mt-4 italic tracking-widest">{stat.sub}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* 11. CALL TO ACTION: FINAL CONVERSION */}
      <section className="py-48 bg-[#fdfdfe] text-center">
         <div className="container mx-auto px-10">
            <div className="max-w-6xl mx-auto">
               <motion.div 
                 initial={{ opacity: 0, scale: 0.95 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 className="bg-slate-950 text-white border border-white/5 rounded-[6rem] p-32 relative overflow-hidden shadow-3xl"
               >
                  <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/30 rounded-full blur-[140px]" />
                  <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-600/20 rounded-full blur-[120px]" />
                  
                  <Crown className="text-blue-500 mx-auto mb-12 animate-bounce" size={80} />
                  <h2 className="text-6xl md:text-9xl font-black mb-12 tracking-tighter leading-none italic uppercase">
                    Build Your <br /> Institutional <br /> Legacy.
                  </h2>
                  <p className="text-2xl text-slate-400 mb-20 max-w-3xl mx-auto font-medium leading-relaxed">
                    Udaaro is now admitting high-signal founders for Cycle Alpha 2026. Admission is strictly subject to council verification.
                  </p>
                  
                  <div className="flex flex-col md:flex-row justify-center gap-10">
                     <Link to="/apply" className="px-16 py-8 bg-blue-600 rounded-full font-black text-sm uppercase tracking-widest shadow-2xl shadow-blue-500/30 hover:bg-white hover:text-slate-950 transition-all">Submit Application Protocol</Link>
                     <button className="px-16 py-8 bg-white/5 border border-white/10 rounded-full font-black text-sm uppercase tracking-widest hover:bg-white/10 transition-all flex items-center justify-center gap-4">
                        Request Whitepaper <ChevronRight size={20} />
                     </button>
                  </div>

                  <div className="mt-32 pt-16 border-t border-white/5 grid grid-cols-3 gap-10">
                     <div>
                        <p className="text-4xl font-black tracking-tighter text-blue-500">01%</p>
                        <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest mt-2">Selection Tier</p>
                     </div>
                     <div>
                        <p className="text-4xl font-black tracking-tighter">0.6s</p>
                        <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest mt-2">Sync Latency</p>
                     </div>
                     <div>
                        <p className="text-4xl font-black tracking-tighter text-cyan-500">2.6k</p>
                        <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest mt-2">Active Founders</p>
                     </div>
                  </div>
               </motion.div>
            </div>
         </div>
      </section>

      {/* 12. LUXURY FOOTER ARCHITECTURE */}
      <footer className="bg-slate-50 pt-48 pb-16 border-t border-slate-100">
        <div className="container mx-auto px-10">
          <div className="grid lg:grid-cols-5 gap-24 mb-48">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-10">
                <div className="w-12 h-12 bg-slate-950 rounded-2xl flex items-center justify-center text-white font-black italic shadow-2xl">U</div>
                <h3 className="text-4xl font-black text-slate-950 tracking-tighter uppercase italic">Udaaro</h3>
              </div>
              <p className="text-slate-500 text-lg font-medium leading-relaxed max-w-sm mb-12 uppercase text-xs tracking-widest opacity-60">
                The Sovereign Layer for Startup Innovation. <br /> Built for institutions, by institutions.
              </p>
              <div className="flex gap-6">
                <div className="w-14 h-14 bg-white border border-slate-200 rounded-2xl flex items-center justify-center hover:text-blue-600 transition-all cursor-pointer shadow-lg hover:shadow-xl hover:-translate-y-1"><Globe size={24} /></div>
                <div className="w-14 h-14 bg-white border border-slate-200 rounded-2xl flex items-center justify-center hover:text-blue-600 transition-all cursor-pointer shadow-lg hover:shadow-xl hover:-translate-y-1"><MessageSquare size={24} /></div>
                <div className="w-14 h-14 bg-white border border-slate-200 rounded-2xl flex items-center justify-center hover:text-blue-600 transition-all cursor-pointer shadow-lg hover:shadow-xl hover:-translate-y-1"><LinkedinIcon size={24} /></div>
              </div>
            </div>
            
            {[
              { title: "Sovereign Ecosystem", links: ["Idea Validation Engine", "Structural Engineering", "Ascension Roadmap", "Institutional Network", "Syndicate Protocol"] },
              { title: "Foundational Nodes", links: ["Mission & Philosophy", "Apurva's Blueprint", "Investment Thesis", "Media Terminals", "Strategic Careers"] },
              { title: "Institutional Core", links: ["Venture Charter", "Privacy Protocol", "Regulatory Compliance", "Infrastructure Status", "Internal System"] }
            ].map((col, i) => (
              <div key={i} className="lg:col-span-1">
                <h4 className="font-black text-slate-950 text-[11px] uppercase tracking-[0.4em] mb-12 border-b-2 border-blue-600 pb-3 inline-block italic">
                  {col.title}
                </h4>
                <ul className="space-y-8">
                  {col.links.map((link, j) => (
                    <li key={j}>
                      <a href="#" className="text-slate-400 hover:text-blue-600 font-bold text-sm transition-all flex items-center gap-3 group">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-200 group-hover:bg-blue-600 transition-colors" />
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="pt-16 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-10">
            <div className="flex items-center gap-6">
               <div className="text-[10px] text-slate-400 font-black uppercase tracking-[0.5em]">
                 © {new Date().getFullYear()} Udaaro Ventures Global. Architected by {BRAND_IDENTITY.founder}.
               </div>
               <div className="px-3 py-1 bg-slate-950 text-white rounded font-mono text-[9px]">SECURE_SOCKET_ALPHA</div>
            </div>
            <div className="flex gap-12">
               <span className="text-[10px] text-slate-400 font-black uppercase tracking-widest cursor-pointer hover:text-slate-950 transition-colors border-b border-transparent hover:border-slate-950 pb-1">Internal Terminal</span>
               <span className="text-[10px] text-slate-400 font-black uppercase tracking-widest cursor-pointer hover:text-slate-950 transition-colors border-b border-transparent hover:border-slate-950 pb-1">Master Compliance</span>
               <span className="text-[10px] text-slate-400 font-black uppercase tracking-widest cursor-pointer hover:text-slate-950 transition-colors border-b border-transparent hover:border-slate-950 pb-1">Node Status: 100%</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

/** * =============================================================================
 * IV. ATOMIC UI HELPERS
 * =============================================================================
 */

const Indicator = ({ label, color }) => (
   <div className="flex items-center gap-2">
      <div className={`w-2 h-2 rounded-full animate-pulse bg-${color}-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]`} />
      <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">{label}</span>
   </div>
);

const MapNode = ({ x, y, label }) => (
   <motion.div 
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      className="absolute flex flex-col items-center gap-2"
      style={{ left: x, top: y }}
   >
      <div className="w-4 h-4 bg-blue-600 rounded-full animate-ping" />
      <div className="w-2 h-2 bg-blue-600 rounded-full absolute top-1" />
      <span className="px-3 py-1 bg-slate-950 text-white rounded-lg text-[8px] font-black uppercase tracking-widest shadow-2xl">{label}</span>
   </motion.div>
);

const StarIcon = ({ filled }) => (
   <Sparkles size={16} className={filled ? "text-blue-500 fill-blue-500" : "text-slate-200"} />
);

const LinkedinIcon = (props) => (
   <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>
   </svg>
);

export default Home;