// CRUD
import Task from "./part-one-B-task.js";
export const taskOperation = {
    tasks: [],
    add(location, slope, existingVegetation, soilDepth, catchment, remarks) {
        let task = new Task(location, slope, existingVegetation, soilDepth, catchment, remarks);
        this.tasks.push(task);
        console.log("Task Added", this.tasks);
        return task;
    },
    getAllTask() {
        return this.tasks;
    }
};
