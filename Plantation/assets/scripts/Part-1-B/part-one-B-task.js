import { taskOperation } from "./part-one-B-taskOperations.js";

class Task {
    constructor(location, slope, existingVegetation, soilDepth, catchment, remarks) {
        this.location = location;
        this.slope = slope;
        this.existingVegetation = existingVegetation;
        this.soilDepth =soilDepth;
        this.catchment =catchment;
        this.remarks = remarks;
    }
  }
  
  export default Task;
  