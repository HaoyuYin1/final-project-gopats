'use strict';
module.exports = function (app) {
    //Initialize models
    let accountModel = require('./models/account');

    //Initialize routes
    let accountRoutes = require('./routes/account-route');
    accountRoutes(app);
};
