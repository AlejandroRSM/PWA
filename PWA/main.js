$(document).ready(function(){

  $("#menu a").click(function(e){
    e.preventDefault();

    console.log($('#services').offset().top);
    $("html, body")animate({
      scrollTop: $($(this).attr('href')).offset().top
    });
    return false;
  });
});
