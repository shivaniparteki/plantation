import { taskOperation } from "./part-one-A-taskOperations.js";

window.addEventListener("load", init);

function init() {
    bindEvents();
    focus("name");
}

function bindEvents() {
    document.querySelector("#addA").addEventListener("click", addTask);
    document.querySelector("#delete").addEventListener("click", deleteTask);
}

function deleteTask() {
    console.log("delete")
}

function addTask() {
    // Reading the fields
    let division = document.querySelector("#division").value;
    let range = document.querySelector("#range").value;
    let beat = document.querySelector("#beat").value;
    let areaType = document.querySelector("#area-type").value;
    let planationShape = document.querySelector("#planation-shape").value;
    let planationYear = document.querySelector("#planation-year").value;
    let planationArea = document.querySelector("#planation-area").value;
    let areaMap = document.querySelector("#area-map").value;

    const task = taskOperation.add(division, range, beat, areaType, planationShape, planationYear, planationArea, areaMap);
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
    const tbody = document.querySelector("#planationArea");
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
