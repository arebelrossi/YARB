const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const appTitle = 'My App';

module.exports = {
	entry: './src/main.js',
	devtool: 'inline-source-map',
	devServer: {
		contentBase: './dist'
	},
	plugins: [
		new CleanWebpackPlugin(['dist']),
		new HtmlWebpackPlugin({
			template: './src/index.html',
			filename: 'index.html',
			inject: 'body'
		})
	],
	module: {
		rules: [
			{ 
				test: /\.css$/, 
				use: ['style-loader','css-loader']
			},
			{
				test   :/\.jsx?$/,
				exclude:/node_modules/,
				loader :'babel-loader'
			}
		]
	},
	output: {
		filename: 'index_bundle.js',
		path: path.resolve(__dirname, 'dist')
	}
};