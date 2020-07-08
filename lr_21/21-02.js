const app = require('express')();
const passport = require('passport');
const DigestStrategy = require('passport-http').DigestStrategy;
const {getCredential, checkPassword} = require('./21-01m');

passport.use(new DigestStrategy({gop: 'auth'}, (user, done) => {
    let result = null;
    getCredential(user, (credential) => {
        if(!credential) {
            result = done(null, false);
        } else {
            result = done(null, credential.name, credential.password);
        }
        return result;
    });
}, (params, done) => {
    console.log('params = ', params);
    done(null, true);
}));

app.get('/login', passport.authenticate('digest', {session: false}), (req, res, next) => {
    res.redirect('/resource');
});

app.get('/logout', (req, res, next) => {
    req.logOut();
    res.status(401).send("logged out");
});

app.get('/resource', (req, res, next) => {
    if(req.headers['authorization']) {
        res.send('resource');
    } else {
        res.redirect('/login');
    }
});

app.use((req, res, next) => {
    res.status(404).send('This URI is not supported');
});

app.listen(3000, () => console.log('Server is started on port', 3000));
