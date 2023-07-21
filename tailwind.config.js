/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },

      colors: {
        'blue': {
          100: 'hsl(207, 33%, 95%)',
          200: 'hsl(231, 7%, 65%)',
          300: 'hsl(230, 11%, 40%)',
          400: 'hsl(230, 29%, 20%)',
      },

      'red' : 'hsl(0, 100%, 68%)'

    },


    fontFamily: {
      'barlow': ['Barlow', 'sans-serif'],
      'barlow-con': ['Barlow Condensed', 'sans-serif']
    },

    fontWeight: {
      'normal' : '400',
      'bold' : '700'
    }

  },
  plugins: [],
}

}

