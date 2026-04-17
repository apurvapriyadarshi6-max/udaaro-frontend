import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Lock, 
  Mail, 
  Eye, 
  EyeOff, 
  ShieldAlert, 
  ArrowRight, 
  Loader2, 
  ShieldCheck,
  ServerCrash
} from "lucide-react";

function AdminLogin() {
  const navigate = useNavigate();
  const FOUNDER_NAME = "Apurva Priyadarshi";

  // Environment-based API resolution
  const API_BASE = import.meta.env.PROD
    ? "https://udaaro-backend.onrender.com"
    : "http://localhost:5000";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch(`${API_BASE}/api/admin/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem("token", data.token);
        // Instant but smooth navigation to the dashboard
        navigate("/admin");
      } else {
        setError(data.message || "Unauthorized: Credential mismatch.");
      }
    } catch (err) {
      setError("Infrastructure error: Security server unreachable.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0a0a0b] p-6 relative overflow-hidden selection:bg-blue-600">
      
      {/* ================= BACKGROUND ARCHITECTURE ================= */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-blue-900/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-indigo-900/10 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.05]" />
      </div>

      {/* ================= BRAND LOGO ================= */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12 text-center relative z-10"
      >
        <div className="w-20 h-20 bg-blue-600 rounded-[2rem] flex items-center justify-center text-white font-black text-4xl italic mx-auto mb-6 shadow-[0_20px_50px_rgba(37,99,235,0.3)] border border-blue-400/30">
          U
        </div>
        <h1 className="text-2xl font-black text-white tracking-[0.2em] uppercase leading-none">Udaaro Terminal</h1>
        <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.5em] mt-3">Governance Control Center</p>
      </motion.div>

      {/* ================= LOGIN CONTAINER ================= */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-[460px] relative z-10"
      >
        <div className="bg-white/5 backdrop-blur-2xl rounded-[3rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] p-10 md:p-14 border border-white/10 relative overflow-hidden">
          
          <div className="mb-12 relative">
            <h2 className="text-xl font-black text-white uppercase tracking-widest leading-none">Access Protocol</h2>
            <p className="text-slate-500 text-xs mt-3 font-medium tracking-wide">Enter sovereign credentials to initiate terminal session.</p>
            <div className="absolute top-0 right-0">
               <ShieldCheck className="text-blue-500/20" size={40} />
            </div>
          </div>

          {/* ERROR ALERT */}
          <AnimatePresence>
            {error && (
              <motion.div 
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="mb-8 p-4 bg-red-500/10 border border-red-500/20 rounded-2xl flex items-center gap-4 text-red-400 text-xs font-bold uppercase tracking-wider"
              >
                <ServerCrash size={18} />
                <p>{error}</p>
              </motion.div>
            )}
          </AnimatePresence>

          <form onSubmit={handleLogin} className="space-y-8">
            
            {/* Email Field */}
            <div className="space-y-3">
              <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] ml-2">
                Admin Identifier
              </label>
              <div className="relative group">
                <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-600 group-focus-within:text-blue-500 transition-colors" size={18} />
                <input
                  type="email"
                  placeholder="admin@udaaro.systems"
                  className="w-full bg-white/[0.03] border-2 border-white/5 focus:border-blue-600/50 rounded-[1.5rem] py-5 pl-14 pr-6 transition-all outline-none text-white font-bold text-sm"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-3">
              <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] ml-2">
                Security Key
              </label>
              <div className="relative group">
                <Lock className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-600 group-focus-within:text-blue-500 transition-colors" size={18} />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="w-full bg-white/[0.03] border-2 border-white/5 focus:border-blue-600/50 rounded-[1.5rem] py-5 pl-14 pr-14 transition-all outline-none text-white font-bold text-sm tracking-widest"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-600 hover:text-white transition-colors"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* Submit Action */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-500 text-white font-black py-5 rounded-[1.5rem] shadow-2xl shadow-blue-600/20 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-4 group disabled:opacity-50 uppercase text-xs tracking-[0.4em]"
            >
              {loading ? (
                <>
                  <Loader2 className="animate-spin" size={20} />
                  Encrypting...
                </>
              ) : (
                <>
                  Initialize Terminal
                  <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                </>
              )}
            </button>
          </form>

          <div className="mt-12 text-center opacity-30">
            <p className="text-[9px] text-slate-400 leading-relaxed px-8 font-bold uppercase tracking-widest">
              Private Infrastructure. <br />
              System Architect: {FOUNDER_NAME}.
            </p>
          </div>
        </div>

        {/* Support Link */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-center mt-10 text-[10px] uppercase tracking-widest text-slate-600"
        >
          Authorization issues? <a href="mailto:ops@udaaro.com" className="text-blue-500 font-black hover:text-blue-400 transition-colors underline decoration-blue-900 underline-offset-4">Contact Command</a>
        </motion.p>
      </motion.div>
    </div>
  );
}

export default AdminLogin;