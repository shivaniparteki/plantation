// CRUD
import Task from "./part-three-B-task.js";

export const taskOperation = {
    tasks: [],
    add(yearStartDate, yearEndDate, yearArea, yearTotalCost, yearCostHa, yearRemarks) {
        let task = new Task(yearStartDate, yearEndDate, yearArea, yearTotalCost, yearCostHa, yearRemarks);
        this.tasks.push(task);
        console.log("Task Added", this.tasks);
        return task;
    },
    getAllTask() {
        return this.tasks;
    }
};
