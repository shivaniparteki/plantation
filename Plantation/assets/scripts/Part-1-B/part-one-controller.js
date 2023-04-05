import { taskOperation } from "./part-one-B-taskOperations.js";

window.addEventListener("load", init);

function init() {
    bindEvents();
    focus("name");
}

function bindEvents() {
    document.querySelector("#addB").addEventListener("click", addTask);
    document.querySelector("#delete").addEventListener("click", deleteTask);
}

function deleteTask() {
    console.log("delete")
}

function addTask() {
    // Reading the fields
    let location = document.querySelector("#location").value;
    let slope = document.querySelector("#slope").value;
    let existingVegetation = document.querySelector("#existing-vegetation").value;
    let soilDepth = document.querySelector("#soil-depth").value;
    let catchment = document.querySelector("#catchment").value;
    let remarks = document.querySelector("#remarks").value;

    const task = taskOperation.add(location, slope, existingVegetation, soilDepth, catchment, remarks);
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
    const tbody = document.querySelector("#tasks");
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
