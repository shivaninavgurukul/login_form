var myInput = document.getElementById("psw");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");
var message = document.getElementById("message");

myInput.onfocus = function() {
    message.style.display = "block";
}

myInput.onblur = function() {
    message.style.display = "none";
}

document.getElementById("loginForm").onsubmit = function() {
    var email = document.getElementById("usrname").value;
    var password = myInput.value;

    
    var uppercaseRegex = /[A-Z]/;
    var lowercaseRegex = /[a-z]/;
    var numberRegex = /[0-9]/;
    var specialCharRegex = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/;

    
    var isValidPassword = (
        uppercaseRegex.test(password) &&
        lowercaseRegex.test(password) &&
        numberRegex.test(password) &&
        specialCharRegex.test(password)
    );

    if (isValidPassword) {
       
        message.innerHTML = "Login successful!";
        message.style.color = "green";


        window.open('success.html', '_blank');

        return false;
    } else {
        message.innerHTML = "Incorrect email or password. Please make sure your password has at least one uppercase letter, one lowercase letter, one number, and one special character.";
        message.style.color = "red";
        return false; 
    }
}
