const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = () => {
  return merge([
    {
      module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                "presets": [
                  "@babel/preset-env",
                  "@babel/preset-react",
                  {
                      "plugins": [
                        "@babel/plugin-proposal-object-rest-spread",
                        "@babel/plugin-proposal-export-default-from",
                        "@babel/plugin-proposal-export-namespace-from",
                        [
                            "@babel/plugin-proposal-class-properties",
                            {
                                "loose": true
                            }
                        ],
                        [
                            "@babel/plugin-proposal-private-methods",
                            {
                                "loose": true
                            }
                        ],
                        [
                            "@babel/plugin-proposal-private-property-in-object",
                            {
                                "loose": true
                            }
                        ]
                      ]
                  }
                ]
              }
            },
          },
          {
            test: /\.scss$/,
            exclude: /node_modules/,
            use: [
              process.env.NODE_ENV === 'production'
                ? MiniCssExtractPlugin.loader
                : 'style-loader',
              'css-loader'
            ],
          },
          {
              test: /\.css$/,
              use: [
                'style-loader',
                { loader: 'css-loader' }
            ]
          },
          {
            test: /\.min\.css$/,
            use: [
                'style-loader',
                { loader: 'css-loader' }
            ]
        }
        ],
      },
      plugins: [
        new HtmlWebpackPlugin({
          template: './public/index.html',
          filename: './index.html',
        }),
      ],
      performance: { hints: false }
    },
  ]);
};