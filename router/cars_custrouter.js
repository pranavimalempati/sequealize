const carService = require("../controller/carscontroller");
const customerService = require("../controller/customercontroller");
const express = require("express")
const router = express.Router();

router.post("/addcars", carService.addCars);
router.get("/findcars/:id", carService.findCars);
router.put("/updatecars/:id", carService.updateCars);
router.delete("/deletecars/:id", carService.deleteCars);

router.post("/addcustomer", customerService.addCustomer);
router.get("/findcustomer/:id", customerService.findCustomer);
router.put("/updatecustomer/:id", customerService.updateCustomer);
router.delete("/deletecustomer/:id", customerService.deletecustomer);

module.exports = router