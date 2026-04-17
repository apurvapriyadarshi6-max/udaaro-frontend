import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

/** * =============================================================================
 * VITE PRODUCTION ORCHESTRATOR v5.0
 * -----------------------------------------------------------------------------
 * Fixes: Hydration Deadlock & Module Preload Freeze
 * ============================================================================= */

export default defineConfig({
  plugins: [react()],
  build: {
    // 1. NEUTRALIZE PRELOAD: Stops Vercel from trying to load chunks before the Core is ready.
    modulePreload: {
      polyfill: true
    },
    // 2. CHUNK OPTIMIZATION: Separates heavy logic to keep the initial load 'liquid'.
    rollupOptions: {
      output: {
        manualChunks: {
          // Group the heavy hitters into a 'vendor' node
          vendor: ['react', 'react-dom', 'framer-motion', 'react-router-dom'],
        }
      }
    },
    // 3. TARGET SYNC: Ensures the build target matches modern Vercel runtimes.
    target: 'esnext',
    sourcemap: false // Keeps the production bundle clean
  },
  server: {
    // Ensures local development matches production port logic
    port: 5173,
    strictPort: true,
  }
})