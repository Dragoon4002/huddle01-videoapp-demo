import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#004DEC",
          foreground: "#FEFEFF",
        },
        secondary: {
          DEFAULT: "#dae7ff",
          foreground: "#000000",
        },
        destructive: {
          DEFAULT: "#ef4444",
          foreground: "#FEFEFF",
        },
        muted: {
          DEFAULT: "#dae7ff",
          foreground: "#000000",
        },
        accent: {
          DEFAULT: "#004DEC",
          foreground: "#FEFEFF",
        },
      },
    },
  },
};
export default config;