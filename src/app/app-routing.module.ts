import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NewTaskComponent } from './newtask/newtask.component';
import { TaskeditComponent } from './taskedit/taskedit.component';
import { DataTableToDo } from './datatabletodo/datatabletodo.component';
import { AuthComponent } from './auth/auth.component';



const routes:Routes=[{path:'newtask', component:NewTaskComponent},
{path:'viewtask', component:DataTableToDo, 
children:[{path:':id/edit',
    component: TaskeditComponent} 
  ]},
  {
    path:'auth', component:AuthComponent
  }];
@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})

export class AppRotingModule { 

}
