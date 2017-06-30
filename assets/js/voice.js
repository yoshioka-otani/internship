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
        $(".ishiduka p:eq(0)").css('color','#ffffff');
        $(".ishiduka p:eq(1)").css('color','#ffffff');
    },function(){
        $(".ishiduka p:eq(0)").css('color','#33cc66');
        $(".ishiduka p:eq(1)").css('color','#33cc66');
    });
});
$(function() {
    $("div .hasegawa").hover(function () {
        $(".hasegawa p:eq(0)").css('color','#ffffff');
        $(".hasegawa p:eq(1)").css('color','#ffffff');
    },function(){
        $(".hasegawa p:eq(0)").css('color','#33cc66');
        $(".hasegawa p:eq(1)").css('color','#33cc66');
    });
});
$(function() {
    $("div .hanashita").hover(function () {
        $(".hanashita p:eq(0)").css('color','#ffffff');
        $(".hanashita p:eq(1)").css('color','#ffffff');
    },function(){
        $(".hanashita p:eq(0)").css('color','#33cc66');
        $(".hanashita p:eq(1)").css('color','#33cc66');
    });
});

$(window).on('click ready resize', function(){
      var m_height1 = $('.ishiduka-article > p:eq(0)', '#voice').height() + $('.ishiduka-article > p:eq(1)', '#voice').height() + $('.ishiduka-article > p:eq(2)', '#voice').height() + $('.ishiduka-article > p:eq(3)', '#voice').height();
      $('.ishiduka-article', '#voice').css('height', m_height1 + 70 +'px' );
      var m_height2 = $('.hasegawa-article > p:eq(0)', '#voice').height() + $('.hasegawa-article > p:eq(1)', '#voice').height() + $('.hasegawa-article > p:eq(2)', '#voice').height() + $('.hasegawa-article > p:eq(3)', '#voice').height();
      $('.hasegawa-article', '#voice').css('height', m_height2 + 70 +'px' );
      var m_height3 = $('.hanashita-article > p:eq(0)', '#voice').height() + $('.hanashita-article > p:eq(1)', '#voice').height() + $('.hanashita-article > p:eq(2)', '#voice').height() + $('.hanashita-article > p:eq(3)', '#voice').height();
      $('.hanashita-article', '#voice').css('height', m_height3 + 70 +'px' );
      if($('.ishiduka-article').css('display') == 'block'){
          $('#overview').css('margin-top', m_height1 + 110 + 'px');
      }else if($('.hasegawa-article').css('display') == 'block'){
          $('#overview').css('margin-top', m_height2 + 110 + 'px');
      }else{
          $('#overview').css('margin-top', m_height3 + 110 + 'px');
      }
      var b_height1 = 40 + $('.e_height1 > ruby:eq(0)').height() + $('.e_height1 > p:eq(0)').height() + $('.e_height1 > p:eq(1)').height() + $('.e_height1 > p:eq(2)').height() + $('.e_height1 > p:eq(3)').height() + $('.e_height1 > p:eq(4)').height();
      $('.ishiduka').css('height', b_height1 + 'px');
      $('.hasegawa').css('height', b_height1 + 'px');
      $('.hanashita').css('height', b_height1 + 'px');
      $('.ishiduka .triangle').css('top', b_height1  + 'px');
      $('.hasegawa .triangle').css('top', b_height1  + 'px');
      $('.hanashita .triangle').css('top', b_height1  + 'px');
});
// $(document).ready(function() {
//     console.log("aaaa");
//     $(".ishiduka").addClass("box-load");
// });
