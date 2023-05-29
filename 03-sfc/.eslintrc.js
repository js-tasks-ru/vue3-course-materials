module.exports = {
  root: true,

  // env даёт ESLint понять, какие имена (функции, объекты) есть в области видимости
  // например, window в браузере
  env: {
    node: true,
    browser: true,
    es2022: true,
    // SFC <script setup>
    'vue/setup-compiler-macros': true,
  },

  extends: [
    // Стандартные рекомендуемые ESLint правила
    'eslint:recommended',
    // Плагин для работы с Vue 3 - парсинга и набор правил,
    'plugin:vue/vue3-essential',
    // Плагин, отключающий правила форматирования, которым будет заниматься prettier
    'prettier',
  ],

  // Указываем парсер, чтобы ESLint смог понимать код с его синтаксисом
  parserOptions: {
    // Транспайлер - babel. Его и используем для парсинга
    parser: '@babel/eslint-parser',
    ecmaVersion: 2022,
  },

  // Можно включать, отключать и настраивать правила
  rules: {
    'vue/require-v-for-key': 'off', // Unknown error in the beginning
  },
};
