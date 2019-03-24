
const {db} = require("../config/db");
class UserModel {

  constructor () {
    this.table = 'user'
  }
  /**
  * @author : fhh
  * @description :
  * @param : 表 名
  */
  static getTable (){
    return 'user'
  }
  /**
  * @author : fhh
  * @description : user添加
  * @param : user_name,password,email,permission
  */
  static async addUser(user) {

    let {userName,password,email,permission,phone} = user
    try {
      await db('user').insert({
        user_name:userName,
        password:password,
        email:email,
        permission:permission,
        phone:phone
      })

    } catch(e) {
      console.log(e)
      return false
    }
    return true
  }

  /**
  * @author : fhh
  * @description : 通过用户名查询
  * @param : user_name
  */
  static async findUserByName (user_name){
    const tablefield = ['id','phone','user_name','email','password']
    return await db.select(tablefield).from(UserModel.getTable()).where({user_name:user_name}).limit(1)
  }


}

module.exports = UserModel;
