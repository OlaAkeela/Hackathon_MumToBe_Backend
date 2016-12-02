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
console.log("222")
      var bind = [params.category_id, offset, params.count]
      Posts.query(
        query,
        bind,
        function(err, data){
          if (err){
            console.log(err)
            callback(!success, "No Data");
            return;
          }

          if(data.length == 0){
            callback(success, {data:{}})
            return;
          }
          callback(success, {posts: data })
          return;
        });
    } catch (exception) {
      callback(!success, "Error");
      return;
    }
  }
};
