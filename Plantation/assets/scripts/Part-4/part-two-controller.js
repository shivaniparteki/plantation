import { taskOperation } from "./part-four-taskOperations.js";

window.addEventListener("load", init);

function init() {
    bindEvents();
    focus("name");
}

function bindEvents() {
    document.querySelector("#addF").addEventListener("click", addTask);
    document.querySelector("#delete").addEventListener("click", deleteTask);
}

function deleteTask() {
    console.log("delete")
}

function addTask() {
    // Reading the fields
    let summaryFinancialYear = document.querySelector("#summary-expenditure-financial-year").value;
    let expenditureFinancialYear = document.querySelector("#expenditure-financial-year").value;
    let expenditureCommencement = document.querySelector("#expenditure-commencement").value;
    let mandaysYear = document.querySelector("#mandays-year").value;
    let mandaysCommencement = document.querySelector("#mandays-commencement").value;
    let sourceFund = document.querySelector("#source-fund").value;

    const task = taskOperation.add(summaryFinancialYear, expenditureFinancialYear, expenditureCommencement, mandaysYear, mandaysCommencement, sourceFund);
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
    const tbody = document.querySelector("#expenditure-detail-tasks");
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
