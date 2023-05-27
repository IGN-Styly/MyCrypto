import { type Config } from "tailwindcss";

export default {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './**/**/*.{ts,tsx}',
	],
  theme: {
      
    extend:{
      
      fontFamily:{
        'jetbrains':['Jetbrains Mono']
      }
    },
  },
  plugins: [
    require('@catppuccin/tailwindcss')({defaultFlavour: 'mocha'}),
    require('@tailwindcss/typography'),
  ],
} satisfies Config;