let myLeads = [];

const inputEl = document.getElementById("input-el");

const inputBtn = document.getElementById("input-btn");
const saveBtn = document.getElementById("save-btn");
const deleteBtn = document.getElementById("delete-btn");

const linksContainer = document.getElementById("links-container");

const dataFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

if (dataFromLocalStorage) {
    myLeads = dataFromLocalStorage;
    renderLeads();
}

inputBtn.addEventListener("click", function() {
    if (inputEl.value) {
        myLeads.push(inputEl.value);
        inputEl.value = "";
        localStorage.setItem("myLeads", JSON.stringify(myLeads));
        renderLeads();
    }
})

saveBtn.addEventListener("click", function() {
    chrome.tabs.query({active:true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url);
        localStorage.setItem("myLeads", JSON.stringify(myLeads));
        renderLeads();
    })
})

deleteBtn.addEventListener("dblclick", function() {
    myLeads = [];
    localStorage.clear();
    renderLeads();
})

function renderLeads() {
    
    let sentence = "";
    
    for (let i=0; i < myLeads.length; i++){
        sentence += `<li><a href="${myLeads[i]}" target="_blank">${myLeads[i]}</a></li>`
    }

    linksContainer.innerHTML = sentence

}