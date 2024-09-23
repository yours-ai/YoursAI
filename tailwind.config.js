/* eslint-disable */
/** @type {import('tailwindcss').Config} */
import konstaConfig from "konsta/config";
export default konstaConfig({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  konsta: {
    colors: {
      green: "#4CD963",
    },
  },
  theme: {
    extend: {
      colors: {
        menuBackground: "#E0E0E0",
        accentBlue: "#007AFF",
        accentBlueHover: "#005CC1",
        blankAlert: "rgba(0,0,0,0.015)",
        emptyBackground: "#F2F2F7",
        tabUnselected: "#999999",
        tabHovered: "#7B7B7B",
        border: "rgba(198,198,200,0.6)",
        red: "#FF3B30",
        redHover: "#FF0E00",
        green: "#4CD963",
      },
      fontSize: {
        "10p": "10px",
        "11p": "11px",
        "13p": "13px",
        "14p": "14px",
        "15p": "15px",
        "16p": "16px",
        "17p": "17px",
        "18p": "18px",
        "20p": "20px",
        "24p": "24px",
        "25p": "25px",
        "34p": "34px",
        "heading-1": ["36px", "41px"],
        "heading-4": "18px",
        lg: ["18px", "22px"],
        body: ["16px", "22px"],
        sm: "14px",
      },
      screens: {
        phone: "500px",
        tablet: "926px",
        cardSplit: "1100px",
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
});
