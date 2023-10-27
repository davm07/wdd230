const latestVisit = document.querySelector("#latest-visit");
const msToDays = 84600000;

let lastVisit = window.localStorage.getItem('lastVisit');
let lastVisitTime = new Date(lastVisit).getTime();
let currentDate = new Date();
let diff = (currentDate.getTime() - lastVisitTime) / msToDays;

if (!lastVisit) {
    latestVisit.innerHTML = "Welcome! Let us know if you have any questions 🫡";
    window.localStorage.setItem('lastVisit', currentDate.toISOString());
} else if (diff < 1) {
    latestVisit.innerHTML = "Back so soon! Awesome! 🫡";
} else {
    latestVisit.innerHTML = `You last visited ${diff.toFixed(0)} days ago`;
}


