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
        ink: "#0D2818",
        "ink-mid": "#163D22",
        "ink-light": "#1F5230",
        ember: "#B87333",
        "ember-deep": "#8B5E3C",
        "ember-glow": "#D4875A",
        gold: "#C9A84C",
        trust: "#1A7A4A",
        "trust-bg": "#DFF0E8",
      },
    },
  },
  plugins: [],
};

export default config;
