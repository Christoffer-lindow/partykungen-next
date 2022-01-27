module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "pk-yellow": "#FFDE0E",
    },
    extend: {
      transformOrigin: {
        0: "0%",
      },
      zIndex: {
        "-1": "-1",
      },
    },
    borderRadius: {
      none: "0",
      sm: "0.125rem",
      DEFAULT: "0.25rem",
      DEFAULT: "4px",
      md: "0.375rem",
      lg: "0.750rem",
      full: "9999px",
      large: "12px",
    },
  },
  plugins: [],
};
