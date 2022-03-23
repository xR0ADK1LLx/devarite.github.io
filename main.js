$(document).ready(function(){
    $('.tab').click(function(){
        $(this).addClass('pressed').siblings().removeClass('pressed');
    });

    $('#projects').click(function(){
        $('.content').load('./projects.html');
    });
});
