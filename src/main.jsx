import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

/** * =============================================================================
 * MASTER INFRASTRUCTURE INITIALIZATION
 * Architected by Apurva Priyadarshi
 * Protocol: Alpha-Sovereign-Sync v2.8.4
 * =============================================================================
 */

// Global Stylistic DNA
// Injects the design tokens: Inter typography, 
// glassmorphism utilities, and industrial scrollbars.
import "./index.css";

// Core Engine Initialization
import App from "./App";

/**
 * NODE VERIFICATION PROTOCOL
 * Locates the sovereign root container in the DOM layer.
 * If null, the system enters an Immediate Failure state to 
 * prevent partial rendering or unhandled identity leaks.
 */
const rootContainer = document.getElementById("root");

if (!rootContainer) {
  // Protocol Critical Error
  throw new Error("Handshake Failed: Target root container 'root' is non-existent in the DOM.");
}

/**
 * CONCURRENT RENDERING ENGINE
 * Leveraging React 18+ Fiber architecture.
 * This allows the Udaaro UI to prioritize "High Signal" interactions
 * (like navigation and form input) over "Low Signal" heavy assets 
 * (like syndicate analytical charts), maintaining the luxury UX feel.
 */
const root = createRoot(rootContainer);

root.render(
  <StrictMode>
    {/* SOVEREIGN COORDINATE SYSTEM 
        The BrowserRouter acts as the global GPS, mapping routes 
        between the Vanguard, Syndicate, and Advisory spheres.
    */}
    <BrowserRouter>
      {/* VIRTUAL OPERATING SYSTEM 
          Architected by Apurva Priyadarshi
          Environment: Alpha Cycle 2026
      */}
      <App />
    </BrowserRouter>
  </StrictMode>
);

/**
 * SYSTEM LOG: BOOT_SEQUENCE_COMPLETE
 * Node Identity: Udaaro_Global_Grid_01
 * Performance Metric: High-Fidelity Handshake
 */