/** * =============================================================================
 * UDAARO VITE CONFIGURATION - GOLD_BUILD_v6.1.2
 * -----------------------------------------------------------------------------
 * ARCHITECT: Apurva Priyadarshi
 * REVISION: ZERO_DRIFT_PRODUCTION_SYNC
 * ============================================================================= */

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    // 1. NEUTRALIZE PRELOAD: Ensures modern browser polyfills load before the UI paints.
    modulePreload: {
      polyfill: true
    },
    // 2. CHUNK OPTIMIZATION: Unified vendor strategy to prevent circular dependency loops.
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            // Group heavy-duty nodes (React, Framer Motion, Lucide) into one sovereign file.
            return 'vendor_imperial'; 
          }
        },
        // Asset naming protocols for institutional cache-busting.
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]'
      }
    },
    // 3. TARGET SYNC: Aligned with ES2022 for modern institutional browser support.
    target: 'es2022', 
    cssCodeSplit: true,
    sourcemap: false,
    
    // 4. SILENT RESILIENCE: High-grade minification.
    // REQUIRES: npm install -D terser
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Removes console logs in production for maximum privacy.
        drop_debugger: true,
        pure_funcs: ['console.info', 'console.debug', 'console.warn']
      },
      format: {
        comments: false // Removes all architectural comments from the final bundle.
      }
    },
    // Prevent small chunks from cluttering the grid.
    chunkSizeWarningLimit: 1000 
  },
  server: {
    // Local Node Configuration
    port: 5173,
    strictPort: true,
    host: true,
  },
  // Ensure the base path is correct for Vercel/Render deployments.
  base: '/'
})