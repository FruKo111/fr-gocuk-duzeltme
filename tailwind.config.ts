import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        base: {
          deep: "#0a0a0a",
          dark: "#121212",
          card: "#1a1a1a",
          border: "#2a2a2a",
        },
        accent: {
          DEFAULT: "#c4f82a",
          glow: "rgba(196, 248, 42, 0.15)",
          muted: "rgba(196, 248, 42, 0.08)",
        },
        text: {
          primary: "#f5f5f5",
          secondary: "#a0a0a0",
          muted: "#6b6b6b",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "SF Pro Display",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif",
        ],
        display: [
          "Inter",
          "SF Pro Display",
          "-apple-system",
          "BlinkMacSystemFont",
          "sans-serif",
        ],
      },
      letterSpacing: {
        widest: "0.15em",
        super: "0.25em",
        ultra: "0.35em",
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease-out forwards",
        "slide-up": "slideUp 0.8s ease-out forwards",
        "pulse-glow": "pulseGlow 2s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(196,248,42,0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(196,248,42,0.6)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
