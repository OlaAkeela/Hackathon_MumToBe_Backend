/**
 * Created by yshurrab on 02/12/16.
 */

module.exports = {

  get_all_weeks_info: function (params, callback) {
    try {

      var success = true;

      if (params.language_id == null || params.language_id == '') {
        params.language_id = 2
        return;
      }

      query = "SELECT *\
               FROM `weeks` \
               WHERE `week_language`= ?";

      Weeks.find({week_language: params.language_id}).exec(function (err, records) {

        if (err) {
          callback(!success, "Error")
          return;
        }
        if (records.length == 0) {
          callback(!success, "There is no data for Weeks!")
        } else {
          callback(success, {
            "weeks": records
          }, "success");
        }
      });
    } catch (exception) {
      callback(!success, "Error");
    }
  }

};

