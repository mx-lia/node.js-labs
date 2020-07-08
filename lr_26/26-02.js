const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

app.use("/", express.static("public"));

app.listen(3000, () => console.log("Start server, port: ", 3000));
