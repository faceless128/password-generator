// set up variables

var passwordArray = ""
var passwordVal = ""
var howLong = ""

// Check password length
var passwordLength = function () {
  howLong = window.prompt("How long would you like your password to be? Please enter a number between 8 and 128.");
  howLong = parseInt(howLong);
  if (howLong >= 8 && howLong <= 128) {
    addOptions();
  } else {
    // remind them of the limits and ask them again
    window.alert("Please create a password between 8 and 128 characters in length.")
    passwordLength();
  }
}

// select options for password
var addOptions = function () {
  passwordArray = "";
  var confirmLower = window.confirm("would you like lowercase letters in your password?")
  if (confirmLower) {
    var passwordLower = "abcdefghijklmnopqrstuvwxyz";
  }
  var confirmUpper = window.confirm("would you like UPPERCASE letters in your password?")
  if (confirmUpper) {
    var passwordUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  var confirmNumbers = window.confirm("would you like numbers in your password?")
  if (confirmNumbers) {
    var passwordNumbers = "0123456789";
  }
  var confirmSpecial = window.confirm("would you like special characters in your password?")
  if (confirmSpecial) {
    var passwordSpecial = "!#$%&@~;?^";
  }
  // make sure they picked at least one of the four choices or ask them again
  if (!passwordLower && !passwordUpper && !passwordNumbers && !passwordSpecial) { addOptions() }

 // combine the selected options into one
  if (passwordLower !== "" && passwordLower !== null && passwordLower !== undefined) {passwordArray = passwordArray + passwordLower}
  if (passwordUpper !== "" && passwordUpper !== null & passwordUpper !== undefined) {passwordArray = passwordArray + passwordUpper}
  if (passwordNumbers !== "" && passwordNumbers !== null && passwordNumbers !== undefined) {passwordArray = passwordArray + passwordNumbers}
  if (passwordSpecial !== "" && passwordSpecial !== null && passwordSpecial !== undefined) {passwordArray = passwordArray + passwordSpecial}
}

 // generate password of the requested length and options
var generatePassword = function() {
  passwordVal = ""
  passwordLength();
  for (let p = 0; p < howLong; p++) {
    passwordVal = passwordVal + passwordArray[Math.floor(Math.random() * passwordArray.length)];
  }
    return passwordVal;
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

