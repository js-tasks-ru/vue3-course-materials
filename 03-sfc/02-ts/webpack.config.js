const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  // Теперь точка входа - ts файл. Хотя можно смешивать JS и TS файлы, должен быть хотя бы один TS файл,
  entry: path.resolve(__dirname, 'src', 'main.ts'),

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash:8].js',
    chunkFilename: '[name].[contenthash:8].js',
  },

  devtool: 'source-map',

  resolve: {
    extensions: ['.js', '.ts', '.json', '.vue'],
  },

  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    hot: true,
  },

  module: {
    rules: [
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        use: ['vue-loader'],
      },
      {
        // Все ts файлы будут проходить через ts-loader, а после и babel-loader, как js файлы
        // (это не обязательно, если не используются возможность babel, например, jsx)
        test: /\.ts$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
          {
            loader: 'ts-loader',
            options: {
              appendTsSuffixTo: [/\.vue$/],
            },
          },
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },

  plugins: [
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash:8].css',
      chunkFilename: '[name].[contenthash:8].css',
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
  ],
};
