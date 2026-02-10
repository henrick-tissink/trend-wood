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
        // Typography Command — bolder, more confident
        "hero": ["clamp(48px, 8vw, 96px)", {
          lineHeight: "1.05",
          letterSpacing: "-0.02em",
        }],
        "h1": ["clamp(36px, 5vw, 64px)", {
          lineHeight: "1.1",
          letterSpacing: "-0.02em",
        }],
        "h2": ["clamp(28px, 4vw, 48px)", {
          lineHeight: "1.15",
          letterSpacing: "-0.015em",
        }],
        "h3": ["clamp(22px, 2.5vw, 32px)", {
          lineHeight: "1.2",
          letterSpacing: "-0.01em",
        }],
        "h4": ["clamp(18px, 2vw, 24px)", {
          lineHeight: "1.3",
        }],
        "body-lg": ["19px", { lineHeight: "1.7" }],
        "body": ["17px", { lineHeight: "1.7" }],
        "small": ["14px", { lineHeight: "1.5" }],
        // Quote styling
        "quote": ["clamp(24px, 3.5vw, 40px)", {
          lineHeight: "1.3",
          letterSpacing: "-0.01em",
        }],
      },
      spacing: {
        // Generous spacing system
        "18": "4.5rem",   // 72px
        "22": "5.5rem",   // 88px
        "26": "6.5rem",   // 104px
        "30": "7.5rem",   // 120px
        "36": "9rem",     // 144px
        "42": "10.5rem",  // 168px
        "48": "12rem",    // 192px
        // Section spacing (generous)
        "section-sm": "6rem",    // 96px
        "section": "8rem",       // 128px
        "section-lg": "10rem",   // 160px
        "section-xl": "12rem",   // 192px
      },
      maxWidth: {
        "content": "1200px",
        "prose": "65ch",
      },
      transitionTimingFunction: {
        // Unified easing — smooth deceleration
        "smooth": "cubic-bezier(0.16, 1, 0.3, 1)",
        "smooth-out": "cubic-bezier(0.33, 1, 0.68, 1)",
      },
      transitionDuration: {
        "micro": "200ms",
        "fast": "400ms",
        "medium": "600ms",
        "slow": "800ms",
        "slower": "1200ms",
      },
      animation: {
        // Ken Burns effect for hero
        "ken-burns": "ken-burns 20s ease-in-out infinite alternate",
        // Gentle pulse for scroll indicator
        "pulse-slow": "pulse-slow 2s ease-in-out infinite",
      },
      keyframes: {
        "ken-burns": {
          "0%": {
            transform: "scale(1) translate(0, 0)",
          },
          "100%": {
            transform: "scale(1.1) translate(-2%, -1%)",
          },
        },
        "pulse-slow": {
          "0%, 100%": {
            opacity: "0.4",
            transform: "translateY(0)",
          },
          "50%": {
            opacity: "0.7",
            transform: "translateY(4px)",
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;
