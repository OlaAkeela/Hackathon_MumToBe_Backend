/**
 * CommentsController
 *
 * @description :: Server-side logic for managing Comments
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  add_new_comment: function (req, res) {
    var action = "add_new_comment";
    try {
      var params = req.query;
      CommentsServices.add_new_comment(
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

