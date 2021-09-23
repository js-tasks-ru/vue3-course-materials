// Webpack работает на NodeJS. Используем в его конфигурации не ES модули, а стандартные для ноды CommonJS модули

const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// Экспортируем конфигурацию
module.exports = {
  // Точка входа (старта) собираемого JavaScript приложения - src/main.js
  entry: path.resolve(__dirname, 'src', 'main.js'),

  // Приложение будет собрано в директории dist, а главный файл будет bundle.js
  output: {
    path: path.resolve(__dirname, 'dist'),
    // Имя файла будет сгенерировано из имени модуля и хэша файла для сброса кэширования при обновлениях
    filename: '[name].[contenthash:8].js',
    chunkFilename: '[name].[contenthash:8].js',
  },

  // Добавляем SourceMap. Теперь в браузере в инструментах отладки видно весь исходный код, и можно отлаживать по нему
  devtool: 'source-map',

  resolve: {
    // Сообщаем, что модули бывают с vue расширением, и их можно импортировать без него расширения
    extensions: ['.js', '.json', '.vue'],
  },

  // Настраиваем Webpack Dev Server
  devServer: {
    // Будет хостить файлы из директории dist, куда мы собираем приложение
    contentBase: path.resolve(__dirname, 'dist'),
    // Включен Hot Module Replacement (Горячая Замена Модулей) для обновления частей приложения без перезагрузки
    hot: true,
  },

  module: {
    // Список правил сборки
    rules: [
      {
        // Все .vue файлы (SFC, одно-файловые компоненты Vue) будут собираться через vue-loader
        // Создаёт Vue компоненты, компилируя шаблон Template в рендер-функцию, и добавляя инкапсуляцию стилей
        test: /\.vue$/,
        exclude: /node_modules/,
        use: ['vue-loader'],
      },
      {
        // Все js файлы будут проходить через babel, приложение будет поддерживаться даже старыми браузерами
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        // css-loader позволит импортировать CSS модули в приложении
        // style-loader внедрит их в страницу после старта приложения
        test: /\.css$/,
        // Используем oneOf, чтобы включить css modules только для SFC <style module>
        oneOf: [
          // Только <style module>
          {
            resourceQuery: /module/,
            use: [
              // Используем MiniCssExtractPlugin, чтобы выделять CSS модули в отдельный css файлы при сборке
              // А не подгружать стили из JS модулей через style-loader
              MiniCssExtractPlugin.loader,
              // 'style-loader',
              {
                loader: 'css-loader',
                options: {
                  // Включаем модули
                  modules: {
                    // В качестве имени класса используем не просто хэш (по-умолчанию), а имя модуля + исходный класс + хэш
                    localIdentName: '[name]__[local]___[hash:base64:5]',
                  },
                },
              },
            ],
          },
          // Остальные стили
          {
            // Используем MiniCssExtractPlugin, чтобы выделять CSS модули в отдельный css файлы при сборке
            // А не подгружать стили из JS модулей через style-loader
            // use: ['style-loader', 'css-loader'],
            use: [MiniCssExtractPlugin.loader, 'css-loader'],
          },
        ],
      },
    ],
  },

  optimization: {
    // Разделяем сборку на части
    splitChunks: {
      cacheGroups: {
        // Выделяем сторонние библиотеки в отдельный модуль
        vendors: {
          name: 'chunk-vendors',
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          chunks: 'initial',
        },
      },
    },
  },

  plugins: [
    // Чистим директорию dist при сборке, чтобы не оставалось случайно мусора от старой сборки
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),

    // Плагин, который применит к <script> и <style> частям vue файлов соответствующие их lang лоадеры (js, css)
    new VueLoaderPlugin(),

    // По умолчанию Webpack с style-loader подключает стили из JS модулей в рантайме
    // Плагин выделяет их в отдельные CSS файлы
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash:8].css',
      chunkFilename: '[name].[contenthash:8].css',
    }),

    // Плагин возьмёт html файл, и перенесёт его в dist, внедрив туда все необходимые подключения: стили, JS файлы и т.д.
    // Можно также встраивать разные переменные, например, TITLE
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
  ],
};
