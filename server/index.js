const routerApi = require('./router');
const bodyParser = require('body-parser'); // post 数据是需要
const express = require('express');
const app = express();

app.use(bodyParser.json());

// 后端api路由
app.use('/wechat', routerApi);

// 监听端口

  var http = require('http').createServer(app); 
http.listen(80,'0.0.0.0'); 
console.log('success listen at port:80......');
