import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { TaskDataService } from '../newtask/taskdata.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-taskedit',
  templateUrl: './taskedit.component.html',
  styleUrls: ['./taskedit.component.css']
})
export class TaskeditComponent implements OnInit {
  id: number;
  editMode = false;
  taskForm:FormGroup;
   

  constructor(private route: ActivatedRoute, private taskDataService:TaskDataService,private router:Router) { }

  
  ngOnInit() {
    this.route.params
      .subscribe(
        (params:Params) => {
          this.id = +params['id'];
          //console.log(this.id);
          this.editMode = params['id'] != null;
          this.initForm();
        }
      );
  }
  

 onSubmit()
 {
  // const newRecipe=new Recipe(this.recipeForm.value['name'],
  // this.recipeForm.value['description'],this.recipeForm.value['imagePath'],
  // this.recipeForm.value['ingredients']);
  if(this.editMode)
  {
    this.taskDataService.updateTask(this.id,this.taskForm.value);
  }
  window.location.reload();
  this.onCancel();
  
 }
  private initForm()
  {
       let task_Name='';
       let task_Description='';
       let task_Date;
       let task_Priority='';
      

      const task=this.taskDataService.getTask(this.id);
      task_Name=task.taskName
      task_Description=task.taskDescription;
      task_Date=task.taskDate;
      task_Priority=task.priority;
      

    this.taskForm=new FormGroup({
      'name':new FormControl(task_Name,Validators.required),
      'description':new FormControl(task_Description,Validators.required),
      'date':new FormControl(task_Date,Validators.required),
      'priority':new FormControl(task_Priority,Validators.required),
     
    });
  }
  
  
  onCancel()
  {
    this.router.navigate(['../'],{relativeTo:this.route});
  }

}
