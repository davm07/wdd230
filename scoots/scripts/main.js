//Hamburger button
const menuButton = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation")

menuButton.addEventListener("click", () => {
    menuButton.classList.toggle("opened");
    navigation.classList.toggle("open")
})

//Display year in homepage
const year = document.querySelector("#current-year");
year.textContent = new Date().getFullYear();