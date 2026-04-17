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
  Maximize2, Minimize2, Command, Terminal, Linkedin, IndianRupee, Binary
} from "lucide-react";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  AreaChart, Area, PieChart, Pie, Cell, LineChart, Line, Legend
} from "recharts";

/** * =============================================================================
 * I. INFRASTRUCTURE & TERMINAL CONFIGURATION
 * Design System: Alpha-Sovereign Admin v2.9.4
 * Architected by Apurva Priyadarshi | Environment: Institutional Node
 * =============================================================================
 */

const APP_CONFIG = {
  version: "2.9.4-Stable",
  codename: "Sovereign_Handshake",
  node: "UDAARO_MAIN_TERMINAL",
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
 * II. UI ATOMS (PREMIUM BUILDING BLOCKS)
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

const NodeIndicator = ({ status = "active", label }) => (
  <div className="flex items-center gap-3 px-4 py-2 bg-slate-900/50 rounded-full border border-white/5">
    <div className={`w-2 h-2 rounded-full ${status === 'active' ? 'bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.8)]' : 'bg-rose-500'}`} />
    <span className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-400">{label || `NODE_${status.toUpperCase()}`}</span>
  </div>
);

/** * =============================================================================
 * III. DEEP ANALYTICS COMPONENTS (Localized for India)
 * =============================================================================
 */

const ChartTitle = ({ title, sub, icon }) => (
  <div className="flex items-center gap-5 mb-12">
    <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shadow-inner">
      {icon}
    </div>
    <div>
      <h4 className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-400 leading-none mb-1">{title}</h4>
      <p className="text-xl font-bold italic tracking-tight text-slate-900 leading-none uppercase">{sub}</p>
    </div>
  </div>
);

/** * =============================================================================
 * IV. DATA INSPECTOR MODAL (FULL ENTITY VIEW)
 * =============================================================================
 */

const InspectorModal = ({ data, type, onClose, onDelete }) => {
  if (!data) return null;

  const DetailField = ({ label, value, icon, full = false }) => (
    <div className={`${full ? 'col-span-2' : 'col-span-1'} p-8 bg-slate-50/50 rounded-[2.5rem] border border-slate-100 group hover:bg-white hover:shadow-xl transition-all duration-500`}>
      <div className="flex items-center gap-3 mb-3 text-slate-400 group-hover:text-blue-600 transition-colors">
        {icon}
        <span className="text-[10px] font-black uppercase tracking-[0.2em]">{label}</span>
      </div>
      <p className="text-base font-bold text-slate-950 break-words capitalize italic">{value || "Handshake_Pending"}</p>
    </div>
  );

  return (
    <motion.div 
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-end bg-slate-950/60 backdrop-blur-md p-4"
    >
      <motion.div 
        initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
        transition={{ type: "spring", damping: 30, stiffness: 200 }}
        className="w-full max-w-3xl h-full bg-white rounded-[4rem] shadow-6xl overflow-hidden flex flex-col relative"
      >
        <div className="p-12 bg-slate-950 text-white flex justify-between items-start relative overflow-hidden">
          {/* Background Branding Elements */}
          <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none rotate-12">
             <Fingerprint size={350} />
          </div>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-600 to-transparent opacity-50" />
          
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-6">
              <div className="px-4 py-1.5 bg-blue-600 rounded-xl text-[10px] font-black uppercase tracking-widest shadow-xl">Protocol_Inspection</div>
              <span className="text-[10px] font-mono text-slate-500 uppercase font-bold tracking-widest">ID: {data._id}</span>
            </div>
            <h2 className="text-6xl font-black tracking-tighter italic uppercase leading-none">{data.name}</h2>
            <div className="flex items-center gap-3 mt-4">
              <Globe size={14} className="text-blue-400" />
              <p className="text-blue-400 font-mono text-sm uppercase tracking-[0.3em] font-bold">{data.industry || data.sector || "General_Market"}</p>
            </div>
          </div>
          <button onClick={onClose} className="relative z-10 p-5 bg-white/5 border border-white/10 rounded-[2rem] hover:bg-rose-500 transition-all active:scale-90">
            <X size={24} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-12 custom-scrollbar space-y-16">
          {/* Identity Handshake Layer */}
          <div className="animate-in fade-in slide-in-from-bottom-6 duration-700">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shadow-inner"><User size={20}/></div>
              <h4 className="text-[11px] font-black uppercase tracking-[0.5em] text-slate-400">Handshake Credentials</h4>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <DetailField label="Protocol Email" value={data.email} icon={<Mail size={14}/>} />
              <DetailField label="Secure Mobile" value={data.phone || data.whatsapp || "Non_Cellular"} icon={<Smartphone size={14}/>} />
              <DetailField label="Geographic Node" value={data.location || "India_Standard"} icon={<MapPin size={14}/>} />
              <DetailField label="Venture Phase" value={data.stage || data.experienceLevel || data.preferredStage} icon={<Activity size={14}/>} />
            </div>
          </div>

          {/* Institutional Asset Layer */}
          <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-10 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center shadow-inner"><Building size={20}/></div>
              <h4 className="text-[11px] font-black uppercase tracking-[0.5em] text-slate-400">Venture Framework</h4>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <DetailField label="Organization" value={data.startup || data.firm || data.expertise} icon={<Layers size={14}/>} full />
              <DetailField label="Market Sector" value={data.industry || data.sector} icon={<Target size={14}/>} />
              <DetailField label="Vetting Status" value="LEVEL_01_SYNCHRONIZED" icon={<ShieldCheck size={14}/>} />
              {data.fundingNeeded && <DetailField label="Capital Requirement" value={`₹${data.fundingNeeded}`} icon={<IndianRupee size={14}/>} />}
              {data.ticketSize && <DetailField label="Deployment Capacity" value={data.ticketSize} icon={<Briefcase size={14}/>} />}
            </div>
          </div>

          {/* Deep Narrative Logic */}
          {(data.description || data.bio || data.message) && (
            <div className="animate-in fade-in slide-in-from-bottom-10 duration-700 delay-200">
              <div className="p-10 bg-blue-50/30 rounded-[3rem] border border-blue-100 relative group overflow-hidden">
                 <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity"><FileText size={80}/></div>
                 <h4 className="text-[10px] font-black text-blue-600 uppercase tracking-[0.4em] mb-6 flex items-center gap-3">
                   <Info size={16}/> Executive Intelligence Narrative
                 </h4>
                 <p className="text-lg leading-relaxed text-slate-800 font-medium italic">
                   "{data.description || data.bio || data.message}"
                 </p>
              </div>
            </div>
          )}
          
          {data.linkedin && (
             <div className="animate-in fade-in slide-in-from-bottom-12 duration-700 delay-300">
                <a href={data.linkedin} target="_blank" rel="noreferrer" className="flex items-center justify-between p-8 bg-slate-900 rounded-[2.5rem] group hover:bg-blue-600 transition-all duration-500">
                   <div className="flex items-center gap-6">
                      <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-white"><Linkedin size={24}/></div>
                      <div>
                         <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest group-hover:text-blue-100 transition-colors">Identity Verification</p>
                         <p className="text-white font-black italic uppercase tracking-tighter">View LinkedIn Pulse</p>
                      </div>
                   </div>
                   <ExternalLink className="text-slate-500 group-hover:text-white transition-colors" size={20} />
                </a>
             </div>
          )}
        </div>

        <div className="p-12 border-t border-slate-100 bg-slate-50 flex gap-6">
           <button className="flex-1 py-6 bg-slate-950 text-white rounded-[2rem] font-black text-[12px] uppercase tracking-[0.4em] hover:bg-blue-600 hover:shadow-6xl shadow-blue-500/30 transition-all flex items-center justify-center gap-4 group">
             <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
             Execute Institutional Reachout
           </button>
           <button 
             onClick={() => onDelete(type, data._id)}
             className="p-6 bg-rose-50 text-rose-500 rounded-[2rem] hover:bg-rose-600 hover:text-white transition-all shadow-lg active:scale-90"
           >
             <Trash2 size={28} />
           </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

/** * =============================================================================
 * V. MAIN CONTROLLER: THE UDAARO COMMAND CENTER
 * =============================================================================
 */

export default function Admin() {
  const navigate = useNavigate();
  const mainRef = useRef(null);

  // --- Real-Time State ---
  const [activeTab, setActiveTab] = useState("dashboard");
  const [data, setData] = useState({ founders: [], investors: [], mentors: [] });
  const [search, setSearch] = useState("");
  const [isSyncing, setIsSyncing] = useState(false);
  const [headerScrolled, setHeaderScrolled] = useState(false);
  const [selectedEntity, setSelectedEntity] = useState(null);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  // --- Handshake & Protocol Synchronization ---
  const syncInfrastructureNodes = useCallback(async () => {
    const token = localStorage.getItem("token");
    if (!token) { navigate("/admin-login"); return; }
    
    setIsSyncing(true);
    const headers = { Authorization: `Bearer ${token}` };

    try {
      const clusters = ["founders", "investors", "mentors"];
      const handshakeResults = await Promise.all(
        clusters.map(node => fetch(`${APP_CONFIG.apiBase}/api/${node}`, { headers }).then(r => r.json()))
      );

      setData({
        founders: Array.isArray(handshakeResults[0]) ? handshakeResults[0] : [],
        investors: Array.isArray(handshakeResults[1]) ? handshakeResults[1] : [],
        mentors: Array.isArray(handshakeResults[2]) ? handshakeResults[2] : [],
      });
    } catch (err) {
      console.error("Infrastructure Sync Critical Failure:", err);
    } finally {
      setTimeout(() => setIsSyncing(false), 800);
    }
  }, [navigate]);

  useEffect(() => {
    syncInfrastructureNodes();
    const heartbeat = setInterval(syncInfrastructureNodes, 60000); // 60s pulse
    return () => clearInterval(heartbeat);
  }, [syncInfrastructureNodes]);

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
        syncInfrastructureNodes();
      }
    } catch (err) { alert("TERMINAL_EXECUTION_FAILURE"); }
  };

  // --- Analytical Aggregations ---
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

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/admin-login");
  };

  /** * =============================================================================
   * VI. RENDERING ENGINE (COMMAND CENTER UI)
   * ============================================================================= */

  return (
    <div className="h-screen w-full bg-[#fcfdfe] flex font-sans text-slate-950 overflow-hidden select-none">
      
      {/* 1. SOVEREIGN SIDEBAR */}
      <aside className={`
        ${sidebarCollapsed ? 'w-24' : 'w-80'} 
        bg-slate-950 flex flex-col relative z-30 transition-all duration-500 shadow-7xl
      `}>
        <div className="p-10 h-full flex flex-col">
          {/* Institutional Branding */}
          <div className="flex items-center gap-5 mb-20 group cursor-pointer overflow-hidden" onClick={() => setActiveTab('dashboard')}>
            <div className="min-w-[48px] h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white font-black italic shadow-3xl shadow-blue-500/20 group-hover:rotate-12 transition-all duration-500">U</div>
            {!sidebarCollapsed && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <h2 className="text-xl font-black tracking-tighter text-white uppercase leading-none">Udaaro</h2>
                <p className="text-[9px] font-black text-blue-500 uppercase tracking-[0.5em] mt-1.5 italic">Terminal_v2.9</p>
              </motion.div>
            )}
          </div>

          {/* Navigation Control Grid */}
          <nav className="space-y-4 flex-1">
            {!sidebarCollapsed && <span className="text-[10px] font-black text-slate-700 uppercase tracking-[0.5em] px-5 block mb-6">Access_Nodes</span>}
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => { setActiveTab(tab.id); setSelectedEntity(null); }}
                className={`
                  flex items-center gap-5 w-full px-5 py-5 rounded-[1.8rem] font-black text-[12px] uppercase tracking-[0.2em] transition-all duration-500 group
                  ${activeTab === tab.id ? 'bg-blue-600 text-white shadow-6xl shadow-blue-600/30' : 'text-slate-500 hover:text-slate-300 hover:bg-white/5'}
                `}
              >
                <span className={`${activeTab === tab.id ? 'text-white' : 'text-slate-600 group-hover:text-blue-400'} transition-colors`}>
                  {tab.icon}
                </span>
                {!sidebarCollapsed && <span>{tab.label}</span>}
              </button>
            ))}
          </nav>

          {/* Infrastructure Stability Nodes */}
          <div className="mt-auto space-y-8 pt-10 border-t border-white/5">
             <div className="px-5">
                <div className="flex justify-between items-end mb-3">
                  {!sidebarCollapsed && <span className="text-[9px] text-slate-600 font-black uppercase tracking-widest">Mainframe_Sync</span>}
                  <span className="text-[9px] text-emerald-500 font-black italic">CONNECTED</span>
                </div>
                <div className="w-full h-1 bg-slate-900 rounded-full overflow-hidden">
                   <motion.div animate={{ width: isSyncing ? '100%' : '100%' }} transition={{ duration: 1 }} className="h-full bg-blue-600 shadow-[0_0_10px_rgba(37,99,235,0.8)]" />
                </div>
             </div>
             
             <button 
                onClick={handleLogout}
                className="flex items-center gap-5 text-slate-500 font-black text-[11px] uppercase tracking-widest hover:text-rose-500 transition-all w-full px-5 group"
             >
                <LogOut size={18} className="group-hover:-translate-x-2 transition-transform duration-300"/>
                {!sidebarCollapsed && <span>Terminate_Node</span>}
             </button>
          </div>
        </div>
      </aside>

      {/* 2. PRIMARY VIEWPORT */}
      <main 
        ref={mainRef}
        onScroll={(e) => setHeaderScrolled(e.target.scrollTop > 20)}
        className="flex-1 flex flex-col h-screen overflow-y-auto relative bg-[#f8fafc] custom-scrollbar"
      >
        {/* Global Header Protocol */}
        <header className={`
          sticky top-0 z-40 transition-all duration-700 px-12 py-10 flex justify-between items-center
          ${headerScrolled ? 'bg-white/70 backdrop-blur-3xl border-b border-slate-100 shadow-xl py-8' : 'bg-transparent'}
        `}>
          <div className="flex items-center gap-8">
            <button 
              onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
              className="p-4 bg-white border border-slate-200 rounded-2xl hover:border-blue-600 transition-all shadow-sm active:scale-90"
            >
              <Command size={18} className="text-slate-500" />
            </button>
            <div>
              <div className="flex items-center gap-4">
                <h1 className="text-4xl font-black tracking-tighter capitalize italic text-slate-950 leading-none uppercase">{activeTab}</h1>
                <NodeIndicator label="Live_Handshake" status="active" />
              </div>
            </div>
          </div>

          <div className="flex items-center gap-8">
            <div className="hidden lg:flex items-center gap-8 px-8 py-3 bg-white border border-slate-200 rounded-[1.5rem] shadow-sm">
               <div className="flex items-center gap-3">
                 <Cpu size={16} className="text-blue-500" />
                 <span className="text-[11px] font-black text-slate-500 uppercase tracking-widest italic">{APP_CONFIG.version}</span>
               </div>
               <div className="w-[1px] h-5 bg-slate-100" />
               <div className="flex items-center gap-3">
                 <Globe size={16} className="text-emerald-500" />
                 <span className="text-[11px] font-black text-slate-500 uppercase tracking-widest italic">{APP_CONFIG.environment}</span>
               </div>
            </div>

            <motion.button 
              whileHover={{ scale: 1.1, rotate: 180 }} whileTap={{ scale: 0.9 }}
              onClick={syncInfrastructureNodes}
              className="p-4 bg-white border border-slate-200 rounded-2xl shadow-sm hover:border-blue-600 transition-all duration-500"
            >
              <RefreshCcw size={20} className={`text-slate-500 ${isSyncing && 'animate-spin'}`} />
            </motion.button>

            <div className="h-10 w-[1px] bg-slate-200" />

            <div className="flex items-center gap-5 group cursor-pointer">
              <div className="text-right hidden sm:block">
                 <p className="text-[11px] font-black text-slate-950 uppercase tracking-[0.2em] leading-none">Apurva P.</p>
                 <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1.5 italic">Sovereign_Admin</p>
              </div>
              <div className="w-14 h-14 rounded-2xl border-4 border-white shadow-6xl overflow-hidden ring-1 ring-slate-200 transition-all group-hover:ring-blue-500">
                 <img src={`https://ui-avatars.com/api/?name=Apurva+Priyadarshi&background=020617&color=fff`} alt="Root Admin" />
              </div>
            </div>
          </div>
        </header>

        {/* 3. DYNAMIC CONTENT COORDINATES */}
        <div className="p-12 max-w-[1800px] mx-auto w-full">
          <AnimatePresence mode="wait">
            {activeTab === "dashboard" ? (
              <motion.div 
                key="dashboard" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-16"
              >
                {/* Dashboard Metrics Matrix */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                  {dashboardMetrics.map((m, i) => (
                    <StatCard key={m.id} title={m.label} count={m.val} growth={m.trend} icon={m.icon} delay={i * 0.1} />
                  ))}
                </div>
                {/* --- Ecosystem Velocity Area Chart --- */}
<GlassPanel className="p-10" dark>
  <ChartTitle title="Ecosystem Velocity" sub="Growth of Vanguard Assets" icon={<TrendingUp size={20}/>} />
  
  {/* FIX: This wrapper MUST have a height (e.g., h-[350px] or h-96) */}
  <div className="h-[350px] w-full"> 
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart data={chartData}>
        {/* ... AreaChart contents ... */}
      </AreaChart>
    </ResponsiveContainer>
  </div>
</GlassPanel>

{/* --- Asset Synthesis Bar Chart --- */}
<GlassPanel className="p-10">
  <ChartTitle title="Asset Synthesis" sub="Syndicate vs Advisory Distribution" icon={<PieChart size={20}/>} />
  
  {/* FIX: Same applies here */}
  <div className="h-[350px] w-full">
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={chartData}>
        {/* ... BarChart contents ... */}
      </BarChart>
    </ResponsiveContainer>
  </div>
</GlassPanel>

                {/* Intellectual Analytics Layer */}
                <div className="grid lg:grid-cols-2 gap-12">
                  <GlassPanel className="p-12" dark>
                    <ChartTitle title="Ecosystem Velocity" sub="Growth of Vanguard Assets" icon={<TrendingUp size={24}/>} />
                    <div className="h-[400px] w-full">
                      <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={timeSeriesData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                          <defs>
                            <linearGradient id="colorF" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="5%" stopColor={UI_THEME.primary} stopOpacity={0.6}/>
                              <stop offset="95%" stopColor={UI_THEME.primary} stopOpacity={0}/>
                            </linearGradient>
                          </defs>
                          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
                          <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 11, fontWeight: 'bold'}} />
                          <YAxis hide />
                          <Tooltip contentStyle={{backgroundColor: '#020617', border: '1px solid #1e293b', borderRadius: '24px', padding: '15px'}} />
                          <Area type="monotone" dataKey="f" stroke={UI_THEME.primary} strokeWidth={6} fillOpacity={1} fill="url(#colorF)" />
                        </AreaChart>
                      </ResponsiveContainer>
                    </div>
                  </GlassPanel>

                  <GlassPanel className="p-12">
                    <ChartTitle title="Asset Synthesis" sub="Syndicate vs Advisory Load" icon={<PieChart size={24}/>} />
                    <div className="h-[400px] w-full">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={timeSeriesData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                          <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 11, fontWeight: 'bold'}} />
                          <Tooltip cursor={{fill: 'rgba(0,0,0,0.02)'}} contentStyle={{borderRadius: '24px', border: 'none', boxShadow: '0 40px 80px rgba(0,0,0,0.1)'}} />
                          <Bar dataKey="i" fill={UI_THEME.secondary} radius={[12, 12, 12, 12]} barSize={16} />
                          <Bar dataKey="m" fill={UI_THEME.accent} radius={[12, 12, 12, 12]} barSize={16} />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </GlassPanel>
                </div>

                {/* Industrial Metric Sub-Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                  <MiniMetric label="Handshake Latency" val="12ms" trend="-4%" />
                  <MiniMetric label="Vetting Pipeline" val="192" trend="+18%" />
                  <MiniMetric label="Deployment Rate" val="₹18Cr" trend="+31%" />
                  <MiniMetric label="Alpha Entropy" val="2.9" trend="Stable" />
                </div>

                {/* Audit & Security Terminal Log */}
                <GlassPanel className="p-12">
                  <div className="flex justify-between items-center mb-12">
                    <div className="flex items-center gap-4">
                      <Terminal size={22} className="text-blue-600" />
                      <h4 className="text-[11px] font-black text-slate-400 uppercase tracking-[0.5em]">Institutional_Audit_Log</h4>
                    </div>
                    <div className="flex gap-2">
                       <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                       <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 opacity-20" />
                    </div>
                  </div>
                  <div className="space-y-6 font-mono text-[12px]">
                    {[
                      { ev: "Institutional credential sync: UDAARO_ROOT", time: "02:44:01 PM", status: "ENCRYPTED" },
                      { ev: "Founder Vanguard cluster update: 14 nodes synchronized", time: "02:42:15 PM", status: "STABLE" },
                      { ev: "Security handshake with global gateway: Tokyo_Alpha_02", time: "02:38:22 PM", status: "SECURE" },
                      { ev: "Packet relay from Syndicate node: BLR_VENTURE_09", time: "02:35:10 PM", status: "RECEIVED" },
                      { ev: "Vetting protocol automated sweep complete", time: "02:30:44 PM", status: "SUCCESS" }
                    ].map((log, i) => (
                      <div key={i} className="flex items-center justify-between p-5 bg-slate-50/50 rounded-3xl border border-slate-100 hover:bg-white hover:border-blue-100 transition-all duration-500 group cursor-default">
                        <div className="flex gap-6 items-center">
                          <span className="text-slate-300 font-bold">[{log.time}]</span>
                          <span className="text-slate-800 font-black uppercase tracking-tight group-hover:text-blue-600 transition-colors">{log.ev}</span>
                        </div>
                        <div className="flex items-center gap-3">
                           <span className={`font-black text-[10px] tracking-widest ${log.status === 'ENCRYPTED' ? 'text-blue-600' : 'text-emerald-500'}`}>{log.status}</span>
                           <ShieldCheck size={14} className="text-slate-200" />
                        </div>
                      </div>
                    ))}
                  </div>
                </GlassPanel>
              </motion.div>
            ) : (
              /* VIEW: ASSET EXPLORER / GLOBAL TABLE */
              <motion.div 
                key="list" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="bg-white rounded-[5rem] shadow-7xl border border-slate-100 overflow-hidden"
              >
                {/* Advanced Multi-Layer Toolbar */}
                <div className="p-12 border-b border-slate-50 flex flex-col xl:flex-row justify-between items-center gap-12 bg-slate-50/30 backdrop-blur-3xl">
                  <div className="relative flex-1 w-full max-w-3xl">
                    <Search className="absolute left-8 top-1/2 -translate-y-1/2 text-slate-300" size={24} />
                    <input
                      type="text"
                      placeholder={`Query metadata within the ${activeTab} cluster...`}
                      className="w-full pl-20 pr-10 py-8 bg-white border-none rounded-[2.5rem] focus:ring-4 focus:ring-blue-600/10 transition-all font-black text-lg shadow-xl shadow-slate-200/50 outline-none placeholder:text-slate-200 italic"
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                    />
                  </div>
                  <div className="flex gap-6 w-full xl:w-auto">
                    <button onClick={exportData} className="flex-1 px-10 py-6 bg-white border border-slate-200 rounded-[2rem] font-black text-[12px] uppercase tracking-widest hover:border-blue-600 hover:text-blue-600 transition-all flex items-center justify-center gap-4 shadow-sm">
                      <FileDown size={18} /> Export_Report
                    </button>
                    <button className="flex-1 px-10 py-6 bg-slate-950 text-white rounded-[2rem] font-black text-[12px] uppercase tracking-widest shadow-6xl hover:bg-blue-600 transition-all flex items-center justify-center gap-4">
                      <Filter size={18} /> Matrix_Filter
                    </button>
                  </div>
                </div>

                {/* Sovereign Data Engine (Table) */}
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="text-slate-400 text-[11px] font-black uppercase tracking-[0.5em] bg-slate-50/50">
                        <th className="px-16 py-12 italic border-b border-slate-100">Identity_Protocol</th>
                        <th className="px-16 py-12 italic border-b border-slate-100">Origin / Sector</th>
                        <th className="px-16 py-12 italic border-b border-slate-100">Institutional_Tier</th>
                        <th className="px-16 py-12 italic border-b border-slate-100">Sync_Status</th>
                        <th className="px-16 py-12 text-right italic border-b border-slate-100">Control_Suite</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-50">
                      {filteredAssets.map((asset, idx) => (
                        <motion.tr 
                          key={asset._id} 
                          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: idx * 0.04 }}
                          className="hover:bg-blue-50/40 transition-all group cursor-default"
                        >
                          <td className="px-16 py-12">
                            <div className="flex items-center gap-6">
                               <div className="w-16 h-16 rounded-3xl bg-slate-100 flex items-center justify-center text-slate-400 font-black group-hover:bg-blue-600 group-hover:text-white transition-all shadow-inner text-xl italic uppercase">
                                 {asset.name?.charAt(0)}
                               </div>
                               <div>
                                  <div className="font-black text-slate-950 text-xl tracking-tighter leading-none mb-1.5 uppercase italic">{asset.name}</div>
                                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">{asset.email}</div>
                               </div>
                            </div>
                          </td>
                          <td className="px-16 py-12">
                            <div className="text-base font-black text-slate-700 italic leading-none truncate max-w-[220px] uppercase tracking-tighter">
                              {asset.startup || asset.firm || asset.expertise || "DECENTRALIZED"}
                            </div>
                            <div className="text-[10px] font-black text-blue-500 uppercase tracking-widest mt-2.5 opacity-60 italic">
                                {asset.industry || asset.sector || "GLOBAL_CLUSTER"}
                            </div>
                          </td>
                          <td className="px-16 py-12">
                            <span className="px-6 py-2.5 bg-blue-50 text-blue-700 rounded-full text-[10px] font-black uppercase tracking-widest border border-blue-100 shadow-sm">
                                {asset.stage || asset.experienceLevel || asset.preferredStage || 'ALPHA_NODE'}
                            </span>
                          </td>
                          <td className="px-16 py-12">
                             <div className="flex items-center gap-3 text-emerald-500 font-black text-[11px] uppercase tracking-[0.2em] italic">
                                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                Synchronized
                             </div>
                          </td>
                          <td className="px-16 py-12 text-right">
                             <div className="flex justify-end gap-5 opacity-0 group-hover:opacity-100 transition-all translate-x-6 group-hover:translate-x-0">
                                <button 
                                  onClick={() => setSelectedEntity(asset)}
                                  className="p-5 bg-white shadow-2xl border border-slate-100 rounded-[1.5rem] hover:text-blue-600 hover:scale-110 active:scale-90 transition-all shadow-slate-900/5"
                                >
                                  <Eye size={22} />
                                </button>
                                <button 
                                  onClick={() => handleEntityErasure(activeTab, asset._id)}
                                  className="p-5 bg-white shadow-2xl border border-rose-50 rounded-[1.5rem] text-slate-300 hover:text-rose-600 hover:scale-110 active:scale-90 transition-all shadow-slate-900/5"
                                >
                                  <Trash2 size={22} />
                                </button>
                             </div>
                          </td>
                        </motion.tr>
                      ))}
                    </tbody>
                  </table>
                  
                  {filteredAssets.length === 0 && (
                    <div className="p-56 text-center flex flex-col items-center">
                       <div className="w-40 h-40 rounded-[4rem] bg-slate-50 flex items-center justify-center text-slate-100 mb-10 border-4 border-dashed border-slate-100 animate-pulse">
                         <ShieldAlert size={80} />
                       </div>
                       <h5 className="text-slate-400 font-black text-2xl uppercase tracking-tighter italic">Zero Entities Detected</h5>
                       <p className="text-slate-300 text-sm font-bold uppercase tracking-widest mt-4">Protocol verification: Query cluster returned null.</p>
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>

      {/* 4. MODAL OVERLAY: INSPECTION LAYER */}
      <AnimatePresence>
        {selectedEntity && (
          <InspectorModal 
            data={selectedEntity} 
            type={activeTab} 
            onClose={() => setSelectedEntity(null)} 
            onDelete={handleEntityErasure}
          />
        )}
      </AnimatePresence>

      {/* 5. FLOATING SYSTEM NOTIFIER */}
      <div className="fixed bottom-16 right-16 z-[60]">
         <motion.button 
            whileHover={{ scale: 1.2, rotate: 90, boxShadow: "0 0 50px rgba(37,99,235,0.4)" }}
            whileTap={{ scale: 0.8 }}
            className="w-20 h-20 bg-slate-950 text-white rounded-[2.5rem] flex items-center justify-center shadow-7xl border-2 border-white/10 relative"
         >
            <Bell size={28} />
            <div className="absolute top-0 right-0 w-5 h-5 bg-blue-600 rounded-full border-4 border-slate-950" />
         </motion.button>
      </div>
      
      {/* Infrastructure Footer Meta */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 hidden xl:block">
         <p className="text-[10px] font-black text-slate-300 uppercase tracking-[0.8em] italic">Governance Protocol v2.9 Stable Core — Apurva Priyadarshi Architect</p>
      </div>
    </div>
  );
}

/** * =============================================================================
 * V. ATOMIC SUB-COMPONENTS
 * ============================================================================= */

const StatCard = ({ title, count, growth, icon, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    whileHover={{ y: -10, scale: 1.02 }}
    className="bg-white p-10 rounded-[3.5rem] shadow-6xl border border-slate-100 flex flex-col justify-between group hover:border-blue-500/40 transition-all duration-700 relative overflow-hidden"
  >
    <div className="absolute -right-8 -top-8 p-16 opacity-[0.03] group-hover:scale-150 group-hover:opacity-10 transition-all duration-[2s] text-slate-950">
      {icon}
    </div>
    <div className="relative z-10">
      <div className="flex items-center gap-4 text-blue-600 mb-10 font-black text-[11px] uppercase tracking-[0.4em]">
        <div className="p-3 rounded-2xl bg-blue-50 text-blue-600 shadow-inner group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">{icon}</div>
        {title}
      </div>
      <p className="text-7xl font-black tracking-tighter leading-none text-slate-950 italic uppercase">{count}</p>
      <div className="mt-12 flex items-center justify-between">
        <div className="flex items-center gap-2">
           <span className={`flex items-center gap-1.5 text-[11px] font-black uppercase tracking-widest ${growth.startsWith('+') ? 'text-emerald-500' : 'text-rose-500'}`}>
             {growth.startsWith('+') ? <ArrowUpRight size={14} strokeWidth={3}/> : <ArrowDownRight size={14} strokeWidth={3}/>}
             {growth}
           </span>
           <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-2">Delta_Month</span>
        </div>
        <ChevronRight size={16} className="text-slate-100 group-hover:text-blue-500 transition-colors" />
      </div>
    </div>
  </motion.div>
);