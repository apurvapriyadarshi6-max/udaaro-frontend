/** * =============================================================================
 * UDAARO SOVEREIGN VENTURE OS - MASTER CONTROL PANEL (MCP) v4.1.0
 * -----------------------------------------------------------------------------
 * DESIGN LANGUAGE: Imperial Neo-Heritage
 * SYSTEM ARCHITECT: Apurva Priyadarshi (Cycle 2026)
 * MODULE: Institutional Intelligence & Ecosystem Governance
 * ============================================================================= */

import React, { useState, useEffect, useMemo, useCallback, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import {
  LayoutDashboard, UserCircle, Briefcase, GraduationCap, LogOut, Search, Trash2, 
  RefreshCcw, ChevronRight, ShieldCheck, TrendingUp, Activity, Layers, Bell, 
  Database, X, User, Smartphone, MapPin, Building, Target, Clock, Send, Eye, 
  ShieldAlert, Cpu, BarChart3, Fingerprint, Printer, Download, Maximize2, 
  Terminal, IndianRupee, Binary, Hash, AtSign, Landmark, ArrowLeft, Rocket,
  Award, Box, Info, Share2, ExternalLink, HardDrive, Globe, Zap, Server, 
  Lock, Microscope, Code, Workflow, CheckCircle2, AlertTriangle, FileText
} from "lucide-react";
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, LineChart, Line
} from "recharts";

// --- SYSTEM CONSTANTS ---
const IMPERIAL_COLORS = {
  sandstone: "#FDF9F3",
  royalSlate: "#0F1419",
  goldLeaf: "#D4AF37",
  emerald: "#10B981",
  ruby: "#E11D48",
  cobalt: "#1D4ED8"
};

const TYPOGRAPHY = {
  mono: "font-mono uppercase tracking-[0.4em] text-[9px] font-black",
  display: "font-serif italic tracking-tighter"
};

/** * =============================================================================
 * IV. ADVANCED ANALYTICS ENGINE (THE SYNDICATE PULSE)
 * ============================================================================= */

const EcosystemAnalytics = ({ data }) => {
  const pieData = [
    { name: 'Founders', value: data.founders.length, color: '#D4AF37' },
    { name: 'Investors', value: data.investors.length, color: '#1D4ED8' },
    { name: 'Mentors', value: data.mentors.length, color: '#10B981' },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-12">
      {/* 1. SECTOR DENSITY PIE */}
      <div className="lg:col-span-4 bg-white p-12 rounded-[4rem] border border-slate-100 shadow-xl relative overflow-hidden group">
        <div className="absolute inset-0 bg-[#D4AF37]/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
        <h4 className={`${TYPOGRAPHY.mono} text-[#D4AF37] mb-8`}>Node_Density_Distribution</h4>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={pieData}
                innerRadius={80}
                outerRadius={110}
                paddingAngle={10}
                dataKey="value"
                stroke="none"
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ borderRadius: '24px', background: '#0F1419', border: 'none', color: '#fff' }}
                itemStyle={{ color: '#D4AF37', fontWeight: 'bold' }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-8 flex justify-center gap-6">
          {pieData.map(d => (
            <div key={d.name} className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: d.color }} />
              <span className="text-[9px] font-black uppercase tracking-widest">{d.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 2. INFRASTRUCTURE TERMINAL LOGS */}
      <div className="lg:col-span-8 bg-[#0F1419] p-12 rounded-[4rem] shadow-2xl relative border border-[#D4AF37]/20">
        <div className="flex justify-between items-center mb-10">
          <h4 className={`${TYPOGRAPHY.mono} text-[#D4AF37]`}>Global_Access_Ledger</h4>
          <div className="flex gap-4">
             <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
             <span className="text-[9px] font-mono text-emerald-500 font-bold uppercase">System_Healthy</span>
          </div>
        </div>
        <div className="space-y-4 max-h-[350px] overflow-y-auto custom-scrollbar-dark font-mono text-[10px]">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="p-5 border-b border-white/5 flex gap-6 items-center text-slate-400 hover:text-white transition-colors">
              <span className="text-[#D4AF37] font-black">[{new Date().toLocaleTimeString()}]</span>
              <span className="text-white/60">NODE_VERIFICATION:</span>
              <span className="italic">Attempting Handshake with Cluster_India_Node_{Math.floor(Math.random()*99)}</span>
              <span className="ml-auto text-emerald-500 font-black">AUTHORIZED</span>
            </div>
          ))}
          <div className="flex items-center gap-4 text-emerald-500 p-5 bg-emerald-500/5 rounded-2xl border border-emerald-500/10">
            <CheckCircle2 size={14} />
            <span>CRITICAL_PROCESS_COMPLETE: ALL ASSETS SYNCHRONIZED TO CLOUD_VOS</span>
          </div>
        </div>
      </div>
    </div>
  );
};

