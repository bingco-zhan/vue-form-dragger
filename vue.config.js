module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '/vue-form-dragger/dist/' : '',
    css: {
        loaderOptions: {
            less: {
                globalVars: {
                    hack: `true; @import '~@/assets/style/var.less';`
                }
            }
        }
    }
}
