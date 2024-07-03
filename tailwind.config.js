/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  daisyui: {
    themes: false,
    logs: true
  },
  theme: {
    extend: {
      hero: `url('../public/images/hero.png')`
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require('daisyui'),
  ]
};
