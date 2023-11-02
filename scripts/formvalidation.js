const ratingSlider = document.querySelector("#rating");
const ratingDisplay = document.querySelector("#ratingDisplay");
const password = document.querySelector("#password");
const pwConfirmation = document.querySelector("#pwConfirmation");
const message = document.querySelector("#pwMessage");

pwConfirmation.addEventListener("focusout", checkSame);
ratingSlider.addEventListener("change", displayRatingValue);
ratingSlider.addEventListener("input", displayRatingValue);



// This should be refactored.
function checkSame() {
    if (password.value !== pwConfirmation.value) {
        message.textContent = "Password DOES NOT MATCH❗Please enter the correct Password";
        message.classList.add("show")
        pwConfirmation.value = "";
        pwConfirmation.focus();
    } else {
        message.classList.remove("show");
        message.innerHTML = "";
    }
}


function displayRatingValue() {
    ratingDisplay.innerHTML = ratingSlider.value;
}
