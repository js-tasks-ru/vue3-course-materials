const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  // Не используем eslint-loader
  // Не линтим проект по время сборки, линтим только отдельной командой и через IDE
  // Так сборка будет быстрее
  lintOnSave: false,

  // Настройка сервера разработки
  devServer: {
    // Настройка проксирование запросов
    proxy: {
      // Проксируем все запросы к API - убираем CORS на development
      '/api': {
        target: process.env.API_PROXY_TARGET ?? 'https://course-vue.javascript.ru',
      },
    },
  },
});
