import { taskOperation } from "./part-three-B-taskOperations.js";

window.addEventListener("load", init);

function init() {
    bindEvents();
    focus("name");
}

function bindEvents() {
    document.querySelector("#addK").addEventListener("click", addTask);
    document.querySelector("#delete").addEventListener("click", deleteTask);
}

function deleteTask() {
    console.log("delete")
}

function addTask() {
    // Reading the fields
    let yearStartDate = document.querySelector("#year-start-date").value;
    let yearEndDate = document.querySelector("#year-end-date").value;
    let yearArea = document.querySelector("#year-area").value;
    let yearTotalCost = document.querySelector("#year-total-cost").value;
    let yearCostHa = document.querySelector("#year-cost-ha").value;
    let yearRemarks = document.querySelector("#year-remarks").value;

    const task = taskOperation.add(yearStartDate, yearEndDate, yearArea, yearTotalCost, yearCostHa, yearRemarks);
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
    const tbody = document.querySelector("#year-tasks");
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
