import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

/** * =============================================================================
 * MASTER INFRASTRUCTURE INITIALIZATION
 * Architected by Apurva Priyadarshi
 * Protocol: Alpha-Sovereign-Sync v2.9.4 Stable
 * Regional Node: India_Vanguard_01
 * =============================================================================
 */

// Global Stylistic DNA
// Injects the sovereign design system: Inter typography, 
// localized Indian spacing logic, and glassmorphism utilities.
import "./index.css";

// Core Engine Initialization
import App from "./App";

/**
 * TELEMETRY & SYSTEM LOGGING ENGINE
 * Custom industrial logger to track infrastructure health in production.
 * This simulates a high-fidelity monitoring node.
 */
const UdaaroTelemetry = {
  log: (event, metadata = {}) => {
    const timestamp = new Date().toISOString();
    console.log(
      `%c[UDAARO_CORE] %c${timestamp} %c${event}`,
      "color: #2563eb; font-weight: 900;",
      "color: #64748b;",
      "color: #020617; font-weight: bold;",
      metadata
    );
  },
  reportPulse: () => {
    const metrics = {
      memory: window.performance?.memory?.usedJSHeapSize || "N/A",
      platform: navigator.platform,
      node: "ALPHA_SYNC_2026",
      status: "STABLE"
    };
    UdaaroTelemetry.log("INFRASTRUCTURE_PULSE_REPORT", metrics);
  }
};

/**
 * NODE VERIFICATION PROTOCOL
 * Locates the sovereign root container in the DOM layer.
 * If null, the system enters an Immediate Failure state to 
 * prevent partial rendering or unhandled identity leaks.
 */
const rootContainer = document.getElementById("root");

if (!rootContainer) {
  UdaaroTelemetry.log("CRITICAL_HANDSHAKE_FAILURE", { 
    reason: "Target root container 'root' missing",
    action: "SYSTEM_SHUTDOWN"
  });
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

// Initialize System Telemetry Pulse
UdaaroTelemetry.log("INITIATING_BOOT_SEQUENCE", { cycle: "Alpha_2026" });
UdaaroTelemetry.reportPulse();

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
          Localization: India Node (High Fidelity)
      */}
      <App />
    </BrowserRouter>
  </StrictMode>
);

/**
 * SYSTEM LOG: BOOT_SEQUENCE_COMPLETE
 * Node Identity: Udaaro_Global_Grid_01
 * Performance Metric: High-Fidelity Handshake
 * Sync Status: 100%
 */

// Final System Handshake Signal
window.addEventListener('load', () => {
  UdaaroTelemetry.log("SYSTEM_STATE_SYNCHRONIZED", { 
    timeToInteraction: `${performance.now().toFixed(2)}ms`,
    protocol: "SECURE_ALPHA"
  });
});