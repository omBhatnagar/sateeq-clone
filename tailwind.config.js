/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				"nav-blue": "rgb(30, 71, 255)",
				"grad-lb": "#38b6ff",
				"grad-b": "#1e47ff",
				"grad-db": "#2506c4",
				"hero-p": "#646464",
			},
			fontSize: {
				"head-top": "18px",
			},
			lineHeight: {
				hero: "50px",
			},
		},
		fontFamily: {
			inter: "Inter",
		},
	},
	plugins: [],
};
