const path = require('path');

module.exports = {
    entry: {
        main: ['./src/index.js'],
        samples: [
            './samples/Events.js',
            './samples/Interpolation.js',
            './samples/Loops.js',
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
            }
        ]
    },
    devServer: {
        contentBase: 'dist',
        port: 5000
    }
};