$(document).ready(function() {
  $(window).resize(function(){
window.setTimeout('location.reload()', 100);
});
  if($(window).width()<768){
    $(".fotorama__nav-wrap").on("click",function(){
    this.addClass("hidden-xs");
  })
   }
  $(".slide").owlCarousel({
     items:1,
     nav:true,
     dots:false,
     navText:["СЕМЕЙНЫЙ ОТДЫХ","КОРПОРАТИВНЫЙ"]
  });
   if($(window).width()>1199){ 
    $(".reviews__slider").owlCarousel({
     items:2,
     nav:true,
     dots:true
  });
  }
  if($(window).width()<1200){
    $(".reviews__slider").removeClass("owl-carousel");
  }
   $(".shares__slider").owlCarousel({
     items:1,
     dots:true,
     nav:true

  });
   // $(".main-header__burger").on("click",function(){
   //  $(".main-header__menu").toggleClass("enable");
   // });
   // $(".house").on("click",function(){
   //  $(".house").toggleClass("hotel-dark");
   // });
   // $(".hotel").on("click",function(){
   //  $(".hotel").toggleClass("hotel-dark");
   // });
    if($(window).width()>1150){ 
    $(".also-room__slider").owlCarousel({
     items:3
   
  });
  }
 if($(window).width()>750){ 
    $(".also-room__slider").owlCarousel({
     items:2,
     dots:true
  });
  }
  
   if($(window).width()<749){
    $(".also-room__slider").removeClass("owl-carousel");
  }
   if($(window).width()>750){ 
    $(".economy-room__slider").owlCarousel({
     items:1,
     dots:true
  });
  }
   if($(window).width()<749){
    $(".economy-room__slider").removeClass("owl-carousel");
  }
  
   $(".input").on("blur", function(){
    if(this.value){
     $(this).parent("div").addClass("okey");
  }
   }) 
    $(".input").on("blur", function(){
    if(this.value){
     $(this).parent(".payment-item").addClass("okey");
  } 
  else 
      {
        $(this).parent(".payment-item").addClass("erorr");
      }

   })
   
});
$(document).ready(function() {
 //  $('#toglink0').click( function() {

 // if ($('#info').css("display")=="block") {$('#togblock0').css("display", "none");
 // } else {$('#togblock0').css("display", "block");
 // }
 // });

$('.form__thirty-step__type label').click(function( e ) {
  var active_class = $(this).attr("class");
  var active_tab = $(".info");
  active_tab.each(function(){
    if ($(this).hasClass(active_class)){
      $(this).css("display", "block");
    }
    else {
      $(this).css("display", "none")
  }
  });
   });

 });