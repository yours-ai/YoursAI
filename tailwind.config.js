/* eslint-disable */
import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        menuBackground: "#E0E0E0",
        accentBlue: "#007AFF",
        blankAlert: "rgba(0,0,0,0.015)",
      },
      fontSize: {
        "11p": "11px",
        "13p": "13px",
        "16p": "16px",
        "20p": "20px",
        "25p": "25px",
      },
      screens: {
        tablet: "926px",
        desktop: "1276px",
      },
      fontFamily: {
        sans: [
          "Pretendard",
          "-apple-system",
          "BlinkMacSystemFont",
          "Apple SD Gothic Neo",
          "Roboto",
          "Noto Sans KR",
          "Segoe UI",
          "Malgun Gothic",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "sans",
        ],
      },
    },
  },
  plugins: [daisyui],
};
