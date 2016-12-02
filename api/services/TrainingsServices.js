/**
 * Created by yshurrab on 02/12/16.
 */
module.exports = {


  get_all_trainings: function (params, callback) {
    try {

      var success = true;

      if (params.language_id == null || params.language_id == '') {
        callback(
          !success, {
            message: "Invalid params"
          });
        return;
      }

      query = "SELECT *\
               FROM `trainings` \
               WHERE `training_language`= ?";

      Trainings.find({training_language: params.language_id}).exec(function (err, records) {

        if (err) {
          callback(!success, "Error")
          return;
        }
        if (records.length == 0) {
          callback(!success, "There is no trainings yet!")
        } else {
          callback(success, {
            "trainings": records
          }, "success");
        }
      });
    } catch (exception) {
      callback(!success, "Error");
    }
  }
};
