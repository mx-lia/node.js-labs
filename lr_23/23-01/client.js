const http = require("http");
const fs = require("fs");
const { ClientDH } = require("./23-01c");
const decipherFile = require("./cipher").decipherFile;

const options = {
  hostname: "localhost",
  port: 3000,
  path: "/resource",
  method: 'POST',
  headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
  }
};

let clientDH;
let clientSecret;
let clientContext;

http
  .get("http://localhost:3000", (res) => {
    let serverContext = "";
    res.on("data", (chunk) => {
      serverContext += chunk.toString("utf8");
    });
    res.on("end", () => {
      clientDH = new ClientDH(JSON.parse(serverContext));
      clientSecret = clientDH.getSecret(JSON.parse(serverContext));
      clientContext = clientDH.getContext();
      console.log("clientContext = ", clientContext);

      const req = http.request(options, (res) => {
        let file = fs.createWriteStream("./static/MyClientFile.txt");
        decipherFile(res, file, clientSecret);
      });
      req.end(JSON.stringify(clientContext));
    });
  })
  .on("error", function (e) {
    console.log("Got error: " + e.message);
  });
