$( window ).on( "load", function() {

  //Remove flashnotice after 5 seconds
  setInterval(function(){
    $('.notice').css("display", "none");
  }, 5000);

});
