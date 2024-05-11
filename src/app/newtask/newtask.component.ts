import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Task } from './task.model';
import { TaskDataService } from './taskdata.service';
import { DataStorageService } from '../data-storage.service';
//import { TaskDataService } from './taskdata.service';

@Component({
  selector: 'app-newtask',
  templateUrl: './newtask.component.html',
  styleUrls: ['./newtask.component.css']
})
export class NewTaskComponent implements OnInit {
 // private cmpTask:Task[]=[];

 submittedSuccessfully: boolean = false;
  constructor(private taskDataService:TaskDataService, private dataStorageService:DataStorageService)
  {

  }

  ngOnInit()
  {
      //  this.taskDataService.taskChanged.subscribe(
      //  (task: Task[]) => {
      // this.cmpTask = task;
      //   }
      // );
  }
  onAddTask(form:NgForm)
  {
    const tname=form.value.newtask;
    const tdes=form.value.description;
    const priority=form.value.priority;
    const date=form.value.date;
    //const ndate=date.toDateString();
  const newtask =new Task(tname,tdes,priority,date);
  //console.log(newtask);

 // this.dataStorageService.saveData(newtask);
 this.taskDataService.addNewTask(newtask);
 this.submittedSuccessfully = true;
    
  }
  

}
