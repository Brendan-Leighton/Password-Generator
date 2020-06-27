// Assignment Code
const generateBtn = document.querySelector("#generate");


function generatePassword() {
  const allowLower = document.querySelector("#allow-lowercase");
  const allowUpper = document.querySelector("#allow-uppercase");
  const allowNumbers = document.querySelector("#allow-numbers");
  const allowSpecial = document.querySelector("#allow-special-characters");
  const passwordLength = document.getElementById("password-length").innerHTML;
}


// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

console.log(passwordLength);
