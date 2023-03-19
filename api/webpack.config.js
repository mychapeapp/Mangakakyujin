const path = require("path");

module.exports = {
  entry: "./src/index.ts",
  target: "node",
  mode: "production",
  devtool: "source-map", // 追記
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.js$/,
        use: ["source-map-loader"],
        enforce: "pre",
        include: [
          // expressのパスを追加
          path.resolve(__dirname, "node_modules/express"),
        ],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  output: {
    filename: "bundle.js",
    //charset: "utf-8",
    path: path.resolve(__dirname, "dist"),
  },
};
