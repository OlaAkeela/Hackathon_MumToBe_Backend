/**
 * TrainingsController
 *
 * @description :: Server-side logic for managing Trainings
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  get_all_trainings: function (req, res) {
    var action = "get_all_trainings";
    try {
      var params = req.query;
      TrainingsServices.get_all_trainings(
        params,
        function (success, data, message) {
          if (success) {
            success = 1
          } else {
            success = 2
          }
          return res.json({
            action: action,
            success: success,
            msg: message,
            data: data
          });
        }
      )
    } catch (exception) {
      console.log(exception)
      return res.json({
        action: action,
        success: 2,
        message: exception
      })
    }
  }
};


