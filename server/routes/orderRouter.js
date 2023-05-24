const Router = require('express')
const router = new Router()
const orderController = require("../controllers/orderController")
const checkRole = require ('../middleware/checkRoleMiddleWare')

router.post('/', orderController.addOrder)
router.get('/',  orderController.getAll)
router.get('/user:id', orderController.getUserOrder)
router.get('/user/update:id', checkRole('ADMIN'), orderController.updateUserOrder)
router.get('/:id', orderController.getUserOrderList)

module.exports = router