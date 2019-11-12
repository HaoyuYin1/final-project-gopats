/**
 * Service for account operations.
 */

'use strict';
const mongoose = require('mongoose'),
    Account = mongoose.model('accounts');

/**
 * Returns an array of account object matching the search parameters.
 *
 * @param {Object} params {Search parameters}
 */
exports.search = function (params) {
    const promise = Account.find(params).exec()
    return promise;
};

/**
 * Saves and returns the new account object.
 *
 * @param {Object} account {User object}
 */
exports.save = function (account) {
    const newAcc = new Account(account);
    const promise = newAcc.save();
    return promise;
};

/**
 * Returns the account object matching the id.
 *
 * @param {string} accountID {Id of the account object}
 */
exports.get = function (accountID) {
    const promise = Account.findById(accountID).exec();
    return promise
};

exports.get2 = function (acc) {
    const promise = Account.find({"account" : acc}).exec();
    return promise
};
