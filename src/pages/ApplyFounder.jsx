/** * =============================================================================
 * UDAARO VANGUARD INTAKE: THE SOVEREIGN ADMISSION ENGINE v3.5.0
 * -----------------------------------------------------------------------------
 * DESIGN SYSTEM: Neo-Heritage Imperialism
 * LEAD ARCHITECT: Apurva Priyadarshi (Batch 2026)
 * MODULE: High-Potential Founder Intake (Phase 1)
 * ============================================================================= */

import React, { useState, useEffect, useCallback, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Rocket, User, Mail, Phone, Building2, Tag, ChevronRight, 
  ShieldCheck, Globe, Fingerprint, Cpu, ShieldAlert,
  Target, Zap, Network, Scale, Database, MessageSquare,
  Landmark, IndianRupee, ShieldQuestion, Briefcase, Activity,
  Search, Lock, Compass, Eye, Share2, ClipboardCheck,
  Dna, Binary, Microscope, HardDrive, Globe2, Layers, MapPin, 
  AtSign, Smartphone, FileCode, Box, TrendingUp, Workflow, 
  Server, Key, Layers3, ActivitySquare, Loader2, CheckCircle2
} from "lucide-react";

// --- SYSTEM CONSTANTS & NODE DATA ---
const SECTORS = [
  { id: "deep", label: "Deep Tech & IP", protocol: "DT_01" },
  { id: "intel", label: "Artificial Intelligence", protocol: "AI_08" },
  { id: "fin", label: "Fintech Sovereignty", protocol: "FT_04" },
  { id: "infra", label: "Digital Infrastructure", protocol: "DI_09" },
  { id: "agri", label: "Agri-Chain Logistics", protocol: "AG_12" }
];

const PHASES = [
  { val: "Conceptual", label: "Logic Synthesis", color: "blue" },
  { val: "MVP", label: "Market Resonance", color: "emerald" },
  { val: "Scale", label: "Ascension Grid", color: "indigo" }
];

/** * =============================================================================
 * UI ATOMS: TERMINAL WRAPPERS
 * ============================================================================= */

const ProtocolLabel = ({ text }) => (
  <motion.div 
    initial={{ opacity: 0, x: -10 }} 
    animate={{ opacity: 1, x: 0 }}
    className="inline-flex items-center gap-3 px-5 py-2 bg-blue-600/5 border border-blue-600/20 rounded-full mb-8"
  >
    <div className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
    <span className="text-[9px] font-black uppercase tracking-[0.4em] text-blue-600 italic">{text}</span>
  </motion.div>
);

const InputNode = ({ label, icon: Icon, children, hint }) => (
  <div className="space-y-4 group">
    <div className="flex justify-between items-center px-2">
      <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em] italic leading-none">{label}</span>
      {hint && <span className="text-[8px] font-bold text-blue-400 uppercase italic opacity-40">Handshake_Required</span>}
    </div>
    <div className="relative">
      <div className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-blue-600 transition-colors duration-500">
        <Icon size={18} />
      </div>
      {children}
    </div>
  </div>
);

/** * =============================================================================
 * MAIN COMPONENT: VANGUARD INTAKE
 * ============================================================================= */

