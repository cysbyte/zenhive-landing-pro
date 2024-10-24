/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        chillax: ['Chillax', 'sans-serif'],
        dmsans: ['DMSans', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        montserratBold: ['MontserratBold', 'sans-serif'],
        montserratRegular: ['MontserratRegular', 'sans-serif'],
        montserratSemiBold: ['MontserratSemiBold', 'sans-serif'],
        clashGrotesk: ['ClashGrotesk', 'sans-serif'],
        cabinetGrotesk: ['CabinetGrotesk', 'sans-serif'],
        spaceGrotesk: ['SpaceGrotesk', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        barlow: ['Barlow', 'sans-serif'],
        
      },
      screens: {
        'ss': '450px',
      },
      keyframes: {
        moveLeft: {
          '0%': { left: '100%' }, 
          '100%': { left: '-112px' }, 
        },
      },
      animation: {
        moveLeft: 'moveLeft 5s linear infinite', 
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.mask-gradient': {
          'mask-image': 'linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,1) 20%, rgba(0,0,0,1) 80%, rgba(0,0,0,0))',
        },
        '.hero-mask-gradient': {
          'mask-image': 'linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0) 100% )',
        },
        '.hide-scrollbar': {
          /* For most modern browsers */
          'scrollbar-width': 'none', /* Firefox */
          '-ms-overflow-style': 'none', /* IE and Edge */
        },
        '.hide-scrollbar::-webkit-scrollbar': {
          display: 'none', /* Chrome, Safari, and Opera */
        }
      });
    }
  ],
}