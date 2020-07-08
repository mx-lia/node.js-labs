const http = require('http');
const fs = require('fs');
const url = require('url');

http.createServer(function (request, response) {
    if(url.parse(request.url).pathname === '/api/name') {
        response.setHeader('Content-Type', 'text/plain');
        response.end('Maximchikova Yuliya Sergeevna');
    }
}).listen(5000);

console.log('Server running at http://localhost:5000/api/name');