/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}","./page/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["'Roboto', sans-serif"]
      },
      colors: {
        primary: {
          "500": "#1D2130"
        },
        "light-violet": "#E0E4FC",
        "light-pink": "rgba(215, 152, 225, 0.15)",
        "main" : "#F0F2FE"
      },
      backgroundImage: {
        footerGradient: "url('../assets/image/gradient-footer.png')"
      }
    },
  },
  plugins: [],
}
