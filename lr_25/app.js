const JsonRPCServer = require("jsonrpc-server-http-nats");
const server = new JsonRPCServer();
const { validator, binValidator } = require("./validators");

server.on("ping", (response) => {
  let error = null;
  let result = "pong";
  response(error, result);
});

server.on("sum", validator, (params, channel, response) => {
  response(
    null,
    params.reduce((x, y) => x + y)
  );
});

server.on("mul", validator, (params, channel, response) => {
  response(
    null,
    params.reduce((x, y) => x * y)
  );
});

server.on("div", binValidator, (params, channel, response) => {
  response(null, params[0] / params[1]);
});

server.on("proc", binValidator, (params, channel, response) => {
  response(null, params[0] / params[1] * 100);
});

server.listenHttp({ host: "127.0.0.1", port: 3000 }, () =>
  console.log("JSON-RPC server is ready!")
);
