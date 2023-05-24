const Router = require('express')
const router = new Router()
const basketController = require('../controllers/basketController')
const authMiddlerware = require('../middleware/authMiddleWare')

router.get('/', authMiddlerware, basketController.getBasketUser)
router.post('/', authMiddlerware, basketController.addToBasket)
router.post('/delete' , basketController.deleteBasket)

module.exports = router