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
          900: "#080B10",
          800: "#0A0E14",
          700: "#10161F",
          600: "#161D29",
          500: "#1E2733",
          400: "#2A3542",
        },
        ink: {
          100: "#F1F5F9",
          200: "#E8EDF3",
          400: "#8592A3",
          600: "#5B6675",
        },
        gold: {
          DEFAULT: "#F2B705",
          soft: "#F2B70522",
        },
        teal: {
          DEFAULT: "#00C2A8",
          soft: "#00C2A822",
        },
        wire: {
          DEFAULT: "#3DA9FC",
          soft: "#3DA9FC22",
        },
        rose: {
          DEFAULT: "#FF6B6B",
        },
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      backgroundImage: {
        "grid-fine":
          "linear-gradient(to right, #1E273340 1px, transparent 1px), linear-gradient(to bottom, #1E273340 1px, transparent 1px)",
        "radial-fade":
          "radial-gradient(circle at 50% 0%, rgba(61,169,252,0.12), transparent 60%)",
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
        panel: "0 1px 0 0 rgba(255,255,255,0.04) inset, 0 20px 60px -20px rgba(0,0,0,0.6)",
        glow: "0 0 40px -8px var(--tw-shadow-color)",
      },
    },
  },
  plugins: [],
};
export default config;
