$(document).ready(function(){
    $('.tab').click(function(){
        $(this).addClass('pressed').siblings().removeClass('pressed');
    });

    $('#projects').click(function(){
        $('.projects').show();
        $('.about').hide();
        $('.art').hide();
    });

    $('#about').click(function(){
        $('.about').show();
        $('.projects').hide();
        $('.art').hide();
    });

    $('#art').click(function(){
        $('.art').show();
        $('.projects').hide();
        $('.about').hide();
    });
});
