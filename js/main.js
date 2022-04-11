$(document).ready(function () {
  $("#allMenuBtn").click(function () {
    $(".allMenu").show();
  });

  $(".allMenu_close").click(function () {
    $(".allMenu").hide();
  });

  $(".mainSlide").slick({
    fade: true,
    pauseOnHover: true,
    autoplay: true,
    autoplaySpeed: 3000,
  });

  $(".tab>li>a").mouseover(function () {});
});
