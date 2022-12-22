
// 모바일 메뉴
$(document).ready(function () {

    $('.menuBtn > a.open').click(function () {

        $('.menu-wrap').show(200);

        $('.menuBtn > a.open').hide();

    });

    $('.menu-box > div.close').click(function () {

        $('.menu-wrap').hide(200);

        $('.menuBtn > a.open').show();

    });

});

$(document).ready(function () {

    $('.menuBtn > a.open').click(function () {

        $('.nav-bg ').show(0);

    });

    $('.menu-box > div.close').click(function () {

        $('.nav-bg ').hide(0);


    });

});


//find tab
$(document).ready(function () {

    $('.tab ul li').click(function () {
        var tab_id = $(this).attr('data-tab');

        $('.tab ul li').removeClass('current');
        $('.tab-content').removeClass('current');

        $(this).addClass('current');
        $("#" + tab_id).addClass('current');
    });

});




//sign, upload tab
$(function () {
    $('ul.tab-tit li a').click(function () {
        var onTab = $(this).attr('data-tab');
        $('ul.tab-tit li a').removeClass('on');
        $('.type .cnt').removeClass('on');
        $(this).addClass('on');
        $('#' + onTab).addClass('on');
    });
});

