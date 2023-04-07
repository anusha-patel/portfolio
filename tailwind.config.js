/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily:{
      signature:['Great Vibes'],
    }

  },
  plugins: [
    function({ addUtilities }) {
      const newUtils = {
        ".display-none": {
          display: "none",
        },
      };
      addUtilities(newUtils);
    },

    function({ addUtilities }) {
      const newMore= {
        ".display-block": {
          display: "block",
        },
      };
      addUtilities(newMore);
    },
  ],
}
