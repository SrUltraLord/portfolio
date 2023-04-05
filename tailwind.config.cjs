/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "surface-primary": "#FFFFFF",
        "surface-secondary": "#494D64",
        "accent-primary": "#FF0000",
        "foreground-primary": "#F7F7F9",
      },
      fontFamily: {
        montserrat: "Montserrat",
        iosevka: "Iosevka",
      },
    },
  },
  plugins: [],
};
