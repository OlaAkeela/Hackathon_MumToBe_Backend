/**
 * Weeks.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    id: {
      type: 'integer'
    },
    week_number: {
        type: 'integer'
      },
    month_id: {
        type: 'integer'
      },
    image: {
        type: 'text'
      },
    info: {
        type: 'text'
      },
    embryo_info: {
        type: 'text'
      },
    embryo_size: {
        type: 'text'
      },
    embryo_weight: {
        type: 'text'
      },
    embryo_height:{
        type: 'text'
      },
    week_language:{
        type: 'integer'
      }
    }
};

