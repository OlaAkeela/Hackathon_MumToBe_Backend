/**
 * Created by yshurrab on 02/12/16.
 */

module.exports = {


  get_categories: function (params, callback) {
    try {

      var success = true;

      if (params.cat_language == null || params.cat_language == '') {
        callback(
          !success, {
            message: "Invalid params"
          });
        return;
      }

      query = "SELECT *\
               FROM `categories` \
               WHERE `cat_language`= ?";

      Categories.find({cat_language: params.cat_language}).exec(function (err, records) {

        if (err) {
          callback(!success, "Error")
          return;
        }
        if (records.length == 0) {
          callback(!success, "There is no categories yet!")
        } else {
          callback(success, {
            "categories": records
          }, "success");
        }
      });
    } catch (exception) {
      callback(!success, "Error");
    }
  }
};
