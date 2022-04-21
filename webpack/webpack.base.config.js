const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
module.exports = () => {
    return merge([
        {
            module: {
                rules: [
                    {
                        test: /\.js|jsx|ts$/,
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
                        test: /\.scss$/i,
                        use: ["style-loader", "css-loader"],
                    },
                    {
                        test: /\.(css|scss)$/,
                        use: ["style-loader", "css-loader"],
                    },
                    {
                        test: /\.min\.css$/i,
                        use: ['style-loader', 'css-loader'],
                    },
                    {
                        test: /\.(png|svg|jpg|jpeg|gif|ico)$/i,
                        type: 'asset/inline',
                    }
                ],
            },
            plugins: [
                new HtmlWebpackPlugin({
                    template: './public/index.html',
                    filename: './index.html',
                }),
            ],
            performance: { hints: false },
            devServer: { static: [path.join(__dirname, "src"), path.join(__dirname, "public")], historyApiFallback: true },
            entry: './src/index.js',
            output: {
                //  filename: 'bundle.js',
                path: path.resolve(__dirname, 'dist'),
            },
        },
    ]);
};