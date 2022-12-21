/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html', 'memorandom.html'],
  theme: {
    extend: {
      backgroundImage: {
        'sea1': 'url(/dist/img/rect526.svg)',
        'sea2': 'url("https://images.unsplash.com/photo-1524704654690-b56c05c78a00?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80")',
        'sea3': 'url("https://images.unsplash.com/photo-1503177847378-d2048487fa46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80")'
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
