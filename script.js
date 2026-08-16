$(document).ready(function(){
  $('.awards-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,        /* Set to 0 for continuous continuous scrolling */
    speed: 4000,             /* Duration of the transition in ms */
    cssEase: 'linear',       /* Smooth movement without easing pause */
    rtl: true,               /* Scrolling direction (Right to Left / Left to Right) */
    infinite: true,
    arrows: false,           /* Optional: set to true if you want navigation buttons */
    dots: false,             /* Removes pagination dots under pictures */
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
});