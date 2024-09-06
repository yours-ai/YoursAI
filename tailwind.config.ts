import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/themes/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        menuBackground: "#E0E0E0",
        accentBlue: "#007AFF",
        blankAlert: "rgba(0,0,0,0.015)",
        quinary: "rgba(0,0,0,0.05)",
        emptyBackground: "#F2F2F7",
        border: "rgba(198, 198, 200, 0.6)",
        tabUnselected: "#999999",
        buttonBg: "rgba(0,0,0,0.4)",
        secondary: "rgba(0,0,0,0.5)",
        primaryLabel: "#000000",
        red: "#FF3B30",
        tertiaryDark: "rgba(255, 255, 255, 0.25)",
      },
      fontSize: {
        "11p": "11px",
        "13p": "13px",
        "14p": "14px",
        "16p": "16px",
        "20p": "20px",
        "25p": "25px",
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "Apple SD Gothic Neo",
          "var(--font-pretendard)",
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
  plugins: [require("daisyui"), require("@tailwindcss/typography")],
};
export default config;
