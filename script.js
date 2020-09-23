// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("password");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  alert("Your password needs to meet a certain criteria");

  // Added a  series of prompts for password criteria

  var upperCase = confirm(
    "Do you want to use uppercase? ABCDEFHGIJKLMNOPQRSTUVWXYZ"
  );

  var lowerCase = confirm(
    "Do you want to use lowercase? abcdefghijklmnopqrstuvwxyz"
  );

  var specialCharacters = confirm(
    "Do you want to use special characters? !@#$%^&*()_-=+[]{}"
  );
  var numeric = confirm("Do you want to use numerics? 0123456789");

  // Added and an if & else statement to support the criteria prompt. User has to add a criteria or start from the begining if criteria is not provided.
  if (upperCase === true || lowerCase || specialCharacters || numerics) {
    var passWordLength = prompt(
      "How long do you want your password to be? We recommend at least 8 and no more than 128 characters."
    );
  } else {
    alert("You didn't choose a criteria, try again.");

    return "Try again";
  }
  // THEN I choose a length of at least 8 characters and no more than 128 characters
  prompt("Please add the characters you want to use to create your password.");

  if (passWordLength > 8 || passWordLength < 128) {
    var upperCase = confirm("Do you want to use uppercase? ");
    var lowerCase = confirm("Do you want to use lowercase? ");
    var specialCharacters = confirm("Do you want to use special characters?");
    var numeric = confirm("Do you want to use numerics?");

    var upperCaseCharacter = "ABCDEFHGIJKLMNOPQRSTUVWXYZ";
    var lowerCaseCharacter = "abcdefghijklmnopqrstuvwxyz";
    var specialCharacters = "!@#$%^&*()_-=+[]{}.";
    var numericCharacters = "0123456789";
  }
  var chosenCharacter = document.getElementById("password");

  if (!password) {
    return;
  }

  if (upperCaseCharacters) {
    chosenCharacters = chosenCharacters + upperCaseCharacters;
  }

  if (lowerCaseCharacters) {
    chosenCharacters = chosenCharacters + lowerCaseCharacters;
  }

  if (specialCharacters) {
    chosenCharacters = chosenCharacters + specialCharacters;
  }
  if (numericCharacters) {
    chosenCharacters = chosenCharacters + numericCaseCharacters;
  }
  // Random number selection loop
  for (var i = 0; i < 5; i++) {
    var randomNumber = Math.ceil(Math.random() * chosenCharacters.length);
    passwordText.value = password;
  }
  return "New generated password will replace this text.";
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
