const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        gray: {
          ...defaultTheme.colors.gray,
          950: "#161B25",
        },
      },
    },
  },
  variants: {
    textColor: ["responsive", "hover", "focus", "group-focus", "group-hover"],
  },
  plugins: [],
};
