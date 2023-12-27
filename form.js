// var myInput = document.getElementById("psw");

// var letter = document.getElementById("letter");

// var capital = document.getElementById("capital");

// var number = document.getElementById("number");

// var length = document.getElementById("length")

// myInput.onfocus = function() {

//   document.getElementById("message").style.display = "block";

// }

// myInput.onblur = function() {

//   document.getElementById("message").style.display = "none";

// }

// myInput.onkeyup = function() {

//     var lowerCaseLetters = /[a-z]/g;

//   if(myInput.value.match(lowerCaseLetters)) {

//     letter.classList.remove("invalid");

//     letter.classList.add("valid");

//   } else {

//     letter.classList.remove("valid");

//     letter.classList.add("invalid");

// }

// var upperCaseLetters = /[A-Z]/g;

//   if(myInput.value.match(upperCaseLetters)) {

//     capital.classList.remove("invalid");

//     capital.classList.add("valid");

//   } else {

//     capital.classList.remove("valid");

//     capital.classList.add("invalid");

//   }

//   var numbers = /[0-9]/g;

//   if(myInput.value.match(numbers)) {

//     number.classList.remove("invalid");

//     number.classList.add("valid");

//   } else {

//     number.classList.remove("valid");

//     number.classList.add("invalid");

//   }

//   if(myInput.value.length >= 8) {

//     length.classList.remove("invalid");

//     length.classList.add("valid");

//   } else {

//     length.classList.remove("valid");

//     length.classList.add("invalid");

//   }

// }


// Updated script.js
// Updated script.js

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

    // Regular expressions for password requirements
    var uppercaseRegex = /[A-Z]/;
    var lowercaseRegex = /[a-z]/;
    var numberRegex = /[0-9]/;
    var specialCharRegex = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/;

    // Check if the password meets the criteria
    var isValidPassword = (
        uppercaseRegex.test(password) &&
        lowercaseRegex.test(password) &&
        numberRegex.test(password) &&
        specialCharRegex.test(password)
    );

    if (isValidPassword) {
        // Simulate a successful login
        message.innerHTML = "Login successful!";
        message.style.color = "green";

        // Open a new page or redirect to a different URL
        window.open('success.html', '_blank');

        return false; // Prevent the form from being submitted
    } else {
        message.innerHTML = "Incorrect email or password. Please make sure your password has at least one uppercase letter, one lowercase letter, one number, and one special character.";
        message.style.color = "red";
        return false; // Prevent the form from being submitted
    }
}
