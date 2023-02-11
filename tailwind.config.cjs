/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      PTsans: ["PT Sans", "sans-serif"],
    },
    colors: {
      "iwd-gray": '#231F1F',
      "iwd-dark": '#000000',
      "iwd-white": "#ffffff",
      "iwd-pink": "#F2BFA0",
      "iwd-blue": "#79A0EF",
      "iwd-purple": "#8653ed"

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
