const hamButton = document.querySelector("#menu-btn");
const nav = document.querySelector(".header-nav")
const navigation = document.querySelector(".navigation");

hamButton.addEventListener("click", () => {
    nav.classList.toggle("open")
    navigation.classList.toggle("open");
    hamButton.classList.toggle("open");
});

//Gabriel Ferrin help with this code
const observer = new ResizeObserver(entries => {
    if (entries[0].contentRect.width >= 480) {
        if (hamButton.classList.contains("open")) {
            navigation.classList.toggle("open");
            hamButton.classList.toggle("open");
        }
    }
    });
observer.observe(document.body);
