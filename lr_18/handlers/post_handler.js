const url = require('url');
const err_handler = require('./error_handler');
const {Faculty, Pulpit, Teacher, Subject, Auditorium_type, Auditorium} = require('../models').ORM(sequelize);

module.exports = (req, res, data) => {
    switch((url.parse(req.url)).pathname) {
        case '/api/faculties': {
            Faculty.create({
                faculty: data.faculty,
                faculty_name: data.faculty_name
            }).then(result => {
                res.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});
                res.end(JSON.stringify(result));
            }).catch(err => err_handler(req, res, 500, err.message));
        } break;
        case '/api/pulpits': {
            Pulpit.create({
                pulpit: data.pulpit,
                pulpit_name: data.pulpit_name,
                faculty: data.faculty
            }).then(result => {
                res.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});
                res.end(JSON.stringify(result));
            }).catch(err => err_handler(req, res, 500, err.message));
        } break;
        case '/api/subjects': {
            Subject.create({
                subject: data.subject,
                subject_name: data.subject_name,
                pulpit: data.pulpit
            }).then(result => {
                res.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});
                res.end(JSON.stringify(result));
            }).catch(err => err_handler(req, res, 500, err.message));
        } break;
        case '/api/auditoriumstypes': {
            Auditorium_type.create({
                auditorium_type: data.auditorium_type,
                auditorium_typename: data.auditorium_typename
            }).then(result => {
                res.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});
                res.end(JSON.stringify(result));
            }).catch(err => err_handler(req, res, 500, err.message));
        } break;
        case '/api/auditoriums': {
            Auditorium.create({
                auditorium: data.auditorium,
                auditorium_name: data.auditorium_name,
                auditorium_capacity: data.auditorium_capacity,
                auditorium_type: data.auditorium_type
            }).then(result => {
                res.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});
                res.end(JSON.stringify(result));
            }).catch(err => err_handler(req, res, 500, err.message));
        } break;
        default: err_handler(req, res, 400, 'Bad request'); break;
    }
};