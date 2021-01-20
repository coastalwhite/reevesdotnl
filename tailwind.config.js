module.exports = {
	purge: { enabled: false, content: ["./**/*.html"] },
	darkMode: false,
	theme: {
		screens: {
			screens: {
				sm: "640px",
				md: "768px",
				lg: "1024px",
				xl: "1280px",
				"2xl": "1536px",
			},
		},
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
