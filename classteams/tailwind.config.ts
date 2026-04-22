import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary
        primary: "#4a4bd7",
        "primary-dim": "#3d3dcb",
        "primary-container": "#babbff",
        "primary-fixed": "#babbff",
        "primary-fixed-dim": "#aaacff",
        "on-primary": "#fbf7ff",
        "on-primary-container": "#221eb5",
        "on-primary-fixed": "#0c0090",
        "on-primary-fixed-variant": "#2d2cbd",
        "inverse-primary": "#8083ff",
        
        // Secondary
        secondary: "#6e3bd8",
        "secondary-dim": "#622bcb",
        "secondary-container": "#e9ddff",
        "secondary-fixed": "#e9ddff",
        "secondary-fixed-dim": "#ddcdff",
        "on-secondary": "#fdf7ff",
        "on-secondary-container": "#6029c9",
        "on-secondary-fixed": "#4d00b7",
        "on-secondary-fixed-variant": "#6a37d4",
        
        // Tertiary
        tertiary: "#006592",
        "tertiary-dim": "#005980",
        "tertiary-container": "#61c2ff",
        "tertiary-fixed": "#61c2ff",
        "tertiary-fixed-dim": "#34b5fa",
        "on-tertiary": "#f5f9ff",
        "on-tertiary-container": "#003b56",
        "on-tertiary-fixed": "#002336",
        "on-tertiary-fixed-variant": "#004463",
        
        // Surface
        surface: "#f7f9fb",
        "surface-dim": "#d3dbdf",
        "surface-bright": "#f7f9fb",
        "surface-container": "#eaeef1",
        "surface-container-low": "#f1f4f6",
        "surface-container-lowest": "#ffffff",
        "surface-container-high": "#e3e9ec",
        "surface-container-highest": "#dde3e7",
        "surface-variant": "#dde3e7",
        "surface-tint": "#4a4bd7",
        
        // On Surface
        "on-surface": "#2d3337",
        "on-surface-variant": "#596063",
        "on-background": "#2d3337",
        
        // Error
        error: "#ac3149",
        "error-dim": "#770326",
        "error-container": "#f76a80",
        "on-error": "#fff7f7",
        "on-error-container": "#68001f",
        
        // Special
        background: "#f7f9fb",
        "inverse-surface": "#0b0f10",
        "inverse-on-surface": "#9a9d9f",
        outline: "#757c7f",
        "outline-variant": "#acb3b7",
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        "2xl": "1rem",
        "3xl": "1.5rem",
        full: "9999px",
      },
      fontFamily: {
        headline: ["var(--font-plus-jakarta)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        label: ["var(--font-inter)", "sans-serif"],
      },
      boxShadow: {
        ambient: "0 20px 40px rgba(45, 51, 55, 0.06)",
        elevated: "0 10px 30px rgba(45, 51, 55, 0.08)",
      },
      backdropBlur: {
        glass: "20px",
      },
    },
  },
  plugins: [],
};

export default config;
