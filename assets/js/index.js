$(function(){
    $("#bar").on("click", function() {
        if($(".bar_menu").css('display') == 'none'){
            $(".bar_menu").css('display', 'block');
        }else
            $(".bar_menu").css('display', 'none');
    });
 });
 $(function(){
    $(".business img:eq(0)").on("click", function() {
        if($(".ac-branding").css('display') == 'none'){
            $(".ac-branding").css('display', 'block');
            $(".ac-inbound").css('display', 'none');
            $(".ac-innovation").css('display', 'none');
        }else{
            $(".ac-branding").css('display', 'none');
        }
    });
    $(".business img:eq(1)").on("click", function() {
        if($(".ac-inbound").css('display') == 'none'){
            $(".ac-inbound").css('display', 'block');
            $(".ac-branding").css('display', 'none');
            $(".ac-innovation").css('display', 'none');
        }else{
            $(".ac-inbound").css('display', 'none');
        }
    });
    $(".business img:eq(2)").on("click", function() {
        if($(".ac-innovation").css('display') == 'none'){
            $(".ac-innovation").css('display', 'block');
            $(".ac-branding").css('display', 'none');
            $(".ac-inbound").css('display', 'none');
        }else{
            $(".ac-innovation").css('display', 'none');
        }
    });
 });

$(window).on('ready resize', function(){
    if( 1296 > $(window).width() ){
        for(var i = 0; i <= 2; i++ ){
            $(".p-box p:eq(" + i + ")").css("display", "inline-block");
        }
        for(var j = 9; j <= 11; j++ ){
            $(".p-box p:eq(" + j + ")").css("display", "inline-block");
        }
        $(".people").scrollLeft(1000); 
    }else {
        for(var k = 0; k <= 2; k++ ){
            $(".p-box p:eq(" + k + ")").css("display", "none");
        }
        for(var l = 9; l <= 11; l++ ){
            $(".p-box p:eq(" + l + ")").css("display", "none");
        }
        $(".people").scrollLeft(340);   
    }
});
$(function(){
    var p_width = 1296;
    // if($(".people").width() >= 769)
    //     var p_width = $(".people").width();
    $(".people").scroll(function() {
        if ($(".people").scrollLeft() > p_width){
            $(".people").scrollLeft(0);
        }else if ($(".people").scrollLeft() == 0) {
            $(".people").scrollLeft(p_width);
        }
    });
});