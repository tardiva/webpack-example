const Path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: Path.resolve(__dirname, '../src/scripts/index.js'),
  },
  output: {
    path: Path.join(__dirname, '../build'),
    filename: '[name].js'
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        styles: {
          name: 'index',
          // name: 'styles',
          test: /\.s?css$/,
          chunks: 'all',
          enforce: true,
        },
      },
    },
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: Path.resolve(__dirname, '../src/index.html')
    })
  ],
  resolve: {
    alias: {
      '~': Path.resolve(__dirname, '../src')
    }
  },
  module: {
    rules: [
      {
        test: /\.mjs$/,
        include: /node_modules/,
        type: 'javascript/auto'
      },
      {
        test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]'
          }
        }
      },
    ]
  }
};
