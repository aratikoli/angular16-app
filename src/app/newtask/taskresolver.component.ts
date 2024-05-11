


import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Task } from "./task.model";
import { TaskDataService } from "./taskdata.service";
import { DataStorageService } from "../data-storage.service";

@Injectable({
    providedIn:'root'
})
export class TaskResolverService{

    constructor(private dataStorageService:DataStorageService,private taskdata:TaskDataService){

    }

    resolve(route:ActivatedRouteSnapshot, state:RouterStateSnapshot)
    {
       const tasks=this.taskdata.getTasks();

       if(tasks.length===0){
        return this.dataStorageService.fetchData(); 
       }
       else{
        return tasks;
       }
        
    }

}