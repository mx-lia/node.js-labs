exports.MVC = function MVC(routes, controllers) {
    this.routes = routes;
    this.controllers = controllers;
    this.use = (req, res, next) => {
        let m = this.controllers[req.method];
        if (m) {
            let c = m[req.params.controller];
            if (c) {
                let a = c[req.params.action];
                if (a) {
                    a(req, res, next);
                } else {
                    next();
                }
            } else {
                next();
            }
        } else {
            next();
        }
    };
};