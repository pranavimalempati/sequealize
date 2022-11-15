const customer = require("../models/customer");
const { sequelize } = require("../database");


const addCustomer =async (req, res) => {
    try {
      const resp = await customer.create(req.body);
      res.status(200).json({
        status: "success",
        response: resp,
        message: "sucessfull",
      });
    } catch (error) {
      console.log(error.message);
      res.status(400).json({
        status: "fail",
        response: null,
        message: error.message,
      });
    }
  };

  const findCustomer = async(req,res)=>{
    try {
      const result = await customer.findOne({
        where:{
          cust_id: req.params.id
        }
  })
      res.status(200).json({
        status: "success",
        response: result,
        message: "sucessfull",
      });
    } catch (error) {
      console.log(error.message);
      res.status(400).json({
        status: "fail",
        response: null,
        message: error.message,
      });
    }
  };

  const updateCustomer = async(req,res)=>{
    try {
      const result = await customer.update(req.body,{
        where:{
            cust_id: req.params.id
           }
        })
      res.status(200).json({
        status: "success",
        response: result,
        message: "updated sucessfully",
      });
    } catch (error) {
      console.log(error.message);
      res.status(400).json({
        status: "fail",
        response: null,
        message: error.message,
      });
    }
  };
  
  const deletecustomer = async(req,res)=>{
    try {
      const result = await customer.destroy({
        where:{
            cust_id: req.params.id
    }
  })
      res.status(200).json({
        status: "success",
        response: result,
        message: "deleted sucessfully",
      });
    } catch (error) {
      console.log(error.message);
      res.status(400).json({
        status: "fail",
        response: null,
        message: error.message,
      });
    }
  }
  module.exports = {addCustomer,findCustomer,updateCustomer,deletecustomer}