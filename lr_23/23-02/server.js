const fs = require("fs");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const ServerSign = require("./digitalSign").ServerSign;
const rs = fs.createReadStream("./static/MyServerFile.txt");

app.use(bodyParser.json());

app.get("/", (req, res) => {
  ServerSign(rs, (signcontext) => {
    console.log(signcontext);
    res.json(signcontext);
  });
});

app.listen(3000);
