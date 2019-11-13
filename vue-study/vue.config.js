// vue.config.js
module.exports = {
    baseUrl: '/',
    outputDir: 'dist', // 打包的目录
    lintOnSave: false, // 在保存时校验格式
    productionSourceMap: false, // 生产环境是否生成 SourceMap
    devServer: {
      open: true, // 启动服务后是否打开浏览器
    //   host: '0.0.0.0',
    //   port: 8080, // 服务端口
      https: false,
      hotOnly: false,
      proxy: null, // 设置代理
      before: app => {}
    },
     //允许对内部的 webpack 配置进行更细粒度的修改。
  chainWebpack: (config) => {
    //命名 
    config.resolve.alias
    //   .set('SRC', resolve('src'))
    //   .set('ASSET', resolve('src/assets'))
    //   .set('VIEW', resolve('src/components/page'))
    //   .set('COMPONENT', resolve('src/components/common'))
    //   .set('UTIL', resolve('src/utils'))
    //   .set('SERVICE', resolve('src/services'));
    // //打包文件带hash
    // config.output.filename('[name].[hash].js').end(); 

    //为了补删除换行而加的配置
    config.module
      // .rule("vue")
      // .use("vue-loader")
      // .loader("vue-loader")
      .tap(options => {
        // modify the options...
        options.compilerOptions.preserveWhitespace = true;
        return options;
      });
  },
  }