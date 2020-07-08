const phone = require("../models/phone");

exports.index = function (request, response) {
  phone.getAll(function (result) {
    response.render("index", { phones: result });
  });
};

exports.add = function (request, response) {
  phone.getAll(function (result) {
    response.render("add_form", { phones: result });
  });
};

exports.update = function (request, response) {
  phone.findById(request.params.id, function (selected_phone) {
    phone.getAll(function (result) {
      response.render("update_form", {
        phones: result,
        selected_phone: selected_phone,
      });
    });
  });
};
