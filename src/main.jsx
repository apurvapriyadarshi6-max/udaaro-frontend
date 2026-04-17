/** * =============================================================================
 * UDAARO MASTER BOOTLOADER v5.2.0 (NON-BLOCKING)
 * -----------------------------------------------------------------------------
 * ARCHITECT: Apurva Priyadarshi
 * PROTOCOL: SECURE_IMPERIAL_ALPHA
 * REVISION: EVENT_LOOP_SYNCHRONIZATION
 * =============================================================================
 */

import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";

/**
 * TELEMETRY & SYSTEM LOGGING ENGINE
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
    const memory = window.performance?.memory?.usedJSHeapSize;
    const metrics = {
      memory: memory ? `${(memory / 1048576).toFixed(2)} MB` : "HIDDEN_NODE",
      platform: navigator.platform,
      node: "IMPERIAL_SYNC_2026",
      status: "STABLE",
      design_ver: "5.2_NON_BLOCKING"
    };
    UdaaroTelemetry.log("INFRASTRUCTURE_PULSE_REPORT", metrics);
  }
};

class SovereignErrorBoundary extends React.Component {
  constructor(props) { super(props); this.state = { hasDrift: false }; }
  static getDerivedStateFromError(error) { return { hasDrift: true }; }
  componentDidCatch(error, errorInfo) {
    UdaaroTelemetry.log("CRITICAL_LOGIC_DRIFT_DETECTED", { error: error.toString(), info: errorInfo });
  }
  render() {
    if (this.state.hasDrift) {
      return (
        <div style={{ height: '100vh', backgroundColor: '#0F1419', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: '#D4AF37', fontFamily: 'serif', padding: '40px', textAlign: 'center' }}>
          <h1 style={{ fontSize: '3rem', fontStyle: 'italic', marginBottom: '20px' }}>Logical Handshake Failed.</h1>
          <button onClick={() => window.location.reload()} style={{ padding: '15px 40px', background: '#D4AF37', color: '#0F1419', border: 'none', borderRadius: '2rem', fontWeight: '900', cursor: 'pointer' }}>Re-Sync Grid</button>
        </div>
      );
    }
    return this.props.children;
  }
}

/**
 * PHASED BOOT SEQUENCE
 * Prevents main-thread blocking by deferring render to the next available cycle.
 */
const initiateHandshake = () => {
  const rootContainer = document.getElementById("root");

  if (!rootContainer) {
    UdaaroTelemetry.log("CRITICAL_HANDSHAKE_FAILURE", { reason: "Root node missing" });
    return;
  }

  // REINFORCEMENT: We use a small timeout to clear the browser's execution queue
  setTimeout(() => {
    UdaaroTelemetry.log("INITIATING_BOOT_SEQUENCE", { cycle: "Alpha_Cycle_2026_v5.2" });
    UdaaroTelemetry.reportPulse();

    const root = createRoot(rootContainer);
    root.render(
      <StrictMode>
        <SovereignErrorBoundary>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </SovereignErrorBoundary>
      </StrictMode>
    );

    // Final Sync Signal
    setTimeout(() => {
      UdaaroTelemetry.log("SYSTEM_STATE_SYNCHRONIZED", { 
        ttInteraction: `${performance.now().toFixed(2)}ms`,
        protocol: "SECURE_IMPERIAL_ALPHA"
      });
    }, 100);
  }, 0);
};

// Execute Phased Boot
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initiateHandshake);
} else {
  initiateHandshake();
}