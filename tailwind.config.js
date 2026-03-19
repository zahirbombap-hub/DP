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
        header: ['Impact', 'Haettenschweiler', 'Arial Black', 'sans-serif'],
        sub: ['"Arial Narrow"', 'Arial', 'sans-serif'],
        body: ['system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
