// Assignment Code
var generateBtn = document.querySelector("#generate");

//created object list of password creds to hold arrays of each category
function generatePassword() {

var passUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var passlower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var passnumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var passcharacters = ["!", "@" , "#", "$", "%", "^", "&", "*", "(", ")", "?", "~", "|", "/", "+"];
var length = [];



passlength = prompt ("how long would you like your password? Please choose 8-20 characters.")
if (passlength < 8 || passlength > 20) {
  return "Valid entry needed.";
} else {
   alert("Your password will be" + passlength + "characters long.");
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

 characters = confirm("special characters ok?");
  if (characters) {
    alert("Password will include special characters.")
  } else {
    alert("password WON'T include special characters.");
  }


if (uppercase === false && lowercase === false) {
  return "Valid response needed.";
}

if (numbers === false && characters === false) {
  return "Valid response needed.";
}




let goldenpass = ""
for (let i = 0; i < passlength; i++) {
  let lng = [math.floor(math.random() * passlength.length)];
  goldenpass = goldenpass + passlength[lng];
}
return goldenpass;
};
 













// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



 