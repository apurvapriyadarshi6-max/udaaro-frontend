import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

/**
 * GLOBAL STYLES
 * Injects the Udaaro visual DNA: Inter typography, 
 * glassmorphism utilities, and high-fidelity scrollbars.
 */
import "./index.css";

/**
 * ROOT INITIALIZATION
 * Architected for React 18+ Concurrent Rendering.
 * This ensures that complex data visualizations in the Admin Syndicate
 * do not block the main UI thread, maintaining a luxury feel.
 */
const rootElement = document.getElementById("root");

if (!rootElement) {
  // Critical Failure Protocol
  throw new Error("Target root container 'root' missing from DOM.");
}

const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* Udaaro Infrastructure Initialization
          Architected by Apurva Priyadarshi
      */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);