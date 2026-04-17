import React, { useEffect, useState, useMemo, useRef, useCallback } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import {
  LayoutDashboard, UserCircle, Briefcase, GraduationCap, LogOut, Search, Trash2, 
  RefreshCcw, ExternalLink, ChevronRight, ShieldCheck, Zap, TrendingUp, Filter, 
  FileDown, MoreVertical, Activity, Layers, Globe, Bell, Settings, Calendar, Lock, 
  ArrowUpRight, ArrowDownRight, Database, X, User, Mail, Smartphone, MapPin, 
  Building, Target, Info, CheckCircle2, AlertCircle, Clock, Send, Eye, ShieldAlert,
  Cpu, Network, BarChart3, Fingerprint, FileText, Share2, Printer, Download,
  Maximize2, Minimize2, Command, Terminal, Linkedin, IndianRupee, Binary,
  Hash, ShieldQuestion, Globe2, Link as LinkIcon, Box, BriefcaseIcon, AtSign,
  CloudLightning, HardDrive, Key, Server, Shield, ToggleLeft, Layers3, ZapOff,
  ArrowLeft, Rocket, Award, Compass, Microscope, FileCode, ActivitySquare, UserCheck
} from "lucide-react";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  AreaChart, Area, PieChart, Pie, Cell, LineChart, Line, Legend
} from "recharts";

/** * =============================================================================
 * I. GLOBAL INFRASTRUCTURE CONFIGURATION
 * Design System: Alpha-Sovereign-Admin-UX v3.2.0
 * Architected by Apurva Priyadarshi | Node: UDAARO_MASTER_CONTROL
 * =============================================================================
 */

const APP_CONFIG = {
  version: "3.2.0-Ultra",
  codename: "Sovereign_Redirect",
  environment: import.meta.env.PROD ? "PROD" : "LOCAL_NODE",
  apiBase: import.meta.env.PROD ? "https://udaaro-backend.onrender.com" : "http://localhost:5000"
};

const THEME_ENGINE = {
  primary: "#2563eb",
  secondary: "#6366f1",
  accent: "#06b6d4",
  danger: "#e11d48",
  success: "#10b981",
  slate950: "#020617",
  chartGradients: ["#2563eb", "#6366f1", "#06b6d4", "#10b981", "#f59e0b"]
};

const TAB_HIERARCHY = [
  { id: "dashboard", label: "Intelligence", icon: <LayoutDashboard size={18} />, color: THEME_ENGINE.primary },
  { id: "founders", label: "Vanguard", icon: <UserCircle size={18} />, color: THEME_ENGINE.secondary },
  { id: "investors", label: "Syndicate", icon: <Briefcase size={18} />, color: THEME_ENGINE.accent },
  { id: "mentors", label: "Advisory", icon: <GraduationCap size={18} />, color: "#f59e0b" },
];

/** * =============================================================================
 * II. FULL-PAGE ASSET DOSSIER (THE REDIRECT VIEW)
 * This component acts as the full-page detailed view for any submission.
 * =============================================================================
 */

