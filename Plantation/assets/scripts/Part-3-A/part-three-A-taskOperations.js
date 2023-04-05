// CRUD
import Task from "./part-three-A-task.js";

export const taskOperation = {
    tasks: [],
    add(chronologicalFinancialYear, startingDate, workDone, mandays, chronologicalCost, chronologicalRemarks) {
        let task = new Task(chronologicalFinancialYear, startingDate, workDone, mandays, chronologicalCost, chronologicalRemarks);
        this.tasks.push(task);
        console.log("Task Added", this.tasks);
        return task;
    },
    getAllTask() {
        return this.tasks;
    }
};
