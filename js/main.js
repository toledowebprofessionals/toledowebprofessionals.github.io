




// back to top script

jQuery(document).ready(function () {
  // show or hide the sticky footer button
  jQuery(window).scroll(function () {
    if (jQuery(this).scrollTop() > 200) {
      jQuery('.go-top').fadeIn(200);
    } else {
      jQuery('.go-top').fadeOut(200);
    }
  });

  // Animate to scroll to top
  jQuery('.go-top').click(function (event) {
    event.preventDefault();

    jQuery('html, body').animate({scrollTop: 0}, 400);
  });

}); // go top