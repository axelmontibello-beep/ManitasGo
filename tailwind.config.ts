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
        // Hogarista — teal/celeste
        hogarista: {
          DEFAULT: "#1D9E75",
          50: "#E8F7F2",
          100: "#C5EBE0",
          200: "#8DD6BF",
          300: "#55C29F",
          400: "#2AAE85",
          500: "#1D9E75",
          600: "#178060",
          700: "#11624A",
          800: "#0B4433",
          900: "#05261D",
        },
        // Manitas — naranja
        manitas: {
          DEFAULT: "#F97316",
          50: "#FFF4ED",
          100: "#FFE4CC",
          500: "#F97316",
          600: "#EA6C0A",
          700: "#C45508",
        },
        // Onboarding / login — fondo oscuro + navy
        dark: {
          bg: "#1C1C2E",
          card: "#252538",
          navy: "#1A237E",
          "navy-light": "#283593",
        },
        // Estados de tarea
        estado: {
          pendiente: "#F59E0B",
          progreso: "#1D9E75",
          completada: "#10B981",
          cancelada: "#6B7280",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
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
