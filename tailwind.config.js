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
      height: {
        80: "20rem",
        90: "22.5rem",
        featured: "28rem",
      },
      width: {
        120: "30rem",
        160: "40rem",
      },
      letterSpacing: {
        wiiddee: ".25em",
      },
      zIndex: {
        "-10": "-10",
      },
    },
    typography: {
      default: {
        css: {
          color: defaultTheme.colors.gray[600],
          a: {
            color: defaultTheme.colors.gray[600],
            "&:hover": {
              color: defaultTheme.colors.teal[300],
            },
          },
          h1: {
            color: defaultTheme.colors.gray[500],
          },
          h2: {
            color: defaultTheme.colors.gray[500],
          },
          h3: {
            color: defaultTheme.colors.gray[500],
          },
          h4: {
            color: defaultTheme.colors.gray[500],
          },
          strong: {
            color: defaultTheme.colors.gray[500],
          },
        },
      },
      lg: {
        css: {
          h2: {
            fontSize: defaultTheme.fontSize.lg,
          },
        },
      },
    },
  },
  variants: {
    textColor: ["responsive", "hover", "focus", "group-focus", "group-hover"],
  },
  plugins: [require("@tailwindcss/typography")],
};
