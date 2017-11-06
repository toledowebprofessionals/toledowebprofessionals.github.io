var introductorySlides = function() {

  "use strict";

  var couselTarget = $('.introductory-slides');
  var couselPause  = $('.introductory-slides-pause');
  var couselPlay   = $('.introductory-slides-play');
  var couselPrev   = $('.introductory-slides-prev');
  var couselNext   = $('.introductory-slides-next');

  couselTarget.carousel({
    interval: 10000,
    ride:     'carousel',
    pause:    ''
  });

  couselPause.on('click', function() {
    couselTarget.carousel('pause');
  });

  couselPlay.on('click', function() {
    couselTarget.carousel('next');
    couselTarget.carousel('cycle');
  });

  couselPrev.on('click', function() {
    couselTarget.carousel('pause');
    couselTarget.carousel('prev');
  });

  couselNext.on('click', function() {
    couselTarget.carousel('pause');
    couselTarget.carousel('next');
  });

}();
