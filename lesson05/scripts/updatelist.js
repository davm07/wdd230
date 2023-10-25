const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

const updateList = () => {
    if (input.value != "") {
        // list.innerHTML += `<li>${input.value}</li>`
        const li = document.createElement("li");
        const deleteButton = document.createElement("button");
        li.textContent = input.value;
        deleteButton.textContent = "❌";
        li.append(deleteButton);
        list.append(li);
        
        deleteButton.addEventListener("click", () => {
            list.removeChild(li);
            input.focus();
        });
        deleteButton.setAttribute("aria-label", "Remove " + input.value);
        input.value = "";
        input.focus();
    } else {
        alert("Please type in your favorite chapter!");
        input.focus();
    }
    };

button.addEventListener("click", () => {
    updateList();
})

input.addEventListener("keypress", (event) => {
    if (event.keyCode === 13) updateList();
})