const express = require("express");
const app = express();
const fileUpload = require("express-fileupload");
const bodyParser = require("body-parser");
const router = require("./router");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(fileUpload());
app.use(router);

app.listen(3000, () => console.log("Starting listen port 3000"));