/** * =============================================================================
 * V. INSTITUTIONAL SYSTEM AUDIT (THE AUDIT TRAIL)
 * ============================================================================= */

const SystemAuditTrail = () => {
  const audits = [
    { event: "LoginHandshake", user: "Apurva_P", node: "INDIA_ALPHA", status: "Secure", time: "2 min ago" },
    { event: "DataErasure", user: "System_Bot", node: "DB_CLUSTER_09", status: "Warning", time: "15 min ago" },
    { event: "BatchAdmission", user: "Node_Vanguard", node: "FOUNDER_NODE", status: "Verified", time: "1 hour ago" },
  ];

  return (
    <div className="mt-12 bg-white rounded-[4rem] p-12 border border-slate-100 shadow-xl">
      <div className="flex items-center justify-between mb-12">
        <div className="flex items-center gap-4">
          <ShieldCheck className="text-[#D4AF37]" size={24} />
          <h3 className="text-2xl font-black italic uppercase tracking-tighter">Institutional_Audit</h3>
        </div>
        <button className="flex items-center gap-2 px-6 py-3 bg-[#FDF9F3] rounded-full text-[9px] font-black uppercase tracking-[0.2em] border border-slate-200 hover:border-[#D4AF37] transition-all">
          <Download size={14} /> Export_Legder
        </button>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {audits.map((a, i) => (
          <div key={i} className="p-8 bg-slate-50 rounded-[2.5rem] border border-transparent hover:border-[#D4AF37]/20 transition-all flex flex-col justify-between h-56 group">
            <div className="flex justify-between items-start">
              <div className={`p-3 rounded-xl ${a.status === 'Warning' ? 'bg-rose-100 text-rose-500' : 'bg-emerald-100 text-emerald-500'}`}>
                {a.status === 'Warning' ? <AlertTriangle size={18} /> : <CheckCircle2 size={18} />}
              </div>
              <span className="text-[9px] font-black text-slate-300 group-hover:text-[#D4AF37] transition-colors">{a.time}</span>
            </div>
            <div>
              <p className="text-[10px] font-black uppercase tracking-widest text-[#D4AF37] mb-2">{a.event}</p>
              <p className="text-xl font-black italic tracking-tighter uppercase text-[#0F1419]">{a.user}</p>
            </div>
            <div className="flex justify-between items-center text-[9px] font-black text-slate-400 uppercase tracking-widest">
              <span>Node: {a.node}</span>
              <span className="px-3 py-1 bg-white rounded-full border border-slate-200">{a.status}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

/** * =============================================================================
 * VI. MAIN COMMAND HUB (EXTENDED VERSION)
 * ============================================================================= */

const ExtendedAdmin = () => {
  // ... (Existing logic for data, syncNodes, handleErasure remains same as previous turn)

  return (
    <div className="min-h-screen w-full bg-[#FDF9F3] flex font-serif text-[#0F1419] overflow-hidden select-none relative">
      {/* 1. LAYERED BACKGROUND JALI */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] z-0">
        <svg width="100%" height="100%">
          <pattern id="jali-grid" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
            <path d="M60 0 L120 60 L60 120 L0 60 Z" fill="none" stroke="currentColor" strokeWidth="1" />
            <circle cx="60" cy="60" r="15" fill="none" stroke="currentColor" strokeWidth="1" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#jali-grid)" />
        </svg>
      </div>

      {/* 2. SIDEBAR - VOS COMMANDER */}
      <Sidebar />

      {/* 3. MAIN WORKSPACE */}
      <div className="flex-1 flex flex-col h-screen overflow-y-auto custom-scrollbar relative z-10">
        
        {/* NAV HEADER */}
        <header className="p-10 sticky top-0 z-[100] bg-white/60 backdrop-blur-3xl border-b border-[#D4AF37]/10 flex justify-between items-center px-16">
          <div className="flex items-center gap-10">
            <div className="flex flex-col">
              <h1 className="text-5xl font-black italic tracking-tighter uppercase leading-none">Intelligence_Node</h1>
              <p className="text-[10px] font-black text-[#D4AF37] uppercase tracking-[0.5em] mt-3">Sovereign_OS v4.1.0 Alpha</p>
            </div>
          </div>
          <div className="flex items-center gap-8">
            <div className="hidden lg:flex items-center gap-4 bg-white border border-slate-200 px-6 py-3 rounded-2xl shadow-sm">
              <Globe size={16} className="text-[#D4AF37] animate-spin-slow" />
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Grid_Sync: GLOBAL_NORTH</span>
            </div>
            <div className="w-14 h-14 bg-[#0F1419] rounded-2xl border-2 border-[#D4AF37] flex items-center justify-center text-[#D4AF37] shadow-xl">
              <UserCircle size={28} />
            </div>
          </div>
        </header>

        {/* CONTENT VIEWPORT */}
        <div className="p-16 max-w-[1700px] mx-auto w-full space-y-12">
          
          {/* TOP TIER STATS */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            <StatCard label="Admission_Rate" value="1.2%" icon={<Target />} trend="+0.4%" />
            <StatCard label="Capital_Deployment" value="₹14.2Cr" icon={<IndianRupee />} trend="+22%" />
            <StatCard label="Node_Uptime" value="99.98%" icon={<Zap />} trend="STABLE" />
            <StatCard label="Audit_Integrity" value="Verified" icon={<ShieldCheck />} color="text-emerald-500" />
          </div>

          {/* MAIN DATA VIEW */}
          <AnimatePresence mode="wait">
            {activeTab === "dashboard" ? (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} key="dashboard_view">
                <div className="bg-white p-12 rounded-[5rem] border border-slate-100 shadow-2xl h-[650px] relative group overflow-hidden">
                  <div className="absolute top-0 right-0 p-16 opacity-[0.02] group-hover:scale-110 transition-transform"><Microscope size={400} /></div>
                  <div className="flex justify-between items-center mb-12">
                    <div className="flex items-center gap-6">
                      <BarChart3 className="text-[#D4AF37]" size={32} />
                      <h2 className="text-4xl font-black italic uppercase tracking-tighter">Ecosystem_Velocity</h2>
                    </div>
                  </div>
                  <ResponsiveContainer width="100%" height="85%">
                    <AreaChart data={chartData}>
                      <defs>
                        <linearGradient id="imperialGlow" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#D4AF37" stopOpacity={0.4}/>
                          <stop offset="95%" stopColor="#D4AF37" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <Tooltip contentStyle={{ background: '#0F1419', borderRadius: '30px', border: 'none' }} />
                      <Area type="monotone" dataKey="val" stroke="#D4AF37" strokeWidth={8} fill="url(#imperialGlow)" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
                
                {/* ADVANCED MODULES */}
                <EcosystemAnalytics data={data} />
                <SystemAuditTrail />
              </motion.div>
            ) : (
              <AssetListNode activeTab={activeTab} data={filteredAssets} />
            )}
          </AnimatePresence>

        </div>

        {/* FOOTER LEDGER */}
        <footer className="mt-auto p-12 bg-white/40 border-t border-slate-100 flex justify-between items-center px-16 opacity-40">
           <div className="flex items-center gap-6">
              <div className="w-10 h-10 bg-[#0F1419] rounded-xl flex items-center justify-center text-[#D4AF37] font-black italic">U</div>
              <span className="text-[10px] font-black uppercase tracking-[0.5em]">Global_Ventures_Operating_System © 2026</span>
           </div>
           <div className="flex gap-12 text-[9px] font-black uppercase tracking-widest">
              <span>Ledger: Encrypted_AES_256</span>
              <span>Node_Status: MASTER_SYNC_OK</span>
           </div>
        </footer>
      </div>
    </div>
  );
};

// --- SUB-COMPONENTS ---

const StatCard = ({ label, value, icon, trend, color = "text-[#0F1419]" }) => (
  <motion.div whileHover={{ y: -10 }} className="p-10 bg-white rounded-[3.5rem] border border-slate-100 shadow-xl relative overflow-hidden group">
    <div className="absolute right-0 top-0 p-10 opacity-[0.03] group-hover:scale-125 transition-transform">{icon}</div>
    <p className={`${TYPOGRAPHY.mono} text-[#D4AF37] mb-6`}>{label}</p>
    <div className="flex items-end justify-between">
      <p className={`text-6xl font-black italic tracking-tighter leading-none ${color}`}>{value}</p>
      {trend && <span className="text-[10px] font-black text-emerald-500 bg-emerald-50 px-3 py-1 rounded-full">{trend}</span>}
    </div>
  </motion.div>
);

export default ExtendedAdmin;