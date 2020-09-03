module.exports = {
  purge: [],
  theme: {
    extend: {
      minHeight: {
        "45": "45rem",
        "30": "30rem"
      },
      borderRadius: {
        xl: "0.75rem",
        "2xl": ".9rem"
      },
      inset: {
        "1/2": "50%"
      },
      margin: {
        "0.5": "0.1rem"
      }
    }
  },
  variants: {},
  plugins: [require("@tailwindcss/custom-forms")]
};