const FullPageDossier = ({ data, type, onBack, onDelete }) => {
  if (!data) return null;

  const renderDetailIcon = (key) => {
    const iconMap = {
      name: <User />, email: <AtSign />, phone: <Smartphone />, startup: <Rocket />,
      industry: <Target />, stage: <Activity />, fundingNeeded: <IndianRupee />,
      firm: <Building />, expertise: <Binary />, experienceLevel: <Award />,
      availability: <Calendar />, linkedin: <Linkedin />, ticketSize: <BriefcaseIcon />,
      location: <MapPin />, createdAt: <Clock />, _id: <Hash />
    };
    return iconMap[key] || <Box />;
  };

  const filteredKeys = Object.keys(data).filter(k => !['__v', 'updatedAt', 'description', 'message', 'bio'].includes(k));

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 1.05 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, x: -100 }}
      className="absolute inset-0 z-[500] bg-[#f8fafc] flex flex-col overflow-hidden"
    >
      {/* 1. TOP SECURE BAR */}
      <header className="p-10 bg-slate-950 text-white flex justify-between items-center shadow-7xl relative overflow-hidden">
         <div className="absolute inset-0 bg-grid-institutional opacity-10 pointer-events-none" />
         <div className="flex items-center gap-12 relative z-10">
            <button onClick={onBack} className="p-5 bg-white/5 border border-white/10 rounded-2xl hover:bg-blue-600 transition-all active:scale-90 flex items-center gap-4 group">
               <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
               <span className="text-[10px] font-black uppercase tracking-[0.4em]">Back_To_Grid</span>
            </button>
            <div className="h-10 w-[1px] bg-white/10" />
            <div className="flex flex-col">
               <div className="flex items-center gap-4">
                  <h2 className="text-4xl font-black tracking-tighter italic uppercase leading-none">{data.name}</h2>
                  <span className="px-4 py-1.5 bg-blue-600 rounded-xl text-[9px] font-black uppercase tracking-widest">Handshake_Verified</span>
               </div>
               <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mt-2">Dossier_UUID: {data._id}</p>
            </div>
         </div>
         <div className="flex items-center gap-6 relative z-10">
            <button onClick={() => window.print()} className="p-5 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all"><Printer size={20}/></button>
            <button onClick={() => onDelete(type, data._id)} className="p-5 bg-rose-500/10 border border-rose-500/20 text-rose-500 rounded-2xl hover:bg-rose-50 hover:text-white transition-all"><Trash2 size={20}/></button>
         </div>
      </header>

      {/* 2. DEEP INSPECTION SCROLL-AREA */}
      <main className="flex-1 overflow-y-auto p-12 lg:p-24 custom-scrollbar">
         <div className="max-w-7xl mx-auto space-y-24">
            
            {/* Metadata Grid */}
            <section>
               <div className="flex items-center gap-5 mb-14">
                  <div className="w-14 h-14 rounded-2xl bg-blue-600 text-white flex items-center justify-center shadow-4xl shadow-blue-500/30"><Fingerprint size={28}/></div>
                  <div>
                     <h3 className="text-2xl font-black italic uppercase tracking-tighter text-slate-950">Identity Matrix</h3>
                     <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1 italic">Verified metadata sync from India regional grid</p>
                  </div>
               </div>
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredKeys.map(key => (
                    <div key={key} className="p-10 bg-white rounded-[3.5rem] border border-slate-100 shadow-xl group hover:shadow-4xl hover:border-blue-500/30 transition-all duration-700">
                       <div className="flex items-center gap-4 mb-6 text-slate-400 group-hover:text-blue-600 transition-colors">
                          {React.cloneElement(renderDetailIcon(key), { size: 18 })}
                          <span className="text-[10px] font-black uppercase tracking-[0.4em]">{key.replace(/([A-Z])/g, ' $1')}</span>
                       </div>
                       <p className="text-2xl font-black text-slate-950 break-words uppercase italic tracking-tighter leading-none">
                          {typeof data[key] === 'object' ? JSON.stringify(data[key]) : (data[key] || "NULL_DATA")}
                       </p>
                    </div>
                  ))}
               </div>
            </section>

            {/* Narrative / Thesis Block */}
            {(data.description || data.bio || data.message) && (
              <section className="animate-in fade-in slide-in-from-bottom-10 duration-1000">
                 <div className="flex items-center gap-5 mb-14">
                    <div className="w-14 h-14 rounded-2xl bg-indigo-600 text-white flex items-center justify-center shadow-4xl shadow-indigo-500/30"><ActivitySquare size={28}/></div>
                    <div>
                       <h3 className="text-2xl font-black italic uppercase tracking-tighter text-slate-950">Structural Thesis</h3>
                       <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1 italic">Industrial problem logic and execution roadmap</p>
                    </div>
                 </div>
                 <div className="p-20 bg-slate-950 text-white rounded-[5rem] shadow-7xl relative overflow-hidden group border border-white/10">
                    <div className="absolute top-0 right-0 p-16 opacity-[0.03] rotate-12 scale-150 pointer-events-none"><Terminal size={300} /></div>
                    <p className="text-4xl md:text-5xl leading-[1.2] font-medium italic text-slate-300 relative z-10 tracking-tight">
                       "{data.description || data.bio || data.message}"
                    </p>
                 </div>
              </section>
            )}

            {/* System Verification Anchors */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-12 pb-20">
               <div className="p-12 bg-emerald-50 rounded-[4rem] border border-emerald-100 flex items-center gap-10 hover:bg-white transition-all duration-700">
                  <div className="w-24 h-24 bg-white rounded-3xl flex items-center justify-center text-emerald-500 shadow-2xl shadow-emerald-200/50"><ShieldCheck size={48}/></div>
                  <div>
                     <p className="text-[11px] font-black text-emerald-600 uppercase tracking-widest mb-2 italic">Vetting_Protocol</p>
                     <h4 className="text-4xl font-black italic text-emerald-950 uppercase leading-none">Status: VERIFIED_SYNC</h4>
                  </div>
               </div>
               <div className="p-12 bg-slate-900 rounded-[4rem] flex items-center gap-10 text-white shadow-6xl group hover:bg-blue-600 transition-all duration-700">
                  <div className="w-24 h-24 bg-white/5 rounded-3xl flex items-center justify-center text-blue-400 shadow-inner group-hover:bg-white group-hover:text-blue-600 transition-all"><Database size={48}/></div>
                  <div>
                     <p className="text-[11px] font-black text-white/40 uppercase tracking-widest mb-2 italic">Grid_Storage</p>
                     <h4 className="text-4xl font-black italic text-white uppercase leading-none tracking-tighter">AES_256_STABLE</h4>
                  </div>
               </div>
            </section>
         </div>
      </main>

      {/* 3. DOSSIER ACTION BAR */}
      <footer className="p-12 bg-white border-t border-slate-100 flex flex-col md:flex-row gap-8">
         <button className="flex-[4] py-10 bg-slate-950 text-white rounded-[2.5rem] font-black text-base uppercase tracking-[0.5em] italic shadow-7xl hover:bg-blue-600 hover:-translate-y-2 transition-all duration-500 flex items-center justify-center gap-6 group">
            <Send size={28} className="group-hover:translate-x-3 group-hover:-translate-y-3 transition-transform" />
            Establish Institutional Sync
         </button>
         <button className="flex-1 py-10 bg-slate-50 border border-slate-200 text-slate-400 rounded-[2.5rem] font-black text-xs uppercase tracking-widest hover:text-blue-600 hover:border-blue-600 transition-all flex items-center justify-center gap-4 italic">
            <Download size={20}/> Download_Dossier
         </button>
      </footer>
    </motion.div>
  );
};

