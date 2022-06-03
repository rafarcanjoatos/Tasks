import { TasksService } from '../../services/tasks.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tasks-read',
  templateUrl: './tasks-read.component.html',
  styleUrls: ['./tasks-read.component.css']
})

export class TasksReadComponent  implements OnInit{
  @Input() tasks : any;
  displayedColumns = ['id','listId','title'];

  constructor(private tasksService: TasksService) { }  

  ngOnInit(): void {
    try{
      this.tasksService.getTasks().subscribe((tasks) => {
        this.tasks = tasks;
        console.log(tasks);
        return this.tasks;
      });
    }
    catch (exception){
        console.log("Erro ao importar Tarefas");
    }
  }    
}