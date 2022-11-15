const cars = require("../models/cars");
const { sequelize } = require("../database");


const addCars =async (req, res) => {
    try {
      const resp = await cars.create(req.body);
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

  const findCars = async(req,res)=>{
    try {
      const result = await cars.findOne({
        where:{
          car_id: req.params.id
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

  const updateCars = async(req,res)=>{
    try {
      const result = await cars.update(req.body,{
        where:{
          car_id: req.params.id
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
  
  const deleteCars = async(req,res)=>{
    try {
      const result = await cars.destroy({
        where:{
          car_id: req.params.id
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
  module.exports = {addCars,findCars,updateCars,deleteCars}