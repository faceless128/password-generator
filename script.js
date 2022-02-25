// Generate random number
var randomNumber = function(min, max) {
  var value = Math.floor(Math.random() * (max - min + 1) + min);

  return value;
};



// Check password length
var passwordLength = function() {
  var howLong = window.prompt("How long would you like your password to be? Please enter a number between 8 and 128.");
  howLong = parseInt(howLong);
  if (howLong >=8 && howLong <=128) {
    console.log(howLong)
  } else {
    window.alert("Please create a password between 8 and 128 characters in length.")
    passwordLength();
  }
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

passwordLength();