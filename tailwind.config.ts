import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Hogarista — teal (Design System tokens)
        primary: {
          50:  "#E6F9F4",
          100: "#C9F0E1",
          200: "#8FE0C3",
          500: "#13C296",
          600: "#0FA37D",
          700: "#0B7A5E",
        },
        // Manitas — naranja (Design System tokens)
        secondary: {
          50:  "#FFF1E8",
          100: "#FFD7C0",
          400: "#F38232",
          500: "#FF5C04",
          600: "#E04E00",
          700: "#BF4200",
        },
        // Status
        success: {
          50:  "#DAF8E6",
          500: "#22AD5C",
          600: "#1A8E48",
        },
        warning: {
          50:  "#FFFBEB",
          500: "#FBBF24",
          600: "#D97706",
          700: "#9D5425",
        },
        danger: {
          50:  "#FEF3F3",
          100: "#FEEBEB",
          400: "#F56060",
          500: "#F23030",
          700: "#E10E0E",
        },
        info: {
          50:  "#E9F9FF",
          200: "#77D1F3",
          500: "#01A9DB",
          700: "#0B76B7",
        },
        // Surfaces & text (Design System tokens)
        surface: {
          base:    "#FFFFFF",
          subtle:  "#FAFAFA",
          muted:   "#F3F4F6",
          alt:     "#F2F2F2",
          dark:    "#292929",
        },
        border: {
          DEFAULT: "#DEE2E6",
          soft:    "#DFE4EA",
          strong:  "#373737",
          card:    "#E5E8EB",
        },
        text: {
          strong:   "#000000",
          DEFAULT:  "#373737",
          muted:    "#7B7B7B",
          subtle:   "#9CA3AF",
          inverse:  "#FFFFFF",
          disabled: "#BCBCBC",
        },
        // Onboarding / login — fondo oscuro + navy
        dark: {
          bg:         "#1C1C2E",
          card:       "#252538",
          navy:       "#1A237E",
          "navy-light":"#283593",
        },
      },
      fontFamily: {
        sans:    ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        display: ["var(--font-quicksand)", "Quicksand", "system-ui", "sans-serif"],
        mono:    ["JetBrains Mono", "ui-monospace", "monospace"],
      },
      fontSize: {
        "2xs": "10px",
        xs:    "11px",
        sm:    "12px",
        md:    "14px",
        base:  "16px",
        lg:    "18px",
        xl:    "20px",
        "2xl": "26px",
        "3xl": "32px",
        "4xl": "48px",
      },
      borderRadius: {
        xs:   "4px",
        sm:   "6px",
        md:   "8px",
        lg:   "12px",
        xl:   "16px",
        "2xl":"20px",
        "3xl":"24px",
        pill: "999px",
      },
      boxShadow: {
        xs:   "0 1px 2px rgba(0,0,0,0.05)",
        sm:   "0 1px 3px rgba(166,175,195,0.40)",
        md:   "0 4px 12px rgba(0,0,0,0.08)",
        lg:   "0 8px 24px rgba(36,16,167,0.15)",
        card: "0 1px 3px rgba(0,0,0,0.10)",
      },
      screens: {
        xs: "390px",
      },
      maxWidth: {
        mobile: "390px",
      },
    },
  },
  plugins: [],
};

export default config;
