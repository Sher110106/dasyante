import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': 'var(--bg-primary)',
        'bg-secondary': 'var(--bg-secondary)',
        'bg-tertiary': 'var(--bg-tertiary)',
        'text-primary': 'var(--text-primary)',
        'text-secondary': 'var(--text-secondary)',
        'text-tertiary': 'var(--text-tertiary)',
        'accent-gold': 'var(--accent-gold)',
        'accent-gold-light': 'var(--accent-gold-light)',
        'accent-gold-dark': 'var(--accent-gold-dark)',
        'border-subtle': 'var(--border-subtle)',
        'border-medium': 'var(--border-medium)',
        'border-dark': 'var(--border-dark)',
        'error-red': 'var(--error-red)',
        'success-green': 'var(--success-green)',
      },
      fontFamily: {
        lovelo: ['Lovelo', 'Arial Black', 'sans-serif'],
        cormorant: ['var(--font-cormorant)', 'Georgia', 'serif'],
        'dm-sans': ['var(--font-dm-sans)', 'Helvetica Neue', 'sans-serif'],
      },
      fontSize: {
        'brand': 'clamp(48px, 8vw, 120px)',
        'brand-mobile': 'clamp(36px, 12vw, 64px)',
        'hero-tagline': 'clamp(18px, 2.5vw, 32px)',
        'section-label': '11px',
        'body': '18px',
        'input': '14px',
        'button': '12px',
      },
      letterSpacing: {
        'brand': '0.15em',
        'tagline': '0.04em',
        'section': '0.2em',
        'body': '0.01em',
        'input': '0.05em',
        'btn': '0.18em',
      },
    },
  },
  plugins: [],
};
export default config;
