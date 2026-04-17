/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Imperial Luxury Palette Mapping
        primary: {
          DEFAULT: "rgb(var(--royal-slate) / <alpha-value>)",
          foreground: "#FFFFFF",
        },
        imperial: {
          gold: "rgb(var(--imperial-gold) / <alpha-value>)", // #D4AF37
          slate: "#0F1419",
          sandstone: "#FDF9F3",
        },
        slate: {
          950: "#0F1419", // Deep Institutional Black
        },
      },
      fontFamily: {
        // Playfair for Royal Headings, Inter for OS UI
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      borderRadius: {
        // "Royal Squircle" geometry for high-end containers
        '3xl': '1.5rem',
        '4xl': '2rem',
        '5xl': '3rem',
        '6xl': '4.5rem',
        'royal': '5rem',
      },
      letterSpacing: {
        // Luxury spacing protocols
        tightest: '-.075em',
        sovereign: '0.5em', // For uppercase tracking-widest labels
        imperial: '0.8em',
      },
      boxShadow: {
        // Soft, deep, elegant shadows for glassmorphism
        'luxury': '0 35px 70px -15px rgba(15, 20, 25, 0.12)',
        'gold-glow': '0 20px 40px -15px rgba(212, 175, 55, 0.3)',
        '7xl': '0 50px 100px -20px rgba(0, 0, 0, 0.15)',
      },
      animation: {
        // OS Logic Animations
        'float-slow': 'floatImperial 10s ease-in-out infinite',
        'node-pulse': 'nodePulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'reverse-spin': 'reverse-spin 12s linear infinite',
      },
      keyframes: {
        'reverse-spin': {
          from: { transform: 'rotate(360deg)' },
          to: { transform: 'rotate(0deg)' },
        }
      },
      backgroundImage: {
        // The Jali Pattern utility
        'jali-grid': "radial-gradient(circle, #D4AF37 0.8px, transparent 0.8px)",
      }
    },
  },
  plugins: [],
};