/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#181719",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
        'gray-dark': '#181818',
        'gray': '#8492a6',
        'gray-light': '#d3dce6',
        'main-dark': '#41436A',
        'secondary': '#974063',
        'highlight': '#F54768',
        'highlight-secondary': '#FF9677',
        'light': '#fff',
        'dark': '#333', 
      },
      
      scale: {
        '70' : '0.7',
        '65' : '0.65',
      },

      spacing: {
        '128': '32rem',
        '144': '36rem',
      },

      borderRadius: {
        '4xl': '2rem',
      },

      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },

      screens: {
        xsm: '100px',
        sm: '380px',
        smd:'500px',
        md: '768px',
        xmd: '926px',
        lg: '1293px',
        xl: '1440px',
      },

      backgroundImage: {
        "hero-pattern": "url('/src/assets/circlebg.jpg')",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'abstract-bg': "url(/src/assets/space-bg.jpg)"
      },

      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },

      transitionTimingFunction: {
        'in-expo': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      },

      transitionDelay: {
        '0': '0ms',
        '1': '100ms',
        '2': '200ms',
        '3': '300ms',
      }
    },
  },
  plugins: [],
};