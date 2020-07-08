const app = require('express')();

const routes = require('./routes');
const controllers = require('./controllers');
const MVC = new (require('./MVC')).MVC(routes, controllers);

app.use(MVC.routes, MVC.use);
app.listen(3000);