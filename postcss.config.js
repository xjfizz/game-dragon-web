// postcss.config.js
// 用 vite 创建项目，配置 postcss 需要使用 post.config.js，之前使用的 .postcssrc.js 已经被抛弃
// 具体配置可以去 postcss-pxtorem 仓库看看文档


let rootValue = 192
// let rootValue1 = window.sessionStorage.getItem('deviceType')


module.exports = {
  "plugins": {
    "postcss-pxtorem": {
      rootValue: rootValue,  // 192  75
      propList: ['*'],
      selectorBlackList: ['.norem']
    }
  }
}