/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        marker: ['"Permanent Marker"', "cursive"],
      },
    },
  },
  plugins: [],
};
