$(".js-classes").click(function() {
  $('html,body').animate({
    scrollTop: $("#classes-container").offset().top},
    'slow');
  });

  $(".js-nature-series").click(function() {
    $('html,body').animate({
      scrollTop: $("#series-container").offset().top},
      'slow');
    });

    $(".js-about").click(function() {
      $('html,body').animate({
        scrollTop: $("#about-container").offset().top},
        'slow');
      });

      $(".js-contact").click(function() {
        $('html,body').animate({
          scrollTop: $("#contact-container").offset().top},
          'slow');
        });
