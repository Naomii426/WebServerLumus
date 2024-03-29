const path = require("path");
const {Legal} = require("../model/model");
const ApiError = require("../error/ApiError");

class LegalController{
    async create(req,res,next){
        try{
            let {name, legal_p, descr, type, phone, located, bill, inn, comment} = req.body

            const product = await Legal.create({name, legal_p, descr, type, located, bill, inn, comment, phone})
            return res.json(product)
        }catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async show(req,res,next){
        try{
            let {id} = req.body
            const product = await Legal.findOne(id)
            return res.json(product)
        }catch (e){
            next(ApiError.badRequest(e.message))
        }
    }

    async showAll(req,res){
        const legal = await Legal.findAll();
        return res.json(legal)
    }
}

module.exports = new LegalController()