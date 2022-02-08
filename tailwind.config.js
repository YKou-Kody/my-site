module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js, jsx, ts, tsx}",
    "./src/**/**/*.{js, jsx, ts, tsx}",
    "./src/*.{js, jsx, ts, tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          900: '#202225', 700: "#36393f", 800: "#272a2e"
        }
      }
    },
    fontFamily: {
      sans: ['Rubik']
    }
  },
  plugins: [],
}
