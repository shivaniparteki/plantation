// CRUD
import Task from "./part-one-A-task.js";
export const taskOperation = {
    tasks: [],
    add(division, range, beat, areaType, planationShape, planationYear, planationArea, areaMap) {
        let task = new Task(division, range, beat, areaType, planationShape, planationYear, planationArea, areaMap);
        this.tasks.push(task);
        console.log("Task Added", this.tasks);
        return task;
    },
    getAllTask() {
        return this.tasks;
    }
};
