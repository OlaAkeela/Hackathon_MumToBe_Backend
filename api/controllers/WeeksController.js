/**
 * WeeksController
 *
 * @description :: Server-side logic for managing Weeks
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  get_all_weeks_info: function (req, res) {
    var action = "get_all_weeks_info";
    try {
      var params = req.query;
      WeeksServices.get_all_weeks_info(
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

