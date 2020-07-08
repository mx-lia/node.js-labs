const fs = require("fs");

function writePhones(phones) {
  fs.writeFile(
    __dirname + "/phones.json",
    JSON.stringify(phones),
    function () {
      console.log("File phones.json is changed");
    }
  );
}

exports.getAll = function (callback) {
  fs.readFile(__dirname + "/phones.json", function (err, data) {
    if (err) {
      console.log("Read file error");
    } else {
      if (data.toString().length == 0) {
        return callback(new Array());
      } else {
        return callback(JSON.parse(data));
      }
    }
  });
};
exports.findById = function (id, callback) {
  this.getAll(function (result) {
    var phones = result;
    return callback(
      phones.find(function (element) {
        return element.id == id;
      })
    );
  });
};
exports.add = function (id, name, phone) {
  this.getAll(function (result) {
    var phones = result;
    phones.push({ id: id, name: name, phone: phone });
    console.log(
      "New item was added: id = " +
        id +
        ", name = " +
        name +
        ", phone = " +
        phone
    );
    writePhones(phones);
  });
};
exports.update = function (id, name, phone) {
  this.getAll(function (result) {
    var phones = result;
    for (var i = 0; i < phones.length; i++) {
      if (phones[i].id == id) {
        phones[i] = { id: id, name: name, phone: phone };
        console.log(
          "Item was updated: id = " +
            id +
            ", name = " +
            name +
            ", phone = " +
            phone
        );
        writePhones(phones);
        break;
      }
    }
  });
};
exports.remove = function (id) {
  this.getAll(function (result) {
    var phones = result;
    for (var i = 0; i < phones.length; i++) {
      if (phones[i].id == id) {
        phones.splice(i, 1);
        console.log("Item was deleted: id = " + id);
        writePhones(phones);
        break;
      }
    }
  });
};
