const baseURL = "https://davm07.github.io/wdd230/";
const linksURL = "https://davm07.github.io/wdd230/data/links.json";
const linksList = document.querySelector("#links")

async function getLinks() {
    const response = await fetch(linksURL);
    if (response.ok) {
        const data = await response.json();
        displayLinks(data.lessons);
    }
}

const displayLinks = (weeks) => {
    weeks.forEach( (week) => {
        const listItem = document.createElement("li");
        listItem.innerText = `${week.lesson}: `;
        listItem.setAttribute("class", "items");
        const innerLinks = week.links;
        innerLinks.forEach((link) => {
            const listTag = document.createElement("a");
            listTag.setAttribute("href", link.url);
            listTag.setAttribute("target", "_blank");
            listTag.innerText = `${link.title}`;
            listItem.appendChild(listTag);

            if (link != innerLinks.at(-1)) {
                listItem.appendChild(document.createTextNode(" | "));
            }
        })
        linksList.appendChild(listItem);
        
    });
}

getLinks();
