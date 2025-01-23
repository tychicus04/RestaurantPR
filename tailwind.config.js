/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        yellow: {
          500: '#F5C518',
        },
        brown: {
          900: '#2E2B26',
        },
      },
    },
  },
  plugins: [],
}

