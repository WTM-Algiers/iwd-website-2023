/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      PTsans: ["PT Sans", "sans-serif"],
    },
    colors: {
      "iwd-gray": "#231F1F",
      "iwd-dark": "#000000",
      "iwd-white": "#ffffff",
      "iwd-pink": "#F2BFA0",
      "iwd-blue": "#79A0EF",
      "iwd-blue-second": "#498AF2",
      "iwd-green": "#26efb4",
      "iwd-purple": "#8653ed",
      transparent: "transparent",
    },
    screens: {
      sm: "540px",
      sxm: "680px",
      md: "768px",
      lxm: "1060px",
      lg: "1024px",
      "2xl": "1536px",
    },
    extend: {},
  },
  plugins: [],
};
