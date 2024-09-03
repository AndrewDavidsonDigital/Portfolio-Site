/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  safelist: [
    'animate-ripple',
  ],
  theme: {
    screens: {
      'sm': '600px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1600px',
      '3xl': '1920px',
      '4xl': '2500px',
    },
    extend: {
      backgroundSize: {
        '0_100'  : '0% 100%',
        '100_100': '100% 100%',
      },
      zIndex:{
        'menu'  : 500,
        'dialog': 1000,
        'max'   : 10000,
      },
      aspectRatio: {
        '16/9' : '16/9'
      },
      height: {
        'screen': '100dvh', // overwrite from vh to dvh
      },
      textWrap: {
        'ballance': 'ballance',
      },
      maxWidth: {
        '1920p': '1920px',
        'content': '1200px',
        'lg-content': '1600px',
        'xl-content': '60rem',
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-in-out',
        fadeOut: 'fadeOut 1s ease-in-out',
        fadeInOut: 'fadeInOut 4s ease-in-out forwards infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        fadeOut: {
          '0%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
        fadeInOut: {
          '0%': { 
            opacity: 0,
            order: 1,
          },
          '30%': { 
            opacity: 1,
            order: 1,
          },
          '70%': { 
            opacity: 1,
            order: 0,
          },
          '100%': { 
            opacity: 0,
            order: 0,
          },
        },
      }
    },
  },
  plugins: [
    plugin(({ matchUtilities, theme }) => {
      matchUtilities(
        {
          "animation-delay": (value) => {
            return {
              "animation-delay": value,
            };
          },
        },
        {
          values: theme("transitionDelay"),
        }
      );
      matchUtilities(
        {
          "animation-duration": (value) => {
            return {
              "animation-duration": value,
            };
          },
        },
        {
          values: theme("transitionDuration"),
        }
      );
    }),
    plugin(({ addUtilities }) => {
      addUtilities({
        '.glass': {
          '--tw-ring-color': 'rgb(71 85 105 / 0.6)',
          backdropFilter   : "var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)",
          boxShadow        : '0 0 40px 20px var(--tw-ring-color)',
        },
        '.glass-sm': {
          '--tw-ring-color': 'rgb(71 85 105 / 0.6)',
          backdropFilter   : "var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)",
          boxShadow        : '0 0 4px 2px var(--tw-ring-color)',
        },
        '.screen-1920p' : {
          maxWidth: '1920px',
          maxHeight: '100vh',
          aspectRatio: '16/9',
        },
      });

      // resolve to : `grid [grid-template-areas:_"stack"] *:[grid-area:_stack]`
      const stackableGridArea = {
        '.grid-area-stack' : {
          display: 'grid',
          gridTemplateAreas: '"stack"',
          '>*' : {
            'grid-area': 'stack',
          }          
        }
      }
      addUtilities(stackableGridArea);
    }),
  ],

}