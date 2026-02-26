import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import ApplyFounder from "./pages/ApplyFounder";
import Investors from "./pages/Investors";
import Mentors from "./pages/Mentors";
import Admin from "./pages/Admin";
import AdminLogin from "./pages/AdminLogin";

import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute"; // ✅ FIXED

function App() {
  return (
    <Routes>

      {/* ================= PUBLIC ROUTES ================= */}

      <Route
        path="/"
        element={
          <>
            <Navbar />
            <Home />
          </>
        }
      />

      <Route
        path="/apply"
        element={
          <>
            <Navbar />
            <ApplyFounder />
          </>
        }
      />

      <Route
        path="/investors"
        element={
          <>
            <Navbar />
            <Investors />
          </>
        }
      />

      <Route
        path="/mentors"
        element={
          <>
            <Navbar />
            <Mentors />
          </>
        }
      />

      {/* ================= ADMIN ROUTES ================= */}

      <Route path="/admin-login" element={<AdminLogin />} />

      <Route
        path="/admin"
        element={
          <ProtectedRoute>
            <Admin />
          </ProtectedRoute>
        }
      />

    </Routes>
  );
}

export default App;