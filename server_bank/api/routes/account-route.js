/**
 * Account endpoint route definitions.
 */

'use strict';
module.exports = function(app) {
  const accountController = require('../controllers/account-controller');
  // Accounts list.
  app.route('/accounts')
    .get(accountController.list)
    .post(accountController.post);

  // Get single account's bill statements.
  app.route('/accounts/:accountID')
    .get(accountController.get)

  app.route('/bills')
    .post(accountController.get2)

};
