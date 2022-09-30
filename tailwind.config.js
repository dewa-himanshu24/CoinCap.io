/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    screens: {

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '997px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1199px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [],
};
