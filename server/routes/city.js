const router = require('koa-router')()
const CityController = require('../controllers/city')
router.prefix('/city')

// 获取所有城市
router.get('/getAllCity',CityController.getAllCity)

module.exports = router
