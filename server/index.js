require('dotenv').config()
const express = require('express')

const sequelize = require('./db') //импортируем обекты созданнеы в БД
const model = require('./model/model')// импортируем объекты модели
const cors = require('cors') //импортируем cors
const router = require('./routes/index') //импортируем основной роутер
const fileupload = require('express-fileupload') //импортируем модуль для работы с img
const path = require('path')
const morgan = require('morgan')
const  errorHandler = require('./middleware/ErrorHandlingMiddleware') //импортируем обработчик ошибок

const PORT = process.env.PORT || 5000

const  app = express()
app.use(cors()) //передаем функцию
app.use(morgan('dev'))
app.use(express.json()) //передаем функцию, чтобы приложение могло парсить json
app.use(express.static(path.resolve(__dirname,'static')))
app.use(fileupload({})) //передаем функцию для работы с img
app.use('/api',router)


app.use(errorHandler)

const start = async ()=>{
   try {
          await sequelize.authenticate()       //асинхронная функция для установки соединения с БД
          await sequelize.sync()              //асинхронная функция, которая сверяет состояние БД со схемой БД
          app.listen(PORT,"localhost",() => console.log(`Server started on port ${PORT}`))
   }catch (e) {
          console.log(e)
 }

}
start()

