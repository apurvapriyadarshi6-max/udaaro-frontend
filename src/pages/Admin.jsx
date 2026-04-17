import React, { useEffect, useState, useMemo, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import {
  LayoutDashboard, UserCircle, Briefcase, GraduationCap, LogOut, Search, Trash2, 
  RefreshCcw, ExternalLink, ChevronRight, ShieldCheck, Zap, TrendingUp, Filter, 
  FileDown, MoreVertical, Activity, Layers, Globe, Bell, Settings, Calendar, Lock, 
  ArrowUpRight, ArrowDownRight, Database, X, User, Mail, Smartphone, MapPin, 
  Building, Target, Info, CheckCircle2, AlertCircle, Clock, Send, Eye, ShieldAlert,
  Cpu, Network, BarChart3, Fingerprint, FileText, Share2, Printer, Download,
  Maximize2, Minimize2, Command, Terminal, Linkedin, IndianRupee, Binary,
  Hash, ShieldQuestion, Globe2, Link as LinkIcon, Box, BriefcaseIcon, AtSign
} from "lucide-react";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  AreaChart, Area, PieChart, Pie, Cell, LineChart, Line, Legend
} from "recharts";

/** * =============================================================================
 * I. ARCHITECTURAL CONFIGURATION
 * Design System: Alpha-Sovereign Admin v2.9.8
 * Architected by Apurva Priyadarshi | Cycle: 2026-Alpha
 * =============================================================================
 */

const APP_CONFIG = {
  version: "2.9.8-Stable",
  codename: "Handshake_Supreme",
  node: "UDAARO_MASTER_CONTROL",
  apiBase: import.meta.env.PROD ? "https://udaaro-backend.onrender.com" : "http://localhost:5000"
};

const UI_THEME = {
  primary: "#2563eb",
  secondary: "#6366f1",
  accent: "#06b6d4",
  danger: "#e11d48",
  success: "#10b981",
  slate950: "#020617"
};

const TABS = [
  { id: "dashboard", label: "Intelligence", icon: <LayoutDashboard size={18} />, color: UI_THEME.primary },
  { id: "founders", label: "Vanguard", icon: <UserCircle size={18} />, color: UI_THEME.secondary },
  { id: "investors", label: "Syndicate", icon: <Briefcase size={18} />, color: UI_THEME.accent },
  { id: "mentors", label: "Advisory", icon: <GraduationCap size={18} />, color: "#f59e0b" },
];

/** * =============================================================================
 * II. DATA INTELLIGENCE ATOMS
 * =============================================================================
 */

const GlassPanel = ({ children, className = "", dark = false }) => (
  <div className={`
    ${dark ? 'bg-slate-950 text-white border-white/5 shadow-blue-900/20' : 'bg-white border-slate-100 text-slate-900 shadow-slate-200/50'} 
    rounded-[3.5rem] border shadow-2xl backdrop-blur-xl ${className}
  `}>
    {children}
  </div>
);

const NodeStatus = ({ status = "active", label }) => (
  <div className="flex items-center gap-3 px-4 py-2 bg-slate-900/50 rounded-full border border-white/5">
    <div className={`w-2 h-2 rounded-full ${status === 'active' ? 'bg-emerald-500 animate-pulse' : 'bg-rose-500'}`} />
    <span className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-400 italic">{label}</span>
  </div>
);

/** * =============================================================================
 * III. THE "VIEW ALL DETAILS" INTELLIGENCE ENGINE (INSPECTOR)
 * This section dynamically parses the full object and renders EVERY available detail.
 * =============================================================================
 */

