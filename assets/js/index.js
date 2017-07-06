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
        $(".people").scrollLeft(648); 
    }else {
        for(var k = 0; k <= 2; k++ ){
            $(".p-box p:eq(" + k + ")").css("display", "none");
        }
        for(var l = 9; l <= 11; l++ ){
            $(".p-box p:eq(" + l + ")").css("display", "none");
        }
        $(".people").scrollLeft(648);   
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
// $(function() {
//     if ((navigator.userAgent.indexOf('iPhone') > 0 && navigator.userAgent.indexOf('iPad') == -1) || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
//         $(function(){
//         	var count =0;
//             $("div .people .hiratsuka").bind("click",function(){
//                 if(count == 0) {
//                     person_on("hiratsuka");count++;}else {
//                     person_off("hiratsuka");count = 0;}
//         });});
//         $(function(){
//         	var count =0;
//             $("div .people .fujio").bind("click",function(){
//                 if(count == 0) {
//                     person_on("fujio");count++;}else {
//                     person_off("fujio");count = 0;}
//         });});
//         $(function(){
//         	var count =0;
//             $("div .people .kurozumi").bind("click",function(){
//                 if(count == 0) {
//                     person_on("kurozumi");count++;}else {
//                     person_off("kurozumi");count = 0;}
//         });});
//         $(function(){
//         	var count =0;
//             $("div .people .takeuchi").bind("click",function(){
//                 if(count == 0) {
//                     person_on("takeuchi");count++;}else {
//                     person_off("takeuchi");count = 0;}
//         });});
//         $(function(){
//         	var count =0;
//             $("div .people .uchida").bind("click",function(){
//                 if(count == 0) {
//                     person_on("uchida");count++;}else {
//                     person_off("uchida");count = 0;}
//         });});
//         $(function(){
//         	var count =0;
//             $("div .people .otaki").bind("click",function(){
//                 if(count == 0) {
//                     person_on("otaki");count++;}else {
//                     person_off("otaki");count = 0;}
//         });});
//     }else{
//     $("div .people .hiratsuka").hover(function () {
//         person_on("hiratsuka");},function(){
//         person_off("hiratsuka");
//     });
//     $("div .people .fujio").hover(function () {
//         person_on("fujio");},function(){
//         person_off("fujio");
//     });
//     $("div .people .kurozumi").hover(function () {
//         person_on("kurozumi");},function(){
//         person_off("kurozumi");
//     });
//     $("div .people .takeuchi").hover(function () {
//         person_on("takeuchi");},function(){
//         person_off("takeuchi");
//     });
//     $("div .people .uchida").hover(function () {
//         person_on("uchida");},function(){
//         person_off("uchida");
//     });
//     $("div .people .otaki").hover(function () {
//         person_on("otaki");},function(){
//         person_off("otaki");
//     });
//     }
// });

function person_on(member) {
    if($(".people ." + member + " a:eq(0)").css("display") == "none"){
        $(".people ." + member + " a:eq(0)").css("display", "block");
        $(".people ." + member + "2 a:eq(0)").css("display", "block");
        $(".people ." + member + " a:eq(1)").css("background-image", "url(http://chibra.co.jp/internship/index/images/people/" +member + "2.png)");
        $(".people ." + member + "2 a:eq(1)").css("background-image", "url(http://chibra.co.jp/internship/index/images/people/" + member + "2.png)");
    }
}
function person_off(member) {
    if($(".people ." + member + " a:eq(0)").css("display") == "block"){
        $(".people ." + member + " a:eq(0)").css("display", "none");
        $(".people ." + member + "2 a:eq(0)").css("display", "none");
        $(".people ." + member + " a:eq(1)").css("background-image", "url(http://chibra.co.jp/internship/index/images/people/" + member + "1.png)");
        $(".people ." + member + "2 a:eq(1)").css("background-image", "url(http://chibra.co.jp/internship/index/images/people/" + member + "1.png)");
    }
}
preload();
function preload() {
    $('<img src="http://chibra.co.jp/internship/index/images/people/hiratsuka2.png">');
    $('<img src="http://chibra.co.jp/internship/index/images/people/fujio2.png">');
    $('<img src="http://chibra.co.jp/internship/index/images/people/kurozumi2.png">');
    $('<img src="http://chibra.co.jp/internship/index/images/people/takeuchi2.png">');
    $('<img src="http://chibra.co.jp/internship/index/images/people/uchida2.png">');
    $('<img src="http://chibra.co.jp/internship/index/images/people/otaki2.png">');
}
