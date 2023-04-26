/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "surface-primary": "#FFFFFF",
        "surface-secondary": "#F9F9F9",
        "accent-primary": "#42B883",
        "foreground-primary": "#213547",
      },
      fontFamily: {
        montserrat: {
          bold: "Montserrat Bold",
          regular: "Montserrat Regular",
          light: "Montserrat Light",
        },
        iosevka: "Iosevka",
        "libre-franklin": {
          bold: "Libre Franklin Bold",
          regular: "Libre Franklin Regular",
        },
      },
    },
  },
  plugins: [],
};
