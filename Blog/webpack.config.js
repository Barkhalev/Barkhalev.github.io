const HTMLPlugin = require('html-webpack-plugin')
const path = require('path');

module.exports = {
    mode: 'development',
    entry: ['./src/index.js'],
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
    }
};

module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader"
        }
      },
    ]
}