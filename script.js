// Assignment Code
var generateBtn = document.querySelector("#generate");

//created object list of password creds to hold arrays of each category
function generatePassword() {

var length = [];
var passUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var passlower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var passnumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var passcharacter = ["!", "@" , "#", "$", "%", "^", "&", "*", "(", ")", "?", "~", "|", "/", "+"];


passlength = prompt ("how long would you like your password? Please choose 8-20 characters.")
if (passlength < 8 || passlength > 20) {
  return "Valid entry needed.";
} else {
   alert("Your goldenpass will be" + passlength + "long.");
  }

  uppercase = confirm("Uppercase character ok?");
  if (uppercase) {
    alert("Password will include uppercase.")
  } else {
    alert("password WON'T include uppercase.");
  }

  lowercase = confirm("lowercase character ok?");
  if (lowercase) {
    alert("Password will include lowercase.")
  } else {
    alert("password WON'T include lowercase.");
  }

  numbers = confirm("numbers ok?");
  if (numbers) {
    alert("Password will include numbers.")
  } else {
    alert("password WON'T include numbers.");
  }

  characters = confirm("characters ok?");
  if (characters) {
    alert("Password will include characters.")
  } else {
    alert("password WON'T include characters.");
  }


}





// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



 