//Script to change color of menu button according to active section
var targetOffset = $("#about").offset().top;
var secondTargetOffset = $("#contact").offset().top;

$('#prtf').css({"color":"black"});
$('#prtf').css({"background-color":"white"});

var $w = $(window).scroll(function(){
    if ( $w.scrollTop() >= secondTargetOffset ) { 
      $('#prtf').css({"color":"white"});
      $('#prtf').css({"background-color":"transparent"});
      $('#abt').css({"color":"white"});
      $('#abt').css({"background-color":"transparent"});
      $('#cntct').css({"color":"black"});
      $('#cntct').css({"background-color":"white"});
    } else if ( $w.scrollTop() >= targetOffset){
      $('#prtf').css({"color":"white"});
      $('#prtf').css({"background-color":"transparent"});
      $('#abt').css({"color":"black"});
      $('#abt').css({"background-color":"white"});
      $('#cntct').css({"color":"white"});
      $('#cntct').css({"background-color":"transparent"});
    } else {
      $('#prtf').css({"color":"black"});
      $('#prtf').css({"background-color":"white"});
      $('#abt').css({"color":"white"});
      $('#abt').css({"background-color":"transparent"});
      $('#cntct').css({"color":"white"});
      $('#cntct').css({"background-color":"transparent"});
    }
});