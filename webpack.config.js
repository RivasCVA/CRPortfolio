const path = require("path");

module.exports = {
    mode: "development",
    entry: "./src/scripts/ts/index.ts",
    output: {
        path: path.resolve(__dirname, "public"),
        filename: "index.js"
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js", ".json"],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: ["ts-loader"],
                exclude: /node_modules/ 
            }
        ]
    }
};