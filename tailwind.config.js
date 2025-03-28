/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '"Yu Gothic"',
          'YuGothic',
          '游ゴシック体',
          '"Noto Sans JP"',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Hiragino Sans"',
          '"Hiragino Kaku Gothic ProN"',
          'sans-serif'
        ],
        inter: ["Inter", '-apple-system', 'BlinkMacSystemFont', 'sans-serif']
      },
    },
  },
  plugins: [],
};