const EntityInspector = ({ data, type, onClose, onDelete }) => {
  if (!data) return null;

  // Internal Logic: Map human-readable icons to database keys
  const getIconForKey = (key) => {
    const map = {
      name: <User size={14}/>,
      email: <AtSign size={14}/>,
      phone: <Smartphone size={14}/>,
      startup: <Rocket size={14}/>,
      industry: <Target size={14}/>,
      stage: <Activity size={14}/>,
      fundingNeeded: <IndianRupee size={14}/>,
      description: <FileText size={14}/>,
      firm: <Building size={14}/>,
      investmentFocus: <Search size={14}/>,
      ticketSize: <BriefcaseIcon size={14}/>,
      expertise: <Binary size={14}/>,
      experienceLevel: <Award size={14}/>,
      availability: <Calendar size={14}/>,
      linkedin: <Linkedin size={14}/>,
      createdAt: <Clock size={14}/>,
      _id: <Hash size={14}/>
    };
    return map[key] || <Box size={14}/>;
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-[1000] flex items-center justify-end bg-slate-950/80 backdrop-blur-sm p-4"
    >
      <motion.div 
        initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
        transition={{ type: "spring", damping: 30, stiffness: 200 }}
        className="w-full max-w-4xl h-full bg-white rounded-[4rem] shadow-6xl overflow-hidden flex flex-col relative"
      >
        {/* Header Block */}
        <div className="p-12 bg-slate-950 text-white relative overflow-hidden flex-shrink-0">
          <div className="absolute top-0 right-0 p-12 opacity-10 pointer-events-none rotate-12">
             <Fingerprint size={400} />
          </div>
          
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-8">
              <span className="px-5 py-2 bg-blue-600 rounded-2xl text-[10px] font-black uppercase tracking-[0.4em] shadow-2xl">Institutional_Audit_Mode</span>
              <NodeStatus label="Handshake_Verified" />
            </div>
            <h2 className="text-6xl md:text-7xl font-black tracking-tighter italic uppercase leading-none mb-4">{data.name}</h2>
            <div className="flex items-center gap-6">
               <p className="text-blue-400 font-mono text-xs uppercase tracking-[0.5em] font-black italic">{type.slice(0, -1)}_Handshake</p>
               <div className="h-4 w-[1px] bg-white/20" />
               <p className="text-slate-500 font-mono text-[10px] uppercase tracking-widest">Global_ID: {data._id}</p>
            </div>
          </div>

          <button onClick={onClose} className="absolute top-10 right-10 p-6 bg-white/5 border border-white/10 rounded-[2.5rem] hover:bg-rose-500 transition-all active:scale-90 z-20 shadow-2xl">
            <X size={28} />
          </button>
        </div>

        {/* Content Block: No Missing Details */}
        <div className="flex-1 overflow-y-auto p-12 lg:p-16 custom-scrollbar bg-[#fdfdfe] space-y-16">
          
          {/* Identity Matrix */}
          <section className="animate-in fade-in slide-in-from-bottom-6 duration-700">
             <div className="flex items-center gap-4 mb-10">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shadow-inner"><Fingerprint size={24}/></div>
                <h4 className="text-sm font-black uppercase tracking-[0.6em] text-slate-400 italic">Identity_Credentials</h4>
             </div>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Object.entries(data).map(([key, value]) => {
                  // Filter out unwanted internal fields and handled long-form fields
                  if (['_id', '__v', 'updatedAt', 'description', 'message', 'bio'].includes(key)) return null;
                  return (
                    <div key={key} className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 group hover:bg-white hover:shadow-2xl transition-all duration-500">
                       <div className="flex items-center gap-3 mb-4 text-slate-400 group-hover:text-blue-600 transition-colors">
                          {getIconForKey(key)}
                          <span className="text-[10px] font-black uppercase tracking-[0.3em]">{key.replace(/([A-Z])/g, ' $1')}</span>
                       </div>
                       <p className="text-lg font-bold text-slate-950 break-words leading-tight">{value || "NOT_PROVIDED"}</p>
                    </div>
                  );
                })}
             </div>
          </section>

          {/* Long-form Thesis (Critical Narrative) */}
          {(data.description || data.bio || data.message) && (
            <section className="animate-in fade-in slide-in-from-bottom-8 duration-700 delay-150">
               <div className="flex items-center gap-4 mb-10">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center shadow-inner"><Activity size={24}/></div>
                  <h4 className="text-sm font-black uppercase tracking-[0.6em] text-slate-400 italic">Venture_Logic_Thesis</h4>
               </div>
               <div className="p-12 bg-slate-950 text-white rounded-[4rem] relative overflow-hidden shadow-6xl group">
                  <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none group-hover:opacity-10 transition-opacity"><Database size={100}/></div>
                  <p className="text-2xl leading-relaxed text-slate-300 font-medium italic relative z-10">
                    "{data.description || data.bio || data.message}"
                  </p>
               </div>
            </section>
          )}

          {/* Verification Status & Timestamps */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-in fade-in slide-in-from-bottom-10 duration-700 delay-300">
             <div className="p-8 bg-emerald-50 rounded-[2.5rem] border border-emerald-100 flex flex-col justify-between h-48">
                <ShieldCheck size={32} className="text-emerald-500" />
                <div>
                   <p className="text-[10px] font-black text-emerald-600/60 uppercase tracking-widest mb-1">Vetting_Status</p>
                   <p className="text-xl font-black text-emerald-950 italic uppercase leading-none">Institutional_Verified</p>
                </div>
             </div>
             <div className="p-8 bg-blue-50 rounded-[2.5rem] border border-blue-100 flex flex-col justify-between h-48">
                <Clock size={32} className="text-blue-500" />
                <div>
                   <p className="text-[10px] font-black text-blue-600/60 uppercase tracking-widest mb-1">Submission_Timestamp</p>
                   <p className="text-xl font-black text-blue-950 italic uppercase leading-none">{new Date(data.createdAt).toLocaleDateString()}</p>
                </div>
             </div>
             <div className="p-8 bg-slate-900 rounded-[2.5rem] flex flex-col justify-between h-48 text-white shadow-2xl">
                <Cpu size={32} className="text-blue-400" />
                <div>
                   <p className="text-[10px] font-black text-white/40 uppercase tracking-widest mb-1">Encryption_Node</p>
                   <p className="text-xl font-black text-white italic uppercase leading-none">AES_256_ACTIVE</p>
                </div>
             </div>
          </section>
        </div>

        {/* Footer Actions */}
        <div className="p-12 border-t border-slate-100 bg-slate-50 flex gap-6 flex-shrink-0">
           <button className="flex-1 py-7 bg-slate-950 text-white rounded-[2rem] font-black text-sm uppercase tracking-[0.4em] hover:bg-blue-600 shadow-5xl transition-all flex items-center justify-center gap-4 group">
             <Send size={20} className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
             Execute Reachout protocol
           </button>
           <button onClick={() => window.print()} className="p-7 bg-white border border-slate-200 text-slate-400 rounded-[2rem] hover:text-blue-600 transition-all shadow-lg active:scale-90">
             <Printer size={28} />
           </button>
           <button 
             onClick={() => onDelete(type, data._id)}
             className="p-7 bg-rose-50 text-rose-500 rounded-[2rem] hover:bg-rose-600 hover:text-white transition-all shadow-lg active:scale-90"
           >
             <Trash2 size={28} />
           </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

/** * =============================================================================
 * IV. MAIN CONTROLLER: THE UDAARO COMMAND CENTER
 * =============================================================================
 */

export default function Admin() {
  const navigate = useNavigate();
  const mainRef = useRef(null);

  // --- Core Infrastructure State ---
  const [activeTab, setActiveTab] = useState("dashboard");
  const [data, setData] = useState({ founders: [], investors: [], mentors: [] });
  const [search, setSearch] = useState("");
  const [isSyncing, setIsSyncing] = useState(false);
  const [headerScrolled, setHeaderScrolled] = useState(false);
  const [selectedEntity, setSelectedEntity] = useState(null);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  // --- Handshake Protocol ---
  const syncInfrastructure = useCallback(async () => {
    const token = localStorage.getItem("token");
    if (!token) { navigate("/admin-login"); return; }
    
    setIsSyncing(true);
    const headers = { Authorization: `Bearer ${token}` };

    try {
      const endpoints = ["founders", "investors", "mentors"];
      const results = await Promise.all(
        endpoints.map(ep => fetch(`${APP_CONFIG.apiBase}/api/${ep}`, { headers }).then(r => r.json()))
      );

      setData({
        founders: Array.isArray(results[0]) ? results[0] : [],
        investors: Array.isArray(results[1]) ? results[1] : [],
        mentors: Array.isArray(results[2]) ? results[2] : [],
      });
    } catch (err) {
      console.error("Infrastructure Sync Critical Failure:", err);
    } finally {
      setTimeout(() => setIsSyncing(false), 800);
    }
  }, [navigate]);

  useEffect(() => {
    syncInfrastructure();
    const heartbeat = setInterval(syncInfrastructure, 60000);
    return () => clearInterval(heartbeat);
  }, [syncInfrastructure]);

  const handleEntityErasure = async (type, id) => {
    if (!window.confirm("CRITICAL: Confirm permanent data erasure from sovereign ledger?")) return;
    const token = localStorage.getItem("token");
    try {
      const res = await fetch(`${APP_CONFIG.apiBase}/api/${type}/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.ok) {
        setSelectedEntity(null);
        syncInfrastructure();
      }
    } catch (err) { alert("TERMINAL_EXECUTION_FAILURE"); }
  };

  // --- Analytics & Filtering Logic ---
  const filteredAssets = useMemo(() => {
    if (activeTab === "dashboard") return [];
    return (data[activeTab] || []).filter(item => 
      item.name?.toLowerCase().includes(search.toLowerCase()) ||
      item.email?.toLowerCase().includes(search.toLowerCase()) ||
      item.startup?.toLowerCase().includes(search.toLowerCase()) ||
      item.firm?.toLowerCase().includes(search.toLowerCase())
    );
  }, [data, activeTab, search]);

  const dashboardMetrics = useMemo(() => [
    { id: 'f', label: "Founders (Vanguard)", val: data.founders.length, trend: "+12.4%", icon: <UserCircle/> },
    { id: 'i', label: "Investors (Syndicate)", val: data.investors.length, trend: "+4.1%", icon: <Briefcase/> },
    { id: 'm', label: "Advisors (Advisory)", val: data.mentors.length, trend: "+1.2%", icon: <GraduationCap/> },
  ], [data]);

  const timeSeriesData = useMemo(() => [
    { name: 'Jan', f: 45, i: 12, m: 5 },
    { name: 'Feb', f: 52, i: 18, m: 8 },
    { name: 'Mar', f: 48, i: 22, m: 12 },
    { name: 'Apr', f: 61, i: 30, m: 15 },
    { name: 'May', f: 55, i: 28, m: 18 },
    { name: 'Jun', f: 72, i: 35, m: 22 },
  ], []);

  /** * =============================================================================
   * V. RENDERING SUITE
   * ============================================================================= */

  return (
    <div className="h-screen w-full bg-[#fcfdfe] flex font-sans text-slate-950 overflow-hidden select-none">
      
      {/* 1. SIDEBAR NAVIGATION */}
      <aside className={`${sidebarCollapsed ? 'w-24' : 'w-80'} bg-slate-950 flex flex-col relative z-30 transition-all duration-500 shadow-7xl`}>
        <div className="p-10 h-full flex flex-col">
          {/* Logo Terminal */}
          <div className="flex items-center gap-5 mb-20 group cursor-pointer overflow-hidden" onClick={() => setActiveTab('dashboard')}>
            <div className="min-w-[48px] h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white font-black italic shadow-3xl group-hover:rotate-12 transition-all">U</div>
            {!sidebarCollapsed && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <h2 className="text-xl font-black tracking-tighter text-white uppercase leading-none">Udaaro</h2>
                <p className="text-[9px] font-black text-blue-500 uppercase tracking-[0.5em] mt-1.5 italic">Terminal_v2.9</p>
              </motion.div>
            )}
          </div>

          <nav className="space-y-4 flex-1">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => { setActiveTab(tab.id); setSelectedEntity(null); }}
                className={`
                  flex items-center gap-5 w-full px-5 py-5 rounded-[1.8rem] font-black text-[12px] uppercase tracking-[0.2em] transition-all
                  ${activeTab === tab.id ? 'bg-blue-600 text-white shadow-6xl' : 'text-slate-500 hover:text-slate-300 hover:bg-white/5'}
                `}
              >
                {tab.icon}
                {!sidebarCollapsed && <span>{tab.label}</span>}
              </button>
            ))}
          </nav>

          <button onClick={() => { localStorage.removeItem("token"); navigate("/admin-login"); }} className="mt-auto flex items-center gap-5 text-slate-500 font-black text-[11px] uppercase tracking-widest hover:text-rose-500 transition-all px-5">
            <LogOut size={18} />
            {!sidebarCollapsed && <span>Terminate_Node</span>}
          </button>
        </div>
      </aside>

      {/* 2. PRIMARY VIEWPORT */}
      <main ref={mainRef} onScroll={(e) => setHeaderScrolled(e.target.scrollTop > 20)} className="flex-1 flex flex-col h-screen overflow-y-auto relative bg-[#f8fafc] custom-scrollbar">
        
        {/* Institutional Header */}
        <header className={`sticky top-0 z-40 transition-all duration-700 px-12 py-10 flex justify-between items-center ${headerScrolled ? 'bg-white/70 backdrop-blur-3xl border-b border-slate-100 shadow-xl py-8' : 'bg-transparent'}`}>
          <div className="flex items-center gap-8">
            <button onClick={() => setSidebarCollapsed(!sidebarCollapsed)} className="p-4 bg-white border border-slate-200 rounded-2xl hover:border-blue-600 transition-all active:scale-90 shadow-sm"><Command size={18} /></button>
            <h1 className="text-4xl font-black tracking-tighter capitalize italic text-slate-950 uppercase leading-none">{activeTab}</h1>
          </div>

          <div className="flex items-center gap-8">
            <motion.button onClick={syncInfrastructure} className="p-4 bg-white border border-slate-200 rounded-2xl shadow-sm hover:border-blue-600 transition-all"><RefreshCcw size={20} className={isSyncing ? 'animate-spin' : ''} /></motion.button>
            <div className="w-14 h-14 rounded-2xl border-4 border-white shadow-6xl overflow-hidden ring-1 ring-slate-200"><img src="https://ui-avatars.com/api/?name=Apurva+Priyadarshi&background=020617&color=fff" alt="Root" /></div>
          </div>
        </header>

        {/* Dynamic Scene Content */}
        <div className="p-12 max-w-[1800px] mx-auto w-full">
          <AnimatePresence mode="wait">
            {activeTab === "dashboard" ? (
              <motion.div key="dashboard" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -30 }} className="space-y-16">
                
                {/* Visual Dashboard Layers */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                  {dashboardMetrics.map((m, i) => (
                    <StatCard key={m.id} title={m.label} count={m.val} growth={m.trend} icon={m.icon} delay={i * 0.1} />
                  ))}
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                   <GlassPanel className="p-12" dark>
                      <ChartTitle title="Ecosystem Velocity" sub="Growth Hub" icon={<TrendingUp size={24}/>} />
                      <div className="h-[400px] w-full">
                         <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={timeSeriesData}>
                               <defs><linearGradient id="colorF" x1="0" y1="0" x2="0" y2="1"><stop offset="5%" stopColor={UI_THEME.primary} stopOpacity={0.6}/><stop offset="95%" stopColor={UI_THEME.primary} stopOpacity={0}/></linearGradient></defs>
                               <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
                               <XAxis dataKey="name" tick={{fill: '#64748b', fontSize: 11}} />
                               <Tooltip contentStyle={{backgroundColor: '#020617', border: 'none', borderRadius: '24px'}} />
                               <Area type="monotone" dataKey="f" stroke={UI_THEME.primary} strokeWidth={6} fill="url(#colorF)" />
                            </AreaChart>
                         </ResponsiveContainer>
                      </div>
                   </GlassPanel>
                   <GlassPanel className="p-12">
                      <ChartTitle title="Asset Synthesis" sub="Sync Load" icon={<PieChart size={24}/>} />
                      <div className="h-[400px] w-full">
                         <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={timeSeriesData}>
                               <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                               <XAxis dataKey="name" tick={{fill: '#94a3b8', fontSize: 11}} />
                               <Tooltip cursor={{fill: 'rgba(0,0,0,0.02)'}} contentStyle={{borderRadius: '24px', border: 'none'}} />
                               <Bar dataKey="i" fill={UI_THEME.secondary} radius={[12, 12, 12, 12]} barSize={16} />
                            </BarChart>
                         </ResponsiveContainer>
                      </div>
                   </GlassPanel>
                </div>

              </motion.div>
            ) : (
              <motion.div key="list" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }} className="bg-white rounded-[5rem] shadow-7xl border border-slate-100 overflow-hidden">
                
                {/* Search Terminal */}
                <div className="p-12 border-b border-slate-50 flex flex-col xl:flex-row justify-between items-center gap-12 bg-slate-50/30">
                  <div className="relative flex-1 w-full max-w-3xl">
                    <Search className="absolute left-8 top-1/2 -translate-y-1/2 text-slate-300" size={24} />
                    <input type="text" placeholder={`Query ${activeTab} metadata...`} className="w-full pl-20 pr-10 py-8 bg-white border-none rounded-[2.5rem] focus:ring-4 focus:ring-blue-600/10 transition-all font-black text-lg shadow-xl outline-none italic" value={search} onChange={(e) => setSearch(e.target.value)} />
                  </div>
                  <div className="flex gap-6 w-full xl:w-auto">
                    <button onClick={syncInfrastructure} className="flex-1 px-10 py-6 bg-slate-950 text-white rounded-[2rem] font-black text-[12px] uppercase tracking-widest shadow-6xl hover:bg-blue-600 transition-all">Matrix_Filter</button>
                  </div>
                </div>

                {/* Data Grid Table */}
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="text-slate-400 text-[11px] font-black uppercase tracking-[0.5em] bg-slate-50/50">
                        <th className="px-16 py-12 italic border-b border-slate-100">Identity_Protocol</th>
                        <th className="px-16 py-12 italic border-b border-slate-100">Origin / Sector</th>
                        <th className="px-16 py-12 italic border-b border-slate-100">Sync_Status</th>
                        <th className="px-16 py-12 text-right italic border-b border-slate-100">Control_Suite</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-50">
                      {filteredAssets.map((asset, idx) => (
                        <motion.tr key={asset._id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: idx * 0.04 }} className="hover:bg-blue-50/40 transition-all group">
                          <td className="px-16 py-12">
                            <div className="flex items-center gap-6">
                               <div className="w-16 h-16 rounded-3xl bg-slate-100 flex items-center justify-center text-slate-400 font-black group-hover:bg-blue-600 group-hover:text-white transition-all shadow-inner text-xl">{asset.name?.charAt(0)}</div>
                               <div>
                                  <div className="font-black text-slate-950 text-xl tracking-tighter italic uppercase leading-none mb-1.5">{asset.name}</div>
                                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">{asset.email}</div>
                               </div>
                            </div>
                          </td>
                          <td className="px-16 py-12">
                            <div className="text-base font-black text-slate-700 italic leading-none uppercase tracking-tighter">{asset.startup || asset.firm || asset.expertise || "Global_Core"}</div>
                            <div className="text-[10px] font-black text-blue-500 uppercase tracking-widest mt-2 opacity-60 italic">{asset.industry || asset.sector || "Venture_Cluster"}</div>
                          </td>
                          <td className="px-16 py-12">
                             <div className="flex items-center gap-3 text-emerald-500 font-black text-[11px] uppercase tracking-[0.2em] italic"><div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />Synchronized</div>
                          </td>
                          <td className="px-16 py-12 text-right">
                             <div className="flex justify-end gap-5 opacity-0 group-hover:opacity-100 transition-all translate-x-6 group-hover:translate-x-0">
                                <button onClick={() => setSelectedEntity(asset)} className="p-5 bg-white shadow-2xl border border-slate-100 rounded-[1.5rem] hover:text-blue-600 hover:scale-110 active:scale-90 transition-all"><Eye size={22} /></button>
                                <button onClick={() => handleEntityErasure(activeTab, asset._id)} className="p-5 bg-white shadow-2xl border border-rose-50 rounded-[1.5rem] text-slate-300 hover:text-rose-600 hover:scale-110 active:scale-90 transition-all"><Trash2 size={22} /></button>
                             </div>
                          </td>
                        </motion.tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>

      {/* 4. MODAL OVERLAY: FULL ENTITY INTELLIGENCE (THE "VIEW ALL DETAILS" SECTION) */}
      <AnimatePresence>
        {selectedEntity && (
          <EntityInspector 
            data={selectedEntity} 
            type={activeTab} 
            onClose={() => setSelectedEntity(null)} 
            onDelete={handleEntityErasure}
          />
        )}
      </AnimatePresence>

      {/* Notifier Terminal */}
      <div className="fixed bottom-16 right-16 z-[60]">
         <motion.button whileHover={{ scale: 1.2, rotate: 90, boxShadow: "0 0 50px rgba(37,99,235,0.4)" }} whileTap={{ scale: 0.8 }} className="w-20 h-20 bg-slate-950 text-white rounded-[2.5rem] flex items-center justify-center shadow-7xl border-2 border-white/10 relative">
            <Bell size={28} />
            <div className="absolute top-0 right-0 w-5 h-5 bg-blue-600 rounded-full border-4 border-slate-950" />
         </motion.button>
      </div>
    </div>
  );
}

/** * =============================================================================
 * VI. REUSABLE ANALYTICS ATOMS
 * ============================================================================= */

const StatCard = ({ title, count, growth, icon, delay }) => (
  <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay, duration: 0.8, ease: [0.16, 1, 0.3, 1] }} whileHover={{ y: -10, scale: 1.02 }} className="bg-white p-10 rounded-[3.5rem] shadow-6xl border border-slate-100 flex flex-col justify-between group hover:border-blue-500/40 transition-all duration-700 relative overflow-hidden">
    <div className="absolute -right-8 -top-8 p-16 opacity-[0.03] group-hover:scale-150 group-hover:opacity-10 transition-all duration-[2s] text-slate-950">{icon}</div>
    <div className="relative z-10">
      <div className="flex items-center gap-4 text-blue-600 mb-10 font-black text-[11px] uppercase tracking-[0.4em]"><div className="p-3 rounded-2xl bg-blue-50 text-blue-600 shadow-inner group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">{icon}</div>{title}</div>
      <p className="text-7xl font-black tracking-tighter leading-none text-slate-950 italic uppercase">{count}</p>
      <div className="mt-12 flex items-center justify-between">
        <div className="flex items-center gap-2">
           <span className={`flex items-center gap-1.5 text-[11px] font-black uppercase tracking-widest ${growth.startsWith('+') ? 'text-emerald-500' : 'text-rose-500'}`}>{growth.startsWith('+') ? <ArrowUpRight size={14}/> : <ArrowDownRight size={14}/>}{growth}</span>
           <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-2">Delta_Cycle</span>
        </div>
      </div>
    </div>
  </motion.div>
);