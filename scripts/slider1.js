$(document).ready(function(){
  $('.main__slider').slick({
    dots: true,
    arrows: false,
    autoplay: true,
    touchThreshold: 15,
    speed: 1000,
    pauseOnHover: false
  });
});

$(document).ready(function(){
  $('.trust__slider').slick({
    dots: false,
    arrows: true,
    touchThreshold: 15,
    slidesToShow: 4,
    autoplay: true,
    speed: 1000,
    variableWidth: true
  });
});