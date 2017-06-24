$(function(){
    $("#bar").on("click", function() {
        if($(".bar_menu").css('display') == 'none'){
            $(".bar_menu").css('display', 'block');
        }else
            $(".bar_menu").css('display', 'none');
    });
 });
$(function(){
    $(".people").scroll(function() {
        if ($(".people").scrollLeft() >= ($("body").width() - $(".people").width())) {
            $(".people").scrollLeft(1);
        }else if ($(".people").scrollLeft() == 0) {
            $(".people").scrollLeft($("body").width() - $(".people").width() - 1);
        }});
});