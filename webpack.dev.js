const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = () => {
    return {
        mode: 'development',
        entry: {
            vendors: [ 'vue', 'juijs-ui' ],
            app: path.resolve(__dirname, 'bundles', 'index.js'),
        },
        output: {
            path: path.resolve(__dirname, 'out'),
            filename: '[name].js'
        },
        optimization: {
            runtimeChunk: 'single',
            splitChunks: {
                chunks: 'all',
                cacheGroups: {
                    vendors: {
                        test: /[\\/]node_modules[\\/]/,
                        name: 'vendors',
                        enforce: true,
                        chunks: 'all'
                    }
                }
            }
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
                    'vue-style-loader',
                    'css-loader',
                    'less-loader'
                ]
            }, {
                test: /\.(ttf|eot|svg|woff|png|gif)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 1024 * 1024
                        }
                    }
                ]
            }]
        },
        plugins: [
            new VueLoaderPlugin(),
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, 'bundles', 'index.html'),
                filename: path.resolve(__dirname, 'out', 'index.html')
            })
            // , new BundleAnalyzerPlugin()
        ],
        resolve: {
            alias: {
                'vue$': 'vue/dist/vue.esm.js',
                '@uix': path.resolve(__dirname, 'src')
            },
            extensions: ['*', '.js', '.vue', '.json', '.less']
        },
        devServer: {
            port: 3000,
            inline: true,
            hot: false,
            open: true,
            contentBase: path.resolve(__dirname, 'node_modules/juijs-ui/dist'),
            watchContentBase: true
        }
    }
}