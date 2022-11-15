const Sequelize = require('sequelize')
const {sequelize} = require('../database')    
const cars = sequelize.define("Cars", {
      car_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      car_name: {
        type: Sequelize.STRING
      },
      car_amt: {
        type: Sequelize.STRING
      }
    },{ 
    freezeTableName:true,
    timestamps:false
    }
   );
  
  
module.exports= cars