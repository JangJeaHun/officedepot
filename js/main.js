$(document).ready(function () {
  category();
  var idx = 0;
  slide();

  // $(".mainSlide").slick({
  // infinite:true,
  // arrows:false,
  // dots:true,
  // autoplay:true,
  // autoplaySpeed:4000
  // });

  // .main_bottom>ul>li>ul>li>a:hover{
  //     border-bottom: solid 3px red;
  // }

  // $(".main_bottom>ul>li>ul>li>a").hover(function(){
  //     $(this).addClass("on").css({
  //         borderBottom: "solid 3px red"
  //     });

  // },function(){
  //     $(this).css({
  //         borderBottom: "1px solid #eee"
  //     })
  //     $(".main_bottom>ul>li a").removeClass();
  // })

  // $(".listA>a").mouseover(function () {
  //     var li_on = $(this).parent().parent().parent().attr("data-group-filter");
  //     var li_on_num = $(this).parent().eq("li").index();

  //     console.log(li_on_num);
  //   if(data-group-filter==0 & ){

  //   }

  // });
  $(".main_bottom>ul>li").mouseover(function () {
    var group = $(this).attr("data-group-filter");
    $(".tab>li", this).mouseover(function () {
      var index = $(this).index();
      $(".mainSlide>div[data-group=" + group + "]").eq(index).fadeIn().siblings("div").fadeOut();
    });
  });

  $(".main_bottom").hover(
    function () {
      clearInterval(ms);
    },
    function () {
      slide();
    }
  );

    var ms;
    // 메인슬라이드
    function slide() {
      ms = setInterval(function () {
        $(".mainSlide>div").eq(idx).fadeOut();
        if (idx < 12) {
          idx++;
        } else {
          idx = 0;
        }
        $(".mainSlide>div").eq(idx).fadeIn();
      }, 3000);
    }
});

function category() {
  $("#allMenuBtn").click(function () {
    $(".allMenu").slideToggle();
  });

  $(".allMenu_close").click(function () {
    $(".allMenu").slideToggle();
  });
}
