const http = require("http");
const fs = require("fs");

const ClientVerify = require("./digitalSign").ClientVerify;

const rs = fs.createReadStream("./static/MyServerFile.txt");

http
  .get("http://localhost:3000/", (res) => {
    let data = "";
    res.on("data", (chunk) => {
      data += chunk.toString("utf8");
    });
    res.on("end", () => {
      ClientVerify(JSON.parse(data), rs, (result) => {
        console.log(result);
      });
    });
  })
  .on("error", function (e) {
    console.log("Got error: " + e.message);
  });
