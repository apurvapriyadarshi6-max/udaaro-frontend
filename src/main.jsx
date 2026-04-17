/** * =============================================================================
 * UDAARO MASTER BOOTLOADER v5.1.0 (PROD_READY)
 * -----------------------------------------------------------------------------
 * ARCHITECT: Apurva Priyadarshi
 * PROTOCOL: SECURE_IMPERIAL_ALPHA
 * REVISION: NODE_RECOVERY_RESILIENCE
 * =============================================================================
 */

import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

// Global Stylistic DNA
import "./index.css";

// Core Engine Initialization
import App from "./App";

/**
 * TELEMETRY & SYSTEM LOGGING ENGINE
 * High-fidelity monitoring node for the Venture OS.
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
    // Detect memory and platform telemetry
    const memory = window.performance?.memory?.usedJSHeapSize;
    const metrics = {
      memory: memory ? `${(memory / 1048576).toFixed(2)} MB` : "HIDDEN_NODE",
      platform: navigator.platform,
      node: "IMPERIAL_SYNC_2026",
      status: "STABLE",
      design_ver: "5.0_GOLD_LEAF"
    };
    UdaaroTelemetry.log("INFRASTRUCTURE_PULSE_REPORT", metrics);
  }
};

/**
 * ERROR BOUNDARY: COORDINATE DRIFT PROTECTION
 * Prevents the entire grid from going white if a single component fails logic vetting.
 */
class SovereignErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasDrift: false };
  }

  static getDerivedStateFromError(error) {
    return { hasDrift: true };
  }

  componentDidCatch(error, errorInfo) {
    UdaaroTelemetry.log("CRITICAL_LOGIC_DRIFT_DETECTED", { error: error.toString(), info: errorInfo });
  }

  render() {
    if (this.state.hasDrift) {
      return (
        <div style={{ height: '100vh', backgroundColor: '#0F1419', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: '#D4AF37', fontFamily: 'serif', padding: '40px', textAlign: 'center' }}>
          <h1 style={{ fontSize: '4rem', fontStyle: 'italic', marginBottom: '20px' }}>Logical Handshake Failed.</h1>
          <p style={{ color: '#64748b', fontSize: '1.2rem', marginBottom: '40px' }}>System encountered a coordinate mismatch in the render loop.</p>
          <button 
            onClick={() => window.location.reload()} 
            style={{ padding: '15px 40px', background: '#D4AF37', color: '#0F1419', border: 'none', borderRadius: '2rem', fontWeight: '900', cursor: 'pointer', textTransform: 'uppercase', letterSpacing: '0.4em' }}
          >
            Re-Sync Grid
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

/**
 * NODE VERIFICATION & MOUNT
 * Locates the sovereign root and initiates Concurrent Rendering.
 */
const mountGrid = () => {
  const rootContainer = document.getElementById("root");

  if (!rootContainer) {
    UdaaroTelemetry.log("CRITICAL_HANDSHAKE_FAILURE", { 
      reason: "Root node non-existent in DOM",
      action: "RECOVERY_HALTED"
    });
    return;
  }

  const root = createRoot(rootContainer);

  UdaaroTelemetry.log("INITIATING_BOOT_SEQUENCE", { cycle: "Alpha_Cycle_2026_v5.1" });
  UdaaroTelemetry.reportPulse();

  root.render(
    <StrictMode>
      <SovereignErrorBoundary>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </SovereignErrorBoundary>
    </StrictMode>
  );
};

// Execute Handshake
mountGrid();

/**
 * SYSTEM LOG: SYNC_VERIFICATION
 */
window.addEventListener('load', () => {
  UdaaroTelemetry.log("SYSTEM_STATE_SYNCHRONIZED", { 
    ttInteraction: `${performance.now().toFixed(2)}ms`,
    protocol: "SECURE_IMPERIAL_ALPHA"
  });
});