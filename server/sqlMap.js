var sqlMap = {
  //获取所有消息
  getTalk:'SELECT * FROM wechat',
  //发送消息
  sendTalk: 'INSERT INTO wechat(speaker, sentence) VALUES (?,?)',
  getwhose:'SELECT * FROM wechat WHERE speaker = ?',
};

module.exports = sqlMap;
