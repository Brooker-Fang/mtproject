const {db} = require('../config/db')

/**
* @author : fhh
* @description : 城市模型
* @param :
*/
class CityModel {

  constructor (){
    this.table = 'city'

  }
  static getTable (){
    return 'city'
  }
  /**
  * @author : fhh
  * @description : 获取所有地市
  * @param :
  */
  static async getAllCity (){
    const field = ['dsdmdm','dmmc']
    return await db.distinct('dsdmdm', 'dmmc').select(field).from(CityModel.getTable()).where({dmjb:2})
  }
}
module.exports = CityModel
