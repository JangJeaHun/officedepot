$(document).ready(function(){
    $("#allMenuBtn").click(function(){
        $(".allMenu").show();
    })
    
    $(".allMenu_close").click(function(){
        $(".allMenu").hide();
        
    })
    
    $('.main_slide').slick({
        fade:true,
        pauseOnHover:true
    });

    var idx = .index()
    $(".main_bottom>ul>li>ul>li>a").mouseover(function(){

    })

})