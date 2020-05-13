module.exports = {
  publicPath:process.env.NODE_ENV=="production"?"./":"/",
  devServer: {
    open: true,
    overlay: {
      warnings: false,
      errors: true
    },
    proxy: {
      '^/api': {
        // target: 'http://192.160.0.200', //内网
        target:'http://bufan.cloud',
        changeOrigin: true,
        pathRewrite: {}
      }
    }
  }
}
