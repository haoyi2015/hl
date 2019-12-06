## 使用express提供API服务

在/app.js中导入本API接口文件配置文件

```javascript
    app.use('/dev', require('../devApiRouter')) // index.js
```


## 操作执行

进入nodeService

1.npm/cnpm install

2.npm install -g pm2

3.pm2 start app.js              # 启动app.js应用程序

4.pm2 stop all                  # 停止all服务


## pm2启动命令

pm2 start server.js  --name dev-api