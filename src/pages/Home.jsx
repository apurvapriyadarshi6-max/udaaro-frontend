import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
/** * RECTIFIED IMPORTS
 * Added all missing icons and components used in your JSX
 */
import { 
  CheckCircle, 
  Rocket, 
  ShieldCheck, 
  Fingerprint, 
  Layers, 
  Crown, 
  Sparkles, 
  ArrowUpRight, 
  Award, 
  Zap, 
  Globe, 
  MessageSquare,
  ChevronRight
} from "lucide-react";

/** * ==========================================
 * ADVANCED DATA CONFIGURATION
 * ==========================================
 */
const BRAND_VISION = {
  founder: "Apurva Priyadarshi",
  tagline: "The Sovereign Layer for Indian Innovation",
  batch: "Batch 2026-Alpha"
};

const ECOSYSTEM_STATS = [
  { label: "Vetted Founders", value: "500+", growth: "+12%" },
  { label: "Institutional Backers", value: "80+", growth: "+5%" },
  { label: "Elite Mentors", value: "120+", growth: "+8%" },
  { label: "Success Capital", value: "$45M+", growth: "+22%" },
];

const MASTER_PROCESS = [
  {
    id: "I",
    title: "Curated Admission",
    desc: "A rigorous vetting process ensuring only the top 1% of founders enter the ecosystem.",
    icon: <Fingerprint className="text-blue-500" />
  },
  {
    id: "II",
    title: "Strategic Synthesis",
    desc: "AI-driven matching between visionary capital and high-growth potential startups.",
    icon: <Layers className="text-blue-500" />
  },
  {
    id: "III",
    title: "Global Ascension",
    desc: "Structured scaling pathways designed for sustainable market dominance.",
    icon: <Crown className="text-blue-500" />
  }
];

/** * ==========================================
 * REUSABLE PREMIUM UI ATOMS
 * ==========================================
 */

const LuxuryBadge = ({ text }) => (
  <motion.div 
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-50/50 backdrop-blur-md border border-blue-100 text-blue-700 text-xs font-black uppercase tracking-[0.2em] mb-8"
  >
    <Sparkles size={14} className="animate-pulse" />
    {text}
  </motion.div>
);

const MagneticButton = ({ children, primary = false, to }) => (
  <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
    <Link 
      to={to} 
      className={`
        relative overflow-hidden group px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest flex items-center gap-3 transition-all
        ${primary 
          ? "bg-slate-950 text-white shadow-2xl shadow-blue-200" 
          : "bg-white text-slate-900 border border-slate-200 hover:border-blue-500"}
      `}
    >
      <span className="relative z-10">{children}</span>
      <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
      {primary && (
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      )}
    </Link>
  </motion.div>
);

/** * ==========================================
 * MAIN ARCHITECTURE
 * ==========================================
 */
