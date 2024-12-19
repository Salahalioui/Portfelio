/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: 'rgb(var(--color-primary) / <alpha-value>)',
        secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
        tertiary: 'rgb(var(--color-tertiary) / <alpha-value>)',
        lightText: 'rgb(var(--color-light-text) / <alpha-value>)',
        lightestText: 'rgb(var(--color-lightest-text) / <alpha-value>)',
      },
      animation: {
        'bounce-slow': 'bounce 3s linear infinite',
      }
    },
  },
  plugins: [],
}
