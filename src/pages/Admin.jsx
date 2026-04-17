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
  Maximize2, Minimize2, Command, Terminal
} from "lucide-react";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  AreaChart, Area, PieChart, Pie, Cell, LineChart, Line, Legend, ScatterChart, Scatter
} from "recharts";

/** * ==========================================
 * I. ARCHITECTURAL CONFIGURATION
 * Architected by Apurva Priyadarshi
 * ========================================== 
 */

const APP_CONFIG = {
  version: "2.6.4-Alpha",
  codename: "Sovereign_Sync",
  environment: import.meta.env.PROD ? "PROD" : "LOCAL_NODE",
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

/** * ==========================================
 * II. UI ATOMS & ATOMIC COMPONENTS
 * ========================================== 
 */

const GlassPanel = ({ children, className = "", dark = false }) => (
  <div className={`
    ${dark ? 'bg-slate-950 text-white border-white/5' : 'bg-white border-slate-100 text-slate-900'} 
    rounded-[3rem] border shadow-2xl backdrop-blur-xl ${className}
  `}>
    {children}
  </div>
);

const Indicator = ({ status = "active" }) => (
  <div className="flex items-center gap-2">
    <div className={`w-2 h-2 rounded-full animate-pulse ${status === 'active' ? 'bg-emerald-500' : 'bg-rose-500'}`} />
    <span className="text-[8px] font-black uppercase tracking-[0.3em] text-slate-500">Node_{status}</span>
  </div>
);

/** * ==========================================
 * III. DASHBOARD ANALYTICS COMPONENTS
 * ========================================== 
 */

const MiniMetric = ({ label, val, trend }) => (
  <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100 group hover:border-blue-200 transition-all">
    <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">{label}</p>
    <div className="flex items-end justify-between">
      <h5 className="text-2xl font-black text-slate-900 tracking-tighter">{val}</h5>
      <span className={`text-[10px] font-bold ${trend.startsWith('+') ? 'text-emerald-500' : 'text-rose-500'}`}>{trend}</span>
    </div>
  </div>
);

const ChartTitle = ({ title, sub, icon }) => (
  <div className="flex items-center gap-4 mb-10">
    <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
      {icon}
    </div>
    <div>
      <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 leading-none">{title}</h4>
      <p className="text-lg font-bold italic tracking-tight text-slate-900 mt-1">{sub}</p>
    </div>
  </div>
);

/** * ==========================================
 * IV. DATA INSPECTOR MODAL
 * ========================================== 
 */

const InspectorModal = ({ data, type, onClose, onDelete }) => {
  if (!data) return null;

  const DetailField = ({ label, value, icon, full = false }) => (
    <div className={`${full ? 'col-span-2' : 'col-span-1'} p-6 bg-slate-50 rounded-3xl border border-slate-100`}>
      <div className="flex items-center gap-2 mb-2 text-slate-400">
        {icon}
        <span className="text-[9px] font-black uppercase tracking-widest">{label}</span>
      </div>
      <p className="text-sm font-bold text-slate-900 break-words capitalize">{value || "Unspecified"}</p>
    </div>
  );

  return (
    <motion.div 
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-end bg-slate-950/40 backdrop-blur-md p-4"
    >
      <motion.div 
        initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className="w-full max-w-2xl h-full bg-white rounded-[4rem] shadow-2xl overflow-hidden flex flex-col relative"
      >
        <div className="p-10 bg-slate-950 text-white flex justify-between items-start relative overflow-hidden">
          <div className="absolute top-0 right-0 p-10 opacity-10 pointer-events-none">
             <Fingerprint size={200} />
          </div>
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-blue-600 rounded-lg text-[9px] font-black uppercase tracking-widest">Inspection_Mode</span>
              <span className="text-[9px] font-mono text-slate-500 uppercase">UUID: {data._id.slice(-12)}</span>
            </div>
            <h2 className="text-5xl font-black tracking-tighter italic">{data.name}</h2>
            <p className="text-blue-400 font-mono text-xs mt-2 uppercase tracking-[0.3em]">{data.industry || data.expertise || "Global Venture"}</p>
          </div>
          <button onClick={onClose} className="relative z-10 p-4 bg-white/10 rounded-2xl hover:bg-rose-500 transition-all">
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-12 custom-scrollbar space-y-12">
          {/* Section: Core Identity */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center"><User size={16}/></div>
              <h4 className="text-xs font-black uppercase tracking-[0.3em] text-slate-400">Handshake Metadata</h4>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <DetailField label="Electronic Mail" value={data.email} icon={<Mail size={12}/>} />
              <DetailField label="Telecom Protocol" value={data.phone || data.whatsapp} icon={<Smartphone size={12}/>} />
              <DetailField label="Geographic Node" value={data.location} icon={<MapPin size={12}/>} />
              <DetailField label="Current Phase" value={data.stage || data.experienceLevel || data.preferredStage} icon={<Activity size={12}/>} />
            </div>
          </div>

          {/* Section: Strategic Assets */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center"><Building size={16}/></div>
              <h4 className="text-xs font-black uppercase tracking-[0.3em] text-slate-400">Institutional Entity</h4>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <DetailField label="Entity Name" value={data.startup || data.firm || "Decentralized"} icon={<Layers size={12}/>} full />
              <DetailField label="Sector" value={data.industry || data.sector} icon={<Target size={12}/>} />
              <DetailField label="Vetting Status" value="LEVEL_01_VERIFIED" icon={<ShieldCheck size={12}/>} />
            </div>
          </div>

          {/* Section: Deep Logic / Message */}
          {(data.description || data.bio || data.message) && (
            <div className="p-8 bg-blue-50/50 rounded-[2.5rem] border border-blue-100 relative overflow-hidden">
               <div className="absolute top-0 right-0 p-4 opacity-10"><FileText size={40}/></div>
               <h4 className="text-[10px] font-black text-blue-600 uppercase tracking-widest mb-4 flex items-center gap-2">
                 <Info size={14}/> Executive Narrative
               </h4>
               <p className="text-sm leading-relaxed text-slate-700 font-medium italic">
                 "{data.description || data.bio || data.message}"
               </p>
            </div>
          )}
        </div>

        <div className="p-10 border-t border-slate-100 bg-slate-50 flex gap-4">
           <button className="flex-1 py-5 bg-slate-950 text-white rounded-3xl font-black text-[10px] uppercase tracking-widest hover:bg-blue-600 transition-all flex items-center justify-center gap-3 group shadow-xl">
             <Send size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
             Initiate Institutional Handshake
           </button>
           <button 
             onClick={() => onDelete(type, data._id)}
             className="p-5 bg-rose-50 text-rose-500 rounded-3xl hover:bg-rose-500 hover:text-white transition-all shadow-sm"
           >
             <Trash2 size={24} />
           </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

/** * ==========================================
 * V. MAIN CONTROLLER: COMMAND CENTER
 * ========================================== 
 */

export default function Admin() {
  const navigate = useNavigate();
  const mainRef = useRef(null);

  // --- Core State ---
  const [activeTab, setActiveTab] = useState("dashboard");
  const [data, setData] = useState({ founders: [], investors: [], mentors: [] });
  const [search, setSearch] = useState("");
  const [isSyncing, setIsSyncing] = useState(false);
  const [headerScrolled, setHeaderScrolled] = useState(false);
  const [selectedEntity, setSelectedEntity] = useState(null);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  // --- Handshake & Sync Protocol ---
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
      setTimeout(() => setIsSyncing(false), 600);
    }
  }, [navigate]);

  useEffect(() => {
    syncInfrastructure();
    const heartbeat = setInterval(syncInfrastructure, 60000);
    return () => clearInterval(heartbeat);
  }, [syncInfrastructure]);

  const handleEntityRemoval = async (type, id) => {
    if (!window.confirm("CRITICAL: Confirm permanent data erasure from sovereign database?")) return;
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
    } catch (err) { console.error("Removal Error:", err); }
  };

  // --- Analytical Computations ---
  const filteredAssets = useMemo(() => {
    if (activeTab === "dashboard") return [];
    return (data[activeTab] || []).filter(item => 
      item.name?.toLowerCase().includes(search.toLowerCase()) ||
      item.email?.toLowerCase().includes(search.toLowerCase()) ||
      item.startup?.toLowerCase().includes(search.toLowerCase())
    );
  }, [data, activeTab, search]);

  const dashboardMetrics = useMemo(() => [
    { id: 'f', label: "Founders (Vanguard)", val: data.founders.length, trend: "+12.4%", icon: <UserCircle/> },
    { id: 'i', label: "Investors (Syndicate)", val: data.investors.length, trend: "+4.1%", icon: <Briefcase/> },
    { id: 'm', label: "Advisors (Advisory)", val: data.mentors.length, trend: "+1.2%", icon: <GraduationCap/> },
  ], [data]);

  const chartData = useMemo(() => [
    { name: 'Jan', f: 45, i: 12, m: 5 },
    { name: 'Feb', f: 52, i: 18, m: 8 },
    { name: 'Mar', f: 48, i: 22, m: 12 },
    { name: 'Apr', f: 61, i: 30, m: 15 },
    { name: 'May', f: 55, i: 28, m: 18 },
    { name: 'Jun', f: 72, i: 35, m: 22 },
  ], []);

  /** * ==========================================
   * VI. RENDERING SUITE
   * ========================================== 
   */

  return (
    <div className="h-screen w-full bg-[#fcfdfe] flex font-sans text-slate-950 overflow-hidden select-none">
      
      {/* 1. SIDEBAR ARCHITECTURE */}
      <aside className={`
        ${sidebarCollapsed ? 'w-24' : 'w-80'} 
        bg-slate-950 flex flex-col relative z-30 transition-all duration-500 shadow-[20px_0_60px_rgba(0,0,0,0.1)]
      `}>
        <div className="p-8 h-full flex flex-col">
          {/* Brand Identity */}
          <div className="flex items-center gap-4 mb-16 group cursor-pointer overflow-hidden" onClick={() => setActiveTab('dashboard')}>
            <div className="min-w-[48px] h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white font-black italic shadow-2xl group-hover:rotate-12 transition-all">U</div>
            {!sidebarCollapsed && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <h2 className="text-xl font-black tracking-tighter text-white uppercase leading-none">Udaaro</h2>
                <p className="text-[9px] font-black text-blue-500 uppercase tracking-[0.4em] mt-1">Terminal_v2.6</p>
              </motion.div>
            )}
          </div>

          {/* Navigation Grid */}
          <nav className="space-y-3 flex-1">
            {!sidebarCollapsed && <span className="text-[9px] font-black text-slate-700 uppercase tracking-[0.5em] px-4 block mb-4">Core_Systems</span>}
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => { setActiveTab(tab.id); setSelectedEntity(null); }}
                className={`
                  flex items-center gap-4 w-full px-5 py-4 rounded-2xl font-black text-[11px] uppercase tracking-[0.2em] transition-all group
                  ${activeTab === tab.id ? 'bg-blue-600 text-white shadow-xl shadow-blue-500/20' : 'text-slate-500 hover:text-slate-300 hover:bg-white/5'}
                `}
              >
                <span className={`${activeTab === tab.id ? 'text-white' : 'text-slate-600 group-hover:text-blue-400'}`}>
                  {tab.icon}
                </span>
                {!sidebarCollapsed && <span>{tab.label}</span>}
              </button>
            ))}
          </nav>

          {/* System Utility */}
          <div className="mt-auto space-y-6 pt-10 border-t border-white/5">
             <div className="px-4">
                <div className="flex justify-between items-end mb-2">
                  {!sidebarCollapsed && <span className="text-[9px] text-slate-600 font-bold uppercase tracking-widest">DB_Sync</span>}
                  <span className="text-[9px] text-emerald-500 font-black">STABLE</span>
                </div>
                <div className="w-full h-1 bg-slate-900 rounded-full overflow-hidden">
                   <motion.div animate={{ width: isSyncing ? '100%' : '80%' }} className="h-full bg-blue-600" />
                </div>
             </div>
             
             <button 
                onClick={() => { localStorage.removeItem("token"); navigate("/admin-login"); }}
                className="flex items-center gap-4 text-slate-500 font-black text-[10px] uppercase tracking-widest hover:text-rose-500 transition-colors w-full px-4 group"
             >
                <LogOut size={16} className="group-hover:-translate-x-1 transition-transform"/>
                {!sidebarCollapsed && <span>Terminate</span>}
             </button>
          </div>
        </div>
      </aside>

      {/* 2. MAIN INTERFACE VIEWPORT */}
      <main 
        ref={mainRef}
        onScroll={(e) => setHeaderScrolled(e.target.scrollTop > 20)}
        className="flex-1 flex flex-col h-screen overflow-y-auto relative custom-scrollbar bg-[#f8fafc]"
      >
        {/* Top Header Bar */}
        <header className={`
          sticky top-0 z-40 transition-all duration-500 px-12 py-8 flex justify-between items-center
          ${headerScrolled ? 'bg-white/80 backdrop-blur-2xl border-b border-slate-100 shadow-sm py-6' : 'bg-transparent'}
        `}>
          <div className="flex items-center gap-6">
            <button 
              onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
              className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-500 transition-all shadow-sm"
            >
              <Command size={16} className="text-slate-500" />
            </button>
            <div>
              <div className="flex items-center gap-3">
                <h1 className="text-3xl font-black tracking-tighter capitalize italic text-slate-950">{activeTab}</h1>
                <Indicator />
              </div>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="hidden lg:flex items-center gap-6 px-6 py-2 bg-white border border-slate-200 rounded-2xl shadow-sm">
               <div className="flex items-center gap-2">
                 <Cpu size={14} className="text-blue-500" />
                 <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">v{APP_CONFIG.version}</span>
               </div>
               <div className="w-[1px] h-4 bg-slate-100" />
               <div className="flex items-center gap-2">
                 <Globe size={14} className="text-emerald-500" />
                 <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{APP_CONFIG.environment}</span>
               </div>
            </div>

            <motion.button 
              whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
              onClick={syncInfrastructure}
              className="p-4 bg-white border border-slate-200 rounded-2xl shadow-sm hover:border-blue-500 group transition-all"
            >
              <RefreshCcw size={18} className={`text-slate-500 group-hover:text-blue-600 ${isSyncing && 'animate-spin'}`} />
            </motion.button>

            <div className="h-10 w-[1px] bg-slate-200" />

            <div className="flex items-center gap-4">
              <div className="text-right hidden sm:block">
                 <p className="text-[10px] font-black text-slate-950 uppercase tracking-[0.2em] leading-none">Apurva P.</p>
                 <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-1">Sovereign_Root</p>
              </div>
              <div className="w-12 h-12 rounded-2xl border-2 border-white shadow-xl overflow-hidden ring-4 ring-slate-100 ring-offset-2">
                 <img src="https://ui-avatars.com/api/?name=Apurva+Priyadarshi&background=020617&color=fff" alt="Admin" />
              </div>
            </div>
          </div>
        </header>

        {/* 3. SCENE CONTENT SWITCHER */}
        <div className="p-12 max-w-[1600px] mx-auto w-full">
          <AnimatePresence mode="wait">
            {activeTab === "dashboard" ? (
              <motion.div 
                key="dashboard" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
                className="space-y-12"
              >
                {/* Dashboard Metrics Layer */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                  {dashboardMetrics.map((m, i) => (
                    <StatCard key={m.id} title={m.label} count={m.val} growth={m.trend} icon={m.icon} delay={i * 0.1} />
                  ))}
                </div>

                {/* Analytical Visualization Layer */}
                <div className="grid lg:grid-cols-2 gap-10">
                  <GlassPanel className="p-10" dark>
                    <ChartTitle title="Ecosystem Velocity" sub="Growth of Vanguard Assets" icon={<TrendingUp size={20}/>} />
                    <div className="h-[350px] w-full">
                      <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={chartData}>
                          <defs>
                            <linearGradient id="colorF" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="5%" stopColor={UI_THEME.primary} stopOpacity={0.4}/>
                              <stop offset="95%" stopColor={UI_THEME.primary} stopOpacity={0}/>
                            </linearGradient>
                          </defs>
                          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
                          <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 10}} />
                          <YAxis hide />
                          <Tooltip contentStyle={{backgroundColor: '#020617', border: '1px solid #1e293b', borderRadius: '16px'}} />
                          <Area type="monotone" dataKey="f" stroke={UI_THEME.primary} strokeWidth={4} fillOpacity={1} fill="url(#colorF)" />
                          <Area type="monotone" dataKey="i" stroke={UI_THEME.accent} strokeWidth={4} fill="transparent" />
                        </AreaChart>
                      </ResponsiveContainer>
                    </div>
                  </GlassPanel>

                  <GlassPanel className="p-10">
                    <ChartTitle title="Asset Synthesis" sub="Syndicate vs Advisory Distribution" icon={<PieChart size={20}/>} />
                    <div className="h-[350px] w-full">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={chartData}>
                          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                          <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 10}} />
                          <Tooltip cursor={{fill: 'transparent'}} contentStyle={{borderRadius: '16px', border: 'none', shadow: '0 20px 40px rgba(0,0,0,0.1)'}} />
                          <Bar dataKey="i" fill={UI_THEME.secondary} radius={[10, 10, 10, 10]} barSize={12} />
                          <Bar dataKey="m" fill={UI_THEME.accent} radius={[10, 10, 10, 10]} barSize={12} />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </GlassPanel>
                </div>

                {/* Sub-Metric Layer */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <MiniMetric label="Handshake Latency" val="14ms" trend="-2%" />
                  <MiniMetric label="Vetting Pipeline" val="186" trend="+24%" />
                  <MiniMetric label="Syndicate Volume" val="$4.2M" trend="+8%" />
                  <MiniMetric label="Alpha Cycle" val="26-A" trend="Stable" />
                </div>

                {/* System Audit Log */}
                <GlassPanel className="p-10">
                  <div className="flex justify-between items-center mb-8">
                    <div className="flex items-center gap-3">
                      <Terminal size={18} className="text-blue-600" />
                      <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em]">System_Audit_Log</h4>
                    </div>
                    <span className="px-3 py-1 bg-emerald-50 text-emerald-600 rounded-lg text-[9px] font-black tracking-widest border border-emerald-100">Handshake_Stable</span>
                  </div>
                  <div className="space-y-4 font-mono text-[11px]">
                    {[
                      { ev: "Institutional credential validation: Apurva_Root", time: "12:44:01", status: "SECURE" },
                      { ev: "Founder Vanguard bulk sync: 12 nodes updated", time: "12:42:15", status: "SYNCED" },
                      { ev: "Encrypted packet received: syndicate_alpha_09", time: "12:38:22", status: "DECRYPTED" },
                      { ev: "Security handshake with global gateway: Tokyo_Node", time: "12:35:10", status: "SUCCESS" },
                    ].map((log, i) => (
                      <div key={i} className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100 hover:bg-white transition-all">
                        <div className="flex gap-4 items-center">
                          <span className="text-slate-300">[{log.time}]</span>
                          <span className="text-slate-700 font-bold uppercase tracking-tight">{log.ev}</span>
                        </div>
                        <span className={`font-black ${log.status === 'SECURE' ? 'text-blue-600' : 'text-emerald-500'}`}>{log.status}</span>
                      </div>
                    ))}
                  </div>
                </GlassPanel>
              </motion.div>
            ) : (
              /* VIEW: ASSET EXPLORER / TABLE */
              <motion.div 
                key="list" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
                className="bg-white rounded-[4rem] shadow-sm border border-slate-100 overflow-hidden"
              >
                {/* Smart Filtering Toolbar */}
                <div className="p-10 border-b border-slate-50 flex flex-col xl:flex-row justify-between items-center gap-8 bg-slate-50/30">
                  <div className="relative flex-1 w-full max-w-2xl">
                    <Search className="absolute left-7 top-1/2 -translate-y-1/2 text-slate-300" size={20} />
                    <input
                      type="text"
                      placeholder={`Query metadata in ${activeTab} cluster...`}
                      className="w-full pl-16 pr-8 py-6 bg-white border-none rounded-3xl focus:ring-2 focus:ring-blue-600 transition-all font-bold text-sm shadow-sm"
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                    />
                  </div>
                  <div className="flex gap-4 w-full xl:w-auto">
                    <button onClick={exportData} className="flex-1 flex items-center justify-center gap-3 px-8 py-5 bg-white border border-slate-200 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:border-blue-500 transition-all">
                      <FileDown size={14} /> Export_Report
                    </button>
                    <button className="flex-1 flex items-center justify-center gap-3 px-8 py-5 bg-slate-950 text-white rounded-2xl font-black text-[10px] uppercase tracking-widest shadow-xl hover:bg-blue-600 transition-all">
                      <Filter size={14} /> Matrix_Filter
                    </button>
                  </div>
                </div>

                {/* Sovereign Table Engine */}
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="text-slate-400 text-[10px] font-black uppercase tracking-[0.4em]">
                        <th className="px-12 py-10 italic">Identity_Protocol</th>
                        <th className="px-12 py-10 italic">Asset_Origin / Sector</th>
                        <th className="px-12 py-10 italic">Institutional_Tier</th>
                        <th className="px-12 py-10 italic">Status</th>
                        <th className="px-12 py-10 text-right italic">Action_Suite</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-50">
                      {filteredAssets.map((asset, idx) => (
                        <motion.tr 
                          key={asset._id} 
                          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: idx * 0.03 }}
                          className="hover:bg-blue-50/40 transition-all group"
                        >
                          <td className="px-12 py-10">
                            <div className="flex items-center gap-4">
                               <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-400 font-black group-hover:bg-blue-600 group-hover:text-white transition-all shadow-inner">
                                 {asset.name?.charAt(0)}
                               </div>
                               <div>
                                  <div className="font-black text-slate-900 text-base tracking-tighter leading-none">{asset.name}</div>
                                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1.5">{asset.email}</div>
                               </div>
                            </div>
                          </td>
                          <td className="px-12 py-10">
                            <div className="text-sm font-black text-slate-700 italic leading-none truncate max-w-[180px]">
                              {asset.startup || asset.firm || asset.expertise || "DECENTRALIZED"}
                            </div>
                            <div className="text-[9px] font-black text-blue-500 uppercase tracking-widest mt-1.5 opacity-60">
                                {asset.industry || asset.sector || "GENERAL_MARKET"}
                            </div>
                          </td>
                          <td className="px-12 py-10">
                            <span className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-[9px] font-black uppercase tracking-tighter border border-blue-100 shadow-sm">
                                {asset.stage || asset.experienceLevel || asset.preferredStage || 'ALPHA_CYCLE'}
                            </span>
                          </td>
                          <td className="px-12 py-10">
                             <div className="flex items-center gap-2 text-emerald-500 font-black text-[10px] uppercase tracking-widest">
                                <Activity size={12} className="animate-pulse" />
                                Live_Node
                             </div>
                          </td>
                          <td className="px-12 py-10 text-right">
                             <div className="flex justify-end gap-3 opacity-0 group-hover:opacity-100 transition-all translate-x-4 group-hover:translate-x-0">
                                <button 
                                  onClick={() => setSelectedEntity(asset)}
                                  className="p-4 bg-white shadow-xl border border-slate-100 rounded-2xl hover:text-blue-600 hover:scale-110 transition-all"
                                >
                                  <Eye size={18} />
                                </button>
                                <button 
                                  onClick={() => handleEntityRemoval(activeTab, asset._id)}
                                  className="p-4 bg-white shadow-xl border border-rose-50 rounded-2xl text-slate-300 hover:text-rose-600 hover:scale-110 transition-all"
                                >
                                  <Trash2 size={18} />
                                </button>
                             </div>
                          </td>
                        </motion.tr>
                      ))}
                    </tbody>
                  </table>
                  
                  {filteredAssets.length === 0 && (
                    <div className="p-40 text-center flex flex-col items-center">
                       <div className="w-32 h-32 rounded-[3rem] bg-slate-50 flex items-center justify-center text-slate-200 mb-8 border-2 border-dashed border-slate-100">
                         <ShieldAlert size={64} />
                       </div>
                       <p className="text-slate-400 font-black text-[10px] uppercase tracking-[0.5em] mb-2">Zero Assets Detected</p>
                       <p className="text-slate-300 text-xs font-medium italic">Protocol verification: Cluster search returned null.</p>
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>

      {/* 4. MODAL OVERLAY LAYER */}
      <AnimatePresence>
        {selectedEntity && (
          <InspectorModal 
            data={selectedEntity} 
            type={activeTab} 
            onClose={() => setSelectedEntity(null)} 
            onDelete={handleEntityRemoval}
          />
        )}
      </AnimatePresence>

      {/* 5. FLOATING HANDSHAKE ACTION */}
      <div className="fixed bottom-12 right-12 z-50">
         <motion.button 
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            className="w-16 h-16 bg-slate-950 text-white rounded-[1.8rem] flex items-center justify-center shadow-2xl border border-white/10 ring-8 ring-slate-950/10"
         >
            <Bell size={24} />
            <div className="absolute top-0 right-0 w-4 h-4 bg-blue-600 rounded-full border-4 border-slate-950" />
         </motion.button>
      </div>
    </div>
  );
}