import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1.25rem",
      screens: { xl: "1180px" },
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#05294E",
          hover: "#0A3A68",
          50: "#EAF0F6",
        },
        secondary: {
          DEFAULT: "#ED7318",
          hover: "#D85F0A",
          50: "#FEF1E6",
        },
        surface: {
          DEFAULT: "#FFFFFF",
          soft: "#F1F3F2",
        },
        ink: {
          DEFAULT: "#102A43",
          muted: "#667C91",
        },
        line: "#DDE5EA",
        whatsapp: "#25D366",
        success: "#168C4B",
      },
      fontFamily: {
        display: ["Manrope", "system-ui", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"],
      },
      borderRadius: {
        pill: "999px",
        card: "1.25rem",
      },
      boxShadow: {
        card: "0 8px 30px -12px rgba(5, 41, 78, 0.18)",
        floating: "0 10px 25px -8px rgba(5, 41, 78, 0.35)",
      },
      backgroundImage: {
        "road-dashes":
          "repeating-linear-gradient(90deg, #ED7318 0 28px, transparent 28px 44px)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        drive: {
          "0%": { transform: "translateX(-6%)" },
          "100%": { transform: "translateX(106%)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out both",
        drive: "drive 14s linear infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
