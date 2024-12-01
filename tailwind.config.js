/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      colors: {
        primary: "#0E1947",
        secondary: {
          300: "#FF5F31",
          500: "#EE4312",
        },
        "blue-gray": "#647EA0",
        silver: "#E2DEDC",
        black: "#100F1B",
        gray: "#373642",
      },
    },
  },
  plugins: [],
};
