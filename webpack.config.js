const path = require('path')
const webpack = require('webpack')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = env => {  
    return {
        entry: {
            app: path.join(__dirname, 'src/App.jsx')
        },
        resolve: {
            extensions: ['.js', '.jsx'],
            alias: {
                assets: path.resolve(__dirname, 'src/assets/'),
                components: path.resolve(__dirname, 'src/components/')
            }
        },
        output: {
            path: path.join(__dirname, 'dist'),
            filename: 'js/bundle.js'
        },
        module: {
            rules: [
                {
                    test: /\.jsx?$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader'
                    }
                },
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: [
                        { loader: 'babel-loader' },
                        { loader: 'eslint-loader' }
                    ]
                },
                {
                    test: /\.html$/,
                    use: [
                        {
                            loader: 'html-loader'
                        }
                    ]
                },
                {
                    test: /\.less$/,
                    use: [
                        {
                            loader: MiniCssExtractPlugin.loader,
                            options: { publicPath: '../' }
                        },
                        'css-loader',
                        'less-loader'
                    ]
                },
                {
                    test: /\.css$/,
                    use: [
                        {
                            loader: MiniCssExtractPlugin.loader,
                            options: { publicPath: '../' }
                        },
                        'css-loader'
                    ]
                },
                {
                    test: /\.(jpg|jpeg|gif|png)$/,
                    exclude: /node_modules/,
                    loader: 'url-loader?limit=1024&name=images/[hash].[ext]'
                },
                {
                    test: /\.(otf|eot|ttf|woff|woff2|svg)$/,
                    exclude: /node_modules/,
                    loader: 'url-loader?limit=1024&name=fonts/[hash].[ext]'
                }
            ]
        },
        plugins: [
            new HtmlWebPackPlugin({
                template: path.resolve(__dirname, 'src/index.ejs'),
                title: 'Load',
                favicon: path.resolve(__dirname, 'src/assets/load.png'),
                hash: true
            }),
            new MiniCssExtractPlugin({
                filename: 'css/style.css'
            })
        ]
    }
}
