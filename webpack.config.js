const path = require('path'),
    webpack = require('webpack'),
    ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    entry: {
        main: [
             "./src/assets/js/react/index.js",
         ]
     },
    output: {
        path: path.join(__dirname, "src/assets/js"),
        filename: "bundle.js"
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['*', '.js', '.jsx'],
    },
    module: {
      loaders: [
        {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            loader: "babel-loader",
            query: {
                presets: ['react', 'es2015']
            }
        },
        {
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: "css-loader!sass-loader",
            })
        },
        {
            test: /\.(jpe?g|png|gif)$/i,
            loaders: [
                "file-loader?hash=sha512&digest=hex&name=../img/[hash].[ext]",
                {
                    loader: 'image-webpack-loader',
                    query: {
                        mozjpeg: {
                            progressive: true,
                        },
                        gifsicle: {
                            interlaced: false,
                        },
                        optipng: {
                            optimizationLevel: 7,
                        },
                        pngquant: {
                            quality: '75-90',
                            speed: 3
                        },
                    },
                }
            ]
        },
        {
            test: /\.(png|woff|woff2|eot|ttf|svg)$/,
            loader: 'url-loader?limit=100000'
        }
      ]
  },
  plugins: [
      new ExtractTextPlugin('../css/bundle.css')
  ]
};
