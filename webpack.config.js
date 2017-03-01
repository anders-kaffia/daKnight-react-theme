'use strict';

const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
	entry: {
		app: ['babel-polyfill', './src/scripts/index.js'],
		vendor: [
			'react',
			'react-dom'
		]
	},
	output: {
		path: './build/scripts/',
		filename: 'bundle.js'
	},
	externals: {
		'jquery': 'jQuery'
	},
	resolve: {
		alias: {
			webworkify: 'webworkify-webpack'
		},
	},
	module: {
		noParse: /node_modules\/mapbox-gl\/dist\/mapbox-gl.js/,
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
			{
				test: /\.json$/,
				loader: 'json-loader'
			}, {
				test: /use_program\.js$/,
				loader: 'transform/cacheable?brfs'
			},
			// Sass, CSS
			{
				test: /\.scss$/,
				loader: ExtractTextPlugin.extract(
					'style',
					'css?sourceMap!postcss!sass?sourceMap'
				)
			}
		],
		postLoaders: [
			{
				include: /node_modules\/mapbox-gl/,
				loader: 'transform',
				query: 'brfs'
			}
		]
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify('production')
			}
		}),
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false
			}
		}),
		new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js'),
		new ExtractTextPlugin('../styles/style.css'),
		new CompressionPlugin({
			asset: "[path].gz[query]",
			algorithm: "gzip",
			test: /\.js$|\.css$|\.html$/,
			threshold: 10240,
			minRatio: 0.8
		})
	],
	watch: true,
	devtool: '#source-map'
};