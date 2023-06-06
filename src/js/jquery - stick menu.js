/**
 * Handle menu stick to top
 */
$(document).ready(function () {
  var lastScrollTop = 0;
  var breakPoint = 400;
  var navbarHeight = $("#navbar").outerHeight();
  var window = $(window).height

  $(window).scroll(function () {
    var actualScrollHeight = $(this).scrollTop();
    console.log(window)

    if (
      actualScrollHeight > lastScrollTop &&
      actualScrollHeight > navbarHeight
    ) {
      // CASE SCROLL TOP BOTTOM
      navbarHeight.removeClass("show");
    } else if (actualScrollHeight <= breakPoint) {
      // CASE BREAKPOINT OF VIEW
      navbarHeight.addClass("show");
    } else {
      // CASE SCROLL TO TOP
      navbarHeight.addClass("show");
    }

    lastScrollTop = actualScrollHeight;
  });
});
