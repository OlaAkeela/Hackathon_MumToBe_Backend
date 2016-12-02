/**
 * Trainings.js
 *alter
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    image: {
      type: 'text'
    },
    details: {
      type: 'text'
    },
    training_number: {
      type: 'text'
    },
    training_language: {
      type: 'integer'
    }
  }
};

