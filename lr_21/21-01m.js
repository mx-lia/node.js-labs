const fs = require('fs')

const getCredential = (user, callback) => {
    fs.readFile('credentials.json', (err, data) => {
        let users = JSON.parse(data);
        if(err) {
            return callback(null);
        } else {
            let u = users.find((e) => {return e.name == user;});
            return callback(u);
        }
    });
};

const checkPassword = (password1, password2) => {return password1 == password2;};

module.exports = {
    getCredential: getCredential,
    checkPassword: checkPassword
};