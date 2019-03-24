const {db}  = require('../config/db')

/**
* @author : fhh
* @description :
* @param :  菜单表
*/
class MenuModel {

  constructor (){
    this.table = 'menu'
  }
  /**
  * @author : fhh
  * @description :
  * @param : 菜单表
  */
  static getTable (){
    return 'menu'
  }
  /**
  * @author : fhh
  * @description :通过类型 获取菜单列表
  * @param :  type
  */
  static async getMenuByType (type) {
    // 字段
    const field = ['type','title','detail']
    // 如果参数为空，查询所有菜单
    if (typeof type == 'undefined' || type == "") {
      return await db.select(field).from(MenuModel.getTable())
    } else {
      return await db.select(field).from(MenuModel.getTable()).where({type:type})
    }
  }
}
module.exports = MenuModel
