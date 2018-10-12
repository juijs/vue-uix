const path = require('path');
const nodeExternals = require('webpack-node-externals');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = (theme) => {
    return {
        mode: 'production',
        entry: {
            'vue-uix': path.resolve(__dirname, 'bundles', `production.${theme}.js`)
        },
        externals: {
            jquery: 'jQuery',
            vue: 'vue'
        },
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: `[name].${theme}.js`
        },
        optimization: {
            minimizer: [
                new UglifyJsPlugin()
            ]
        },
        module: {
            rules: [{
                test: /\.js$/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: [ 'env' ]
                    }
                }]
            }, {
                test: /\.vue$/,
                loader: 'vue-loader'
            }, {
                test: /\.less$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'less-loader'
                ]
            }, {
                test: /\.(ttf|eot|svg|woff|png|gif)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 1024 * 10
                        }
                    }
                ]
            }]
        },
        plugins: [
            new VueLoaderPlugin(),
            new MiniCssExtractPlugin({
                filename: `[name].${theme}.css`,
            }),
            new BundleAnalyzerPlugin()
        ],
        resolve: {
            extensions: ['*', '.js', '.vue', '.json', '.less']
        }
    }
}