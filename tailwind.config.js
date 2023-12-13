/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      currrent: "currentColor",
      green: {
        bg: "#CAFF33",
        lightbg: "#22251B",
      },
      gray: {
        text_color: "#b3b3b3",
        gray_bg: "#191919",
        border_gray: "#262626",
        grey_title: "#4c4c4d",
      },
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
