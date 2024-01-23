/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          light: "#3fbaeb",
          DEFAULT: "#0fa9e6",
          dark: "#0c87b8"
        }
      },
      fontFamily: {
        headline: "Poppins, sans-serif"
      }
    }
  },
  variants: {
    backgroundColor: ["responsive", "hover", "focus", "active"]
  },
  plugins: []
};
