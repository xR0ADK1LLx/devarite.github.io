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
    //takes in the length of the password
    // takes in the true/false for numbers
    // takes in the true/false for symbols
    // takes in the true/false for uppercase
    // takes in the true/false for lowercase
    // takes in the true/false for special characters
    // returns the password

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

    var password = $('#password');
    //copy password to clipboard
    password.select();

    navigator.clipboard.writeText(password.val());
});
