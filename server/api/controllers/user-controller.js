/**
 * Controller for user endpoints.
 */

'use strict';
//import service.
const userService = require('../services/user-service');
const emailService = require('../services/email-service');
/**
 * Returns a list of users in JSON based on the
 * search parameters.
 *
 * @param {request} {HTTP request object}
 * @param {response} {HTTP response object}
 */
exports.list = function(request, response) {
  const resolve = (users) => {
    response.status(200);
    response.json(users);
  };
  userService.search({})
    .then(resolve)
    .catch(renderErrorResponse(response));
};

/**
 * Creates a new user with the request JSON and
 * returns user JSON object.
 *
 * @param {request} {HTTP request object}
 * @param {response} {HTTP response object}
 */
exports.post = function(request, response) {
  const newUser = Object.assign({}, request.body);
  const resolve = (user) => {
    response.status(200);
    response.json(user);
  };
  userService.save(newUser)
    .then(resolve)
    .catch(renderErrorResponse(response));
};

/**
 * Returns a user object in JSON.
 *
 * @param {request} {HTTP request object}
 * @param {response} {HTTP response object}
 */
exports.get = function(request, response) {
  const resolve = (user) => {
    response.status(200);
    response.json(user);
  };
  userService.get(request.params.userID)
    .then(resolve)
    .catch(renderErrorResponse(response));
};

exports.authenticate = function(request, response) {
  const resolve = (user) => {
    response.status(200);
    response.json(user);
  };
  userService.auth(request.body.email, request.body.password)
    .then(resolve)
    .catch(renderErrorResponse(response));
};

exports.checkForSignup = function(request, response) {
  const resolve = (user) => {
    response.status(200);
    response.json(user);
  };
  userService.checkUser(request.body.email)
    .then(resolve)
    .catch(renderErrorResponse(response));
};

exports.sendEmail = function(request, response) {
  emailService.send(request.body.to, request.body.subject, request.body.content);
};

/**
 * Updates and returns a user object in JSON.
 *
 * @param {request} {HTTP request object}
 * @param {response} {HTTP response object}
 */
exports.put = function(request, response) {
  const user = Object.assign({}, request.body);
  const resolve = (user) => {
    response.status(200);
  };
  user._id = request.params.userID;
  userService.update(user)
    .then(resolve)
    .then(response.json(user))
    .catch(renderErrorResponse(response));
};

/**
 * Deletes a user object.
 *
 * @param {request} {HTTP request object}
 * @param {response} {HTTP response object}
 */
exports.delete = function(request, response) {
  const resolve = (user) => {
    response.status(200);
    response.json({
      message: 'User successfully deleted!'
    });
  };
  userService.delete(request.params.userID)
    .then(resolve)
    .catch(renderErrorResponse(response));
};
/**
 * Throws error if error object is present.
 *
 * @param {Response} response The response object
 * @return {Function} The error handler function.
 */
let renderErrorResponse = (response) => {
  const errorCallback = (error) => {
    if (error) {
      response.status(500);
      response.json({
        message: error.message
      });
    }
  }
  return errorCallback;
};
