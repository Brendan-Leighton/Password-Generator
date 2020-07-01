let useUpper = false;
let useLower = false;
let useNumber = false;
let useSpecial = false;
let passwordLength = 8;
let password = "";

function checkPasswordParameters() {
    useUpper = document.getElementById("allow-uppercase").checked;
    useLower = document.getElementById("allow-lowercase").checked;
    useNumber = document.getElementById("allow-numbers").checked;
    useSpecial = document.getElementById("allow-special-characters").checked;
    passwordLength = document.getElementById("password-length").value;
    // return useSpecial, useLower, useUpper, useNumber, passwordLength;
}

function generatePassword() {
    checkPasswordParameters();

    test();
}

displayPassword = (password) => document.getElementById("password").innerHTML = password;

function test() {
    password = (console.log(`USE UPPER: ${useUpper}, USE LOWER: ${useLower}, USE NUMBERS: ${useNumber}, USE SPEC CHARS: ${useSpecial}, and LENGTH: ${passwordLength}.`))
}