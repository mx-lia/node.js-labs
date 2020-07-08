const url = require('url');
let err_handler = require('./error_handler');
const {Faculty, Pulpit, Teacher, Subject, Auditorium_type, Auditorium} = require('../models').ORM(sequelize);

module.exports = (req, res) => {
    const path = decodeURI((url.parse(req.url)).pathname);
    switch(true) {
        case /\/api\/faculties\/.+/.test(path): {
            Faculty.destroy( {
                where: {
                    faculty: path.split('/')[3]
                }
            }).then((result) => {
                res.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});
                res.end(JSON.stringify(result));
            }).catch(err => err_handler(req, res, 500, err.message));
        } break;
        case /\/api\/pulpits\/.+/.test(path): {
            Pulpit.destroy({
                where: {
                    pulpit: path.split('/')[3]
                }
            }).then((result) => {
                res.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});
                res.end(JSON.stringify(result));
            }).catch(err => err_handler(req, res, 500, err.message));
        } break;
        case /\/api\/subjects\/.+/.test(path): {
            Subject.destroy({
                where: {
                    subject: path.split('/')[3]
                }
            }).then((result) => {
                res.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});
                res.end(JSON.stringify(result));
            }).catch(err => err_handler(req, res, 500, err.message));
        } break;
        case /\/api\/auditoriumstypes\/.+/.test(path): {
            Auditorium_type.destroy({
                where: {
                    auditorium_type: path.split('/')[3]
                }
            }).then((result) => {
                res.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});
                res.end(JSON.stringify(result));
            }).catch(err => err_handler(req, res, 500, err.message));
        } break;
        case /\/api\/auditoriums\/.+/.test(path): {
            Auditorium.destroy({
                where: {
                    auditorium: path.split('/')[3]
                }
            }).then((result) => {
                res.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});
                res.end(JSON.stringify(result));
            }).catch(err => err_handler(req, res, 500, err.message));
        } break;
        default: err_handler(req, res, 400, 'Bad request'); break;
    }
};