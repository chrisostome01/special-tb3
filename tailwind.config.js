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
        "main" : "#F0F2FE",
        "gradient-blue": "#373FFF",
        "gradient-cyan": "#3ACAF8"
      },
      backgroundImage: {
        footerGradient: "url('../assets/image/gradient-footer.png')",
        headerDescriptionGradient: "url('../assets/svgs/aboutus-gradient.svg')"
      },
      fontSize: {
        "size-small": "12px",
        "size-medium": "16px",
        "size-large": "18px",
        "size-2large": "24px",
        "size-3large": "48px",
        "size-xlarge":"56px"
      }
    },
  },
  plugins: [],
}
