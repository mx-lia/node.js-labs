const http = require('http');
const fs = require('fs');
const url = require('url');

http.createServer(function (request, response) {
    if(url.parse(request.url).pathname === '/png') {
        const fname = './pic.png';
        let jpg = null;
        fs.stat(fname, (err, stat)=>{
            if(err){console.log('error:',err);}
            else {
                jpg = fs.readFile(fname, (err, data)=>{
                    response.writeHead(200, {'Content-Type': 'image/jpeg', 'Content-Length': stat.size});
                    response.end(data, 'binary');
                });
            }
        });
    }
}).listen(5000);

console.log('Server running at http://localhost:5000/png');