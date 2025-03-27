/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Yu Gothic"', '游ゴシック', 'YuGothic', '游ゴシック体', 'sans-serif'],
        inter: ["Inter", 'sans-serif']
      },
    },
  },
  plugins: [],
};