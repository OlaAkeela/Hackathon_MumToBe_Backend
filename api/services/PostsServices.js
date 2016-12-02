module.exports = {

  get_posts_list: function (params, callback) {
    try {

      var success = true;

      if (params.category_id == null || params.category_id == '' ||
        params.count == null || params.count == '' ||
        params.step == null || params.step == '') {
        callback(!success, {
          message: "Invalid params"
        });
        return;
      }

      var offset = parseInt(params.count * params.step)

      query = "SELECT *\
               FROM posts\
               WHERE category_id = ?\
               LIMIT ?, ?";

      var bind = [params.category_id, offset, parseInt(params.count)]
      Posts.query(
        query,
        bind,
        function(err, data){
          if (err){

            callback(!success, "No Data");
            return;
          }

          if (data.length == 0) {
            callback(success, {posts: {}})
            return;
          }
          callback(success, {posts: data})
          return;
        });
    } catch (exception) {
      callback(!success, "Error");
      return;
    }
  },
  get_post_details: function (params, callback) {
    try {

      var success = true;

      if (params.post_id == null || params.post_id == '' ||
        params.count == null || params.count == '' ||
        params.step == null || params.step == '') {
        callback(!success, {
          message: "Invalid params"
        });
        return;
      }

      var offset = parseInt(params.count * params.step)

      query = "SELECT _c.*, _u.*\
               FROM `posts` _p\
               LEFT JOIN `comments` _c\
                  ON _p.`id` = _c.`post_id`\
               LEFT JOIN `users` _u\
                  ON _c.`user_id` = _u.`id`\
               WHERE _p.`id` = ?\
               LIMIT ?, ?";

      var bind = [params.post_id, offset, parseInt(params.count)]
      Posts.query(
        query,
        bind,
        function(err, data){
          if (err){
            console.log(err)
            callback(!success, "No Data");
            return;
          }

          if (data.length == 0) {
            callback(success, {comments: {}})
            return;
          }

          console.log(data)
          callback(success, {comments: data})
          return;
        });
    } catch (exception) {
      callback(!success, "Error");
      return;
    }
  },
  get_user_posts: function (params, callback) {
    try {

      var success = true;

      if (params.user_id == null || params.user_id == '' ||
        params.count == null || params.count == '' ||
        params.step == null || params.step == '') {
        callback(!success, {
          message: "Invalid params"
        });
        return;
      }

      var offset = params.count * params.step

      query = "SELECT *\
               FROM posts\
               WHERE user_id = ?\
               LIMIT ?, ?";

      var bind = [params.user_id, parseInt(offset), parseInt(params.count)]
      Posts.query(
        query,
        bind,
        function (err, data) {
          if (err) {
            console.log(err)
            callback(!success, "No Data");
            return;
          }

          if(data.length == 0){
            callback(success, {posts:{}})
            return;
          }
          callback(success, {posts: data})
          return;
        });
    } catch (exception) {
      callback(!success, "Error");
      return;
    }
  },


  add_new_post: function (params, callback) {
    try {

      var success = true;

      if (params.title == null || params.title == '' ||
        params.user_id == null || params.user_id == '' ||
        params.subtitle == null || params.subtitle == '' ||
        params.category_id == null || params.category_id == '') {
        console.log(params)
        callback(!success, {
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
      callback(!success, "Error");
      return;
    }
  }
};