/** * =============================================================================
 * III. THE COMMAND HUB (MAIN CONTROLLER)
 * =============================================================================
 */

export default function Admin() {
  const navigate = useNavigate();
  const mainRef = useRef(null);

  // --- Core Node State ---
  const [activeTab, setActiveTab] = useState("dashboard");
  const [data, setData] = useState({ founders: [], investors: [], mentors: [] });
  const [search, setSearch] = useState("");
  const [isSyncing, setIsSyncing] = useState(false);
  const [headerScrolled, setHeaderScrolled] = useState(false);
  const [selectedEntity, setSelectedEntity] = useState(null);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [notificationCount, setNotificationCount] = useState(0);

  // --- Handshake Protocol ---
  const syncSovereignNodes = useCallback(async () => {
    const token = localStorage.getItem("token");
    if (!token) { navigate("/admin-login"); return; }
    
    setIsSyncing(true);
    const headers = { Authorization: `Bearer ${token}` };

    try {
      const endpoints = ["founders", "investors", "mentors"];
      const clusterResponses = await Promise.all(
        endpoints.map(node => fetch(`${APP_CONFIG.apiBase}/api/${node}`, { headers }).then(r => r.json()))
      );

      setData({
        founders: Array.isArray(clusterResponses[0]) ? clusterResponses[0] : [],
        investors: Array.isArray(clusterResponses[1]) ? clusterResponses[1] : [],
        mentors: Array.isArray(clusterResponses[2]) ? clusterResponses[2] : [],
      });
      
      setNotificationCount(clusterResponses[0].length + clusterResponses[1].length + clusterResponses[2].length);
    } catch (err) {
      console.error("Infrastructure Handshake Failure:", err);
    } finally {
      setTimeout(() => setIsSyncing(false), 1000);
    }
  }, [navigate]);

  useEffect(() => {
    syncSovereignNodes();
    const heartbeat = setInterval(syncSovereignNodes, 60000);
    return () => clearInterval(heartbeat);
  }, [syncSovereignNodes]);

  const handleErasureProtocol = async (type, id) => {
    if (!window.confirm("CRITICAL_WARN: Confirm permanent asset erasure?")) return;
    const token = localStorage.getItem("token");
    try {
      const res = await fetch(`${APP_CONFIG.apiBase}/api/${type}/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.ok) {
        setSelectedEntity(null);
        syncSovereignNodes();
      }
    } catch (err) { alert("SYSTEM_EXECUTION_ERROR"); }
  };

  // --- Data Logic: Filtering ---
  const filteredAssets = useMemo(() => {
    if (activeTab === "dashboard") return [];
    return (data[activeTab] || []).filter(item => 
      item.name?.toLowerCase().includes(search.toLowerCase()) ||
      item.email?.toLowerCase().includes(search.toLowerCase()) ||
      item.startup?.toLowerCase().includes(search.toLowerCase()) ||
      item.firm?.toLowerCase().includes(search.toLowerCase())
    );
  }, [data, activeTab, search]);

  const totalFounders = data.founders.length;
  const totalInvestors = data.investors.length;
  const totalMentors = data.mentors.length;

  const chartDataMatrix = useMemo(() => [
    { name: 'Jan', f: 45, i: 12, m: 18 },
    { name: 'Feb', f: 52, i: 22, m: 24 },
    { name: 'Mar', f: 48, i: 30, m: 12 },
    { name: 'Apr', f: 72, i: 38, m: 32 },
    { name: 'May', f: 65, i: 45, m: 28 },
    { name: 'Jun', f: 94, i: 55, m: 40 },
  ], []);

  return (
    <div className="h-screen w-full bg-[#f8fafc] flex font-sans text-slate-950 overflow-hidden select-none relative">
      
      {/* 4. REDIRECT OVERLAY ENGINE (THE VIEW-EYE REDIRECT) */}
      <AnimatePresence>
        {selectedEntity && (
          <FullPageDossier 
            data={selectedEntity} 
            type={activeTab} 
            onBack={() => setSelectedEntity(null)} 
            onDelete={handleErasureProtocol}
          />
        )}
      </AnimatePresence>

      {/* 1. SOVEREIGN SIDEBAR (COMMAND HUB) */}
      <aside className={`
        ${sidebarCollapsed ? 'w-24' : 'w-80'} 
        bg-slate-950 flex flex-col relative z-[100] transition-all duration-700 shadow-7xl
      `}>
        <div className="p-10 h-full flex flex-col">
          <div className="flex items-center gap-5 mb-24 group cursor-pointer overflow-hidden" onClick={() => {setActiveTab('dashboard'); setSelectedEntity(null);}}>
            <motion.div whileHover={{ rotate: 90 }} className="min-w-[52px] h-14 bg-blue-600 rounded-3xl flex items-center justify-center text-white font-black italic shadow-6xl border border-white/10">U</motion.div>
            {!sidebarCollapsed && (
              <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}>
                <h2 className="text-2xl font-black tracking-tighter text-white uppercase leading-none italic">Udaaro</h2>
                <p className="text-[9px] font-black text-blue-500 uppercase tracking-[0.5em] mt-2 italic">Command_v3.2</p>
              </motion.div>
            )}
          </div>

          <nav className="space-y-5 flex-1">
            {TAB_HIERARCHY.map((tab) => (
              <button
                key={tab.id}
                onClick={() => { setActiveTab(tab.id); setSelectedEntity(null); }}
                className={`
                  flex items-center justify-between w-full px-5 py-5 rounded-[2rem] font-black text-[12px] uppercase tracking-[0.2em] transition-all duration-500
                  ${activeTab === tab.id ? 'bg-blue-600 text-white shadow-7xl translate-x-2' : 'text-slate-500 hover:text-slate-300 hover:bg-white/5'}
                `}
              >
                <div className="flex items-center gap-5">
                   <span className={`${activeTab === tab.id ? 'text-white' : 'text-slate-600 group-hover:text-blue-400'}`}>{tab.icon}</span>
                   {!sidebarCollapsed && <span>{tab.label}</span>}
                </div>
              </button>
            ))}
          </nav>

          <button onClick={() => { localStorage.removeItem("token"); navigate("/admin-login"); }} className="mt-auto flex items-center gap-5 text-slate-600 font-black text-[11px] uppercase tracking-widest hover:text-rose-500 transition-all px-5">
            <LogOut size={20}/>{!sidebarCollapsed && <span>Terminate_Node</span>}
          </button>
        </div>
      </aside>

      {/* 2. PRIMARY OPERATIONAL VIEWPORT */}
      <main ref={mainRef} onScroll={(e) => setHeaderScrolled(e.target.scrollTop > 30)} className="flex-1 flex flex-col h-screen overflow-y-auto relative bg-[#f8fafc] custom-scrollbar">
        
        {/* Global Progress Tracking Bar */}
        <div className="h-2 w-full bg-slate-100 sticky top-0 z-[110]">
           <motion.div animate={{ width: `${(notificationCount / 500) * 100}%` }} className="h-full bg-blue-600 shadow-[0_0_15px_blue]" />
        </div>

        <header className={`sticky top-2 z-[90] transition-all duration-700 px-14 py-12 flex justify-between items-center ${headerScrolled ? 'bg-white/70 backdrop-blur-3xl border-b border-slate-100 shadow-2xl py-8' : 'bg-transparent'}`}>
          <div className="flex items-center gap-10">
            <button onClick={() => setSidebarCollapsed(!sidebarCollapsed)} className="p-5 bg-white border border-slate-200 rounded-[1.5rem] hover:border-blue-600 shadow-xl transition-all"><Command size={20} /></button>
            <h1 className="text-5xl font-black tracking-tighter capitalize italic text-slate-950 uppercase leading-none">{activeTab}</h1>
          </div>

          <div className="flex items-center gap-10">
             <motion.button onClick={syncSovereignNodes} className="p-5 bg-white border border-slate-200 rounded-2xl shadow-xl"><RefreshCcw size={22} className={isSyncing ? 'animate-spin' : ''}/></motion.button>
             <div className="w-16 h-16 rounded-[1.8rem] border-4 border-white shadow-7xl overflow-hidden ring-1 ring-slate-200 group-hover:ring-blue-600 transition-all"><img src="https://ui-avatars.com/api/?name=Apurva+Priyadarshi&background=020617&color=fff&bold=true" alt="Admin" /></div>
          </div>
        </header>

        {/* Dynamic Data Coordinates */}
        <div className="p-12 lg:p-16 max-w-[1900px] mx-auto w-full">
          <AnimatePresence mode="wait">
            {activeTab === "dashboard" ? (
              <motion.div key="dashboard" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -50 }} className="space-y-20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                   <StatNode title="Builders Vanguard" count={totalFounders} growth="+12%" icon={<UserCircle/>} delay={0.1} color="blue" />
                   <StatNode title="Syndicate Nodes" count={totalInvestors} growth="+4%" icon={<Briefcase/>} delay={0.2} color="indigo" />
                   <StatNode title="Advisory Network" count={totalMentors} growth="+1%" icon={<GraduationCap/>} delay={0.3} color="cyan" />
                </div>
                
                <div className="grid lg:grid-cols-2 gap-12">
                   <GlassPanel className="p-14" dark>
                      <ChartTitle title="Ecosystem Velocity" sub="Alpha_Synchronicity" icon={<TrendingUp size={24}/>} />
                      <div className="h-[450px] w-full">
                         <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={chartDataMatrix}>
                               <defs><linearGradient id="bGrad" x1="0" y1="0" x2="0" y2="1"><stop offset="5%" stopColor="#2563eb" stopOpacity={0.6}/><stop offset="95%" stopColor="#2563eb" stopOpacity={0}/></linearGradient></defs>
                               <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
                               <XAxis dataKey="name" tick={{fill: '#64748b', fontSize: 11, fontWeight: '900'}} />
                               <YAxis hide />
                               <Tooltip contentStyle={{backgroundColor: '#020617', border: 'none', borderRadius: '32px'}} />
                               <Area type="monotone" dataKey="f" stroke="#2563eb" strokeWidth={6} fill="url(#bGrad)" />
                            </AreaChart>
                         </ResponsiveContainer>
                      </div>
                   </GlassPanel>
                   <GlassPanel className="p-14">
                      <ChartTitle title="Capital Cluster" sub="Deployment_Matrix" icon={<PieChart size={24}/>} />
                      <div className="h-[450px] w-full">
                         <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={chartDataMatrix}>
                               <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                               <XAxis dataKey="name" tick={{fill: '#94a3b8', fontSize: 11, fontWeight: '900'}} />
                               <Tooltip cursor={{fill: 'rgba(0,0,0,0.02)'}} contentStyle={{borderRadius: '32px', border: 'none'}} />
                               <Bar dataKey="i" fill="#6366f1" radius={[15, 15, 15, 15]} barSize={20} />
                               <Bar dataKey="m" fill="#06b6d4" radius={[15, 15, 15, 15]} barSize={20} />
                            </BarChart>
                         </ResponsiveContainer>
                      </div>
                   </GlassPanel>
                </div>
              </motion.div>
            ) : (
              /* LIST VIEW: DYNAMIC ASSET ENGINE */
              <motion.div key="list" initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -100 }} className="bg-white rounded-[6rem] shadow-7xl border border-slate-100 overflow-hidden">
                
                {/* Global Submission Stats Bar */}
                <div className="px-14 py-8 bg-slate-950 text-white flex justify-between items-center">
                   <div className="flex items-center gap-6">
                      <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-[10px] font-black uppercase tracking-[0.5em] italic">Live Submission Stream: Synchronized</span>
                   </div>
                   <div className="flex gap-12">
                      <p className="text-[9px] font-bold text-slate-500 uppercase italic">Total_Nodes: {notificationCount}</p>
                      <p className="text-[9px] font-bold text-slate-500 uppercase italic">Region: India_Vanguard_B1</p>
                   </div>
                </div>

                <div className="p-14 border-b border-slate-100 flex flex-col xl:flex-row justify-between items-center gap-12 bg-slate-50/50 backdrop-blur-xl">
                  <div className="relative flex-1 w-full max-w-4xl">
                    <Search className="absolute left-10 top-1/2 -translate-y-1/2 text-slate-200" size={32} />
                    <input type="text" placeholder={`Query metadata within ${activeTab} node...`} className="w-full pl-24 pr-12 py-10 bg-white border-none rounded-[3.5rem] focus:ring-[12px] focus:ring-blue-600/5 transition-all font-black text-2xl shadow-3xl outline-none placeholder:text-slate-200 italic uppercase" value={search} onChange={(e) => setSearch(e.target.value)} />
                  </div>
                  <button className="px-14 py-8 bg-slate-950 text-white rounded-[2.5rem] font-black text-[12px] uppercase tracking-[0.5em] shadow-7xl hover:bg-blue-600 transition-all flex items-center justify-center gap-5">Matrix_Filter</button>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="text-slate-400 text-[12px] font-black uppercase tracking-[0.6em] bg-slate-50/30">
                        <th className="px-20 py-14 italic border-b border-slate-100">Identity_Handshake</th>
                        <th className="px-20 py-14 italic border-b border-slate-100">Venture / Origin</th>
                        <th className="px-20 py-14 italic border-b border-slate-100">Sync_Status</th>
                        <th className="px-20 py-14 text-right italic border-b border-slate-100">Node_Control</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {filteredAssets.map((asset, idx) => (
                        <motion.tr key={asset._id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.05 }} className="hover:bg-blue-50/40 transition-all duration-500 group">
                          <td className="px-20 py-14">
                            <div className="flex items-center gap-8">
                               <div className="w-20 h-20 rounded-[2.2rem] bg-slate-100 flex items-center justify-center text-slate-300 font-black group-hover:bg-blue-600 group-hover:text-white transition-all shadow-inner text-3xl italic uppercase border-4 border-white">{asset.name?.charAt(0)}</div>
                               <div>
                                  <div className="font-black text-slate-950 text-2xl tracking-tighter italic uppercase leading-none mb-2">{asset.name}</div>
                                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-[0.3em] font-mono">{asset.email}</div>
                               </div>
                            </div>
                          </td>
                          <td className="px-20 py-14">
                            <div className="text-xl font-black text-slate-800 italic uppercase tracking-tighter leading-none mb-2">{asset.startup || asset.firm || asset.expertise || "DECENTRALIZED"}</div>
                            <div className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-blue-500" /><div className="text-[10px] font-black text-blue-500 uppercase tracking-widest opacity-60 italic">{asset.industry || asset.sector || "ALPHA_CLUSTER"}</div></div>
                          </td>
                          <td className="px-20 py-14"><div className="flex items-center gap-4 text-emerald-500 font-black text-[12px] uppercase tracking-[0.3em] italic"><div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_blue]" /> Handshake_Synced</div></td>
                          <td className="px-20 py-14 text-right">
                             <div className="flex justify-end gap-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-10 group-hover:translate-x-0">
                                <button onClick={() => setSelectedEntity(asset)} className="p-6 bg-white shadow-6xl border border-slate-100 rounded-[2rem] hover:text-blue-600 hover:scale-110 active:scale-90 transition-all"><Eye size={28} /></button>
                                <button onClick={() => handleErasureProtocol(activeTab, asset._id)} className="p-6 bg-white shadow-6xl border border-rose-50 rounded-[2rem] text-slate-200 hover:text-rose-600 hover:scale-110 transition-all"><Trash2 size={28} /></button>
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

      {/* Sovereign Notifier Terminal */}
      <div className="fixed bottom-16 right-16 z-[120]">
         <motion.button whileHover={{ scale: 1.2, rotate: 90 }} className="w-24 h-24 bg-slate-950 text-white rounded-[3rem] flex items-center justify-center shadow-7xl border-2 border-white/10 relative overflow-hidden">
            <Bell size={32} />
            {notificationCount > 0 && <div className="absolute top-4 right-4 w-7 h-7 bg-blue-600 rounded-full border-4 border-slate-950 flex items-center justify-center text-[10px] font-black z-20">{notificationCount}</div>}
         </motion.button>
      </div>
    </div>
  );
}

/** * =============================================================================
 * V. ATOMIC SUB-COMPONENTS
 * ============================================================================= */

const GlassPanel = ({ children, className = "", dark = false }) => (
  <div className={` ${dark ? 'bg-slate-950 text-white border-white/5 shadow-blue-900/20' : 'bg-white border-slate-100 shadow-slate-200/50'} rounded-[3.5rem] border shadow-2xl backdrop-blur-xl ${className} `}> {children} </div>
);

const NodeStatus = ({ status = "active", label }) => (
  <div className="flex items-center gap-3 px-4 py-2 bg-slate-900/50 rounded-full border border-white/5">
    <div className={`w-2 h-2 rounded-full ${status === 'active' ? 'bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.8)]' : 'bg-rose-500'}`} />
    <span className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-400 italic">{label}</span>
  </div>
);

const ChartTitle = ({ title, sub, icon }) => (
  <div className="flex items-center gap-6 mb-16">
    <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shadow-inner"> {icon} </div>
    <div>
      <h4 className="text-[10px] font-black uppercase tracking-[0.6em] text-slate-400 leading-none mb-2">{title}</h4>
      <p className="text-3xl font-black italic tracking-tighter text-slate-950 dark:text-white uppercase leading-none">{sub}</p>
    </div>
  </div>
);

const StatNode = ({ title, count, growth, icon, delay, color }) => (
  <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay, duration: 1 }} whileHover={{ y: -15, scale: 1.02 }} className="bg-white p-12 rounded-[4.5rem] shadow-6xl border border-slate-100 flex flex-col justify-between group hover:border-blue-500/40 transition-all duration-1000 relative overflow-hidden">
    <div className="absolute -right-12 -top-12 p-20 opacity-[0.02] group-hover:scale-150 transition-all duration-[3s] text-slate-950">{icon}</div>
    <div className="relative z-10">
      <div className="flex items-center gap-5 text-blue-600 mb-12 font-black text-[12px] uppercase tracking-[0.5em] italic">
        <div className={`p-4 rounded-[1.5rem] bg-${color}-50 text-${color}-600 shadow-inner group-hover:bg-blue-600 group-hover:text-white transition-all`}>{icon}</div> {title}
      </div>
      <p className="text-[7rem] font-black tracking-tighter leading-none text-slate-950 italic uppercase">{count}</p>
      <div className="mt-14 flex items-center justify-between border-t border-slate-50 pt-10">
         <div className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-[12px] font-black uppercase ${growth.startsWith('+') ? 'bg-emerald-50 text-emerald-500' : 'bg-rose-50 text-rose-500'}`}>
           {growth}
         </div>
         <span className="text-[10px] font-bold text-slate-300 uppercase tracking-[0.3em] italic">Delta_Cycle</span>
      </div>
    </div>
  </motion.div>
);

const MiniTelemetry = ({ label, val, trend, color }) => (
  <div className="p-10 bg-white rounded-[3rem] border border-slate-100 shadow-xl group hover:shadow-4xl transition-all duration-700 relative overflow-hidden">
    <div className={`absolute top-0 left-0 w-full h-1 bg-${color}-500/20`} />
    <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em] mb-3 italic">{label}</p>
    <div className="flex items-end justify-between">
      <h5 className="text-4xl font-black text-slate-950 tracking-tighter italic uppercase">{val}</h5>
      <span className={`text-[10px] font-black bg-${color}-50 text-${color}-600 px-3 py-1 rounded-lg uppercase tracking-widest`}>{trend}</span>
    </div>
  </div>
);