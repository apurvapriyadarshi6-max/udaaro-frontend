/** * =============================================================================
 * UDAARO SYNDICATE SYNC: INSTITUTIONAL CAPITAL GATEWAY v3.1.0
 * -----------------------------------------------------------------------------
 * CORE LOGIC: Venture Operating System (VOS) Financial Engineering
 * ARCHITECT: Apurva Priyadarshi (Batch 2026)
 * MODULE: Capital Allocation & Syndicate Onboarding
 * ============================================================================= */

import React, { useState, useEffect, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ShieldCheck, Globe2, Briefcase, Mail, User, Compass, Layers, Banknote,
  ChevronRight, ArrowLeft, Crown, Lock, Zap, Fingerprint, TrendingUp, Award,
  Activity, Cpu, Eye, Network, Scale, PieChart, BarChart3, Target, IndianRupee,
  ShieldAlert, AlertCircle, FileText, Workflow, CheckCircle2, Server, Key,
  Binary, Database, Search, HardDrive, MessageSquare, Globe, AtSign, Building,
  Landmark, ShieldQuestion, Terminal, Dna, Microscope, FileCode, Box, CpuIcon
} from "lucide-react";

/** * =============================================================================
 * V. FINANCIAL GOVERNANCE UTILS (THE ARCHITECT'S LOGIC)
 * ============================================================================= */

const calculateEcosystemResonance = (ticket, stage) => {
  // Proprietary algorithm for capital-to-infra alignment
  const baseWeight = ticket.includes('Cr') ? 0.85 : 0.45;
  const stageMultiplier = stage === 'Seed_Logic' ? 1.2 : 0.95;
  return (baseWeight * stageMultiplier * 100).toFixed(2);
};

/** * =============================================================================
 * VI. EXTENDED UI: THE SYNDICATE TERMINAL
 * ============================================================================= */

