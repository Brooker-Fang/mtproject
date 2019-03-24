const router = require('koa-router')()
const UserController = require('../controllers/user')
router.prefix('/user')

router.post('/register',UserController.addUser)
router.get('/getUser',UserController.findUserByName)


module.exports = router
