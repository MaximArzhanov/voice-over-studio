const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: { main: "./src/index.js" },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
    publicPath: "",
  },
  mode: "development",
  devServer: {
    static: path.resolve(__dirname, "./dist"),
    compress: true,
    port: 8080,
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: "/node_modules/",
      },
      {
        test: /\.(png|svg|jpg|gif|woff(2)?|eot|ttf|otf)$/,
        type: "asset/resource",
      },
      {
        test: /\.(mp3|wav|mp4)$/i,
        loader: "file-loader",
        options: {
          name: "[path].[name].[ext]"
        }
      },
      {
        test: /\.(scss|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: { importLoaders: 2 },
          },
          "postcss-loader",
          "sass-loader"
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
      chunks: ['main'],
      inject: "body",
    }),
    new HtmlWebpackPlugin({
      filename: 'sergey_zhukovski.html',
      template: './src/sergey_zhukovski.html',
      chunks: ['main'],
      inject: "body",
    }),
    new HtmlWebpackPlugin({
      filename: 'maria_zvereva.html',
      template: './src/maria_zvereva.html',
      chunks: ['main'],
      inject: "body",
    }),
    new HtmlWebpackPlugin({
      filename: 'mihail_holodov.html',
      template: './src/mihail_holodov.html',
      chunks: ['main'],
      inject: "body",
    }),
    new HtmlWebpackPlugin({
      filename: 'irina_macik.html',
      template: './src/irina_macik.html',
      chunks: ['main'],
      inject: "body",
    }),
    new HtmlWebpackPlugin({
      filename: 'elena_arzhanova.html',
      template: './src/elena_arzhanova.html',
      chunks: ['main'],
      inject: "body",
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(),
  ],
};