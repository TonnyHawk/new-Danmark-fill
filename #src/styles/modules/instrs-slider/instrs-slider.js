$(document).ready(function(){

   // SLICK SLIDER

   $(".instrs-slider .slider").slick({
      arrows: false,
      centerMode: true,
      slidesToShow: 5,
      focusOnSelect: true,
      infinite: false,
      variableWidth: true,
      touchTreshhold: 1,
      responsive: [
         {
            breakpoint: 700,
            settings: {
               slidesToShow: 2,
            }
         }
      ]
   });

   $(".slide__like").click(function(){
      $(this).toggleClass('is-active');
   });


   // document.querySelector(".instrs-slider .slider").addEventListener('mousewheel', function(e){
   //    console.log(e.wheelDelta)
   //    let currentDelta = e.deltaY;
   //    if(currentDelta > 0){
   //       $(".instrs-slider .slider").slick('slickNext')
   //    }
   //    else{
   //       $(".instrs-slider .slider").slick('slickPrev')
   //    }
   //    e.returnValue = false;
   // });
});