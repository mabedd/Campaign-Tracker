module.exports = {
  darkMode: "class", // or 'media'
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3F5B91",
        secondary: "#E8E8E8",
        black: "#181818",
        dark: {
          background: "#121212",
          foreground: "#1E1E1E",
          text: "#E0E0E0",
        },
      },
    },
  },
  plugins: [],
};
