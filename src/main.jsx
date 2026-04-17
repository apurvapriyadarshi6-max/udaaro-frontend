import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

/** * =============================================================================
 * MASTER INFRASTRUCTURE INITIALIZATION
 * Architected by: Apurva Priyadarshi
 * Protocol: Imperial-Sovereign-Sync v4.0.0
 * Regional Node: India_Vanguard_01 (Imperial Hub)
 * =============================================================================
 */

// Global Stylistic DNA
// Injects the imperial design system: Sandstone, Royal Slate, and Gold Leaf.
import "./index.css";

// Core Engine Initialization
import App from "./App";

/**
 * TELEMETRY & SYSTEM LOGGING ENGINE
 * Custom industrial logger to track infrastructure health in production.
 * This simulates a high-fidelity monitoring node for the Venture OS.
 */
const UdaaroTelemetry = {
  log: (event, metadata = {}) => {
    const timestamp = new Date().toISOString();
    console.log(
      `%c[UDAARO_CORE] %c${timestamp} %c${event}`,
      "color: #D4AF37; font-weight: 900; background: #0F1419; padding: 2px 5px; border-radius: 4px;",
      "color: #64748b;",
      "color: #0F1419; font-weight: bold;",
      metadata
    );
  },
  reportPulse: () => {
    const metrics = {
      memory: window.performance?.memory?.usedJSHeapSize 
        ? `${(window.performance.memory.usedJSHeapSize / 1048576).toFixed(2)} MB` 
        : "N/A",
      platform: navigator.platform,
      node: "IMPERIAL_SYNC_2026",
      status: "STABLE",
      design_ver: "4.0_GOLD_LEAF"
    };
    UdaaroTelemetry.log("INFRASTRUCTURE_PULSE_REPORT", metrics);
  }
};

/**
 * NODE VERIFICATION PROTOCOL
 * Locates the sovereign root container in the DOM layer.
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
 * Leveraging React 18+ Fiber architecture for a "Liquid Luxury" feel.
 * Prioritizes high-signal interactions (Navigation) over heavy assets.
 */
const root = createRoot(rootContainer);

// Initialize System Telemetry Pulse
UdaaroTelemetry.log("INITIATING_BOOT_SEQUENCE", { cycle: "Alpha_Cycle_2026" });
UdaaroTelemetry.reportPulse();

root.render(
  <StrictMode>
    {/* SOVEREIGN COORDINATE SYSTEM 
        The BrowserRouter acts as the global GPS, mapping routes 
        between the Vanguard, Syndicate, and Advisory spheres.
    */}
    <BrowserRouter>
      {/* VIRTUAL OPERATING SYSTEM 
          Architected by: Apurva Priyadarshi
          Environment: Alpha Cycle 2026 (Premium Node)
          Theme: Neo-Heritage Imperialism
      */}
      <App />
    </BrowserRouter>
  </StrictMode>
);

/**
 * SYSTEM LOG: BOOT_SEQUENCE_COMPLETE
 * Final Handshake Signal to verify UI/UX synchronization.
 */
window.addEventListener('load', () => {
  UdaaroTelemetry.log("SYSTEM_STATE_SYNCHRONIZED", { 
    timeToInteraction: `${performance.now().toFixed(2)}ms`,
    protocol: "SECURE_IMPERIAL_ALPHA"
  });
});