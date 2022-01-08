$(function(){

    $('.gnb li').mouseenter(function(){
        $('.depth2_back').stop().slideDown(250);
        $('.depth2').stop().slideDown(300);
    });
    $('.gnb').mouseleave(function(){
        $('.depth2_back').stop().slideUp(250);
        $('.depth2').stop().slideUp(300);
    });
    $('.sec_03_more').click(function(){
        $('.sec_03_more').toggleClass('on');
        $('.sec_03_news').stop().slideToggle();
    });
    $('.sec_04_more').click(function(){
        $('.sec_04_more').toggleClass('on');
        $('.sec_04_game').stop().slideToggle();
    });







});