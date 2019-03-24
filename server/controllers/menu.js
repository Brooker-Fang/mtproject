const util = require('../util/util')
const MenuModel = require('../models/menu')

class MenuController {
  /**
  * @author : fhh
  * @description :通过类型 获取菜单列表
  * @param : type
  */
  static async getMenuByType (ctx){
    //console.log(next)
    const {type} = ctx.query
    try {
      const res = await MenuModel.getMenuByType(type)
      ctx.body =  util.success('success',res)
    } catch (e) {
      console.log(e)
      ctx.body = util.error('网络出错')
    }

  }
}
module.exports = MenuController
