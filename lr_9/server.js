const http = require('http');

http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type':'text/html, charset=utf-8'});
    req.on('data', (chunk) => {
       res.write(chunk.toString('utf-8'));
    });
    req.on('end', () => {
        res.end();
    });
}).listen(3000);

console.log('Server running on http://localhost:3000/');