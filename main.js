const express= require('express')
const {cars} =require('./models/cars')
const {customer} =require('./models/customer')
const router =require('./router/cars_custrouter')
const {sequelize} =require('./database')
require('dotenv').config()
const cors = require('cors')
const bodyParser = require('body-parser')
const main = express()
main.use(bodyParser.urlencoded({extended:true}))
main.use(bodyParser.json())
main.use(cors())
sequelize.sync()
async function run(){
        await sequelize.authenticate()
        console.log('connected to the database')
        main.use('/',router)
        main.listen(process.env.PORT, () => {
            console.log('server running at port',process.env.PORT);
          });
    }
run()
