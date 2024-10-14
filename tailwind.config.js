/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false,
    container: false,
  },
  darkMode: ["class", '[data-theme="dark"]'],
  content: ["./src/**/*.{jsx,tsx,html, mdx}", "'./docs/**/*.{md,mdx}'"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },

      colors: {},
    },
  },
  plugins: [],
};
