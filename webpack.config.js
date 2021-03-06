module.exports = {
    entry: "./index.js",
    output: {
        path: "./dist",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /.js$/,
                loader: "babel-loader",
                exclude: /node_modules/,
                query: {
                    presets: ["es2015", "react", "stage-0"]
                }
            },
            {
                test: /\.css$/,
                loader: "style!css!less"
            }
        ]
    }
};