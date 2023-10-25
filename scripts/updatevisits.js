const visitsDisplay = document.querySelector('#page-visits');

let visitsNum = Number(window.localStorage.getItem("visitsNum-ls")) || 0;

if (visitsNum !== 0) {
    visitsDisplay.textContent = visitsNum;
} else {
    visitsDisplay.textContent = `Welcome! This is your first visit! 🤓`;
    visitsNum++;
}

visitsNum++;

localStorage.setItem("visitsNum-ls", visitsNum);
