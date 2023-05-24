const Router = require('express')
const router = new Router()
const checkRole = require ('../middleware/checkRoleMiddleWare')
const productController = require('../controllers/productController')

router.post('/',checkRole('ADMIN'), productController.create)
router.post('/update',checkRole('ADMIN'),productController.setDescription)
router.get('/',productController.getAll)
router.get('/:id',productController.getOne)
router.post('/update/:id', checkRole('ADMIN'), productController.update)
router.post('/del/:id',checkRole('ADMIN'),productController.delOne)


module.exports = router