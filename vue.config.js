module.exports = {
    lintOnSave: false,
    css:{
        loaderOptions: {
          sass: {
            prependData: '@import "~@/assets/css/common/common.scss";'
          }
        }
    }
}