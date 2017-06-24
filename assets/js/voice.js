$(function(){
    $(".ishiduka").on("click", function() {
        if($(".ishiduka-article").css('display') == 'none'){
            $(".ishiduka .triangle").css('display', 'block');
            $(".hanashita .triangle").css('display', 'none');
            $(".hasegawa .triangle").css('display', 'none');
            $(".ishiduka-article").css('display', 'block');
            $(".hasegawa-article").css('display', 'none');
            $(".hanashita-article").css('display', 'none');
        }else{
            $(".ishiduka-article").css('display', 'none');
            $(".ishiduka .triangle").css('display', 'none');
        }
    });
 });
  $(function(){
    $(".hasegawa").on("click", function() {
        if($(".hasegawa-article").css('display') == 'none'){
            $(".hasegawa .triangle").css('display', 'block');
            $(".ishiduka .triangle").css('display', 'none');
            $(".hanashita .triangle").css('display', 'none');
            $(".hasegawa-article").css('display', 'block');
            $(".ishiduka-article").css('display', 'none');
            $(".hanashita-article").css('display', 'none');
        }else{
            $(".hasegawa .triangle").css('display', 'none');
            $(".hasegawa-article").css('display', 'none');
        }
    });
 });
 $(function(){
    $(".hanashita").on("click", function() {
        if($(".hanashita-article").css('display') == 'none'){
            $(".hanashita .triangle").css('display', 'block');
            $(".ishiduka .triangle").css('display', 'none');
            $(".hasegawa .triangle").css('display', 'none');
            $(".hanashita-article").css('display', 'block');
            $(".hasegawa-article").css('display', 'none');
            $(".ishiduka-article").css('display', 'none');
        }else{
            $(".hanashita .triangle").css('display', 'none');
            $(".hanashita-article").css('display', 'none');
        }
    });
 });
$(function() {
    $("div .ishiduka").hover(function () {
        console.log("unko");
        $(".ishiduka p:eq(0)").css('color','#ffffff');
        $(".ishiduka p:eq(1)").css('color','#ffffff');
    },function(){
        $(".ishiduka p:eq(0)").css('color','#33cc66');
        $(".ishiduka p:eq(1)").css('color','#33cc66');
    });
});

$(window).on('click load resize', function(){
    var m_height = $('.ishiduka-article > p:eq(0)', '#voice').height() + $('.ishiduka-article > p:eq(1)', '#voice').height() + $('.ishiduka-article > p:eq(2)', '#voice').height() + $('.ishiduka-article > p:eq(3)', '#voice').height();
  $('.ishiduka-article', '#voice').css('height', m_height + 70 +'px' );
  $('#overview').css('margin-top', m_height + 110 + 'px');
});