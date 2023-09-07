//Assigns the "generate" element from the HTML to be the generatebtn
var generateBtn = document.querySelector("#generate");

//Chooses the "password" element from the HTML to be the focus for the password input values
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
}

//Criteria for the password and rules for the password prompts after generatebtn is engaged
function generatePassword() {
    var finalPassword = ""
    var chars = {
        numbers: "0123456789",
        lowerCase: "abcdefghijklmnopqrstuvwxyz",
        upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        symbols: "!@#$%^&*()",
    }

//Code for initial prompt of the password length
    var allChars = "";
    var passwordLength = prompt("Enter Password Length Between 8 and 128")
    while (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
        alert("Invalid Password Length")
        passwordLength = prompt("Enter Password Length Between 8 and 128")
    }
   
//Confirm classifications for rules and the invalid password alert if special characters (uppercase/lowercase/numbers/symbols) are not used
    var upperCaseConfirm = confirm("Include Uppercase Letters")
    var lowerCaseConfirm = confirm("Include Lowercase Letters")
    var numbersConfirm = confirm("Include Numbers")
    var symbolsConfirm = confirm("Include Symbols")

    while (!upperCaseConfirm && !lowerCaseConfirm && !numbersConfirm && !symbolsConfirm) {
        alert("Invalid Password: Must Include At Least One Type of Character")
        upperCaseConfirm = confirm("Include Uppercase Letters")
        lowerCaseConfirm = confirm("Include Lowercase Letters")
        numbersConfirm = confirm("Include Numbers")
        symbolsConfirm = confirm("Include Symbols")
    }

    if (upperCaseConfirm){
        allChars += chars.upperCase
    }

    if (lowerCaseConfirm) {
        allChars += chars.lowerCase
    }

    if (numbersConfirm){
        allChars += chars.numbers
    }

    if (symbolsConfirm){
        allChars += chars.symbols
    }

    for (var i = 0; i < passwordLength; i++) {
        var randomIndex = Math.floor(Math.random() * allChars.length);
        var randomChars = allChars[randomIndex]
        finalPassword += randomChars;
    }

    return finalPassword;
}

//Allows the "Generate Password" Button to be functional
generateBtn.addEventListener("click", writePassword);
