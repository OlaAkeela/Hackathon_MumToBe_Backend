/**
 * UsersController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  sign_in: function (req, res) {
    var action = "sign_in";
    try {
      var params = req.body;
      UsersServices.sign_in(
        params,
        function (success, data, message) {
          if (success){
            success = 1
          }else{
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
  },
  sign_up: function (req, res) {
    var action = "sign_up";
    try {
      var params = req.body;
      UsersServices.sign_up(
        params,
        function (success, data, message) {
          if (success){
            success = 1
          }else{
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
  },
  upload_img: function (req, res) {
    var action = "upload_img";
    try {
      var params = req.body;
      UsersServices.upload_img(
        params,
        function (success, data, message) {
          if (success){
            success = 1
          }else{
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
  },
  set_user_settings: function (req, res) {
    var action = "set_user_settings";
    try {
      var params = req.body;
      UsersServices.set_user_settings(
        params,
        function (success, message, data) {
          if (success){
            success = 1
          }else{
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

