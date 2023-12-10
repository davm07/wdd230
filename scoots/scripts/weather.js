//Weather info homepage
const url1 =
  "https://api.openweathermap.org/data/2.5/weather?lat=20.438&lon=-86.927&units=imperial&appid=eaa7d958886dda1b5fd5aa3be2aa0756";
const url2 =
  "https://api.openweathermap.org/data/2.5/forecast?lat=20.438&lon=-86.927&units=imperial&appid=eaa7d958886dda1b5fd5aa3be2aa0756";

const maxTemp = document.querySelector("#temp-msg");
const todayTemp = document.querySelector("#temperature");
const humidity = document.querySelector("#humidity");
const weatherEvents = document.querySelector("#weather-events");
const forecastTemp = document.querySelector("#temp-forecast");
const forecastHum = document.querySelector("#humidity-forecast");
const weatherFor = document.querySelector("#weather-forecast");

async function apiFetch(url) {
    try {
        const response = await fetch(url);
        if (response.ok) {
        const data = await response.json();
        if (url == url1) {
            displayWeather(data);
        } else {
            displayForecast(data);
        }
        } else {
        throw Error(await response.text());
        }
    } catch (error) {
        alert(error);
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

function displayWeather(data) {
    let tempMax = data.main.temp_max;
    let temp = data.main.temp;
    let hum = data.main.humidity;
    let events = data.weather;

    maxTemp.innerHTML = `${tempMax.toFixed(0)}&deg;F`;
    todayTemp.innerHTML = `${temp.toFixed(0)}&deg;F`;
    humidity.innerHTML = `${hum}&percnt;`;
    createElements(events, weatherEvents);
}

function displayForecast(data) {
    const today = new Date();
    let nextDay = "";
    let counter = 0;
    data.list.forEach((element) => {
        const date = new Date(element.dt * 1000);
        if (
        today.getDate() != date.getDate() &&
        counter < 1 &&
        date.getUTCHours() == 15
        ) {
        counter++;
        nextDay = element;
        }
    });

    let tempForecast = nextDay.main.temp;
    let humForecast = nextDay.main.humidity;
    let eventsFor = nextDay.weather;

    forecastTemp.innerHTML = `${tempForecast.toFixed(0)}&deg;F`;
    forecastHum.innerHTML = `${humForecast}&percnt;`;
    createElements(eventsFor, weatherFor);
}

function createElements(list, container) {
    list.forEach((element) => {
        let containerElements = document.createElement("div");
        let imgIcon = document.createElement("img");
        let eventTitle = document.createElement("p");
        let eventDsc = document.createElement("p");

        eventTitle.innerHTML = capitalizeString(element.main);
        eventDsc.innerHTML = capitalizeString(element.description);

        let icon = `https://openweathermap.org/img/wn/${element.icon}@2x.png`;
        imgIcon.setAttribute("src", icon);
        imgIcon.setAttribute("alt", eventDsc);
        imgIcon.setAttribute("width", "50");
        imgIcon.setAttribute("height", "50");

        containerElements.append(imgIcon, eventTitle, eventDsc);

        container.append(containerElements);
    });
}

apiFetch(url1);
apiFetch(url2);
