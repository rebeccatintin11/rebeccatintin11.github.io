$(document).ready(function(){
  $("#nav-about").click(function() {
    $('html, body').animate({
        scrollTop: $("#about").offset().top
    }, 1000);
    return false;
  });

  $("#nav-project").click(function() {
    $('html, body').animate({
        scrollTop: $("#projects").offset().top
    }, 1000);
    return false;
  });

  $("#nav-hobbies").click(function() {
    $('html, body').animate({
        scrollTop: $("#hobbies").offset().top
    }, 1000);
     return false;
  });

  if($(window).width() >= 720) {
    $("#going-up").click(function() {
      $('html, body').animate({
          scrollTop: $("#about").offset().top
      }, 1000);
       return false;
    });
  } else {
    $("#going-up").click(function() {
      $('html, body').animate({
          scrollTop: 0
      }, 1000);
       return false;
    });
  }
});
