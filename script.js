let myLeads = [];

const inputEl = document.getElementById("input-el");

const inputBtn = document.getElementById("input-btn");
const saveBtn = document.getElementById("save-btn");
const deleteBtn = document.getElementById("delete-btn");

const linksContainer = document.getElementById("links-container");

const dataFromLocalStorage = localStorage.getItem("myLeads")

if (dataFromLocalStorage) {
    myLeads = dataFromLocalStorage;
    renderLeads();
}

inputBtn.addEventListener("click", function() {
    if (inputEl.value) {
        myLeads.push(inputEl.value);
        inputEl.value = "";
        localStorage.setItem("myLeads", myLeads);
        renderLeads();
    }
})

saveBtn.addEventListener("click", function() {
    console.log("Save Button Clicked");
})

deleteBtn.addEventListener("click", function() {
    console.log("Delete Button Clicked");
})

function renderLeads() {
    
    let sentence = "";
    
    for (let i=0; i < myLeads.length; i++){
        sentence += `<li>${myLeads[i]}</li>`
    }

    linksContainer.innerHTML = sentence

}