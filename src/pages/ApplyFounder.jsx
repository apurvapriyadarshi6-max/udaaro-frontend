import React, { useState, useEffect, useCallback, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Rocket, User, Mail, Phone, ChevronRight, 
  ShieldCheck, Globe, Fingerprint, Cpu,
  Target, Activity, Workflow, Loader2, CheckCircle2,
  Smartphone, FileCode
} from "lucide-react";

// --- SYSTEM CONSTANTS ---
const SECTORS = [
  { id: "deep", label: "Deep Tech & IP", protocol: "DT_01" },
  { id: "intel", label: "Artificial Intelligence", protocol: "AI_08" },
  { id: "fin", label: "Fintech Sovereignty", protocol: "FT_04" },
  { id: "infra", label: "Digital Infrastructure", protocol: "DI_09" },
  { id: "agri", label: "Agri-Chain Logistics", protocol: "AG_12" }
];

const PHASES = [
  { val: "Conceptual", label: "Logic Synthesis" },
  { val: "MVP", label: "Market Resonance" },
  { val: "Scale", label: "Ascension Grid" }
];

/** * UI ATOMS */
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

/** * MAIN COMPONENT */
export default function VanguardIntake() {
  const [step, setStep] = useState(1);
  const [logicVetting, setLogicVetting] = useState(0);
  const [isVetting, setIsVetting] = useState(false);
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", startup: "",
    vertical: SECTORS[0].label, stage: PHASES[0].label, thesis: "", location: "India_Node_01"
  });

  // Handle Input Changes
  const updateField = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  // --- LOGIC VETTING SIMULATION ---
  const executeLogicVetting = useCallback(() => {
    setIsVetting(true);
    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.floor(Math.random() * 8) + 2; // Slightly faster for UX
      if (progress >= 100) {
        setLogicVetting(100);
        clearInterval(interval);
        setTimeout(() => setStep(3), 800);
      } else {
        setLogicVetting(progress);
      }
    }, 120);

    return () => clearInterval(interval); // Cleanup to prevent memory leaks
  }, []);

  const handleAdmissionRequest = (e) => {
    e.preventDefault();
    if (!formData.thesis.trim()) return alert("Structural Thesis Required for Handshake.");
    executeLogicVetting();
  };

  return (
    <div className="min-h-screen bg-[#FDFDFE] flex flex-col selection:bg-blue-600 selection:text-white overflow-x-hidden">
      
      {/* 1. NAV BRIDGE */}
      <nav className="p-6 md:p-10 sticky top-0 w-full z-[100] bg-white/70 backdrop-blur-2xl border-b border-slate-100 flex justify-between items-center px-6 md:px-16">
        <Link to="/" className="flex items-center gap-4 md:gap-5 group">
          <div className="w-10 h-10 md:w-12 md:h-12 bg-slate-950 text-white rounded-xl md:rounded-2xl flex items-center justify-center font-black italic group-hover:bg-blue-600 transition-all duration-700">U</div>
          <div className="flex flex-col">
            <span className="text-xl md:text-2xl font-black text-slate-950 uppercase italic tracking-tighter leading-none">Udaaro</span>
            <span className="text-[8px] md:text-[9px] font-black text-blue-600 uppercase tracking-[0.5em] mt-1 italic">Vanguard_Intake_v3.5</span>
          </div>
        </Link>
        <div className="flex items-center gap-6">
          <div className="hidden lg:flex items-center gap-4 bg-slate-50 border border-slate-200 px-6 py-2.5 rounded-2xl">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_#10b981]" />
            <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest italic">Node_Status: SECURE</span>
          </div>
          <Fingerprint className="text-blue-600" size={24} />
        </div>
      </nav>

      {/* 2. MAIN OPERATIONAL GRID */}
      <main className="flex-1 flex flex-col lg:flex-row">
        
        {/* LEFT SECTOR */}
        <aside className="lg:w-[40%] bg-slate-950 p-12 lg:p-24 text-white relative overflow-hidden flex flex-col justify-between">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <svg width="100%" height="100%"><pattern id="grid" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse"><path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5"/></pattern><rect width="100%" height="100%" fill="url(#grid)" /></svg>
          </div>
          
          <div className="relative z-10">
            <ProtocolLabel text="Sovereign Admission" />
            <h1 className="text-5xl md:text-[7rem] font-black uppercase italic tracking-tighter leading-[0.85] mb-12">
              Architect <br /> Your <span className="text-blue-500">Legacy.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 font-medium italic leading-relaxed max-w-lg mb-16 md:mb-20">
              The Udaaro Venture OS is a closed-loop execution system designed for elite founders. We engineer vision into high-scale institutions.
            </p>
            
            <div className="space-y-10 md:space-y-12">
              {[
                { icon: ShieldCheck, title: "Logic Audit", desc: "Rigorous vetting of unit economics and market moats." },
                { icon: Globe, title: "Global Mesh", desc: "Direct pathway to international innovation clusters." },
                { icon: Cpu, title: "VOS Sync", desc: "Integration with proprietary startup operating logic." }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 md:gap-8 group">
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-white/5 border border-white/10 rounded-[1.8rem] flex items-center justify-center text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shadow-xl shrink-0">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg md:text-xl font-black uppercase italic tracking-tighter mb-1 md:mb-2">{item.title}</h4>
                    <p className="text-sm md:text-base text-slate-500 font-medium italic max-w-xs">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </aside>

        {/* RIGHT SECTOR: THE INTAKE TERMINAL */}
        <section className="lg:w-[60%] p-6 md:p-12 lg:p-32 flex flex-col justify-center items-center relative overflow-y-auto">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div 
                key="step1"
                initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} 
                className="w-full max-w-2xl bg-white p-8 md:p-16 rounded-[3rem] md:rounded-[4.5rem] shadow-2xl border border-slate-50 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-2 bg-slate-100">
                  <motion.div initial={{ width: 0 }} animate={{ width: "33%" }} className="h-full bg-blue-600" />
                </div>
                <div className="mb-12 md:mb-16 text-center">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-blue-50 text-blue-600 rounded-[1.8rem] md:rounded-[2.2rem] flex items-center justify-center mx-auto mb-8 md:mb-10 shadow-inner">
                    <User size={32} />
                  </div>
                  <h2 className="text-4xl md:text-5xl font-black italic tracking-tighter uppercase mb-4 text-slate-950">Founder_Identity</h2>
                  <p className="text-slate-400 font-medium italic uppercase tracking-widest text-xs md:text-sm opacity-60">Phase 01: Handshake Protocol</p>
                </div>

                <div className="space-y-8 md:space-y-10">
                  <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                    <InputNode label="Executive Identity" icon={User} hint>
                      <input 
                        type="text" 
                        value={formData.name}
                        onChange={(e) => updateField('name', e.target.value)}
                        className="w-full bg-slate-50 rounded-[1.5rem] md:rounded-[1.8rem] py-5 md:py-6 pl-16 pr-6 font-bold text-sm outline-none focus:ring-2 ring-blue-600 transition-all shadow-inner" 
                        placeholder="Legal Name" 
                      />
                    </InputNode>
                    <InputNode label="Institutional Mail" icon={Mail} hint>
                      <input 
                        type="email" 
                        value={formData.email}
                        onChange={(e) => updateField('email', e.target.value)}
                        className="w-full bg-slate-50 rounded-[1.5rem] md:rounded-[1.8rem] py-5 md:py-6 pl-16 pr-6 font-bold text-sm outline-none focus:ring-2 ring-blue-600 transition-all shadow-inner" 
                        placeholder="founder@corp.com" 
                      />
                    </InputNode>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                    <InputNode label="Venture Alias" icon={Rocket}>
                      <input 
                        type="text" 
                        value={formData.startup}
                        onChange={(e) => updateField('startup', e.target.value)}
                        className="w-full bg-slate-50 rounded-[1.5rem] md:rounded-[1.8rem] py-5 md:py-6 pl-16 pr-6 font-bold text-sm outline-none focus:ring-2 ring-blue-600 transition-all shadow-inner" 
                        placeholder="Organization Name" 
                      />
                    </InputNode>
                    <InputNode label="Handshake Node" icon={Smartphone}>
                      <input 
                        type="text" 
                        value={formData.phone}
                        onChange={(e) => updateField('phone', e.target.value)}
                        className="w-full bg-slate-50 rounded-[1.5rem] md:rounded-[1.8rem] py-5 md:py-6 pl-16 pr-6 font-bold text-sm outline-none focus:ring-2 ring-blue-600 transition-all shadow-inner" 
                        placeholder="+91 Contact" 
                      />
                    </InputNode>
                  </div>
                  <button 
                    onClick={() => setStep(2)} 
                    disabled={!formData.name || !formData.email}
                    className="w-full py-8 md:py-10 bg-slate-950 text-white rounded-full font-black uppercase tracking-[0.4em] italic text-[10px] md:text-xs shadow-xl hover:bg-blue-600 transition-all flex items-center justify-center gap-4 group disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Establish Identity <ChevronRight size={18} className="group-hover:translate-x-2 transition-transform duration-500" />
                  </button>
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div 
                key="step2"
                initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} 
                className="w-full max-w-2xl bg-white p-8 md:p-16 rounded-[3rem] md:rounded-[4.5rem] shadow-2xl border border-slate-50 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-2 bg-slate-100">
                  <motion.div initial={{ width: "33%" }} animate={{ width: "66%" }} className="h-full bg-blue-600" />
                </div>
                <div className="mb-12 md:mb-16 text-center">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-blue-50 text-blue-600 rounded-[1.8rem] md:rounded-[2.2rem] flex items-center justify-center mx-auto mb-8 md:mb-10 shadow-inner">
                    <Workflow size={32} />
                  </div>
                  <h2 className="text-4xl md:text-5xl font-black italic tracking-tighter uppercase mb-4 text-slate-950">Logic_Synthesis</h2>
                  <p className="text-slate-400 font-medium italic uppercase tracking-widest text-xs md:text-sm opacity-60">Phase 02: Structural Curation</p>
                </div>

                <form onSubmit={handleAdmissionRequest} className="space-y-8 md:space-y-10">
                  <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                    <InputNode label="Primary Vertical" icon={Target}>
                      <select 
                        value={formData.vertical}
                        onChange={(e) => updateField('vertical', e.target.value)}
                        className="w-full bg-slate-50 rounded-[1.5rem] md:rounded-[1.8rem] py-5 md:py-6 pl-16 pr-6 font-bold text-sm outline-none appearance-none cursor-pointer italic text-slate-700"
                      >
                        {SECTORS.map(s => <option key={s.id} value={s.label}>{s.label}</option>)}
                      </select>
                    </InputNode>
                    <InputNode label="Current Phase" icon={Activity}>
                      <select 
                        value={formData.stage}
                        onChange={(e) => updateField('stage', e.target.value)}
                        className="w-full bg-slate-50 rounded-[1.5rem] md:rounded-[1.8rem] py-5 md:py-6 pl-16 pr-6 font-bold text-sm outline-none appearance-none cursor-pointer italic text-slate-700"
                      >
                        {PHASES.map(p => <option key={p.val} value={p.label}>{p.label}</option>)}
                      </select>
                    </InputNode>
                  </div>
                  <InputNode label="Structural Thesis" icon={FileCode}>
                    <textarea 
                      rows="4" 
                      value={formData.thesis}
                      onChange={(e) => updateField('thesis', e.target.value)}
                      className="w-full bg-slate-50 rounded-[2rem] md:rounded-[2.5rem] py-6 md:py-8 pl-16 pr-8 font-bold text-sm outline-none shadow-inner leading-relaxed italic text-slate-700" 
                      placeholder="Architect your core value proposition and industrial failure-mitigation logic..." 
                    />
                  </InputNode>

                  <AnimatePresence>
                    {isVetting && (
                      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="p-6 md:p-8 bg-slate-950 rounded-[2rem] md:rounded-[2.5rem] text-white space-y-4">
                        <div className="flex justify-between items-center text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em]">
                          <span>Logic_Vetting_Process</span>
                          <span className="text-blue-500 font-mono text-lg md:text-xl">{logicVetting}%</span>
                        </div>
                        <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                          <motion.div style={{ width: `${logicVetting}%` }} className="h-full bg-blue-600 shadow-[0_0_10px_blue]" />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="flex gap-4 md:gap-6">
                    <button type="button" onClick={() => setStep(1)} className="flex-1 py-6 md:py-8 border-2 border-slate-100 rounded-full font-black text-slate-300 uppercase tracking-widest italic text-[9px] md:text-[10px] hover:bg-slate-50 transition-colors">Back</button>
                    <button type="submit" disabled={isVetting} className="flex-[3] py-6 md:py-8 bg-slate-950 text-white rounded-full font-black uppercase tracking-[0.3em] md:tracking-[0.4em] italic text-[9px] md:text-[10px] shadow-xl hover:bg-blue-600 transition-all flex items-center justify-center gap-4">
                      {isVetting ? <Loader2 className="animate-spin" size={18} /> : "Execute Handshake"}
                    </button>
                  </div>
                </form>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div key="step3" initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="w-full max-w-2xl text-center px-4">
                <div className="w-24 h-24 md:w-32 md:h-32 bg-emerald-50 text-emerald-500 rounded-[2.5rem] md:rounded-[3rem] flex items-center justify-center mx-auto mb-10 md:mb-12 shadow-xl border-2 border-emerald-100">
                  <CheckCircle2 size={56} />
                </div>
                <h2 className="text-5xl md:text-6xl font-black italic tracking-tighter uppercase mb-6 text-slate-950">Sync_Success.</h2>
                <p className="text-lg md:text-xl text-slate-500 italic font-medium max-w-sm mx-auto mb-12 md:mb-16 leading-relaxed">
                  Institutional synchronization complete. Your venture logic has been queued for sovereign audit. Access codes arriving shortly.
                </p>
                <Link to="/" className="inline-flex items-center gap-4 md:gap-6 px-12 md:px-16 py-6 md:py-8 bg-slate-950 text-white rounded-full font-black uppercase tracking-[0.4em] md:tracking-[0.5em] italic text-[9px] md:text-[10px] shadow-2xl hover:bg-blue-600 transition-all">
                  <Globe size={18} /> Return to Home Node
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </section>
      </main>

      {/* 3. MASTER FOOTER */}
      <footer className="p-8 md:p-12 border-t border-slate-100 bg-white flex flex-col md:flex-row justify-between items-center px-6 md:px-16 gap-6 md:gap-0 opacity-40">
        <div className="flex items-center gap-4 md:gap-6">
          <div className="w-10 h-10 bg-slate-950 text-white rounded-xl flex items-center justify-center font-black italic text-lg">U</div>
          <p className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] md:tracking-[0.6em] text-slate-950">Udaaro Sovereign Venture OS © 2026</p>
        </div>
        <div className="flex gap-6 md:gap-10 text-[8px] md:text-[9px] font-black uppercase tracking-[0.4em] italic text-slate-400">
          <span>Infrastructure: INDIA_ALPHA</span>
          <span>Security: AES_256_ENFORCED</span>
        </div>
      </footer>
    </div>
  );
}