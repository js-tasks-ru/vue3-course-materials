const path = require('path');
const { defineConfig } = require('@vue/cli-service');
const PrerenderSPAPlugin = require('prerender-spa-plugin');
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer;

module.exports = defineConfig({
  devServer: {
    disableHostCheck: true,
    proxy: {
      [process.env.VUE_APP_API_URL]: {
        target: process.env.API_PROXY_TARGET,
        changeOrigin: true,
      },
    },
  },

  configureWebpack: process.env.NODE_ENV === 'production' ? {
    plugins: [
      new PrerenderSPAPlugin({
        staticDir: path.join(__dirname, 'dist'),
        outputDir: path.join(__dirname, 'dist/prerendered'),
        routes: ['/meetups'],
        renderer: new Renderer({
          // Для демонстрации
          headless: false,
          // Как определить, что рендеринг закончился
          // Найдём элемент
          renderAfterElementExists: '.meetups-list',
        }),
      })
    ]
  } : {},
});
