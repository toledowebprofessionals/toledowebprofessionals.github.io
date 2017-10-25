var navigationScroll = function() {

  "use strict";

  // Scroll from top navigation to hashed section.

  $('a[href^="#"]').click(function() {
    $.scrollTo($(this).attr('href'), 800, {offset:-89});
  });
}();
