/**
 * Created by OLA on 12/2/2016.
 */

module.exports = {

  sign_in: function (params, callback) {
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
  sign_up: function (params, callback) {
    try {

      var success = true;
      if (params.email == null || params.email == '' ||
        params.password == null || params.password == '' ||
        params.username == null || params.username == ''
      ) {
        callback(!success,"Invalid params");
        return;
      }

      Users.find({email: params.email}).exec(function (err, records){
        if (err) {
          callback(!success, err);
          return;
        }

        if (records.length > 0) {
          callback(!success, "This email is already registered")
          return;
        }

        Users.create(params).exec(function (err, user) {
          if (err) {
            callback(!success, err);
            return;
          }

          callback(success, "Added Successfully", user);
          return;
        });
      });
    } catch (exception) {
      callback(!success, exception);
      return;
    }
  },
  upload_img: function (params, callback) {
    try {

      var success = true;
      if (params.image_data == null || params.image_data == ''
      ) {
        callback(!success, "Invalid params");
        return;
      }
      var base64 = params.image_data;
      var ext;
      if (base64.startsWith("data:image\/png;base64,")) {
        ext = ".png";
      } else if (base64.startsWith("data:image\/jpeg;base64,")) {
        ext = ".jpg";
      } else {
        var error_res = "Invalid params";
        error_res["params"] = {
          image_data: false
        };
        callback(!success, error_res);
        return;
      }

      var base64Data = base64.replace(/^data:image\/(png|jpeg);base64,/, "");

      var file_name = "/" + (new Date().getTime()) + ext;
      var destination_images_folder = "D:" + file_name
      //var destination_images_folder = "/var/www/html/hackathon/" + file_name

      params.image_data = file_name;

      require("fs").writeFile(destination_images_folder, base64Data, 'base64', function(err){
        if(err){
          callback(!success, "Upload Failed !", {});
          return
        }
        callback(success, "Uploaded Successfully", {image_url: destination_images_folder});
        return
      });
    } catch (exception) {
      callback(!success, exception);
      return;
    }
  },
  set_user_settings: function (params, callback) {
    try {

      var success = true;
      if (params.user_id == null || params.user_id == ''
      ) {
        callback(!success, "Invalid params");
        return;
      }

      Users.find({id: params.user_id}).exec(function (err, records) {
        if (err) {
          console.log(err)
          callback(!success, err)
          return;
        }

        if (records.length <= 0) {
          callback(!success, "Wrong user id")
          return;
        }
        
        Users.update({id: params.user_id}, params).exec(function afterwards(err, updated) {
          if (err) {
            callback(!success, err);
            return;
          }
          callback(success,"Updated Successfully", "")
          return;
        });
      })
    } catch (exception) {
      console.log(exception)
      callback(!success, exception);
      return;
    }
  },
  set_user_reg_id: function (params, callback) {
    try {

      var success = true;
      if (params.user_id == null || params.user_id == ''
      ) {
        callback(!success, "Invalid params");
        return;
      }

      Users.find({id: params.user_id}).exec(function (err, records) {
        if (err) {
          console.log(err)
          callback(!success, err)
          return;
        }

        if (records.length <= 0) {
          callback(!success, "Wrong user id")
          return;
        }
        
        Users.update({id: params.user_id}, params).exec(function afterwards(err, updated) {
          if (err) {
            callback(!success, err);
            return;
          }
          callback(success,"Updated Successfully", {})
          return;

        });
      })
    } catch (exception) {
      callback(!success, exception);
      return;
    }
  }

};
