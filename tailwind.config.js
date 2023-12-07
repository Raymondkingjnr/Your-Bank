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
        text_color: "#98989A",
        gray_bg: "#191919",
      },
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
