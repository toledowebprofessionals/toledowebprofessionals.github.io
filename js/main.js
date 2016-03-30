jQuery(document).ready(function () {
    
// script: back to top script
    
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
  }); //  scroll to top function
});

 // script: scroll from top nav to hash section
 // https://css-tricks.com/snippets/jquery/smooth-scrolling/

  jQuery(document).ready(function () {  
      jQuery(function() {
      jQuery('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
          var target = jQuery(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            jQuery('html, body').animate({
              scrollTop: target.offset().top
                }, 1000);
                return false;
              }
            }
          });
        }); // scroll to hash
    });
    


$(document).ready(function () {
  $(".navbar-nav li a").click(function (event) {
      event.preventDefault();
      $(".navbar-collapse").collapse('hide');
    
  });
});

