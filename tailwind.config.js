/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,ts}", "index.html"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark", "cupcake", "acid", "forest"],
  }
}

