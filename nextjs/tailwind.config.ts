import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'bg1':'#070707',
        'bg2':'#171717',
        'bg3':'#252525',
        'bg4':'#b3b3b3',
        'pr1':'#1DB954',
        'pr2':'#3DE974',
        'txt1':'#f1f1f1',
        'txt2':'#b3b3b3',
        
      },
      screens: {
        '3xl': '1733px',
      },
    }
  },
  plugins: [],
};
export default config;
