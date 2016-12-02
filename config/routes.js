/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes map URLs to views and controllers.
 *
 * If Sails receives a URL that doesn't match any of the routes below,
 * it will check for matching files (images, scripts, stylesheets, etc.)
 * in your assets directory.  e.g. `http://localhost:1337/images/foo.jpg`
 * might match an image file: `/assets/images/foo.jpg`
 *
 * Finally, if those don't match either, the default 404 handler is triggered.
 * See `api/responses/notFound.js` to adjust your app's 404 logic.
 *
 * Note: Sails doesn't ACTUALLY serve stuff from `assets`-- the default Gruntfile in Sails copies
 * flat files from `assets` to `.tmp/public`.  This allows you to do things like compile LESS or
 * CoffeeScript for the front-end.
 *
 * For more information on configuring custom routes, check out:
 * http://sailsjs.org/#!/documentation/concepts/Routes/RouteTargetSyntax.html
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` (or `views/homepage.jade`, *
  * etc. depending on your default view engine) your home page.              *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': {
    view: 'homepage'
  },
  "POST /sign_in":{
    "controller":"UsersController",
    "action":"sign_in"
  },
  "POST /sign_up":{
    "controller":"UsersController",
    "action":"sign_up"
  },
  "POST /upload_img":{
    "controller":"UsersController",
    "action":"upload_img"
  },
  "POST /set_user_settings":{
    "controller":"UsersController",
    "action":"set_user_settings"
  },

  "POST /set_user_reg_id":{
    "controller":"UsersController",
    "action":"set_user_reg_id"
  },
  // --- Posts Routs
  "GET /get_posts_list":{
    "controller":"PostsController",
    "action":"get_posts_list"
  },
  "GET /get_user_posts":{
    "controller":"PostsController",
    "action":"get_user_posts"
  },
  "GET /get_post_details": {
    "controller": "PostsController",
    "action": "get_post_details"
  },
  "POST /add_new_post":{
    "controller":"PostsController",
    "action":"add_new_post"
  },

  /***************************************************************************
  *                                                                          *
  * Custom routes here...                                                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the custom routes above, it   *
  * is matched against Sails route blueprints. See `config/blueprints.js`    *
  * for configuration options and examples.                                  *
  *                                                                          *
  ***************************************************************************/
///////////////////////////////Weeks routes//////////////////
  "GET /get_all_weeks_info":{
    "controller":"WeeksController",
    "action":"get_all_weeks_info"
  },
///////////////////////////////Trainings routes//////////////////
  "GET /get_all_trainings":{
    "controller":"TrainingsController",
    "action":"get_all_trainings"
  },
///////////////////////////////Comments routes//////////////////
  "POST /add_new_comment":{
    "controller":"CommentsController",
    "action":"add_new_comment"
  },
///////////////////////////////Categories routes//////////////////
  "GET /get_categories":{
    "controller":"CategoriesController",
    "action":"get_categories"
  }
};
