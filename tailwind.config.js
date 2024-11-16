/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        avenir: ["avenir", "sans-serif"],
        work_sans_sm: ["work-sans"],
      },
      colors: {
        background: "#FFFFF0",
        primary_text: "#333333",
        secondary_text: "#708090",
        link: " #191970",
        title: "#0B0B0B",
        crimson: "#DC143C",
      },
    },
  },
  plugins: [],
};
