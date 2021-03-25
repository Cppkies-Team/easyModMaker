/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path")
const HTMLPlugin = require("html-webpack-plugin")

module.exports = {
	entry: path.resolve("./src/index.ts"),
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "main.js",
		publicPath: "/",
	},
	devtool: "source-map",
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				exclude: /node_modules/,
				use: "ts-loader",
			},
			{ test: /\.xml$/, use: "raw-loader" },
			{ test: /\.css$/, use: ["style-loader", "css-loader"] },
		],
	},
	mode: process.env.NODE_ENV,
	resolve: { extensions: [".tsx", ".ts", ".jsx", ".js", ".json"] },
	plugins: [
		new HTMLPlugin({
			template: "./src/index.html",
			filename: "index.html",
		}),
	],
	devServer: {
		contentBase: path.join(__dirname, "dist"),
		compress: true,
		port: 5500,
		historyApiFallback: true,
	},
}
