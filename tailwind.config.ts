import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "rgba(60, 70, 200, 1)",
          dark: "#1F2A7A",
        },
        secondary: {
          light: "#D3EEFF",
          DEFAULT: "#A1DBF5",
          dark: "#6C78FF",
        },
        text: {
          primary: "#0D0F23",
          secondary: "#6C7281",
          disabled: "#A0A1B4",
        },
        accent: "#FDD446",
      },
      backdropFilter: {
        none: "none",
        blur: "blur(10px)",
      },
    },
  },
  screens: {
    sm: "34em", // 544px
    md: "59em", // 944px
    lg: "75em", // 1200px
    xl: "84em", // 1344px
  },
  plugins: [],
};
export default config;
