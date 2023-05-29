const postcssPresetEnv = require('postcss-preset-env');

/** @type {import('postcss-load-config').Config} */
module.exports = {
  plugins: [
    require('autoprefixer'),
    postcssPresetEnv(),
  ],
};
