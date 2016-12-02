/**
 * Users.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    username: {
      type: 'string'
    },
    email: {
      type: 'string'
    },
    password: {
      type: 'string'
    },
    image: {
      type: 'text'
    },
    birth_date: {
      type: 'datetime'
    },
    pregnancy_date: {
      type: 'datetime'
    },
    period_date: {
      type: 'datetime'
    },
    get_notifications: {
      type: 'boolean'
    },
    language_id:{
      type: 'integer'
    },
    reg_id:{
      type: 'integer'
    }
  }
};

