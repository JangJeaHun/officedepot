$(document).ready(function () {
  var idx = 0;
  numbering();
  category();
  slide();
  mv_btn();
  scroll_header();
  tab();

  $(".slide_btn>.btn_next").click(function(){
    $(".mainSlide>div").eq(idx).fadeOut().removeClass("on");
      if (idx < 12) {
        idx++;
      } else {
        idx = 0;
      }
    $(".mainSlide>div").eq(idx).fadeIn().addClass("on");
    numbering();
  });

  $(".slide_btn>.btn_prev").click(function(){
    $(".mainSlide>div").eq(idx).fadeOut().removeClass("on");
    if (idx > 0) {
      idx--;
    } else {
      idx = 12;
    }
  $(".mainSlide>div").eq(idx).fadeIn().addClass("on");
  numbering();

})




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
      $(".mainSlide>div[data-group=" + group + "]").eq(index).fadeIn().addClass("on").siblings("div").fadeOut().removeClass("on");
      numbering()
    });
  });

  $(".main_bottom, .main>.mainSlide").hover(
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
        $(".mainSlide>div").eq(idx).fadeOut().removeClass("on");
        if (idx < 12) {
          idx++;
        } else {
          idx = 0;
        }
        $(".mainSlide>div").eq(idx).fadeIn().addClass("on");
        numbering();
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


function mv_btn() {
  $(".slide_play").click(function(){
    $(".slide_pause").show().siblings("i").hide();
    clearInterval(ms);
  })
  $(".slide_pause").click(function(){
    $(".slide_play").show().siblings("i").hide();
    slide();
  })
}

function numbering(){
  var index = $(".main>.mainSlide div.on").index();
  $(".slide_btn .numbering .num").empty().append(index+1);
  console.log(index);
  var num_max = $(".main>.mainSlide>div").length;
  $(".slide_btn .numbering .num_max").empty().append(num_max);
}

// 상단에 메뉴 픽스 하기
function scroll_header(){
  $(window).scroll(function () {
    var height = $(window).scrollTop();
    if(height>200){
      $(".sub_header").show().addClass("jbFixed");
    }else{
      $(".sub_header").hide().removeClass("jbFixed");
    }
    // console.log(height);
  });
  $(window).trigger("scroll");
}


// 회원가입 index
function tab(){
  $("#tab>ul>li").click(function(){
    var tab_idx = $(this).index();

    $(this).children().addClass("on");
    $(this).siblings("li").children().removeClass("on");





    $("#tab_contents>ul>li").eq(tab_idx).show().siblings("li").hide();
  })


}
