const dev = process.env.NODE_ENV !== 'production'
const path = require('path')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')

const plugins = [new FriendlyErrorsWebpackPlugin()]

module.exports = {
  mode: dev ? 'development' : 'production',
  context: path.join(__dirname, 'src'),
  target: 'node',
  devtool: dev ? 'none' : 'source-map',
  entry: {
    index: './index.js'
  },
  resolve: {
    modules: [path.resolve('./src'), 'node_modules']
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader'
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  plugins
}
