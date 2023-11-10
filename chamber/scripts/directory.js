const infoURL = "https://davm07.github.io/wdd230/chamber/data/members.json";
const cards = document.querySelector("#cards");

async function getDirectory(url) {
    const response = await fetch(url);
    if (response.ok) {
        const data = await response.json();
        console.log(data.members);
        displayDirectoryInfo(data.members);
    }
}

const displayDirectoryInfo = (members) => {
    members.forEach((member) => {
        const card = document.createElement("section");
        const memberName = document.createElement("h2");
        const address = document.createElement("h3");
        const phoneNumber = document.createElement("p");
        const websiteURL = document.createElement("a");
        const memberLogo = document.createElement("object");

        memberName.textContent = `${member.name}`;
        address.textContent = `${member.address}`;
        phoneNumber.textContent = `${member.phoneNumber}`;
    
        websiteURL.setAttribute("href", member.websiteURL);
        websiteURL.textContent = `${member.name}`;

        memberLogo.setAttribute("data", member.imageFileName);
        // memberLogo.setAttribute("width", "150")
        // memberLogo.setAttribute("height", "75")

        card.append(memberName, address, phoneNumber, websiteURL, memberLogo);

        cards.appendChild(card);
    });
}

getDirectory(infoURL);