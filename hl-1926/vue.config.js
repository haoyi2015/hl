const path = require('path');
const SkeletonWebpackPlugin = require('vue-skeleton-webpack-plugin');

module.exports = {
  configureWebpack: (config)=>{
    config.plugins.push(new SkeletonWebpackPlugin({
      webpackConfig: {
        entry: {
          app: path.join(__dirname, './src/Skeleton.ts'),
        },
      },
      minimize: true,
      quiet: true,
    })) 
  },
  // css相关配置
  css: {
    // 是否使用css分离插件 ExtractTextPlugin
    extract: true,
    // 开启 CSS source maps?
    sourceMap: false,
    // 启用 CSS modules for all css / pre-processor files.
    modules: false
  },
  plugins: [
    // 热替换，热替换不是刷新
    //new webpack.HotModuleReplacementPlugin()
  ],
  // 提取公共代码
  optimization: {},
  devServer: {
    contentBase: './dist',
    host: 'localhost',      // 默认是localhost
    port: 3000,             // 端口
    open: true,             // 自动打开浏览器
    hot: true               // 开启热更新
  }
};