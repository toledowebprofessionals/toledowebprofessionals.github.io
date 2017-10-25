module.exports = function(grunt) {

  // Default
  grunt.registerTask("default", [
    "templates",
    "public",
    "img",
    "fonts",
    "css",
    "js"
  ]);

  // Templates
  grunt.registerTask("templates", [
    "clean:templates",
    "jekyll:templates"
  ]);

  // Public
  grunt.registerTask("public", [
    "clean:public",
    "copy:public"
  ]);

  // Images
  grunt.registerTask("img", [
    "clean:img",
    "copy:img"
  ]);

  // Fonts
  grunt.registerTask("fonts", [
    "clean:fonts",
    "copy:fonts"
  ]);

  // CSS
  grunt.registerTask("css", [
    //"scsslint:src",
    "clean:css",
    "sass:src",
    "postcss:assets",
    "cssmin:vendor",
    "cachebreaker:css"
  ]);

  // JS
  grunt.registerTask("js", [
    "jshint:src",
    "uglify:src",
    "uglify:vendor",
    "cachebreaker:js"
  ]);

  // Watch
  grunt.registerTask("watcher", [
    "watch"
  ]);

  // Connect
  // Watch
  grunt.registerTask("server", [
    "connect:server"
  ]);
};
