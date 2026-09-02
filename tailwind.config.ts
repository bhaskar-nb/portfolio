import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: {
          900: "#050505",
          800: "#090A0C",
          700: "#101114",
          600: "#17191D",
          500: "#24272C",
          400: "#363A42",
        },
        ink: {
          100: "#F7F7F5",
          200: "#E9E8E4",
          400: "#A2A1A0",
          600: "#686868",
        },
        gold: {
          DEFAULT: "#FF7A18",
          soft: "#FF7A1822",
        },
        wire: {
          DEFAULT: "#FF7A18",
          soft: "#FF7A1822",
        },
        rose: {
          DEFAULT: "#C9C7C3",
        },
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      backgroundImage: {
        "grid-fine":
          "linear-gradient(to right, #24272C22 1px, transparent 1px), linear-gradient(to bottom, #24272C22 1px, transparent 1px)",
        "radial-fade":
          "radial-gradient(circle at 50% 0%, rgba(255,122,24,0.10), transparent 60%)",
      },
      backgroundSize: {
        grid: "40px 40px",
      },
      keyframes: {
        "ticker-blink": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.3" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        "scan-line": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        blink: "ticker-blink 2s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        scan: "scan-line 3s linear infinite",
        marquee: "marquee 30s linear infinite",
      },
      boxShadow: {
        panel: "0 1px 0 0 rgba(255,255,255,0.04) inset, 0 20px 60px -20px rgba(0,0,0,0.65)",
        glow: "0 0 40px -8px var(--tw-shadow-color)",
      },
    },
  },
  plugins: [],
};
export default config;
