$(document).ready(function () {
    $("#allMenuBtn").click(function () {
    $(".allMenu").show();
    });

    $(".allMenu_close").click(function () {
    $(".allMenu").hide();
    });



    $(".mainSlide").slick({
    infinite:true,
    arrows:false,
    dots:true,
    autoplay:true,
    autoplaySpeed:4000
    });
    // .main_bottom>ul>li>ul>li>a:hover{
    //     border-bottom: solid 3px red;
    // }

    $(".main_bottom>ul>li>ul>li>a").hover(function(){
        $(this).addClass("on").css({
            borderBottom: "solid 3px red"
        });

        
    },function(){
        $(this).css({
            borderBottom: "1px solid #eee"
        })
        $(".main_bottom>ul>li a").removeClass();
    })

    $(".listA>a").mouseover(function () {
        var li_on = $(this).parent().parent().parent().attr("data-group-filter");
        var li_on_num = $(this).parent().eq("li").index();

        console.log(li_on_num);
    //   if(data-group-filter==0 & ){
            
    //   }

    });


});
