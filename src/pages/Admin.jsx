import React, { useEffect, useState, useMemo, useRef, useCallback } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard, UserCircle, Briefcase, GraduationCap, LogOut, Search, Trash2, 
  RefreshCcw, ChevronRight, ShieldCheck, TrendingUp, Activity, Layers, Bell, 
  Database, X, User, Smartphone, MapPin, Building, Target, Clock, Send, Eye, 
  ShieldAlert, Cpu, BarChart3, Fingerprint, Printer, Download, Maximize2, 
  Terminal, IndianRupee, Binary, Hash, AtSign, Landmark, ArrowLeft, Rocket,
  Award, Box, Info, Share2, ExternalLink
} from "lucide-react";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  AreaChart, Area
} from "recharts";

/** * =============================================================================
 * I. GLOBAL INFRASTRUCTURE CONFIGURATION
 * Design: Neo-Heritage Imperial Admin v4.0.8 (Final Build)
 * Architect: Apurva Priyadarshi | Node: UDAARO_MASTER_CONTROL
 * ============================================================================= */

const APP_CONFIG = {
  version: "4.0.8-Imperial",
  apiBase: import.meta.env.PROD ? "https://udaaro-backend.onrender.com" : "http://localhost:5000"
};

const TAB_HIERARCHY = [
  { id: "dashboard", label: "Intelligence", icon: <LayoutDashboard size={18} /> },
  { id: "founders", label: "Vanguard", icon: <UserCircle size={18} /> },
  { id: "investors", label: "Syndicate", icon: <Briefcase size={18} /> },
  { id: "mentors", label: "Advisory", icon: <GraduationCap size={18} /> },
];

/** * =============================================================================
 * II. FULL-PAGE ASSET DOSSIER (THE REDIRECT VIEW)
 * ============================================================================= */

const FullPageDossier = ({ data, type, onBack, onDelete }) => {
  if (!data) return null;

  const renderDetailIcon = (key) => {
    const iconMap = {
      name: <User />, email: <AtSign />, phone: <Smartphone />, startup: <Rocket />,
      industry: <Target />, stage: <Activity />, fundingNeeded: <IndianRupee />,
      firm: <Building />, expertise: <Binary />, experienceLevel: <Award />,
      linkedin: <ExternalLink />, location: <MapPin />, createdAt: <Clock />, _id: <Hash />
    };
    return iconMap[key] || <Box />;
  };

  const filteredKeys = Object.keys(data).filter(k => 
    !['__v', 'updatedAt', 'description', 'message', 'bio'].includes(k)
  );

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 1.05, x: 100 }}
      animate={{ opacity: 1, scale: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="absolute inset-0 z-[500] bg-[#FDF9F3] flex flex-col overflow-hidden"
    >
      <header className="p-10 bg-[#0F1419] text-white flex justify-between items-center shadow-2xl relative">
        <div className="absolute inset-0 bg-jali-grid opacity-10 pointer-events-none" />
        <div className="flex items-center gap-10 relative z-10">
          <button onClick={onBack} className="p-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-[#D4AF37] hover:text-[#0F1419] transition-all flex items-center gap-4 italic group">
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-[10px] font-black uppercase tracking-widest">Back_To_Grid</span>
          </button>
          <div className="h-10 w-[1px] bg-white/10" />
          <h2 className="text-3xl font-black italic uppercase tracking-tighter">
            {data.name} 
            <span className="text-[#D4AF37] ml-4 text-xs font-black uppercase tracking-widest opacity-60">Verified_Dossier</span>
          </h2>
        </div>
        <div className="flex gap-4 relative z-10">
          <button onClick={() => window.print()} className="p-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all"><Printer size={20}/></button>
          <button onClick={() => onDelete(type, data._id)} className="p-4 bg-rose-500/10 border border-rose-500/20 text-rose-500 rounded-2xl hover:bg-rose-600 hover:text-white transition-all"><Trash2 size={20}/></button>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto p-12 lg:p-24 custom-scrollbar">
        <div className="max-w-7xl mx-auto space-y-16">
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredKeys.map(key => (
              <div key={key} className="p-10 bg-white rounded-[3rem] border border-[#D4AF37]/10 shadow-sm group hover:border-[#D4AF37] transition-all duration-500">
                <div className="flex items-center gap-4 mb-4 text-[#D4AF37]">
                  {renderDetailIcon(key)}
                  <span className="text-[10px] font-black uppercase tracking-widest">{key.replace(/([A-Z])/g, ' $1')}</span>
                </div>
                <p className="text-xl font-black text-[#0F1419] italic tracking-tighter uppercase break-words">
                  {typeof data[key] === 'object' ? JSON.stringify(data[key]) : (data[key] || "NULL_DATA")}
                </p>
              </div>
            ))}
          </section>

          {(data.description || data.bio || data.message) && (
            <section className="p-20 bg-[#0F1419] text-white rounded-[5rem] shadow-2xl relative overflow-hidden border border-[#D4AF37]/20">
              <div className="absolute top-0 right-0 p-16 opacity-5 rotate-12 scale-150"><Terminal size={300} /></div>
              <div className="relative z-10 space-y-6">
                <p className="text-[11px] font-black text-[#D4AF37] uppercase tracking-[0.8em] italic opacity-40">Structural_Thesis</p>
                <p className="text-3xl md:text-5xl leading-[1.3] font-medium italic text-slate-300 tracking-tight">
                  "{data.description || data.bio || data.message}"
                </p>
              </div>
            </section>
          )}
        </div>
      </main>
    </motion.div>
  );
};

