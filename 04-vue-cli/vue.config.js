module.exports = {
  // Не используем eslint-loader
  // Не линтим проект по время сборки, линтим только отдельной командой
  lintOnSave: false,

  // Настройка сервера разработки
  devServer: {
    // Отключает проверку хоста (что приложение открывается под тем же хостом, под которым запущен дев сервер.
    // Актуально, если приложение затем открывается под другим доменом,
    // например, в разных песочниках (replit.com), HTTP туннеле и т.д.
    // где приложение проксируется на домен.
    disableHostCheck: true,

    // Настройка проксирование запросов
    proxy: {
      // Проксируем все запросы, которые уходят на API_URL
      [process.env.VUE_APP_API_URL]: {
        // Проксируем на API_PROXY_TARGET -
        target: process.env.API_PROXY_TARGET,
        // Подменяем origin, чтобы сервер не считал запрос кросс-доменным
        changeOrigin: true,
      },
    },
  },
};
