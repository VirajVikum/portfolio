/** @type {import('tailwindcss').Config} */

module.exports = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
	container:{
		center: true,
		padding: "15px",
	},
	screens:{
		sm:"640px",
		md:"768px",
		lg:"960px",
		xl:"1200px",
	},
	fontFamily:{
		primary:"var(--font-jetbrainsMono)",
	},
  	extend: {
		colors: {
			primary: '#1c1c22',
			accent: {
				DEFAULT: '#00ff99',
				hover: '#00e187'
			}
		},
		animation: {
			spotlight: "spotlight 2s ease .75s 1 forwards",
			glow: 'glow 1.5s infinite alternate',
		  },
		  keyframes: {
			spotlight: {
			  "0%": {
				opacity: 0,
				transform: "translate(-72%, -62%) scale(0.5)",
			  },
			  "100%": {
				opacity: 1,
				transform: "translate(-50%,-40%) scale(1)",
			  },
			},
			  glow: {
				'0%': { boxShadow: '0 0 5px rgba(255, 255, 255, 0.5)' },
				'100%': { boxShadow: '0 0 20px rgba(0, 255, 0, 1)' }, // Change to your desired color
			  },
		  },
  	}
  },
  plugins: [require("tailwindcss-animate")],
  plugins: [addVariablesForColors],
};


const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

function addVariablesForColors({
  addBase,
  theme
}) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(Object.entries(allColors).map(([key, val]) => [`--${key}`, val]));

  addBase({
    ":root": newVars,
  });
}
