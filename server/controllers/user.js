//const MD5 = require('md5-node')
const util = require('../util/util')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const secret = require('../config/secret')
const userModel = require('../models/user')

class UserController {
  /**
  * @author : fhh
  * @description : 创建用户
  * @param : ctx
  */
  static async addUser (ctx){
    const user = ctx.request.body
    if (user.userName && user.password) {
      // 查询用户是否存在
      const isUserExist = await userModel.findUserByName(user.userName)
      console.log(isUserExist)
      if (isUserExist.length > 0) {
        // 用户名已存在
        ctx.response.status = 402;
        ctx.body = util.error('用户名已存在')
      } else {
        // 加密密码
        const salt = bcrypt.genSaltSync()
        const hash = bcrypt.hashSync(user.password,salt)
        user.password = hash
        // 添加用户
        await userModel.addUser(user)
        // 获取新用户
        const newuser = await userModel.findUserByName(user.userName)
        // 签发token
        const usertoken = {
          username: newuser.username,
          id: newuser.id
        }
        // 存储token 有效期1小时
        const token =  jwt.sign(usertoken,secret.sign,{expiresIn: '1h'})
        newuser[0].token = token

        ctx.response.status = 200;

        ctx.body = util.success('注册成功',newuser[0])

      }
    } else {
      ctx.response.status = 401;
      ctx.body = util.error('用户名或密码不能为空')
    }
  }

  /**
  * @author : fhh
  * @description : 通过用户名获取用户信息
  * @param : username
  */
  static async findUserByName (ctx) {
    let {name} = ctx.query || ""

    try {
      const res = await userModel.findUserByName(name)
      if (res){
        ctx.body = util.success('success',res)
      } else {
        ctx.body = util.error('找不到用户信息')
      }
    } catch (e){
      console.log(e)
      ctx.body = util.error('找不到用户信息')
    }


  }
}

module.exports = UserController
