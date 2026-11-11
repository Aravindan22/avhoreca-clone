import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["Playfair Display", "serif"],
        sans: ["DM Sans", "sans-serif"],
      },
      colors: {
        ink: "#111827",
        "ink-mid": "#1F2937",
        "ink-light": "#374151",
        ember: "#C41E24",
        "ember-deep": "#9E1217",
        "ember-glow": "#E53935",
        gold: "#D97706",
        trust: "#15803D",
        "trust-bg": "#DCFCE7",
      },
    },
  },
  plugins: [],
};

export default config;
