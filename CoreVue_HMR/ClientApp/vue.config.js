module.exports = {
  outputDir: '../wwwroot/',
  css: {
    loaderOptions: {
      // 設置 scss 公用變量文件
      sass: {
        prependData: `@import '~@/assets/style/public.scss';`
      }
    }
  }
}
