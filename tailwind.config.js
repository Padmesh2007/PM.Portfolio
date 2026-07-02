/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgPrimary: 'var(--bg-primary)',
        bgSecondary: 'var(--bg-secondary)',
        textMain: 'var(--text-main)',
        textMuted: 'var(--text-muted)',
        borderColor: 'var(--border-color)',
        accentRed: 'var(--accent-red)',
        accentOrange: 'var(--accent-orange)',
        accentBlue: 'var(--accent-blue)',
        accentPurple: 'var(--accent-purple)',
        cardBg: 'var(--card-bg)',
        navBg: 'var(--nav-bg)',
      },
      fontFamily: {
        sans: ['var(--font)', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
