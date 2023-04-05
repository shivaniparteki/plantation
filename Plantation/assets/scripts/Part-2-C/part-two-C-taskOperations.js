// CRUD
import Task from "./part-two-C-task.js";

export const taskOperation = {
    tasks: [],
    add(financialYear, saplingSurviving, saplingDied, saplingPlanted, firstPlanation) {
        let task = new Task(financialYear, saplingSurviving, saplingDied, saplingPlanted, firstPlanation);
        this.tasks.push(task);
        console.log("Task Added", this.tasks);
        return task;
    },
    getAllTask() {
        return this.tasks;
    }
};
