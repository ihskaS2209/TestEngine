import {Task} from "./task.js";
export var taskOperation = {
    tasks:[],
    add(quesid, quesname, optA, optB, optC, optD, rightans){
        var task = new Task(quesid, quesname, optA, optB, optC, optD, rightans);
        this.tasks.push(task);
        return task;
    }
}