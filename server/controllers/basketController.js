const {Product, BasketProduct, Basket} = require("../model/model")

class BasketController{
    async addToBasket(req,res,next){
        const user = req.user
        const {productId} = req.body
        const basket = await BasketProduct.create({basketId: user.id, productId : productId})
        return res.json(basket)
    }

    async getBasketUser(req,res){
        const {id} = req.user
        const basket = await BasketProduct.findAll({include:{
            model: Product
            }, where: {basketId: id}})
        return res.json(basket)
    }

    async deleteBasket (req,res){
        const {id} = req.body
        if(!id) res.status(400).json('None ID')
            await BasketProduct.destroy({where:{id:id}})
        res.status(200).json('Product delete')
    }


}

module.exports= new BasketController()