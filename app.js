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
}

// Checks 'num' to see if it matches an ascii value && if the ascii's character meets the users selected parameters. If both are True it adds the ascii character to the password String.
function checkRandomNumForAsciiConversion(num) {
    if ((useUpper && (num >= 65 && num <= 90)) || (useLower && (num >= 97 && num <= 122)) || (useNumber && (num >= 48 && num <= 57)) || (useSpecial && (num >= 33 && num <= 47) && (num >= 58 && num <= 64) && (num >= 91 && num <= 96) && (num >= 123 && num <= 126))) {
        password += `&#${num};`;
    }
    if (password.length < passwordLength) {
        generateRandomNumberInRange();
    }
}

function generateRandomCharacter() {
    randomNum = Math.floor(Math.random() * 127);
    if (randomNum >= 33) {
        checkRandomNumForAsciiConversion(randomNum);
    } else {
        generateRandomNumberInRange();
    }
}

function generatePassword() {
    checkPasswordParameters();
    generateRandomCharacter();

    test();
}

displayPassword = (password) => document.getElementById("password").innerHTML = password;

function test() {
    password = (console.log(`USE UPPER: ${useUpper}, USE LOWER: ${useLower}, USE NUMBERS: ${useNumber}, USE SPEC CHARS: ${useSpecial}, and LENGTH: ${passwordLength}.`))
}