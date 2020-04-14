//Script to change color of menu button according to active section
var targetOffset = $("#about").offset().top;
var secondTargetOffset = $("#contact").offset().top;

$('#prtf').css({"color":"#009688"});

var $w = $(window).scroll(function(){
    if ( $w.scrollTop() >= secondTargetOffset ) { 
      $('#abt').css({"color":"black"});
      $('#prtf').css({"color":"black"});
      $('#cntct').css({"color":"#009688"});
    } else if ( $w.scrollTop() >= targetOffset){
      $('#prtf').css({"color":"black"});
      $('#abt').css({"color":"#009688"});
      $('#cntct').css({"color":"black"});
    } else {
      $('#prtf').css({"color":"#009688"});
      $('#abt').css({"color":"black"});
      $('#cntct').css({"color":"black"});
    }
});