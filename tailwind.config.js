const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
	theme: {
		extend: {
			borderRadius: {
				"xl":  "1rem",
				"2xl": "2rem",
			},
			boxShadow: {
				"2px": "0 0 0 2px rgba(0, 0, 0, 0.05)",
				"hero-sm": `
					0 0 0 1px rgba(0, 0, 0, 0.05),
					0 1px 2px 0 rgba(0, 0, 0, 0.05)
				`,
				"hero": `
					0 0 0 1px rgba(0, 0, 0, 0.05),
					0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)
				`,
				"hero-md": `
					0 0 0 1px rgba(0, 0, 0, 0.05),
					0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)
				`,
				"hero-lg": `
					0 0 0 1px rgba(0, 0, 0, 0.05),
					0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)
				`,
				"hero-xl": `
					0 0 0 1px rgba(0, 0, 0, 0.05),
					0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)
				`,
				"hero-2xl": `
					0 0 0 1px rgba(0, 0, 0, 0.05),
					0 25px 50px -12px rgba(0, 0, 0, 0.25)
				`,
			},
			colors: {
				"gray": {
					...defaultTheme.colors.gray,
					50: "#fbfdfe",
				},
				// https://material.io/design/color/the-color-system.html#tools-for-picking-colors
				"md-blue-50":   { default: "#e3f2fd" },
				"md-blue-100":  { default: "#bbdefb" },
				"md-blue-200":  { default: "#90caf9" },
				"md-blue-300":  { default: "#64b5f6" },
				"md-blue-400":  { default: "#42a5f5" },
				"md-blue-500":  { default: "#2196f3" },
				"md-blue-600":  { default: "#1e88e5" },
				"md-blue-700":  { default: "#1976d2" },
				"md-blue-800":  { default: "#1565c0" },
				"md-blue-900":  { default: "#0d47a1" },
				"md-blue-a100": { default: "#82b1ff" },
				"md-blue-a200": { default: "#448aff" },
				"md-blue-a400": { default: "#2979ff" },
				"md-blue-a700": { default: "#2962ff" },
				"md-gray-50":   { default: "#fafafa" },
				"md-gray-100":  { default: "#f5f5f5" },
				"md-gray-200":  { default: "#eeeeee" },
				"md-gray-300":  { default: "#e0e0e0" },
				"md-gray-400":  { default: "#bdbdbd" },
				"md-gray-500":  { default: "#9e9e9e" },
				"md-gray-600":  { default: "#757575" },
				"md-gray-700":  { default: "#616161" },
				"md-gray-800":  { default: "#424242" },
				"md-gray-900":  { default: "#212121" },
			},
			fontFamily: {
				"dm-sans": "'DM Sans', sans-serif",
			},
			letterSpacing: {
				"-px": "-0.0125em",
				"px":  "0.0125em",
			},
			maxWidth: {
				1:  "0.25rem",
				2:  "0.5rem",
				3:  "0.75rem",
				4:  "1rem",
				5:  "1.25rem",
				6:  "1.5rem",
				8:  "2rem",
				10: "2.5rem",
				12: "3rem",
				16: "4rem",
				20: "5rem",
				24: "6rem",
				32: "8rem",
				40: "10rem",
				48: "12rem",
				56: "14rem",
				64: "16rem",
			},
			// https://youtube.com/watch?v=jl_tdhBxc_Y
			spacing: {
				"2/1":   "200%",
				"16/9":  "177.7778%",
				"16/10": "160%",
				"3/2":   "150%",
				"4/3":   "133.3333%",
				"5/4":   "125%",
				"1/1":   "100%",
				"4/5":   "80%",
				"3/4":   "75%",
				"2/3":   "66.6667%",
				"10/16": "62.5%",
				"9/16":  "56.25%",
				"1/2":   "50%",
			},
			strokeWidth: {
				hairline:  1,
				thin:      1.33,
				light:     1.67,
				normal:    2,
				medium:    2.33,
				semibold:  2.67,
				bold:      3,
				extrabold: 3.33,
				black:     4,
			},
			opacity: {
				50:  "0.50",
				55:  "0.55",
				60:  "0.60",
				65:  "0.65",
				70:  "0.70",
				75:  "0.75",
				80:  "0.80",
				85:  "0.85",
				90:  "0.90",
				100: "1",
			},
			scale: {
				50:  "0.50",
				55:  "0.55",
				60:  "0.60",
				65:  "0.65",
				70:  "0.70",
				75:  "0.75",
				80:  "0.80",
				85:  "0.85",
				90:  "0.90",
				100: "1",
			},
		},
	},
	variants: {
		backgroundColor: ["responsive", "hover", "focus", "active", "disabled"],
		maxWidth:        ["responsive"],
		textColor:       ["responsive", "hover", "focus", "active", "disabled"],
	},
	plugins: [],
}
