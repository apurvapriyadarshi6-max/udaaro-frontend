import React, { lazy, Suspense, useEffect } from "react";
import { Routes, Route, Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Loader2 } from "lucide-react";

/** * ==========================================
 * ADVANCED PAGE LOADING (Performance optimization)
 * Code-splitting ensures your site loads fast on day one.
 * ========================================== */
const Home = lazy(() => import("./pages/Home"));
const ApplyFounder = lazy(() => import("./pages/ApplyFounder"));
const Investors = lazy(() => import("./pages/Investors"));
const Mentors = lazy(() => import("./pages/Mentors"));
const Admin = lazy(() => import("./pages/Admin"));
const AdminLogin = lazy(() => import("./pages/AdminLogin"));

// Component Imports
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";

/** * ==========================================
 * PREMIUM LOADING FALLBACK
 * Architected for the Udaaro UX Standard.
 * ========================================== */
const SovereignLoader = () => (
  <div className="fixed inset-0 bg-white z-[999] flex flex-col items-center justify-center">
    <motion.div 
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="flex flex-col items-center"
    >
      <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white font-black italic shadow-2xl mb-6">U</div>
      <Loader2 className="w-6 h-6 text-blue-600 animate-spin" />
      <p className="mt-4 text-[10px] font-black text-slate-300 uppercase tracking-[0.5em]">Synchronizing Portfolio</p>
    </motion.div>
  </div>
);

/** * ==========================================
 * LAYOUT: PUBLIC SPHERE
 * Architected by Apurva Priyadarshi.
 * ========================================== */
const PublicLayout = () => {
  const { pathname } = useLocation();

  // Automatic scroll-to-top on route change for seamless UX
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="flex-grow">
        {/* Animated Page Wrap */}
        <AnimatePresence mode="wait">
          <motion.div
            key={pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
      
      {/* Optional: Add high-end Footer here if not inside pages */}
    </div>
  );
};

function App() {
  return (
    // Suspense handles the loading of lazy components
    <Suspense fallback={<SovereignLoader />}>
      <Routes>
        
        {/* ================= PUBLIC ROUTES (Vanguard Sphere) ================= */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/apply" element={<ApplyFounder />} />
          <Route path="/investors" element={<Investors />} />
          <Route path="/mentors" element={<Mentors />} />
        </Route>

        {/* ================= AUTH TERMINAL (Security Sphere) ================= */}
        <Route path="/admin-login" element={
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <AdminLogin />
          </motion.div>
        } />

        {/* ================= ADMIN COMMAND (Governance Sphere) ================= */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>
          }
        />

        {/* ================= 404 ERROR (Sovereign Recovery) ================= */}
        <Route 
          path="*" 
          element={
            <div className="min-h-screen flex items-center justify-center bg-slate-950 text-white p-6">
              <div className="max-w-md text-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <h1 className="text-[12rem] font-black text-white/5 leading-none">404</h1>
                  <div className="-mt-20 relative z-10">
                    <h2 className="text-3xl font-black italic tracking-tighter uppercase mb-4">Route Compromised</h2>
                    <p className="text-slate-500 font-medium leading-relaxed mb-10">
                      The coordinates you entered do not exist within the Udaaro infrastructure.
                    </p>
                    <a 
                      href="/" 
                      className="inline-flex items-center gap-3 bg-blue-600 px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-blue-700 transition-all shadow-2xl shadow-blue-500/20"
                    >
                      Return to Core Systems
                    </a>
                  </div>
                </motion.div>
              </div>
            </div>
          } 
        />

      </Routes>
    </Suspense>
  );
}

export default App;