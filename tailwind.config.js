/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {
      colors: {
        background: {
          start: '#1a1a2e',
          end: '#16213e',
        },
        primary: {
          cyan: '#36e2ff',
          magenta: '#ff4fc3',
          purple: '#e0aaff',
        },
        surface: {
          dark: '#0f172a',
          light: '#1e293b'
        }
      },
      fontFamily: {
        sans: ['"Source Han Sans CN"', 'Roboto', 'system-ui', 'sans-serif'],
      },
      animation: {
        'neon-pulse': 'neon-pulse 2s infinite alternate',
      },
      keyframes: {
        'neon-pulse': {
          '0%': { boxShadow: '0 0 5px #36e2ff, 0 0 10px #36e2ff' },
          '100%': { boxShadow: '0 0 10px #36e2ff, 0 0 20px #36e2ff' },
        }
      }
    },
  },
  plugins: [],
};
