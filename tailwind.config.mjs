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
        text: "#0c0d0e",
        background: "#f9fbfb",
        primary: "#1d4266",
        "primary-50": "#1d426663",
        secondary: "#a5c5d5",
        terciary: "#EDF1F3",
        "terciary-gray": "#CDD6DE",
        accent: "#76afcb",
        "dark-text": "#f1f2f3",
        "dark-background": "#111827 ",
        "dark-primary": "#98bde2",
        "dark-secondary": "#2a4a5a",
        "dark-accent": "#346d89",
      },
      boxShadow: {
        "btn-pri": "0 10px 50px var(--primary-50)",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
