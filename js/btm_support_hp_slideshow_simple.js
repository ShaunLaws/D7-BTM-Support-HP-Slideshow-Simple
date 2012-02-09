// Slideshow

(function ($) {

  Drupal.behaviors.btm_support_hp_slideshow_simple = {
    attach: function (context, settings) {
      $('#block-views-slideshow-block .view-content').cycle({
        fx: 'fade' // choose your transition type, ex: fade, scrollUp, shuffle, etc...
      });
    }
  };

})(jQuery);
