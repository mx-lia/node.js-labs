const path = require('path');

exports.home_index = (req, res) => {
    console.log('GET home/index');
    res.sendFile(path.resolve() + '\\views\\index.html');
};

exports.home_account = (req, res) => {
    console.log('GET home/account');
    res.send('GET home/account');
};

exports.calc_salary = (req, res) => {
    console.log('GET calc/salary');
    res.send('GET calc/salary');
};

exports.calc_trans = (req, res) => {
    console.log('GET calc/trans');
    res.send('GET calc/trans');
};