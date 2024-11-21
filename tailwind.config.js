/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)", // Dynamic background using CSS variables
        foreground: "var(--foreground)", // Dynamic foreground using CSS variables
        "green-100": "#d1fae5", // Custom green
        "blue-300": "#93c5fd", // Custom blue
        white: "#ffffff", // Simplified white
        "near-black": "#222", // Dark color
      },
      fontFamily: {
        'fredoka-semi': ['Fredoka', 'sans-serif'],
        'fredoka-bold': ['Fredoka', 'sans-serif'],
        'andika-bold': ['Andika', 'sans-serif'],
        'andika-regular': ['Andika', 'sans-serif'],
      },
      animation: {
        border: "border-anim 4s linear infinite", // Placeholder for custom border animation
        round: "anim-round 0.8s linear infinite", // Animation for Ragdoll
      },
      keyframes: {
        "anim-round": {
          "0%, 100%": {
            transform: "translate3d(var(--_reach), 0px, 0px)",
          },
          "25%": {
            transform: "translate3d(0px, var(--_reach), 0px)",
          },
          "50%": {
            transform: "translate3d(var(--reach), 0px, 0px)",
          },
          "75%": {
            transform: "translate3d(0px, var(--reach), 0px)",
          },
        },
      },
      spacing: {
        "inset-1": "0.25rem", // Custom spacing utility
      },
      screens: {
        sm: "640px", // Small screen breakpoint
      },
      fontSize: {
        "7xl": ["4.5rem", { lineHeight: "1" }], // Large font size
        "8xl": ["6rem", { lineHeight: "1" }], // Extra-large font size
      },
    },
  },
  plugins: [
    plugin(function ({ addBase }) {
      addBase({
        ":root": {
          "--background": "#222", // Default background
          "--foreground": "#5f5f5f", // Default foreground
        },
        "@media (prefers-color-scheme: dark)": {
          ":root": {
            "--background": "#222", // Dark mode background
            "--foreground": "#ededed", // Dark mode foreground
          },
        },
        body: {
          color: "var(--foreground)",
          backgroundColor: "var(--background)",
          fontFamily: "Arial, Helvetica, sans-serif",
        },
      });
    }),
  ],
};
