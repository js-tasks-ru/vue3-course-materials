module.exports = {
  root: true,

  ignorePatterns: ['**/vendor/*.js'],

  env: {
    browser: true,
    node: true,
    es2021: true,
    'vue/setup-compiler-macros': true,
  },

  extends: ['plugin:vue/vue3-essential', 'eslint:recommended', 'prettier'],

  parserOptions: {
    parser: 'espree',
    ecmaVersion: 2021,
    ecmaFeatures: {
      jsx: true,
    },
  },

  rules: {
    // Basic
    'no-unused-vars': 'off',
    'no-console': 'off',
    'no-debugger': 'off',
    'no-var': 'error',
    // Vue / Priority A: Essential Essential
    'vue/no-unused-components': 'off',
    'vue/valid-template-root': 'off',
    // Vue / Priority B: Strongly Recommended
    'vue/v-bind-style': 'error',
    'vue/v-on-style': 'error',
    'vue/v-slot-style': 'error',
    'vue/require-explicit-emits': 'error',
    'vue/mustache-interpolation-spacing': 'warn',
    'vue/no-template-shadow': 'warn',
    // Vue / Priority C: Recommended
    'vue/attributes-order': 'warn',
    'vue/order-in-components': 'warn',
    'vue/new-line-between-multi-line-property': 'warn',
    'vue/this-in-template': 'error',
    // Vue / Uncategorized
    'vue/match-component-file-name': 'error',
    'vue/no-duplicate-attr-inheritance': 'error',
    'vue/no-restricted-call-after-await': 'error',
    'vue/no-useless-v-bind': 'error',
    'vue/padding-line-between-blocks': 'error',
    'vue/v-for-delimiter-style': 'error',
    'vue/valid-next-tick': 'error',
  },

  overrides: [
    {
      files: ['**/__tests__/*.{j,t}s?(x)', '**/tests/unit/**/*.spec.{j,t}s?(x)'],
      env: {
        jest: true,
      },
    },
  ],
};
