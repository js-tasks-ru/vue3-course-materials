const path = require('node:path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// Экспортируем конфигурацию
/** @type {import('webpack').Configuration} */
module.exports = (env, args) => {
  // args.mode - определяется опцией --mode=... при запуске webpack
  // Обычно это удобнее, чем использовать переменную окружения - работает кросс-платформенно
  const isProduction = args.mode === 'production' || process.env.NODE_ENV === 'production';

  // Для разделения production/development сборки здесь используется просто условия
  // + сам Webpack по-разному работает в разных режимах
  // Но когда отличия в конфигурации больше - лучше использовать webpack-merge и разделять конфигурацию на базовую
  // и её расширения

  return {
    // Точка входа (старта) собираемого JavaScript приложения - src/main.js
    entry: path.resolve(__dirname, 'src', 'main.js'),

    output: {
      // Приложение будет собрано в директории dist
      path: path.resolve(__dirname, 'dist'),
      // Имя файла будет сгенерировано из имени модуля и хэша файла для инвалидации кэширования при обновлениях
      filename: '[name].[contenthash:6].js',
      chunkFilename: '[name].[contenthash:6].js',
      // Чистим директорию dist при сборке, чтобы не оставалось случайно мусора от старой сборки
      clean: true,
    },

    // Добавляем SourceMap. Теперь в браузере в инструментах отладки видно весь исходный код, и можно отлаживать по нему
    devtool: 'source-map',

    module: {
      // Список правил сборки
      rules: [
        {
          // Все .vue файлы (SFC, одно-файловые компоненты Vue) будут собираться через vue-loader
          // Компилирует .vue файл в модуль с объектом (Vue компонентом),
          // в который добавляется скомпилированный шаблон и всё для инкапсуляции стилей
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
          // postcss-loader прогоняет CSS через postcss
          // css-loader позволит импортировать CSS модули в приложении
          // style-loader внедрит их в страницу из JS бандла (для дева)
          // mini-css-extract-plugin выделяет стили в отдельные css файлы (для прода)
          test: /\.css$/,
          // Используем oneOf, чтобы включить css modules только для SFC <style module>
          oneOf: [
            // Только <style module>
            {
              resourceQuery: /module/,
              use: [
                // На production используем MiniCssExtractPlugin, чтобы выделять CSS модули в отдельный css файлы при сборке
                // На development подгружаем стили из JS модулей через style-loader
                isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
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
                'postcss-loader',
              ],
            },
            // Остальные стили
            {
              use: [isProduction ? MiniCssExtractPlugin.loader : 'style-loader', 'css-loader', 'postcss-loader'],
            },
          ],
        },
        // Ресурсы (файлы)
        // В Webpack 4 использовали url-loader и file-loader
        // Но в Webpack 5 можно указывать тип asset
        // Импорт большого файла превратится в импорт пути до файла в собранном приложении
        // Импорт маленького файла превратится в inline data: ссылку для экономии на запросах
        {
          // Картинки
          test: /\.(svg|png|jpe?g|webp|gif)$/,
          type: 'asset',
          generator: {
            filename: 'images/[name].[contenthash:6][ext][query]',
          },
        },
        {
          // Шрифты
          test: /\.(woff2?|ttf|eot)$/,
          type: 'asset/resource',
          generator: {
            filename: 'fonts/[name].[contenthash:6][ext][query]',
          },
        },
      ],
    },

    optimization: {
      // Разделяем сборку на части
      splitChunks: {
        cacheGroups: {
          // Выделяем сторонние библиотеки в отдельный модуль
          vendors: {
            name: 'vendors',
            test: /[\\/]node_modules[\\/]/,
            priority: -10,
            chunks: 'initial',
          },
        },
      },
    },

    plugins: [
      // Плагин, который применит к <script> и <style> частям vue файлов соответствующие их lang лоадеры (js, css)
      new VueLoaderPlugin(),

      // Плагин выделяет их в отдельные CSS файлы
      ...(
        isProduction ?
          [new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
          })] : []
      ),

      // Плагин возьмёт html файл, и перенесёт его в dist, внедрив туда все необходимые подключения: стили, JS файлы и т.д.
      // Можно также встраивать разные переменные, например, TITLE
      new HtmlWebpackPlugin({
        template: 'src/index.html',
      }),
    ],
  };
};
