/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Advanced dynamic color mapping with opacity support
        primary: {
          DEFAULT: "rgb(var(--brand-blue) / <alpha-value>)",
          foreground: "#ffffff",
          50:  "#eff6ff",
          100: "#dbeafe",
          600: "#2563eb", // Base brand blue
          700: "#1d4ed8",
        },
        slate: {
          950: "#020617", // Deep institutional black
        },
        brand: {
          dark: "#0f172a", // Slate-900 for luxury text
          light: "#f8fafc", // Slate-50 for secondary backgrounds
          accent: "#38bdf8", // Cyan-400 for highlights
        }
      },
      fontFamily: {
        // Inter is the global standard for high-end SaaS
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        // The "Squircle" geometry favored by Apple and premium startups
        '3xl': '1.5rem',
        '4xl': '2rem',
        '5xl': '3rem',
        '6xl': '4rem',
      },
      letterSpacing: {
        // Luxury brands use tighter spacing for headings and wider for labels
        tightest: '-.075em',
        sovereign: '0.3em',
      },
      boxShadow: {
        // Custom "Sovereign" shadows - soft, deep, and elegant
        'luxury': '0 25px 50px -12px rgba(0, 0, 0, 0.08)',
        'blue-glow': '0 20px 40px -15px rgba(37, 99, 235, 0.3)',
      },
      animation: {
        // Mapping index.css keyframes to Tailwind utilities
        'shake': 'head-shake 0.5s cubic-bezier(.36,.07,.19,.97) both',
        'fade-in-up': 'fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      backgroundImage: {
        // The institutional grid background utility
        'grid-pattern': "radial-gradient(circle, #e2e8f0 1px, transparent 1px)",
      }
    },
  },
  plugins: [
    // You can add tailwind-scrollbar or typography plugins here if needed
  ],
};