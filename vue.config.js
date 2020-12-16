module.exports = {
    lintOnSave: false,
    css:{
      loaderOptions: {
        sass: {
          prependData: '@import "~@/assets/css/common/common.scss";'
        }
      }
    },
    chainWebpack: function(config){
      config.module
          .rule('md')
          .test(/\.md$/)
          .use('html-loader')
          .loader('html-loader')
          .end()
          .use('markdown-loaderr')
          .loader('markdown-loader')
          .end()
    }
}