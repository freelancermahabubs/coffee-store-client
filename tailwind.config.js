/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#9de582",

          secondary: "#ffebc4",

          accent: "#c41770",

          neutral: "#1C141F",

          "base-100": "#FCF8FC",

          info: "#87BAED",

          success: "#63EE9F",

          warning: "#937B10",

          error: "#F6310E",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
