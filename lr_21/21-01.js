const app = require('express')();
const passport = require('passport');
const BasicStrategy = require('passport-http').BasicStrategy;
const {getCredential, checkPassword} = require('./21-01m');
const session = require('express-session')({
    resave: false,
    saveUninitialized: false,
    secret: '12345678'
});

passport.use(new BasicStrategy((user, password, done) => {
    let result = null;
    getCredential(user, (credential) => {
        if(!credential) {
            result = done(null, false, {message: 'incorrect username'});
        } else if(!checkPassword(credential.password, password)) {
            result = done(null, false, {message: 'incorrect password'});
        } else {
            result = done(null, user);
        }
        return result;
    });
}));

passport.serializeUser((user, done) => {
    console.log('serialize', user);
    done(null, user);
});

passport.deserializeUser((user, done) => {
    console.log('deserialize', user);
    done(null, user);
});

app.use(session);
app.use(passport.initialize());
app.use(passport.session());

app.get('/login', (req, res, next) => {
    if(req.session.logout && req.headers['authorization']) {
        req.session.logout = false;
        delete req.headers['authorization'];
    }
    next();
}, passport.authenticate('basic'), (req, res, next) => {
    res.redirect('/resource');
});

app.get('/logout', (req, res, next) => {
    req.session.logout = true;
    res.redirect('/login');
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
