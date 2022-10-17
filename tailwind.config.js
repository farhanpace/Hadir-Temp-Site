/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        hadirGold: "#A27F51",
        hadirBlack: "#1E293B",
        hadirLightGray: "#99999a26",
        hadirDarkGray: "#242424",
      },
    },
  },
  plugins: [],
}
