const Router = require('express')
const router = new Router()
const productRouter = require('./productRouter')
const userRouter = require('./userRouter')
const brandRouter = require('./brandRouter')
const typeRouter = require('./typeRouter')
const basketRouter = require('./basketRouter')
const orderRouter = require('./orderRouter')
const legalRouter = require('./legalRouter')
router.use('/user', userRouter)
router.use('/product', productRouter)
router.use('/type', typeRouter)
router.use('/brand', brandRouter)
router.use('/basket', basketRouter)
router.use('/order', orderRouter)
router.use('/legal', legalRouter)

module.exports = router