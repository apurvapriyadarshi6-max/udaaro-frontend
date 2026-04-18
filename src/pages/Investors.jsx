import React, { useState, useEffect, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ShieldCheck, User, ChevronRight, Zap, Key, AtSign, Building, Cpu, Binary, Landmark, Target
} from "lucide-react";

// --- SYSTEM CONSTANTS ---
const CAPITAL_ALLOCATION_NODES = [
  { value: "Seed_Logic", label: "Structural Validation & MVP Resonance" },
  { value: "Series_Alpha", label: "Institutional Scaling & Ascension Grid" },
  { value: "Sovereign_Growth", label: "Independent Ecosystem Dominance" },
  { value: "Syndicate_Node", label: "Co-investment & Peer Cluster Sync" }
];

/** * FINANCIAL GOVERNANCE UTILS */
const calculateEcosystemResonance = (ticket, stage) => {
  const baseWeight = ticket.includes('Cr') ? 0.85 : 0.45;
  const stageMultiplier = stage === 'Seed_Logic' ? 1.2 : 0.95;
  return (baseWeight * stageMultiplier * 100).toFixed(2);
};

export default function SyndicateTerminal() {
  const [activeHandshake, setActiveHandshake] = useState(false);
  const [syncPercentage, setSyncPercentage] = useState(0);
  const [investorData, setInvestorData] = useState({
    identity: "", terminal: "", organization: "", node: "Seed_Logic", ticket: ""
  });

  // --- HANDSHAKE EXECUTION ---
  const initiateInstitutionalSync = useCallback(() => {
    if (activeHandshake) return; // Prevent double trigger
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

    return () => clearInterval(coreSync);
  }, [activeHandshake]);

  return (
    <div className="min-h-screen bg-[#FDFDFE] flex flex-col font-sans selection:bg-indigo-600 overflow-x-hidden">
      
      {/* IMPERIAL OVERLAY GRID */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.02] z-0">
        <svg width="100%" height="100%" aria-hidden="true">
          <pattern id="syndicate-grid" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <path d="M 100 0 L 0 0 0 100" fill="none" stroke="currentColor" strokeWidth="1"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#syndicate-grid)" />
        </svg>
      </div>

      {/* --- I. NAVIGATION --- */}
      <nav className="p-6 md:p-10 sticky top-0 z-[100] bg-white/70 backdrop-blur-2xl border-b border-slate-100 flex justify-between items-center px-6 md:px-20">
        <div className="flex items-center gap-6">
          <div className="w-12 h-12 md:w-14 md:h-14 bg-[#0F1419] rounded-2xl flex items-center justify-center text-[#D4AF37] font-black italic text-xl md:text-2xl border border-[#D4AF37]/30">U</div>
          <div className="flex flex-col">
            <h1 className="text-xl md:text-2xl font-black text-[#0F1419] tracking-tighter uppercase italic leading-none">Udaaro Syndicate</h1>
            <span className="text-[8px] md:text-[10px] font-black text-[#D4AF37] uppercase tracking-[0.5em] mt-2 italic">Capital_Matchmaking_v3.1</span>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-10">
          <div className="px-6 py-2 bg-slate-950 rounded-2xl flex items-center gap-4">
             <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
             <span className="text-[9px] font-black text-white uppercase tracking-widest italic">Grid: SECURE_ALPHA</span>
          </div>
          <Key className="text-[#0F1419]" size={20} />
        </div>
      </nav>

      {/* --- II. MAIN WORKSPACE --- */}
      <main className="flex-1 flex flex-col lg:flex-row relative z-10">
        
        {/* LEFT: BRAND DOSSIER */}
        <aside className="lg:w-[45%] bg-[#0F1419] p-12 lg:p-24 text-white flex flex-col justify-between overflow-hidden">
          <div className="relative z-10">
            <div className="flex items-center gap-6 mb-12">
               <div className="h-[1px] w-12 md:w-20 bg-[#D4AF37]" />
               <span className="text-[9px] md:text-[10px] font-black text-[#D4AF37] uppercase tracking-[0.6em] italic">Institutional Access</span>
            </div>
            
            <h2 className="text-5xl md:text-[8rem] font-black italic tracking-tighter uppercase leading-[0.85] mb-12">
              Sovereign <br /> <span className="text-[#D4AF37]">Liquidity.</span>
            </h2>
            
            <p className="text-lg md:text-2xl text-slate-400 font-medium italic leading-relaxed max-w-lg mb-16 md:mb-24">
              We align venture capital with structural execution logic. Invest in founders vetted by the <span className="text-white font-black underline decoration-[#D4AF37] decoration-8 underline-offset-8 uppercase">Venture OS</span> skeleton.
            </p>

            <div className="space-y-10 md:space-y-12">
              {[
                { icon: Landmark, t: "Capital Synthesis", d: "Deploying resources into repeatable systems." },
                { icon: ShieldCheck, t: "Radical Transparency", d: "Integrated data handshakes between nodes." },
                { icon: Target, t: "Sovereign Exit", d: "Engineering long-term institutional independence." }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 md:gap-10 group">
                   <div className="w-14 h-14 md:w-16 md:h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-[#0F1419] transition-all duration-500 shrink-0">
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
        <section className="lg:w-[55%] p-6 md:p-12 lg:p-24 flex flex-col items-center justify-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-2xl">
            <div className="bg-white rounded-[3rem] md:rounded-[5rem] shadow-2xl p-8 md:p-16 border border-slate-50 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-2 bg-slate-100">
                <motion.div style={{ width: `${syncPercentage}%` }} className="h-full bg-blue-600" />
              </div>

              <div className="mb-12 md:mb-16 text-center">
                 <Zap className="text-blue-600 mx-auto mb-6 md:mb-8 animate-pulse" size={42} />
                 <h3 className="text-4xl md:text-5xl font-black italic tracking-tighter uppercase mb-4 text-[#0F1419]">Admission Protocol</h3>
                 <p className="text-slate-400 font-black uppercase tracking-widest text-[10px] md:text-xs italic opacity-60">Phase 01: Syndicate Verification</p>
              </div>

              <form onSubmit={(e) => { e.preventDefault(); initiateInstitutionalSync(); }} className="space-y-8 md:space-y-10">
                <div className="grid md:grid-cols-2 gap-6">
                  <InvestorInput label="Executive Identity" icon={User} placeholder="Full Legal Name" />
                  <InvestorInput label="Handshake Node" icon={AtSign} placeholder="hni@institution.com" />
                </div>
                
                <InvestorInput label="Managing Entity" icon={Building} placeholder="Firm / Organization Identity" />

                <div className="space-y-6">
                  <p className="text-[9px] md:text-[10px] font-black text-slate-400 uppercase tracking-[0.4em] italic ml-4">Deployment Node (Risk Tier)</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    {CAPITAL_ALLOCATION_NODES.map(node => (
                      <button 
                        key={node.value} type="button" 
                        onClick={() => setInvestorData({...investorData, node: node.value})}
                        className={`p-5 md:p-6 rounded-3xl border-2 transition-all duration-500 text-left ${
                          investorData.node === node.value ? "bg-[#0F1419] text-[#D4AF37] border-[#0F1419] shadow-lg" : "bg-white text-slate-400 border-slate-100 hover:border-blue-200"
                        }`}
                      >
                        <p className="text-[11px] md:text-[12px] font-black uppercase tracking-widest italic mb-2">{node.value.replace('_', ' ')}</p>
                        <p className="text-[8px] md:text-[9px] font-bold opacity-60 uppercase tracking-tighter leading-tight">{node.label}</p>
                      </button>
                    ))}
                  </div>
                </div>

                <AnimatePresence>
                  {activeHandshake && (
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="p-8 md:p-10 bg-[#0F1419] rounded-[2.5rem] md:rounded-[3rem] text-[#D4AF37] border border-[#D4AF37]/20 relative overflow-hidden">
                       <div className="absolute top-0 right-0 p-8 opacity-5"><Binary size={150} /></div>
                       <div className="flex justify-between items-center mb-6 relative z-10">
                          <div className="flex items-center gap-4">
                             <Cpu className="animate-spin" size={20} />
                             <span className="text-[9px] font-black uppercase tracking-[0.3em]">Handshake_Sync</span>
                          </div>
                          <span className="text-2xl font-black font-mono">{syncPercentage}%</span>
                       </div>
                       <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden mb-4">
                          <motion.div style={{ width: `${syncPercentage}%` }} className="h-full bg-[#D4AF37] shadow-[0_0_10px_#D4AF37]" />
                       </div>
                       <p className="text-[8px] font-bold uppercase tracking-widest opacity-60 italic text-white">Authenticating with Global_Sync_India...</p>
                    </motion.div>
                  )}
                </AnimatePresence>

                <button type="submit" disabled={activeHandshake} className="w-full py-8 md:py-10 bg-slate-950 text-white rounded-full font-black uppercase tracking-[0.4em] md:tracking-[0.6em] italic text-[10px] md:text-xs shadow-xl hover:bg-blue-600 transition-all active:scale-95 group disabled:opacity-50">
                  Initialize Handshake <ChevronRight size={18} className="inline group-hover:translate-x-2 transition-transform duration-500" />
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
          <span>Grid: SECURE</span>
          <span>Node: APAC_NORTH</span>
        </div>
      </footer>
    </div>
  );
}

const InvestorInput = ({ label, icon: Icon, placeholder }) => (
  <div className="space-y-4">
    <label className="text-[9px] md:text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] md:tracking-[0.4em] italic ml-4">{label}</label>
    <div className="relative group">
      <div className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-blue-600 transition-colors duration-500"><Icon size={18} /></div>
      <input className="w-full bg-slate-50 rounded-[1.8rem] py-5 md:py-6 pl-16 pr-6 transition-all outline-none font-bold text-sm shadow-inner italic border-transparent focus:bg-white focus:ring-2 focus:ring-blue-600" placeholder={placeholder} />
    </div>
  </div>
);