// CRUD
import Task from "./part-five-task.js";

export const taskOperation = {
    tasks: [],
    add(inspectorDesignation, inspectionDate, observation, signatureRemarks) {
        let task = new Task(inspectorDesignation, inspectionDate, observation, signatureRemarks);
        this.tasks.push(task);
        console.log("Task Added", this.tasks);
        return task;
    },
    getAllTask() {
        return this.tasks;
    }
};
