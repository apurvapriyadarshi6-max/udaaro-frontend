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
  FileCode, Binary, Command, Box, CpuIcon, CircuitBoard, BookOpen, 
  FileText, Users, Globe2, Server, Key, Eye, Share2, ClipboardCheck
} from "lucide-react";

/** * =============================================================================
 * I. STARTUP CORE DEFINITION & PROTOCOL CONFIGURATION
 * Logic by: Apurva Priyadarshi | Cycle: 2026-Alpha (Prototype Validation)
 * Status: Under Development / Founding Cohort Onboarding
 * =============================================================================
 */

const BRAND_IDENTITY = {
  founder: "Apurva Priyadarshi",
  tagline: "Where Founders Build Sovereignty",
  mission: "From Vision to Institution",
  status: "Alpha Phase | Prototype Stage",
  version: "v3.1.0 Build Alpha"
};

const SYSTEM_TELEMETRY = [
  { label: "Venture OS", value: "Active", sub: "Execution Infra", icon: <Cpu size={14}/> },
  { label: "Alpha State", value: "Validating", sub: "Platform Build", icon: <Activity size={14}/> },
  { label: "Handshake", value: "Selective", sub: "Manual Vetting", icon: <Fingerprint size={14}/> },
  { label: "Grid Pulse", value: "Stable", sub: "India Regional", icon: <Network size={14}/> },
];

const ECOSYSTEM_STACK = [
  {
    id: "FOUNDER_NODE",
    title: "Builders",
    desc: "Early-stage founders selected through highly selective admission for structural alignment.",
    icon: <Users className="text-blue-500" />,
    path: "/apply"
  },
  {
    id: "SYNDICATE_NODE",
    title: "Syndicate",
    desc: "Initial angel network and strategic backers focused on radical transparency and growth.",
    icon: <IndianRupee className="text-indigo-500" />,
    path: "/investors"
  },
  {
    id: "ADVISORY_NODE",
    title: "Advisory",
    desc: "Operators and domain specialists providing structured guidance through the Venture OS.",
    icon: <ShieldCheck className="text-cyan-500" />,
    path: "/mentors"
  }
];

const OPERATING_ROADMAP = [
  {
    phase: "I",
    title: "Curated Admission",
    desc: "Application-based entry evaluating idea strength, founder capability, and long-term potential.",
    node: "INTAKE_HANDSHAKE"
  },
  {
    phase: "II",
    title: "Strategic Synthesis",
    desc: "Aligning founders with guidance, capital, and the execution skeleton of Udaaro.",
    node: "LOGIC_SYNTHESIS"
  },
  {
    phase: "III",
    title: "Global Ascension",
    desc: "Deploying growth frameworks for sustainable, independent, and sovereign scaling.",
    node: "MARKET_DOMINANCE"
  }
];

const MARKET_VERTICES = [
  { label: "Deep Tech", code: "DT_LOGIC", icon: <Binary /> },
  { label: "Artificial Intel", code: "AI_NODE", icon: <CpuIcon /> },
  { label: "Fintech", code: "FT_SYNC", icon: <Landmark /> },
  { label: "Digital Infra", code: "DI_GRID", icon: <HardDrive /> }
];

/** * =============================================================================
 * II. UI ATOMS: HIGH-FIDELITY COMPONENTS
 * =============================================================================
 */

const SectionBadge = ({ text }) => (
  <motion.div 
    initial={{ opacity: 0, x: -10 }}
    whileInView={{ opacity: 1, x: 0 }}
    className="flex items-center gap-4 mb-8"
  >
    <div className="h-[1.5px] w-12 bg-blue-600 shadow-[0_0_12px_rgba(37,99,235,0.6)]" />
    <span className="text-[11px] font-black text-blue-600 uppercase tracking-[0.6em] italic">{text}</span>
  </motion.div>
);

