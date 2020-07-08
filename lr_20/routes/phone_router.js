const express = require('express');
const phone_controller = require('../controllers/phone_controller');
const phone_router = express.Router();
const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({extended: false});
 
phone_router.post("/add", urlencodedParser, phone_controller.add);
phone_router.post("/update", urlencodedParser, phone_controller.update);
phone_router.post("/delete", urlencodedParser, phone_controller.delete);
 
module.exports = phone_router;