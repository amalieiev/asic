const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

console.log(path.resolve(__dirname, '../src/index.js'))

module.exports = {
    entry: {
        asic: ['./src/index.js'],
        docs: ['./docs/index.ts'],
        samples: ['./samples/index.ts']
    },
    mode: 'development',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/'
    },
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: [".ts", ".tsx", ".js"]
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
            },
            {
                test: /\.tsx?$/,
                loader: "ts-loader"
            }
        ]
    },
    devServer: {
        contentBase: 'dist',
        port: 5000
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'docs/index.ejs',
            hash: true
        })
    ]
};