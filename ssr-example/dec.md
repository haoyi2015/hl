# 服务端渲染

> A 创建 vue create ssr-example

## Build Setup

``` bash
# install dependencies
npm install & yarn

# serve with hot reload at localhost:8080
npm serve & yarn serve

# build for production with minification
npm run build & yarn run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test

# ssr 安装包  进行SSR改造
3.1 安装需要的包

安装 vue-server-renderer
安装 lodash.merge
安装 webpack-node-externals
安装 cross-env

npm install vue-server-renderer lodash.merge webpack-node-externals cross-env --registry=https://registry.npm.taobao.org --save-dev

需要安装koa2


重要

第一步  在 src 目录下新增一个 index.temp.html
第二步  在src目录下新建两个文件，一个entry-client.js 仅运行于浏览器 一个entry-server.js
第三步  修改main.js

#需要一个服务端server.js
```