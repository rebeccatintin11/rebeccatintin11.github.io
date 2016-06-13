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

  $("#going-up").click(function() {
    $('html, body').animate({
        scrollTop: $("#about").offset().top
    }, 1000);
     return false;
  });
});
