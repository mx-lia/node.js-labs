const fs = require("fs");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const { ServerDH } = require("./23-01s");
const cipherFile = require("./cipher").cipherFile;

app.use(bodyParser.json());

let serverDH;
let serverContext;
let serverSecret;

app.get("/", (req, res) => {
  serverDH = new ServerDH(256, 3);
  serverContext = serverDH.getContext();
  console.log("serverContext = ", serverContext);
  res.status(200).json(serverContext);
});

app.post("/resource", (req, res) => {
  serverSecret = serverDH.getSecret(req.body);
  const rs = fs.createReadStream("./static/MyServerFile.txt");
  cipherFile(rs, res, serverSecret);
});

app.use((req, res) => {
  res.sendStatus(409);
});

app.listen(3000);
