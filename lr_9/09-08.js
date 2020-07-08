const http = require('http');
const fs = require('fs');

const file = fs.createWriteStream('./files/MyFile.txt');

let options = {
    host: 'localhost',
    path: '/files/MyFile.txt',
    port: 3000,
    method: 'GET',
};

const req = http.request(options, (res) => {
    res.pipe(file);
    console.log('File send');
   });

req.on('error', (err) => {
    console.log('http.request: error: ', err.message);
});

req.end();