$(document).ready(function(){
    $('.tab').click(function(){
        $(this).addClass('pressed').siblings().removeClass('pressed');
    });

    $('#tools').click(function(){
        $('.tools').show();
        $('.about').hide();
    });

    $('#about').click(function(){
        $('.about').show();
        $('.tools').hide();
    });

    //password generator

    generatePassword = function(length, numbers, symbols, uppercase, lowercase, special){
        var generatedPassword = "";
        var possible = "";
        if(numbers){
            possible += "0123456789";
        }
        if(symbols){
            possible += "!@#$%^&*()";
        }
        if(uppercase){
            possible += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        }
        if(lowercase){
            possible += "abcdefghijklmnopqrstuvwxyz";
        }
        if(special){
            possible += "~`!@#$%^&*()_-+={[}]|:;'<,>.?/";
        }
        for(var i = 0; i < length; i++){
            generatedPassword += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return generatedPassword;
    }

    $('#generate').click(function(){
        var length = $('#length').val();
        var numbers = $('#numbers').prop('checked');
        var symbols = $('#symbols').prop('checked');
        var uppercase = $('#uppercase').prop('checked');
        var lowercase = $('#lowercase').prop('checked');
        var special = $('#special').prop('checked');
        var password = generatePassword(length, numbers, symbols, uppercase, lowercase, special);
        $('#password').val(password);
    });

    $('#copy').click(function(){
        var password = $('#password');
        //copy password to clipboard
        password.select();

        navigator.clipboard.writeText(password.val());
    });

    //base64 encode and decode
    $('#b64encode').click(function(){
        var text = $('#b64input').val();
        var encoded = btoa(text);
        $('#b64output').val(encoded);
    });

    $('#b64decode').click(function(){
        var text = $('#b64input').val();
        var decoded = atob(text);
        $('#b64output').val(decoded);
    });

});
