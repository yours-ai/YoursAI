/* eslint-disable */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        menuBackground: "#E0E0E0",
        accentBlue: "#007AFF",
        blankAlert: "rgba(0,0,0,0.015)",
        emptyBackground: "#F2F2F7",
        tabUnselected: "#999999",
        tabHovered: "#7B7B7B",
      },
      fontSize: {
        "10p": "10px",
        "11p": "11px",
        "13p": "13px",
        "15p": "15px",
        "16p": "16px",
        "17p": "17px",
        "20p": "20px",
        "25p": "25px",
        "34p": "34px",
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
  plugins: [],
};
