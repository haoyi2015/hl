var express = require('express');
var bodyParser = require('body-parser');
var app = express();

//设置跨域访问
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

//crm接口包导入
app.use('/dev', require('./devApiRouter'))

var questions = [
	{
		data: 'test',
		num: 12,
		age: 8
	},
	{
		data: 'home',
		num: 98,
		age: 10
	}
];

//get 请求测试接口
app.get('/', function(request, response){
  // 输出 JSON 格式
   data = {
       'index':'index'
   };
   console.log(data);
  //response.end(JSON.stringify(data));
   response.json(data);
});

//get 请求测试接口
app.get('/test', function(request, response){
  // 输出 JSON 格式
   data = {
       'name':'admin',
       'pwd':'123456'
   };
   console.log(data);
  //response.end(JSON.stringify(data));
   response.json(data);
});
 
//创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({ extended: false })

//post 请求测试接口
app.post('/test', urlencodedParser, function(request, response){
   // 输出 JSON 格式
   data = {
       'name':request.body.name,
       'gender':request.body.gender
   };
   console.log(data);
   //response.end(JSON.stringify(data));
   response.json(data);
});

 
var server = app.listen(3000, function(){
	var host = server.address().address;
	var port = server.address().port;
	console.log("address: %s, http://localhost:%d", host, port);
});
