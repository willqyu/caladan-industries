import type { Config } from "tailwindcss";

export const colorPrimary = "#00FFC2"
export const colorSecondary = "#242a76"
export const colorDark = "#1E1E1E"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: colorPrimary,
        secondary: colorSecondary,
        dark: colorDark
      }
    },
  },
  plugins: [],
};
export default config;
