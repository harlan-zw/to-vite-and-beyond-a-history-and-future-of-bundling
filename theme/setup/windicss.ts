import { resolve } from 'path'
import { defineWindiSetup } from '@slidev/types'

export default defineWindiSetup(() => ({
  extract: {
    include: [
      resolve(__dirname, '**/*.vue'),
    ],
    exclude: [
      resolve(__dirname, 'node_modules'),
      resolve(__dirname, 'demo'),
    ],
  },
  safelist: ['prose-sm', 'prose-xl', 'prose-2xl', 'prose-xs', 'prose-base'],
  preflight: true,
  shortcuts: {
    'bg-main': 'bg-white text-[#181818] dark:(bg-[#121212] text-[#ddd])',
    'bg-clip-text': {
      '-webkit-background-clip': 'text',
      'background-clip': 'text',
    },
  },
  theme: {
    extend: {
      animation: {
        fadeIn: 'fadeIn 200ms ease-in forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      fontFamily: {
        sans: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
        header: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
      },
      typography: theme => ({
        DEFAULT: {
          css: {
            maxWidth: '100%',
            lineHeight: 1.3,
            img: {
              height: null,
            },
            a: {
              color: 'inherit',
              fontWeight: 400,
              textDecoration: 'none',
            },
            h1: {
              color: theme('colors.gray.800'),
              fontWeight: '600',
              fontFamily: theme('fontFamily.header'),
              lineHeight: 1.3,
            },
            h2: {
              color: theme('colors.gray.800'),
              fontFamily: theme('fontFamily.header'),
            },
            h3: {
              color: theme('colors.gray.800'),
              fontFamily: theme('fontFamily.header'),
            },
            h4: {
              color: theme('colors.gray.800'),
              fontWeight: '600',
              fontSize: '1.5rem',
              lineHeight: '2rem',
              fontFamily: theme('fontFamily.header'),
              textDecoration: 'underline',
            },
            blockquote: {
              fontWeight: '400',
            },
          },
        },
        xl: {
          css: {
            h1: {
              lineHeight: 1.3,
            },
          },
        },
      }),
    },
  },
}))
