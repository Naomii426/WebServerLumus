const {Brand} = require('../model/model')
const  ApiError = require('../error/ApiError')
class BrandController{
    async create(req,res){                //функция создания типа
        const {name} = req.body
        const brand = await Brand.create({name})
        return res.json(brand)
    }

    async getAll(req,res){                      //функция получения
        const brands = await  Brand.findAll()
        return res.json(brands)
    }


}



module.exports = new BrandController()     //импортируем созданный объект