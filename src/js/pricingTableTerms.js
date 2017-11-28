var pricingTableTerms = function() {

  "use strict";

  var initiallyChecked = $('[name="sponsorship-term"]:checked').val();

  $('[data-item-payment-interval-count]').addClass('d-none');
  $('[data-item-payment-interval-count="' + initiallyChecked + '"]').removeClass('d-none');

  $('[name="sponsorship-term"]').change(function() {
    $('[data-item-payment-interval-count]').addClass('d-none');
    $('[data-item-payment-interval-count="' + this.value + '"]').removeClass('d-none');
    console.log(this.value);
  });
}();
