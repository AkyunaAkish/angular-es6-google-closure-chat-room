const ClosureCompilerPlugin = require('webpack-closure-compiler')

const config = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: `${__dirname}/dist/`,
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  plugins: [
    new ClosureCompilerPlugin({
      compilation_level: 'ADVANCED',
      create_source_map: false
    })
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'stage-1']
        }
      },
      {
        test: /\.html/,
        loader: 'raw-loader',
        exclude: /node_modules/
      },
      {
        test: /\.s?css/,
        loaders: ['style', 'css', 'sass'],
        exclude: /(node_modules | bower_components)/,
      }
    ]
  },
  resolve: {
    extensions: ['', '.js']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './dist'
  }
}

module.exports = config
