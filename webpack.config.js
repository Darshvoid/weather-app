import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";

export default {
  mode: "development",
  plugins: [new HtmlWebpackPlugin({ template: "./src/index.html" })],

  devServer: {
    static: {
      directory: path.join(import.meta.dirname, "src"),
    },
  },
  module: {
    rules: [
      { test: /\.css$/i, use: ["style-loader", "css-loader"] },
      { test: /\.(png|svg|jpg|jpeg|gif)$/i, type: "asset/resource" },
    ],
  },
};
