const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        main: ['./src/index.js'],
        docs: [
            './docs/Header.js',
            './docs/Footer.js'
        ],
        samples: [
            './samples/Events.js',
            './samples/ComplexComponent.js',
            './samples/Loops.js',
            './samples/InnerLoops.js',
            './samples/SimpleText.js',
            './samples/Timer.js',
        ]
    },
    mode: 'development',
    output: {
        filename: '[name]-bundle.js',
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        plugins: ['transform-decorators-legacy' ],
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.css$/,
                loaders: 'style-loader!css-loader'
            }
        ]
    },
    devServer: {
        contentBase: 'dist',
        port: 5500
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'docs/index.ejs',
            hash: true
        })
    ]
};