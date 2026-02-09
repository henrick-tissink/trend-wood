import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Foundation
        cream: "#FDFBF7",
        charcoal: "#1C1C1C",
        stone: "#6B6B6B",
        // Accent
        forest: "#2D4739",
        // Action
        moss: "#4A6741",
        // Functional
        border: "#E8E4DF",
        hover: "#F5F3EE",
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "serif"],
        body: ["var(--font-source-sans)", "sans-serif"],
      },
      fontSize: {
        // Custom scale
        "hero": ["clamp(40px, 6vw, 72px)", { lineHeight: "1.1" }],
        "h1": ["clamp(32px, 4vw, 48px)", { lineHeight: "1.2" }],
        "h2": ["clamp(24px, 3vw, 36px)", { lineHeight: "1.2" }],
        "h3": ["clamp(20px, 2.5vw, 28px)", { lineHeight: "1.2" }],
        "body-lg": ["19px", { lineHeight: "1.7" }],
        "body": ["17px", { lineHeight: "1.7" }],
        "small": ["14px", { lineHeight: "1.5" }],
      },
      spacing: {
        // Custom spacing scale
        "18": "4.5rem",
        "22": "5.5rem",
        "30": "7.5rem",
      },
      maxWidth: {
        "content": "1200px",
      },
      transitionTimingFunction: {
        "smooth": "cubic-bezier(0.33, 1, 0.68, 1)",
      },
      transitionDuration: {
        "fast": "150ms",
        "medium": "300ms",
        "slow": "500ms",
      },
    },
  },
  plugins: [],
};

export default config;
