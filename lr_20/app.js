const express = require('express');
const app = express();
const hbs = require('hbs');
const exphbs = require('express-handlebars').create({
    extname: '.hbs', 
    helpers: {
        cancel: function () { return new hbs.SafeString('<a class="cancel-link" href="http://localhost:3000/">Отказаться</a>'); }
    }
});

const home_router = require('./routes/home_router');
const phone_router = require('./routes/phone_router');

app.engine('.hbs', exphbs.engine);
app.set('view engine', '.hbs');
app.use(express.static('public'));

app.use('/phones', phone_router);
app.use('/', home_router);

app.use(function (req, res, next) {
    res.status(404).send("Not Found")
});

app.listen(process.env.PORT || 3000);