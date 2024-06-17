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
        emerald: {
          50: "#e6f4f1",
          100: "#cce9e3",
          200: "#99d3c8",
          300: "#66bdad",
          400: "#33a791",
          500: "#008176",
          600: "#00635c",
          700: "#004642",
          800: "#002828",
          900: "#001414",
        },
        gray: {
          50: "#f9fafb",
          100: "#f3f4f6",
          200: "#e5e7eb",
          300: "#d1d5db",
          400: "#9ca3af",
          500: "#6b7280",
          600: "#4b5563",
          700: "#374151",
          800: "#1f2937",
          900: "#111827",
        },
      },
    },
  },
  plugins: [],
};
