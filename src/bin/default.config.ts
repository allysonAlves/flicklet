const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
import { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { WebpackConfiguration } from 'webpack-dev-server';

interface Configuration extends WebpackConfiguration {
    devServer?: DevServerConfiguration;
}

const config: Configuration = {
    entry: './index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'temp'),
        publicPath: '/'
    },
    resolve: {
        alias: {
            src: path.resolve(__dirname, 'src/'),
        },
        extensions: ['.ts', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.ts$/i,
                exclude: /node_modules/,
                use: 'ts-loader',
            },
            {
                test: /\.module\.(css|scss|sass)$/i,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName: '[name]__[local]__[hash:base64:5]'
                            }
                        }
                    },
                    'sass-loader'
                ]
            },
            {
                test: /\.(css|scss|sass)$/i,
                exclude: /\.module\.(css|scss|sass)$/i,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(jpeg|jpg|png|svg|gif)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/[name][ext]',
                },
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './index.html',
        })
    ],
    devServer: {
        static: './temp',
        hot: true,
        allowedHosts: 'all',
        historyApiFallback: {
            index: '/'
        },
    }
};

export default config;
