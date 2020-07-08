const http = require('http');
const GET_handler = require('./m07-01')('./files');
const err_handler = require('./err_module');

let request_handler = (req, res) => {
  switch (req.method) {
      case 'GET': {
          GET_handler.sendFile(req, res);
          break;
      }
      default: {
          err_handler(req, res, 405);
      }
  }
};

let server = http.createServer();
server.listen(5000);
server.on('request', request_handler);

console.log('Server running at http://localhost:5000/test.html');