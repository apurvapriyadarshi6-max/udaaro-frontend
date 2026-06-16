/**
 * =============================================================================
 * UDAARO MASTER BOOTLOADER v6.0.1 (PATCHED_RESILIENCE)
 * -----------------------------------------------------------------------------
 * ARCHITECT: Apurva Priyadarshi
 * PROTOCOL: SECURE_IMPERIAL_ALPHA
 * FIX: Extracted redundant router wrapping to fix deep execution loops
 * =============================================================================
 */

import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";

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
    // Structural fallback check for userAgentData to prevent crashes on legacy Safari nodes
    const platformStr = typeof navigator !== 'undefined' && navigator.userAgentData 
      ? navigator.userAgentData.platform 
      : (navigator?.platform || "UNKNOWN_PLATFORM");

    const metrics = {
      platform: platformStr,
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

  UdaaroTelemetry.log("INITIATING_BOOT_SEQUENCE", { cycle: "Alpha_Cycle_2026_v6.1" });
  UdaaroTelemetry.reportPulse();

  const root = createRoot(rootContainer);
  
  /**
   * RENDER LOGIC: 
   * Executed directly on current layout cycle to prevent FOUC (Flash of Unstyled Content).
   * Outer BrowserRouter removed here; navigation engine lifted cleanly into App component.
   */
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );

  // Final Sync Signal - Fired accurately matching the browser frame paint timeline
  requestAnimationFrame(() => {
    UdaaroTelemetry.log("SYSTEM_STATE_SYNCHRONIZED", { 
      ttInteraction: `${performance.now().toFixed(2)}ms`,
      protocol: "SECURE_IMPERIAL_ALPHA"
    });
  });
};

// Execute Phased Boot safely depending on current readyState
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initiateHandshake);
} else {
  initiateHandshake();
}