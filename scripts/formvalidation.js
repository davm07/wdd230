const kp1 = document.querySelector("#password");
const kp2 = document.querySelector("#pwConfirmation");
const message = document.querySelector("#pwMessage");

kp2.addEventListener("focusout", checkSame);

// This should be refactored.
function checkSame() {
    if (kp1.value !== kp2.value) {
        message.textContent = "❗Password DO NOT MATCH!";
        message.style.display = "block";
        message.style.marginTop = ".5rem";
        kp2.style.backgroundColor = "#fff0f3";
        kp2.value = "";
        kp2.focus();
    } else {
        message.style.display = "none";
        kp2.style.backgroundColor = "#f0fff0";
        kp2.style.color = "#000";
    }
}
