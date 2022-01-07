$(function(){

    $('.gnb li').mouseenter(function(){
        $('.depth2_back').stop().slideDown();
        $('.depth2').stop().slideDown();
    });
    $('.gnb').mouseleave(function(){
        $('.depth2_back').stop().slideUp();
        $('.depth2').stop().slideUp();
    });







});