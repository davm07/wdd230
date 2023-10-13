const darkModeSlider = document.querySelector('#dark-mode');
const body = document.querySelector('body');

darkModeSlider.addEventListener('click', () => {
    body.classList.toggle("dark");
})