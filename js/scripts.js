
$(document).ready(function() {
  var height = $('#nav').offset().top;
  var backup = $('.ctaPhoneNumber').offset().top;
  $(window).resize(function() {
    height = $('#nav').offset().top;
    return height;
  });
  $(window).resize(function() {
    backup = $('.ctaPhoneNumber').offset().top;
    return backup;
  });
  $(window).scroll(function() {
    if (height > backup) {
      if ($(window).scrollTop() > backup) {
        $('#nav').addClass('navbar-fixed');
        $('.ctaPhoneNumber').addClass('padding-top');
      }
      if ($(window).scrollTop() < backup) {
        $('#nav').removeClass('navbar-fixed');
        $('.ctaPhoneNumber').removeClass('padding-top');
      }
    }
    else if (height < backup) {
      if ($(window).scrollTop() > height) {
        $('#nav').addClass('navbar-fixed');
        $('.ctaPhoneNumber').addClass('padding-top');
      }
      if ($(window).scrollTop() < height) {
        $('#nav').removeClass('navbar-fixed');
        $('.ctaPhoneNumber').removeClass('padding-top');
      }
    }
  });

  $("#menu").click(function() {
    if ($("nav").hasClass("showMenu")) {
      $("nav").removeClass("showMenu");
    } else {
      $("nav").addClass("showMenu");
    }
  });
});
