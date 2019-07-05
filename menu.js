//Script to change color of menu button according to active section
var targetOffset = $("#abt").offset().top;

var $w = $(window).scroll(function(){
    if ( $w.scrollTop() > targetOffset ) {   
        $('#abt').css({"color":"#009688"});
        $('#prtf').css({"color":"black"});
    } else {
      $('#abt').css({"color":"black"});
      $('#prtf').css({"color":"#009688"});
    }
});