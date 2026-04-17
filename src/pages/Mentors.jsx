/** * =============================================================================
 * UDAARO ADVISORY NODE: THE SOVEREIGN MENTORSHIP GATEWAY v4.0.0
 * -----------------------------------------------------------------------------
 * CORE LOGIC: Institutional Advisory & IP Synthesis
 * ARCHITECT: Apurva Priyadarshi (Batch 2026)
 * MODULE: Mentor Onboarding & Council Vetting
 * ============================================================================= */

import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ShieldCheck, Globe, Users, Award, Lightbulb, Dna, Target, BrainCircuit,
  Fingerprint, Cpu, CheckCircle, ShieldAlert, AtSign, User, Zap, Lock,
  FileBadge, Landmark, Microscope, Binary, History, Layers
} from "lucide-react";

/** * =============================================================================
 * V. RESONANCE LOGIC: MENTOR-FOUNDER SYNERGY
 * ============================================================================= */

const calculateAdvisoryResonance = (tenure, phase) => {
  // Logic to determine structural impact on startup lifecycle
  const tenureWeights = { Growth_Expert: 1.2, Executive_Node: 1.8, Board_Veteran: 2.5 };
  return (tenureWeights[tenure] || 1.0) * (phase === 'Validation' ? 0.8 : 1.5);
};

/** * =============================================================================
 * VI. EXTENDED UI: THE ADVISORY COMMAND TERMINAL
 * ============================================================================= */

