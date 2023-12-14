import { Task } from "../model/Task";

class TaskDatasource{
    constructor(){
        this.tasks = [/*new Task(0, "Test", 2, false, "")*/];
        this.idCounter = 1;
    }

    addTask(addTaskDTO){
        this.tasks.push(new Task(this.idCounter++, addTaskDTO.name, addTaskDTO.time, false, ""));
        
        console.log("task added:", this.tasks.at(this.tasks.length-1));
    }

    complete(task){
        this.tasks.forEach(i => {
            if(i.id === task.id){
                i.isCompleted = true;
            }
        });
    }

    updateDescription(id, description){
        let updatedCount = 0;
        for (const task of this.tasks) {
            if (task.id === id) {
              task.description = description;
              updatedCount++;
            }
        }
        console.log("Updated rows:", updatedCount);
    }

    findById(id){
        for (const task of this.tasks) {
            if (task.id === id) {
              return task;
            }
        }

        return null;
    }

    getTasks(){
        return this.tasks;
    }

}


export const taskDatasource = new TaskDatasource();

