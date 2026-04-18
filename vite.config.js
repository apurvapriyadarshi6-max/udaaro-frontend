import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    modulePreload: {
      polyfill: true
    },
    rollupOptions: {
      output: {
        // Corrected Chunk Logic: Unified Vendor to prevent circular loops
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            // Group all heavy dependencies into one institutional vendor file
            return 'vendor_imperial'; 
          }
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]'
      }
    },
    target: 'es2022', 
    cssCodeSplit: true,
    sourcemap: false,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    }
  },
  server: {
    port: 5173,
    strictPort: true,
    host: true,
  }
})