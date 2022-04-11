$(document).ready(function(){
    $("#allMenuBtn").click(function(){
        $(".allMenu").show();
    })
    
    $(".allMenu_close").click(function(){
        $(".allMenu").hide();
        
    })
    
    // $('.main_slide').slick({
    //     fade:true,
    //     pauseOnHover:true,
    //     autoplay:true,
    //     autoplaySpeed:3000
    // });

    var idx = $(".main_bottom>ul a").index();
    alert(idx);

    $(".main_bottom>ul>li>ul>li>a").eq(idx).mouseover(function(){
        $(".mainSlide>div").eq(idx).fadeIn().siblings("div").fadeOut();
    })

})