const NavNode = ({ label, to, icon }) => (
  <Link to={to} className="group relative py-2 flex items-center gap-3">
    {icon && <span className="text-slate-400 group-hover:text-blue-600 transition-colors">{icon}</span>}
    <span className="text-[11px] font-black uppercase tracking-[0.4em] text-slate-500 group-hover:text-slate-950 transition-colors italic">{label}</span>
    <div className="absolute -bottom-1 left-0 w-full h-[2px] bg-blue-600 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 shadow-[0_0_8px_blue]" />
  </Link>
);

const MagneticConversion = ({ children, primary = false, to }) => (
  <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
    <Link 
      to={to} 
      className={`
        relative px-14 py-7 rounded-[1.8rem] font-black text-[12px] uppercase tracking-[0.4em] flex items-center gap-4 transition-all overflow-hidden group italic
        ${primary ? "bg-slate-950 text-white shadow-6xl shadow-blue-500/20" : "bg-white text-slate-950 border-2 border-slate-100"}
      `}
    >
      <span className="relative z-10">{children}</span>
      <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-500" />
      {primary && <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />}
    </Link>
  </motion.div>
);

/** * =============================================================================
 * III. MAIN ARCHITECTURE: STARTUP HOME TERMINAL
 * =============================================================================
 */

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const yShift = useTransform(scrollYProgress, [0, 1], [0, -350]);

  return (
    <div className="bg-[#fcfcfd] text-slate-950 selection:bg-blue-600 selection:text-white font-sans overflow-x-hidden">
      
      {/* 1. MASTER COMMAND HEADER */}
      <nav className="fixed top-0 left-0 w-full z-[1000] px-6 lg:px-12 py-8">
        <div className="max-w-[1800px] mx-auto flex justify-between items-center bg-white/40 backdrop-blur-3xl border border-white/40 rounded-[2.5rem] px-10 py-5 shadow-3xl shadow-slate-950/5">
          <div className="flex items-center gap-16">
            <Link to="/" className="flex items-center gap-5 group">
              <motion.div whileHover={{ rotate: 90 }} className="w-12 h-12 bg-slate-950 rounded-2xl flex items-center justify-center text-white font-black italic shadow-4xl group-hover:bg-blue-600 transition-all duration-700 border border-white/10">U</motion.div>
              <div className="flex flex-col">
                <h1 className="text-3xl font-black tracking-tighter uppercase leading-none italic">Udaaro</h1>
                <span className="text-[9px] font-black text-blue-600 tracking-[0.5em] uppercase mt-1.5 italic">Sovereign_OS</span>
              </div>
            </Link>
            
            <div className="hidden xl:flex items-center gap-12">
               <NavNode to="/about" label="Identity" />
               <NavNode to="/investors" label="Syndicate" />
               <NavNode to="/mentors" label="Advisory" />
               <NavNode to="/blog" label="Log_Files" icon={<BookOpen size={14}/>} />
            </div>
          </div>

          <div className="flex items-center gap-10">
            <div className="hidden lg:flex items-center gap-4 bg-slate-50 px-6 py-2.5 rounded-full border border-slate-100 shadow-inner">
               <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
               <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest italic">Node: Tokyo_Alpha</span>
            </div>
            <Link to="/apply" className="px-10 py-4 bg-slate-950 text-white rounded-2xl text-[11px] font-black uppercase tracking-[0.4em] hover:bg-blue-600 transition-all shadow-6xl shadow-blue-500/10 italic">Admission_Desk</Link>
          </div>
        </div>
      </nav>

      {/* 2. HERO: VENTURE OS INITIALIZATION */}
      <section className="relative min-h-screen flex items-center pt-48 pb-24 px-8 lg:px-12 overflow-hidden">
        {/* Background Visual Layering */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-20%] right-[-10%] w-[80vw] h-[80vw] bg-blue-50/60 rounded-full blur-[180px]" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[60vw] h-[60vw] bg-indigo-50/40 rounded-full blur-[140px]" />
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03]" />
        </div>

        <div className="max-w-[1800px] mx-auto w-full relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-24 xl:gap-40">
            <div className="lg:w-7/12">
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                <SectionBadge text="Next-Generation Venture OS" />
                <h1 className="text-7xl md:text-[11rem] font-black leading-[0.8] tracking-[-0.03em] mb-16 italic uppercase text-gradient-institutional">
                  Engineering <br />
                  <span className="text-blue-600">The Future.</span>
                </h1>
                <p className="text-2xl md:text-4xl text-slate-500 mb-20 leading-relaxed max-w-4xl font-medium italic">
                  Udaaro is a structured venture-building system designed for Indian founders. We provide the <span className="text-slate-950 font-black italic underline decoration-blue-200 decoration-[12px] underline-offset-8">Execution Infrastructure</span> required to build generational institutions.
                </p>
                <div className="flex flex-wrap gap-10">
                   <MagneticConversion primary to="/apply">Submit Application</MagneticConversion>
                   <MagneticConversion to="/about">System Philosophy</MagneticConversion>
                </div>
              </motion.div>

              {/* LIVE PROTOCOL TELEMETRY */}
              <div className="mt-40 grid grid-cols-2 md:grid-cols-4 gap-12 border-t border-slate-100 pt-20">
                {SYSTEM_TELEMETRY.map((stat, i) => (
                  <motion.div key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: i * 0.1 }}>
                    <div className="flex items-center gap-3 text-blue-600 mb-4">
                       {stat.icon}
                       <span className="text-[11px] font-black uppercase tracking-[0.4em] italic">{stat.label}</span>
                    </div>
                    <p className="text-5xl font-black tracking-tighter text-slate-950 italic leading-none mb-3 uppercase italic">
                      {stat.value}
                    </p>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] italic">{stat.sub}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* THE VISUAL TERMINAL NODE (PC ONLY) */}
            <div className="lg:w-5/12 w-full relative hidden lg:block">
              <motion.div animate={{ y: [0, -25, 0] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }} className="p-1 bg-gradient-to-br from-slate-200 via-white to-blue-50 rounded-[5rem] shadow-7xl">
                <div className="bg-slate-950 rounded-[4.8rem] p-16 text-white min-h-[750px] relative overflow-hidden flex flex-col justify-between border border-white/5 shadow-2xl">
                   <div className="absolute top-0 right-0 p-16 opacity-[0.03] pointer-events-none rotate-12 scale-150"><Terminal size={400} /></div>
                   
                   <div className="relative z-10">
                      <div className="flex justify-between items-start mb-24">
                         <div className="w-16 h-16 bg-blue-600 rounded-3xl flex items-center justify-center shadow-4xl shadow-blue-500/40 transform -rotate-12">
                            <Zap size={32} className="text-white" fill="white" />
                         </div>
                         <div className="text-right">
                            <p className="text-[11px] font-black text-blue-500 uppercase tracking-[0.6em] mb-2 leading-none italic">Protocol_v3.1.0_Alpha</p>
                            <div className="flex items-center gap-3 justify-end opacity-60">
                               <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                               <p className="text-[10px] font-mono text-slate-400 uppercase tracking-widest italic leading-none">System_State: ACTIVE</p>
                            </div>
                         </div>
                      </div>
                      
                      <h3 className="text-7xl font-black tracking-tighter leading-none italic mb-10 uppercase text-gradient-silver">Sovereign <br /> Intelligence.</h3>
                      <p className="text-slate-400 font-medium leading-relaxed mb-16 max-w-xs uppercase text-[11px] tracking-[0.4em] italic">
                        Highly selective founder admission grid in progress for Batch 2026.
                      </p>
                   </div>

                   <div className="space-y-12 relative z-10">
                      {["INTAKE_VETTING", "SYNDICATE_SYNC", "EXECUTION_SKEL"].map((label, idx) => (
                        <div key={idx} className="flex justify-between items-center group cursor-crosshair border-b border-white/5 pb-8">
                           <div className="flex items-center gap-6">
                              <div className="w-2.5 h-2.5 rounded-full bg-blue-500 group-hover:scale-150 transition-transform shadow-[0_0_15px_blue]" />
                              <p className="font-black text-lg uppercase tracking-widest leading-none italic text-slate-100">{label}</p>
                           </div>
                           <span className="text-[9px] font-black border border-white/10 px-4 py-1.5 rounded-full text-slate-600 group-hover:text-blue-400 group-hover:border-blue-500/50 transition-all uppercase italic">Grid_Active</span>
                        </div>
                      ))}
                   </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. TRANSPARENCY: ALPHA DISCLOSURE (VERIFIED) */}
      <section className="py-56 bg-slate-50 relative overflow-hidden border-y border-slate-100">
        <div className="container mx-auto px-10">
           <div className="max-w-6xl mx-auto text-center">
              <SectionBadge text="Platform Integrity Report" />
              <h2 className="text-6xl md:text-9xl font-black text-slate-950 tracking-tighter mb-14 italic uppercase leading-none">
                 Institutional <br /> <span className="text-blue-600 italic">Transparency.</span>
              </h2>
              <div className="p-16 bg-white border border-blue-100 rounded-[5rem] shadow-7xl relative overflow-hidden group">
                 <div className="absolute top-0 right-0 p-12 opacity-5"><ShieldAlert size={140} className="text-blue-600" /></div>
                 <p className="text-2xl md:text-4xl text-slate-600 font-medium italic leading-relaxed relative z-10 max-w-5xl mx-auto">
                   "Udaaro Sovereign is currently in its <span className="text-slate-950 font-black">Alpha Phase</span>. We are validating our platform prototypes and onboarding our initial network. All metrics displayed are conceptual benchmarks as we build towards our 2026 operational targets."
                 </p>
                 <div className="mt-16 flex flex-wrap justify-center gap-12">
                    <StatusNode text="State: Prototype" />
                    <StatusNode text="Handshake: Selective" />
                    <StatusNode text="Data: Under Validation" />
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* 4. ECOSYSTEM STRUCTURE: VERIFIED ROLES */}
      <section className="py-64 bg-white relative">
        <div className="container mx-auto px-10">
           <div className="flex flex-col lg:flex-row items-end justify-between mb-48 gap-16">
              <div className="max-w-4xl">
                 <SectionBadge text="Institutional Architecture" />
                 <h2 className="text-7xl md:text-[10rem] font-black text-slate-950 tracking-tighter italic uppercase leading-[0.8] mb-8">Ecosystem <br /> Stack.</h2>
              </div>
              <p className="text-2xl text-slate-500 font-medium max-w-sm italic opacity-80 pb-6 leading-relaxed">
                 Udaaro aligns founders, capital, and mentorship through a closed-loop system of execution.
              </p>
           </div>

           <div className="grid lg:grid-cols-3 gap-16 relative z-10">
              {ECOSYSTEM_STACK.map((node, idx) => (
                <Link to={node.path} key={idx}>
                  <motion.div whileHover={{ y: -25 }} className="group bg-slate-50 p-14 rounded-[5rem] border border-slate-100 hover:bg-slate-950 transition-all duration-1000 hover:shadow-7xl shadow-blue-900/20 relative overflow-hidden h-full">
                     <div className="absolute top-10 right-10 opacity-10 text-[10px] font-black text-slate-400 group-hover:text-blue-600 tracking-widest">{node.id}</div>
                     <div className="w-20 h-20 rounded-[2.5rem] bg-white group-hover:bg-blue-600 flex items-center justify-center transition-all shadow-inner border border-slate-50 mb-20 group-hover:rotate-12">
                        {React.cloneElement(node.icon, { size: 36, className: "group-hover:text-white transition-all duration-500" })}
                     </div>
                     <h3 className="text-4xl font-black text-slate-950 mb-8 tracking-tighter uppercase italic group-hover:text-white leading-none">{node.title}</h3>
                     <p className="text-xl text-slate-500 font-medium leading-relaxed mb-16 group-hover:text-slate-400 italic">"{node.desc}"</p>
                     <div className="pt-10 border-t border-slate-200 group-hover:border-white/10 flex items-center justify-between">
                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-600">Access Protocol</span>
                        <ArrowUpRight size={20} className="text-slate-300 group-hover:text-blue-600 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                     </div>
                  </motion.div>
                </Link>
              ))}
           </div>
        </div>
      </section>

      {/* 5. VENTURE EVOLUTION: THE 3-STAGE HANDSHAKE */}
      <section className="py-64 bg-slate-50 relative overflow-hidden border-y border-slate-200">
        <div className="container mx-auto px-10">
           <SectionTitle 
             label="The Roadmap to Sovereignty" 
             title="Operating Model." 
             desc="A systematic approach to venture building. We focus on execution infrastructure and structured scaling."
             align="center"
           />
           
           <div className="relative mt-40">
              <div className="hidden xl:block absolute top-[50%] left-0 w-full h-[1px] bg-blue-100 -translate-y-1/2" />
              <div className="grid xl:grid-cols-3 gap-12 relative z-10">
                 {OPERATING_ROADMAP.map((item, idx) => (
                   <motion.div key={idx} whileHover={{ y: -15 }} className="bg-white p-14 rounded-[5.5rem] shadow-4xl border border-slate-100 group hover:border-blue-600 transition-all duration-700">
                      <div className="flex justify-between items-center mb-24">
                         <span className="text-8xl font-black italic text-slate-50 group-hover:text-blue-600/20 transition-all leading-none">{item.phase}</span>
                         <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 transition-all shadow-inner"><Workflow size={24} className="text-slate-300 group-hover:text-white" /></div>
                      </div>
                      <h4 className="text-3xl font-black uppercase italic tracking-tighter text-slate-950 mb-6 group-hover:text-blue-600 leading-none">{item.title}</h4>
                      <p className="text-lg text-slate-500 font-medium leading-relaxed italic mb-14">"{item.desc}"</p>
                      <div className="pt-10 border-t border-slate-50 flex items-center gap-4">
                         <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                         <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest font-black">{item.node}</span>
                      </div>
                   </motion.div>
                 ))}
              </div>
           </div>
        </div>
      </section>

      {/* 6. CALL TO ACTION: VANGUARD HANDSHAKE */}
      <section className="py-64 bg-[#fdfdfe] text-center px-10">
         <div className="max-w-7xl mx-auto">
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} className="bg-slate-950 text-white rounded-[8rem] p-32 md:p-56 relative overflow-hidden shadow-8xl border border-white/5">
               <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-blue-600/20 rounded-full blur-[200px] -translate-y-1/2 translate-x-1/2" />
               <div className="relative z-10">
                  <Crown size={120} className="text-blue-500 mx-auto mb-16 animate-pulse" />
                  <h2 className="text-7xl md:text-[12rem] font-black tracking-tighter italic uppercase text-gradient-silver leading-[0.8] mb-16">Architect <br /> Sovereignty.</h2>
                  <p className="text-2xl md:text-5xl text-slate-400 font-medium leading-relaxed max-w-5xl mx-auto italic mb-32 opacity-80">
                     Udaaro Sovereign enables high-potential founders to build scalable, long-term companies through structured guidance and strategic alignment.
                  </p>
                  <div className="flex flex-col md:flex-row justify-center items-center gap-14">
                     <MagneticConversion primary to="/apply">Initiate Admission</MagneticConversion>
                     <button className="px-16 py-8 bg-white/5 border-2 border-white/10 rounded-[2rem] font-black text-[12px] uppercase tracking-[0.5em] hover:bg-white/10 transition-all italic leading-none">Access Whitepaper</button>
                  </div>
                  
                  <div className="mt-48 grid grid-cols-3 gap-12 pt-24 border-t border-white/5 opacity-40 italic">
                     <CTANode value="Alpha" label="System_State" />
                     <CTANode value="2026" label="Cycle_Node" />
                     <CTANode value="Active" label="Protocol_Pulse" />
                  </div>
               </div>
            </motion.div>
         </div>
      </section>

      {/* 7. MASTER INSTITUTIONAL FOOTER (3,000 LINE STANDARD) */}
      <footer className="bg-[#f8f9fb] pt-72 pb-24 border-t border-slate-200 px-12 lg:px-24">
         <div className="max-w-[2000px] mx-auto">
            <div className="grid lg:grid-cols-6 gap-32 mb-64">
               
               {/* Brand Synthesis */}
               <div className="lg:col-span-2">
                  <div className="flex items-center gap-5 mb-16 group cursor-pointer">
                     <div className="w-16 h-16 bg-slate-950 rounded-[2.2rem] flex items-center justify-center text-white font-black italic shadow-5xl text-2xl border-2 border-white group-hover:bg-blue-600 transition-all duration-700">U</div>
                     <h3 className="text-6xl font-black text-slate-950 tracking-tighter uppercase italic leading-none">Udaaro</h3>
                  </div>
                  <p className="text-slate-400 text-2xl font-medium leading-relaxed max-w-sm mb-24 uppercase text-[12px] tracking-[0.3em] italic opacity-80 leading-loose">
                     The Sovereign Venture Operating System. <br /> Engineered for Indian Innovation Clusters.
                  </p>
                  <div className="flex gap-10">
                     <SocialIcon icon={<Globe2 size={28}/>} label="GLOBAL" />
                     <SocialIcon icon={<MessageSquare size={28}/>} label="SYNC" />
                     <SocialIcon icon={<Linkedin size={28}/>} label="PULSE" />
                     <SocialIcon icon={<Share2 size={28}/>} label="NETWORK" />
                  </div>
               </div>

               {/* System Navigation Nodes */}
               <FooterCol title="The Ecosystem" links={[
                 { label: "Vanguard Intake", path: "/apply" },
                 { label: "Syndicate Portal", path: "/investors" },
                 { label: "Advisory Node", path: "/mentors" },
                 { label: "Alpha Roadmap", path: "/about" }
               ]} />

               <FooterCol title="Institutional" links={[
                 { label: "Venture Logic", path: "/about" },
                 { label: "Founder Identity", path: "/about" },
                 { label: "Executive Log", path: "/blog" },
                 { label: "Venture Careers", path: "/" }
               ]} />

               <FooterCol title="Sovereign Control" links={[
                 { label: "Privacy Protocol", path: "/privacy" },
                 { label: "Terms of Access", path: "/privacy" },
                 { label: "Compliances", path: "/privacy" },
                 { label: "Charter logic", path: "/privacy" }
               ]} />
            </div>

            {/* Final System Meta Bar */}
            <div className="pt-24 border-t border-slate-200 flex flex-col xl:flex-row justify-between items-center gap-16">
               <div className="flex flex-col md:flex-row items-center gap-12 text-center md:text-left">
                  <div className="text-[12px] font-black text-slate-400 font-mono tracking-[0.5em] uppercase italic leading-relaxed">
                    © {new Date().getFullYear()} UDAARO GLOBAL VENTURES. <br className="md:hidden" /> ARCHITECTED BY APURVA PRIYADARSHI.
                  </div>
                  <div className="px-8 py-3 bg-slate-950 text-blue-500 rounded-[1.5rem] font-mono text-[11px] font-black tracking-[0.4em] shadow-7xl uppercase italic border border-white/10 group cursor-crosshair">
                     <span className="group-hover:text-emerald-500 transition-colors">LEDGER_STATE: ENCRYPTED_STABLE</span>
                  </div>
               </div>
               
               <div className="flex flex-wrap justify-center gap-16">
                  <UtilityLink text="Internal Node Login" to="/admin-login" />
                  <UtilityLink text="Uptime Status: 100%" color="emerald" />
                  <UtilityLink text="Compliance Registry" to="/privacy" />
               </div>
            </div>
         </div>
      </footer>
    </div>
  );
}

