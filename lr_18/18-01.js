const Sequelize = require("sequelize");
global.sequelize = new Sequelize("lab_14-nodejs", "Julia", "Pa$$w0rd", {
  host: "localhost",
  dialect: "mssql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

const http = require("http");
const get_handler = require("./handlers/get_handler");
const post_handler = require("./handlers/post_handler");
const put_handler = require("./handlers/put_handler");
const delete_handler = require("./handlers/delete_handler");
const err_handler = require("./handlers/error_handler");

let server = http.createServer();
server.listen(3000);
server.on("request", (req, res) => {
  request_handler(req, res);
});

let request_handler = (req, res) => {
  switch (req.method) {
    case "GET":
      get_handler(req, res);
      break;
    case "POST":
      {
        let body = "";
        req.on("data", (chunk) => {
          body += chunk.toString();
        });
        req.on("end", () => {
          post_handler(req, res, JSON.parse(body));
        });
      }
      break;
    case "PUT":
      {
        let body = "";
        req.on("data", (chunk) => {
          body += chunk.toString();
        });
        req.on("end", () => {
          put_handler(req, res, JSON.parse(body));
        });
      }
      break;
    case "DELETE":
      delete_handler(req, res);
      break;
    default:
      err_handler(req, res, 501, "This method is not supported");
      break;
  }
};

console.log("Server running at http://localhost:3000/");
