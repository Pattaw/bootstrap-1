var typed = new Typed(".typing-animation", {
  strings: ["freelancer", "youtuber", "programmer"],
  typeSpeed: 80,
  backSpeed: 80,
  loop: true,
});

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 2500,
    // dots: true,
  });
});
