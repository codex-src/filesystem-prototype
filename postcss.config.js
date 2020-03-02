const purgecss = require("@fullhuman/postcss-purgecss")({
	content: [
		"./public/**/*.html",
		"./src/**/*.js",
	],
	defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
	whitelist: ["lg:grid-cols-3"],
})

module.exports = {
	plugins: [
		require("tailwindcss"),
		require("autoprefixer"),
		...process.env.NODE_ENV === "production"
			? [purgecss]
			: [],
	],
}
