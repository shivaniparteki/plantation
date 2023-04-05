import { taskOperation } from "./part-three-A-taskOperations.js";

window.addEventListener("load", init);

function init() {
    bindEvents();
    focus("name");
}

function bindEvents() {
    document.querySelector("#addJ").addEventListener("click", addTask);
    document.querySelector("#delete").addEventListener("click", deleteTask);
}

function deleteTask() {
    console.log("delete")
}

function addTask() {
    // Reading the fields
    let chronologicalFinancialYear = document.querySelector("#chronological-financial-year").value;
    let startingDate = document.querySelector("#starting-ending-date").value;
    let workDone = document.querySelector("#summary-work-done").value;
    let mandays = document.querySelector("#mandays").value;
    let chronologicalCost = document.querySelector("#chronological-cost").value;
    let chronologicalRemarks = document.querySelector("#chronological-remarks").value;

    const task = taskOperation.add(chronologicalFinancialYear, startingDate, workDone, mandays, chronologicalCost, chronologicalRemarks);
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
    const tbody = document.querySelector("#chronological-tasks");
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
