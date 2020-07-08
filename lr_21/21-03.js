const express = require('express');
const app = express();
const fs = require('fs');
const cp = require('cookie-parser');
const {getCredential, checkPassword} = require('./21-01m');

app.use(cp());
app.use(express.urlencoded({extended: false}));

app.get('/login', (req, res, next) => {
    console.log('/login');
    const rs = fs.ReadStream('index.html');
    rs.pipe(res);
});

app.post('/login', (req, res, next) => {
    console.log('params', req.body);
    getCredential(req.body.name, (credential) => {
        if(credential == null)
            res.send('Incorrect login');
        else if(!checkPassword(req.body.password, credential.password))
            res.send('Incorrect password');
        else
            res.cookie('token', 'xxx-yyy-zzz').redirect('/resource');
    });
});

app.get('/resource', (req, res, next) => {
    if(req.cookies && req.cookies.token) {
        if(req.cookies.token == 'xxx-yyy-zzz') {
            res.send('resource');
        } else {
            res.redirect('/login');
        }
    } else {
        res.redirect('/login');
    }
})

app.get('/logout', (req, res, next) => {
    res.clearCookie('token');
    res.redirect('/login');
});

app.use((req, res, next) => {
    res.status(404).send('This URI is not supported');
});

app.listen(3000, () => console.log('Server is started on port', 3000));
