module.exports = {
  content: [
    './public/index.html',
    './src/**/*.{js,jsx,ts,tsx,html}'
  ],
  theme: {
    extend: {
      colors: {
        brandBg: '#0B0B0B',
        brandRed: '#D91A1A',
        brandYellow: '#FFCC00',
        brandPink: '#FF007F',
        brandwhite: '#ffffff',
      },
      fontFamily: {
        header: ['"IFC Insane Rodeo"', 'cursive'],
        sub: ['Oswald', 'sans-serif'],
        body: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
