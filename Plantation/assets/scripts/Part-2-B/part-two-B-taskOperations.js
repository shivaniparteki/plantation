// CRUD
import Task from "./part-two-B-task.js";

export const taskOperation = {
    tasks: [],
    add(plantedSpecies, spacing, totalSeedling, speciesArea, speciesRemarks) {
        let task = new Task(plantedSpecies, spacing, totalSeedling, speciesArea, speciesRemarks);
        this.tasks.push(task);
        console.log("Task Added", this.tasks);
        return task;
    },
    getAllTask() {
        return this.tasks;
    }
};
