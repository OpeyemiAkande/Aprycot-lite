/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#EA6A12",
        secondary: "#6c757d",
        success: "#1aa053",
        info: "#079aa2",
        warning: "#f16a1b",
        danger: "#c03221",
        light: "#dee2e6",
        dark: "#212529",
      },
      fontFamily: {
        headline: "Playfair Display",
        body: "Poppins",
      },
    },
  },
  plugins: [],
};
