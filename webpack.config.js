'use strict';

const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: './src/scripts/index.js',
	output: {
		path: './build/scripts/',
		filename: 'bundle.js'
	},
	module: {
		// JavaScript linter
		preloaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'jshint-loader'
			}
		],
		loaders: [
			// JavaScript
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loaders: ["react-hot", "babel-loader"]
			},
			// Sass, CSS
			{
				test: /\.scss$/,
				loader: ExtractTextPlugin.extract(
					'style',
					'css?sourceMap!postcss!sass?sourceMap'
				)
			}
		]
	},
	plugins: [
		new ExtractTextPlugin('../styles/style.css')
	],
	watch: true,
	devtool: '#source-map'
};