module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === "production",
    mode: "layers",
    layers: ["base", "components", "utilities"],
    content: ["src/**/*.js"],
    options: {
      keyframes: true,
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
