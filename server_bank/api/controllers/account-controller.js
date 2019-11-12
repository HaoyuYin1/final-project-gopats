/**
 * Controller for account endpoints.
 */

'use strict';
//import service.
const accountService = require('../services/account-service');
/**
 * Returns a list of accounts in JSON based on the
 * search parameters.
 *
 * @param {request} {HTTP request object}
 * @param {response} {HTTP response object}
 */
exports.list = function(request, response) {
  const resolve = (accounts) => {
    response.status(200);
    response.json(accounts);
  };
  accountService.search({})
    .then(resolve)
    .catch(renderErrorResponse(response));
};

/**
 * Returns a account object in JSON.
 *
 * @param {request} {HTTP request object}
 * @param {response} {HTTP response object}
 */
exports.get2 = function(request, response) {
  const resolve = (account) => {
    response.status(200);
    response.json(account);
  };
  accountService.get2(request.body.account)
    .then(resolve)
    .catch(renderErrorResponse(response));
};

/**
 * Creates a new account with the request JSON and
 * returns account JSON object.
 *
 * @param {request} {HTTP request object}
 * @param {response} {HTTP response object}
 */
exports.post = function(request, response) {
  const newAcc = Object.assign({}, request.body);
  const resolve = (account) => {
    response.status(200);
    response.json(account);
  };
  accountService.save(newAcc)
    .then(resolve)
    .catch(renderErrorResponse(response));
};


/**
 * Returns a account object in JSON.
 *
 * @param {request} {HTTP request object}
 * @param {response} {HTTP response object}
 */
exports.get = function(request, response) {
  const resolve = (account) => {
    response.status(200);
    response.json(account);
  };
  accountService.get(request.params.accountID)
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
