/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["**/*.html", "**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx"],
  theme: {},
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/colors/themes")["[data-theme=light]"],
          primary: "#1d4ed8",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
