let useUpper = false;
let useLower = false;
let useNumber = false;
let useSpecial = false;
let passwordLength = 8;
let password = "";

// Checks what parameters the user selected/entered, adds a boolean to vars for future use.
function checkPasswordParameters() {
    useUpper = document.getElementById("allow-uppercase").checked;
    useLower = document.getElementById("allow-lowercase").checked;
    useNumber = document.getElementById("allow-numbers").checked;
    useSpecial = document.getElementById("allow-special-characters").checked;
    passwordLength = document.getElementById("password-length").value;
    // Check if at least 1 box is checked
    !useUpper && !useLower && !useNumber && !useSpecial ? alert(`You must check at least 1 box.`): "";
    // Check password length between 8 - 126
    passwordLength < 8 && passwordLength > 126 ? alert(`Your password is too short or too long`): "";
}

// Checks 'num' to see if it matches an ascii value && if the ascii's character meets the users selected parameters. If both are True it adds the ascii character to the password String.
function checkRandomNumForAsciiConversion(num) {
    if (/* Check Uppercase */(useUpper && (num >= 65 && num <= 90)) || /* Check Lowercase */(useLower && (num >= 97 && num <= 122)) || /* Check Number */(useNumber && (num >= 48 && num <= 57)) || /* Check Special Character */(((useSpecial && (num >= 33 && num <= 47)) || (useSpecial && (num >= 58 && num <= 64)) || (useSpecial && (num >= 91 && num <= 96)) || (useSpecial && (num >= 123 && num <= 126))))) {
        password += String.fromCharCode(num);
    }
    if (password.length < passwordLength) {
        generateRandomCharacter();
    }
}

function generateRandomCharacter() {
    randomNum = Math.floor(Math.random() * 127);
    if (randomNum >= 33) {
        checkRandomNumForAsciiConversion(randomNum);
    } else {
        generateRandomCharacter();
    }
}

displayPassword = (password) => document.getElementById("password").innerHTML = password;


function generatePassword() {
    checkPasswordParameters();
    generateRandomCharacter();
    displayPassword(password);
    test();
    password = "";
}


function test() {
    console.log(password);
}