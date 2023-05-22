module.exports = {
  devServer: {
    disableHostCheck: true,

    proxy: {
      [process.env.VUE_APP_API_URL]: {
        target: process.env.API_PROXY_TARGET,
        changeOrigin: true,
      },
    },
  },
};
