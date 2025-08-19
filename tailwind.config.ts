import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  extend: {
  colors: {
    uf: { blue: "#0021A5", orange: "#FA4616" },
  },
  fontFamily: {
    sans: ["var(--font-roboto)", "system-ui", "sans-serif"],
  },
},
  },
  plugins: [],
};

export default config;
