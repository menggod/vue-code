module.exports = {
    publicPath: './',
    assetsDir: 'static',
    productionSourceMap: false,
    devServer: {
        open: true,
        host: 'localhost',
        port: 8080,
        https: false,
        proxy: {
            '/api': {
                target: 'http://192.168.15.41:8076',
                changOrigin: true,
                pathRewrite: { '^/api': '' }
            }
        }
    }
}