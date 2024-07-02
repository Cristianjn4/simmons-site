import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'gray-gradient': "bg-gradient-to-r from-neutral-700 to-neutral-900",
        'orange-gradient': "bg-gradient-to-r from-orange-500 to-red-600",
        'rose-gradient': "bg-gradient-to-r from-rose-500 to-violet-800",
      },
    },
  },
  plugins: [],
};
export default config;
