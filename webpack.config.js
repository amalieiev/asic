var path = require("path");
module.exports = {
    devtool: 'cheap-module-eval-source-map',

    entry: {
        asic: ["./src/index.js"],
        sandbox: ['./src/sandbox.js']
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        publicPath: "/assets/",
        filename: "[name].js"
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },

    devServer: {
        port: 4000,
        historyApiFallback: true,
        watchOptions: {
            aggregateTimeout: 300,
            poll: 1000
        }
    }
};