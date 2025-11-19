
import type {Config} from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animationDelay: {
        '3000': '3000ms',
      },
      fontFamily: {
        body: ['Inter', 'sans-serif'],
        headline: ['Inter', 'sans-serif'],
        code: ['monospace'],
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
        'slow-pan': {
          '0%': { transform: 'translateY(0%)' },
          '100%': { transform: 'translateY(-10%)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(5deg)' },
        },
        'blob': {
          '0%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
          '33%': {
            transform: 'translate(30px, -50px) scale(1.1)',
          },
          '66%': {
            transform: 'translate(-20px, 20px) scale(0.9)',
          },
          '100%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
        },
        'border-spin': {
          '100%': {
            transform: 'rotate(360deg)',
          },
        },
        'move-up-down': {
            'to': {
                transform: 'translateY(-20px)'
            }
        },
        'move-down-up': {
            'to': {
                transform: 'translateY(20px)'
            }
        },
        'marquee': {
          'from': { transform: 'translateX(0)' },
          'to': { transform: 'translateX(-50%)' },
        },
        'light-sweep': {
          '0%': { transform: 'translateX(-100%) translateY(-100%) rotate(45deg)' },
          '100%': { transform: 'translateX(100%) translateY(100%) rotate(45deg)' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'slow-pan': 'slow-pan 10s ease-in-out infinite alternate',
        'float': 'float 8s ease-in-out infinite',
        'blob': 'blob 20s infinite',
        'border-spin': 'border-spin 12s linear infinite',
        'move-up-down': 'move-up-down 4s ease-in-out infinite alternate-reverse',
        'move-down-up': 'move-down-up 5s ease-in-out infinite alternate-reverse',
        'marquee': 'marquee 80s linear infinite',
        'light-sweep': 'light-sweep 1.5s linear infinite',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    function({ addUtilities, theme }: { addUtilities: any, theme: any }) {
      const newUtilities: { [key: string]: any } = {
        '.animation-delay-3000': {
          'animation-delay': '3s',
        },
        '.animation-duration-20s': { 'animation-duration': '20s' },
        '.animation-duration-40s': { 'animation-duration': '40s' },
        '.animation-duration-80s': { 'animation-duration': '80s' },
        '.direction-reverse': { 'animation-direction': 'reverse' },
        '.animation-play-state-paused': { 'animation-play-state': 'paused' },
      };

      const animationDelays = theme('animationDelay', {});
      Object.entries(animationDelays).forEach(([key, value]) => {
        newUtilities[`.animation-delay-${key}`] = {
          'animation-delay': value,
        };
      });

      addUtilities(newUtilities, ['responsive', 'hover']);
    }
  ],
} satisfies Config;
