var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require("extract-text-webpack-plugin")
var HtmlWebpackPlugin = require("html-webpack-plugin")
var CleanWebpackPlugin = require('clean-webpack-plugin')


module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: 'dist/',
    filename: '[name].[hash].js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ],
      },      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
	  loaders: {
            //css: ExtractTextPlugin.extract({
            //  use: 'css-loader',
            //  fallback: 'vue-style-loader' // <- this is a dep of vue-loader, so no need to explicitly install if using npm3
            //})
          }
          // other vue-loader options go here
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          outputPath: 'img/',
          name: '[name].[ext]',
        }
      },
      {
        test: /\.(mp4|3gp|webm)$/,
        loader: 'file-loader',
        options: {
          outputPath: 'video/',
          name: '[name].[ext]',
        }
      },
      {
    	test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
	    loader: 'file-loader',
  	  options: {	      
          outputPath: 'fonts/',
          name: '[name].[ext]',
        }
      }
    ]
  },
  resolve: {
    alias: {     
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    overlay: true
  },
  performance: {
    hints: false
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jquery: 'jquery',
      'window.jQuery': 'jquery',
      jQuery: 'jquery'
    }),
   new ExtractTextPlugin("style/style.css"),
   new HtmlWebpackPlugin({
	title: 'Накопительная карта',
	filename: '../index.html',
	template: 'src/index.html'
	}),
   new CleanWebpackPlugin('dist')
  ],
  devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}
