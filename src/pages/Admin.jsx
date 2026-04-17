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
  Hash, ShieldQuestion, Globe2, Link as LinkIcon, Box, BriefcaseIcon, AtSign,
  CloudLightning, HardDrive, Key, Server, Shield, ToggleLeft, Layers3, ZapOff
} from "lucide-react";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  AreaChart, Area, PieChart, Pie, Cell, LineChart, Line, Legend
} from "recharts";

/** * =============================================================================
 * I. GLOBAL INFRASTRUCTURE CONFIGURATION
 * Design System: Alpha-Sovereign-Admin-UX v3.0.4
 * Architected by Apurva Priyadarshi | Node: UDAARO_MASTER_CONTROL
 * =============================================================================
 */

const APP_CONFIG = {
  version: "3.0.4-Stable",
  codename: "Sovereign_Omniscience",
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
 * II. DYNAMIC DOSSIER ENGINE (THE "SEE ALL DETAILS" SECTION)
 * This component scans the object and ensures zero missing data.
 * =============================================================================
 */

const EntityDossier = ({ data, type, onClose, onDelete }) => {
  if (!data) return null;

  // Logic: Dynamic Icon Mapping for every potential field
  const renderFieldIcon = (key) => {
    const iconMap = {
      name: <User size={14}/>,
      email: <AtSign size={14}/>,
      phone: <Smartphone size={14}/>,
      startup: <Rocket size={14}/>,
      industry: <Target size={14}/>,
      stage: <Activity size={14}/>,
      fundingNeeded: <IndianRupee size={14}/>,
      firm: <Building size={14}/>,
      expertise: <Binary size={14}/>,
      experienceLevel: <Award size={14}/>,
      availability: <Calendar size={14}/>,
      linkedin: <Linkedin size={14}/>,
      ticketSize: <BriefcaseIcon size={14}/>,
      location: <MapPin size={14}/>,
      investmentFocus: <Compass size={14}/>,
      createdAt: <Clock size={14}/>,
      _id: <Hash size={14}/>
    };
    return iconMap[key] || <Box size={14}/>;
  };

  // Logic: Extract all keys except internal system ones
  const metadataKeys = Object.keys(data).filter(key => 
    !['__v', 'updatedAt', 'description', 'message', 'bio'].includes(key)
  );

  return (
    <motion.div 
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-[2000] flex items-center justify-end bg-slate-950/90 backdrop-blur-md p-4"
    >
      <motion.div 
        initial={{ x: "100%", borderRadius: "10rem" }} 
        animate={{ x: 0, borderRadius: "4rem" }} 
        exit={{ x: "100%" }}
        transition={{ type: "spring", damping: 28, stiffness: 200 }}
        className="w-full max-w-5xl h-full bg-white shadow-7xl overflow-hidden flex flex-col relative border-l border-white/20"
      >
        {/* Dossier Header: Institutional Branding */}
        <div className="p-14 bg-slate-950 text-white relative overflow-hidden flex-shrink-0">
          <div className="absolute top-0 right-0 p-10 opacity-[0.03] pointer-events-none scale-150">
             <Fingerprint size={500} />
          </div>
          
          <div className="relative z-10">
            <div className="flex items-center gap-5 mb-10">
              <span className="px-6 py-2 bg-blue-600 rounded-full text-[10px] font-black uppercase tracking-[0.5em] shadow-3xl">Deep_Inspection_Protocol</span>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full">
                 <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                 <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest leading-none">Sync_Active</span>
              </div>
            </div>
            
            <h2 className="text-7xl md:text-8xl font-black tracking-tighter italic uppercase leading-none mb-6">
              {data.name}
            </h2>
            
            <div className="flex items-center gap-8 border-t border-white/10 pt-8 mt-4">
               <div>
                  <p className="text-[9px] font-black text-slate-500 uppercase tracking-[0.4em] mb-2">Cluster_Origin</p>
                  <p className="text-blue-400 font-black italic uppercase text-lg leading-none tracking-tight">{type}</p>
               </div>
               <div className="w-px h-10 bg-white/10" />
               <div>
                  <p className="text-[9px] font-black text-slate-500 uppercase tracking-[0.4em] mb-2">Internal_UUID</p>
                  <p className="text-white font-mono text-sm font-bold uppercase leading-none">{data._id}</p>
               </div>
            </div>
          </div>

          <button onClick={onClose} className="absolute top-12 right-12 p-6 bg-white/5 border border-white/10 rounded-[2.5rem] hover:bg-rose-500 transition-all active:scale-90 z-20 shadow-6xl group">
            <X size={32} className="group-hover:rotate-90 transition-transform duration-500" />
          </button>
        </div>

        {/* Dossier Content: Exhaustive Detail Mapping */}
        <div className="flex-1 overflow-y-auto p-12 lg:p-20 custom-scrollbar bg-[#fdfdfe] space-y-20">
          
          {/* Metadata Matrix: Dynamically renders EVERY field from database */}
          <section>
             <div className="flex items-center gap-4 mb-12">
                <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shadow-inner border border-blue-100"><Layers size={28}/></div>
                <div>
                   <h4 className="text-xl font-black uppercase tracking-tighter text-slate-950 italic">Full_Metadata_Stack</h4>
                   <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Institutional record mapping from encrypted ledger</p>
                </div>
             </div>
             
             <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {metadataKeys.map((key) => (
                  <div key={key} className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 group hover:bg-white hover:shadow-4xl hover:border-blue-500/20 transition-all duration-700">
                     <div className="flex items-center gap-3 mb-5 text-slate-400 group-hover:text-blue-600 transition-colors">
                        {renderFieldIcon(key)}
                        <span className="text-[10px] font-black uppercase tracking-[0.3em]">{key.replace(/([A-Z])/g, ' $1')}</span>
                     </div>
                     <p className="text-xl font-black text-slate-950 break-words tracking-tight uppercase leading-none">
                       {typeof data[key] === 'object' ? JSON.stringify(data[key]) : (data[key] || "UNSPECIFIED_DATA")}
                     </p>
                  </div>
                ))}
             </div>
          </section>

          {/* Long-Form Thesis Block: Narrative Clarity */}
          {(data.description || data.bio || data.message) && (
            <section className="animate-in fade-in slide-in-from-bottom-10 duration-1000">
               <div className="flex items-center gap-4 mb-12">
                  <div className="w-14 h-14 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center shadow-inner border border-indigo-100"><Activity size={28}/></div>
                  <div>
                     <h4 className="text-xl font-black uppercase tracking-tighter text-slate-950 italic">Strategic_Thesis_Logic</h4>
                     <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Core venture roadmap and problem logic statement</p>
                  </div>
               </div>
               <div className="p-16 bg-slate-950 text-white rounded-[5rem] relative overflow-hidden shadow-6xl group">
                  <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none group-hover:opacity-10 transition-opacity duration-1000"><Terminal size={150}/></div>
                  <p className="text-3xl leading-relaxed text-slate-300 font-medium italic relative z-10 tracking-tight">
                    "{data.description || data.bio || data.message}"
                  </p>
               </div>
            </section>
          )}

          {/* System Validation: Trust Anchors */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-10">
             <div className="p-10 bg-emerald-50 rounded-[3rem] border border-emerald-100 flex items-center gap-8 group hover:bg-white transition-all duration-500">
                <div className="w-20 h-20 bg-white rounded-[2rem] flex items-center justify-center text-emerald-500 shadow-xl group-hover:scale-110 transition-transform"><ShieldCheck size={40}/></div>
                <div>
                   <p className="text-[11px] font-black text-emerald-600/60 uppercase tracking-widest mb-2">Vetting_Protocol</p>
                   <p className="text-3xl font-black text-emerald-950 italic uppercase leading-none">VERIFIED_SYNC</p>
                </div>
             </div>
             <div className="p-10 bg-slate-900 rounded-[3rem] flex items-center gap-8 text-white shadow-5xl group hover:bg-blue-600 transition-all duration-500">
                <div className="w-20 h-20 bg-white/5 rounded-[2rem] flex items-center justify-center text-blue-400 shadow-inner group-hover:bg-white group-hover:text-blue-600 transition-all"><Database size={40}/></div>
                <div>
                   <p className="text-[11px] font-black text-white/30 uppercase tracking-widest mb-2">Ledger_Storage</p>
                   <p className="text-3xl font-black text-white italic uppercase leading-none tracking-tighter">ENCRYPTED_NODE</p>
                </div>
             </div>
          </section>
        </div>

        {/* Global Control Suite (Actions) */}
        <div className="p-12 border-t border-slate-100 bg-slate-50 flex flex-col md:flex-row gap-6 flex-shrink-0">
           <button className="flex-[3] py-8 bg-slate-950 text-white rounded-[2.5rem] font-black text-sm uppercase tracking-[0.5em] hover:bg-blue-600 shadow-6xl transition-all duration-500 flex items-center justify-center gap-6 group">
             <Send size={24} className="group-hover:translate-x-3 group-hover:-translate-y-3 transition-transform" />
             Execute Institutional Handshake Protocol
           </button>
           
           <div className="flex flex-1 gap-6">
              <button onClick={() => window.print()} className="flex-1 p-8 bg-white border border-slate-200 text-slate-400 rounded-[2.5rem] hover:text-blue-600 hover:border-blue-600 transition-all shadow-xl active:scale-90 flex items-center justify-center">
                <Printer size={32} />
              </button>
              <button 
                onClick={() => onDelete(type, data._id)}
                className="flex-1 p-8 bg-rose-50 text-rose-500 border border-rose-100 rounded-[2.5rem] hover:bg-rose-600 hover:text-white transition-all shadow-xl active:scale-90 flex items-center justify-center"
              >
                <Trash2 size={32} />
              </button>
           </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

/** * =============================================================================
 * III. THE COMMAND TERMINAL (MAIN CONTROLLER)
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
      
      // Update global notification count based on total assets
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
    if (!window.confirm("CRITICAL_WARN: Confirm permanent asset erasure from sovereign database?")) return;
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

  // --- Data Logic: Filtering & Aggregation ---
  const filteredAssets = useMemo(() => {
    if (activeTab === "dashboard") return [];
    return (data[activeTab] || []).filter(item => 
      item.name?.toLowerCase().includes(search.toLowerCase()) ||
      item.email?.toLowerCase().includes(search.toLowerCase()) ||
      item.startup?.toLowerCase().includes(search.toLowerCase()) ||
      item.firm?.toLowerCase().includes(search.toLowerCase()) ||
      item.industry?.toLowerCase().includes(search.toLowerCase())
    );
  }, [data, activeTab, search]);

  const totalFounders = data.founders.length;
  const totalInvestors = data.investors.length;
  const totalMentors = data.mentors.length;

  const chartDataMatrix = useMemo(() => [
    { name: 'Node_Alpha', f: 45, i: 12, m: 18 },
    { name: 'Node_Beta', f: 52, i: 22, m: 24 },
    { name: 'Node_Gamma', f: 48, i: 30, m: 12 },
    { name: 'Node_Delta', f: 72, i: 38, m: 32 },
    { name: 'Node_Epsilon', f: 65, i: 45, m: 28 },
    { name: 'Node_Zeta', f: 94, i: 55, m: 40 },
  ], []);

  /** * =============================================================================
   * IV. RENDERING SUITE: UI ARCHITECTURE
   * =============================================================================
   */

  return (
    <div className="h-screen w-full bg-[#f8fafc] flex font-sans text-slate-950 overflow-hidden select-none">
      
      {/* 1. SOVEREIGN SIDEBAR (COMMAND HUB) */}
      <aside className={`
        ${sidebarCollapsed ? 'w-24' : 'w-80'} 
        bg-slate-950 flex flex-col relative z-[100] transition-all duration-700 shadow-7xl
      `}>
        <div className="p-10 h-full flex flex-col">
          {/* Logo Node */}
          <div className="flex items-center gap-5 mb-24 group cursor-pointer overflow-hidden" onClick={() => setActiveTab('dashboard')}>
            <motion.div 
              whileHover={{ rotate: 90, scale: 1.1 }}
              className="min-w-[52px] h-14 bg-blue-600 rounded-3xl flex items-center justify-center text-white font-black italic shadow-6xl shadow-blue-500/20"
            >
              U
            </motion.div>
            {!sidebarCollapsed && (
              <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}>
                <h2 className="text-2xl font-black tracking-tighter text-white uppercase leading-none italic">Udaaro</h2>
                <div className="flex items-center gap-2 mt-1.5">
                   <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                   <p className="text-[9px] font-black text-blue-500 uppercase tracking-[0.5em] italic">Command_v3.0</p>
                </div>
              </motion.div>
            )}
          </div>

          {/* Navigation Matrix */}
          <nav className="space-y-5 flex-1">
            {!sidebarCollapsed && <span className="text-[10px] font-black text-slate-700 uppercase tracking-[0.6em] px-5 block mb-8">Access_Nodes</span>}
            {TAB_HIERARCHY.map((tab) => (
              <button
                key={tab.id}
                onClick={() => { setActiveTab(tab.id); setSelectedEntity(null); }}
                className={`
                  flex items-center justify-between w-full px-5 py-5 rounded-[2rem] font-black text-[12px] uppercase tracking-[0.2em] transition-all duration-500 group
                  ${activeTab === tab.id ? 'bg-blue-600 text-white shadow-7xl shadow-blue-600/40 translate-x-2' : 'text-slate-500 hover:text-slate-300 hover:bg-white/5'}
                `}
              >
                <div className="flex items-center gap-5">
                   <span className={`${activeTab === tab.id ? 'text-white' : 'text-slate-600 group-hover:text-blue-400'} transition-colors`}>{tab.icon}</span>
                   {!sidebarCollapsed && <span>{tab.label}</span>}
                </div>
                {!sidebarCollapsed && activeTab === tab.id && <ChevronRight size={14} className="text-white/50" />}
              </button>
            ))}
          </nav>

          {/* System Utility Core */}
          <div className="mt-auto space-y-10 pt-12 border-t border-white/5">
             <div className="px-5">
                <div className="flex justify-between items-end mb-4">
                  {!sidebarCollapsed && <span className="text-[10px] text-slate-600 font-black uppercase tracking-widest italic">Grid_Sync</span>}
                  <div className="flex items-center gap-2">
                     <span className="text-[10px] text-emerald-500 font-black">STABLE</span>
                  </div>
                </div>
                <div className="w-full h-1.5 bg-slate-900 rounded-full overflow-hidden shadow-inner">
                   <motion.div animate={{ width: isSyncing ? '100%' : '100%' }} className="h-full bg-blue-600 shadow-[0_0_15px_rgba(37,99,235,0.6)]" />
                </div>
             </div>
             
             <button 
                onClick={() => { localStorage.removeItem("token"); navigate("/admin-login"); }}
                className="flex items-center gap-5 text-slate-600 font-black text-[11px] uppercase tracking-widest hover:text-rose-500 transition-all w-full px-5 group"
             >
                <motion.div whileHover={{ rotate: -90 }}><LogOut size={20} className="group-hover:-translate-x-2 transition-transform duration-500"/></motion.div>
                {!sidebarCollapsed && <span>Terminate_Session</span>}
             </button>
          </div>
        </div>
      </aside>

      {/* 2. PRIMARY OPERATIONAL VIEWPORT */}
      <main 
        ref={mainRef}
        onScroll={(e) => setHeaderScrolled(e.target.scrollTop > 30)}
        className="flex-1 flex flex-col h-screen overflow-y-auto relative bg-[#f8fafc] custom-scrollbar"
      >
        {/* Persistent High-Fidelity Header */}
        <header className={`
          sticky top-0 z-[90] transition-all duration-700 px-14 py-12 flex justify-between items-center
          ${headerScrolled ? 'bg-white/70 backdrop-blur-3xl border-b border-slate-100 shadow-2xl py-8' : 'bg-transparent'}
        `}>
          <div className="flex items-center gap-10">
            <button 
              onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
              className="p-5 bg-white border border-slate-200 rounded-[1.5rem] hover:border-blue-600 transition-all shadow-xl active:scale-90"
            >
              <Command size={20} className="text-slate-600" />
            </button>
            <div className="flex flex-col">
               <div className="flex items-center gap-5">
                  <h1 className="text-5xl font-black tracking-tighter capitalize italic text-slate-950 uppercase leading-none">{activeTab}</h1>
                  <NodeStatus label="Handshake_Verified" />
               </div>
               <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.5em] mt-3 italic">Udaaro Sovereign Grid Monitoring Active</p>
            </div>
          </div>

          <div className="flex items-center gap-8">
            {/* Telemetry Node */}
            <div className="hidden lg:flex items-center gap-10 px-10 py-4 bg-white border border-slate-200 rounded-[2rem] shadow-xl">
               <div className="flex items-center gap-3">
                 <Cpu size={18} className="text-blue-500" />
                 <div className="flex flex-col">
                    <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest">Protocol</span>
                    <span className="text-[11px] font-black text-slate-900 uppercase font-mono italic">{APP_CONFIG.version}</span>
                 </div>
               </div>
               <div className="w-[1px] h-6 bg-slate-100" />
               <div className="flex items-center gap-3">
                 <Globe size={18} className="text-emerald-500" />
                 <div className="flex flex-col">
                    <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest">Environment</span>
                    <span className="text-[11px] font-black text-slate-900 uppercase font-mono italic">{APP_CONFIG.environment}</span>
                 </div>
               </div>
            </div>

            <motion.button 
              whileHover={{ scale: 1.1, rotate: 180 }} whileTap={{ scale: 0.9 }}
              onClick={syncSovereignNodes}
              className="p-5 bg-white border border-slate-200 rounded-[1.5rem] shadow-xl hover:border-blue-600 transition-all duration-700"
            >
              <RefreshCcw size={22} className={`text-slate-500 ${isSyncing && 'animate-spin'}`} />
            </motion.button>

            <div className="h-12 w-[1px] bg-slate-200" />

            {/* Admin Identity Card */}
            <div className="flex items-center gap-6 group cursor-pointer">
              <div className="text-right hidden sm:block">
                 <p className="text-[12px] font-black text-slate-950 uppercase tracking-[0.2em] leading-none">Apurva Priyadarshi</p>
                 <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-2 italic">Sovereign_Root_Admin</p>
              </div>
              <div className="w-16 h-16 rounded-[1.8rem] border-4 border-white shadow-7xl overflow-hidden ring-1 ring-slate-200 group-hover:ring-blue-600 transition-all">
                 <img src={`https://ui-avatars.com/api/?name=Apurva+Priyadarshi&background=020617&color=fff&bold=true`} alt="Admin" />
              </div>
            </div>
          </div>
        </header>

        {/* 3. DYNAMIC DATA COORDINATES */}
        <div className="p-12 lg:p-16 max-w-[1900px] mx-auto w-full">
          <AnimatePresence mode="wait">
            {activeTab === "dashboard" ? (
              <motion.div 
                key="dashboard" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-20"
              >
                {/* Metric Node Layer */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                   <StatNode title="Founders Vanguard" count={totalFounders} growth="+12%" icon={<UserCircle/>} delay={0.1} color="blue" />
                   <StatNode title="Syndicate Nodes" count={totalInvestors} growth="+4%" icon={<Briefcase/>} delay={0.2} color="indigo" />
                   <StatNode title="Advisory Network" count={totalMentors} growth="+1%" icon={<GraduationCap/>} delay={0.3} color="cyan" />
                </div>

                {/* Analytical Intelligence Layer */}
                <div className="grid lg:grid-cols-2 gap-12">
                   <GlassPanel className="p-14" dark>
                      <ChartTitle title="Network Scaling Velocity" sub="Alpha_Batch_Resonance" icon={<TrendingUp size={24}/>} />
                      <div className="h-[450px] w-full">
                         <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={chartDataMatrix} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                               <defs>
                                  <linearGradient id="blueGrad" x1="0" y1="0" x2="0" y2="1">
                                     <stop offset="5%" stopColor={THEME_ENGINE.primary} stopOpacity={0.6}/>
                                     <stop offset="95%" stopColor={THEME_ENGINE.primary} stopOpacity={0}/>
                                  </linearGradient>
                               </defs>
                               <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
                               <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 11, fontWeight: '900'}} />
                               <YAxis hide />
                               <Tooltip 
                                 contentStyle={{backgroundColor: '#020617', border: '1px solid #1e293b', borderRadius: '32px', padding: '20px'}}
                                 itemStyle={{color: '#fff', fontWeight: 'bold', textTransform: 'uppercase'}}
                               />
                               <Area type="monotone" dataKey="f" stroke={THEME_ENGINE.primary} strokeWidth={6} fill="url(#blueGrad)" shadow="0 10px 20px blue" />
                            </AreaChart>
                         </ResponsiveContainer>
                      </div>
                   </GlassPanel>

                   <GlassPanel className="p-14">
                      <ChartTitle title="Asset Cluster Analysis" sub="Liquidity_Distribution" icon={<PieChart size={24}/>} />
                      <div className="h-[450px] w-full">
                         <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={chartDataMatrix}>
                               <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                               <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 11, fontWeight: '900'}} />
                               <Tooltip cursor={{fill: 'rgba(0,0,0,0.02)'}} contentStyle={{borderRadius: '32px', border: 'none', boxShadow: '0 50px 100px rgba(0,0,0,0.1)'}} />
                               <Bar dataKey="i" fill={THEME_ENGINE.secondary} radius={[15, 15, 15, 15]} barSize={20} />
                               <Bar dataKey="m" fill={THEME_ENGINE.accent} radius={[15, 15, 15, 15]} barSize={20} />
                            </BarChart>
                         </ResponsiveContainer>
                      </div>
                   </GlassPanel>
                </div>

                {/* System Vitality Sub-Metrics */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                   <MiniTelemetry label="Handshake Latency" val="9ms" trend="OPTIMAL" color="emerald" />
                   <MiniTelemetry label="Vetting Throughput" val="192/Hr" trend="+14%" color="blue" />
                   <MiniTelemetry label="Deployment Value" val="₹140Cr" trend="+24%" color="indigo" />
                   <MiniTelemetry label="Ledger Security" val="AES-256" trend="ACTIVE" color="cyan" />
                </div>

                {/* Audit Terminal Log: Industrial Fidelity */}
                <GlassPanel className="p-14">
                   <div className="flex justify-between items-center mb-14">
                      <div className="flex items-center gap-4">
                         <Terminal size={24} className="text-blue-600" />
                         <h4 className="text-xl font-black uppercase tracking-tighter italic">Institutional_Ledger_Audit</h4>
                      </div>
                      <NodeStatus label="Audit_Synced" />
                   </div>
                   <div className="space-y-6 font-mono text-[12px]">
                      {[
                        { ev: "Institutional Handshake initialized for node: AP_ROOT", time: "16:44:01", status: "ENCRYPTED" },
                        { ev: "Founder Vanguard update: 24 conceptual nodes synced", time: "16:42:15", status: "VERIFIED" },
                        { ev: "Security sweep: 0X_F82 compromised trajectory cleared", time: "16:38:22", status: "RESOLVED" },
                        { ev: "Global gateway Tokyo_Alpha_01 packet sync successful", time: "16:35:10", status: "SYNCED" },
                        { ev: "Venture Logic Stress-Test initiated: Batch_Alpha_26", time: "16:30:00", status: "RUNNING" }
                      ].map((log, i) => (
                        <div key={i} className="flex items-center justify-between p-6 bg-slate-50 rounded-[2rem] border border-slate-100 hover:bg-white hover:border-blue-500/20 transition-all duration-500 group cursor-crosshair">
                           <div className="flex gap-8 items-center">
                              <span className="text-slate-300 font-bold">[{log.time}]</span>
                              <span className="text-slate-800 font-black uppercase tracking-tight group-hover:text-blue-600 transition-colors">{log.ev}</span>
                           </div>
                           <div className="flex items-center gap-4">
                              <span className={`font-black tracking-[0.2em] ${log.status === 'ENCRYPTED' ? 'text-blue-600' : 'text-emerald-500'}`}>{log.status}</span>
                              <div className="p-2 bg-slate-100 rounded-lg text-slate-300 group-hover:text-blue-600 transition-all"><Lock size={12}/></div>
                           </div>
                        </div>
                      ))}
                   </div>
                </GlassPanel>
              </motion.div>
            ) : (
              /* ASSET CLUSTER VIEW: THE GLOBAL DATA ENGINE */
              <motion.div 
                key="list" initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="bg-white rounded-[6rem] shadow-7xl border border-slate-100 overflow-hidden"
              >
                {/* Advanced Command Toolbar */}
                <div className="p-14 border-b border-slate-100 flex flex-col xl:flex-row justify-between items-center gap-12 bg-slate-50/50 backdrop-blur-xl">
                  <div className="relative flex-1 w-full max-w-4xl">
                    <Search className="absolute left-10 top-1/2 -translate-y-1/2 text-slate-200 group-focus-within:text-blue-600 transition-all" size={32} />
                    <input
                      type="text"
                      placeholder={`Query high-signal metadata within ${activeTab} node...`}
                      className="w-full pl-24 pr-12 py-10 bg-white border-none rounded-[3.5rem] focus:ring-[12px] focus:ring-blue-600/5 transition-all font-black text-2xl shadow-3xl outline-none placeholder:text-slate-200 italic uppercase tracking-tighter"
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                    />
                  </div>
                  <div className="flex gap-8 w-full xl:w-auto">
                    <button className="flex-1 px-14 py-8 bg-white border border-slate-200 rounded-[2.5rem] font-black text-[12px] uppercase tracking-[0.5em] hover:text-blue-600 hover:border-blue-600 transition-all flex items-center justify-center gap-5 shadow-xl">
                       <FileDown size={22} /> Export_Report
                    </button>
                    <button className="flex-1 px-14 py-8 bg-slate-950 text-white rounded-[2.5rem] font-black text-[12px] uppercase tracking-[0.5em] shadow-7xl hover:bg-blue-600 transition-all flex items-center justify-center gap-5">
                       <Filter size={22} /> Matrix_Filter
                    </button>
                  </div>
                </div>

                {/* Sovereign Data Engine (Table) */}
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="text-slate-400 text-[12px] font-black uppercase tracking-[0.6em] bg-slate-50/30">
                        <th className="px-20 py-14 italic border-b border-slate-100">Identity_Protocol</th>
                        <th className="px-20 py-14 italic border-b border-slate-100">Origin / Cluster</th>
                        <th className="px-20 py-14 italic border-b border-slate-100">Handshake_Status</th>
                        <th className="px-20 py-14 text-right italic border-b border-slate-100">Node_Control</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {filteredAssets.map((asset, idx) => (
                        <motion.tr 
                          key={asset._id} 
                          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.05 }}
                          className="hover:bg-blue-50/40 transition-all duration-500 group cursor-default"
                        >
                          <td className="px-20 py-14">
                            <div className="flex items-center gap-8">
                               <div className="w-20 h-20 rounded-[2.2rem] bg-slate-100 flex items-center justify-center text-slate-300 font-black group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-6xl transition-all duration-700 shadow-inner text-3xl italic uppercase border-4 border-white">
                                 {asset.name?.charAt(0)}
                               </div>
                               <div>
                                  <div className="font-black text-slate-950 text-2xl tracking-tighter italic uppercase leading-none mb-2">{asset.name}</div>
                                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-[0.3em] font-mono">{asset.email}</div>
                               </div>
                            </div>
                          </td>
                          <td className="px-20 py-14">
                            <div className="text-xl font-black text-slate-800 italic uppercase tracking-tighter leading-none mb-2">
                              {asset.startup || asset.firm || asset.expertise || "DECENTRALIZED_NODE"}
                            </div>
                            <div className="flex items-center gap-3">
                               <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                               <div className="text-[10px] font-black text-blue-500 uppercase tracking-widest opacity-60 italic">
                                   {asset.industry || asset.sector || "GENERAL_MARKET_ALPHA"}
                               </div>
                            </div>
                          </td>
                          <td className="px-20 py-14">
                             <div className="flex items-center gap-4 text-emerald-500 font-black text-[12px] uppercase tracking-[0.3em] italic">
                                <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_rgba(16,185,129,1)]" />
                                Handshake_Synced
                             </div>
                          </td>
                          <td className="px-20 py-14 text-right">
                             <div className="flex justify-end gap-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-10 group-hover:translate-x-0">
                                <button 
                                  onClick={() => setSelectedEntity(asset)}
                                  className="p-6 bg-white shadow-6xl border border-slate-100 rounded-[2rem] hover:text-blue-600 hover:scale-110 active:scale-90 transition-all group/btn"
                                >
                                  <Eye size={28} />
                                </button>
                                <button 
                                  onClick={() => handleErasureProtocol(activeTab, asset._id)}
                                  className="p-6 bg-white shadow-6xl border border-rose-50 rounded-[2rem] text-slate-200 hover:text-rose-600 hover:scale-110 active:scale-90 transition-all"
                                >
                                  <Trash2 size={28} />
                                </button>
                             </div>
                          </td>
                        </motion.tr>
                      ))}
                    </tbody>
                  </table>
                  
                  {filteredAssets.length === 0 && (
                    <div className="p-80 text-center flex flex-col items-center">
                       <div className="w-48 h-48 rounded-[5rem] bg-slate-50 flex items-center justify-center text-slate-100 mb-12 border-8 border-dashed border-slate-100 animate-pulse">
                         <ShieldX size={100} />
                       </div>
                       <h5 className="text-slate-400 font-black text-4xl uppercase tracking-tighter italic">Zero Access Nodes Detected</h5>
                       <p className="text-slate-300 text-lg font-bold uppercase tracking-[0.5em] mt-6 italic">Handshake Verification: Query returned null.</p>
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>

      {/* 4. MODAL OVERLAY: THE FULL DOSSIER INSPECTOR (NO MISSING DETAILS) */}
      <AnimatePresence>
        {selectedEntity && (
          <EntityDossier 
            data={selectedEntity} 
            type={activeTab} 
            onClose={() => setSelectedEntity(null)} 
            onDelete={handleErasureProtocol}
          />
        )}
      </AnimatePresence>

      {/* Sovereign Notifier Terminal */}
      <div className="fixed bottom-16 right-16 z-[120]">
         <motion.button 
            whileHover={{ scale: 1.2, rotate: 90, boxShadow: "0 0 80px rgba(37,99,235,0.4)" }}
            whileTap={{ scale: 0.8 }}
            className="w-24 h-24 bg-slate-950 text-white rounded-[3rem] flex items-center justify-center shadow-7xl border-2 border-white/10 relative overflow-hidden"
         >
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent opacity-50" />
            <Bell size={32} className="relative z-10" />
            {notificationCount > 0 && (
               <div className="absolute top-4 right-4 w-7 h-7 bg-blue-600 rounded-full border-4 border-slate-950 flex items-center justify-center text-[10px] font-black z-20">
                  {notificationCount}
               </div>
            )}
         </motion.button>
      </div>

      {/* Infrastructure Footer Meta Grid */}
      <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[80] hidden 2xl:flex items-center gap-10 opacity-30 hover:opacity-100 transition-opacity duration-1000 bg-slate-950 px-10 py-4 rounded-full text-white">
         <div className="flex items-center gap-3">
            <Server size={14} className="text-blue-500" />
            <span className="text-[9px] font-black uppercase tracking-[0.4em]">Tokyo_Node_Primary</span>
         </div>
         <div className="w-px h-4 bg-white/20" />
         <p className="text-[9px] font-black uppercase tracking-[0.4em] italic">Governance Alpha-v3.0.4 Secure Socket — Apurva Priyadarshi Architect</p>
         <div className="w-px h-4 bg-white/20" />
         <div className="flex items-center gap-3">
            <Zap size={14} className="text-emerald-500" />
            <span className="text-[9px] font-black uppercase tracking-[0.4em]">Status: 100% OPERATIONAL</span>
         </div>
      </div>
    </div>
  );
}