export default function AdvisoryTerminal() {
  const [activeHandshake, setActiveHandshake] = useState(false);
  const [auditPercentage, setAuditPercentage] = useState(0);
  const [mentorNode, setMentorNode] = useState({
    identity: "", terminal: "", tenure: "Industry_Lead", phase: "MVP_Sync"
  });

  // --- COUNCIL HANDSHAKE ---
  const initiateCouncilHandshake = useCallback(() => {
    setActiveHandshake(true);
    let auditTick = 0;
    const coreAudit = setInterval(() => {
      auditTick += Math.floor(Math.random() * 3) + 1;
      if (auditTick >= 100) {
        setAuditPercentage(100);
        clearInterval(coreAudit);
      } else {
        setAuditPercentage(auditTick);
      }
    }, 40);
  }, []);

  return (
    <div className="min-h-screen bg-[#FDF9F3] flex flex-col font-serif selection:bg-[#D4AF37]">
      
      {/* INSTITUTIONAL JALI OVERLAY */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.04] z-0">
        <svg width="100%" height="100%"><pattern id="jali-pattern" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse"><path d="M60 0 L120 60 L60 120 L0 60 Z" fill="none" stroke="black" strokeWidth="1" /></pattern><rect width="100%" height="100%" fill="url(#jali-pattern)" /></svg>
      </div>

      {/* --- I. NAVIGATION PORTICO --- */}
      <nav className="p-12 sticky top-0 z-[100] bg-white/70 backdrop-blur-2xl border-b border-[#D4AF37]/10 flex justify-between items-center px-20">
        <div className="flex items-center gap-6">
          <div className="w-14 h-14 bg-[#0F1419] rounded-2xl flex items-center justify-center text-[#D4AF37] font-black italic text-2xl border border-[#D4AF37]/30">U</div>
          <div className="flex flex-col">
            <h1 className="text-2xl font-black text-[#0F1419] tracking-tighter uppercase italic leading-none">Udaaro Advisory</h1>
            <span className="text-[10px] font-black text-[#D4AF37] uppercase tracking-[0.5em] mt-2 italic">Council_Onboarding_v4.0</span>
          </div>
        </div>
        <div className="flex items-center gap-10">
          <div className="px-6 py-2.5 bg-[#0F1419] rounded-2xl flex items-center gap-4 shadow-xl">
             <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse shadow-[0_0_10px_#3b82f6]" />
             <span className="text-[9px] font-black text-[#D4AF37] uppercase tracking-widest italic leading-none">Status: COUNCIL_SYNC</span>
          </div>
          <ShieldCheck className="text-[#0F1419]" size={24} />
        </div>
      </nav>

      {/* --- II. MAIN DUAL-PANE WORKSPACE --- */}
      <main className="flex-1 flex flex-col lg:flex-row relative z-10">
        
        {/* LEFT: THE IMPERIAL ADVISORY DOSSIER */}
        <aside className="lg:w-[45%] bg-[#0F1419] p-16 lg:p-32 text-white flex flex-col justify-between overflow-hidden">
          <div className="relative z-10">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="flex items-center gap-6 mb-12">
               <div className="h-[1px] w-20 bg-[#D4AF37]" />
               <span className="text-[10px] font-black text-[#D4AF37] uppercase tracking-[0.6em] italic">Architectural Tenure</span>
            </motion.div>
            
            <h2 className="text-6xl md:text-[9rem] font-black italic tracking-tighter uppercase leading-[0.85] mb-12 text-[#D4AF37]">
              Engineer <br /> <span className="text-white">Success.</span>
            </h2>
            
            <p className="text-2xl text-slate-400 font-medium italic leading-relaxed max-w-lg mb-24">
              Join the Alpha Council. Synchronize your industrial wisdom with the <span className="text-white font-black underline decoration-[#D4AF37] decoration-8 underline-offset-8 uppercase">Venture OS</span> to build high-resilience startups.
            </p>

            <div className="space-y-12">
              {[
                { icon: BrainCircuit, t: "Logic Synthesis", d: "Auditing founder moats and structural failure points." },
                { icon: History, t: "Legacy Governance", d: "Instilling generational discipline into early-stage units." },
                { icon: Microscope, t: "IP Engineering", d: "Translating deep-tech research into global market dominance." }
              ].map((item, i) => (
                <div key={i} className="flex gap-10 group">
                   <div className="w-16 h-16 bg-[#D4AF37]/10 border border-[#D4AF37]/20 rounded-3xl flex items-center justify-center text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-[#0F1419] transition-all duration-700">
                     <item.icon size={28} />
                   </div>
                   <div>
                     <h4 className="text-xl font-black italic uppercase tracking-tighter mb-2">{item.t}</h4>
                     <p className="text-slate-500 font-medium italic max-w-xs">{item.d}</p>
                   </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-24 pt-12 border-t border-white/10 flex justify-between items-end opacity-40 italic">
            <p className="text-[9px] font-black uppercase tracking-[0.5em]">System_Architect: Apurva Priyadarshi</p>
            <p className="text-[9px] font-black uppercase tracking-[0.5em]">Node: ADVISORY_INDIA</p>
          </div>
        </aside>

        {/* RIGHT: THE ADVISORY ADMISSION TERMINAL */}
        <section className="lg:w-[55%] p-10 lg:p-32 flex flex-col justify-center items-center">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="w-full max-w-3xl">
            <div className="bg-white rounded-[5rem] shadow-7xl p-16 border border-[#D4AF37]/10 relative overflow-hidden group">
              
              {/* Vetting Bar */}
              <div className="absolute top-0 left-0 w-full h-2 bg-slate-100">
                <motion.div animate={{ width: `${auditPercentage}%` }} className="h-full bg-[#D4AF37] shadow-[0_0_20px_#D4AF37]" />
              </div>

              <div className="mb-20 text-center">
                 <Dna className="text-[#D4AF37] mx-auto mb-8 animate-pulse" size={48} />
                 <h3 className="text-6xl font-black italic tracking-tighter uppercase mb-4 text-[#0F1419]">Council Intake</h3>
                 <p className="text-slate-400 font-black uppercase tracking-widest text-sm italic opacity-60">Phase 01: Institutional Vetting</p>
              </div>

              <form onSubmit={(e) => { e.preventDefault(); initiateCouncilHandshake(); }} className="space-y-12">
                <div className="grid md:grid-cols-2 gap-8">
                  <MentorInput label="Identity" icon={User} placeholder="Full Legal Name" />
                  <MentorInput label="Institutional Node" icon={AtSign} placeholder="executive@corp.com" />
                </div>
                
                <div className="space-y-6">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.5em] italic ml-4">Tenure Node (Experience Level)</p>
                  <div className="grid md:grid-cols-2 gap-6">
                    {EXPERIENCE_MATRIX.map(node => (
                      <button 
                        key={node.level} type="button" 
                        onClick={() => setMentorNode({...mentorNode, tenure: node.level})}
                        className={`p-6 rounded-[2rem] border-2 transition-all duration-500 text-left ${
                          mentorNode.tenure === node.level ? "bg-[#0F1419] text-[#D4AF37] border-[#0F1419] shadow-6xl" : "bg-white text-slate-400 border-slate-100 hover:border-[#D4AF37]/50"
                        }`}
                      >
                        <p className="text-[12px] font-black uppercase tracking-widest italic mb-2">{node.level.replace('_', ' ')}</p>
                        <p className="text-[9px] font-bold opacity-60 uppercase tracking-tighter">{node.label}</p>
                      </button>
                    ))}
                  </div>
                </div>

                <AnimatePresence>
                  {activeHandshake && (
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="p-10 bg-[#0F1419] rounded-[3rem] text-[#D4AF37] border border-[#D4AF37]/20 shadow-7xl relative overflow-hidden">
                       <div className="flex justify-between items-center mb-8 relative z-10">
                          <div className="flex items-center gap-5">
                             <Cpu className="animate-spin" size={24} />
                             <span className="text-[10px] font-black uppercase tracking-[0.4em]">Credential_Handshake_Active</span>
                          </div>
                          <span className="text-3xl font-black font-mono">{auditPercentage}%</span>
                       </div>
                       <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden mb-6">
                          <motion.div animate={{ width: `${auditPercentage}%` }} className="h-full bg-[#D4AF37] shadow-[0_0_10px_#D4AF37]" />
                       </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <button type="submit" className="w-full py-10 bg-[#0F1419] text-[#D4AF37] rounded-full font-black uppercase tracking-[0.6em] italic text-xs shadow-7xl hover:bg-[#D4AF37] hover:text-[#0F1419] transition-all active:scale-95 group">
                  Submit to Alpha Council <ChevronRight size={20} className="inline group-hover:translate-x-3 transition-transform duration-500" />
                </button>
              </form>
            </div>
          </motion.div>
        </section>
      </main>

      {/* --- III. TELEMETRY FOOTER --- */}
      <footer className="p-12 bg-white border-t border-slate-100 flex flex-col md:flex-row justify-between items-center px-20 opacity-40">
        <div className="flex items-center gap-6">
          <div className="w-10 h-10 bg-[#0F1419] rounded-xl flex items-center justify-center font-black italic text-[#D4AF37]">U</div>
          <p className="text-[10px] font-black uppercase tracking-[0.5em] italic">Venture Operating System © 2026</p>
        </div>
        <div className="flex gap-10 text-[9px] font-black uppercase tracking-[0.4em] italic leading-none">
          <div className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse" /> Grid_Sync: ADVISORY_ALPHA</div>
          <span>Handshake: SHA_512</span>
          <span>Arch: NEO_IMPERIAL</span>
        </div>
      </footer>
    </div>
  );
}

const MentorInput = ({ label, icon: Icon, placeholder }) => (
  <div className="space-y-4 group">
    <label className="text-[10px] font-black text-[#D4AF37] uppercase tracking-[0.4em] italic ml-4">{label}</label>
    <div className="relative">
      <div className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-[#D4AF37] transition-colors duration-500"><Icon size={18} /></div>
      <input className="w-full bg-[#FDF9F3] border-0 ring-1 ring-slate-100 focus:ring-2 focus:ring-[#D4AF37] focus:bg-white rounded-[1.8rem] py-6 pl-16 pr-6 transition-all outline-none font-bold text-sm shadow-inner italic" placeholder={placeholder} />
    </div>
  </div>
);