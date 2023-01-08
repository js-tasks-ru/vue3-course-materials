module.exports = {
  root: true,

  env: {
    browser: true,
    es2022: true,
    'vue/setup-compiler-macros': true,
  },

  extends: ['plugin:vue/vue3-essential', 'eslint:recommended', 'prettier'],

  parser: 'vue-eslint-parser',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2022,
    ecmaFeatures: {
      jsx: true,
    },
  },
};
