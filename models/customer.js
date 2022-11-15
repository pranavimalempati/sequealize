const Sequelize = require('sequelize')
const {sequelize} = require('../database')    
const customer = sequelize.define("Customer", {
      cust_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      cust_name: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      }
    },{ 
    freezeTableName:true,
    timestamps:false
    }
   );
  
  
module.exports= customer