export default function SyndicateTerminal() {
  const [activeHandshake, setActiveHandshake] = useState(false);
  const [syncPercentage, setSyncPercentage] = useState(0);
  const [investorData, setInvestorData] = useState({
    identity: "", terminal: "", organization: "", node: "Seed_Logic", ticket: ""
  });

  // --- HANDSHAKE EXECUTION ---
  const initiateInstitutionalSync = useCallback(() => {
    setActiveHandshake(true);
    let progressNode = 0;
    const coreSync = setInterval(() => {
      progressNode += Math.floor(Math.random() * 4) + 1;
      if (progressNode >= 100) {
        setSyncPercentage(100);
        clearInterval(coreSync);
      } else {
        setSyncPercentage(progressNode);
      }
    }, 45);
  }, []);

  return (
    <div className="min-h-screen bg-[#FDFDFE] flex flex-col font-sans selection:bg-indigo-600">
      
      {/* IMPERIAL OVERLAY GRID */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.02] z-0">
        <svg width="100%" height="100%"><pattern id="syndicate-grid" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse"><path d="M 100 0 L 0 0 0 100" fill="none" stroke="currentColor" strokeWidth="1"/></pattern><rect width="100%" height="100%" fill="url(#syndicate-grid)" /></svg>
      </div>

      {/* --- I. NAVIGATION PORTICO --- */}
      <nav className="p-12 sticky top-0 z-[100] bg-white/60 backdrop-blur-3xl border-b border-slate-100 flex justify-between items-center px-20">
        <div className="flex items-center gap-6">
          <div className="w-14 h-14 bg-[#0F1419] rounded-2xl flex items-center justify-center text-[#D4AF37] font-black italic text-2xl border border-[#D4AF37]/30">U</div>
          <div className="flex flex-col">
            <h1 className="text-2xl font-black text-[#0F1419] tracking-tighter uppercase italic leading-none">Udaaro Syndicate</h1>
            <span className="text-[10px] font-black text-[#D4AF37] uppercase tracking-[0.5em] mt-2 italic">Capital_Matchmaking_v3.1</span>
          </div>
        </div>
        <div className="flex items-center gap-10">
          <div className="px-6 py-2.5 bg-slate-950 rounded-2xl flex items-center gap-4 shadow-xl">
             <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_#10b981]" />
             <span className="text-[9px] font-black text-white uppercase tracking-widest italic leading-none">Grid: SECURE_ALPHA</span>
          </div>
          <Key className="text-[#0F1419]" size={24} />
        </div>
      </nav>

      {/* --- II. MAIN DUAL-PANE WORKSPACE --- */}
      <main className="flex-1 flex flex-col lg:flex-row relative z-10">
        
        {/* LEFT: THE SOVEREIGN BRAND DOSSIER */}
        <aside className="lg:w-[45%] bg-[#0F1419] p-16 lg:p-32 text-white flex flex-col justify-between overflow-hidden">
          <div className="relative z-10">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="flex items-center gap-6 mb-12">
               <div className="h-[1px] w-20 bg-[#D4AF37]" />
               <span className="text-[10px] font-black text-[#D4AF37] uppercase tracking-[0.6em] italic">Institutional Access</span>
            </motion.div>
            
            <h2 className="text-6xl md:text-[9rem] font-black italic tracking-tighter uppercase leading-[0.85] mb-12">
              Sovereign <br /> <span className="text-[#D4AF37]">Liquidity.</span>
            </h2>
            
            <p className="text-2xl text-slate-400 font-medium italic leading-relaxed max-w-lg mb-24">
              We align venture capital with structural execution logic. Invest in founders vetted by the <span className="text-white font-black underline decoration-[#D4AF37] decoration-8 underline-offset-8 uppercase">Venture OS</span> skeletal framework.
            </p>

            <div className="space-y-12">
              {[
                { icon: Landmark, t: "Capital Synthesis", d: "Deploying resources into repeatable systems, not fragmented hype." },
                { icon: ShieldCheck, t: "Radical Transparency", d: "Integrated data handshakes between syndicate nodes and founder units." },
                { icon: Target, t: "Sovereign Exit", d: "Engineering long-term institutional independence for portfolio companies." }
              ].map((item, i) => (
                <div key={i} className="flex gap-10 group">
                   <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-3xl flex items-center justify-center text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-[#0F1419] transition-all duration-700">
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

          <div className="mt-24 pt-12 border-t border-white/5 flex justify-between items-end opacity-40 italic">
            <p className="text-[9px] font-black uppercase tracking-[0.5em]">System_Architect: Apurva Priyadarshi</p>
            <p className="text-[9px] font-black uppercase tracking-[0.5em]">Node: INDIA_ALPHA_GRID</p>
          </div>
        </aside>

        {/* RIGHT: THE SYNDICATE ADMISSION TERMINAL */}
        <section className="lg:w-[55%] p-10 lg:p-32 flex flex-col items-center justify-center">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="w-full max-w-3xl">
            <div className="bg-white rounded-[5rem] shadow-7xl p-16 border border-slate-50 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-2 bg-slate-100">
                <motion.div animate={{ width: `${syncPercentage}%` }} className="h-full bg-blue-600 shadow-[0_0_15px_blue]" />
              </div>

              <div className="mb-20 text-center">
                 <Zap className="text-blue-600 mx-auto mb-8 animate-pulse" size={48} />
                 <h3 className="text-6xl font-black italic tracking-tighter uppercase mb-4 text-[#0F1419]">Admission Protocol</h3>
                 <p className="text-slate-400 font-black uppercase tracking-widest text-sm italic opacity-60">Phase 01: Syndicate Verification</p>
              </div>

              <form onSubmit={(e) => { e.preventDefault(); initiateInstitutionalSync(); }} className="space-y-12">
                <div className="grid md:grid-cols-2 gap-8">
                  <InvestorInput label="Executive Identity" icon={User} placeholder="Full Legal Name" />
                  <InvestorInput label="Handshake Node" icon={AtSign} placeholder="hni@institution.com" />
                </div>
                
                <InvestorInput label="Managing Entity" icon={Building} placeholder="Firm / Organization Identity" />

                <div className="space-y-6">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.5em] italic ml-4">Deployment Node (Risk Tier)</p>
                  <div className="grid md:grid-cols-2 gap-6">
                    {CAPITAL_ALLOCATION_NODES.map(node => (
                      <button 
                        key={node.value} type="button" 
                        onClick={() => setInvestorData({...investorData, node: node.value})}
                        className={`p-6 rounded-[2rem] border-2 transition-all duration-500 text-left ${
                          investorData.node === node.value ? "bg-[#0F1419] text-[#D4AF37] border-[#0F1419] shadow-6xl" : "bg-white text-slate-400 border-slate-100 hover:border-blue-200"
                        }`}
                      >
                        <p className="text-[12px] font-black uppercase tracking-widest italic mb-2">{node.value.replace('_', ' ')}</p>
                        <p className="text-[9px] font-bold opacity-60 uppercase tracking-tighter">{node.label}</p>
                      </button>
                    ))}
                  </div>
                </div>

                <AnimatePresence>
                  {activeHandshake && (
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="p-10 bg-[#0F1419] rounded-[3rem] text-[#D4AF37] border border-[#D4AF37]/20 shadow-7xl relative overflow-hidden">
                       <div className="absolute top-0 right-0 p-10 opacity-5"><Binary size={200} /></div>
                       <div className="flex justify-between items-center mb-8 relative z-10">
                          <div className="flex items-center gap-5">
                             <Cpu className="animate-spin" size={24} />
                             <span className="text-[10px] font-black uppercase tracking-[0.4em]">Logic_Verification_Sync</span>
                          </div>
                          <span className="text-3xl font-black font-mono">{syncPercentage}%</span>
                       </div>
                       <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden mb-6">
                          <motion.div animate={{ width: `${syncPercentage}%` }} className="h-full bg-[#D4AF37] shadow-[0_0_10px_#D4AF37]" />
                       </div>
                       <p className="text-[9px] font-bold uppercase tracking-widest opacity-60 italic text-white">Authenticating with Grid_Node_India...</p>
                    </motion.div>
                  )}
                </AnimatePresence>

                <button type="submit" className="w-full py-10 bg-slate-950 text-white rounded-full font-black uppercase tracking-[0.6em] italic text-xs shadow-7xl hover:bg-blue-600 transition-all active:scale-95 group">
                  Initialize Handshake <ChevronRight size={20} className="inline group-hover:translate-x-3 transition-transform duration-500" />
                </button>
              </form>

              <div className="mt-20 pt-10 border-t border-slate-50 text-center opacity-30">
                <p className="text-[9px] font-black uppercase tracking-[0.8em] italic leading-relaxed">Udaaro Syndicate Network v3.1.0 <br /> RADICAL_TRANSPARENCY_NODE_ENFORCED</p>
              </div>
            </div>
          </motion.div>
        </section>
      </main>

      {/* --- III. TELEMETRY FOOTER --- */}
      <footer className="p-12 bg-white border-t border-slate-100 flex flex-col md:flex-row justify-between items-center px-20 opacity-40">
        <div className="flex items-center gap-6">
          <div className="w-10 h-10 bg-[#0F1419] rounded-xl flex items-center justify-center font-black italic text-white border border-white/10">U</div>
          <p className="text-[10px] font-black uppercase tracking-[0.5em] italic">Venture Operating System © 2026</p>
        </div>
        <div className="flex gap-10 text-[9px] font-black uppercase tracking-[0.4em] italic leading-none">
          <div className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" /> Grid_Health: Stable</div>
          <span>Security: AES_256</span>
          <span>Node: APAC_NORTH</span>
        </div>
      </footer>
    </div>
  );
}

const InvestorInput = ({ label, icon: Icon, placeholder }) => (
  <div className="space-y-4">
    <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em] italic ml-4">{label}</label>
    <div className="relative group">
      <div className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-blue-600 transition-colors duration-500"><Icon size={18} /></div>
      <input className="w-full bg-slate-50 border-0 ring-1 ring-slate-200 focus:ring-2 focus:ring-blue-600 focus:bg-white rounded-[1.8rem] py-6 pl-16 pr-6 transition-all outline-none font-bold text-sm shadow-inner italic" placeholder={placeholder} />
    </div>
  </div>
);