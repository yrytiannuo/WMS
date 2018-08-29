const path              = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/app.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.js'
  },
  module: {
	rules: [
	    {
	      test: /\.jsx$/,
	      exclude: /(node_modules|bower_components)/,
	      use: {
	        loader: 'babel-loader',
	        options: {
	          presets: ['env', 'react']
	        }
	      }
	    }
    ]
  },
  plugins: [
  	new HtmlWebpackPlugin({
  		template: './src/index.html'
  	})
  ]
};