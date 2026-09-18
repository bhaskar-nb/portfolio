import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        base: { 900: "#07070A", 800: "#0B0B10", 700: "#11111A", 600: "#181821", 500: "#24242E", 400: "#343442" },
        ink: { 100: "#F8F7FB", 200: "#E9E7EF", 400: "#A7A3B3", 500: "#858191", 600: "#666271" },
        gold: { DEFAULT: "#8B5CF6", soft: "#8B5CF622" },
        wire: { DEFAULT: "#8B5CF6", soft: "#8B5CF622" },
        rose: { DEFAULT: "#C4B5FD" },
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      backgroundImage: {
        "grid-fine": "linear-gradient(to right, rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.035) 1px, transparent 1px)",
      },
      backgroundSize: { grid: "40px 40px" },
      boxShadow: { panel: "0 20px 60px -20px rgba(0,0,0,0.65)", glow: "0 0 40px -8px rgba(139,92,246,0.35)" },
    },
  },
  plugins: [],
};

export default config;
