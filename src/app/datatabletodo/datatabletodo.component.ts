import { Component, OnDestroy, OnInit } from '@angular/core';
import { Task } from '../newtask/task.model';
import { TaskDataService } from '../newtask/taskdata.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-datatabletodo',
  templateUrl: './datatabletodo.component.html',
  styleUrls: ['./datatabletodo.component.css']
})
export class DataTableToDo implements OnInit{
  tasks:Task[] = [];
  displayedColumns: string[] = ['taskName', 'taskDescription', 'priority', 'taskDate','actions'];
  submittedSuccessfully: boolean = false;
  selectedTask: any = null; // Track the selected task for editing
  id: number;
  constructor(private taskDataService:TaskDataService, private router:Router,private route:ActivatedRoute)
  { }
  ngOnInit(): void {
    {
      this.tasks=this.taskDataService.getTasks();
      this.taskDataService.taskChanged
        .subscribe(
          (tasks: Task[]) => {
            this.tasks = tasks;
          }
        );
      this.tasks = this.taskDataService.getTasks();

      
    }
}

  onDeleteTask(task: any) {
    const index = this.tasks.indexOf(task);
    this.taskDataService.deleteTasks(index);
  }

  onEditTask(id:number) {
      this.router.navigate([id, 'edit'], { relativeTo: this.route });
  
  }

  onSaveTaskEdit() {
    this.selectedTask = null; 
  }

  onCancelTaskEdit() {
    this.selectedTask = null;
  }
  
}