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
      fontFamily: {
        cairo: ["Cairo"],
        Nunito: ["Nunito", "Sans"],

        sans: ["Nunito", "Roboto", "sans-serif"],
        cursive: ["Roboto", "Sriracha", "cursive"],
        cursive2: ["Roboto", "cursive"],
      },
      colors: {
        blueColor: "#44c8f5",
        grayColor: "#212529",
        bgGrayColor: "#333132",

        designColor: "#ff014f",

        primary: "#000000",
        secondary: "#ffffff",
        secondary2: "#abb8c3",
        brandDark: "#270c03",
        dark: "#1e1e1e",
        light: "#f5f5f5",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          // sm: "1.5rem",
        },
      },
      animation: {
        "spin-slow": "spin 40s linear infinite",
      },
    },
  },
  plugins: [],
};
