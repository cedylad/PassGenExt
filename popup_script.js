document.addEventListener("DOMContentLoaded", function () {
    const generateButton = document.getElementById("generateButton");
    const copyButton = document.getElementById("copyButton");

    generateButton.addEventListener("click", generatePassword);
    copyButton.addEventListener("click", copyPasswordToClipboard);
});

function generatePassword() {
    const len_password = parseInt(document.getElementById("passwordLength").value);
    const character = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@[]#$())*+.:;{}|~?";
    let pswd = '';
    for (let i = 0; i < len_password; i++) {
        pswd += character.charAt(Math.floor(Math.random() * character.length));
    }
    document.getElementById("generatedPassword").textContent = pswd;
}

function copyPasswordToClipboard() {
    const generatedPassword = document.getElementById("generatedPassword").textContent;
    const tempInput = document.createElement("input");
    document.body.appendChild(tempInput);
    tempInput.value = generatedPassword;
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
    alert("Password copied to clipboard!");
}
