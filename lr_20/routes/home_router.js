const express = require('express');
const home_controller = require('../controllers/home_controller');
const home_router = express.Router();
 
home_router.get("/", home_controller.index);
home_router.get("/add", home_controller.add);
home_router.get("/update/:id", home_controller.update);
 
module.exports = home_router;