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
};
