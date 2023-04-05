import { taskOperation } from "./part-two-B-taskOperations.js";

window.addEventListener("load", init);

function init() {
    bindEvents();
    focus("name");
}

function bindEvents() {
    document.querySelector("#addD").addEventListener("click", addTask);
    document.querySelector("#delete").addEventListener("click", deleteTask);
}

function deleteTask() {
    console.log("delete")
}

function addTask() {
    // Reading the fields
    let plantedSpecies = document.querySelector("#planted-species").value;
    let spacing = document.querySelector("#species-spacing").value;
    let totalSeedling = document.querySelector("#total-seedling").value;
    let speciesArea = document.querySelector("#species-area").value;
    let speciesRemarks = document.querySelector("#species-remarks").value;

    const task = taskOperation.add(plantedSpecies, spacing, totalSeedling, speciesArea, speciesRemarks);
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
    const tbody = document.querySelector("#species-tasks");
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
