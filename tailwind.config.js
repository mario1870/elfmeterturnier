/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'wallpaper': "url('/wallpaper.png')",
      },
      fontSize: {
        'xxs': '0.625rem', // Hier kannst du den gewünschten Wert für die kleinere Schriftgröße angeben
      },
    },
  },
  plugins: [],
}
