let useUpper = false;
let useLower = false;
let useNumber = false;
let useSpecial = false;
let passwordLength = 8;
let password = "";

// Checks what parameters the user selected/entered, adds a boolean to vars for future use.
function checkPasswordParameters() {
    // Check the state of the Checkboxes
    useUpper = document.getElementById("allow-uppercase").checked;
    useLower = document.getElementById("allow-lowercase").checked;
    useNumber = document.getElementById("allow-numbers").checked;
    useSpecial = document.getElementById("allow-special-characters").checked;
    // Get the number from the length textarea.
    passwordLength = document.getElementById("password-length").value;
    // Check if at least 1 box is checked, if none checked the generator can't generate.
    !useUpper && !useLower && !useNumber && !useSpecial ? alert(`You must check at least 1 box.`): selectedChar = true;
    // Checks that user entered a number int he password length textarea.
    if (isNaN(passwordLength)) {
        alert(`${passwordLength} is not a number.`)
    } else {
        // Check that password length is between 8 - 128. 
        passwordLength < 8 || passwordLength > 128 ? alert(`Your password is too short or too long`): selectedLength = true;
    }
    
    // requirementsMet is used in the preceeding function, after the checkPasswordParameters function in the main generatePassword function.
    return (selectedChar && selectedLength) ? requirementsMet = true: requirementsMet = false;
}

// Checks if the randomly generated number meets user requested character type and converts it to an ascii character if so.
function checkRandomNumForAsciiConversion(num) {
    // Checks if the number given matches an ascii number assiciated with a character type the use wants in their password. Executes if True. 
    if (/* Check Uppercase */(useUpper && (num >= 65 && num <= 90)) || /* Check Lowercase */(useLower && (num >= 97 && num <= 122)) || /* Check Number */(useNumber && (num >= 48 && num <= 57)) || /* Check Special Character */(((useSpecial && (num >= 33 && num <= 47)) || (useSpecial && (num >= 58 && num <= 64)) || (useSpecial && (num >= 91 && num <= 96)) || (useSpecial && (num >= 123 && num <= 126))))) {
        password += String.fromCharCode(num);
    }
    // If the current passwords length is less than the user requested length, another round of number generating begins.
    if (password.length < passwordLength) {
        generateRandomCharacter();
    }
}

// Generates a random character from 1 - 127. Checks if number is at least 33, if so the number is sent to a function, if not the current function runs again.
function generateRandomCharacter() {
    randomNum = Math.floor(Math.random() * 127);
    if (randomNum >= 33) {
        checkRandomNumForAsciiConversion(randomNum);
    } else {
        generateRandomCharacter();
    }
}

// Takes the completed password and assigns it to the secified area.
displayPassword = (password) => document.getElementById("password").innerHTML = password;

// This function runs when Generate Password button is pressed via onClick listener in HTML. 
function generatePassword() {
    checkPasswordParameters();
    if (requirementsMet) {
        generateRandomCharacter();
        displayPassword(password);
    }
    password = "";
}