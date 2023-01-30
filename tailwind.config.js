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
      backgroundImage: {
        main_bg_light: "url('../assets/images/main-bg-squares.png')",
        main_bg_dark: "url('../assets/images/main-bg-dark.jpg')"
      },
      colors: {
        primary: {
          light: '#EEEEEE',
          DEFAULT: '#364F6B',
          dark: '#222831'
        },
        secondary: '#00ADB5',
        lite: '#44566C',
        facebook: '#1871E7',
        instagram: '#B11975',
        linkedin: '#0072B1',
        youtube: '#F20000',
        twitter: '#1C93E4',
        light1rgb: 'rgb(238, 245, 250)',
        light2rgb: 'rgb(242, 244, 255)',
        light3rgb: 'rgb(252, 244, 255)',
        light4rgb: 'rgb(252, 249, 242)'
      },
      fontFamily: {
        poppins: 'Poppins, san-serif',
        montserrat: 'Montserrat, san-serif',
        nunito: 'Nunito, sans-serif',
        roboto_slab: 'Roboto Slab'
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
        18: '18px',
        19: '19px',
        20: '20px'
      }
    }
  },
  plugins: [require('@tailwindcss/line-clamp')]
};
