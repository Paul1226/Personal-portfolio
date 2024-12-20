/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        green: {
          50: "#f0fdf4",
          100: "#dcfce7",
          200: "#bbf7d0",
          300: "#86efac",
          400: "#4ade80",
          500: "#22c55e",
          600: "#16a34a",
          700: "#15803d",
          750: "#5f9874",
          800: "#166534",
          900: "#14532d",
          950: "#052e16",
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
        pearl: {
          50: "#f9f6f3",
          100: "#f1ebe3",
          200: "#e6dace",
          300: "#cfb7a2",
          400: "#bb967c",
          500: "#ad7e62",
          600: "#a06c56",
          700: "#855849",
          800: "#6d493f",
          900: "#593d35",
          950: "#2f1e1b",
        },
        bluee: {
          500: "#0050FF",
        },
        primary: "#166534",
        secondary: "#feffbe",
        terciary: "#cc2936",
        cuaternary: "#0050FF",
        lightscreen: "#f8fafc",
        darkscreen: "#2f3037",
      },
    },
  },
  plugins: [],
};
