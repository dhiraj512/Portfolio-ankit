/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./Components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				// sans: ["Mukta", ...defaultTheme.fontFamily.sans],
			},
			gradientColorStops: {
				"gd-from": "#F20089",
				"gd-via": "#ceb9",
				"gd-to": "#F209",
			},
			colors: {
				primary: "#ffffff0d",
				background: "",
				text: "",
			},
			keyframes: {},
		},
	},
	plugins: [
		require("tailwind-scrollbar"),
		plugin(function ({ addUtilities }) {
			addUtilities({
				".h_underline": {
					"@apply bg-no-repeat bg-[0_100%] [background-size:100%_4px] rounded-sm bg-[linear-gradient(90deg,#44ff9a,#44b0ff,#8b44ff,#f64,#ebff70)]":
						{},
				},
				".gradient": {
					"@apply bg-[linear-gradient(90deg,#44ff9a,#44b0ff,#8b44ff,#f64,#ebff70)]":
						{},
				},
				".headings": {
					"@apply my-4 w-fit font-semibold h_underline py-2 text-xl md:text-2xl text-slate-100 select-none":
						{},
				},
				".gradientAlt": {
					"@apply bg-gradient-to-r from-yellow-500 via-teal-400 to-blue-500":
						{},
				},
				".text-gradient": {
					"@apply bg-clip-text text-transparent bg-[linear-gradient(90deg,#44ff9a,#44b0ff,#8b44ff,#f64,#ebff70)]":
						{},
				},
				".title-gradient-animate": {
					"@apply bg-[length:1000%_100%] bg-clip-text text-transparent bg-[linear-gradient(90deg,#44ff9a,#44b0ff,#8b44ff,#f64,#ebff70)] animate-[rainbow_20s_ease_infinite]":
						{},
				},
			});
		}),
	],
};
