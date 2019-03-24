let Sequelize = require('sequelize');
let db = require("../config/db");
let MD5 = require('md5-node')
let User = db.define('user', {
    id: {
      type: Sequelize.INTEGER, // 数据类型
      field: 'id', // 数据库中字段真是名称，默认就是属性名
      primaryKey: true, // 是否为主键
      unique: true, //是否可重复
      autoIncrement: true //没有这个时插入返回是id是null
    },
    username: {
      type: Sequelize.STRING,
      allowNull: false // 不允许为空
    },
    phone: {
      type: Sequelize.STRING,
      allowNull: false // 不允许为空
    },
    password: {
      type: Sequelize.STRING,
      //allowNull: false,
      defaultValue: '123456', // 默认值

    },
    email: {
      type: Sequelize.STRING
    },
    permission: {
      type: Sequelize.STRING,
      defaultValue: 'normal', // 默认值
    },
    /*createdAt: {
      type: Sequelize.DATE,
      get() {
        return moment(this.getDataValue('createdAt')).format('YYYY-MM-DD');
      }
    },
    updatedAt: {
      type: Sequelize.DATE,
      get() {
        return moment(this.getDataValue('updatedAt')).format('YYYY-MM-DD');
      }
    }*/
  }, {
    freezeTableName: true, // Model 对应的表名将与model名相同
    tableName: 'user',

    // createdAt: 'createdAt', // 修改createAt在数据库中真是的字段名
    // updatedAt: 'updateAt',
    timestamps: true,
    underscored: true, // createdAt&updatedAt=>created_at&update_at
  });
module.exports = User


