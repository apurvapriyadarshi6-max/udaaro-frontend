/** * =============================================================================
 * UDAARO MASTER BOOTLOADER v6.0.0 (SILENT_RESILIENCE)
 * -----------------------------------------------------------------------------
 * ARCHITECT: Apurva Priyadarshi
 * PROTOCOL: SECURE_IMPERIAL_ALPHA
 * =============================================================================
 */

import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";

/**
 * TELEMETRY & SYSTEM LOGGING ENGINE
 * Monitors the grid without intercepting the render loop.
 */
const UdaaroTelemetry = {
  log: (event, metadata = {}) => {
    const timestamp = new Date().toISOString();
    // Use styled console for imperial branding
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
      platform: navigator.userAgentData?.platform || navigator.platform,
      node: "IMPERIAL_SYNC_2026",
      status: "STABLE",
      performance_entry: `${performance.now().toFixed(2)}ms`
    };
    UdaaroTelemetry.log("INFRASTRUCTURE_PULSE_REPORT", metrics);
  }
};

/**
 * PHASED BOOT SEQUENCE
 * Ensures the DOM is fully interactive before React takes over the UI layer.
 */
const initiateHandshake = () => {
  const rootContainer = document.getElementById("root");

  if (!rootContainer) {
    UdaaroTelemetry.log("CRITICAL_HANDSHAKE_FAILURE", { reason: "Root node missing" });
    return;
  }

  // REINFORCEMENT: Small delay to clear the browser's initial execution queue
  // Using a 0ms task push to prioritize micro-tasks first
  setTimeout(() => {
    UdaaroTelemetry.log("INITIATING_BOOT_SEQUENCE", { cycle: "Alpha_Cycle_2026_v6.0" });
    UdaaroTelemetry.reportPulse();

    const root = createRoot(rootContainer);
    
    /**
     * RENDER LOGIC: 
     * System now favors native React handling for higher stability.
     */
    root.render(
      <StrictMode>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </StrictMode>
    );

    // Final Sync Signal - Logged once the initial paint has likely occurred
    requestAnimationFrame(() => {
      setTimeout(() => {
        UdaaroTelemetry.log("SYSTEM_STATE_SYNCHRONIZED", { 
          ttInteraction: `${performance.now().toFixed(2)}ms`,
          protocol: "SECURE_IMPERIAL_ALPHA"
        });
      }, 50);
    });
  }, 0);
};

// Execute Phased Boot based on DOM state
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initiateHandshake);
} else {
  initiateHandshake();
}