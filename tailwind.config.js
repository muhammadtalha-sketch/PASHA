/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#10182B",
          soft: "#1B2440",
          line: "#2B3557",
        },
        paper: {
          DEFAULT: "#F5F3ED",
          alt: "#EAE5D6",
        },
        brass: {
          DEFAULT: "#A9803D",
          light: "#C7A363",
          dark: "#7C5E2C",
        },
        signal: {
          DEFAULT: "#2447E0",
          light: "#5170F2",
        },
        lime: {
          DEFAULT: "#D7F238",
          dark: "#B9D420",
        },
      },
      fontFamily: {
        display: ["'Fraunces'", "serif"],
        sans: ["'Inter'", "system-ui", "sans-serif"],
      },
      maxWidth: {
        wrap: "1240px",
      },
      letterSpacing: {
        tightest: "-0.04em",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 28s linear infinite",
      },
    },
  },
  plugins: [],
};
