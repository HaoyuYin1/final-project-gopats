/**
 * Service for user operations.
 */

'use strict';
const mongoose = require('mongoose'),
    User = mongoose.model('users');

/**
 * Returns an array of user object matching the search parameters.
 *
 * @param {Object} params {Search parameters}
 */
exports.search = function (params) {
    const promise = User.find(params).exec()
    return promise;
};

/**
 * Saves and returns the new user object.
 *
 * @param {Object} user {User object}
 */
exports.save = function (user) {
    const newUser = new User(user);
    const promise = newUser.save();
    return promise;
};

/**
 * Returns the user object matching the id.
 *
 * @param {string} userID {Id of the user object}
 */
exports.get = function (userID) {
    const promise = User.findById(userID).exec();
    return promise
};

exports.auth = function (email, password) {
    const promise = User.find({"email" : email, "password": password}).exec();
    return promise
};

exports.checkUser = function (email) {
    const promise = User.find({"email" : email}).exec();
    return promise
};

/**
 * Updates and returns the user object.
 *
 * @param {Object} user {User object}
 */
exports.update = function (user) {
    const promise = User.findOneAndUpdate({_id: user._id}, user).exec();
    return promise;
};

/**
 * Deletes the user object matching the id.
 *
 * @param {string} userID {Id of the user object}
 */
exports.delete = function (userID) {
    const promise = User.remove({_id: userID});
    return promise;
};
