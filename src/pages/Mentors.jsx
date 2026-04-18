import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ShieldCheck, User, AtSign, Cpu, Dna, BrainCircuit, History, Microscope, ChevronRight 
} from "lucide-react";

// --- SYSTEM CONSTANTS ---
const EXPERIENCE_MATRIX = [
  { level: "Industry_Lead", label: "Strategic Domain Authority (10+ Years)" },
  { level: "Growth_Expert", label: "Scaling & Market Ascension Engineering" },
  { level: "Executive_Node", label: "C-Suite Institutional Governance" },
  { level: "Board_Veteran", label: "Global Asset & Risk Orchestration" }
];

/** * RESONANCE LOGIC: MENTOR-FOUNDER SYNERGY */
const calculateAdvisoryResonance = (tenure, phase) => {
  const tenureWeights = { Growth_Expert: 1.2, Executive_Node: 1.8, Board_Veteran: 2.5 };
  return (tenureWeights[tenure] || 1.0) * (phase === 'Validation' ? 0.8 : 1.5);
};

export default function AdvisoryTerminal() {
  const [activeHandshake, setActiveHandshake] = useState(false);
  const [auditPercentage, setAuditPercentage] = useState(0);
  const [mentorNode, setMentorNode] = useState({
    identity: "", terminal: "", tenure: "Industry_Lead", phase: "MVP_Sync"
  });

  // --- COUNCIL HANDSHAKE ---
  const initiateCouncilHandshake = useCallback(() => {
    if (activeHandshake) return;
    setActiveHandshake(true);
    let auditTick = 0;
    
    const coreAudit = setInterval(() => {
      auditTick += Math.floor(Math.random() * 3) + 2;
      if (auditTick >= 100) {
        setAuditPercentage(100);
        clearInterval(coreAudit);
      } else {
        setAuditPercentage(auditTick);
      }
    }, 50);

    return () => clearInterval(coreAudit);
  }, [activeHandshake]);

  return (
    <div className="min-h-screen bg-[#FDF9F3] flex flex-col font-serif selection:bg-[#D4AF37] overflow-x-hidden">
      
      {/* INSTITUTIONAL JALI OVERLAY */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.04] z-0">
        <svg width="100%" height="100%" aria-hidden="true">
          <pattern id="jali-pattern" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
            <path d="M60 0 L120 60 L60 120 L0 60 Z" fill="none" stroke="black" strokeWidth="1" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#jali-pattern)" />
        </svg>
      </div>

      {/* --- I. NAVIGATION --- */}
      <nav className="p-6 md:p-12 sticky top-0 z-[100] bg-white/70 backdrop-blur-2xl border-b border-[#D4AF37]/10 flex justify-between items-center px-6 md:px-20">
        <div className="flex items-center gap-6">
          <div className="w-12 h-12 md:w-14 md:h-14 bg-[#0F1419] rounded-2xl flex items-center justify-center text-[#D4AF37] font-black italic text-xl md:text-2xl border border-[#D4AF37]/30">U</div>
          <div className="flex flex-col">
            <h1 className="text-xl md:text-2xl font-black text-[#0F1419] tracking-tighter uppercase italic leading-none">Udaaro Advisory</h1>
            <span className="text-[8px] md:text-[10px] font-black text-[#D4AF37] uppercase tracking-[0.5em] mt-2 italic">Council_Onboarding_v4.0</span>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-10">
          <div className="px-6 py-2 bg-[#0F1419] rounded-2xl flex items-center gap-4 shadow-xl">
             <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
             <span className="text-[9px] font-black text-[#D4AF37] uppercase tracking-widest italic leading-none">Status: COUNCIL_SYNC</span>
          </div>
          <ShieldCheck className="text-[#0F1419]" size={24} />
        </div>
      </nav>

      {/* --- II. WORKSPACE --- */}
      <main className="flex-1 flex flex-col lg:flex-row relative z-10">
        
        {/* LEFT: ADVISORY DOSSIER */}
        <aside className="lg:w-[45%] bg-[#0F1419] p-12 lg:p-24 text-white flex flex-col justify-between overflow-hidden">
          <div className="relative z-10">
            <div className="flex items-center gap-6 mb-12">
               <div className="h-[1px] w-12 md:w-20 bg-[#D4AF37]" />
               <span className="text-[9px] md:text-[10px] font-black text-[#D4AF37] uppercase tracking-[0.6em] italic">Architectural Tenure</span>
            </div>
            
            <h2 className="text-5xl md:text-[8rem] font-black italic tracking-tighter uppercase leading-[0.85] mb-12 text-[#D4AF37]">
              Engineer <br /> <span className="text-white">Success.</span>
            </h2>
            
            <p className="text-lg md:text-2xl text-slate-400 font-medium italic leading-relaxed max-w-lg mb-16 md:mb-24">
              Join the Alpha Council. Synchronize your industrial wisdom with the <span className="text-white font-black underline decoration-[#D4AF37] decoration-8 underline-offset-8 uppercase">Venture OS</span>.
            </p>

            <div className="space-y-10 md:space-y-12">
              {[
                { icon: BrainCircuit, t: "Logic Synthesis", d: "Auditing founder moats and structural points." },
                { icon: History, t: "Legacy Governance", d: "Instilling discipline into early-stage units." },
                { icon: Microscope, t: "IP Engineering", d: "Translating research into market dominance." }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 md:gap-10 group">
                   <div className="w-14 h-14 md:w-16 md:h-16 bg-[#D4AF37]/10 border border-[#D4AF37]/20 rounded-2xl flex items-center justify-center text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-[#0F1419] transition-all duration-500 shrink-0">
                     <item.icon size={24} />
                   </div>
                   <div>
                     <h4 className="text-lg md:text-xl font-black italic uppercase tracking-tighter mb-2">{item.t}</h4>
                     <p className="text-sm md:text-base text-slate-500 font-medium italic max-w-xs">{item.d}</p>
                   </div>
                </div>
              ))}
            </div>
          </div>
        </aside>

        {/* RIGHT: ADMISSION TERMINAL */}
        <section className="lg:w-[55%] p-6 md:p-12 lg:p-24 flex flex-col justify-center items-center">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="w-full max-w-2xl">
            <div className="bg-white rounded-[3rem] md:rounded-[5rem] shadow-2xl p-8 md:p-16 border border-[#D4AF37]/10 relative overflow-hidden group">
              
              <div className="absolute top-0 left-0 w-full h-2 bg-slate-100">
                <motion.div animate={{ width: `${auditPercentage}%` }} className="h-full bg-[#D4AF37]" />
              </div>

              <div className="mb-12 md:mb-16 text-center">
                 <Dna className="text-[#D4AF37] mx-auto mb-6 md:mb-8 animate-pulse" size={42} />
                 <h3 className="text-4xl md:text-5xl font-black italic tracking-tighter uppercase mb-4 text-[#0F1419]">Council Intake</h3>
                 <p className="text-slate-400 font-black uppercase tracking-widest text-[10px] md:text-xs italic opacity-60">Phase 01: Institutional Vetting</p>
              </div>

              <form onSubmit={(e) => { e.preventDefault(); initiateCouncilHandshake(); }} className="space-y-8 md:space-y-10">
                <div className="grid md:grid-cols-2 gap-6">
                  <MentorInput label="Identity" icon={User} placeholder="Full Legal Name" />
                  <MentorInput label="Institutional Node" icon={AtSign} placeholder="executive@corp.com" />
                </div>
                
                <div className="space-y-6">
                  <p className="text-[9px] md:text-[10px] font-black text-slate-400 uppercase tracking-[0.4em] italic ml-4">Tenure Node (Experience Level)</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    {EXPERIENCE_MATRIX.map(node => (
                      <button 
                        key={node.level} type="button" 
                        onClick={() => setMentorNode({...mentorNode, tenure: node.level})}
                        className={`p-5 md:p-6 rounded-3xl border-2 transition-all duration-500 text-left ${
                          mentorNode.tenure === node.level ? "bg-[#0F1419] text-[#D4AF37] border-[#0F1419] shadow-lg" : "bg-white text-slate-400 border-slate-100 hover:border-[#D4AF37]/50"
                        }`}
                      >
                        <p className="text-[11px] md:text-[12px] font-black uppercase tracking-widest italic mb-2">{node.level.replace('_', ' ')}</p>
                        <p className="text-[8px] md:text-[9px] font-bold opacity-60 uppercase tracking-tighter leading-tight">{node.label}</p>
                      </button>
                    ))}
                  </div>
                </div>

                <AnimatePresence>
                  {activeHandshake && (
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="p-8 md:p-10 bg-[#0F1419] rounded-[2.5rem] md:rounded-[3rem] text-[#D4AF37] border border-[#D4AF37]/20 relative overflow-hidden">
                       <div className="flex justify-between items-center mb-6 relative z-10">
                          <div className="flex items-center gap-4">
                             <Cpu className="animate-spin text-[#D4AF37]" size={20} />
                             <span className="text-[9px] font-black uppercase tracking-[0.3em]">Credential_Handshake_Active</span>
                          </div>
                          <span className="text-2xl font-black font-mono">{auditPercentage}%</span>
                       </div>
                       <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                          <motion.div style={{ width: `${auditPercentage}%` }} className="h-full bg-[#D4AF37] shadow-[0_0_10px_#D4AF37]" />
                       </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <button type="submit" disabled={activeHandshake} className="w-full py-8 md:py-10 bg-[#0F1419] text-[#D4AF37] rounded-full font-black uppercase tracking-[0.5em] md:tracking-[0.6em] italic text-[10px] md:text-xs shadow-xl hover:bg-[#D4AF37] hover:text-[#0F1419] transition-all disabled:opacity-50 group">
                  Submit to Alpha Council <ChevronRight size={18} className="inline group-hover:translate-x-2 transition-transform duration-500" />
                </button>
              </form>
            </div>
          </motion.div>
        </section>
      </main>

      {/* --- III. FOOTER --- */}
      <footer className="p-10 bg-white border-t border-slate-100 flex flex-col md:flex-row justify-between items-center px-6 md:px-20 gap-6 md:gap-0 opacity-40">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-[#0F1419] rounded-xl flex items-center justify-center text-[#D4AF37] font-black italic">U</div>
          <p className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.5em] italic">Venture OS © 2026</p>
        </div>
        <div className="flex gap-8 text-[8px] md:text-[9px] font-black uppercase tracking-[0.4em] italic text-slate-500">
          <span>Sync: ADVISORY_ALPHA</span>
          <span>Node: INDIA_SOUTH</span>
        </div>
      </footer>
    </div>
  );
}

const MentorInput = ({ label, icon: Icon, placeholder }) => (
  <div className="space-y-4">
    <label className="text-[9px] md:text-[10px] font-black text-[#D4AF37] uppercase tracking-[0.3em] md:tracking-[0.4em] italic ml-4">{label}</label>
    <div className="relative group">
      <div className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-[#D4AF37] transition-colors duration-500"><Icon size={18} /></div>
      <input className="w-full bg-[#FDF9F3] rounded-[1.8rem] py-5 md:py-6 pl-16 pr-6 transition-all outline-none font-bold text-sm shadow-inner italic border-transparent focus:bg-white focus:ring-2 focus:ring-[#D4AF37]" placeholder={placeholder} />
    </div>
  </div>
);