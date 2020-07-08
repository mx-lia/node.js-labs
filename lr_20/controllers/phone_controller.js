const phone = require("../models/phone");

exports.add = function (request, response) {
  phone.add(Date.now(), request.body.name, request.body.phone);
  response.redirect("/");
};

exports.update = function (request, response) {
  phone.update(request.body.id, request.body.name, request.body.phone);
  response.redirect("/");
};

exports.delete = function (request, response) {
  phone.remove(request.body.id);
  response.redirect("/");
};
