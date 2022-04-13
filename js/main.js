$(document).ready(function () {
  var idx = 0;
  numbering();
  category();
  slide();
  mv_btn();
  scroll_header();

 
 
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
        $(".mainSlide>div").eq(idx).fadeOut().removeClass("on");
        if (idx < 12) {
          idx++;
        } else {
          idx = 0;
        }
        $(".mainSlide>div").eq(idx).fadeIn().addClass("on");
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

function slide_prev(){

}
function slide_next(){

}
function numbering(){
  // var num = $(".main .mainSlide div.on").parent().index();
  var num = $(".mainSlide>div").find(".on").parent().index();

  var num_max = $(".mainSlide>div").length;
  $(".slide_btn .numbering .num").empty().append(num+1);
  $(".slide_btn .numbering .num_max").empty().append(num_max);
  // alert(num+1);
}


// function numbering(){
//   var number_max = $("#mainVisual .mask01 ul li").length;
//   var number = $("#mainVisual .mask01 ul li.on").index();
//   $("#mainVisual .numbering .num_max").empty().append(number_max);
//   $("#mainVisual .numbering .num").empty().append(number+1);
// }


// 상단에 메뉴 픽스 하기
function scroll_header(){
  $(window).scroll(function () {
    var height = $(window).scrollTop();
    if(height>200){
      $(".sub_header").show().addClass("jbFixed");
    }else{
      $(".sub_header").hide().removeClass("jbFixed");
    }
    console.log(height);
  });
  $(window).trigger("scroll");
}