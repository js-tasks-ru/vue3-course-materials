/*
  Модуль сервера приложения.
  Теперь уже отдавать страницу в браузер не так просто.
  Вместо статичного сервера, требуется полноценный сервер с рендерингом приложения и формированием HTML
*/

const fs = require('fs');
const path = require('path');
const express = require('express');
const { createServer } = require('vite');

// Инициализация SSR в Express приложении
async function initSsr(app) {
  return process.env.NODE_ENV === 'production' ? initProductionSsr(app) : initDevelopmentSsr(app);
}

// Инициализация SSR на Production
async function initProductionSsr(app) {
  // Используем стандартный сервер статики, исключая index.html файл (он генерируется сервером)
  app.use(express.static('./dist/client', { index: false }));

  // Для рендеринга используем СОБРАННОЕ Vue приложения в серверной версии
  const { render } = require('./dist/server/entry-server.js');
  // Используем собранный index.html в качестве шаблона
  const template = fs.readFileSync(path.resolve(__dirname, 'dist/client/index.html'), 'utf-8');

  // Возвращаем функцию рендеринга Vue приложения и шаблон
  return {
    render,
    template,
  };
}

// Инициализация SSR на Development
async function initDevelopmentSsr(app) {
  // Создаём Vite сервер разработки
  const { createServer } = require('vite');
  const vite = await createServer({
    server: { middlewareMode: 'ssr' },
  });
  // ... и подключаем его как посредника в нашем сервере.
  // Теперь запросы к статике пойдут, как в обычной разработке с Vite - через Vite Dev Server
  app.use(vite.middlewares);

  // Получаем шаблон и обрабатываем с Vite
  let template = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf-8');
  template = await vite.transformIndexHtml('/', template);

  // Загружаем модуль исходный модуль серверной версии Vue приложения также через Vite
  const { render } = await vite.ssrLoadModule('/src/entry-server.js');

  // Возвращаем функцию рендеринга Vue приложения, шаблон и Vite посредник для разработки
  return {
    template,
    render,
    vite,
  };
}

async function startServer() {
  // Express - простая и традиционная библиотека для разработки сервера на Node.js
  const app = express();

  // Инициализируем SSR
  const { template, render, vite } = await initSsr(app);

  // Одинаково обрабатываем любой запрос к страницам
  app.use('*', async (req, res, next) => {
    try {
      // Рендерим Vue приложение
      const { appHtml, initialState } = await render();

      // Вставляем в HTML срендеренное Vue приложение и данные
      const html = template
        .replace(`<!--ssr-outlet-->`, appHtml)
        .replace('<!--initial-state-->', `<script>window.INITIAL_STATE = ${JSON.stringify(initialState)}</script>`);
      // Возвращаем страницу
      res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
    } catch (e) {
      // Отлавливаем ошибки через Vite
      vite.ssrFixStacktrace(e);
      next(e);
    }
  });

  // Запускаем сервер
  return app.listen(3000);
}

// Запускаемся!
startServer().then(() => {
  console.log('App is listening on http://localhost:3000');
});

// https://vitejs.dev/guide/ssr.html
