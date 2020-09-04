const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function(app) {
  app.use(
    createProxyMiddleware('/api', {
      target: 'http://api.map.baidu.com',
      changeOrigin: true,
      pathRewrite: {
        '^/api': ''
      }
    })
  )
}