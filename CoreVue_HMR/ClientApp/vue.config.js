// 拼接路径
const resolve = dir => require('path').join(__dirname, dir)

// 基础路径 注意发布之前要先修改这里
let baseUrl = process.env.NODE_ENV === 'production' ? '/d2-admin-pm/' : '/'

module.exports = {
  outputDir: '../wwwroot/',
  publicPath: baseUrl, // 根据你的实际情况更改这里
  lintOnSave: false,
  devServer: {
    publicPath: baseUrl // 和 baseUrl 保持一致
  },
  css: {
    loaderOptions: {
      // 设置 scss 公用变量文件
      sass: {
        data: `@import '~@/assets/style/public.scss';`
      }
    }
  },
  // 默认设置: https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-service/lib/config/base.js
  chainWebpack: config => {
    // 解决 cli3 热更新失效 https://github.com/vuejs/vue-cli/issues/1559
    config.resolve.symlinks(true)
    // i18n
    config.module
      .rule('i18n')
      .resourceQuery(/blockType=i18n/)
      .use('i18n')
      .loader('@kazupon/vue-i18n-loader')
      .end()
    // 重新设置 alias
    config.resolve.alias
      .set('@', resolve('src'))
    // babel-polyfill 加入 entry
    const entry = config.entry('app')
    entry
      .add('babel-polyfill')
      .end()
  }
}
