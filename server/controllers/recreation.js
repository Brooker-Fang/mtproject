const RecreationModel = require('../models/recreation')
const util = require('../util/util')

class RecreationController {

  /**
  * @author : fhh
  * @description : 获取 娱乐分类列表
  * @param :  ctx，dmdm，title
  */
  static async getRecreation (ctx) {
    const query = ctx.query
    try {
      const res = await RecreationModel.getRecreation(query)
      ctx.body = util.success('success',res)
    } catch (e){
      console.log(e)
      ctx.body = util.error('网络出错')
    }
  }
}
module.exports = RecreationController
