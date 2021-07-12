const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        createProxyMiddleware('/api', {
            target: 'http://localhost:9000',
            changeOrigin: true,
            pathRewrite: { '^/api': '' }
        }),
        createProxyMiddleware('/oms', {
            target: 'http://localhost:8889',
            changeOrigin: true,
            pathRewrite: { '^/oms': '' }
        }),
        createProxyMiddleware('/mock', {
            target: 'http://localhost:4444',
            changeOrigin: true,
            pathRewrite: { '^/mock': '' }
        })
    )
}

