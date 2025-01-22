/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './layouts/**/*.html',
    './content/**/*.md',
    './layouts/**/*.{html,js}',
    './themes/**/layouts/**/*.{html,js}'
  ],
  theme: {
    extend: {
      colors: {
        'church-green': '#4ade80',
        'church-light-green': '#d1fae5'
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
  safelist: [
    'bg-green-100',
    'bg-green-500',
    'text-green-600',
    'bg-gray-100',
    'text-gray-600',
    'hover:bg-green-200',
    'hover:text-green-700'
  ]
}
