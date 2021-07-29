const HtmlWebpackPlugin = require('html-webpack-plugin'); // Require  html-webpack-plugin plugin
const CopyWebpackPlugin = require('copy-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');
require('dotenv').config()
const ENV = process.env.APP_ENV;
const isTest = ENV === 'test'
const isProd = ENV === 'prod';
function setDevTool() {  // function to set dev-tool depending on environment
    if (isTest) {
      return 'inline-source-map';
    } else if (isProd) {
      return 'source-map';
    } else {
      return 'eval-source-map';
    }
}
function setDevServer() {  // function to set dev-tool depending on environment
    if (isTest) {
      return {
          contentBase: './src/public',
          hot: true,
          port: 8080,
          open: true,
          historyApiFallback: true,
          inline: true,
        };
    }
}
const config = {
  entry: __dirname + "/src/app/index.js",
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js',
    publicPath: '/'
  },
  devtool: setDevTool(),
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: [
          /node_modules/
        ]
      },
      {
        test: /\.html/,
        loader: 'raw-loader'
      },
      {
        test: /\.(sass|scss)$/,
        use: [{
            loader: "style-loader" // creates style nodes from JS strings
        }, {
            loader: "css-loader" // translates CSS into CommonJS
        }, {
            loader: "sass-loader" // compiles Sass to CSS
        }]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + "/src/public/index.html",
      inject: 'body'
    }),
    new webpack.DefinePlugin({  // plugin to define global constants
        API_KEY: JSON.stringify(process.env.API_KEY)
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: setDevServer()
}

if (isProd) {
    config.plugins.push(
        new UglifyJSPlugin(),
        /*new CopyWebpackPlugin({
            patterns: [
            {
            from: __dirname + '/src/public',
            },
            ],
        }); */
    );
};
module.exports = config;