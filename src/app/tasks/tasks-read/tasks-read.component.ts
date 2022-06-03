import { TasksService } from '../../services/tasks.service';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { Tasks } from './../tasks';

@Component({
  selector: 'app-tasks-read',
  templateUrl: './tasks-read.component.html',
  styleUrls: ['./tasks-read.component.css']
})

export class TasksReadComponent {
  tasks : any;
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
        console.log("Erro ao importar Listas");
    }
  }    
}