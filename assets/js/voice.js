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
            displayhelp("ishiduka");
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
            displayhelp("hasegawa");
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
            displayhelp("hanashita");
        }
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
          displayhelp("ishiduka");
          displayhelp2("hasegawa");
          displayhelp2("hanashita");
          $('#overview').css('margin-top', m_height1 + 110 + 'px');
      }else if($('.hasegawa-article').css('display') == 'block'){
          displayhelp("hasegawa");
          displayhelp2("ishiduka");
          displayhelp2("hanashita");
          $('#overview').css('margin-top', m_height2 + 110 + 'px');
      }else if($('.hanashita-article').css('display') == 'block'){
          displayhelp("hanashita");
          displayhelp2("ishiduka");
          displayhelp2("hasegawa");
          $('#overview').css('margin-top', m_height3 + 110 + 'px');
      }else{
          $('#overview').css('margin-top', 25 + 'px');
            // if (jQuery(":hover")[5].outerHTML.match(/ishiduka/)) {
            //     displayhelp("ishiduka");
            // }
            // if (jQuery(":hover")[5].outerHTML.match(/hasegawa/)) {
            //     displayhelp("hasegawa");
            // }
            // if (jQuery(":hover")[5].outerHTML.match(/hanashita/)) {
            //     displayhelp("hanashita");
            // }
      }
      var b_height1 = 60 + $('.e_height1 > ruby:eq(0)').height() + $('.e_height1 > p:eq(0)').height() + $('.e_height1 > p:eq(1)').height() + $('.e_height1 > p:eq(2)').height() + $('.e_height1 > p:eq(3)').height() + $('.e_height1 > p:eq(4)').height();
      $('.ishiduka').css('height', b_height1 + 'px');
      $('.hasegawa').css('height', b_height1 + 'px');
      $('.hanashita').css('height', b_height1 + 'px');
      $('.ishiduka .triangle').css('top', b_height1  + 'px');
      $('.hasegawa .triangle').css('top', b_height1  + 'px');
      $('.hanashita .triangle').css('top', b_height1  + 'px');
});
$(window).on('ready', function(){
    displayhelp("ishiduka");
});

$(function() {
    $("div .ishiduka").hover(
    function () {
        gname_on("ishiduka");
    },
    function(){
        gname_off("ishiduka");
    });
    $("div .hasegawa").hover(
    function () {
        gname_on("hasegawa");
    },
    function(){
        gname_off("hasegawa");
    });
    $("div .hanashita").hover(
    function () {
        gname_on("hanashita");
    },
    function(){
        gname_off("hanashita");
    });
});
function displayhelp (help) {
    $("." + help +  " p:eq(0)").css('color','#ffffff');
    $("." + help + " ruby:eq(0)").css('color','#ffffff');
    $("." + help + " p:eq(1)").css('color','#ffffff');
    $("." + help + " p:eq(2)").css('color','#ffffff');
    $("." + help + " p:eq(3)").css('color','#ffffff');
    $("." + help + " p:eq(4)").css('color','#ffffff');   
    $("." + help).css('background-color','#33cc66');   
}
function displayhelp2 (help) {
    $("." + help +  " p:eq(0)").css('color','#33cc66');
    $("." + help + " ruby:eq(0)").css('color','black');
    $("." + help + " p:eq(1)").css('color','#33cc66');
    $("." + help + " p:eq(2)").css('color','black');
    $("." + help + " p:eq(3)").css('color','black');
    $("." + help + " p:eq(4)").css('color','black');   
    $("." + help).css('background-color','#f8f8f8');   
}
function gname_on (gra) {
    $("." + gra + " p:eq(0)").css('color','#ffffff');
    $("." + gra + " p:eq(1)").css('color','#ffffff');
    $("." + gra + " ruby:eq(0)").css('color','#ffffff');
    $("." + gra + " p:eq(2)").css('color','#ffffff');
    $("." + gra + " p:eq(3)").css('color','#ffffff');
    $("." + gra + " p:eq(4)").css('color','#ffffff'); 
    $("." + gra).css('background-color','#33cc66');
}
function gname_off (gra){
    if($("." + gra + "-article").css('display') == 'none') {
        $("." + gra + " p:eq(0)").css('color','#33cc66');
        $("." + gra + " p:eq(1)").css('color','#33cc66');
        $("." + gra + " ruby:eq(0)").css('color','black');
        $("." + gra + " p:eq(2)").css('color','black');
        $("." + gra + " p:eq(3)").css('color','black');
        $("." + gra + " p:eq(4)").css('color','black'); 
        $("." + gra).css('background-color','#f8f8f8'); 
    }
}