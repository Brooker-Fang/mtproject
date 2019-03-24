const router = require('koa-router')()
const MenuController = require('../controllers/menu')

router.prefix('/menu')

// 通过type 获取菜单
router.get('/getMenu',MenuController.getMenuByType)

module.exports = router
