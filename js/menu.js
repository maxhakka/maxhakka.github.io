//Script to change color of menu button according to active section
var targetOffset = $("#about").offset().top;
var secondTargetOffset = $("#contact").offset().top;

$('#prtf').css({"color":"rgb(77, 0, 179)"});

var $w = $(window).scroll(function(){
    if ( $w.scrollTop() >= secondTargetOffset ) { 
      $('#abt').css({"color":"black"});
      $('#prtf').css({"color":"black"});
      $('#cntct').css({"color":"rgb(77, 0, 179)"});
    } else if ( $w.scrollTop() >= targetOffset){
      $('#prtf').css({"color":"black"});
      $('#abt').css({"color":"rgb(77, 0, 179)"});
      $('#cntct').css({"color":"black"});
    } else {
      $('#prtf').css({"color":"rgb(77, 0, 179)"});
      $('#abt').css({"color":"black"});
      $('#cntct').css({"color":"black"});
    }
});