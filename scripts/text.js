// Compare the element's position with the scroll position each time the window is scrolled
// Fade in when the element appears in-screen
function scrollFadeIn(element) {
  $(window).scroll(function () {
    $(element).each(function () {
      var elemPos = $(this).offset().top; // element position
      var scroll = $(window).scrollTop(); // scroll position
      var windowHeight = $(window).height(); // window hight

      // when the scroll position exceeds the position of the element
      if (scroll > elemPos - windowHeight + 100) {
        $(this).animate({ opacity: 1 }, 3000); // fade in
      }
    });
  });
}

$(document).ready(function () {
  scrollFadeIn(".about-section");
  scrollFadeIn(".work1-container");
  scrollFadeIn(".work2-container");
  scrollFadeIn(".skills-wrapper");
});

// ityped.js
ityped.init("#ityped", {
  strings: ["Welcome to Jun's Portfolio."],
  startDelay: 200,
  typeSpeed: 110,
  loop: false,
  cursorChar: "",
});
