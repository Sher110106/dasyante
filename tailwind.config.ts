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
        'error-amber': 'var(--error-amber)',
        'success-green': 'var(--success-green)',
      },
      fontFamily: {
        lovelo: ['Lovelo', 'Arial Black', 'sans-serif'],
        cormorant: ['var(--font-cormorant)', 'Georgia', 'serif'],
        'dm-sans': ['var(--font-dm-sans)', 'Helvetica Neue', 'sans-serif'],
        inter: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'brand': 'clamp(72px, 10vw, 132px)',
        'brand-tablet': 'clamp(48px, 8vw, 72px)',
        'brand-mobile': 'clamp(36px, 12vw, 56px)',
        'heading-1': 'clamp(36px, 5vw, 72px)',
        'heading-2': 'clamp(28px, 4vw, 48px)',
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
        'framer-heading': '-0.06em',
        'framer-body': '-0.04em',
      },
    },
  },
  plugins: [],
};
export default config;
