import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ShieldCheck, Download, AlertTriangle, CheckCircle2, 
  Target, IndianRupee, Zap, BarChart3, Microscope, Globe, UserCircle 
} from "lucide-react";
import { 
  AreaChart, Area, Tooltip, ResponsiveContainer, 
  PieChart, Pie, Cell 
} from "recharts";

// --- SYSTEM CONSTANTS ---
const TYPOGRAPHY = {
  mono: "font-mono uppercase tracking-[0.4em] text-[9px] font-black",
  display: "font-serif italic tracking-tighter"
};

/** * IV. ADVANCED ANALYTICS ENGINE
 * Optimized for dynamic data scaling
 */
const EcosystemAnalytics = ({ data }) => {
  // Memoizing data to prevent unnecessary chart re-renders
  const pieData = useMemo(() => [
    { name: 'Founders', value: data?.founders?.length || 0, color: '#D4AF37' },
    { name: 'Investors', value: data?.investors?.length || 0, color: '#1D4ED8' },
    { name: 'Mentors', value: data?.mentors?.length || 0, color: '#10B981' },
  ], [data]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-12">
      <div className="lg:col-span-4 bg-white p-10 md:p-12 rounded-[3rem] md:rounded-[4rem] border border-slate-100 shadow-xl relative overflow-hidden group">
        <h4 className={`${TYPOGRAPHY.mono} text-[#D4AF37] mb-8`}>Node_Density_Distribution</h4>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={pieData}
                innerRadius={70}
                outerRadius={100}
                paddingAngle={8}
                dataKey="value"
                stroke="none"
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ borderRadius: '24px', background: '#0F1419', border: 'none', color: '#fff' }}
                itemStyle={{ color: '#D4AF37', fontWeight: 'bold', fontSize: '12px' }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-4 md:gap-6">
          {pieData.map(d => (
            <div key={d.name} className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: d.color }} />
              <span className="text-[9px] font-black uppercase tracking-widest">{d.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="lg:col-span-8 bg-[#0F1419] p-8 md:p-12 rounded-[3rem] md:rounded-[4rem] shadow-2xl relative border border-[#D4AF37]/20">
        <div className="flex justify-between items-center mb-10">
          <h4 className={`${TYPOGRAPHY.mono} text-[#D4AF37]`}>Global_Access_Ledger</h4>
          <div className="flex gap-4 items-center">
             <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
             <span className="text-[9px] font-mono text-emerald-500 font-bold uppercase tracking-widest">System_Healthy</span>
          </div>
        </div>
        <div className="space-y-4 max-h-[300px] overflow-y-auto pr-4 custom-scrollbar-dark font-mono text-[10px]">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="p-4 border-b border-white/5 flex flex-wrap gap-4 items-center text-slate-400 hover:text-white transition-colors">
              <span className="text-[#D4AF37] font-black">[{new Date().toLocaleTimeString()}]</span>
              <span className="text-white/40">NODE_AUTH:</span>
              <span className="italic">Cluster_India_Node_{100 + i}</span>
              <span className="ml-auto text-emerald-500 font-black tracking-widest">SYNC_OK</span>
            </div>
          ))}
          <div className="flex items-center gap-4 text-emerald-500 p-4 bg-emerald-500/5 rounded-2xl border border-emerald-500/10 mt-4">
            <CheckCircle2 size={14} />
            <span className="tracking-tighter">PROCESS_COMPLETE: ALL ASSETS ENCRYPTED TO VOS_CLOUD</span>
          </div>
        </div>
      </div>
    </div>
  );
};

/** * V. INSTITUTIONAL SYSTEM AUDIT
 */
