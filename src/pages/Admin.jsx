import React, { useEffect, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard,
  UserCircle,
  Briefcase,
  GraduationCap,
  LogOut,
  Search,
  Trash2,
  RefreshCcw,
  ExternalLink,
  ChevronRight,
  ShieldCheck,
  Zap,
  TrendingUp,
  Filter
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";

/** * ==========================================
 * COMMAND TERMINAL CONFIGURATION
 * Architected by Apurva Priyadarshi
 * ========================================== */
const TABS = [
  { id: "dashboard", label: "Intelligence", icon: <LayoutDashboard size={18} /> },
  { id: "founders", label: "Vanguard", icon: <UserCircle size={18} /> },
  { id: "investors", label: "Syndicate", icon: <Briefcase size={18} /> },
  { id: "mentors", label: "Advisory", icon: <GraduationCap size={18} /> },
];

function Admin() {
  const navigate = useNavigate();
  const API_BASE = import.meta.env.PROD 
    ? "https://udaaro-backend.onrender.com" 
    : "http://localhost:5000";

  const [activeTab, setActiveTab] = useState("dashboard");
  const [search, setSearch] = useState("");
  const [data, setData] = useState({ founders: [], investors: [], mentors: [] });
  const [isSyncing, setIsSyncing] = useState(false);

  /* ================= SECURITY & PROTOCOL ================= */

  const fetchData = async () => {
    const token = localStorage.getItem("token");
    if (!token) { navigate("/admin-login"); return; }

    setIsSyncing(true);
    const headers = { Authorization: `Bearer ${token}` };

    try {
      const [fRes, iRes, mRes] = await Promise.all([
        fetch(`${API_BASE}/api/founders`, { headers }),
        fetch(`${API_BASE}/api/investors`, { headers }),
        fetch(`${API_BASE}/api/mentors`, { headers }),
      ]);

      if ([fRes, iRes, mRes].some((r) => r.status === 401)) {
        handleLogout();
        return;
      }

      const [founders, investors, mentors] = await Promise.all([
        fRes.json(), iRes.json(), mRes.json()
      ]);

      setData({
        founders: Array.isArray(founders) ? founders : [],
        investors: Array.isArray(investors) ? investors : [],
        mentors: Array.isArray(mentors) ? mentors : [],
      });
    } catch (err) {
      console.error("Infrastructure Sync Failure:", err);
    } finally {
      // Luxury delay to prevent UI flicker
      setTimeout(() => setIsSyncing(false), 600);
    }
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 15000); // Efficient 15s handshake
    return () => clearInterval(interval);
  }, []);

  const handleDelete = async (type, id) => {
    if (!window.confirm("CRITICAL: Permanent data erasure protocol. Proceed?")) return;
    const token = localStorage.getItem("token");

    try {
      const res = await fetch(`${API_BASE}/api/${type}/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.ok) fetchData();
    } catch (err) {
      alert("Terminal Error: Erasure failed.");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/admin-login");
  };

  /* ================= ANALYTICS SYNTHESIS ================= */

  const stats = useMemo(() => [
    { name: "Founders", count: data.founders.length, color: "#2563eb", icon: <TrendingUp size={16}/> },
    { name: "Investors", count: data.investors.length, color: "#6366f1", icon: <ShieldCheck size={16}/> },
    { name: "Mentors", count: data.mentors.length, color: "#06b6d4", icon: <Zap size={16}/> },
  ], [data]);

  const growthData = useMemo(() => {
    const map = {};
    [...data.founders, ...data.investors, ...data.mentors].forEach((item) => {
      const date = new Date(item.createdAt);
      if (isNaN(date)) return;
      const key = `${date.toLocaleString('default', { month: 'short' })} ${date.getFullYear()}`;
      map[key] = (map[key] || 0) + 1;
    });
    return Object.entries(map).map(([name, total]) => ({ name, total }));
  }, [data]);

  const filteredItems = useMemo(() => {
    const list = data[activeTab] || [];
    return list.filter(item => item.name?.toLowerCase().includes(search.toLowerCase()));
  }, [data, activeTab, search]);

  return (
    <div className="min-h-screen bg-[#f8fafc] flex font-sans text-slate-950 overflow-hidden">
      
      {/* ================= SOVEREIGN SIDEBAR ================= */}
      <aside className="w-80 bg-slate-950 flex flex-col relative z-20">
        <div className="p-10">
          <div className="flex items-center gap-4 mb-16 group cursor-pointer">
            <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white font-black italic shadow-2xl shadow-blue-500/20 group-hover:rotate-12 transition-transform">U</div>
            <div>
                <h2 className="text-xl font-black tracking-tighter text-white uppercase">Udaaro</h2>
                <p className="text-[9px] font-black text-blue-500 uppercase tracking-[0.3em]">Command Center</p>
            </div>
          </div>

          <nav className="space-y-3">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center justify-between w-full px-5 py-4 rounded-2xl font-black text-[11px] uppercase tracking-[0.2em] transition-all duration-500 ${
                  activeTab === tab.id 
                  ? "bg-blue-600 text-white shadow-2xl shadow-blue-500/40" 
                  : "text-slate-500 hover:text-slate-300 hover:bg-white/5"
                }`}
              >
                <div className="flex items-center gap-4">
                    {tab.icon}
                    {tab.label}
                </div>
                {activeTab === tab.id && <motion.div layoutId="activeDot" className="w-1.5 h-1.5 bg-white rounded-full" />}
              </button>
            ))}
          </nav>
        </div>

        <div className="mt-auto p-10 border-t border-white/5">
          <button 
            onClick={handleLogout}
            className="flex items-center gap-4 text-slate-500 font-black text-[10px] uppercase tracking-widest hover:text-red-500 transition-colors w-full px-5 py-4"
          >
            <LogOut size={16} />
            Terminate Session
          </button>
          <p className="text-[8px] text-slate-700 uppercase tracking-widest mt-6 text-center">
            Architect: Apurva Priyadarshi
          </p>
        </div>
      </aside>

      {/* ================= MAIN INTERFACE ================= */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden relative">
        <header className="bg-white/70 backdrop-blur-xl border-b border-slate-200 px-12 py-8 flex justify-between items-center z-10">
          <div>
            <h1 className="text-3xl font-black tracking-tighter capitalize italic">{activeTab}</h1>
            <div className="flex items-center gap-2 mt-1">
                <span className={`w-2 h-2 rounded-full ${isSyncing ? 'bg-amber-500 animate-pulse' : 'bg-emerald-500'}`} />
                <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest">
                    {isSyncing ? "Synchronizing Assets..." : "Terminal Status: Optimal"}
                </p>
            </div>
          </div>
          
          <div className="flex items-center gap-6">
             <motion.button 
                whileTap={{ rotate: 180 }}
                onClick={fetchData} 
                className="p-3 bg-white border border-slate-200 rounded-xl hover:shadow-lg transition-all"
             >
                <RefreshCcw size={16} className={`text-slate-500 ${isSyncing && 'animate-spin'}`} />
             </motion.button>
             <div className="w-12 h-12 rounded-2xl border-2 border-white shadow-2xl overflow-hidden ring-4 ring-slate-100">
                <img src="https://ui-avatars.com/api/?name=Apurva+Priyadarshi&background=0f172a&color=fff" alt="Admin" />
             </div>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-12 custom-scrollbar">
          
          <AnimatePresence mode="wait">
            {activeTab === "dashboard" ? (
              <motion.div 
                key="dashboard"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-12"
              >
                {/* GLOBAL INTEL CARDS */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                  {stats.map((s) => (
                    <div key={s.name} className="bg-white p-10 rounded-[3rem] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.05)] border border-slate-100 flex flex-col justify-between group hover:border-blue-500 transition-all duration-500 relative overflow-hidden">
                      <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-110 transition-transform">
                          <LayoutDashboard size={80} />
                      </div>
                      <div className="relative z-10 flex items-center gap-3 text-blue-600 mb-6">
                          {s.icon}
                          <h4 className="font-black text-[10px] uppercase tracking-[0.3em]">{s.name} Registered</h4>
                      </div>
                      <p className="text-6xl font-black tracking-tighter leading-none">{s.count}</p>
                      <div className="mt-8 flex items-center gap-2 text-emerald-500 text-[10px] font-black uppercase tracking-widest">
                          <TrendingUp size={12} /> Institutional Growth
                      </div>
                    </div>
                  ))}
                </div>

                {/* VISUAL SYNTHESIS */}
                <div className="grid lg:grid-cols-2 gap-12">
                  <div className="bg-slate-950 p-12 rounded-[4rem] shadow-2xl">
                    <h3 className="text-white font-black text-xs uppercase tracking-[0.4em] mb-10 opacity-50 italic">Asset Distribution</h3>
                    <div className="h-[300px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={stats}>
                          <CartesianGrid strokeDasharray="0" vertical={false} stroke="rgba(255,255,255,0.05)" />
                          <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#475569', fontSize: 10, fontWeight: 'bold'}} />
                          <YAxis hide />
                          <Tooltip 
                            cursor={{fill: 'rgba(255,255,255,0.03)'}} 
                            contentStyle={{backgroundColor: '#000', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.1)', color: '#fff'}} 
                          />
                          <Bar dataKey="count" fill="#2563eb" radius={[15, 15, 15, 15]} barSize={45} />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </div>

                  <div className="bg-white p-12 rounded-[4rem] border border-slate-100 shadow-sm">
                    <h3 className="text-slate-400 font-black text-xs uppercase tracking-[0.4em] mb-10 italic">Velocity Metrics</h3>
                    <div className="h-[300px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={growthData}>
                          <defs>
                            <linearGradient id="premiumBlue" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="5%" stopColor="#2563eb" stopOpacity={0.2}/>
                              <stop offset="95%" stopColor="#2563eb" stopOpacity={0}/>
                            </linearGradient>
                          </defs>
                          <CartesianGrid strokeDasharray="0" vertical={false} stroke="#f1f5f9" />
                          <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 10, fontWeight: 'bold'}} />
                          <YAxis hide />
                          <Tooltip contentStyle={{borderRadius: '20px', border: 'none', boxShadow: '0 20px 40px rgba(0,0,0,0.1)'}} />
                          <Area type="monotone" dataKey="total" stroke="#2563eb" strokeWidth={5} fillOpacity={1} fill="url(#premiumBlue)" />
                        </AreaChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div 
                key="list"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="bg-white rounded-[4rem] shadow-xl border border-slate-100 overflow-hidden"
              >
                <div className="p-12 border-b border-slate-50 flex flex-col md:flex-row justify-between items-center gap-10">
                  <div className="relative flex-1 w-full max-w-lg">
                    <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                    <input
                      type="text"
                      placeholder={`Query ${activeTab} data...`}
                      className="w-full pl-16 pr-8 py-5 bg-slate-50 border-none rounded-[2rem] focus:ring-2 focus:ring-blue-600 transition-all font-bold text-sm"
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                    />
                  </div>
                  <button className="flex items-center gap-3 px-8 py-5 bg-slate-950 text-white rounded-[1.5rem] font-black text-[10px] uppercase tracking-widest shadow-xl">
                      <Filter size={14} /> Advanced Filter
                  </button>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="bg-slate-50/50 text-slate-400 text-[10px] font-black uppercase tracking-[0.3em]">
                        <th className="px-12 py-8 italic underline decoration-blue-500 underline-offset-8">Identity Protocol</th>
                        <th className="px-12 py-8 italic">Organization Synthesis</th>
                        <th className="px-12 py-8 italic">Entry Timestamp</th>
                        <th className="px-12 py-8 text-right italic">Sovereign Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-50">
                      {filteredItems.map((item) => (
                        <tr key={item._id} className="hover:bg-blue-50/30 transition-all group">
                          <td className="px-12 py-10">
                            <div className="font-black text-slate-900 text-base tracking-tighter">{item.name}</div>
                            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">{item.email}</div>
                          </td>
                          <td className="px-12 py-10">
                            <div className="text-sm font-black text-slate-700 italic">
                              {item.startup || item.firm || item.expertise || 'DECENTRALIZED'}
                            </div>
                            <div className="text-[9px] font-black text-blue-500 uppercase tracking-widest mt-1 opacity-60">
                                {item.stage || item.experienceLevel || 'ALPHA'}
                            </div>
                          </td>
                          <td className="px-12 py-10">
                            <span className="px-4 py-2 bg-slate-100 rounded-lg text-[10px] font-black text-slate-500 uppercase tracking-tighter">
                                {new Date(item.createdAt).toLocaleDateString()}
                            </span>
                          </td>
                          <td className="px-12 py-10 text-right">
                             <div className="flex justify-end gap-3 opacity-0 group-hover:opacity-100 transition-all translate-x-4 group-hover:translate-x-0">
                                <button className="p-3 bg-white shadow-sm border border-slate-100 rounded-xl hover:text-blue-600 transition-all">
                                    <ExternalLink size={16} />
                                </button>
                                <button 
                                    onClick={() => handleDelete(activeTab, item._id)}
                                    className="p-3 bg-white shadow-sm border border-red-50 rounded-xl text-slate-300 hover:text-red-500 transition-all"
                                >
                                    <Trash2 size={16} />
                                </button>
                             </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  {filteredItems.length === 0 && (
                    <div className="p-32 text-center">
                        <ShieldCheck size={48} className="mx-auto text-slate-200 mb-6" />
                        <p className="text-slate-400 font-black text-[10px] uppercase tracking-[0.4em]">Zero Assets Detected In This Sector</p>
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}

export default Admin;