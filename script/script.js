$(document).ready(function(){

    $('.lang-wrap> .lang-btn >p').mouseenter(function(){
        $(this).children('.lang-list').stop().slideDown();
    });

    $('.lang-wrap> div.lang-btn').mouseleave(function(){
        $(this).children('.lang-list').stop().slideUp();
    });

});



// 모바일 메뉴
$(document).ready(function(){

    $('.menuBtn > a.open').click(function(){

        $('.menu-wrap').show(200);

        $('.menuBtn > a.open').hide();

    });

    $('.menu-box > div.close').click(function(){

        $('.menu-wrap').hide(200);

        $('.menuBtn > a.open').show();

    });

});
$(document).ready(function(){

    $('.menuBtn > a.open').click(function(){

        $('.nav-bg ').show(0);

    });

    $('.menu-box > div.close').click(function(){

        $('.nav-bg ').hide(0);


    });

});