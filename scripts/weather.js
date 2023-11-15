const currentTemp = document.querySelector("#temperature");
const weatherIcon = document.querySelector("#weather-icon");

const url = "https://api.openweathermap.org/data/2.5/weather?lat=51.23&lon=5.31&units=imperial&appid=eaa7d958886dda1b5fd5aa3be2aa0756";

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
        const data = await response.json();
        console.log(data);
        displayResults(data);
        } else {
        throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function capitalizeString(string) {
    let words = string.split(" ");
    let capWord = words.map((word) => {
        return word[0].toUpperCase() + word.substring(1);
    }).join(" ");
    return capWord;
}

function displayResults(data) {
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    let temp = data.main.temp;
    let desc = data.weather[0].description;
    let capDesc = capitalizeString(desc);
    currentTemp.innerHTML = `${temp.toFixed(0)}&deg;F - ${capDesc}`;
    weatherIcon.setAttribute("src", iconsrc);
    weatherIcon.setAttribute("alt", data.weather[0].main);
    weatherIcon.setAttribute("width", "50");
    weatherIcon.setAttribute("height", "50");
}

apiFetch();
