const http = require('http');
const fs = require('fs');
const url = require("url");

let fact = (num) => {
    if (num === 0) { return 1; }
    else { return num * fact(num - 1); }
};

http.createServer(function(req, resp) {
    let request_url = req.url;
    let rc = JSON.stringify({k:0});
    if(url.parse(request_url).pathname === '/fact') {
        if (typeof url.parse(request_url,true).query.k != "undefined"){
            let k = parseInt(url.parse(request_url, true).query.k);
            if (Number.isInteger(k)){
                resp.writeHead(200, {"Content-Type":"application/json; charset=utf-8"});
                resp.end(JSON.stringify({k:k, fact: fact(k)}));
            }
        }
    } else {
        const fname = 'index.html';
        let file = fs.readFile(fname, (err, data) => {
            resp.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
            resp.end(data);
        });
    }
}).listen(5000);

console.log('Server running at http://localhost:5000/');