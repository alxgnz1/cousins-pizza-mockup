/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        pub: ['"Playfair Display"', 'serif'],
        tavern: ['"Cinzel"', 'serif'],
        sign: ['"Libre Baskerville"', 'serif'],
      },
    },
},
  plugins: [],
};