const SystemAuditTrail = () => {
  const audits = [
    { event: "LoginHandshake", user: "Apurva_P", node: "INDIA_ALPHA", status: "Secure", time: "2 min ago" },
    { event: "DataErasure", user: "System_Bot", node: "DB_CLUSTER_09", status: "Warning", time: "15 min ago" },
    { event: "BatchAdmission", user: "Node_Vanguard", node: "FOUNDER_NODE", status: "Verified", time: "1 hour ago" },
  ];

  return (
    <div className="mt-12 bg-white rounded-[3rem] md:rounded-[4rem] p-8 md:p-12 border border-slate-100 shadow-xl">
      <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6">
        <div className="flex items-center gap-4">
          <ShieldCheck className="text-[#D4AF37]" size={28} />
          <h3 className="text-2xl md:text-3xl font-black italic uppercase tracking-tighter">Institutional_Audit</h3>
        </div>
        <button className="flex items-center gap-2 px-8 py-3 bg-[#FDF9F3] rounded-full text-[9px] font-black uppercase tracking-[0.2em] border border-slate-200 hover:border-[#D4AF37] hover:bg-white transition-all shadow-sm">
          <Download size={14} /> Export_Ledger
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {audits.map((a, i) => (
          <motion.div 
            key={i} 
            whileHover={{ y: -5 }}
            className="p-8 bg-slate-50 rounded-[2.5rem] border border-transparent hover:border-[#D4AF37]/20 transition-all flex flex-col justify-between h-64 group shadow-sm hover:shadow-md"
          >
            <div className="flex justify-between items-start">
              <div className={`p-3 rounded-xl ${a.status === 'Warning' ? 'bg-rose-50 text-rose-500' : 'bg-emerald-50 text-emerald-500'}`}>
                {a.status === 'Warning' ? <AlertTriangle size={18} /> : <CheckCircle2 size={18} />}
              </div>
              <span className="text-[9px] font-black text-slate-300 group-hover:text-[#D4AF37] transition-colors">{a.time}</span>
            </div>
            <div className="my-6">
              <p className="text-[10px] font-black uppercase tracking-widest text-[#D4AF37] mb-2">{a.event}</p>
              <p className="text-xl font-black italic tracking-tighter uppercase text-[#0F1419]">{a.user}</p>
            </div>
            <div className="flex justify-between items-center text-[9px] font-black text-slate-400 uppercase tracking-widest pt-4 border-t border-slate-100">
              <span>Node: {a.node}</span>
              <span className={`px-3 py-1 rounded-full border ${a.status === 'Warning' ? 'border-rose-200 text-rose-500' : 'border-emerald-200 text-emerald-500'}`}>{a.status}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

/** * VI. MASTER CONTROL HUB
 */
const ExtendedAdmin = ({ data = { founders: [], investors: [], mentors: [] }, chartData = [] }) => {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <div className="min-h-screen w-full bg-[#FDF9F3] flex font-serif text-[#0F1419] overflow-hidden relative">
      {/* 1. JALI BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] z-0">
        <svg width="100%" height="100%">
          <pattern id="jali-grid" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <path d="M50 0 L100 50 L50 100 L0 50 Z" fill="none" stroke="currentColor" strokeWidth="0.5" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#jali-grid)" />
        </svg>
      </div>

      {/* 2. MAIN WORKSPACE */}
      <main className="flex-1 flex flex-col h-screen overflow-y-auto relative z-10 custom-scrollbar">
        {/* NAV HEADER */}
        <header className="p-6 md:p-10 sticky top-0 z-[100] bg-white/70 backdrop-blur-3xl border-b border-[#D4AF37]/10 flex justify-between items-center px-6 md:px-16">
          <div className="flex flex-col">
            <h1 className="text-3xl md:text-5xl font-black italic tracking-tighter uppercase leading-none">Intelligence_Node</h1>
            <p className="text-[9px] md:text-[10px] font-black text-[#D4AF37] uppercase tracking-[0.5em] mt-3">Sovereign_OS v4.1.0 Alpha</p>
          </div>
          <div className="flex items-center gap-4 md:gap-8">
            <div className="hidden lg:flex items-center gap-4 bg-white border border-slate-200 px-6 py-3 rounded-2xl">
              <Globe size={16} className="text-[#D4AF37] animate-spin-slow" />
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Grid_Sync: GLOBAL_NORTH</span>
            </div>
            <div className="w-12 h-12 md:w-14 md:h-14 bg-[#0F1419] rounded-2xl border-2 border-[#D4AF37] flex items-center justify-center text-[#D4AF37] shadow-xl">
              <UserCircle size={24} md:size={28} />
            </div>
          </div>
        </header>

        {/* CONTENT VIEWPORT */}
        <div className="p-6 md:p-16 max-w-[1700px] mx-auto w-full space-y-12">
          
          {/* STATS TIER */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
            <StatCard label="Admission_Rate" value="1.2%" icon={<Target />} trend="+0.4%" />
            <StatCard label="Capital_Deployment" value="₹14.2Cr" icon={<IndianRupee />} trend="+22%" />
            <StatCard label="Node_Uptime" value="99.98%" icon={<Zap />} trend="STABLE" />
            <StatCard label="Audit_Integrity" value="Verified" icon={<ShieldCheck />} color="text-emerald-500" />
          </div>

          {/* MAIN DATA VIEW */}
          <AnimatePresence mode="wait">
            {activeTab === "dashboard" && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
                <div className="bg-white p-8 md:p-12 rounded-[3rem] md:rounded-[5rem] border border-slate-100 shadow-2xl h-[500px] md:h-[650px] relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-16 opacity-[0.02] group-hover:scale-110 transition-transform pointer-events-none">
                    <Microscope size={400} />
                  </div>
                  <div className="flex items-center gap-6 mb-12">
                    <BarChart3 className="text-[#D4AF37]" size={32} />
                    <h2 className="text-3xl md:text-4xl font-black italic uppercase tracking-tighter">Ecosystem_Velocity</h2>
                  </div>
                  <div className="h-[70%] md:h-[85%] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={chartData}>
                        <defs>
                          <linearGradient id="imperialGlow" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#D4AF37" stopOpacity={0.4}/>
                            <stop offset="95%" stopColor="#D4AF37" stopOpacity={0}/>
                          </linearGradient>
                        </defs>
                        <Tooltip contentStyle={{ background: '#0F1419', borderRadius: '20px', border: 'none' }} />
                        <Area type="monotone" dataKey="val" stroke="#D4AF37" strokeWidth={5} fill="url(#imperialGlow)" />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </div>
                <EcosystemAnalytics data={data} />
                <SystemAuditTrail />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* FOOTER */}
        <footer className="mt-auto p-12 bg-white/40 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center px-16 gap-6 opacity-60">
           <div className="flex items-center gap-6">
              <div className="w-10 h-10 bg-[#0F1419] rounded-xl flex items-center justify-center text-[#D4AF37] font-black italic">U</div>
              <span className="text-[9px] font-black uppercase tracking-[0.5em]">Global_Ventures_OS © 2026</span>
           </div>
           <div className="flex gap-6 md:gap-12 text-[8px] font-black uppercase tracking-widest">
              <span>Ledger: AES_256_SOVEREIGN</span>
              <span className="text-emerald-600">MASTER_SYNC_ACTIVE</span>
           </div>
        </footer>
      </main>
    </div>
  );
};

const StatCard = ({ label, value, icon, trend, color = "text-[#0F1419]" }) => (
  <motion.div whileHover={{ y: -10 }} className="p-8 md:p-10 bg-white rounded-[3rem] border border-slate-100 shadow-xl relative overflow-hidden group">
    <div className="absolute right-[-10px] top-[-10px] p-10 opacity-[0.03] group-hover:scale-125 group-hover:opacity-[0.07] transition-all duration-500">
      {icon}
    </div>
    <p className={`${TYPOGRAPHY.mono} text-[#D4AF37] mb-6`}>{label}</p>
    <div className="flex items-end justify-between">
      <p className={`text-4xl md:text-5xl font-black italic tracking-tighter leading-none ${color}`}>{value}</p>
      {trend && <span className="text-[9px] font-black text-emerald-500 bg-emerald-50 px-2 py-1 rounded-lg">{trend}</span>}
    </div>
  </motion.div>
);

export default ExtendedAdmin;