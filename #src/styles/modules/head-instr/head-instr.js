$(document).ready(function(){

  // slider options
   $('.head-instr .slider__imgs').slick({
    adaptiveHeight: true,
    arrows: false,
    asNavFor: '.head-instr .slider__txts .slider__wrap',
    responsive: [
      {
        breakpoint: 850,
        settings: {
          dots: true
        }
      }
    ]
   });

   $('.head-instr .slider__txts .slider__wrap').slick({
     arrows: false,
     adaptiveHeight: true,
     asNavFor: '.head-instr .slider__imgs',
     fade: true
   });

   // tabs
   $('.head-instr__tag').click(function(){
    $(this).addClass('is-active').siblings().removeClass('is-active');
    let tabName = $(this).html().toLowerCase();
    $(".head-instr__tab[data-name='"+tabName+"']").addClass('is-active').siblings().removeClass('is-active');
   });
 });