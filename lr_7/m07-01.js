const fs = require('fs');
const url = require('url');
const err_handler = require('./err_module');

function Stat(sfn = './static') {
    this.STATIC_FOLDER = sfn;
    let pathStatic = (fn) => {return `${this.STATIC_FOLDER}${fn}`;};
    this.sendFile = (req, res) => {
        let file_path = (url.parse(req.url)).pathname;
        let result = file_path.split(/\./);
        switch(result[1]) {
            case 'html': {
                res.writeHead(200, {'Content-Type':'text/html, charset=utf-8'});
                break;
            }
            case 'css': {
                res.writeHead(200, {'Content-Type':'text/css'});
                break;
            }
            case 'js': {
                res.writeHead(200, {'Content-Type':'text/javascript'});
                break;
            }
            case 'png': {
                res.writeHead(200, {'Content-Type':'image/png'});
                break;
            }
            case 'docx': {
                res.writeHead(200, {'Content-Type':'application/msword, charset=utf-8'});
                break;
            }
            case 'json': {
                res.writeHead(200, {'Content-Type':'application/json'});
                break;
            }
            case 'xml': {
                res.writeHead(200, {'Content-Type':'application/xml'});
                break;
            }
            case 'mp4': {
                res.writeHead(200, {'Content-Type':'video/mp4'});
                break;
            }
            default: {
                err_handler(req, res, 404);
                return;
            }
        }
        let file = fs.readFileSync(pathStatic(req.url));
        res.end(file);
    };
}

module.exports = (parm) => {return new Stat(parm);};