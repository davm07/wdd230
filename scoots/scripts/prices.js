const infoURL = "https://davm07.github.io/wdd230/scoots/data/prices.json";
const table = document.querySelector("#table");

async function fecthDocument(url) {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayInfo(data);
        } else {
        throw Error(await response.text());
        }
    } catch (error) {
        alert(error);
    }   
}

function displayInfo(list) {
    list.vehicles.forEach(vehicle => {
        const row = document.createElement("tr");
        const vehType = document.createElement("td");
        const maxCapa = document.createElement("td");
        const priceHalf = document.createElement("td");
        const priceFull = document.createElement("td");
        const halfPrice = document.createElement("td");
        const fullPrice = document.createElement("td");

        vehType.innerHTML = vehicle.type;
        maxCapa.innerHTML = vehicle.capacity;
        vehicle.prices.forEach(price => {
            console.log(price.reservation[0])
        }) 


        row.append(vehType, maxCapa, priceHalf, priceFull, halfPrice, fullPrice);
        table.append(row);
    });
}

fecthDocument(infoURL);