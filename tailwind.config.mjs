/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        glacier: {
          50: "#f4f8fb",
          100: "#e8f0f6",
          200: "#cbe0ec",
          300: "#9ec6db",
          400: "#76afcb",
          500: "#478eb0",
          600: "#357294",
          700: "#2c5b78",
          800: "#284e64",
          900: "#254255",
          950: "#192b38",
          975: "#0f202c",
        },

        gold: {
          50: "#fdf9ef",
          100: "#fbf2d9",
          200: "#f6e2b2",
          300: "#efcd82",
          400: "#ebb967",
          500: "#e2962d",
          600: "#d47d22",
          700: "#b0621e",
          800: "#8c4d20",
          900: "#71401d",
          950: "#3d1f0d",
        },
        woodSmoke: "#0c0d0e",
        whiteHaze: "#f1f2f3",
        regalBlue: "#1d4266",
        regalBlueOpacity: "#1d426663",
        regentStBlue: "#a5c5d5",
        porcelain: "#17191A",
        iron: "#CDD6DE",
        accent: "#76afcb",

        regalBlueDark: "#98bde2",
        regentStBlueDark: "#2a4a5a",
        accentDark: "#346d89",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
