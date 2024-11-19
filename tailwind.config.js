/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["var(--font-heading)"],
        body: ["var(--font-body)"],
      },
      colors: {
        primaryGreen: "#022B18",
        darkBlue: "#00222F",
        lightBlue: "#D8E8F2",
        grayText: "#4C4C4C",
        secondary: "#45D7AD",
      },
    },
  },
  plugins: [],
};
