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
    // select options for password
    var addOptions = window.confirm("would you like lowercase letters in your password?")
    if (addOptions) {
      var passwordLower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
    }
    var addOptions = window.confirm("would you like UPPERCASE letters in your password?")
    if (addOptions) {
      var passwordUpper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
    }
    var addOptions = window.confirm("would you like numbers in your password?")
    if (addOptions) {
      var passwordNumbers = ["0","1","2","3","4","5","6","7","8","9"]
    }
    if (addOptions) {
      var passwordSpecial = ["!","#","$","%","&","@","~",";","?","^"]
    }
    var passwordArray = passwordLower + passwordUpper + passwordNumbers + passwordSpecial;
    console.log(passwordArray)

    // make password the requested length
    // for ( var p = 0; p < howLong, p++) { 
      
    // }
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