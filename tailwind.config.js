/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // --- 1. IMPERIAL PALETTE ---
        // Utilizing RGB variables for dynamic opacity control in UI components
        primary: {
          DEFAULT: "rgb(var(--royal-slate) / <alpha-value>)", // #0F1419
          foreground: "#FFFFFF",
        },
        imperial: {
          gold: "rgb(var(--imperial-gold) / <alpha-value>)", // #D4AF37
          slate: "#0F1419",
          sandstone: "#FDF9F3",
          marble: "#FFFFFF",
        },
        // Semantic status nodes for the Venture OS Telemetry
        status: {
          active: "#10B981", // Emerald Handshake
          warning: "#F59E0B", // Amber Alert
          critical: "#EF4444", // Ruby Protocol
          sync: "#3B82F6", // Cobalt Logic
        }
      },
      fontFamily: {
        // High-contrast pairing: Institutional Serif + Technical Sans
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'], // For terminal and telemetry data
      },
      borderRadius: {
        // --- 2. OS GEOMETRY ---
        // Specialized squircles for luxury containers
        '3xl': '1.5rem',
        '4xl': '2rem',
        '5xl': '3rem',
        '6xl': '4.5rem',
        'royal': '5rem', // The signature "Udaaro Card" radius
        'terminal': '2.5rem',
      },
      letterSpacing: {
        // Luxury spacing protocols for uppercase labels
        tightest: '-.075em',
        sovereign: '0.4em', 
        imperial: '0.8em',
        telemetry: '0.25em',
      },
      boxShadow: {
        // --- 3. OPTICAL DEPTH ---
        'luxury': '0 35px 70px -15px rgba(15, 20, 25, 0.12)',
        'gold-glow': '0 20px 40px -15px rgba(212, 175, 55, 0.3)',
        '7xl': '0 50px 100px -20px rgba(0, 0, 0, 0.15)',
        'inner-royal': 'inset 0 2px 10px 0 rgba(0, 0, 0, 0.05)',
      },
      animation: {
        // --- 4. OS PHYSICS ---
        'float-slow': 'floatImperial 12s ease-in-out infinite',
        'node-pulse': 'nodePulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'reverse-spin': 'reverse-spin 15s linear infinite',
        'shimmer': 'shimmer 2.5s infinite linear',
        'spin-slow': 'spin 8s linear infinite',
      },
      keyframes: {
        floatImperial: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-30px) rotate(0.5deg)' },
        },
        nodePulse: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '.4', transform: 'scale(0.95)' },
        },
        'reverse-spin': {
          from: { transform: 'rotate(360deg)' },
          to: { transform: 'rotate(0deg)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      },
      backgroundImage: {
        // --- 5. TEXTURE & PATTERNS ---
        'jali-grid': "radial-gradient(circle, #D4AF37 0.8px, transparent 0.8px)",
        'gradient-gold': "linear-gradient(to right, #0F1419, #D4AF37, #0F1419)",
        'glass-shine': "linear-gradient(110deg, transparent, rgba(255,255,255,0.05), transparent)",
      },
      transitionTimingFunction: {
        // Liquid Luxury physics curve
        'imperial': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      transitionDuration: {
        '1500': '1500ms',
        '2000': '2000ms',
      }
    },
  },
  plugins: [
    // Custom plugin to handle institutional scrollbar styling via Tailwind classes
    function({ addUtilities }) {
      const newUtilities = {
        '.custom-scrollbar': {
          '&::-webkit-scrollbar': { width: '4px' },
          '&::-webkit-scrollbar-track': { background: '#FDF9F3' },
          '&::-webkit-scrollbar-thumb': { 
            background: '#D4AF3766', 
            borderRadius: '20px' 
          },
          '&::-webkit-scrollbar-thumb:hover': { background: '#D4AF37' },
        },
        '.text-gradient-gold': {
          'background': 'linear-gradient(to bottom right, #0F1419, #D4AF37, #0F1419)',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
        }
      }
      addUtilities(newUtilities)
    }
  ],
};