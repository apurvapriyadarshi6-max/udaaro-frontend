import React, { useState, useEffect, useRef, useMemo, useCallback } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, AnimatePresence, useInView, useSpring } from "framer-motion";
import { 
  CheckCircle, Rocket, ShieldCheck, Fingerprint, Layers, Crown, Sparkles, 
  ArrowUpRight, Award, Zap, Globe, MessageSquare, ChevronRight, Target, 
  BarChart3, Cpu, Workflow, SearchCheck, Gem, Compass, PieChart, Network,
  Lock, ShieldAlert, ZapOff, Activity, Terminal, Database, HardDrive, 
  UserCheck, Briefcase, Microscope, Lightbulb, TrendingUp, Scale, Radio,
  IndianRupee, Languages, Landmark, Map, Info, Shield, ShieldQuestion,
  FileCode, Binary, Command, Box, CpuIcon, CircuitBoard
} from "lucide-react";

/** * =============================================================================
 * I. SOVEREIGN CONFIGURATION (VERIFIED DATA ONLY)
 * Architected by Apurva Priyadarshi | Cycle: 2026-Alpha
 * =============================================================================
 */

const BRAND_IDENTITY = {
  founder: "Apurva Priyadarshi",
  tagline: "Building Generational Institutions through Structural Engineering",
  node: "UDAARO_MAIN_NODE",
  localization: "India Operations",
  phase: "Phase 1: Venture Logic Synthesis"
};

const PROTOCOL_STATS = [
  { label: "Engineering Nodes", value: "Active", trend: "Stable", icon: <Cpu size={14}/> },
  { label: "Logic Validation", value: "Verified", trend: "Handshake", icon: <CheckCircle size={14}/> },
  { label: "Alpha Network", value: "Sovereign", trend: "Encrypted", icon: <Lock size={14}/> },
  { label: "Market Gateway", value: "Global", trend: "Active", icon: <Globe size={14}/> },
];

const CORE_MODULES = [
  {
    id: "LOGIC_01",
    title: "Structural Engineering",
    subtitle: "Venture Architecture",
    desc: "Udaaro moves beyond generic business plans. We engineer the structural integrity of a venture, focusing on unit economic resilience and operational logic.",
    features: ["Logic Flow Audits", "Unit Economic Stress-Testing", "Compliance Anchoring"],
    icon: <CircuitBoard className="text-blue-500" />,
    status: "Handshake_Active"
  },
  {
    id: "COMPLY_02",
    title: "Institutional Stacks",
    subtitle: "India-Scale Compliance",
    desc: "Building for India requires precision. We automate the integration of MCA protocols, GST nodes, and DPIIT frameworks into your core workflow.",
    features: ["Automated Regulatory Mapping", "Sovereign IP Shielding", "Governance Stacks"],
    icon: <Landmark className="text-indigo-500" />,
    stats: "DPIIT_READY"
  },
  {
    id: "SCALE_03",
    title: "Ascension Protocols",
    subtitle: "Global Trajectory",
    desc: "A systematic approach to scaling. We design the narrative logic required to synchronize Indian innovation with international capital syndicates.",
    features: ["Cross-Border GTM Logic", "Institutional Network Sync", "Narrative Dominance"],
    icon: <Network className="text-cyan-500" />,
    stats: "ALPHA_LINK"
  }
];

const THEORY_PHASES = [
  {
    step: "01",
    title: "Concept Deconstruction",
    desc: "Breaking down the raw idea into its core logical components to identify fundamental market moats.",
    node: "LOGIC_SYNC"
  },
  {
    step: "02",
    title: "Vulnerability Mapping",
    desc: "Identifying structural failure points in revenue models before capital deployment to ensure survival.",
    node: "STRESS_AUDIT"
  },
  {
    step: "03",
    title: "Institutional Synthesis",
    desc: "Reconstructing the venture with institutional-grade workflows and sovereign governance layers.",
    node: "BLUEPRINT_OS"
  },
  {
    step: "04",
    title: "Market Handshake",
    desc: "Synchronizing the engineered venture with validated market demand and professional capital nodes.",
    node: "DEPLOY_ACTIVE"
  }
];

