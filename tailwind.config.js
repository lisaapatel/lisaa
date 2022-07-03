const defaultTheme = require("tailwindcss/defaultTheme");
const { join } = require("path");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,tsx,jsx}",
    "./components/**/*.{js,ts,tsx,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Fira Code", ...defaultTheme.fontFamily.sans],
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "2rem",
      },
    },
  },
  plugins: [],
};