export default function VanguardIntake() {
  const [step, setStep] = useState(1);
  const [logicVetting, setLogicVetting] = useState(0);
  const [isVetting, setIsVetting] = useState(false);
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", startup: "",
    vertical: "", stage: "", thesis: "", location: "India_Node_01"
  });

  // --- LOGIC VETTING SIMULATION ---
  const executeLogicVetting = useCallback(() => {
    setIsVetting(true);
    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.floor(Math.random() * 5) + 2;
      if (progress >= 100) {
        setLogicVetting(100);
        clearInterval(interval);
        setTimeout(() => setStep(3), 1000);
      } else {
        setLogicVetting(progress);
      }
    }, 100);
  }, []);

  const handleAdmissionRequest = (e) => {
    e.preventDefault();
    executeLogicVetting();
  };

  return (
    <div className="min-h-screen bg-[#FDFDFE] flex flex-col selection:bg-blue-600 selection:text-white">
      
      {/* 1. NAV BRIDGE */}
      <nav className="p-10 sticky top-0 w-full z-[100] bg-white/50 backdrop-blur-2xl border-b border-slate-100 flex justify-between items-center px-16">
        <Link to="/" className="flex items-center gap-5 group">
          <div className="w-12 h-12 bg-slate-950 text-white rounded-2xl flex items-center justify-center font-black italic group-hover:bg-blue-600 transition-all duration-700">U</div>
          <div className="flex flex-col">
            <span className="text-2xl font-black text-slate-950 uppercase italic tracking-tighter leading-none">Udaaro</span>
            <span className="text-[9px] font-black text-blue-600 uppercase tracking-[0.5em] mt-1.5 italic">Vanguard_Intake_v3.5</span>
          </div>
        </Link>
        <div className="flex items-center gap-10">
          <div className="hidden md:flex items-center gap-4 bg-slate-50 border border-slate-200 px-6 py-2.5 rounded-2xl">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_#10b981]" />
            <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest italic">Node_Status: SECURE</span>
          </div>
          <Fingerprint className="text-blue-600" size={24} />
        </div>
      </nav>

      {/* 2. MAIN OPERATIONAL GRID */}
      <main className="flex-1 flex flex-col lg:flex-row">
        
        {/* LEFT SECTOR: INSTITUTIONAL CONTEXT */}
        <aside className="lg:w-[40%] bg-slate-950 p-16 lg:p-24 text-white relative overflow-hidden flex flex-col justify-between">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <svg width="100%" height="100%"><pattern id="grid" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse"><path d="M 80 0 L 0 0 0 80" fill="none" stroke="white" strokeWidth="0.5"/></pattern><rect width="100%" height="100%" fill="url(#grid)" /></svg>
          </div>
          
          <div className="relative z-10">
            <ProtocolLabel text="Sovereign Admission" />
            <h1 className="text-6xl md:text-[8rem] font-black uppercase italic tracking-tighter leading-[0.8] mb-12">
              Architect <br /> Your <span className="text-blue-500">Legacy.</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 font-medium italic leading-relaxed max-w-lg mb-20">
              The Udaaro Venture OS is a closed-loop execution system designed for India's elite founders. We engineering vision into high-scale institutions.
            </p>
            
            <div className="space-y-12">
              {[
                { icon: ShieldCheck, title: "Logic Audit", desc: "Rigorous vetting of unit economics and market moats." },
                { icon: Globe, title: "Global Mesh", desc: "Direct pathway to international innovation clusters." },
                { icon: Cpu, title: "VOS Sync", desc: "Integration with proprietary startup operating logic." }
              ].map((item, i) => (
                <div key={i} className="flex gap-8 group">
                  <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-[2rem] flex items-center justify-center text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shadow-xl">
                    <item.icon size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-black uppercase italic tracking-tighter mb-2">{item.title}</h4>
                    <p className="text-slate-500 font-medium italic max-w-xs">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative z-10 pt-20 border-t border-white/5 flex justify-between items-end opacity-40">
            <div className="space-y-2">
              <p className="text-[9px] font-black uppercase tracking-[0.5em]">System Architect</p>
              <p className="text-xl font-black italic uppercase tracking-tighter">Apurva Priyadarshi</p>
            </div>
            <div className="text-right">
              <p className="text-[9px] font-black uppercase tracking-[0.5em]">Node_Identity</p>
              <p className="text-xl font-black italic uppercase tracking-tighter">INDIA_B26</p>
            </div>
          </div>
        </aside>

        {/* RIGHT SECTOR: THE INTAKE TERMINAL */}
        <section className="lg:w-[60%] p-10 lg:p-32 flex flex-col justify-center items-center relative overflow-y-auto">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="w-full max-w-2xl bg-white p-16 rounded-[4.5rem] shadow-7xl border border-slate-50 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-slate-100"><motion.div animate={{ width: "33%" }} className="h-full bg-blue-600" /></div>
                <div className="mb-16 text-center">
                  <div className="w-20 h-20 bg-blue-50 text-blue-600 rounded-[2.2rem] flex items-center justify-center mx-auto mb-10 shadow-inner">
                    <User size={36} />
                  </div>
                  <h2 className="text-5xl font-black italic tracking-tighter uppercase mb-4">Founder_Identity</h2>
                  <p className="text-slate-400 font-medium italic uppercase tracking-widest text-sm opacity-60">Phase 01: Handshake Protocol</p>
                </div>

                <div className="space-y-10">
                  <div className="grid md:grid-cols-2 gap-8">
                    <InputNode label="Executive Identity" icon={User} hint>
                      <input type="text" className="w-full bg-slate-50 rounded-[1.8rem] py-6 pl-16 pr-6 font-bold text-sm outline-none focus:ring-2 ring-blue-600 transition-all shadow-inner" placeholder="Legal Name" />
                    </InputNode>
                    <InputNode label="Institutional Mail" icon={Mail} hint>
                      <input type="email" className="w-full bg-slate-50 rounded-[1.8rem] py-6 pl-16 pr-6 font-bold text-sm outline-none focus:ring-2 ring-blue-600 transition-all shadow-inner" placeholder="founder@corp.com" />
                    </InputNode>
                  </div>
                  <div className="grid md:grid-cols-2 gap-8">
                    <InputNode label="Venture Alias" icon={Rocket}>
                      <input type="text" className="w-full bg-slate-50 rounded-[1.8rem] py-6 pl-16 pr-6 font-bold text-sm outline-none focus:ring-2 ring-blue-600 transition-all shadow-inner" placeholder="Organization Name" />
                    </InputNode>
                    <InputNode label="Handshake Node" icon={Smartphone}>
                      <input type="text" className="w-full bg-slate-50 rounded-[1.8rem] py-6 pl-16 pr-6 font-bold text-sm outline-none focus:ring-2 ring-blue-600 transition-all shadow-inner" placeholder="+91 Contact" />
                    </InputNode>
                  </div>
                  <button onClick={() => setStep(2)} className="w-full py-10 bg-slate-950 text-white rounded-full font-black uppercase tracking-[0.5em] italic text-xs shadow-7xl hover:bg-blue-600 transition-all flex items-center justify-center gap-5 group">
                    Establish Identity <ChevronRight size={20} className="group-hover:translate-x-3 transition-transform duration-500" />
                  </button>
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="w-full max-w-2xl bg-white p-16 rounded-[4.5rem] shadow-7xl border border-slate-50 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-slate-100"><motion.div animate={{ width: "66%" }} className="h-full bg-blue-600" /></div>
                <div className="mb-16 text-center">
                  <div className="w-20 h-20 bg-blue-50 text-blue-600 rounded-[2.2rem] flex items-center justify-center mx-auto mb-10 shadow-inner">
                    <Workflow size={36} />
                  </div>
                  <h2 className="text-5xl font-black italic tracking-tighter uppercase mb-4">Logic_Synthesis</h2>
                  <p className="text-slate-400 font-medium italic uppercase tracking-widest text-sm opacity-60">Phase 02: Structural Curation</p>
                </div>

                <form onSubmit={handleAdmissionRequest} className="space-y-10">
                  <div className="grid md:grid-cols-2 gap-8">
                    <InputNode label="Primary Vertical" icon={Target}>
                      <select className="w-full bg-slate-50 rounded-[1.8rem] py-6 pl-16 pr-6 font-bold text-sm outline-none appearance-none cursor-pointer italic">
                        {SECTORS.map(s => <option key={s.id}>{s.label}</option>)}
                      </select>
                    </InputNode>
                    <InputNode label="Current Phase" icon={Activity}>
                      <select className="w-full bg-slate-50 rounded-[1.8rem] py-6 pl-16 pr-6 font-bold text-sm outline-none appearance-none cursor-pointer italic">
                        {PHASES.map(p => <option key={p.val}>{p.label}</option>)}
                      </select>
                    </InputNode>
                  </div>
                  <InputNode label="Structural Thesis" icon={FileCode}>
                    <textarea rows="5" className="w-full bg-slate-50 rounded-[2.5rem] py-8 pl-16 pr-8 font-bold text-sm outline-none shadow-inner leading-relaxed italic" placeholder="Architect your core value proposition and industrial failure-mitigation logic..." />
                  </InputNode>

                  <AnimatePresence>
                    {isVetting && (
                      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="p-8 bg-slate-950 rounded-[2.5rem] text-white space-y-4">
                        <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-[0.4em]">
                          <span>Logic_Vetting_Process</span>
                          <span className="text-blue-500 font-mono text-xl">{logicVetting}%</span>
                        </div>
                        <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                          <motion.div animate={{ width: `${logicVetting}%` }} className="h-full bg-blue-600 shadow-[0_0_10px_blue]" />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="flex gap-6">
                    <button type="button" onClick={() => setStep(1)} className="flex-1 py-8 border-2 border-slate-100 rounded-full font-black text-slate-300 uppercase tracking-widest italic text-[10px]">Back</button>
                    <button type="submit" className="flex-[3] py-8 bg-slate-950 text-white rounded-full font-black uppercase tracking-[0.4em] italic text-[10px] shadow-7xl hover:bg-blue-600 transition-all flex items-center justify-center gap-4">
                      {isVetting ? <Loader2 className="animate-spin" /> : "Execute Handshake"}
                    </button>
                  </div>
                </form>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="w-full max-w-2xl text-center">
                <div className="w-32 h-32 bg-emerald-50 text-emerald-500 rounded-[3rem] flex items-center justify-center mx-auto mb-12 shadow-5xl border-2 border-emerald-100">
                  <CheckCircle2 size={64} />
                </div>
                <h2 className="text-6xl font-black italic tracking-tighter uppercase mb-6">Sync_Success.</h2>
                <p className="text-xl text-slate-500 italic font-medium max-w-sm mx-auto mb-16 leading-relaxed">
                  Institutional synchronization complete. Your venture logic has been queued for sovereign audit. Access codes arriving shortly.
                </p>
                <Link to="/" className="inline-flex items-center gap-6 px-16 py-8 bg-slate-950 text-white rounded-full font-black uppercase tracking-[0.5em] italic text-[10px] shadow-7xl hover:bg-blue-600 transition-all">
                  <Globe size={18} /> Return to Home Node
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </section>
      </main>

      {/* 3. MASTER FOOTER */}
      <footer className="p-12 border-t border-slate-100 bg-white flex flex-col md:flex-row justify-between items-center px-16 opacity-30">
        <div className="flex items-center gap-6">
          <div className="w-10 h-10 bg-slate-950 text-white rounded-xl flex items-center justify-center font-black italic">U</div>
          <p className="text-[10px] font-black uppercase tracking-[0.6em]">Udaaro Sovereign Venture OS © 2026</p>
        </div>
        <div className="flex gap-10 text-[9px] font-black uppercase tracking-[0.4em] italic">
          <span>Infrastructure: INDIA_ALPHA</span>
          <span>Security: AES_256_ENFORCED</span>
        </div>
      </footer>
    </div>
  );
}