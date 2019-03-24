const {db} = require('../config/db')

class RecreationModel {

  constructor (){
    this.table = 'recreation'
  }
  /**
  * @author : fhh
  * @description :recreation表名
  * @param :
  */
  static getTable (){
    return 'recreation'
  }

  /**
  * @author : fhh
  * @description : 获取娱乐列表
  * @param :
  */
  static async getRecreation (query){
    const {dmdm,title} = query
    const field = []
    const where = {}
    console.log(dmdm,title)
    if (typeof dmdm !== 'undefined' && dmdm !== ''){
      where.dmdm = dmdm
    }

    if (typeof title !== 'undefined' && title !== ''){
      where.title = title
    }
    console.log(JSON.stringify(where)=== '{}')
    if (JSON.stringify(where)!== '{}'){
    //if (Object.keys(where).length > 0){
      return db.select(field).from(RecreationModel.getTable()).where(where).limit(6).orderBy('create_time')
    } else {
      return db.select(field).from(RecreationModel.getTable()).limit(6).orderBy('create_time')
    }

  }
}
module.exports = RecreationModel
