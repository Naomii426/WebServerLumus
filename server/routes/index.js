const Router = require('express')
const productRouter = require('./productRouter')
const userRouter = require('./userRouter')
const brandRouter = require('./brandRouter')
const typeRouter = require('./typeRouter')
const router = new Router()
router.use('/user', userRouter)
router.use('/product', productRouter)
router.use('/type', typeRouter)
router.use('/brand', brandRouter)


module.exports = router