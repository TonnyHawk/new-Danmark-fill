$(document).ready(function(){
   $('.head-instr .slider__imgs').slick({
    adaptiveHeight: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 850,
        settings: {
          dots: true
        }
      }
    ]
   });
 });