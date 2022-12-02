let saveEl = [];
let saveButton = document.querySelector("#clicked");
let inputEl = document.querySelector("#input-el");
let ulEL = document.querySelector("#ul-el");

saveButton.addEventListener("click", function () {
    saveEl.push(inputEl.value);
    renderSaves();
    clearText();
});

function renderSaves() {
    let listItem = "";

    for (let i = 0; i < saveEl.length; i++) {
       //listItem += '<li class="list-group-item list-group-item-secondary"><a href="' + saveEl[i] + '" target="_blank">' + saveEl[i] + "</a></li>"  
       listItem += `
            <li class="list-group-item list-group-item-secondary">
                <a href='${saveEl[i]}' target='_blank'>
                    ${saveEl[i]}
                </a>
            </li>
        `

    }

    ulEL.innerHTML = listItem;

}

function clearText() {
    inputEl.value = "";
}



