const HTMLPlugin = require('html-webpack-plugin')
const path = require('path');

module.exports = {
  mode: 'development',
  entry: ['@babel/polyfill', './src/index.js'],
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  devServer: {
    static: {
      directory: path.join(__dirname, '/dist'),
    },
    // contentBase: __dirname + '/dist',
    compress: true,
    // port: 9000,
  },
  plugins: [
    new HTMLPlugin({
      template: './src/index.html',
      filename: 'index.html'
    }),
  ],
  resolve: {
    extensions: ['.js']
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }

};