/** * =============================================================================
 * V. ATOMIC ANALYTICS SUB-COMPONENTS
 * ============================================================================= */

const StatNode = ({ title, count, growth, icon, delay, color }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 1, ease: [0.16, 1, 0.3, 1] }}
    whileHover={{ y: -15, scale: 1.02 }}
    className="bg-white p-12 rounded-[4.5rem] shadow-6xl border border-slate-100 flex flex-col justify-between group hover:border-blue-500/40 transition-all duration-1000 relative overflow-hidden"
  >
    <div className="absolute -right-12 -top-12 p-20 opacity-[0.02] group-hover:scale-150 group-hover:opacity-10 transition-all duration-[3s] text-slate-950">
      {icon}
    </div>
    <div className="relative z-10">
      <div className="flex items-center gap-5 text-blue-600 mb-12 font-black text-[12px] uppercase tracking-[0.5em] italic">
        <div className={`p-4 rounded-[1.5rem] bg-${color}-50 text-${color}-600 shadow-inner group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-7xl transition-all duration-700`}>{icon}</div>
        {title}
      </div>
      <p className="text-[7rem] font-black tracking-tighter leading-none text-slate-950 italic uppercase transition-all group-hover:scale-110 origin-left duration-1000">{count}</p>
      <div className="mt-14 flex items-center justify-between border-t border-slate-50 pt-10">
        <div className="flex items-center gap-3">
           <div className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-[12px] font-black uppercase tracking-widest ${growth.startsWith('+') ? 'bg-emerald-50 text-emerald-500' : 'bg-rose-50 text-rose-500'}`}>
             {growth.startsWith('+') ? <ArrowUpRight size={16} strokeWidth={4}/> : <ArrowDownRight size={16} strokeWidth={4}/>}
             {growth}
           </div>
           <span className="text-[10px] font-bold text-slate-300 uppercase tracking-[0.3em] ml-2 italic">Delta_Cycle</span>
        </div>
        <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-200 group-hover:text-blue-500 group-hover:bg-blue-50 transition-all"><ArrowUpRight size={20}/></div>
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