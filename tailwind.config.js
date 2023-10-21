/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xsm: "150px",
        msm: "200px",
        slg: "1536px",
        mlg: "1200px",
        llg: "1024px",
        "3xl": "1900px",
        "4xl": "2000px",
        "5xl": "2500px",
        "6xl": "3000px",
      },
    },
  },
  plugins: [],
};
