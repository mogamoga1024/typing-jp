const path = require('path');

module.exports = {
  mode: 'production',
  entry: {
    test1: './test/test1.js',
    test2: './test/test2.js',
  },
  output: {
    publicPath: '/dist/',
    filename: 'test/[name].js'
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname),
      watch: {
        ignored: ['**/.git'],
      },
    },
    hot: true,
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  performance: {
    maxEntrypointSize: 600_000,
    maxAssetSize: 600_000,
  },
};
