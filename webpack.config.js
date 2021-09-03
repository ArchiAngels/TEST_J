const path = require('path');

module.exports = {
  entry: './src/main.jsx',
  mode:"development",
  output: {
    filename: 'bundle.main.js',
    path: path.resolve(__dirname, './public/dist'),
    clean: true,
  },
  devServer: {
    static: {
      directory: path.join(__dirname, './public'),
    },
    compress: true,
    port: 9000,
    open: true,
  },
  module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                // Creates `style` nodes from JS strings
                "style-loader",
                // Translates CSS into CommonJS
                "css-loader",
                // Compiles Sass to CSS
                "sass-loader",
                ],
            },
            {
                test: /\.jsx$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env','@babel/preset-react'],
                        // plugins: [
                        //     ["@babel/plugin-transform-runtime",
                        //         {
                        //             "regenerator": true
                        //         }
                        //     ]
                        // ]
                    }
                }
            },
            {

                test: /\.(png|svg|jpg|jpeg|gif)$/i,

                type: 'asset/resource',

            },
        ],
    },
};