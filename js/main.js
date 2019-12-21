$(function () {
  $('.menuToggle').on('click', function () {
    $('.overlay').slideToggle(300, function () {
      if ($(this).css('display') === 'none') {
        $(this).removeAttr('style');
      }
    });
  });
});

$(function () {
  $('.show_popup').on('click', function () {
    $('.callback-form').slideToggle(300, function () {
      if ($(this).css('display') === 'none') {
        $(this).removeAttr('style');
      }
    });
  });

  $('.close').click(function () {
    $('.callback-form').hide();
  });
});

$(function () {
  var $topMenu = $('.topmenu');
  var isTransitioning;
  $(window).on('scroll', function (e) {
    if (window.matchMedia('(min-width: 1020px)').matches) {
      if (window.scrollY >= 145) {
        if (!isTransitioning && !$topMenu.hasClass('fixed')) {
          isTransitioning = true;
          $topMenu
            .hide()
            .addClass('fixed')
            .fadeIn({
              complete: function () {
                isTransitioning = false;
              }
            });
        }
      } else {
        if (!isTransitioning && $topMenu.hasClass('fixed')) {
          isTransitioning = true;
          $topMenu.fadeOut({
            complete: function () {
              $topMenu
                .removeClass('fixed')
                .show();
              isTransitioning = false;
            }
          });
        }
      }
    }
  });
});
