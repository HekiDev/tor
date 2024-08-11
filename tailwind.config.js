/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',  
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
    "./presets/**/*.{js,vue,ts}",
  ],
  theme: {
    // screens: {
    //   sm: '480px',
    //   md: '768px',
    //   lg: '976px',
    //   xl: '1700px'
    // },
    extend: {
      keyframes: {
        'logo-bounce': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(20px)' },
        },
      },
      animation: {
        'logo-bounce': 'logo-bounce 6s ease-in-out infinite',
        'logo-bounce-del': 'logo-bounce 6s ease-in-out infinite 2.5s',
      },
      fontFamily: {
        sans: ['Inter'],
      },
      colors: {
        // primary: '#333'
      },
    },
    container: {
      center: true,
      padding: '1rem',
      screens: {
        sm: '100%',  
        md: '100%',  
        lg: '1300px', 
        xl: '1300px',
      },
    },
  },
  plugins: [require('tailwindcss-primeui')]
}

