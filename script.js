/**
 * PRELOAD
 * 
 * loading will be end after document is loaded
 */

const preloader = document.querySelector("[data-preaload]");

window.addEventListener("load", function () {
  preloader.classList.add("loaded");
  document.body.classList.add("loaded");
});


//   NAV--BAR

$(document).ready(function(){

  $('#menu').click(function(){
      $(this).toggleClass('fa-times');
      $('.navbar').toggleClass('active');
  });

  $(window).on('scroll load', function(){

      $('#menu').removeClass('fa-times');
      $('.navbar').removeClass('active');

      if($(window).scrollTop()>60){
          $('.section--1').addClass('active');
      }else{
          $('.section--1').removeClass('active');
      }

      $('section').each(function(){
          let top = $(window).scrollTop();
          let height = $(this).height();
          let offset = $(this).offset().top - 200;
          let id = $(this).attr('id');

          if(top >= offset && top < offset + height){
              $('.navbar').removeClass('active');
              $('.navbar').find(`[href="#${id}"]`).addClass('active');
          }
      })

  })

})