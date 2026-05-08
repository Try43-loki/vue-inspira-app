import { setupInspiraUI } from '@inspira-ui/plugins'

export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#2f7d58',
          dark: '#1f5b40',
          soft: '#dff1e7',
        },
        sand: '#f6efe5',
        ink: '#231f1a',
      },
      boxShadow: {
        soft: '0 20px 45px rgba(35, 31, 26, 0.08)',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [setupInspiraUI],
}
