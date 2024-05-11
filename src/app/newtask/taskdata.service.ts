import { Injectable } from "@angular/core";
import { Task } from "./task.model";
import { Subject } from "rxjs";


@Injectable({
    providedIn:'root'
})
export class TaskDataService {
    constructor()
    {

    }
    taskChanged=new  Subject<Task[]>();
    private allTask:Task[]=[];
    // private allTask:Task[]=[new Task('study','Angular study','high', 
    // new Date('Wed May 31 2023 08:26:18 GMT+0100 (West Africa Standard Time'))]
 
     addNewTask(ntask:Task)
    {
        
        this.allTask.push(ntask);
        this.taskChanged.next(this.allTask.slice());

    }

    getTasks()
    {
        return this.allTask.slice();
    }
    
    setTasks(tasks:Task[])
    {
        this.allTask=tasks;
        this.taskChanged.next(this.allTask.slice());
  
    }
    deleteTasks(index:number)
    {
        if (index !== -1) {
            this.allTask.splice(index, 1);
          }
          this.taskChanged.next(this.allTask.slice());
    }
    updateTask(index:number,newTask:Task)
    {
        console.log(newTask);
        this.allTask[index]=newTask;
        this.taskChanged.next(this.allTask.slice());
    }
    getTask(index:number)
    {
        return this.allTask[index];
    }


}