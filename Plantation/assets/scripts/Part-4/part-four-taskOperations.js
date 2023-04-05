// CRUD
import Task from "./part-four-task.js";

export const taskOperation = {
    tasks: [],
    add(summaryFinancialYear, expenditureFinancialYear, expenditureCommencement, mandaysYear, mandaysCommencement, sourceFund) {
        let task = new Task(summaryFinancialYear, expenditureFinancialYear, expenditureCommencement, mandaysYear, mandaysCommencement, sourceFund);
        this.tasks.push(task);
        console.log("Task Added", this.tasks);
        return task;
    },
    getAllTask() {
        return this.tasks;
    }
};
