//Script to change color of menu button according to active section
let targetOffset = $("#about").offset().top;
let secondTargetOffset = $("#contact").offset().top;

$('#prtf').css({"color": "rgb(29, 63, 255)"});

var $w = $(window).scroll(function(){
    if ( $w.scrollTop() >= secondTargetOffset - 50 ) {
      $('#prtf').css({"color":"rgba(0, 0, 0, 0.8)"});
      $('#abt').css({"color":"rgba(0, 0, 0, 0.8)"});
      $('#cntct').css({"color":"rgb(29, 63, 255)"});
    } else if ( $w.scrollTop() >= targetOffset - 50){
      $('#prtf').css({"color":"rgba(0, 0, 0, 0.8)"});
      $('#abt').css({"color":"rgb(29, 63, 255)"});
      $('#cntct').css({"color":"rgba(0, 0, 0, 0.8)"});
    } else {
      $('#prtf').css({"color":"rgb(29, 63, 255)"});
      $('#abt').css({"color":"rgba(0, 0, 0, 0.8)"});
      $('#cntct').css({"color":"rgba(0, 0, 0, 0.8)"});
    }
});
