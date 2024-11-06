/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        avenir: ["avenir", "sans-serif"],
        work_sans_sm: ["work-sans"],
      },
    },
  },
  plugins: [],
};
