const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', () => {
    if(input.value != "") {
        // list.innerHTML += `<li>${input.value}</li>`
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');
        li.textContent = input.value;
        deleteButton.textContent = '❌';
        li.append(deleteButton);
        list.append(li);
        input.value = "";

        deleteButton.addEventListener('click', () => {
            list.removeChild(li);
            input.focus();
        })
        
    } else {
        alert("Please type in your favorite chapter!");
        input.focus();
    }
})