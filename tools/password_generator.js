// Define character sets for the password generation with uppercase and lowercase letters, numbers and symbol
const letter = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "@[]#$())*+.:;{}|~?";

// Combine all character sets into one for password generation
const character = letter + letter.toLowerCase() + number + symbol;

// Password generation function
function generatePassword() {
    const len_password = parseInt(document.getElementById("passwordLength").value); // Get the desired password length from the input field
    const pswd = Array.from({ length: len_password }, () => character[Math.floor(Math.random() * character.length)]).join(""); // Generate the password

    // Display the generated password
    const generatedPasswordElement = document.getElementById("generatedPassword");
    generatedPasswordElement.textContent = "Generated password: " + pswd;

    // Add a "Copy" button to copy the password to the clipboard
    const copyButton = document.createElement("button");
    copyButton.textContent = "Copy";
    copyButton.addEventListener("click", () => {
        copyToClipboard(pswd);
        alert("Password copied to clipboard!");
    });

    generatedPasswordElement.appendChild(document.createElement("br"));
    generatedPasswordElement.appendChild(copyButton);
}

// Function to copy the generated password to the clipboard
function copyToClipboard(text) {
    const tempInput = document.createElement("input");
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
}
