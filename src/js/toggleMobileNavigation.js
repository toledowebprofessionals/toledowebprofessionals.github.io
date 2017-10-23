var toggleMobileNavigation = function() {

  "use strict";

  // Toggle mobile navigation when menu icon is clicked.

  $(".navbar-nav li a").click(function (event) {
    event.preventDefault();
    $(".navbar-collapse").collapse("hide");
  });

}();
