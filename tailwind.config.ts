import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "360px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        custom: ["DancingScript", "sans-serif"], // Define a custom font family
      },
      fontWeight: {
        normal: "400",
        semibold: "600",
        bold: "700",
      },
      fontStyle: {
        normal: "normal",
        italic: "italic",
      },
    },
  },

  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
};
export default config;
