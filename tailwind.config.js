/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html', 'memorandom.html'],
  theme: {
    extend: {
      colors: {
        prim: '#1F1F1F',
        sec: '#2B2B2B',
      },
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
};