function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const yRange = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div className="bg-[#fdfdfe] text-slate-900 selection:bg-blue-600 selection:text-white">
      
      {/* ================= HERO: THE SOVEREIGN LAYER ================= */}
      <section className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden">
        {/* Dynamic Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-blue-50 rounded-full blur-[120px] opacity-60" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-indigo-50 rounded-full blur-[100px] opacity-40" />
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-24">
            <div className="lg:w-3/5 text-left">
              <LuxuryBadge text={`FOUNDED BY ${BRAND_VISION.founder} • ${BRAND_VISION.batch}`} />
              
              <motion.h1 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "circOut" }}
                className="text-6xl md:text-8xl font-black text-slate-950 leading-[0.95] mb-10 tracking-tighter"
              >
                Engineering the <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-400">
                  Global Future
                </span>
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-xl md:text-2xl text-slate-500 mb-12 leading-relaxed max-w-2xl font-medium"
              >
                Udaaro is a closed-loop ecosystem designed for the world’s most 
                ambitious builders. We provide the structural integrity required to 
                turn radical ideas into generational institutions.
              </motion.p>

              <div className="flex flex-wrap gap-6">
                <MagneticButton primary to="/apply">Apply for Admission</MagneticButton>
                <MagneticButton to="/investors">Join the Syndicate</MagneticButton>
              </div>

              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-20 flex items-center gap-10"
              >
                <div className="flex -space-x-4">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <motion.div 
                      key={i} 
                      whileHover={{ y: -5, zIndex: 50 }}
                      className="w-12 h-12 rounded-full border-4 border-white bg-slate-200 overflow-hidden shadow-lg cursor-pointer transition-all"
                    >
                      <img src={`https://i.pravatar.cc/150?u=premium${i}`} alt="Elite Member" />
                    </motion.div>
                  ))}
                </div>
                <div className="h-10 w-[1px] bg-slate-200" />
                <div className="text-sm">
                  <span className="font-black text-slate-950 block uppercase tracking-widest mb-1">Elite Consensus</span>
                  <span className="text-slate-400 font-medium">Joined by the top 1% this month</span>
                </div>
              </motion.div>
            </div>

            {/* Premium Card Visual */}
            <div className="lg:w-2/5 relative group">
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative p-1 bg-gradient-to-tr from-blue-200 via-white to-indigo-200 rounded-[3rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)]"
              >
                <div className="bg-slate-950 rounded-[2.8rem] p-10 text-white min-h-[500px] flex flex-col justify-between overflow-hidden relative">
                  <div className="absolute top-0 right-0 p-12 opacity-5 group-hover:opacity-20 transition-opacity">
                    <Crown size={280} />
                  </div>
                  
                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-blue-600 rounded-xl mb-6 flex items-center justify-center shadow-lg shadow-blue-500/50">
                      <Zap size={24} fill="white" />
                    </div>
                    <h4 className="text-blue-400 font-mono text-xs mb-4 tracking-[0.3em] uppercase underline decoration-blue-900 decoration-4 underline-offset-8">Terminal_Active</h4>
                    <p className="text-4xl font-black leading-none tracking-tighter">India’s Premier <br /> Venture OS.</p>
                  </div>

                  <div className="space-y-6 relative z-10">
                    {ECOSYSTEM_STATS.map((stat, i) => (
                      <div key={i} className="flex justify-between items-end border-b border-white/10 pb-4">
                        <div>
                          <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold mb-1">{stat.label}</p>
                          <p className="text-2xl font-black">{stat.value}</p>
                        </div>
                        <span className="text-xs text-emerald-400 font-mono mb-1">{stat.growth}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= THE APURVA PRIYADARSHI PHILOSOPHY ================= */}
      <section className="py-32 bg-slate-50 border-y border-slate-100">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 items-center gap-24">
            <div className="relative">
              <div className="aspect-square bg-white rounded-[4rem] shadow-inner p-4 overflow-hidden group">
                 <img 
                   src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop" 
                   className="w-full h-full object-cover rounded-[3.5rem] group-hover:scale-110 transition-transform duration-1000 grayscale hover:grayscale-0"
                   alt="Innovation Lab"
                 />
              </div>
              <div className="absolute -bottom-10 -right-10 p-10 bg-slate-950 text-white rounded-3xl shadow-2xl max-w-xs">
                 <Award className="text-blue-500 mb-4" size={32} />
                 <p className="font-bold text-lg mb-2 underline decoration-blue-600">The Udaaro Standard</p>
                 <p className="text-xs text-slate-400 leading-relaxed uppercase tracking-wider font-bold">"We are not a marketplace. We are an incubator of excellence."</p>
              </div>
            </div>

            <div className="text-left">
              <span className="text-blue-600 font-black tracking-[0.3em] uppercase text-xs">The Visionary Intent</span>
              <h2 className="text-4xl md:text-6xl font-black text-slate-950 mt-6 mb-10 tracking-tighter leading-none">
                A Platform Built <br /> On Hard Integrity.
              </h2>
              <p className="text-xl text-slate-500 leading-relaxed mb-10">
                Founder **Apurva Priyadarshi** envisioned Udaaro as more than just a 
                digital directory. It is a high-signal sanctuary where capital, 
                wisdom, and innovation converge to solve the most difficult 
                problems of the coming decade.
              </p>
              
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h5 className="font-black text-slate-900 uppercase text-xs tracking-widest mb-4">Core Philosophy</h5>
                  <ul className="space-y-3 text-slate-500 text-sm font-medium">
                    <li className="flex items-center gap-2"><CheckCircle size={14} className="text-emerald-500" /> Radical Transparency</li>
                    <li className="flex items-center gap-2"><CheckCircle size={14} className="text-emerald-500" /> Sovereign Growth</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-black text-slate-900 uppercase text-xs tracking-widest mb-4">Market Focus</h5>
                  <ul className="space-y-3 text-slate-500 text-sm font-medium">
                    <li className="flex items-center gap-2"><CheckCircle size={14} className="text-blue-500" /> Deep Tech & AI</li>
                    <li className="flex items-center gap-2"><CheckCircle size={14} className="text-blue-500" /> Fintech Sovereignty</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= THE ASCENSION PROCESS (Luxury Cards) ================= */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <div className="max-w-2xl">
              <span className="text-blue-600 font-black tracking-[0.3em] uppercase text-xs">The Roadmap</span>
              <h2 className="text-5xl font-black text-slate-950 mt-4 tracking-tighter">Your Pathway to Ascension</h2>
            </div>
            <div className="text-slate-400 max-w-xs text-sm font-medium uppercase tracking-widest">
              Structured guidance from seed to sovereignty.
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {MASTER_PROCESS.map((step, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="group p-12 bg-slate-50 rounded-[3rem] border border-slate-100 transition-all hover:bg-white hover:shadow-2xl hover:shadow-blue-100"
              >
                <div className="text-5xl font-black text-slate-100 mb-8 group-hover:text-blue-100 transition-colors italic">
                  {step.id}
                </div>
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-8 group-hover:scale-110 transition-transform">
                  {step.icon}
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-6 tracking-tight">{step.title}</h3>
                <p className="text-slate-500 leading-relaxed font-medium">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA: JOIN THE RANK ================= */}
      <section className="py-32 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="relative bg-slate-950 rounded-[4rem] p-16 md:p-32 text-center text-white overflow-hidden group shadow-2xl shadow-blue-400/20">
             {/* Background Orbs */}
             <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/30 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 group-hover:bg-blue-600/50 transition-colors" />
             <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-600/20 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
             
             <div className="relative z-10 max-w-3xl mx-auto">
                <Crown className="text-blue-500 mx-auto mb-10 animate-bounce" size={48} />
                <h2 className="text-5xl md:text-7xl font-black mb-10 tracking-tighter leading-none italic">
                  Ready to Lead the <br /> New Economy?
                </h2>
                <p className="text-xl text-slate-400 mb-12 font-medium">
                  Admission is selective. We are looking for founders who build 
                  with generational intent.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-6">
                  <MagneticButton primary to="/apply">Submit Application</MagneticButton>
                  <button className="px-10 py-5 bg-white/5 border border-white/10 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-white/10 transition-all">
                    Request Whitepaper
                  </button>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* ================= LUXURY FOOTER ================= */}
      <footer className="bg-slate-50 pt-32 pb-16 border-t border-slate-100">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-20 mb-32">
            <div className="md:col-span-1">
              <h3 className="text-4xl font-black text-slate-950 tracking-tighter mb-8 italic">UDAARO</h3>
              <p className="text-slate-500 text-sm font-medium leading-relaxed uppercase tracking-widest mb-8">
                The Elite Bridge for Global Innovators.
              </p>
              <div className="flex gap-4">
                {/* Social Icons Placeholder */}
                <div className="w-10 h-10 bg-white border border-slate-200 rounded-xl flex items-center justify-center hover:text-blue-600 transition-colors cursor-pointer"><Globe size={18} /></div>
                <div className="w-10 h-10 bg-white border border-slate-200 rounded-xl flex items-center justify-center hover:text-blue-600 transition-colors cursor-pointer"><MessageSquare size={18} /></div>
              </div>
            </div>
            
            {[
              { title: "Ecosystem", links: ["Founders", "Syndicate", "Advisors", "Success Stories"] },
              { title: "Institutional", links: ["About Udaaro", "Leadership", "Media Kit", "Careers"] },
              { title: "Legal & Privacy", links: ["Charter", "Privacy protocol", "Compliances", "Terms of Access"] }
            ].map((col, i) => (
              <div key={i}>
                <h4 className="font-black text-slate-950 text-xs uppercase tracking-[0.3em] mb-10 underline decoration-blue-500 underline-offset-8">
                  {col.title}
                </h4>
                <ul className="space-y-6">
                  {col.links.map((link, j) => (
                    <li key={j}>
                      <a href="#" className="text-slate-400 hover:text-blue-600 font-bold text-sm transition-colors flex items-center gap-2 group">
                        {link} <ChevronRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="pt-12 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-[10px] text-slate-400 font-black uppercase tracking-[0.4em]">
              © {new Date().getFullYear()} Udaaro Global. Architected by {BRAND_VISION.founder}.
            </div>
            <div className="flex gap-10">
               <span className="text-[10px] text-slate-400 font-black uppercase tracking-widest cursor-pointer hover:text-slate-900 transition-colors">Internal Terminal</span>
               <span className="text-[10px] text-slate-400 font-black uppercase tracking-widest cursor-pointer hover:text-slate-900 transition-colors">Infrastructure Status</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;