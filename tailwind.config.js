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
				"testimonial-lb": "#38b6ff",
				"testimonial-p": "#e2e2e2",
				funded: "rgba(7,169,23,.1)",
				"funded-dark-green": "#07a917",
				"media-grey": "#30323e",
				"invested-p": "hsla(0,0%,100%,.6)",
				"invested-card-p": "#717070",
				"cta-card-image-bg": "hsla(0,0%,100%,.1)",
				"cta-card-b": "rgba(30,71,255,.12)",
				"footer-p": "#646464",
			},
			fontSize: {
				"head-top": "18px",
			},
			lineHeight: {
				hero: "50px",
			},
			boxShadow: {
				"deal-card": [
					"0 3px 1px -2px rgba(0,0,0,.2)",
					"0 2px 2px 0 rgba(0,0,0,.14)",
					"0 1px 5px 0 rgba(0,0,0,.12)",
				],
				"cta-shadow": "0px 20px 40px rgb(0 0 0 / 10%) ",
			},
		},
		fontFamily: {
			inter: "Inter",
		},
	},
	plugins: [],
};
