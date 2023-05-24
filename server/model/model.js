const sequelize = require('../db')

const {DataTypes} = require('sequelize')
let Lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

const User = sequelize.define('user',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}, //описание поля ID
    email: {type: DataTypes.STRING,unique: true}, //описание поля email
    password:{type:DataTypes.STRING},  //описание поля password
    role:{type:DataTypes.STRING,defaultValue: "USER"}  //описание поля role
})

const Order = sequelize.define('order',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true},
    phone: {type: DataTypes.STRING,  allowNull: false},
    postcode: {type: DataTypes.STRING, allowNull: false},
    addressee: {type: DataTypes.STRING, allowNull: false},
    status:{type: DataTypes.INTEGER, defaultValue: 3}
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
    img:{type:DataTypes.STRING,allowNull:false}, //описание поля img
    _info:{type: DataTypes.TEXT, defaultValue: Lorem},
    amount:{type: DataTypes.INTEGER, defaultValue:1},
    country:{type: DataTypes.STRING, allowNull: false},
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

const OrderProduct = sequelize.define('order_product', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})
const Legal = sequelize.define('legal', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING,  allowNull: false},
    legal_p: {type: DataTypes.STRING,  allowNull: false},
    descr: {type: DataTypes.STRING},
    type: {type: DataTypes.STRING, allowNull: false},
    phone: {type: DataTypes.STRING},
    located: {type: DataTypes.STRING,  allowNull: false},
    bill: {type: DataTypes.STRING,  allowNull: false},
    inn: {type: DataTypes.STRING, allowNull: false},
    comment: {type: DataTypes.STRING},
})

const Review = sequelize.define('review', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    comment: {type: DataTypes.STRING, allowNull: false},
    rate: {type: DataTypes.INTEGER, allowNull: false},
})

const TypeBrand = sequelize.define('type_brand',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true} //описание поля ID
})

User.hasOne(Basket)
Basket.belongsTo(User)

User.hasMany(Order)
Order.belongsTo(User)

Order.hasMany(OrderProduct)
OrderProduct.belongsTo(Order)

Basket.hasMany(BasketProduct)
BasketProduct.belongsTo(Basket)

Order.hasOne(User)
User.belongsTo(Order)

Type.hasMany(Product)
Product.belongsTo(Type)

Brand.hasMany(Product)
Product.belongsTo(Brand)


Product.hasMany(BasketProduct)
BasketProduct.belongsTo(Product)

Product.hasMany(OrderProduct)
OrderProduct.belongsTo(Product)

Product.hasMany(ProductInfo, {as: 'info'})
ProductInfo.belongsTo(Product)

Legal.hasMany(Product)
Product.belongsTo(Legal)

User.hasMany(Review)
Review.belongsTo(User)

Product.hasMany(Review)
Review.belongsTo(Product)

Type.belongsToMany(Brand, {through: TypeBrand})
Brand.belongsToMany(Type, {through: TypeBrand})

module.exports = {
    User, Basket, BasketProduct, Product, Type, Brand, ProductInfo, Order, OrderProduct, Legal, Review, TypeBrand
}