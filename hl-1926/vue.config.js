module.exports = {
    // baseUrl: process.env.NODE_ENV === 'production'
    //   ? '//your_url'
    //   : '/',
    publicPath:'/h5',//打包路径
    outputDir: 'dist',
  
    assetsDir: 'static',
  
    filenameHashing: true,

    pages: {//pages 里配置的路径和文件名在你的文档目录必须存在 否则启动服务会报错
        index: {//除了 entry 之外都是可选的
            entry: 'src/main.js',// page 的入口,每个“page”应该有一个对应的 JavaScript 入口文件
            template: 'public/index.html',// 模板来源
            filename: 'index.html',// 在 dist/index.html 的输出
            title: 'Index Page',// 当使用 title 选项时,在 template 中使用：<title><%= htmlWebpackPlugin.options.title %></title>
            chunks: ['chunk-vendors', 'chunk-common', 'index'] // 在这个页面中包含的块，默认情况下会包含,提取出来的通用 chunk 和 vendor chunk
        },
        //subpage: 'src/subpage/main.js'//官方解释：当使用只有入口的字符串格式时,模板会被推导为'public/subpage.html',若找不到就回退到'public/index.html',输出文件名会被推导为'subpage.html'
    },
  
    // When building in multi-pages mode, the webpack config will contain different plugins
    // (there will be multiple instances of html-webpack-plugin and preload-webpack-plugin).
    // Make sure to run vue inspect if you are trying to modify the options for those plugins.
  
    // eslint-loader 是否在保存的时候检查
    lintOnSave: false,
  
    // 是否使用包含运行时编译器的Vue核心的构建
    runtimeCompiler: false,
  
    // 默认情况下 babel-loader 忽略其中的所有文件 node_modules
    transpileDependencies: [],
  
    // 生产环境 sourceMap
    productionSourceMap: false,
  
    // cors 相关 https://jakearchibald.com/2017/es-modules-in-browsers/#always-cors
    // corsUseCredentials: false,
    // webpack 配置，键值对象时会合并配置，为方法时会改写配置
    // https://cli.vuejs.org/guide/webpack.html#simple-configuration
    configureWebpack: (config) => {
    },
  
    // webpack 链接 API，用于生成和修改 webapck 配置
    // https://github.com/mozilla-neutrino/webpack-chain
    chainWebpack: (config) => {

       // 多页面配置，为js添加hash
      config.output.chunkFilename(`js/[name].[chunkhash:8].js`)
      // 因为是多页面，所以取消 chunks，每个页面只对应一个单独的 JS / CSS
      config.optimization
        .splitChunks({
          cacheGroups: {}
        });
  
      // 'src/lib' 目录下为外部库文件，不参与 eslint 检测
      config.module
        .rule('eslint')
        .exclude
        //.add('/Users/maybexia/Downloads/FE/community_built-in/src/lib')
        .end()
    },
  
    // 配置高于chainWebpack中关于 css loader 的配置
    css: {
      // 是否开启支持 foo.module.css 样式
      modules: false,
  
      // 是否使用 css 分离插件 ExtractTextPlugin，采用独立样式文件载入，不采用 <style> 方式内联至 html 文件中
      extract: false,
  
      // 是否构建样式地图，false 将提高构建速度
      sourceMap: false,
  
      // css预设器配置项
      loaderOptions: {
        css: {
          // options here will be passed to css-loader
        },
  
        postcss: {
          // options here will be passed to postcss-loader
        }
      }
    },
  
    // All options for webpack-dev-server are supported
    // https://webpack.js.org/configuration/dev-server/
    devServer: {
      open: false,
  
      host: '',//'127.0.0.1',
  
      port: 8089,
  
      https: false,
  
      hotOnly: false,
  
      proxy: null,
  
      before: app => {
      }
    },
    // 构建时开启多进程处理 babel 编译
    parallel: require('os').cpus().length > 1,
  
    // https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
    pwa: {},
  
    // 第三方插件配置
    pluginOptions: {}
};
  