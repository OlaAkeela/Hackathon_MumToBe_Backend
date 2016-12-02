/**
 * Created by yshurrab on 02/12/16.
 */

module.exports = {

  add_new_comment: function (params, callback) {
    try {

      var success = true;

      if (params.post_id == null || params.post_id == '' ||
        params.user_id == null || params.user_id == '' ||
        params.comment_text == null || params.comment_text == ''
      ) {
        callback(
          !success, {
            message: "Invalid params"
          });
        return;
      }
      Comments.create(params).exec(function (err, comment) {
        if (err) {
          callback(!success, err);
          return;
        }
        callback(success, "Added Successfully", comment);
        return;
      });
    } catch (exception) {
      console.log(exception)
      callback(!success, "Error");
    }
  }
};
