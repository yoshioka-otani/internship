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
// $(function(){
//     $(".people").scroll(function() {
//         if ($(".people").scrollLeft() >= ($("body").width() - $(".people").width())) {
//             $(".people").scrollLeft(1);
//         }else if ($(".people").scrollLeft() == 0) {
//             $(".people").scrollLeft($("body").width() - $(".people").width() - 1);
//         }});
// });