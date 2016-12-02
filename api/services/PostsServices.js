module.exports = {

  get_posts_list: function (params, callback) {
    try {

      var success = true;

      if (params.email == null || params.email == '' ||
        params.password == null || params.password == '') {
        callback(!success, {
          message: "Invalid params"
        });
        return;
      }

      Users.find({email: params.email}, {password: params.password}).exec(function (err, records) {

        if (err) {
          callback(!success, "Error");
          return;
        }
        if (records.length == 0) {
          callback(!success, "Not Registered");
          return;
        } else {
          callback(success, "Welcome Back", records);
          return;
        }
      });
    } catch (exception) {
      callback(!success, "Error");
      return;
    }
  },
};
