const get_handlers = require('./handlers/get_handlers');
const post_handlers = require('./handlers/post_handlers');
const put_handlers = require('./handlers/put_handlers');
const delete_handlers = require('./handlers/delete_handlers');

module.exports = {
    GET: {
        home: {
            index: get_handlers.home_index,
            account: get_handlers.home_account
        },
        calc: {
            salary: get_handlers.calc_salary,
            trans: get_handlers.calc_trans
        }
    },
    POST: {
        home: {
            create: post_handlers.home_create
        },
        calc: {
            add: post_handlers.calc_add
        }
    },
    PUT: {
        home: {
            update: put_handlers.home_update
        }
    },
    DELETE: {
        home: {
            delete: delete_handlers.home_delete
        }
    }
};