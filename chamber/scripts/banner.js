const banner = document.querySelector("#banner");
const button = document.querySelector("#close-banner");

const newDate = new Date();
const today = "monday"//newDate.toLocaleString("en-us", { weekday: "long" }).toLowerCase();

if (today === "monday" || today === "tuesday" || today === "wednesday") {
    banner.classList.add("banner-show")
    banner.classList.remove("banner-hide");
} else {
    banner.classList.add("banner-hide");
    banner.classList.remove("banner-show");
}

button.addEventListener("click", () => {
    banner.classList.add("banner-hide");
    banner.classList.remove("banner-show");
})

