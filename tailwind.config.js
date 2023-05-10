/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      heading: ["Literata", ...defaultTheme.fontFamily.serif],
      alpha: ["Quicksand", ...defaultTheme.fontFamily.sans],
    },
    fontSize: {
      xs: ".75rem",
      sm: ".875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "3.75rem",
      "7xl": "4.5rem",
      "8xl": "6rem",
      "9xl": "8rem",
    },
    extend: {
      colors: {
        alpha: "#2F4F4F",
        bravo: "#F2E8CF",
        error: "#B33030",
        success: "#34A853",
        warning: "#B37730",
        gray: colors.neutral,
      },
      maxWidth: {
        "8xl": "1440px",
        "9xl": "1680px",
        "10xl": "1920px",
      },
      screens: {
        xs: "390px",
      },
    },
  },
  plugins: [],
};
