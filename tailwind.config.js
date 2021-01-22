module.exports = {
	purge: { enabled: true, content: ["./*.html", "./news/**/*.html"] },
	darkMode: false,
	theme: {
		extend: {
			fontFamily: {
				content: ["Helvetica", "sans-serif"],
				header: ["Verdana", "sans-serif"],
			},
			colors: {
				bgcolor: "#E6E6E6",
				titlebgcolor: "#FFFFFF",
				containerhl: "#B6B6B6",
				seperatorcolor: "#EFEFEF",
				headercolor: "#000000",
				refcolor: "#479BF3",
				contentcolor: "#7E7E7E",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
