const buttonAlert = document.querySelector(".close-alert");
const msgContainer = document.querySelector("#temp-alert");
const svg = document.querySelector(".close-alert svg")
const msg = document.querySelector(".message");

buttonAlert.addEventListener('click', () => {
    buttonAlert.classList.toggle("closed-btn")
    msg.classList.toggle("closed");
})
