const { defineConfig } = require('@vue/cli-service');
const path = require('path');
module.exports = defineConfig({
  transpileDependencies: true,

  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        path.join(__dirname, './src/assets/styles/variables.less'),
        path.join(__dirname, './src/assets/styles/mixins.less')
      ]
    }
  },
  //跨越请求
  devServer: {
    proxy: {
      '/api': {
        target:"http://you.163.com",
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': ''
        }
      },
   
  
  '/foo': {
    target:'http://localhost:7788',
    changeOrigin: true,
    ws: true,
    pathRewrite: {
      '^/foo': ''
    }
  }
  }
}
})
