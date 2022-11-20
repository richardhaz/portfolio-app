/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/layouts/**/*.{js,ts,jsx,tsx}',
    './src/page-components/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    screens: {
      xs: '340px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px'
    },
    extend: {
      colors: {
        primary: '#fd4766',
        lite: '#44566C',
        facebook: '#1871E7',
        instagram: '#B11975',
        linkedin: '#0072B1',
        youtube: '#F20000',
        twitter: '#1C93E4'
      },
      fontFamily: {
        poppins: 'Poppins, san-serif',
        montserrat: 'Montserrat, san-serif',
        nunito: 'Nunito, sans-serif'
      },
      fontSize: {
        10: '10px',
        11: '11px',
        12: '12px',
        13: '13px',
        14: '14px',
        15: '15px',
        16: '16px',
        17: '17px',
        18: '18px'
      }
    }
  },
  plugins: [require('@tailwindcss/line-clamp')]
};
