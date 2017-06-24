 $(function(){
    $(".hasegawa").on("click", function() {
        if($(".hasegawa-article").css('display') == 'none'){
            $(".hasegawa-article").css('display', 'block');
            $(".ishiduka-article").css('display', 'none');
            $(".hanashita-article").css('display', 'none');
        }else
            $(".hasegawa-article").css('display', 'none');
    });
 });
 $(function(){
    $(".ishiduka").on("click", function() {
        if($(".ishiduka-article").css('display') == 'none'){
            $(".ishiduka-article").css('display', 'block');
            $(".hasegawa-article").css('display', 'none');
            $(".hanashita-article").css('display', 'none');
            $(".ishiduka:after").css('display', 'block');
        }else
            $(".ishiduka-article").css('display', 'none');
    });
 });
 $(function(){
    $(".hanashita").on("click", function() {
        if($(".hanashita-article").css('display') == 'none'){
            $(".hanashita-article").css('display', 'block');
            $(".hasegawa-article").css('display', 'none');
            $(".ishiduka-article").css('display', 'none');
        }else
            $(".hanashita-article").css('display', 'none');
    });
 });
 $(document).ready(function(){
     $(".ishiduka").mouseover(function(){
        $(".ishiduka p").css('color', '#000000 !important');
    });
});

$(window).on('click load resize', function(){
    // var m_height = 0;
    // for(var i =0 ; i<=3 ; i++){
    //     m_height += $('.ishiduka-article > p:eq(i)', '#voice').height();
    // }
    var m_height = $('.ishiduka-article > p:eq(0)', '#voice').height() + $('.ishiduka-article > p:eq(1)', '#voice').height() + $('.ishiduka-article > p:eq(2)', '#voice').height() + $('.ishiduka-article > p:eq(3)', '#voice').height();
    console.log(m_height);
  $('.ishiduka-article', '#voice').css('height', m_height + 90 +'px' );
});