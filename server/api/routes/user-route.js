/**
 * User endpoint route definitions.
 */

'use strict';
module.exports = function(app) {
  const userController = require('../controllers/user-controller');
  // User routes for search and create.
  app.route('/users')
    .get(userController.list)
    .post(userController.post);

  // User routes for get, update and delete.
  app.route('/users/:userID')
    .get(userController.get)
    .put(userController.put)
    .delete(userController.delete);

  app.route('/login')
    .post(userController.authenticate);

  app.route('/sendemail')
    .post(userController.sendEmail);

  app.route('/signup')
    .post(userController.checkForSignup);


};
