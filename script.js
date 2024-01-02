let myLeads = [];

const inputEl = document.getElementById("input-el");

const inputBtn = document.getElementById("input-btn");
const saveBtn = document.getElementById("save-btn");
const deleteBtn = document.getElementById("delete-btn");


inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value);
})

saveBtn.addEventListener("click", function() {
    console.log("Save Button Clicked");
})

deleteBtn.addEventListener("click", function() {
    console.log("Delete Button Clicked");
})