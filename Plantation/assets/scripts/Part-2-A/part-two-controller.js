import { taskOperation } from "./part-two-A-taskOperations.js";

window.addEventListener("load", init);

function init() {
    bindEvents();
    focus("name");
}

function bindEvents() {
    document.querySelector("#addC").addEventListener("click", addTask);
    document.querySelector("#delete").addEventListener("click", deleteTask);
}

function deleteTask() {
    console.log("delete")
}

function addTask() {
    // Reading the fields
    let plantationStart = document.querySelector("#plantation-start").value;
    let plantationType = document.querySelector("#plantation-type").value;
    let method = document.querySelector("#method").value;
    let species = document.querySelector("#species").value;
    let seedlingUsed = document.querySelector("#seedling-used").value;
    let transplant = document.querySelector("#transplant").value;
    let spacing = document.querySelector("#spacing").value;
    let labour = document.querySelector("#labour").value;

    const task = taskOperation.add(plantationStart, plantationType, method, species, seedlingUsed, transplant, spacing, labour);
    printTask(task);
    clearAll();
    focus("name");
    // Store in object and then it goes in array
}

// function printTasks(tasks) {
//     const tbody = document.querySelector("#tasks");
//     tbody.innerHTML = "";
//     tasks.forEach(printTask);
// }

function printTask(task) {
    const tbody = document.querySelector("#summary-tasks");
    const tr = tbody.insertRow();
    // let id = task.id;
    let cellIndex = 0;
    for (let key in task) {
        let value = task[key];
        let td = tr.insertCell(cellIndex);
        td.innerText = value;
        cellIndex++;
    }
    // let td = tr.insertCell(cellIndex);
    // td.appendChild(createIcon("edit", edit, id));
    // td.appendChild(createIcon("trash", toggleDelete, id));
}

const clearAll = () =>
    document
        .querySelectorAll(".form-control")
        .forEach((txtBox) => (txtBox.value = ""));

// const focus = (fieldId) => document.querySelector("#" + fieldId).focus();
