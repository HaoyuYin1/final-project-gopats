'use strict';
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

/**
 * Mongoose schema for user object.
 */
let userSchema = new Schema({

  password: {
    type: String,
  },
  fname: {
    type: String,
  },

  lname: {
    type: String,
  },

  phone: {
    type: String
  },

  address: {
    type: String,
  },
  email: {
    type: String
  },
  account: {
    type: String
  },
  accounts: {
    type: Array
  },
  budget: {
    type: Array,
    items: [
      {
        type: Number
      },
      {
        type: Number
      },
      {
        type: Number
      }
    ]
  }
}, {
  versionKey: false
});

module.exports = mongoose.model('users', userSchema);
