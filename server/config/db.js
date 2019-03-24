var db = require('knex')({
  client: 'mysql',
  debug:true,
  log: {
    warn(message) {
    },
    error(message) {
    },
    deprecate(message) {
    },
    debug(message) {
      console.log(message)
    },
  },
  connection: {
    host : '127.0.0.1', // IP地址
    user : 'hh',
    // 数据库用户名
     password : '123456', // 数据库密码
     database : 'mtuan' // 连接到的数据库的名字
    }

});
module.exports = { db }

