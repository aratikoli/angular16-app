import { HttpClient } from "@angular/common/http";
import { Injectable, OnInit } from "@angular/core";
import { TaskDataService } from "./newtask/taskdata.service";
import { Task } from "./newtask/task.model";
import { map, tap } from "rxjs";


@Injectable({providedIn:"root"})
export class DataStorageService {

   //newTask:Task[]=[];

    constructor(private httpClient:HttpClient,private taskDataService:TaskDataService){

    }
    saveData()
    {
        const tasks=this.taskDataService.getTasks();
        //this.newTask=this.taskDataService.getTask();

        const savedData=this.httpClient.put('https://todolist-45acc-default-rtdb.firebaseio.com/task.json',
        tasks).subscribe((resData)=>{console.log(resData)});
    }
    fetchData()
    {   
        return this.httpClient.get<Task[]>
        ('https://todolist-45acc-default-rtdb.firebaseio.com/task.json'
        ).pipe(map(tasks=>{
            return tasks.map(task=>{
                this.taskDataService.setTasks(tasks);
            })
        }));
    }
    

}