/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "inner-l-r-b":
          "inset 0 -10px 10px -10px rgba(0, 0, 0, 0.2), inset -5px 0 5px -5px rgba(0, 0, 0, 0.1), inset 5px 0 5px -5px rgba(0, 0, 0, 0.1)" // Sombra izquierda y derecha
      }
    }
  },
  plugins: []
};
