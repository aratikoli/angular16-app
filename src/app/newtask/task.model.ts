export class Task{
   private static lastId: number = 0;
   public id: number;
   public taskName:string;
   public taskDescription:string;
   public priority:string;
   public  taskDate:Date;


   constructor(name:string,description:string,priority:string,date:Date)
   {
      this.id = Task.getNextId();
    this.taskName=name;
    this.taskDescription=description;
    this.priority=priority;
    this.taskDate=date;
   }

   private static getNextId(): number {
      return ++Task.lastId;
  }


}