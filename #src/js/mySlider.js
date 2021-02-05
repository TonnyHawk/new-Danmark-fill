$(document).ready(function(){
   $('.btn_prev').click(function(){
      nextSlide();
      alert();
   });
   $('.btn_next').click(function(){
      prevSlide();
   });

   let slideWidth = $(".viewport__slide").width();
   function nextSlide(){
      let left = $('.viewport__slides').css('left');
      $('.viewport__slides').css('left', left - slideWidth);
   }
   function prevSlide(){
      let left = $('.viewport__slides').css('left');
      $('.viewport__slides').css('left', left + slideWidth);
   }
});