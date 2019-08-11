const express = require('express');
const router = express.Router();
const api = require('./api');

//发送消息
router.post('/sendTalk', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1')
  api.sendTalks(req, res, next,'sendTalk');
});
//获取所有消息
router.get('/getTalk', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1')
  api.getAllTalks(req, res, next,'getTalk');
});
//根据文章题目获取
router.get('/getwhose', (req, res, next) => {
  api.getValue(req, res, next,'getwhose');
});

module.exports = router;
