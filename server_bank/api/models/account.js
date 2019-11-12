'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Mongoose schema for account object.
 */
let accSchema = new Schema({

  account: {
    type: String,
  },
  credit: {
    type: Number,
  },
  balance: {
    type: Number
  },
  transactions: {
    type: Array,
    items: [
      {
        type:Array,
        items: [
          {
            type: Number
          },
          {
            type: Date
          },
          {
            type: String
          },
          {
            type: String
          }
        ]
      }
    ]
  }
}, {
  versionKey: false
});

module.exports = mongoose.model('accounts', accSchema);
