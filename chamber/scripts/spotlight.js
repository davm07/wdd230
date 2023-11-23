const infoURL = "https://davm07.github.io/wdd230/chamber/data/members.json";

async function jsonFetch(url) {
    const response = await fetch(url);
    if (response.ok) {
        const data = await response.json();
        displayMembers(data);
    }
};

function displayMembers(data) {
    const members = [];
    data.members.forEach(element => {
        let membership = element.membershipLevel.toLowerCase()
        if (membership === "gold" || membership === "silver") {
          members.push(element);
        }
    });

    const spotlightMembers= new Set();
    while (spotlightMembers.size < 3) {
        spotlightMembers.add(members[Math.floor(Math.random() * members.length)]);
    }

    createMembers(spotlightMembers);
}

function createMembers(set) {
    const cardsContainer = document.querySelector(".splt");

    set.forEach((element) => {
        const div = document.createElement("div");
        div.setAttribute("class", "card");

        const logoContainer = document.createElement("div");
        const icon = document.createElement("object");
        icon.setAttribute("data", element.imageFileName);
        icon.setAttribute("aria-label", `${element.name} icon`);
        logoContainer.setAttribute("class", "logo-card");

        const name = document.createElement("h3");
        name.textContent = element.name;

        const address = document.createElement("p");
        address.textContent = element.address

        const phone = document.createElement("p");
        phone.textContent = element.phoneNumber;

        const websiteURL = document.createElement("a");
        websiteURL.setAttribute("href", element.websiteURL);
        websiteURL.setAttribute("class", "website")
        websiteURL.textContent = `${element.websiteURL}`;

        logoContainer.appendChild(icon);
        div.append(logoContainer, address, phone, websiteURL);

        cardsContainer.appendChild(div);
    });
}

jsonFetch(infoURL);
