const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    boxShadow: {
      base: "0px 0px 100px rgba(0, 0, 0, 0.2)",
    },
    extend: {
      backgroundImage: {
        "hero-shadow": "linear-gradient(330deg, transparent 31%, #0B1D26 109%)",
      },
      colors: {
        bg: "#0B1D26",
        accent: "#FBD784",
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
        serif: ["var(--font-serif)", ...fontFamily.serif],
      },
    },
  },
  plugins: [],
};
