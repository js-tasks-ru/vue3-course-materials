const prerender = require('prerender');
const server = prerender({
  chromeLocation: process.env.CHROME_PATH,
});
server.start();
// http://localhost:3000/render?url=https://course-vue.javascript.ru
