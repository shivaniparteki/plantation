// CRUD
import Task from "./part-two-A-task.js";
export const taskOperation = {
    tasks: [],
    add(plantationStart, plantationType, method, species, seedlingUsed, transplant, spacing, labour) {
        let task = new Task(plantationStart, plantationType, method, species, seedlingUsed, transplant, spacing, labour);
        this.tasks.push(task);
        console.log("Task Added", this.tasks);
        return task;
    },
    getAllTask() {
        return this.tasks;
    }
};
