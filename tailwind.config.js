/** @type {import('tailwindcss').Config} */
module.exports = {
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
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // AXA predeterminate
        "axa-blue": "#00008F",
        "text-primary": "#343C3D",
        "deep-blue": "#2D3648",
        "tertiary-default": "#00008F",
        success: "#1CC54E",
        "button-primary": "#00008F",
        "button-secondary": "#D24723",
        "text-button-primary": "#FFFFFF",
        "inner-shadow-button-primary": "#00006D",
        "inner-shadow-button-secondary": "#B03C1D",
        "axa-sienna": "#F07662",
        "grey8-dark-text": "#333333",
        grey6: "#7F7F7F",
        grey1: "#FAFAFA",
        grey2: "#F5F5F5",
        "grey3-disable": "#E5E5E5",
        "grey5-text-secondary": "#999999",
        placeholder: "#757575",
        divider: "#F0F0F0",
        "border-default": "#CCCCCC",
        "background-axa": "#EDF0F7",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      // AXA predeterminate
      boxShadow: {
        "inner-l-r-b":
          "inset 0 -10px 10px -10px rgba(0, 0, 0, 0.2), inset -5px 0 5px -5px rgba(0, 0, 0, 0.1), inset 5px 0 5px -5px rgba(0, 0, 0, 0.1)", // Sombra izquierda y derecha
        button: "inset 0 -3px 0px 0px rgba(0,0,0,0.2)",
      },
      fontFamily: {
        "source-sans-pro": ["Source Sans Pro"],
        "publico-headline": ["Publico Headline"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
