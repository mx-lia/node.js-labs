module.exports = (req, res, err_code) => {
    console.log(req.method + ': ' + req.url + ', HTTP status ' + err_code);
    res.writeHead(err_code, {'Content-Type': 'application/json; charset=utf-8'});
    res.end('{"error":"' + req.method + ':' + req.url + ', HTTP status ' + err_code + '"}');
};