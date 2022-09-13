/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      cursor: {
        mincursor: "url(kamera.svg) 25 25, pointer",
        mincurserclik: "url(kamera_blitz.svg) 25 25, pointer",
      },
      colors: {
        brun: "#3F342D",
        beige: "#E6E3D7",
        gul: "#F9B34F",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
