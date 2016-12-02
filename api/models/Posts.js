/**
 * Posts.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    user_id: {
      columnName: 'id',
      model: 'Users',
    },
    title: {
      type: "string"
    },
    subtitle: {
      type: "string"
    },
    no_of_comments: {
      type: "integer"
    },
    no_of_views: {
      type: "integer"
    },
    category_id:{
      columnName: 'id',
      model: 'Categories',
    },
    no_of_reports: {
      type: "integer"
    }
  }
};

