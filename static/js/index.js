$(function(){
    $('.mp_head .mp_button').click(function(){
        $('.mp_head .mp_nav').slideToggle();
    });
    $('.mp_head .mp_nav > li > a > i').click(function(){
      $('.mp_head .mp_nav > li > .mp_nav_one').slideToggle();
    });
    $('.zb_about .c_ab .mask .move').click(function(){
        $('.zb_about .c_ab .mask').css("display","none");
        console.log("哈哈哈");
    });
});