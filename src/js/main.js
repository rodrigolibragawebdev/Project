jQuery(document).ready(function ($) {
  $("select").on("change", function () {
    if ($(this).val() === "") {
      $(this).removeClass("select-active");
    } else {
      $(this).addClass("select-active");
    }
  });
});

jQuery(document).ready(function ($) {
  $("input, select, textarea").on("blur change submit", function () {
    if ($(this).hasClass("wpcf7-not-valid")) {
      $(this).addClass("is-invalid");
    } else {
      $(this).removeClass("is-invalid");
    }
  });

  /**
   * Handle menu stick to top
   */
  $(document).ready(function () {
    var lastScrollTop = 0;
    var breakPoint = 200;
    var header = $("#header");
    var navbarHeight = header.outerHeight();

    $(window).scroll(function () {
      var actualScrollHeight = $(this).scrollTop();

      if (
        actualScrollHeight > lastScrollTop &&
        actualScrollHeight > navbarHeight
      ) {
        // CASE SCROLL TOP BOTTOM
        header.removeClass("nav-show");
      } else if (actualScrollHeight <= breakPoint) {
        // CASE BREAKPOINT OF VIEW - desativado
        // header.removeClass("show")
      } else {
        // CASE SCROLL TO TOP
        header.addClass("nav-show");
      }

      lastScrollTop = actualScrollHeight;
    });
  });
});
