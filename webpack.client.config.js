const path = require("path");
// const NodemonPlugin = require("nodemon-webpack-plugin");
// const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  // building for browser
  target: "web",
  entry: "./src/client/index.js",
  output: {
    filename: "clientBundle.js",
    path: path.resolve(__dirname, "public"),
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "@babel/preset-env",
                {
                  targets: {
                    esmodules: true,
                  },
                },
              ],
              "@babel/preset-react",
            ],
            plugins: [
              [
                "babel-plugin-styled-components",
                {
                  ssr: true,
                },
              ],
            ],
          },
        },
      },
      {
        test: /\.css$/i,
        exclude: /node_modules/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              modules: true,
            },
          },
        ],
      },
    ],
  },
  // devServer: {
  //   static: {
  //     directory: path.join(__dirname, "public"),
  //   },
  //   compress: true,
  //   port: 9000,
  // },
  // plugins: [
  //   new HtmlWebpackPlugin({
  //     inject: true,
  //     template: "./public/index.html",
  //   }),
  // ],
  // plugins: [new NodemonPlugin()],
};
