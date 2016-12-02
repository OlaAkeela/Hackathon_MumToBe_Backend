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

      query = "SELECT *\
               FROM `users` \
               WHERE `email`= ? AND `password` = ?";

      Users.find({email: params.email}, {password: params.password}).exec(function (err, records) {

        if (err) {
          callback(!success, "Error")
          return;
        }
        if (records.length == 0) {
          callback(!success, "Not Registered")
        } else {
          callback(success, "Welcome Back", records);
        }
      });
    } catch (exception) {
      callback(!success, "Error");
    }
  },
  sign_up: function (params, callback) {
    try {

      var success = true;
      if (params.email == null || params.email == '' ||
        params.password == null || params.password == '' ||
        params.username == null || params.username == ''
      ) {
        callback(!success, {
          message: "Invalid params"
        });
        return;
      }

      Users.find({email: params.email}).exec(function (err, records) {
        if (err) {
          console.log(err)
          callback(!success, err)
          return;
        }

        if (records.length > 0) {
          callback(!success, {
            message: "This email is already registered"
          })
        }

        Users.create(params).exec(function (err, user) {
          if (err) {
            console.log(err)
            callback(!success, err)
            return;
          }

          callback(success, "Added Successfully", user);
          return;
        });
      });
      /*
       query = "SELECT `email`\
       FROM `users`\
       WHERE `email` = ? ";

       Connection.query(
       query,
       [params.email],
       function (success,data) {
       if (err) {
       callback(!success, err)
       return;
       }
       if (data){
       callback(!success, {
       message: "This email is already registered"
       })
       } else{

       if(params.language){

       }

       query = "INSERT into `users` ('email', 'password', 'username') \
       VALUES (?, ?, ?); \
       SELECT `id` \
       FROM `users`\
       WHERE `email` = ?";
       var bind = [params.email, params.password];
       Connection.query(
       query,
       bind,
       function (err, data) {
       if (err) {
       callback(!success, err)
       return;
       }
       callback(success, "Added Successfully",data[1]);
       });
       }
       });
       */
    } catch (exception) {
      console.log(exception)
      callback(!success, exception);
      return;
    }
  },
  upload_img: function (params, callback) {
    try {

      var success = true;
      if (params.image_data == null || params.image_data == ''
      ) {
        callback(!success, {
          message: "Invalid params"
        });
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
          callback(!success, {}, "Upload Failed !");
          return
        }
        callback(success, {}, "Uploaded Successfully");
        return
      });
    } catch (exception) {
      console.log(exception)
      callback(!success, exception);
      return;
    }
  },
  set_user_settings: function (params, callback) {
    try {

      var success = true;
      if (params.user_id == null || params.user_id == ''
      ) {
        callback(!success, {
          message: "Invalid params"
        });
        return;
      }

      Users.find({id: params.user_id}).exec(function (err, records) {
        if (err) {
          console.log(err)
          callback(!success, err)
          return;
        }

        if (records.length <= 0) {
          callback(!success, {
            message: "Wrong user id"
          })
        }


        Users.update({id: params.user_id}, params).exec(function afterwards(err, updated) {
          if (err) {
            callback(!success, err);
            return;
          }
          callback(success,"Added Successfully", "")

        });
      })
    } catch (exception) {
      console.log(exception)
      callback(!success, exception);
      return;
    }
  }

};
