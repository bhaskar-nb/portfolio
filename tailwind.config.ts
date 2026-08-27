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
          900: "#05080B",
          800: "#080C11",
          700: "#0D131A",
          600: "#131B24",
          500: "#1B2631",
          400: "#2A3744",
        },
        ink: {
          100: "#F3F6F8",
          200: "#E5EBEF",
          400: "#8A98A6",
          600: "#606D79",
        },
        gold: {
          DEFAULT: "#19C3B1",
          soft: "#19C3B122",
        },
        teal: {
          DEFAULT: "#19C3B1",
          soft: "#19C3B122",
        },
        wire: {
          DEFAULT: "#19C3B1",
          soft: "#19C3B122",
        },
        rose: {
          DEFAULT: "#A7B1BC",
        },
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      backgroundImage: {
        "grid-fine":
          "linear-gradient(to right, #1B263122 1px, transparent 1px), linear-gradient(to bottom, #1B263122 1px, transparent 1px)",
        "radial-fade":
          "radial-gradient(circle at 50% 0%, rgba(25,195,177,0.08), transparent 60%)",
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
