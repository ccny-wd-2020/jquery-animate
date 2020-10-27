$("#hit-me").click(function(){
  $("#animation-div").animate({right: '300px'}, "slow");
  $("#animation-div").animate({right: '300px', top: '300px'}, "slow");
  $("#animation-div").animate({left: '10px', top: '300px'}, "slow");
  $("#animation-div").animate({left: '10px', top: '20px'}, "slow");


  $("#animation-div").animate({height: '+=300px', width: '+=300px', opacity: '.5'});
  $("#animation-div").animate({height: '-=300px', width: '-=300px', opacity: '1.0'});
});


$(".animation-div-two").hover(function(){
  $(".animation-div-two").animate({fontSize: '30px'});
});

$(".animation-div-two").mouseleave(function(){
  $(".animation-div-two").animate({fontSize: '16px'});
});