/** * =============================================================================
 * III. THE COMMAND HUB (MAIN CONTROLLER)
 * ============================================================================= */

export default function Admin() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("dashboard");
  const [data, setData] = useState({ founders: [], investors: [], mentors: [] });
  const [search, setSearch] = useState("");
  const [isSyncing, setIsSyncing] = useState(false);
  const [selectedEntity, setSelectedEntity] = useState(null);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const syncNodes = useCallback(async () => {
    const token = localStorage.getItem("token");
    if (!token) { navigate("/admin-login"); return; }
    setIsSyncing(true);
    try {
      const endpoints = ["founders", "investors", "mentors"];
      const res = await Promise.all(
        endpoints.map(node => fetch(`${APP_CONFIG.apiBase}/api/${node}`, { 
          headers: { Authorization: `Bearer ${token}` } 
        }).then(r => r.json()))
      );
      setData({ 
        founders: Array.isArray(res[0]) ? res[0] : [], 
        investors: Array.isArray(res[1]) ? res[1] : [], 
        mentors: Array.isArray(res[2]) ? res[2] : [] 
      });
    } catch (err) { console.error("Sync Failed", err); }
    finally { setTimeout(() => setIsSyncing(false), 1000); }
  }, [navigate]);

  useEffect(() => { syncNodes(); }, [syncNodes]);

  const handleErasure = async (type, id) => {
    if (!window.confirm("PERMANENT_ERASURE: Confirm coordinate deletion?")) return;
    const token = localStorage.getItem("token");
    try {
      const res = await fetch(`${APP_CONFIG.apiBase}/api/${type}/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.ok) { setSelectedEntity(null); syncNodes(); }
    } catch (err) { alert("Execution Failure"); }
  };

  const filteredAssets = useMemo(() => {
    if (activeTab === "dashboard") return [];
    const collection = data[activeTab] || [];
    return collection.filter(item => 
      item.name?.toLowerCase().includes(search.toLowerCase()) ||
      item.email?.toLowerCase().includes(search.toLowerCase())
    );
  }, [data, activeTab, search]);

  const chartData = [
    { name: 'Jan', val: 4200 }, { name: 'Feb', val: 3800 },
    { name: 'Mar', val: 5400 }, { name: 'Apr', val: 7200 },
    { name: 'May', val: 8900 }, { name: 'Jun', val: 9500 },
  ];

  return (
    <div className="h-screen w-full bg-[#FDF9F3] flex font-serif text-[#0F1419] overflow-hidden select-none relative">
      <AnimatePresence mode="wait">
        {selectedEntity && (
          <FullPageDossier 
            key="dossier"
            data={selectedEntity} 
            type={activeTab} 
            onBack={() => setSelectedEntity(null)} 
            onDelete={handleErasure}
          />
        )}
      </AnimatePresence>

      {/* --- SIDEBAR --- */}
      <aside className={`${sidebarCollapsed ? 'w-24' : 'w-80'} bg-[#0F1419] flex flex-col transition-all duration-700 shadow-7xl relative z-[100]`}>
        <div className="p-10 flex flex-col h-full">
          <div className="flex items-center gap-5 mb-24 cursor-pointer group" onClick={() => setActiveTab('dashboard')}>
            <motion.div whileHover={{ rotate: 90 }} className="min-w-[50px] h-12 bg-[#D4AF37] rounded-2xl flex items-center justify-center text-[#0F1419] font-black italic shadow-lg">U</motion.div>
            {!sidebarCollapsed && <span className="text-2xl font-black tracking-tighter text-white uppercase italic group-hover:text-[#D4AF37] transition-colors">Udaaro</span>}
          </div>

          <nav className="space-y-4 flex-1">
            {TAB_HIERARCHY.map((tab) => (
              <button
                key={tab.id}
                onClick={() => { setActiveTab(tab.id); setSelectedEntity(null); }}
                className={`flex items-center w-full px-5 py-5 rounded-2xl transition-all duration-500 ${activeTab === tab.id ? 'bg-[#D4AF37] text-[#0F1419] shadow-xl translate-x-2' : 'text-slate-500 hover:text-white hover:bg-white/5'}`}
              >
                <span className="mr-5">{tab.icon}</span>
                {!sidebarCollapsed && <span className="text-[11px] font-black uppercase tracking-[0.3em]">{tab.label}</span>}
              </button>
            ))}
          </nav>

          <button onClick={() => { localStorage.removeItem("token"); navigate("/admin-login"); }} className="text-slate-600 font-black text-[10px] uppercase tracking-widest hover:text-rose-500 flex items-center gap-4 transition-colors">
            <LogOut size={18}/> {!sidebarCollapsed && "Terminate Node"}
          </button>
        </div>
      </aside>

      {/* --- MAIN OPERATIONAL VIEWPORT --- */}
      <main className="flex-1 flex flex-col h-screen overflow-y-auto relative bg-jali-grid custom-scrollbar">
        <header className="p-12 flex justify-between items-center sticky top-0 z-[90] bg-[#FDF9F3]/80 backdrop-blur-xl border-b border-[#D4AF37]/10">
          <div className="flex items-center gap-8">
            <button onClick={() => setSidebarCollapsed(!sidebarCollapsed)} className="p-4 bg-white border border-slate-200 rounded-2xl hover:border-[#D4AF37] transition-all"><Cpu size={20} /></button>
            <h1 className="text-5xl font-black tracking-tighter italic uppercase text-[#0F1419]">{activeTab}</h1>
          </div>
          <div className="flex items-center gap-6">
             <button onClick={syncNodes} className="p-4 bg-white border border-slate-200 rounded-2xl shadow-sm hover:rotate-180 transition-transform duration-700">
               <RefreshCcw size={20} className={isSyncing ? 'animate-spin text-[#D4AF37]' : ''}/>
             </button>
             <div className="w-14 h-14 rounded-2xl border-2 border-[#D4AF37] overflow-hidden shadow-lg">
               <img src={`https://ui-avatars.com/api/?name=Apurva+Priyadarshi&background=0F1419&color=D4AF37&bold=true`} alt="Admin" />
             </div>
          </div>
        </header>

        <div className="p-12 max-w-[1600px] mx-auto w-full">
          <AnimatePresence mode="wait">
            {activeTab === "dashboard" ? (
              <motion.div key="dash" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="space-y-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                  <StatNode title="Founders" count={data.founders.length} icon={<UserCircle/>} />
                  <StatNode title="Investors" count={data.investors.length} icon={<Briefcase/>} />
                  <StatNode title="Mentors" count={data.mentors.length} icon={<GraduationCap/>} />
                </div>
                <div className="bg-white p-12 rounded-[4rem] border border-[#D4AF37]/10 shadow-xl h-[550px] relative overflow-hidden group">
                   <div className="absolute inset-0 bg-[#D4AF37]/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                   <div className="flex items-center gap-4 mb-12 relative z-10">
                      <TrendingUp className="text-[#D4AF37]" size={24} />
                      <h3 className="text-[11px] font-black uppercase tracking-[0.6em] text-[#D4AF37] italic">Ecosystem_Velocity_Matrix</h3>
                   </div>
                   <ResponsiveContainer width="100%" height="80%">
                      <AreaChart data={chartData}>
                        <defs>
                          <linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#D4AF37" stopOpacity={0.4}/>
                            <stop offset="95%" stopColor="#D4AF37" stopOpacity={0}/>
                          </linearGradient>
                        </defs>
                        <XAxis dataKey="name" hide />
                        <YAxis hide />
                        <Tooltip contentStyle={{borderRadius: '24px', border: 'none', background: '#0F1419', color: '#fff', padding: '20px'}} />
                        <Area type="monotone" dataKey="val" stroke="#D4AF37" strokeWidth={5} fill="url(#g)" />
                      </AreaChart>
                   </ResponsiveContainer>
                </div>
              </motion.div>
            ) : (
              <motion.div key="list" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="bg-white rounded-[4rem] border border-slate-100 overflow-hidden shadow-2xl">
                <div className="p-10 border-b border-slate-50 flex gap-10 bg-slate-50/50 backdrop-blur-md">
                  <div className="relative flex-1">
                    <Search className="absolute left-8 top-1/2 -translate-y-1/2 text-[#D4AF37]" />
                    <input 
                      type="text" 
                      placeholder={`Search ${activeTab} node metadata...`} 
                      className="w-full pl-20 pr-8 py-8 bg-white rounded-[2rem] border-none shadow-inner font-black text-xl italic outline-none focus:ring-4 ring-[#D4AF37]/10" 
                      value={search} 
                      onChange={(e) => setSearch(e.target.value)} 
                    />
                  </div>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead className="bg-[#0F1419] text-[#D4AF37] text-[10px] font-black uppercase tracking-widest italic">
                      <tr>
                        <th className="p-12">Handshake_Identity</th>
                        <th className="p-12">Venture / Logic_Origin</th>
                        <th className="p-12 text-right">Node_Control</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-50">
                      {filteredAssets.map((asset) => (
                        <tr key={asset._id} className="hover:bg-[#FDF9F3] transition-all group">
                          <td className="p-10">
                            <div className="flex items-center gap-8">
                              <div className="w-20 h-20 rounded-3xl bg-slate-100 flex items-center justify-center font-black text-3xl group-hover:bg-[#0F1419] group-hover:text-[#D4AF37] transition-all border-4 border-white shadow-sm italic">
                                {asset.name?.charAt(0)}
                              </div>
                              <div>
                                <p className="font-black text-2xl italic uppercase tracking-tighter text-[#0F1419]">{asset.name}</p>
                                <p className="text-[10px] text-slate-400 font-mono tracking-widest">{asset.email}</p>
                              </div>
                            </div>
                          </td>
                          <td className="p-10">
                            <p className="font-black italic uppercase text-slate-700 text-lg tracking-tight">
                              {asset.startup || asset.firm || asset.expertise || "DECENTRALIZED"}
                            </p>
                            <p className="text-[9px] font-bold text-[#D4AF37] uppercase mt-1">
                              {asset.industry || asset.sector || "ALPHA_CLUSTER"}
                            </p>
                          </td>
                          <td className="p-10 text-right">
                            <div className="flex justify-end gap-5">
                              <button onClick={() => setSelectedEntity(asset)} className="p-5 bg-white shadow-lg rounded-2xl hover:text-[#D4AF37] hover:scale-110 transition-all border border-slate-100"><Eye size={24} /></button>
                              <button onClick={() => handleErasure(activeTab, asset._id)} className="p-5 bg-white shadow-lg rounded-2xl hover:text-rose-600 hover:scale-110 transition-all border border-slate-100"><Trash2 size={24} /></button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>

      {/* Sovereign Notifier */}
      <div className="fixed bottom-12 right-12 z-[120]">
        <motion.button 
          whileHover={{ scale: 1.1, rotate: 90 }} 
          className="w-20 h-20 bg-[#0F1419] border-2 border-[#D4AF37] text-white rounded-[2.5rem] flex items-center justify-center shadow-2xl relative group overflow-hidden"
        >
          <Bell size={28} className="text-[#D4AF37] relative z-10" />
          <div className="absolute inset-0 bg-[#D4AF37] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
          <div className="absolute -top-1 -right-1 w-6 h-6 bg-blue-600 rounded-full border-4 border-[#0F1419] flex items-center justify-center text-[9px] font-black z-20">!</div>
        </motion.button>
      </div>
    </div>
  );
}

const StatNode = ({ title, count, icon }) => (
  <motion.div 
    whileHover={{ y: -12, borderColor: "#D4AF37" }} 
    className="bg-white p-12 rounded-[4.5rem] shadow-xl border border-slate-100 relative overflow-hidden group transition-all duration-700"
  >
    <div className="absolute right-0 top-0 p-12 opacity-[0.03] group-hover:scale-125 transition-transform text-[#0F1419]">{icon}</div>
    <div className="flex items-center gap-5 text-[#D4AF37] mb-10 font-black uppercase tracking-widest text-[11px] italic relative z-10">
       <div className="p-4 bg-[#FDF9F3] rounded-[1.5rem] group-hover:bg-[#0F1419] transition-colors">{icon}</div> {title}
    </div>
    <p className="text-8xl font-black italic tracking-tighter leading-none text-[#0F1419] relative z-10">{count}</p>
    <div className="mt-8 pt-8 border-t border-slate-50 flex items-center gap-3 opacity-30 group-hover:opacity-100 transition-opacity">
       <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_#10b981]" />
       <span className="text-[8px] font-black uppercase tracking-[0.4em] text-[#0F1419]">Node_Pulse_Active</span>
    </div>
  </motion.div>
);