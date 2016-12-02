/**
 * Comments.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    id: {
      type: 'integer'
    },
    user_id: {
      type: 'integer'
    },
    post_id: {
      type: 'integer'
    },
    comment_text: {
      type: 'text'
    },
    date: {
      type: 'datetime'
    },
    no_of_reports: {
      type: 'integer'
    }
  }
};

