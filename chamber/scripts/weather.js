const currentTemp = document.querySelector("#temperature");
const weatherIcon = document.querySelector("#weather-icon");
const weatherDesc = document.querySelector("#weather-info");
const windSpeed = document.querySelector("#wind-speed").textContent;
const windChill = document.querySelector("#windchill");

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
    let capWord = words
        .map((word) => {
        return word[0].toUpperCase() + word.substring(1);
        })
        .join(" ");
    return capWord;
}

function displayResults(data) {
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    let temp = data.main.temp;
    let desc = data.weather[0].description;
    let capDesc = capitalizeString(desc);
    currentTemp.innerHTML = `${temp.toFixed(0)}`;
    weatherDesc.innerHTML = capDesc;
    weatherIcon.setAttribute("src", iconsrc);
    weatherIcon.setAttribute("alt", data.weather[0].main);
    weatherIcon.setAttribute("width", "50");
    weatherIcon.setAttribute("height", "50");
    calculateWindchill(temp.toFixed(0), windSpeed);
}

function calculateWindchill(num1, num2) {
    if (num1 <= 50 && num2 > 3.0) {
        let windChillFactor = 35.74 + (0.6215 * num1) - (35.75 * (num2 ** 0.16)) + ((0.4275 * num1) * (num2 ** 0.16));
        windChill.textContent = windChillFactor.toFixed(0);
    } else {
        windChill.textContent = "N/A";
    }
}

apiFetch();
