const {Product,ProductInfo} = require('../model/model')
const  ApiError = require('../error/ApiError')
const uuid = require('uuid')
const path = require('path')
class ProductController{
    async create(req,res,next){                //функция создания продукта
        try {
            let {name, price, brandId, typeId, info} = req.body
            const {img} = req.files
            let fileName = uuid.v4() + ".jpg"
            await img.mv(path.resolve(__dirname, '..', 'static', fileName)) //переместим файл в нужную папку
            const product = await  Product.create({name, price, brandId, typeId, img:fileName })

            if(info){                       //тк данные приходят в виде строки нужно распарсить массив на frontend в json строку, а на backend обратно перегонять в JS объект
                info = JSON.parse(info)
                info.forEach(i=>
                ProductInfo.create({
                    title: i.title,
                    description: i.description,
                    productId : product.id
                }))

            }
            return res.json(product)
        }catch (e) {
            next(ApiError.badRequest(e.message))
        }
        
    }

    async getAll(req,res){                      //функция получения всех
        let {brandId, typeId,limit, page} = req.query
        page = page || 1
        limit = limit || 9
        let offset = page * limit - limit //отнимаем товары при переходе на новую страницу
        let product
        if (!brandId & !typeId){
            product = await Product.findAndCountAll({limit, offset})     //функция findAndCountAll, нужна для того чтобы на фронте посчитать общее кол-во страниц
        }
        if (brandId & !typeId){
            product = await Product.findAll({where:{brandId},limit, offset})
        }
        if (!brandId & typeId){
            product = await Product.findAll({where:{typeId},limit, offset})
        }
        if (brandId & typeId){
            product = await Product.findAll({where:{typeId, brandId},limit, offset})
        }
        return res.json(product)

    }

    async getOne(req,res){                      //функция получения одного товара
        const {id} = req.params //получаем id товара из параметров указанных в роутере
        const product = await Product.findOne(
            {
                where: {id},
                include: [{model: ProductInfo, as: 'info'}]
            }
        )
        return res.json(product) //возвращаем на клиент
    }
}



module.exports = new ProductController()       //импортируем созданный объект