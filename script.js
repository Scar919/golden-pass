// Assignment Code
var generateBtn = document.querySelector("#generate");

//created object list of password creds to hold arrays of each category
function generatePassword() {

//variables to collect input 
var passUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var passlower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var passnumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var passcharacters = ["!", "@" , "#", "$", "%", "^", "&", "*", "(", ")", "?", "~", "|", "/", "+"];
var length = [];


//prompt asking user for pass length and validate their responses
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

//boolean to have user enter a valid reponse if they respond to no to all var
if (uppercase === false && lowercase === false) {
  return "Valid response needed.";
}

if (numbers === false && characters === false) {
  return "Valid response needed.";
}

//used push to continue to add elements to array
if (uppercase) {
length.push(passUpper);
}
if (lowercase) {
length.push(passlower);
}
if (numbers) {
length.push(passnumbers);
}
if (characters) {
length.push(passcharacters);
}

//set marker to 0 to have loop continue without repeating
let marker = 0

let goldenpass = ""
for (let i = 0; i < passlength; i++) {
  const current = length[marker]
  let rng = [Math.floor(Math.random() * current.length)];
  goldenpass = goldenpass + current[rng];
  marker += 1
  if (marker >= length.length) {
    marker = 0
  }
}
return goldenpass;

};


 


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  console.log(password);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



 