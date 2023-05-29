/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3554D1",
        secondary: "#13357B",
        light: "#DDDDDD",
        heading: "#051036",
        body: "#697488",
        dark: "#051036",
        "light-secondary": "#F5F6FD",
        "light-thirdary": "#F5F5F5",
      },
    },
  },
  plugins: [],
};
