/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Epilogue", "sans-serif"],
      },
      colors: {
        almostwhite: "hsl(var(--white) / <alpha-value>)",
        mediumgray: "hsl(var(--gray) / <alpha-value>)",
        almostblack: "hsl(var(--black) / <alpha-value>)",
        white: "#ffffff",
        shade: "rgba(0,0,0,0.5)",
      },
    },
  },
  plugins: [],
};
