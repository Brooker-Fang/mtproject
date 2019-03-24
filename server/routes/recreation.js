const router = require('koa-router')()
const RecreationController = require('../controllers/recreation')


router.prefix('/recreation')
router.get('/getRecreation',RecreationController.getRecreation)

module.exports = router
