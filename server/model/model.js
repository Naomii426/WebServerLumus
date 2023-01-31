const sequelize = require('../db')

const {DataTypes} = require('sequelize')

const User = sequelize.define('user',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}, //описание поля ID
    email: {type: DataTypes.STRING,unique: true}, //описание поля email
    password:{type:DataTypes.STRING},  //описание поля password
    role:{type:DataTypes.STRING,defaultValue: "USER"}  //описание поля role
})

const Basket = sequelize.define('basket',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true} //описание поля ID
})

const BasketProduct = sequelize.define('basket_product',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true} //описание поля ID
})

const Product = sequelize.define('product',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}, //описание поля ID
    name: {type: DataTypes.STRING,unique: false, allowNull:false}, //описание поля name
    price:{type:DataTypes.INTEGER,allowNull: false},  //описание поля price
    img:{type:DataTypes.STRING,allowNull:false} //описание поля img
})

const Type = sequelize.define('type',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}, //описание поля ID
    name: {type: DataTypes.STRING, allowNull:false, unique:true} //описание поля name
})

const Brand = sequelize.define('brand',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}, //описание поля ID
    name: {type: DataTypes.STRING, allowNull:false, unique:true} //описание поля name
})

const ProductInfo = sequelize.define('product_info',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}, //описание поля ID
    title: {type: DataTypes.STRING, allowNull:false }, //описание поля title
    description: {type: DataTypes.STRING, allowNull:false } //описание поля description
})

const TypeBrand = sequelize.define('type_brand',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true} //описание поля ID
})

User.hasOne(Basket)
Basket.belongsTo(User)

Basket.hasMany(BasketProduct)
BasketProduct.belongsTo(Basket)

Type.hasMany(Product)
Product.belongsTo(Type)

Brand.hasMany(Product)
Product.belongsTo(Brand)

Product.hasMany(BasketProduct)
BasketProduct.belongsTo(Product)

Product.hasMany(ProductInfo, {as: 'info'})
ProductInfo.belongsTo(Product)

Type.belongsToMany(Brand, {through: TypeBrand})
Brand.belongsToMany(Type, {through: TypeBrand})

module.exports = {
    User, Basket, BasketProduct, Product, Type, Brand, ProductInfo, TypeBrand
}