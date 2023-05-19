import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend:{
      
      fontFamily:{
        'jetbrains':['Jetbrains Mono']
      }
    },
  },
  plugins: [
    require('@catppuccin/tailwindcss')({defaultFlavour: 'mocha'}),
  ],
} satisfies Config;