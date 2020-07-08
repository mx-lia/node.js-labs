const url = require('url');
let err_handler = require('./error_handler');
const {Faculty, Pulpit, Teacher, Subject, Auditorium_type, Auditorium} = require('../models').ORM(sequelize);

module.exports = (req, res, data) => {
    switch((url.parse(req.url)).pathname) {
        case '/api/faculties': {
            Faculty.update({ faculty_name: data.faculty_name }, {
                where: {
                    faculty: data.faculty
                }
            }).then((result) => {
                res.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});
                res.end(JSON.stringify(data));
            }).catch(err => err_handler(req, res, 500, err.message));
        } break;
        case '/api/pulpits': {
            Pulpit.update({ pulpit_name: data.pulpit_name, faculty: data.faculty }, {
                where: {
                    pulpit: data.pulpit
                }
            }).then((result) => {
                res.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});
                res.end(JSON.stringify(data));
            }).catch(err => err_handler(req, res, 500, err.message));
        } break;
        case '/api/subjects': {
            Subject.update({ subject_name: data.subject_name, pulpit: data.pulpit }, {
                where: {
                    subject: data.subject
                }
            }).then((result) => {
                res.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});
                res.end(JSON.stringify(data));
            }).catch(err => err_handler(req, res, 500, err.message));
        } break;
        case '/api/auditoriumstypes': {
            Auditorium_type.update({ auditorium_typename: data.auditorium_typename }, {
                where: {
                    auditorium_type: data.auditorium_type
                }
            }).then((result) => {
                res.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});
                res.end(JSON.stringify(data));
            }).catch(err => err_handler(req, res, 500, err.message));
        } break;
        case '/api/auditoriums': {
            Auditorium.update({ auditorium_name: data.auditorium_name, auditorium_capacity: data.auditorium_capacity, auditorium_type: data.auditorium_type }, {
                where: {
                    auditorium: data.auditorium
                }
            }).then((result) => {
                res.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});
                res.end(JSON.stringify(data));
            }).catch(err => err_handler(req, res, 500, err.message));
        } break;
        default: err_handler(req, res, 400, 'Bad request'); break;
    }
};