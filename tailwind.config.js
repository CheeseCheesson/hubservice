module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    fontFamily: {
      default: ["Trebuchet MS", "sans-serif"],
    },
    fontSize: {
      xs: "0.75rem", // 12
      sm: "0.875rem", // 14
      base: "1rem", // 16
      lg: "1.125rem", //18
      xl: "1.25rem", // 20
      "2xl": "1.5rem", //24
      "3xl": "2rem", //32
      "4xl": "2.25rem", //36
      "5xl": "3rem", //48
      "6xl": "3.75rem", //60
      "7xl": "4.5rem", //72
    },
    fontWeight: {
      light: 300,
      normal: 400,
      medium: 500,
      bold: 700,
    },
    colors: {
      white: "#ffffff",
      black: "#000000",
      gunmetal: "#48484E",
      vermilion: "#D70303",
      maize: "#F4CE53",
      maroon: "#B91806",
      "midnight-blue": "#1D1B27",
      "pumpkin-orange": "#FCA705",
      "white-smoke": "#F3F3F3",

      "orchid-pink": " #EC6AD2", //20%
      "pastel-green": " #89EC99", //20%
      "cornflower-blue": " #52A8EC", //20%
      "lime-green": " #C3E031", //20%
      salmon: " #F7864D", //20%
      lime: " #84FF38", //20%
    },
    screens: {
      'xl': { 'max': '1365px' }, // 1024+
      'lg': { 'max': '1023px' }, // 768+
      'md': { 'max': '767px' }, // 576+
      'sm': { 'max': '575px' }, // 375+
      'xs': { 'max': '374px' }, // 320+
    },
    extend: {
      maxWidth: {
        container: "1440px",
      },
      dropShadow: {
        '3xl': '0 35px 35px rgba(0, 0, 0, 0.5)',
        '4xl': [
            '0 35px 35px rgba(0, 0, 0, 0.25)',
            '0 45px 65px rgba(0, 0, 0, 0.15)'
        ]
      }
    },
  },
  plugins: [],
};
