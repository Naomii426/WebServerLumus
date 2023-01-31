const Router = require('express')
const router = new Router()
const checkRole = require ('../middleware/checkRoleMiddleWare')
const productController = require('../controllers/productController')

router.post('/',checkRole('ADMIN'), productController.create)
router.get('/',productController.getAll)
router.get('/:id',productController.getOne)


module.exports = router