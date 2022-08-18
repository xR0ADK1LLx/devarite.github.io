function CreateDropdown(id, options) {
    var dropdown = document.createElement("select");
    dropdown.id = id;
    dropdown.className = "form-control";
    for (var i = 0; i < options.length; i++) {
        var option = document.createElement("option");
        option.value = options[i];
        option.innerHTML = options[i];
        option.id = options[i] + "_" + id;
        dropdown.appendChild(option);
    }
    return dropdown;
}

$(document).ready(function(){
    //header buttons
    $('.tab').click(function(){
        $(this).addClass('pressed').siblings().removeClass('pressed');
    });

    $('#projects').click(function(){
        $('.projects').show();
        $('.about').hide();
    });

    $('#about').click(function(){
        $('.about').show();
        $('.projects').hide();
    });

    //scroll to top button
    $(window).scroll(function(){
        if ($(this).scrollTop() > 20) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });

    $('#back-to-top').click(function(){
        $('html, body').animate({scrollTop : 0},200);
        return false;
    });

    $('#twitter-button').click(function(){
        $('#twitter-widget-0').remove();
        // shrink #Twitter 
        $('#Twitter').css('height', '0px');
        // wait for the animation to finish
        setTimeout(function(){
            // remove #Twitter
            $('#Twitter').remove();
        }, 500);
    });

    // #remove-images onclick to remove all images
    $('#remove-images').click(function(){
        $('.article-img').remove();
    });

    // #download-article onclick to download the article as a html file
    $('#download-article').click(function(){
        var html = $('.article-main').html();
        var filename = $('.article-title').text();
        var blob = new Blob([html], {type: "text/html;charset=utf-8"});
        saveAs(blob, filename + ".html");
    });
});

