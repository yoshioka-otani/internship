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
            $(".people").scrollLeft(1);
        }else if ($(".people").scrollLeft() == 0) {
            $(".people").scrollLeft(p_width);
        }
    });
});

/*---------------------------------------------------------------*/

$(function() {
    $("div .people .hiratsuka").hover(function () {
        person_on("hiratsuka");},function(){
        person_off("hiratsuka");
});});
$(function() {
    $("div .people .fujio").hover(function () {
        person_on("fujio");},function(){
        person_off("fujio");
});});
$(function() {
    $("div .people .kurozumi").hover(function () {
        person_on("kurozumi");},function(){
        person_off("kurozumi");
});});
$(function() {
    $("div .people .takeuchi").hover(function () {
        person_on("takeuchi");},function(){
        person_off("takeuchi");
});});
$(function() {
    $("div .people .uchida").hover(function () {
        person_on("uchida");},function(){
        person_off("uchida");
});});
$(function() {
    $("div .people .otaki").hover(function () {
        person_on("otaki");},function(){
        person_off("otaki");
});});

function person_on(member) {
    if($(".people ." + member + " a:eq(0)").css("display") == "none"){
        $(".people ." + member + " a:eq(0)").css("display", "block");
        $(".people ." + member + " a:eq(1)").css("background-image", "url(../../index/images/people/hiratsuka2.png)");
    }
}
function person_off(member) {
    if($(".people ." + member + " a:eq(0)").css("display") == "block"){
        $(".people ." + member + " a:eq(0)").css("display", "none");
        $(".people ." + member + " a:eq(1)").css("background-image", "url(../../index/images/people/hiratsuka1.png)");
    }
}