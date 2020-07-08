const url = require('url');
const fs = require('fs');
const err_handler = require('./error_handler');
const {Faculty, Pulpit, Teacher, Subject, Auditorium_type, Auditorium} = require('../models').ORM(sequelize);

module.exports = (req, res) => {
    switch((url.parse(req.url)).pathname) {
        case '/api/faculties': {
            Faculty.findAll().then(result => {
                res.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});
                res.end(JSON.stringify(result));
            }).catch(err => err_handler(req, res, 500, err.message));
        } break;
        case '/api/pulpits': {
            Pulpit.findAll().then(result => {
                res.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});
                res.end(JSON.stringify(result));
            }).catch(err => err_handler(req, res, 500, err.message));
        } break;
        case '/api/subjects': {
            Subject.findAll().then(result => {
                res.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});
                res.end(JSON.stringify(result));
            }).catch(err => err_handler(req, res, 500, err.message));
        } break;
        case '/api/auditoriumstypes': {
            Auditorium_type.findAll().then(result => {
                res.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});
                res.end(JSON.stringify(result));
            }).catch(err => err_handler(req, res, 500, err.message));
        } break;
        case '/api/auditoriums': {
            Auditorium.findAll().then(result => {
                res.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});
                res.end(JSON.stringify(result));
            }).catch(err => err_handler(req, res, 500, err.message));
        } break;
        default: err_handler(req, res, 400, 'Bad request'); break;
    }
};