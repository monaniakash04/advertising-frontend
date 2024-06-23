/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: { min: "174px", max: "320px" },
        smb: { min: "322px", max: "384px" },
      },
    },
  },
  plugins: [],
};
