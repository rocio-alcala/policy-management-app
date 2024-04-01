/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "inner-l-r-b":
          "inset 0 -10px 10px -10px rgba(0, 0, 0, 0.2), inset -5px 0 5px -5px rgba(0, 0, 0, 0.1), inset 5px 0 5px -5px rgba(0, 0, 0, 0.1)", // Sombra izquierda y derecha
      "button": "inset 0 -3px 0px 0px rgba(0, 0, 0, 0.2)",
      "card": "0 4px 8px 0px rgba(0, 0, 0, 0.2)"

        },
      fontFamily: {
        "source-sans-pro": ["Source Sans Pro"],
        "publico-headline": ["Publico Headline"]
      },
      colors: {
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
        "grey1": "#FAFAFA",
        "grey2": "#F5F5F5",
        "grey3-disable": "#E5E5E5",
        "grey5-text-secundary": "#999999",
        "placeholder":"#757575",
        "divider": "#F0F0F0",
        "border-default": "#CCCCCC",
        "background": "#EDF0F7"
      }
    }
  },
  plugins: []
};
