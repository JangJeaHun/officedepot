$(document).ready(function () {

  Kakao.init('dd0ce418ea8258701abccc22fe49ada3'); //발급받은 키 중 javascript키를 사용해준다.
  console.log(Kakao.isInitialized()); // sdk초기화여부판단
  var idx = 0;

  slide();
  numbering();
  category();
  mv_btn();
  scroll_header();
  tab();
  header_ranking();
  scroll();
  // kakaoLogin();
  // kakaoLogout();

  


  $(".slide_btn>.btn_next").click(function(){
    $(".mainSlide>div").eq(idx).removeClass("on").fadeOut();
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

  $(".main_bottom>ul>li").mouseover(function () {
    var group = $(this).attr("data-group-filter");
    $(".tab>li", this).mouseover(function () {
      var index = $(this).index();
      $(".mainSlide>div[data-group=" + group + "]").eq(index).fadeIn().addClass("on").siblings("div").fadeOut().removeClass("on");
      numbering()
    });
  });



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

    $(".main_bottom, .main>.mainSlide, .main>.m_slide>").hover(
      function () {
        clearInterval(ms);
      },
      function () {
        slide();
      }
    );

    
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
  // console.log(index);
  var num_max = $(".main>.mainSlide div").length;
  // console.log(num_max);
  $(".slide_btn .numbering .num_max").empty().append(num_max);
}

// 상단에 메뉴 픽스 하기
function scroll_header(){
  $(window).scroll(function () {
    var height = $(window).scrollTop();
    var width = $(window).width();

    // console.log(height)
    if(height>200 && width>769){
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

// 태블릿 화면

function header_ranking(){

  $(".m_header_bottom>button").click(function(){
    $(".m_header_bottom>button").hide();
    $("#m_header_bottom_ranking").show();
  })
  
  $("#m_header_bottom_ranking>button i").click(function(){
    $(".m_header_bottom>button").show();
    $("#m_header_bottom_ranking").hide();
  })

  $("#m_header_bottom_ranking .ranking_tab>li").click(function(){
    var idx = $(this).index();

    $(this).addClass("acctive").siblings("li").removeClass();
    $("#m_header_bottom_ranking .data_val>div").eq(idx).show().css({display:"flex"}).siblings("div").hide();
  })
}


//스크롤 위 아래 감지//
function scroll(){
  $(document).on('mousewheel',function(e){ 
    var wheel = e.originalEvent.wheelDelta;
    if(wheel>0){ 
      //스크롤 올릴때 
      $("#m_bottom_menu").hide();
      // $(".m_header_bottom").show();
      
    } else { 
      //스크롤  내릴때 
      $("#m_bottom_menu").show();
      // $(".m_header_bottom").hide();
        } 

  });
}


function kakaoLogin() {
  let state;
  
  
  Kakao.Auth.login({
    success: function (response) {
      Kakao.API.request({
        url: '/v2/user/me',
        success: function (response) {
          console.log(response)
          console.log("정상적으로 로그인 되었습니다",response)
          let state = true;
          
          if(state == true){
            $(".header_top_menu .login").hide();
            $(".header_top_menu .logout").show();
          }else{
            $(".header_top_menu .login").show();
            $(".header_top_menu .logout").hide();
          }
          
        },
        fail: function (error) {
          console.log(error)
        },
      })
    },
    fail: function (error) {
      console.log(error)
    },
  })

}
//카카오로그아웃  
function kakaoLogout() {
  let state;

  if (Kakao.Auth.getAccessToken()) {
    Kakao.API.request({
      url: '/v1/user/unlink',
      success: function (response) {
        console.log(response)
        console.log("정상적으로 로그아웃 되었습니다",response)

        let state = false;
          
        if(state == true){
          $(".header_top_menu .login").hide();
          $(".header_top_menu .logout").show();
        }else{
          $(".header_top_menu .login").show();
          $(".header_top_menu .logout").hide();
        }
      },
      fail: function (error) {
        console.log(error)
      },
    })
    Kakao.Auth.setAccessToken(undefined)
  }
} 