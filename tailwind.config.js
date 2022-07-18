const colors = require("tailwindcss/colors");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  purge: ["./pages/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      current: "currentColor",
      primary: "#FFDEB4",
      black: "#010E06",
      blackLight: "#121A15",
      white: colors.white,
      light: "white",
      lightDark: "#F4F5F5",
      slate: colors.slate,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: "#0ff",
      yellow: colors.yellow,
      grey: colors.gray,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
