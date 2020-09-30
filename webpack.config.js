const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MomentLocalesPlugin = require('moment-locales-webpack-plugin');


// see https://webpack.js.org/concepts/mode/
const mode = process.env.NODE_ENV === 'development' ? 'development' : 'production';

const path = require('path');

module.exports = {
  entry: {
    app: [
      'react-hot-loader/patch',
      './public/js/app/entry.jsx',
    ],
  },
  mode,
  devtool: process.env.NODE_ENV === 'production' ? 'none' : 'cheap-module-eval-source-map', // full source maps slow down incremental builds big time
  devServer: {
    port: 8080,
    contentBase: './dist',
    hot: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    // Below added because of https://github.com/webpack/webpack-dev-server/issues/416
    disableHostCheck: true,
  },
  watchOptions: {
    ignored: /node_modules/,
  },

  plugins: [
    // this plugin ensures that only the locales we need `en-gb` are loaded in
    // to the bundle
    new MomentLocalesPlugin({
      localesToKeep: ['en-gb'],
    }),
  ],

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
            babelrc: true,
          },
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(html)$/,
        use: {
          loader: 'html-loader',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      // make hot loader work properly
      'react-dom': '@hot-loader/react-dom',
      // useful paths
      app: `${__dirname}/public/js/app`,
      config: `${__dirname}/public/js/app/config`,
      components: `${__dirname}/public/js/app/components`,
      utils: `${__dirname}/public/js/app/utils`,
      actions: `${__dirname}/public/js/app/actions`,
      constants: `${__dirname}/public/js/app/constants`,
      reducers: `${__dirname}/public/js/app/reducers`,
    },
  },
  output: {
    filename: 'js/bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'http://localhost:8080/',
    pathinfo: false,
  },
  optimization: {
    minimizer: mode === 'production' ? [
      new UglifyJsPlugin({
        uglifyOptions: {
          output: {
            comments: false,
          },
        },
      }),
    ] : undefined,
    removeAvailableModules: false,
    removeEmptyChunks: false,
    splitChunks: false,
  },
};
