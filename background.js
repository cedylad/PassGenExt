chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: generatePassword
    });
});

function generatePassword() {
    const len_password = parseInt(prompt("Password length:"));
    const character = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@[]#$())*+.:;{}|~?";
    const pswd = Array.from({ length: len_password }, () => character[Math.floor(Math.random() * character.length)]).join(""); // Generate the password
    alert("Generated password: " + pswd);
}
