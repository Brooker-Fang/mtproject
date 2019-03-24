const CityModel = require('../models/city')
const util = require('../util/util')

/**
* @author : fhh
* @description :
* @param :
*/
class CityController {

  /**
  * @author : fhh
  * @description : 获取所有地市
  * @param :
  */
  static async getAllCity (ctx){
    try {
      const res = await CityModel.getAllCity()
      if (res.length > 0){
        ctx.body = util.success('success',res)
      } else {
        ctx.body = util.error('网络出错')
      }
    } catch (e){
      console.log(e)
      ctx.body = util.error('网络出错')
    }


  }
}
module.exports = CityController
