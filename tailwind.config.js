// tailwind.config.js
module.exports = {
    darkMode: 'class', // 👈 This is the key line
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}