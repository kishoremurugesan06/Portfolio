/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#f6f6f8',
          2: '#ffffff',
          3: '#ededf0',
        },
        surface: '#ffffff',
        ink: {
          DEFAULT: '#0a0a12',
          2: '#2a2a34',
          soft: '#55555f',
          mute: '#8a8a94',
        },
        brandRed: {
          DEFAULT: '#e01020',
          deep: '#8b0000',
          glow: '#ff1a2e',
          soft: 'rgba(224, 16, 32, 0.10)',
        },
        line: {
          DEFAULT: 'rgba(10, 10, 20, 0.08)',
          2: 'rgba(10, 10, 20, 0.14)',
        }
      },
      fontFamily: {
        display: ['Orbitron', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        serif: ['"Playfair Display"', 'serif'],
      },
      boxShadow: {
        '1': '0 1px 2px rgba(10, 10, 20, .04), 0 1px 3px rgba(10, 10, 20, .03)',
        '2': '0 4px 12px rgba(10, 10, 20, .05), 0 12px 32px rgba(10, 10, 20, .06)',
        '3': '0 24px 60px rgba(10, 10, 20, .10), 0 8px 24px rgba(10, 10, 20, .06)',
        'red': '0 14px 44px rgba(224, 16, 32, .22)',
      }
    },
  },
  plugins: [],
}
