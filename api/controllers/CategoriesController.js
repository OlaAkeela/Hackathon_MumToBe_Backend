/**
 * CategoriesController
 *
 * @description :: Server-side logic for managing Categories
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  get_categories: function (req, res) {
    var action = "get_categories";
    try {
      var params = req.query;
      CategoriesServices.get_categories(
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


