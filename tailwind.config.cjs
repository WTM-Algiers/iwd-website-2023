/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      PTsans: ["PT Sans", "sans-serif"],
    },
    screens: {
      sm: "540px",
      md: "768px",
      lg: "1024px",
      "2xl": "1536px",
    },
    extend: {},
  },
  plugins: [],
};
