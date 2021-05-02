$(document).ready(function(){
    $('.speach__slider').slick({
      dots: false,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 3000,
      speed: 300,
      slidesToScroll: 1,
      arrows: true,
      prevArrow: '<div class="slick-prev"><i class="fa fa-angle-left" style="color:#cccccc" aria-hidden="true"></i></div>',
      nextArrow: '<div class="slick-next"><i class="fa fa-angle-right" style="color:#cccccc" aria-hidden="true"></i></div>'
    });
  });
  
// add color to navbar
var togglenavcolor = function () {
  if ($(window).scrollTop() > 300) {
    $('#navbar').addClass('navbg');
  }
  else {
    $('#navbar').removeClass('navbg');
  }
}

