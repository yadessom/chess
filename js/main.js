$(function(){

    $('.gnb li').mouseenter(function(){
        $('.depth2_back').stop().slideDown(250);
        $('.depth2').stop().slideDown(300);
    });
    $('.gnb').mouseleave(function(){
        $('.depth2_back').stop().slideUp(250);
        $('.depth2').stop().slideUp(300);
    });







});