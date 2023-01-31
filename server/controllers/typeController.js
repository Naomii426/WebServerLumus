const {Type} = require('../model/model')
const  ApiError = require('../error/ApiError')

class TypeController{
    async create(req,res){                //функция создания типа
        const {name} = req.body
        const type = await Type.create({name})
        return res.json(type)
    }

    async getAll(req,res){                      //функция получения
        const types = await  Type.findAll()
        return res.json(types)
    }


}



module.exports = new TypeController()       //импортируем созданный объект