/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderWidth: {
        0.5: "0.5px",
        1.5: "1.5px",
      },
    },
  },
  plugins: [],
};