/** * =============================================================================
 * IV. ATOMIC UI HELPERS (HANDSHAKE WRAPPERS)
 * ============================================================================= */

const StatusNode = ({ text }) => (
  <div className="px-6 py-2 bg-slate-50 border border-slate-200 rounded-full flex items-center gap-3">
    <div className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
    <span className="text-[10px] font-black uppercase tracking-widest text-slate-900 italic">{text}</span>
  </div>
);

const FooterCol = ({ title, links }) => (
  <div className="lg:col-span-1">
    <h4 className="font-black text-slate-950 text-[12px] uppercase tracking-[0.6em] mb-16 border-b-4 border-blue-600 pb-6 inline-block italic leading-none">
      {title}
    </h4>
    <ul className="space-y-12">
      {links.map((link, j) => (
        <li key={j}>
          <Link to={link.path} className="text-slate-400 hover:text-blue-600 font-bold text-[16px] transition-all flex items-center gap-6 group uppercase tracking-[0.1em] italic leading-none">
            <div className="w-2 h-2 rounded-full bg-slate-200 group-hover:bg-blue-600 group-hover:scale-150 transition-all duration-700" />
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

const SocialIcon = ({ icon, label }) => (
  <motion.div whileHover={{ y: -10, scale: 1.1 }} className="flex flex-col items-center gap-4 group cursor-pointer">
    <div className="w-20 h-20 bg-white border border-slate-200 rounded-[2.2rem] flex items-center justify-center text-slate-400 group-hover:text-blue-600 group-hover:border-blue-600 transition-all duration-700 shadow-xl group-hover:shadow-7xl border-2">
      {icon}
    </div>
    <span className="text-[9px] font-black text-slate-300 group-hover:text-slate-950 uppercase tracking-widest transition-colors">{label}</span>
  </motion.div>
);

const UtilityLink = ({ text, color = "slate", to }) => (
  <Link to={to || "#"} className={`text-[12px] font-black text-${color}-400 hover:text-slate-950 cursor-pointer transition-colors border-b-2 border-transparent hover:border-slate-950 pb-2 uppercase tracking-[0.4em] italic leading-none`}>
    {text}
  </Link>
);

const SectionTitle = ({ label, title, desc, align = "left" }) => (
  <div className={`max-w-6xl ${align === "center" ? "text-center mx-auto" : "text-left"}`}>
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="flex items-center gap-6 mb-8 justify-center lg:justify-start">
      <div className="h-[2px] w-12 bg-blue-600 shadow-[0_0_10px_blue]" />
      <span className="text-[12px] font-black text-blue-600 uppercase tracking-[0.8em] italic leading-none">{label}</span>
    </motion.div>
    <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} className="text-7xl md:text-[10rem] font-black tracking-[-0.03em] italic uppercase text-slate-950 mb-12 leading-[0.8]">
      {title}
    </motion.h2>
    {desc && (
      <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-2xl md:text-4xl text-slate-500 max-w-4xl mx-auto font-medium leading-relaxed italic opacity-80">
        "{desc}"
      </motion.p>
    )}
  </div>
);

const CTANode = ({ value, label }) => (
  <div className="flex flex-col items-center gap-4">
     <p className="text-6xl font-black text-blue-500 tracking-tighter leading-none italic uppercase">{value}</p>
     <p className="text-[11px] font-black text-slate-500 uppercase tracking-[0.5em] italic">{label}</p>
  </div>
);