const currentYear = document.querySelector("#current-year");
const lastModification = document.querySelector("#last-modification");

currentYear.innerHTML = new Date().getFullYear();
lastModification.innerHTML = document.lastModified;