/**
 * PostsController
 *
 * @description :: Server-side logic for managing posts
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  get_posts_list: function (req, res) {
    var action = "get_posts_list";
    try {
      var params = req.query;
      PostsServices.get_posts_list(
        params,
        function (success, data) {
          if (success){
            success = 1
          }else{
            success = 2
          }
          return res.json({
            action: action,
            success: success,
            data: data
          });
        }
      )

    } catch (exception) {
      return res.json({
        action: action,
        success: 2,
        data: "No Data"
      })
    }
  },
};

