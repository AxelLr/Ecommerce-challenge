import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/components/**/*.{js,ts,jsx,tsx,mdx}",
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
        primary: "#903DF7",
        secondary: "#ECDFFD",
        slate: "#626262",
        "footer-bg": "#180A2A",
        light: "#EDEDED",
        lightText: "#D5D5D5",
        lightGray: "#9A9A9A",
      },
    },
  },
  plugins: [
    function ({ addBase, theme }) {
      addBase({
        ":root": {
          "--color-primary": theme("colors.primary"),
          // Puedes agregar más variables si es necesario
        },
      });
    },
  ],
};
export default config;
