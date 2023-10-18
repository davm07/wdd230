const temperature = document.querySelector('#temperature').textContent;
const windSpeed = document.querySelector('#wind-speed').textContent;
const windChill = document.querySelector("#windchill");

if (temperature <= 50 && windSpeed > 3.0) {
    let windChillFactor = 35.74 + 0.6215 * temperature - 35.75 * windSpeed ** 0.16 + 0.4275 * temperature * windSpeed ** 0.16;
    windChill.textContent = windChillFactor.toFixed(2);
} else {
    windChill.textContent = "N/A";
}