/** * =============================================================================
 * II. UI ATOMS (PREMIUM BUILDING BLOCKS)
 * =============================================================================
 */

const SectionTitle = ({ label, title, desc, align = "left" }) => (
  <div className={`mb-24 ${align === "center" ? "text-center mx-auto" : "text-left"}`}>
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="flex items-center gap-4 mb-6 justify-center lg:justify-start">
      <div className="h-[1px] w-8 bg-blue-600" />
      <span className="text-[10px] font-black text-blue-600 uppercase tracking-[0.6em]">{label}</span>
    </motion.div>
    <motion.h2 
      initial={{ opacity: 0, y: 20 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      className="text-5xl md:text-8xl font-black tracking-tighter italic uppercase text-slate-950 mb-8"
    >
      {title}
    </motion.h2>
    {desc && (
      <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-xl text-slate-500 max-w-2xl font-medium leading-relaxed italic">
        {desc}
      </motion.p>
    )}
  </div>
);

const TelemetryPill = ({ text, color = "blue" }) => (
  <div className={`px-4 py-1.5 bg-${color}-50 border border-${color}-100 rounded-full flex items-center gap-2`}>
    <div className={`w-1.5 h-1.5 rounded-full bg-${color}-500 animate-pulse`} />
    <span className={`text-[9px] font-black uppercase tracking-widest text-${color}-600`}>{text}</span>
  </div>
);

/** * =============================================================================
 * III. MAIN ARCHITECTURE
 * =============================================================================
 */

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const yShift = useTransform(scrollYProgress, [0, 1], [0, -400]);

  return (
    <div className="bg-[#fcfcfd] text-slate-950 selection:bg-blue-600 selection:text-white font-sans overflow-x-hidden">
      
      {/* 1. HERO: THE ENGINEERING CORE */}
      <section className="relative min-h-screen flex items-center pt-32 pb-20 px-6 lg:px-10 overflow-hidden">
        {/* Architectural Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-10%] right-[-10%] w-[80vw] h-[80vw] bg-blue-50/50 rounded-full blur-[140px]" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[60vw] h-[60vw] bg-indigo-50/40 rounded-full blur-[120px]" />
          <div className="absolute inset-0 bg-grid-institutional opacity-[0.05]" />
        </div>

        <div className="max-w-[1800px] mx-auto w-full relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="lg:w-7/12">
              <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
                <div className="inline-flex items-center gap-3 px-5 py-2 bg-slate-950 text-white rounded-2xl mb-10 shadow-2xl">
                   <Fingerprint size={14} className="text-blue-500 animate-pulse" />
                   <span className="text-[10px] font-black uppercase tracking-[0.4em] italic">Handshake Protocol: v2.9</span>
                </div>
                
                <h1 className="text-7xl md:text-[10rem] font-black leading-[0.85] tracking-tighter mb-12 italic uppercase text-gradient-silver">
                  Engineering <br />
                  <span className="text-blue-600">The Future.</span>
                </h1>
                
                <p className="text-2xl md:text-3xl text-slate-500 mb-16 leading-relaxed max-w-3xl font-medium italic">
                  Udaaro is a closed-loop system for sovereign builders. We provide the <span className="text-slate-950 font-black">Structural Logic</span> required to transform raw concepts into generational institutions.
                </p>

                <div className="flex flex-wrap gap-8">
                  <Link to="/apply" className="px-12 py-6 bg-slate-950 text-white rounded-2xl font-black text-[11px] uppercase tracking-[0.4em] shadow-6xl shadow-blue-900/20 hover:bg-blue-600 hover:-translate-y-1 transition-all duration-500 flex items-center gap-4 group">
                    Start Admission <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </Link>
                  <Link to="/investors" className="px-12 py-6 bg-white border border-slate-200 text-slate-950 rounded-2xl font-black text-[11px] uppercase tracking-[0.4em] hover:border-blue-600 hover:text-blue-600 transition-all duration-500">
                    Syndicate Portal
                  </Link>
                </div>
              </motion.div>

              <div className="mt-32 grid grid-cols-2 md:grid-cols-4 gap-10 border-t border-slate-100 pt-16">
                 {PROTOCOL_STATS.map((stat, i) => (
                   <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
                      <div className="flex items-center gap-3 text-blue-600 mb-2">
                         {stat.icon}
                         <span className="text-[10px] font-black uppercase tracking-widest">{stat.label}</span>
                      </div>
                      <p className="text-4xl font-black text-slate-950 italic uppercase leading-none">{stat.value}</p>
                      <p className="text-[9px] font-bold text-slate-400 uppercase mt-2 tracking-widest">{stat.trend}</p>
                   </motion.div>
                 ))}
              </div>
            </div>

            {/* THE VISUAL TERMINAL (PC VIEW ONLY DECOR) */}
            <div className="lg:w-5/12 w-full hidden lg:block relative">
               <motion.div 
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="p-1 bg-gradient-to-br from-slate-200 to-indigo-50 rounded-[4rem] shadow-7xl border border-white"
               >
                 <div className="bg-slate-950 rounded-[3.8rem] p-12 text-white min-h-[650px] relative overflow-hidden flex flex-col justify-between">
                    <div className="absolute top-0 right-0 p-12 opacity-5"><Binary size={300} /></div>
                    
                    <div className="relative z-10">
                       <div className="flex justify-between items-start mb-12">
                          <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center shadow-4xl shadow-blue-500/40">
                             <Zap size={28} fill="white" />
                          </div>
                          <div className="text-right">
                             <p className="text-[10px] font-black text-blue-500 uppercase tracking-[0.5em] mb-1">SYSTEM_PULSE_STABLE</p>
                             <p className="text-[10px] font-mono text-slate-600">ALPHA_NODE_SYNC: 100%</p>
                          </div>
                       </div>
                       <h3 className="text-5xl font-black tracking-tighter uppercase leading-none italic mb-8">Structural <br /> Resonance.</h3>
                       <p className="text-slate-500 font-medium uppercase text-[10px] tracking-[0.3em] leading-relaxed max-w-xs">
                          Executing Phase 1 protocols across the Indian startup ecosystem grid.
                       </p>
                    </div>

                    <div className="space-y-8 relative z-10">
                       <div className="p-6 bg-white/5 border border-white/10 rounded-[2rem] backdrop-blur-xl">
                          <div className="flex justify-between items-center mb-4">
                             <span className="text-[9px] font-black uppercase tracking-widest text-blue-400">Ledger Status</span>
                             <span className="text-[9px] font-mono text-emerald-500">SECURE</span>
                          </div>
                          <div className="flex gap-2">
                             {[1,2,3,4,5,6,7,8,9,10,11,12].map(i => (
                               <motion.div 
                                 key={i}
                                 animate={{ opacity: [0.2, 1, 0.2] }}
                                 transition={{ duration: 2, repeat: Infinity, delay: i * 0.1 }}
                                 className="h-8 w-1 bg-blue-600/40 rounded-full" 
                               />
                             ))}
                          </div>
                       </div>
                       <div className="flex items-center justify-between">
                          <div className="flex gap-2">
                             <div className="w-2 h-2 rounded-full bg-rose-500" />
                             <div className="w-2 h-2 rounded-full bg-amber-500" />
                             <div className="w-2 h-2 rounded-full bg-emerald-500" />
                          </div>
                          <p className="text-[10px] font-mono text-slate-700">0X_SYNC_COMPLETE</p>
                       </div>
                    </div>
                 </div>
               </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE THEORY: STARTING PHASE */}
      <section className="py-48 bg-white relative overflow-hidden">
         <div className="container mx-auto px-6">
            <SectionTitle 
              label="The Udaaro Thesis" 
              title="Structural Logic." 
              desc="We believe the majority of startup failure in India is not a lack of vision, but a lack of structural engineering. Udaaro exists to solve the execution gap."
            />

            <div className="grid lg:grid-cols-2 gap-24 items-center">
               <div className="relative">
                  <div className="aspect-square bg-slate-50 rounded-[5rem] p-10 border border-slate-100 flex items-center justify-center relative overflow-hidden group">
                     <motion.div 
                       animate={{ rotate: 360 }}
                       transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                       className="absolute inset-0 opacity-[0.03] pointer-events-none"
                     >
                        <CircuitBoard size={600} />
                     </motion.div>
                     <div className="relative z-10 text-center">
                        <div className="w-24 h-24 bg-blue-600 rounded-3xl mx-auto mb-10 flex items-center justify-center shadow-4xl shadow-blue-500/20">
                           <Microscope size={48} className="text-white" />
                        </div>
                        <h4 className="text-4xl font-black uppercase italic tracking-tighter text-slate-950 mb-6">Phase 1: <br /> Logic Synthesis</h4>
                        <p className="text-slate-500 font-medium max-w-sm mx-auto leading-relaxed">Deconstructing venture models into core mathematical and legal nodes to ensure institutional stability from Day 0.</p>
                     </div>
                  </div>
                  
                  {/* Floating Metric Atom */}
                  <motion.div 
                    animate={{ y: [0, -15, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="absolute -top-10 -right-10 p-8 bg-slate-950 text-white rounded-[3rem] shadow-6xl max-w-[200px] border border-white/10 hidden md:block"
                  >
                     <p className="text-4xl font-black italic tracking-tighter text-blue-500 leading-none">94%</p>
                     <p className="text-[10px] font-bold uppercase tracking-widest mt-2 leading-tight">Verification Success Cycle</p>
                  </motion.div>
               </div>

               <div className="space-y-16">
                  <TheoryNode 
                    icon={<FileCode />}
                    title="Venture Architecture"
                    text="Creating the blueprint of the business model. We focus on the 'How'—ensuring that every operational layer is built for scale."
                  />
                  <TheoryNode 
                    icon={<ShieldCheck />}
                    title="Sovereign Compliance"
                    text="Integrating high-fidelity legal and regulatory frameworks into the startup's DNA, preventing future structural pivots."
                  />
                  <TheoryNode 
                    icon={<Target />}
                    title="Execution Integrity"
                    text="Replacing speculative growth with surgical precision. Every milestone is a logical progression of the previous node."
                  />
               </div>
            </div>
         </div>
      </section>

      {/* 3. CORE MODULES: THE OPERATIONAL STACK */}
      <section className="py-48 bg-slate-50 relative">
        <div className="container mx-auto px-6">
           <div className="text-center mb-40">
              <SectionTitle 
                label="System Modules" 
                title="Building Smarter." 
                desc="A systematic approach to venture building. Selective admission for builders with generational intent."
                align="center"
              />
           </div>

           <div className="grid md:grid-cols-3 gap-10">
              {CORE_MODULES.map((module, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ y: -20 }}
                  className="group p-12 bg-white rounded-[4rem] border border-slate-100 hover:bg-slate-950 transition-all duration-700 hover:shadow-7xl hover:shadow-blue-900/20"
                >
                   <div className="w-20 h-20 bg-slate-50 rounded-[2rem] flex items-center justify-center mb-16 group-hover:bg-blue-600 transition-all duration-700 group-hover:scale-110">
                      {React.cloneElement(module.icon, { size: 36, className: "group-hover:text-white transition-all duration-700" })}
                   </div>
                   <h4 className="text-[11px] font-black text-blue-600 uppercase tracking-[0.4em] mb-4 group-hover:text-blue-400 italic">{module.subtitle}</h4>
                   <h3 className="text-3xl font-black text-slate-950 mb-8 tracking-tighter uppercase italic group-hover:text-white leading-none">{module.title}</h3>
                   <p className="text-lg text-slate-500 leading-relaxed font-medium mb-12 group-hover:text-slate-400">{module.desc}</p>
                   
                   <div className="pt-10 border-t border-slate-50 group-hover:border-white/10">
                      <ul className="space-y-5">
                         {module.features.map((f, j) => (
                           <li key={j} className="flex items-center gap-4 text-sm font-bold text-slate-950 uppercase tracking-tighter group-hover:text-white italic">
                              <div className="w-1.5 h-1.5 rounded-full bg-blue-600 group-hover:bg-blue-400" />
                              {f}
                           </li>
                         ))}
                      </ul>
                   </div>
                </motion.div>
              ))}
           </div>
        </div>
      </section>

      {/* 4. THE ROADMAP: ASCENSION WORKFLOW */}
      <section className="py-56 bg-white relative overflow-hidden">
         <div className="container mx-auto px-6">
            <div className="text-center mb-48">
               <SectionLabel text="Execution Grid" />
               <h2 className="text-6xl md:text-9xl font-black text-slate-950 tracking-tighter italic uppercase leading-[0.8] mb-12">Trajectory <br /> To Sovereignty.</h2>
               <p className="text-xl text-slate-400 font-bold uppercase tracking-[0.4em]">From Conceptualization to Institutional Exit.</p>
            </div>

            <div className="relative">
               {/* Progress Line */}
               <div className="hidden xl:block absolute top-[50%] left-0 w-full h-[1px] bg-slate-100 -translate-y-1/2 z-0" />
               
               <div className="grid xl:grid-cols-4 gap-10 relative z-10">
                  {THEORY_PHASES.map((phase, idx) => (
                    <motion.div 
                      key={idx}
                      whileHover={{ y: -15 }}
                      className="group bg-white border border-slate-100 p-12 rounded-[4rem] shadow-2xl hover:shadow-6xl transition-all duration-700"
                    >
                       <div className="flex justify-between items-center mb-16">
                          <span className="text-6xl font-black italic text-slate-100 group-hover:text-blue-600 transition-colors leading-none">{phase.step}</span>
                          <div className="w-12 h-12 rounded-xl bg-slate-50 group-hover:bg-blue-600 flex items-center justify-center transition-all group-hover:rotate-12 shadow-inner">
                             <Workflow size={24} className="text-slate-300 group-hover:text-white" />
                          </div>
                       </div>
                       <h3 className="text-2xl font-black text-slate-950 mb-6 tracking-tighter uppercase italic group-hover:text-blue-600 leading-none">{phase.title}</h3>
                       <p className="text-slate-500 text-base font-medium leading-relaxed mb-10 italic">"{phase.desc}"</p>
                       <div className="pt-8 border-t border-slate-50 flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                          <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest">{phase.node}</span>
                       </div>
                    </motion.div>
                  ))}
               </div>
            </div>
         </div>
      </section>

      {/* 5. CALL TO ACTION: ADMISSION NODE */}
      <section className="py-48 bg-[#fdfdfe] px-6 lg:px-0">
         <div className="container mx-auto">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="bg-slate-950 text-white rounded-[6rem] p-16 md:p-40 relative overflow-hidden shadow-7xl"
            >
               {/* Ambient Glows */}
               <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-blue-600/20 rounded-full blur-[180px] -translate-y-1/2 translate-x-1/2" />
               <div className="absolute bottom-0 left-0 w-[30vw] h-[30vw] bg-indigo-800/10 rounded-full blur-[140px] translate-y-1/2 -translate-x-1/2" />
               
               <div className="relative z-10 text-center max-w-4xl mx-auto">
                  <Crown size={80} className="text-blue-500 mx-auto mb-16 animate-bounce" />
                  <h2 className="text-6xl md:text-9xl font-black tracking-tighter leading-[0.85] mb-12 italic uppercase">Join the <br /> Vanguard.</h2>
                  <p className="text-2xl md:text-3xl text-slate-400 mb-20 leading-relaxed font-medium italic">
                    Admission is strictly subject to protocol verification. We are identifying founders who build with generational intent.
                  </p>
                  <div className="flex flex-col md:flex-row justify-center items-center gap-10">
                     <Link to="/apply" className="w-full md:w-auto px-16 py-8 bg-blue-600 rounded-full font-black text-[12px] uppercase tracking-[0.5em] shadow-5xl shadow-blue-500/40 hover:bg-white hover:text-slate-950 transition-all duration-500 scale-105 active:scale-95 italic">
                        Initiate Application
                     </Link>
                     <button className="w-full md:w-auto px-16 py-8 bg-white/5 border border-white/10 rounded-full font-black text-[12px] uppercase tracking-[0.5em] hover:bg-white/10 transition-all duration-500 italic">
                        Request Whitepaper
                     </button>
                  </div>

                  <div className="mt-40 grid grid-cols-3 gap-10 pt-20 border-t border-white/5">
                     <CTANode val="0.1%" label="Handshake Rate" />
                     <CTANode val="2026" label="Current Alpha" />
                     <CTANode val="100%" label="Node Sync" />
                  </div>
               </div>
            </motion.div>
         </div>
      </section>

      {/* 6. MASTER FOOTER: INSTITUTIONAL NODE */}
      <footer className="bg-slate-50 pt-56 pb-20 border-t border-slate-100 px-8 lg:px-12">
         <div className="max-w-[1800px] mx-auto">
            <div className="grid lg:grid-cols-6 gap-24 mb-48">
               <div className="lg:col-span-2">
                  <div className="flex items-center gap-4 mb-12">
                     <div className="w-14 h-14 bg-slate-950 rounded-2xl flex items-center justify-center text-white font-black italic shadow-4xl text-xl">U</div>
                     <h3 className="text-4xl font-black text-slate-950 tracking-tighter uppercase italic leading-none">Udaaro</h3>
                  </div>
                  <p className="text-slate-400 text-lg font-medium leading-relaxed max-w-sm mb-16 uppercase text-[11px] tracking-[0.3em] italic opacity-80 leading-relaxed">
                    The Sovereign Layer for Indian Innovation. <br /> Built for institutions, by institutions.
                  </p>
                  <div className="flex gap-8">
                     <SocialIcon icon={<Globe size={20}/>} />
                     <SocialIcon icon={<MessageSquare size={20}/>} />
                     <SocialIcon icon={<Linkedin size={20}/>} />
                     <SocialIcon icon={<Target size={20}/>} />
                  </div>
               </div>

               <FooterCol 
                 title="Ecosystem" 
                 links={["Vision Logic", "Admission Desk", "Syndicate Sync", "Advisory Node"]} 
                 paths={["/", "/apply", "/investors", "/mentors"]} 
               />
               <FooterCol 
                 title="Institutional" 
                 links={["Foundational Theory", "Executive Terminal", "Network Pulse", "Careers"]} 
                 paths={["/", "/admin-login", "/", "/"]}
               />
               <FooterCol 
                 title="Governance" 
                 links={["Charter Protocol", "Privacy Logic", "Compliances", "Node Status"]} 
                 paths={["/", "/", "/", "/"]}
               />
            </div>

            <div className="pt-20 border-t border-slate-200 flex flex-col xl:flex-row justify-between items-center gap-12">
               <div className="flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
                  <div className="text-[10px] font-black text-slate-400 font-mono tracking-[0.4em] uppercase">
                    © {new Date().getFullYear()} UDAARO GLOBAL VENTURES. ARCHITECTED BY APURVA PRIYADARSHI.
                  </div>
                  <div className="px-4 py-1.5 bg-slate-950 text-blue-500 rounded-lg font-mono text-[9px] font-black tracking-widest shadow-2xl uppercase">
                     Ledger_Status: STABLE
                  </div>
               </div>
               <div className="flex gap-12 flex-wrap justify-center">
                  <FooterUtility text="Internal_Node_Login" />
                  <FooterUtility text="Sovereign_Audit" />
                  <FooterUtility text="Uptime: 100%" color="emerald" />
               </div>
            </div>
         </div>
      </footer>
    </div>
  );
}

/** * =============================================================================
 * IV. ATOMIC UI UTILITIES
 * =============================================================================
 */

const TheoryNode = ({ icon, title, text }) => (
  <div className="flex gap-10 group">
    <div className="w-16 h-16 rounded-[2rem] bg-slate-50 flex items-center justify-center text-blue-600 shadow-inner group-hover:bg-blue-600 group-hover:text-white transition-all duration-700 group-hover:scale-110">
       {React.cloneElement(icon, { size: 28 })}
    </div>
    <div>
       <h4 className="text-xl font-black uppercase italic tracking-tighter text-slate-950 mb-3 group-hover:text-blue-600 transition-colors">{title}</h4>
       <p className="text-slate-500 font-medium leading-relaxed max-w-sm">{text}</p>
    </div>
  </div>
);

const CTANode = ({ val, label }) => (
  <div className="text-center">
    <p className="text-5xl font-black tracking-tighter text-blue-500 italic mb-2 uppercase">{val}</p>
    <p className="text-[10px] text-slate-500 uppercase font-black tracking-[0.4em]">{label}</p>
  </div>
);

const FooterCol = ({ title, links, paths }) => (
  <div className="lg:col-span-1">
    <h4 className="font-black text-slate-950 text-[11px] uppercase tracking-[0.4em] mb-12 border-b-2 border-blue-600 pb-4 inline-block italic italic">
      {title}
    </h4>
    <ul className="space-y-8">
      {links.map((link, j) => (
        <li key={j}>
          <Link to={paths[j]} className="text-slate-400 hover:text-blue-600 font-bold text-[13px] transition-all flex items-center gap-4 group uppercase tracking-widest italic">
            <div className="w-1.5 h-1.5 rounded-full bg-slate-200 group-hover:bg-blue-600 group-hover:scale-150 transition-all" />
            {link}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

const SocialIcon = ({ icon }) => (
  <div className="w-12 h-12 bg-white border border-slate-200 rounded-2xl flex items-center justify-center text-slate-400 hover:text-blue-600 hover:border-blue-600 hover:-translate-y-1 shadow-sm hover:shadow-xl transition-all cursor-pointer">
    {icon}
  </div>
);

const FooterUtility = ({ text, color = "slate" }) => (
  <span className={`text-[10px] font-black text-${color}-400 hover:text-slate-950 cursor-pointer transition-colors border-b-2 border-transparent hover:border-slate-950 pb-1 uppercase tracking-[0.4em] italic`}>
    {text}
  </span>
);

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

const SectionLabel = ({ text }) => (
  <motion.div initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} className="flex items-center gap-3 mb-6 justify-center lg:justify-start">
    <div className="w-8 h-[1px] bg-blue-600" />
    <span className="text-[10px] font-black text-blue-600 uppercase tracking-[0.6em]">{text}</span>
  </motion.div>
);

const StarIcon = ({ filled }) => (
  <Sparkles size={18} className={filled ? "text-blue-500 fill-blue-500 shadow-blue-200" : "text-slate-200"} />
);

const TelemetryBar = ({ label, val, color }) => {
  const isInView = useInView({ once: true });
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-end">
        <span className="text-[11px] font-black uppercase tracking-[0.4em] text-slate-400">{label}</span>
        <span className="font-mono text-[10px] text-white bg-white/5 px-3 py-1 rounded-lg italic">{val}%</span>
      </div>
      <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
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
        relative px-12 py-6 rounded-2xl font-black text-xs uppercase tracking-[0.4em] flex items-center gap-3 transition-all overflow-hidden group italic
        ${primary ? "bg-slate-950 text-white shadow-2xl shadow-blue-500/20" : "bg-white text-slate-950 border border-slate-200"}
      `}
    >
      <span className="relative z-10">{children}</span>
      <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
      {primary && (
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      )}
    </Link>
  </motion.div>
);