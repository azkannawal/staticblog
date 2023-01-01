/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html', 'memorandom.html', 'dec.html', '2023.html'],
  theme: {
    extend: {
      backgroundImage: {
        'sea1': 'url(/dist/img/memorandom.svg)',
        'sea2': 'url("https://images.unsplash.com/photo-1503177847378-d2048487fa46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80")'
      },
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
