//Script to change color of menu button according to active section
let targetOffset = $("#about").offset().top;
let secondTargetOffset = $("#contact").offset().top;

$('#prtf').css({"color": "rgb(111, 0, 255)"});

var $w = $(window).scroll(function(){
    if ( $w.scrollTop() >= secondTargetOffset - 50 ) {
      $('#prtf').css({"color":"black"});
      $('#abt').css({"color":"black"});
      $('#cntct').css({"color":"rgb(111, 0, 255)"});
    } else if ( $w.scrollTop() >= targetOffset - 50){
      $('#prtf').css({"color":"black"});
      $('#abt').css({"color":"rgb(111, 0, 255)"});
      $('#cntct').css({"color":"black"});
    } else {
      $('#prtf').css({"color":"rgb(111, 0, 255)"});
      $('#abt').css({"color":"black"});
      $('#cntct').css({"color":"black"});
    }
});